import Link from "next/link";
import Image from "next/image";
import { Car, formatPrice, formatMileage } from "@/data/cars";
import StarRating from "./StarRating";

interface CarCardProps {
  car: Car;
  featured?: boolean;
}

export default function CarCard({ car, featured = false }: CarCardProps) {
  return (
    <Link href={`/cars/${car.id}`} className="group block">
      <div className={`bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-lg hover:border-green-200 transition-all duration-300 ${featured ? "h-full" : ""}`}>
        {/* Image */}
        <div className="relative overflow-hidden bg-gray-100" style={{ height: featured ? "220px" : "180px" }}>
          <Image
            src={car.image}
            alt={`${car.year} ${car.make} ${car.model}`}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {/* Badge */}
          {car.badge && (
            <div className="absolute top-3 left-3">
              <span className="bg-green-600 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                {car.badge}
              </span>
            </div>
          )}
          {/* Type badge */}
          <div className="absolute top-3 right-3">
            <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${car.type === "new" ? "bg-blue-600 text-white" : "bg-amber-500 text-white"}`}>
              {car.type === "new" ? "New" : "Used"}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {/* Title & Rating */}
          <div className="flex items-start justify-between gap-2 mb-1">
            <h3 className="font-bold text-gray-900 text-base leading-tight group-hover:text-green-600 transition-colors">
              {car.year} {car.make} {car.model}
            </h3>
          </div>

          <div className="flex items-center gap-1.5 mb-3">
            <StarRating rating={car.rating} size="sm" />
            <span className="text-xs text-gray-500">({car.reviewCount})</span>
          </div>

          {/* Specs pills */}
          <div className="flex flex-wrap gap-1.5 mb-3">
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{car.bodyType}</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{car.fuelType}</span>
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{car.transmission}</span>
            {car.mileage && (
              <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{formatMileage(car.mileage)}</span>
            )}
          </div>

          {/* Location */}
          <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            {car.location}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-lg font-bold text-gray-900">{formatPrice(car.price)}</p>
              {car.type === "new" && (
                <p className="text-xs text-gray-400">OTR price</p>
              )}
            </div>
            <span className="text-green-600 text-sm font-medium group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
              View Deal
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
