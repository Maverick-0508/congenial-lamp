import { reviews } from "@/data/reviews";
import ReviewCard from "@/components/ReviewCard";
import Link from "next/link";

const makes = Array.from(new Set(reviews.map(r => r.make))).sort();
const tags = Array.from(new Set(reviews.flatMap(r => r.tags))).sort();

export default function ReviewsPage() {
  const featured = reviews[0];
  const rest = reviews.slice(1);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      {/* Header */}
      <div className="mb-10">
        <p className="text-green-600 text-sm font-semibold uppercase tracking-wide mb-1">Expert Opinions</p>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">Car Reviews</h1>
        <p className="text-gray-500 text-lg max-w-2xl">
          In-depth reviews of every car tested on real Kenyan roads. Our experts drive each car
          in city traffic, on the highway, and off-road so you get honest, relevant advice.
        </p>
      </div>

      {/* Featured Review */}
      <div className="mb-12">
        <Link href={`/reviews/${featured.id}`} className="group block">
          <div className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-lg hover:border-green-200 transition-all duration-300">
            <div className="flex flex-col lg:flex-row">
              <div className="relative lg:w-1/2 h-72 lg:h-96 overflow-hidden bg-gray-100">
                <img src={featured.image} alt={featured.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute top-4 left-4">
                  <span className="bg-green-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">Featured Review</span>
                </div>
              </div>
              <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                <p className="text-green-600 font-semibold text-sm mb-2">
                  {featured.year} {featured.make} {featured.model}
                </p>
                <h2 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-green-600 transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">{featured.summary}</p>
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex items-center gap-2 bg-green-50 rounded-xl px-3 py-2">
                    <div className="flex items-center gap-0.5">
                      {[1,2,3,4,5].map(s => (
                        <svg key={s} className={`w-4 h-4 ${s <= featured.overallRating ? "text-amber-400" : "text-gray-300"}`} fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <span className="font-bold text-gray-900">{featured.overallRating}</span>
                  </div>
                  <span className="text-sm text-gray-500">{featured.views.toLocaleString()} views</span>
                  <span className="text-sm text-gray-500">{featured.helpful} found helpful</span>
                </div>
                <div className="flex flex-wrap gap-2 mb-6">
                  {featured.tags.slice(0, 4).map(tag => (
                    <span key={tag} className="bg-gray-100 text-gray-600 text-xs px-2.5 py-1 rounded-full">{tag}</span>
                  ))}
                </div>
                <div className="flex items-center gap-3">
                  <img src={featured.authorAvatar} alt={featured.authorName} className="w-9 h-9 rounded-full object-cover" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{featured.authorName}</p>
                    <p className="text-xs text-gray-400">{new Date(featured.date).toLocaleDateString("en-KE", { year: "numeric", month: "long", day: "numeric" })}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Filter by make */}
      <div className="flex flex-wrap items-center gap-3 mb-8">
        <span className="text-sm font-semibold text-gray-700">Filter by make:</span>
        <div className="flex flex-wrap gap-2">
          {makes.map(make => (
            <span key={make} className="bg-gray-100 hover:bg-green-50 hover:text-green-700 text-gray-700 text-sm px-3 py-1.5 rounded-full cursor-pointer transition-colors">
              {make}
            </span>
          ))}
        </div>
      </div>

      {/* Review Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {rest.map(review => (
          <ReviewCard key={review.id} review={review} />
        ))}
      </div>

      {/* Rating Breakdown Banner */}
      <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-8 lg:p-10 text-white">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
          <div className="flex-1">
            <p className="text-green-400 text-sm font-semibold uppercase tracking-wide mb-2">Our Review Promise</p>
            <h2 className="text-2xl font-bold mb-3">Honest Reviews for Kenyan Roads</h2>
            <p className="text-gray-300 leading-relaxed">
              Every car we review is tested extensively on Kenyan roads — from Nairobi&apos;s congested CBD 
              to rough murram roads and highway stretches. We test fuel economy in real conditions, 
              not laboratory tests. Our ratings reflect what matters to Kenyan drivers.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 lg:w-80">
            {[
              { icon: "🏙️", label: "City Driving", desc: "Nairobi traffic tested" },
              { icon: "🛣️", label: "Highway", desc: "Long-distance performance" },
              { icon: "🌿", label: "Off-Road", desc: "Kenyan terrain tested" },
              { icon: "⛽", label: "Fuel Economy", desc: "Real-world consumption" },
            ].map(item => (
              <div key={item.label} className="bg-white/10 rounded-xl p-4">
                <span className="text-2xl">{item.icon}</span>
                <p className="font-semibold text-sm mt-2">{item.label}</p>
                <p className="text-gray-400 text-xs">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
