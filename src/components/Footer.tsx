import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">CW</span>
              </div>
              <span className="font-bold text-xl text-white">
                car<span className="text-green-500">wow</span>
                <span className="text-xs text-gray-400 font-normal ml-1">Kenya</span>
              </span>
            </Link>
            <p className="text-sm text-gray-400 mb-6 max-w-sm">
              Kenya&apos;s leading online platform for buying new cars, finding the best
              deals on used cars, and getting expert reviews on every model.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors" aria-label="Facebook">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors" aria-label="Twitter">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors" aria-label="Instagram">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="w-9 h-9 bg-gray-800 hover:bg-green-600 rounded-lg flex items-center justify-center transition-colors" aria-label="YouTube">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
                  <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
                </svg>
              </a>
            </div>
          </div>

          {/* Buy */}
          <div>
            <h3 className="font-semibold text-white mb-4">Buy a Car</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/new-cars" className="hover:text-green-400 transition-colors">New Cars</Link></li>
              <li><Link href="/new-cars?type=used" className="hover:text-green-400 transition-colors">Used Cars</Link></li>
              <li><Link href="/new-cars?bodyType=SUV" className="hover:text-green-400 transition-colors">SUVs</Link></li>
              <li><Link href="/new-cars?bodyType=Hatchback" className="hover:text-green-400 transition-colors">Hatchbacks</Link></li>
              <li><Link href="/new-cars?bodyType=Pickup" className="hover:text-green-400 transition-colors">Pickups</Link></li>
              <li><Link href="/compare" className="hover:text-green-400 transition-colors">Compare Cars</Link></li>
            </ul>
          </div>

          {/* Research */}
          <div>
            <h3 className="font-semibold text-white mb-4">Research</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/reviews" className="hover:text-green-400 transition-colors">Car Reviews</Link></li>
              <li><Link href="/reviews" className="hover:text-green-400 transition-colors">Best SUVs in Kenya</Link></li>
              <li><Link href="/reviews" className="hover:text-green-400 transition-colors">Best Family Cars</Link></li>
              <li><Link href="/reviews" className="hover:text-green-400 transition-colors">Fuel Economy Guide</Link></li>
              <li><Link href="/reviews" className="hover:text-green-400 transition-colors">Off-Road Guide</Link></li>
              <li><Link href="/reviews" className="hover:text-green-400 transition-colors">Buying Guides</Link></li>
            </ul>
          </div>

          {/* Sell */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/sell" className="hover:text-green-400 transition-colors">Sell Your Car</Link></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">About AutoVelo</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">For Dealers</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Press</a></li>
              <li><a href="#" className="hover:text-green-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © 2024 AutoVelo. All rights reserved. Registered in Kenya.
          </p>
          <div className="flex items-center gap-6 text-xs text-gray-500">
            <a href="#" className="hover:text-gray-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Terms of Use</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Cookie Policy</a>
            <a href="#" className="hover:text-gray-300 transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
