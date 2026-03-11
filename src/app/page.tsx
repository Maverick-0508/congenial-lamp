import Link from "next/link";
import Image from "next/image";
import { cars, makes, formatPrice } from "@/data/cars";
import { reviews } from "@/data/reviews";
import CarCard from "@/components/CarCard";
import ReviewCard from "@/components/ReviewCard";

const featuredCars = cars.filter((c) => c.type === "new").slice(0, 6);
const latestReviews = reviews.slice(0, 3);
const popularMakes = makes.filter((m) => m.popular).slice(0, 8);

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-green-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1600&q=60"
            alt="Car background"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 bg-green-600/20 border border-green-500/30 text-green-300 text-xs font-semibold px-3 py-1.5 rounded-full mb-6">
              <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
              Kenya&apos;s #1 Car Platform
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Find Your Perfect Car
              <br />
              <span className="text-green-400">in Kenya</span>
            </h1>
            <p className="text-lg text-gray-300 mb-8 leading-relaxed">
              Browse thousands of new and used cars, compare prices, read expert reviews,
              and get the best deals from trusted dealers across Kenya.
            </p>
            <div className="bg-white rounded-2xl p-2 flex flex-col sm:flex-row gap-2 shadow-2xl max-w-xl">
              <div className="flex-1 flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                <svg className="w-5 h-5 text-gray-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <input
                  type="text"
                  placeholder="Search make, model, or keyword..."
                  className="flex-1 bg-transparent text-gray-800 text-sm outline-none placeholder:text-gray-400"
                />
              </div>
              <Link
                href="/new-cars"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-colors flex-shrink-0 text-center"
              >
                Search Cars
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-lg">2,000+</span>
                <span>Cars Listed</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-lg">150+</span>
                <span>Trusted Dealers</span>
              </div>
              <div className="w-px h-4 bg-gray-600"></div>
              <div className="flex items-center gap-2">
                <span className="text-white font-bold text-lg">500+</span>
                <span>Expert Reviews</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Actions */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { href: "/new-cars", icon: "🚗", title: "Buy New Car", desc: "Latest models available", color: "green" },
              { href: "/new-cars?type=used", icon: "✅", title: "Buy Used Car", desc: "Certified pre-owned", color: "blue" },
              { href: "/sell", icon: "💰", title: "Sell Your Car", desc: "Get the best price", color: "amber" },
              { href: "/reviews", icon: "⭐", title: "Car Reviews", desc: "Expert opinions", color: "purple" },
            ].map((item) => (
              <Link key={item.href} href={item.href} className="group flex flex-col items-center gap-3 p-5 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all text-center">
                <span className="text-3xl">{item.icon}</span>
                <div>
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-green-600 transition-colors">{item.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured New Cars */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex items-end justify-between mb-8">
          <div>
            <p className="text-green-600 text-sm font-semibold uppercase tracking-wide mb-1">Browse Now</p>
            <h2 className="text-3xl font-bold text-gray-900">Featured New Cars</h2>
          </div>
          <Link href="/new-cars" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-green-600 hover:text-green-700 transition-colors">
            View all cars →
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCars.map((car) => (
            <CarCard key={car.id} car={car} featured />
          ))}
        </div>
      </section>

      {/* Popular Makes */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-green-600 text-sm font-semibold uppercase tracking-wide mb-1">Browse by Brand</p>
            <h2 className="text-3xl font-bold text-gray-900">Popular Makes in Kenya</h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {popularMakes.map((make) => (
              <Link key={make.name} href={`/new-cars?make=${make.name}`} className="group flex flex-col items-center gap-2 p-4 rounded-2xl border border-gray-100 hover:border-green-200 hover:bg-green-50 transition-all text-center">
                <span className="text-3xl">{make.logo}</span>
                <p className="font-semibold text-sm text-gray-900 group-hover:text-green-600 transition-colors">{make.name}</p>
                <p className="text-xs text-gray-400">{make.count} cars</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Sell Your Car CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-gradient-to-r from-green-600 to-green-700 rounded-3xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center">
            <div className="flex-1 p-8 lg:p-12">
              <p className="text-green-200 text-sm font-semibold uppercase tracking-wide mb-3">Get the Best Price</p>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                Ready to Sell<br />Your Car?
              </h2>
              <p className="text-green-100 text-lg mb-6 leading-relaxed max-w-md">
                Get offers from Kenya&apos;s top dealers. Free valuation, no hassle, fast payment.
              </p>
              <Link href="/sell" className="bg-white hover:bg-gray-50 text-green-700 font-bold px-6 py-3 rounded-xl transition-colors inline-flex items-center gap-2">
                Get Free Valuation →
              </Link>
              <div className="flex flex-wrap gap-6 mt-6 text-sm text-green-100">
                {["Free valuation", "No obligation", "Fast payment"].map(t => (
                  <div key={t} className="flex items-center gap-2">
                    <svg className="w-4 h-4 text-green-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {t}
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:w-1/2 relative h-64 lg:h-80 w-full overflow-hidden">
              <Image src="https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=800&q=80" alt="Sell your car" fill className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-r from-green-700 via-green-700/50 to-transparent lg:from-transparent lg:via-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Reviews */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <p className="text-green-600 text-sm font-semibold uppercase tracking-wide mb-1">Expert Opinions</p>
              <h2 className="text-3xl font-bold text-gray-900">Latest Car Reviews</h2>
            </div>
            <Link href="/reviews" className="hidden sm:flex items-center gap-1 text-sm font-semibold text-green-600 hover:text-green-700 transition-colors">
              All reviews →
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestReviews.map((review) => (
              <ReviewCard key={review.id} review={review} />
            ))}
          </div>
        </div>
      </section>

      {/* Why AutoVelo */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 text-sm font-semibold uppercase tracking-wide mb-1">Why Choose Us</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Kenya&apos;s Most Trusted Car Platform</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🏆", title: "Verified Dealers", desc: "Every dealer on our platform is thoroughly vetted for your peace of mind." },
              { icon: "💡", title: "Expert Reviews", desc: "Our team tests every car in real Kenyan conditions — city, highway and off-road." },
              { icon: "💰", title: "Best Price Guarantee", desc: "We ensure you get competitive market prices whether buying or selling." },
              { icon: "🛡️", title: "Protected Purchase", desc: "Our buyer protection covers you from fraudulent listings and misrepresentation." },
            ].map((item) => (
              <div key={item.title} className="p-6 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-green-600 text-sm font-semibold uppercase tracking-wide mb-1">Testimonials</p>
            <h2 className="text-3xl font-bold text-gray-900">What Our Customers Say</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "John Kariuki", location: "Nairobi", text: "Found my Toyota Hilux through AutoVelo at a much better price than any dealer I visited in person. The process was smooth and the dealer was legitimate.", car: "Toyota Hilux 2024" },
              { name: "Mary Wambui", location: "Mombasa", text: "Sold my old Subaru in just 3 days! Got offers from 6 different buyers and accepted the best one. Got more than I expected.", car: "Sold: Subaru Outback" },
              { name: "Peter Otieno", location: "Kisumu", text: "The car reviews are incredibly detailed and honest about how cars perform on Kenyan roads specifically. Finally relevant reviews!", car: "Bought: Suzuki Jimny" },
            ].map((t) => (
              <div key={t.name} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm text-gray-900">{t.name}</p>
                    <p className="text-xs text-gray-400">{t.location}</p>
                  </div>
                  <span className="text-xs bg-green-50 text-green-600 font-medium px-2.5 py-1 rounded-full">{t.car}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Price Guide */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <p className="text-green-600 text-sm font-semibold uppercase tracking-wide mb-1">Price Guide</p>
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Popular Cars &amp; Prices</h2>
            <p className="text-gray-500 text-sm">OTR prices for the most popular cars in Kenya</p>
          </div>
          <div className="overflow-x-auto rounded-2xl border border-gray-100">
            <table className="w-full text-sm">
              <thead className="bg-gray-50">
                <tr>
                  <th className="text-left py-4 px-5 font-semibold text-gray-700">Car</th>
                  <th className="text-left py-4 px-5 font-semibold text-gray-700 hidden sm:table-cell">Type</th>
                  <th className="text-left py-4 px-5 font-semibold text-gray-700 hidden md:table-cell">Engine</th>
                  <th className="text-right py-4 px-5 font-semibold text-gray-700">Price (KES)</th>
                  <th className="py-4 px-5"></th>
                </tr>
              </thead>
              <tbody>
                {cars.filter(c => c.type === "new").slice(0, 6).map((car, i) => (
                  <tr key={car.id} className={`border-t border-gray-100 hover:bg-gray-50 transition-colors`}>
                    <td className="py-4 px-5">
                      <div className="font-semibold text-gray-900">{car.make} {car.model}</div>
                      <div className="text-xs text-gray-400">{car.year}</div>
                    </td>
                    <td className="py-4 px-5 text-gray-600 hidden sm:table-cell">{car.bodyType}</td>
                    <td className="py-4 px-5 text-gray-600 hidden md:table-cell">{car.engineSize} • {car.fuelType}</td>
                    <td className="py-4 px-5 text-right font-bold text-gray-900">{formatPrice(car.price)}</td>
                    <td className="py-4 px-5 text-right">
                      <Link href={`/cars/${car.id}`} className="text-green-600 hover:text-green-700 font-medium text-xs">View →</Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-6 text-center">
            <Link href="/new-cars" className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
              Browse All Cars
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
