"use client";

import { useState } from "react";
import { cars, formatPrice } from "@/data/cars";
import Image from "next/image";
import Link from "next/link";
import StarRating from "@/components/StarRating";

const SPEC_ROWS = [
  { key: "price", label: "Price", format: (v: unknown) => formatPrice(v as number) },
  { key: "year", label: "Year", format: (v: unknown) => String(v) },
  { key: "bodyType", label: "Body Type", format: (v: unknown) => String(v) },
  { key: "engineSize", label: "Engine", format: (v: unknown) => String(v) },
  { key: "horsepower", label: "Horsepower", format: (v: unknown) => `${v} hp` },
  { key: "fuelType", label: "Fuel Type", format: (v: unknown) => String(v) },
  { key: "transmission", label: "Transmission", format: (v: unknown) => String(v) },
  { key: "seats", label: "Seats", format: (v: unknown) => `${v} seats` },
  { key: "mpg", label: "Fuel Economy", format: (v: unknown) => v ? `${v} km/L` : "N/A" },
  { key: "co2", label: "CO₂ Emissions", format: (v: unknown) => v ? `${v} g/km` : "N/A" },
  { key: "rating", label: "User Rating", format: (v: unknown) => `${v}/5` },
];

export default function ComparePage() {
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const [searchQueries, setSearchQueries] = useState<string[]>(["", ""]);
  const maxCars = 3;

  const selectedCars = selectedIds.map(id => cars.find(c => c.id === id)!).filter(Boolean);

  const addCar = (carId: string, slot: number) => {
    const newIds = [...selectedIds];
    if (slot < newIds.length) {
      newIds[slot] = carId;
    } else {
      newIds.push(carId);
    }
    setSelectedIds(newIds);
  };

  const removeCar = (slot: number) => {
    setSelectedIds(prev => prev.filter((_, i) => i !== slot));
  };

  const getFilteredCars = (query: string, slot: number) => {
    const q = query.toLowerCase();
    return cars
      .filter(c => !selectedIds.includes(c.id) || selectedIds[slot] === c.id)
      .filter(c => !query || c.make.toLowerCase().includes(q) || c.model.toLowerCase().includes(q))
      .slice(0, 8);
  };

  const renderSlot = (slot: number) => {
    const car = selectedCars[slot];
    if (car) {
      return (
        <div className="relative">
          <button
            onClick={() => removeCar(slot)}
            className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full text-xs z-10 hover:bg-red-600 transition-colors flex items-center justify-center"
          >
            ✕
          </button>
          <div className="bg-white rounded-2xl border border-green-200 overflow-hidden">
            <div className="relative h-40 bg-gray-100">
              <Image src={car.image} alt={car.model} fill className="object-cover" />
            </div>
            <div className="p-4">
              <p className="text-xs text-gray-500">{car.year} • {car.type}</p>
              <p className="font-bold text-gray-900">{car.make} {car.model}</p>
              <p className="text-green-600 font-bold text-lg mt-1">{formatPrice(car.price)}</p>
              <div className="flex items-center gap-1 mt-1">
                <StarRating rating={car.rating} size="sm" />
                <span className="text-xs text-gray-500">({car.reviewCount})</span>
              </div>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="bg-gray-50 rounded-2xl border-2 border-dashed border-gray-200 p-5">
        <p className="text-sm font-semibold text-gray-600 mb-3 text-center">Select a car</p>
        <input
          type="text"
          placeholder="Search make or model..."
          value={searchQueries[slot] || ""}
          onChange={e => {
            const q = [...searchQueries];
            q[slot] = e.target.value;
            setSearchQueries(q);
          }}
          className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 mb-3"
        />
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {getFilteredCars(searchQueries[slot] || "", slot).map(c => (
            <button
              key={c.id}
              onClick={() => addCar(c.id, slot)}
              className="w-full flex items-center gap-3 p-2 rounded-xl hover:bg-green-50 hover:text-green-700 text-left transition-colors"
            >
              <div className="relative w-12 h-9 rounded-lg overflow-hidden bg-gray-200 flex-shrink-0">
                <Image src={c.image} alt={c.model} fill className="object-cover" sizes="48px" />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">{c.make} {c.model}</p>
                <p className="text-xs text-gray-500">{c.year} • {formatPrice(c.price)}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  const slots = Math.max(2, selectedIds.length + (selectedIds.length < maxCars ? 1 : 0));

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <p className="text-green-600 text-sm font-semibold uppercase tracking-wide mb-1">Side-by-Side</p>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Compare Cars</h1>
        <p className="text-gray-500">Select up to 3 cars to compare side-by-side. Find the perfect match for your needs.</p>
      </div>

      {/* Car Selectors */}
      <div className={`grid gap-4 mb-8 ${slots === 2 ? "grid-cols-2" : "grid-cols-3"}`}>
        {Array.from({ length: slots }).map((_, i) => (
          <div key={i}>{renderSlot(i)}</div>
        ))}
      </div>

      {/* Comparison Table */}
      {selectedCars.length >= 2 && (
        <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-100 bg-gray-50">
                  <th className="text-left py-4 px-5 font-semibold text-gray-700 w-36">Specification</th>
                  {selectedCars.map(car => (
                    <th key={car.id} className="py-4 px-5 text-center">
                      <p className="font-bold text-gray-900">{car.make}</p>
                      <p className="text-gray-500 font-normal text-xs">{car.model}</p>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SPEC_ROWS.map((row, ri) => {
                  const values = selectedCars.map(c => (c as unknown as Record<string, unknown>)[row.key]);
                  const numericValues = values.map(v => typeof v === "number" ? v : null);
                  
                  let bestIdx = -1;
                  if (numericValues.every(v => v !== null)) {
                    if (row.key === "price" || row.key === "co2") {
                      bestIdx = numericValues.indexOf(Math.min(...(numericValues as number[])));
                    } else {
                      bestIdx = numericValues.indexOf(Math.max(...(numericValues as number[])));
                    }
                  }

                  return (
                    <tr key={row.key} className={`border-b border-gray-50 ${ri % 2 === 0 ? "" : "bg-gray-50/50"}`}>
                      <td className="py-4 px-5 font-medium text-gray-700">{row.label}</td>
                      {selectedCars.map((car, ci) => {
                        const val = (car as unknown as Record<string, unknown>)[row.key];
                        const formatted = row.format(val);
                        const isBest = ci === bestIdx;
                        return (
                          <td key={car.id} className={`py-4 px-5 text-center font-semibold ${isBest ? "text-green-600" : "text-gray-900"}`}>
                            {isBest && <span className="text-xs bg-green-100 text-green-600 px-1.5 py-0.5 rounded-full mr-1">Best</span>}
                            {formatted}
                          </td>
                        );
                      })}
                    </tr>
                  );
                })}

                {/* Features comparison */}
                <tr className="border-b border-gray-50">
                  <td className="py-4 px-5 font-medium text-gray-700">Key Features</td>
                  {selectedCars.map(car => (
                    <td key={car.id} className="py-4 px-5">
                      <ul className="space-y-1">
                        {car.features.slice(0, 4).map(f => (
                          <li key={f} className="text-xs text-gray-600 flex items-start gap-1.5">
                            <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            {f}
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>

                {/* CTA Row */}
                <tr>
                  <td className="py-4 px-5"></td>
                  {selectedCars.map(car => (
                    <td key={car.id} className="py-4 px-5 text-center">
                      <Link href={`/cars/${car.id}`} className="bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-5 py-2 rounded-xl transition-colors inline-block">
                        View Deal
                      </Link>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      )}

      {selectedCars.length < 2 && (
        <div className="text-center py-16 text-gray-400">
          <div className="text-6xl mb-4">⚖️</div>
          <p className="text-lg font-semibold text-gray-600">Select at least 2 cars to compare</p>
          <p className="text-sm mt-1">Use the search boxes above to find and select cars</p>
        </div>
      )}
    </div>
  );
}
