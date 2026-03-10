import { reviews } from "@/data/reviews";
import { cars } from "@/data/cars";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import StarRating from "@/components/StarRating";
import CarCard from "@/components/CarCard";

export function generateStaticParams() {
  return reviews.map(r => ({ id: r.id }));
}

export default async function ReviewDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const review = reviews.find(r => r.id === id);
  if (!review) notFound();

  const car = cars.find(c => c.id === review.carId);
  const otherReviews = reviews.filter(r => r.id !== review.id).slice(0, 3);

  const date = new Date(review.date).toLocaleDateString("en-KE", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
        <Link href="/" className="hover:text-green-600">Home</Link>
        <span>›</span>
        <Link href="/reviews" className="hover:text-green-600">Reviews</Link>
        <span>›</span>
        <span className="text-gray-900">{review.make} {review.model}</span>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* Main Content */}
        <article className="lg:col-span-2 space-y-8">
          {/* Hero */}
          <div className="relative rounded-3xl overflow-hidden bg-gray-100 h-72 md:h-96">
            <Image src={review.image} alt={review.title} fill className="object-cover" priority />
            {review.recommended && (
              <div className="absolute top-4 left-4">
                <span className="bg-green-600 text-white text-sm font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5">
                  👍 Recommended
                </span>
              </div>
            )}
          </div>

          {/* Title */}
          <div>
            <p className="text-green-600 font-semibold text-sm mb-2">{review.year} {review.make} {review.model} Review</p>
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-4">{review.title}</h1>
            <p className="text-xl text-gray-600 leading-relaxed">{review.summary}</p>
          </div>

          {/* Author */}
          <div className="flex items-center gap-4 py-4 border-y border-gray-100">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gray-200">
              <Image src={review.authorAvatar} alt={review.authorName} fill className="object-cover" sizes="48px" />
            </div>
            <div className="flex-1">
              <p className="font-semibold text-gray-900">{review.authorName}</p>
              <p className="text-sm text-gray-500">Published {date}</p>
            </div>
            <div className="text-sm text-gray-500">
              {review.views.toLocaleString()} views
            </div>
          </div>

          {/* Rating Summary */}
          <div className="bg-gray-50 rounded-2xl p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
              <div className="text-center">
                <div className="text-5xl font-bold text-gray-900">{review.overallRating}</div>
                <StarRating rating={review.overallRating} size="lg" />
                <p className="text-xs text-gray-500 mt-1">Overall Rating</p>
              </div>
              <div className="flex-1 grid grid-cols-2 gap-3 w-full">
                {Object.entries(review.ratings).map(([key, val]) => (
                  <div key={key}>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-xs font-medium text-gray-700 capitalize">{key}</span>
                      <span className="text-xs font-bold text-gray-900">{val}/5</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-1.5 overflow-hidden">
                      <div className="bg-green-500 h-full rounded-full" style={{ width: `${(val / 5) * 100}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Review Body */}
          <div className="prose prose-gray max-w-none">
            {review.content.split('\n\n').map((para, i) => (
              <p key={i} className="text-gray-700 leading-relaxed text-base mb-5">{para.trim()}</p>
            ))}
          </div>

          {/* Pros & Cons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="bg-green-50 border border-green-100 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                The Good
              </h3>
              <ul className="space-y-2">
                {review.pros.map(pro => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-2xl p-5">
              <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-6 h-6 bg-red-400 rounded-full flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </span>
                The Not-So-Good
              </h3>
              <ul className="space-y-2">
                {review.cons.map(con => (
                  <li key={con} className="flex items-start gap-2 text-sm text-gray-700">
                    <span className="text-red-400 mt-0.5 flex-shrink-0">✗</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Verdict */}
          <div className="bg-gray-900 text-white rounded-2xl p-6 lg:p-8">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">🏆</span>
              <h3 className="font-bold text-xl">The Verdict</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-base">{review.verdict}</p>
            {review.recommended && (
              <div className="mt-4 inline-flex items-center gap-2 bg-green-600 text-white text-sm font-bold px-4 py-2 rounded-xl">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
                CarWow Kenya Recommends This Car
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {review.tags.map(tag => (
              <span key={tag} className="bg-gray-100 hover:bg-green-50 hover:text-green-700 text-gray-600 text-sm px-3 py-1.5 rounded-full cursor-pointer transition-colors">
                #{tag}
              </span>
            ))}
          </div>

          {/* Helpful */}
          <div className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl">
            <span className="text-sm text-gray-600">{review.helpful} people found this review helpful</span>
            <button className="flex items-center gap-2 text-sm font-semibold text-green-600 hover:text-green-700 border border-green-200 hover:bg-green-50 px-4 py-1.5 rounded-full transition-colors">
              👍 Helpful
            </button>
          </div>
        </article>

        {/* Sidebar */}
        <div className="space-y-5">
          {/* Buy This Car */}
          {car && (
            <div className="bg-white rounded-2xl border border-gray-100 p-5 sticky top-24 shadow-sm">
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wide mb-4">Buy This Car</p>
              <div className="relative h-40 rounded-xl overflow-hidden mb-4">
                <Image src={car.image} alt={car.model} fill className="object-cover" />
              </div>
              <h3 className="font-bold text-gray-900">{car.year} {car.make} {car.model}</h3>
              <p className="text-2xl font-bold text-green-600 mt-1 mb-4">{
                new Intl.NumberFormat("en-KE", { style: "currency", currency: "KES", maximumFractionDigits: 0 }).format(car.price)
              }</p>
              <Link href={`/cars/${car.id}`} className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-xl transition-colors text-center block mb-3">
                View Deal
              </Link>
              <div className="flex flex-wrap gap-2">
                {[car.bodyType, car.fuelType, car.transmission].map(spec => (
                  <span key={spec} className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">{spec}</span>
                ))}
              </div>
            </div>
          )}

          {/* More Reviews */}
          <div>
            <h3 className="font-bold text-gray-900 mb-4">More Reviews</h3>
            <div className="space-y-4">
              {otherReviews.map(r => (
                <Link key={r.id} href={`/reviews/${r.id}`} className="group flex gap-4 bg-white rounded-2xl border border-gray-100 p-4 hover:border-green-200 hover:shadow-sm transition-all">
                  <div className="relative w-20 h-16 flex-shrink-0 rounded-xl overflow-hidden bg-gray-100">
                    <Image src={r.image} alt={r.model} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs text-green-600 font-medium">{r.make} {r.model}</p>
                    <p className="text-sm font-semibold text-gray-900 line-clamp-2 group-hover:text-green-600 transition-colors">{r.title}</p>
                    <div className="flex items-center gap-1 mt-1">
                      <StarRating rating={r.overallRating} size="sm" />
                      <span className="text-xs text-gray-500">{r.overallRating}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
