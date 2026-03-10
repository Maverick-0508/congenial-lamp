import { cars, formatPrice, formatMileage } from "@/data/cars";
import { reviews } from "@/data/reviews";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import StarRating from "@/components/StarRating";
import ReviewCard from "@/components/ReviewCard";

export function generateStaticParams() {
  return cars.map(car => ({ id: car.id }));
}

export default async function CarDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const car = cars.find(c => c.id === id);
  if (!car) notFound();

  const carReview = reviews.find(r => r.carId === car.id);
  const similarCars = cars.filter(c => c.id !== car.id && (c.make === car.make || c.bodyType === car.bodyType)).slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-green-600">Home</Link>
        <span>›</span>
        <Link href="/new-cars" className="hover:text-green-600">Cars</Link>
        <span>›</span>
        <Link href={`/new-cars?make=${car.make}`} className="hover:text-green-600">{car.make}</Link>
        <span>›</span>
        <span className="text-gray-900">{car.model}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          {/* Hero Image */}
          <div className="relative rounded-3xl overflow-hidden bg-gray-100 h-72 md:h-96">
            <Image src={car.image} alt={`${car.year} ${car.make} ${car.model}`} fill className="object-cover" priority />
            {car.badge && (
              <div className="absolute top-4 left-4">
                <span className="bg-green-600 text-white text-sm font-bold px-3 py-1.5 rounded-full">{car.badge}</span>
              </div>
            )}
            <div className="absolute top-4 right-4">
              <span className={`text-sm font-bold px-3 py-1.5 rounded-full ${car.type === "new" ? "bg-blue-600 text-white" : "bg-amber-500 text-white"}`}>
                {car.type === "new" ? "New" : "Used"}
              </span>
            </div>
          </div>

          {/* Title & Rating */}
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {car.year} {car.make} {car.model}
            </h1>
            <div className="flex flex-wrap items-center gap-4 mb-4">
              <div className="flex items-center gap-2">
                <StarRating rating={car.rating} size="md" />
                <span className="font-bold text-gray-900">{car.rating}</span>
                <span className="text-gray-500 text-sm">({car.reviewCount} reviews)</span>
              </div>
              <span className="text-gray-300">|</span>
              <span className="text-sm text-gray-500">
                <svg className="w-4 h-4 inline mr-1 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                </svg>
                {car.location}
              </span>
            </div>
            <p className="text-gray-600 leading-relaxed">{car.description}</p>
          </div>

          {/* Specs Grid */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="font-bold text-gray-900 text-lg mb-5">Key Specifications</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { label: "Engine", value: car.engineSize },
                { label: "Horsepower", value: `${car.horsepower} hp` },
                { label: "Fuel Type", value: car.fuelType },
                { label: "Transmission", value: car.transmission },
                { label: "Body Type", value: car.bodyType },
                { label: "Seats", value: `${car.seats} seats` },
                { label: "Colour", value: car.color },
                ...(car.mileage ? [{ label: "Mileage", value: formatMileage(car.mileage) }] : []),
                ...(car.mpg ? [{ label: "Fuel Economy", value: `${car.mpg} km/L` }] : []),
                ...(car.co2 ? [{ label: "CO₂ Emissions", value: `${car.co2} g/km` }] : []),
              ].map(spec => (
                <div key={spec.label} className="bg-gray-50 rounded-xl p-3">
                  <p className="text-xs text-gray-500 mb-1">{spec.label}</p>
                  <p className="font-semibold text-gray-900 text-sm">{spec.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6">
            <h2 className="font-bold text-gray-900 text-lg mb-5">Standard Features</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {car.features.map(feature => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Expert Review Link */}
          {carReview && (
            <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-2xl p-6 border border-green-200">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-green-700 text-xs font-bold uppercase tracking-wide mb-1">Expert Review Available</p>
                  <h3 className="font-bold text-gray-900 mb-2">{carReview.title}</h3>
                  <p className="text-sm text-gray-600 mb-4">{carReview.summary}</p>
                  <div className="flex items-center gap-2">
                    <StarRating rating={carReview.overallRating} size="sm" />
                    <span className="font-bold text-sm">{carReview.overallRating}/5</span>
                    {carReview.recommended && (
                      <span className="bg-green-600 text-white text-xs px-2 py-0.5 rounded-full">Recommended</span>
                    )}
                  </div>
                </div>
                <Link href={`/reviews/${carReview.id}`} className="flex-shrink-0 bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-4 py-2 rounded-xl transition-colors whitespace-nowrap">
                  Read Review
                </Link>
              </div>
            </div>
          )}

          {/* Similar Cars */}
          {similarCars.length > 0 && (
            <div>
              <h2 className="font-bold text-gray-900 text-xl mb-5">Similar Cars You Might Like</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {similarCars.map(c => (
                  <Link key={c.id} href={`/cars/${c.id}`} className="group bg-white rounded-2xl border border-gray-100 overflow-hidden hover:border-green-200 hover:shadow-md transition-all">
                    <div className="relative h-36 overflow-hidden bg-gray-100">
                      <Image src={c.image} alt={c.model} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-3">
                      <p className="font-semibold text-sm text-gray-900">{c.make} {c.model}</p>
                      <p className="text-green-600 font-bold text-sm mt-1">{formatPrice(c.price)}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Price Card */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm sticky top-24">
            <div className="mb-4">
              <p className="text-gray-500 text-xs mb-1">
                {car.type === "new" ? "On-the-road price" : "Asking price"}
              </p>
              <p className="text-3xl font-bold text-gray-900">{formatPrice(car.price)}</p>
            </div>

            <div className="space-y-3 mb-6">
              <a
                href={`tel:${car.dealerPhone.replace(/\s/g, "")}`}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors text-center block"
              >
                📞 Contact Dealer
              </a>
              <Link
                href="/sell"
                className="w-full border border-gray-200 hover:border-green-400 hover:bg-green-50 text-gray-700 font-semibold py-3 rounded-xl transition-colors text-center block text-sm"
              >
                Get a Part-Exchange Quote
              </Link>
              <Link
                href="/compare"
                className="w-full border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold py-3 rounded-xl transition-colors text-center block text-sm"
              >
                Compare This Car
              </Link>
            </div>

            {/* Dealer Info */}
            <div className="border-t border-gray-100 pt-5">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-3">Dealer</p>
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center text-lg">🏪</div>
                <div>
                  <p className="font-semibold text-sm text-gray-900">{car.dealer}</p>
                  <p className="text-xs text-gray-500">{car.location}</p>
                </div>
              </div>
              <p className="text-sm text-green-600 font-medium">{car.dealerPhone}</p>
            </div>
          </div>

          {/* Finance Banner */}
          <div className="bg-blue-50 border border-blue-100 rounded-2xl p-5">
            <p className="text-blue-800 font-bold mb-1">💳 Finance Available</p>
            <p className="text-blue-700 text-sm mb-3">
              From as low as KES {Math.round(car.price / 60).toLocaleString()}/month
            </p>
            <a href="#" className="text-blue-600 text-sm font-semibold hover:text-blue-700">Get a finance quote →</a>
          </div>

          {/* Rating Summary */}
          {carReview && (
            <div className="bg-white rounded-2xl border border-gray-100 p-5">
              <h3 className="font-bold text-gray-900 mb-4">Expert Ratings</h3>
              <div className="space-y-3">
                {Object.entries(carReview.ratings).map(([key, val]) => (
                  <div key={key} className="flex items-center gap-3">
                    <span className="text-xs text-gray-600 capitalize w-24 flex-shrink-0">{key}</span>
                    <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: `${(val / 5) * 100}%` }}></div>
                    </div>
                    <span className="text-xs font-semibold text-gray-700 w-6 text-right">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
