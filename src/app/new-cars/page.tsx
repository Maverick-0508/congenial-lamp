"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import { cars, bodyTypes, fuelTypes, transmissions, locations, formatPrice } from "@/data/cars";
import CarCard from "@/components/CarCard";

function NewCarsContent() {
  const searchParams = useSearchParams();
  const initialMake = searchParams.get("make") || "";
  const initialType = searchParams.get("type") || "all";
  const initialBodyType = searchParams.get("bodyType") || "";

  const [selectedType, setSelectedType] = useState<string>(initialType);
  const [selectedMake, setSelectedMake] = useState<string>(initialMake);
  const [selectedBodyType, setSelectedBodyType] = useState<string>(initialBodyType);
  const [selectedFuel, setSelectedFuel] = useState<string>("");
  const [selectedTransmission, setSelectedTransmission] = useState<string>("");
  const [selectedLocation, setSelectedLocation] = useState<string>("");
  const [minPrice, setMinPrice] = useState<string>("");
  const [maxPrice, setMaxPrice] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("featured");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);

  const allMakes = Array.from(new Set(cars.map(c => c.make))).sort();

  const filtered = useMemo(() => {
    let result = [...cars];

    if (selectedType === "new") result = result.filter(c => c.type === "new");
    else if (selectedType === "used") result = result.filter(c => c.type === "used");

    if (selectedMake) result = result.filter(c => c.make === selectedMake);
    if (selectedBodyType) result = result.filter(c => c.bodyType === selectedBodyType);
    if (selectedFuel) result = result.filter(c => c.fuelType === selectedFuel);
    if (selectedTransmission) result = result.filter(c => c.transmission === selectedTransmission);
    if (selectedLocation) result = result.filter(c => c.location === selectedLocation);
    if (minPrice) result = result.filter(c => c.price >= parseInt(minPrice));
    if (maxPrice) result = result.filter(c => c.price <= parseInt(maxPrice));
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(c => 
        c.make.toLowerCase().includes(q) || 
        c.model.toLowerCase().includes(q) ||
        c.description.toLowerCase().includes(q)
      );
    }

    switch (sortBy) {
      case "price-asc": result.sort((a, b) => a.price - b.price); break;
      case "price-desc": result.sort((a, b) => b.price - a.price); break;
      case "rating": result.sort((a, b) => b.rating - a.rating); break;
      case "newest": result.sort((a, b) => b.year - a.year); break;
    }

    return result;
  }, [selectedType, selectedMake, selectedBodyType, selectedFuel, selectedTransmission, selectedLocation, minPrice, maxPrice, sortBy, searchQuery]);

  const clearFilters = () => {
    setSelectedType("all");
    setSelectedMake("");
    setSelectedBodyType("");
    setSelectedFuel("");
    setSelectedTransmission("");
    setSelectedLocation("");
    setMinPrice("");
    setMaxPrice("");
    setSearchQuery("");
  };

  const hasFilters = selectedType !== "all" || selectedMake || selectedBodyType || selectedFuel || selectedTransmission || selectedLocation || minPrice || maxPrice || searchQuery;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Cars for Sale in Kenya</h1>
        <p className="text-gray-500">Browse {cars.length}+ new and used cars from trusted dealers</p>
      </div>

      {/* Type Tabs */}
      <div className="flex gap-2 mb-6 bg-gray-100 p-1 rounded-xl w-fit">
        {[
          { value: "all", label: "All Cars" },
          { value: "new", label: "New Cars" },
          { value: "used", label: "Used Cars" },
        ].map(tab => (
          <button
            key={tab.value}
            onClick={() => setSelectedType(tab.value)}
            className={`px-4 py-2 rounded-lg text-sm font-semibold transition-colors ${selectedType === tab.value ? "bg-white shadow-sm text-gray-900" : "text-gray-600 hover:text-gray-900"}`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="flex gap-8">
        {/* Sidebar Filters - Desktop */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 p-5 sticky top-24">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-gray-900">Filters</h2>
              {hasFilters && (
                <button onClick={clearFilters} className="text-xs text-green-600 hover:text-green-700 font-medium">Clear all</button>
              )}
            </div>

            {/* Search */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Search</label>
              <input
                type="text"
                placeholder="Make, model..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Make */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Make</label>
              <select value={selectedMake} onChange={e => setSelectedMake(e.target.value)} className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                <option value="">All Makes</option>
                {allMakes.map(m => <option key={m} value={m}>{m}</option>)}
              </select>
            </div>

            {/* Body Type */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Body Type</label>
              <div className="flex flex-wrap gap-2">
                {bodyTypes.map(bt => (
                  <button
                    key={bt}
                    onClick={() => setSelectedBodyType(selectedBodyType === bt ? "" : bt)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${selectedBodyType === bt ? "bg-green-600 text-white border-green-600" : "border-gray-200 text-gray-600 hover:border-green-400"}`}
                  >
                    {bt}
                  </button>
                ))}
              </div>
            </div>

            {/* Fuel Type */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Fuel Type</label>
              <div className="flex flex-wrap gap-2">
                {fuelTypes.map(ft => (
                  <button
                    key={ft}
                    onClick={() => setSelectedFuel(selectedFuel === ft ? "" : ft)}
                    className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${selectedFuel === ft ? "bg-green-600 text-white border-green-600" : "border-gray-200 text-gray-600 hover:border-green-400"}`}
                  >
                    {ft}
                  </button>
                ))}
              </div>
            </div>

            {/* Price Range */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Price Range (KES)</label>
              <div className="flex gap-2">
                <input type="number" placeholder="Min" value={minPrice} onChange={e => setMinPrice(e.target.value)} className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                <input type="number" placeholder="Max" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
              </div>
            </div>

            {/* Transmission */}
            <div className="mb-5">
              <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Transmission</label>
              <select value={selectedTransmission} onChange={e => setSelectedTransmission(e.target.value)} className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                <option value="">Any</option>
                {transmissions.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>

            {/* Location */}
            <div className="mb-2">
              <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">Location</label>
              <select value={selectedLocation} onChange={e => setSelectedLocation(e.target.value)} className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                <option value="">All Kenya</option>
                {locations.map(l => <option key={l} value={l}>{l}</option>)}
              </select>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 min-w-0">
          {/* Toolbar */}
          <div className="flex items-center justify-between mb-6 gap-4">
            <div className="flex items-center gap-3">
              <button onClick={() => setShowFilters(!showFilters)} className="lg:hidden flex items-center gap-2 text-sm font-medium border border-gray-200 rounded-xl px-4 py-2 hover:bg-gray-50 transition-colors">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
                </svg>
                Filters
                {hasFilters && <span className="w-2 h-2 bg-green-600 rounded-full"></span>}
              </button>
              <p className="text-sm text-gray-500 font-medium">{filtered.length} cars found</p>
            </div>
            <div className="flex items-center gap-2">
              <label className="text-xs font-medium text-gray-600">Sort:</label>
              <select value={sortBy} onChange={e => setSortBy(e.target.value)} className="border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                <option value="featured">Featured</option>
                <option value="price-asc">Price: Low to High</option>
                <option value="price-desc">Price: High to Low</option>
                <option value="rating">Top Rated</option>
                <option value="newest">Newest First</option>
              </select>
            </div>
          </div>

          {/* Mobile Filters */}
          {showFilters && (
            <div className="lg:hidden bg-white rounded-2xl border border-gray-100 p-5 mb-6">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">Make</label>
                  <select value={selectedMake} onChange={e => setSelectedMake(e.target.value)} className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none bg-white">
                    <option value="">All Makes</option>
                    {allMakes.map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">Body Type</label>
                  <select value={selectedBodyType} onChange={e => setSelectedBodyType(e.target.value)} className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none bg-white">
                    <option value="">All Types</option>
                    {bodyTypes.map(bt => <option key={bt} value={bt}>{bt}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">Min Price (KES)</label>
                  <input type="number" placeholder="0" value={minPrice} onChange={e => setMinPrice(e.target.value)} className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2">Max Price (KES)</label>
                  <input type="number" placeholder="Any" value={maxPrice} onChange={e => setMaxPrice(e.target.value)} className="w-full border border-gray-200 rounded-xl px-3 py-2 text-sm focus:outline-none" />
                </div>
              </div>
              {hasFilters && (
                <button onClick={clearFilters} className="mt-3 text-sm text-green-600 hover:text-green-700 font-medium">Clear all filters</button>
              )}
            </div>
          )}

          {/* Results */}
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No cars found</h3>
              <p className="text-gray-500 mb-6">Try adjusting your filters to find more cars.</p>
              <button onClick={clearFilters} className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors">
                Clear Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
              {filtered.map(car => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function NewCarsPage() {
  return (
    <Suspense fallback={<div className="flex items-center justify-center min-h-screen"><div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div></div>}>
      <NewCarsContent />
    </Suspense>
  );
}
