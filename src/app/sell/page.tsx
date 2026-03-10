"use client";

import { useState } from "react";

const steps = [
  { id: 1, title: "Your Car", desc: "Tell us about your vehicle" },
  { id: 2, title: "Condition", desc: "Rate the condition" },
  { id: 3, title: "Your Details", desc: "Contact information" },
  { id: 4, title: "Done!", desc: "Review and submit" },
];

export default function SellPage() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    make: "",
    model: "",
    year: "",
    mileage: "",
    condition: "",
    bodyType: "",
    fuelType: "",
    transmission: "",
    color: "",
    location: "",
    description: "",
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    askingPrice: "",
  });

  const update = (field: string, value: string) => setForm(prev => ({ ...prev, [field]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-20 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 mb-3">Listing Submitted!</h1>
        <p className="text-gray-500 text-lg mb-4">
          Your {form.year} {form.make} {form.model} has been submitted successfully.
        </p>
        <p className="text-gray-500 mb-8">
          Our team will review your listing within 24 hours and contact you at <strong>{form.email}</strong> or <strong>{form.phone}</strong>.
        </p>
        <div className="bg-green-50 rounded-2xl p-6 text-left mb-8">
          <h3 className="font-bold text-gray-900 mb-4">What happens next?</h3>
          <div className="space-y-3">
            {[
              { icon: "✅", text: "We verify your listing details (within 24 hours)" },
              { icon: "📸", text: "Our team may contact you to add professional photos" },
              { icon: "🔔", text: "Buyers will contact you directly via your provided details" },
              { icon: "💰", text: "Accept the best offer and complete the sale" },
            ].map(item => (
              <div key={item.text} className="flex items-start gap-3">
                <span className="text-lg">{item.icon}</span>
                <p className="text-sm text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/" className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Back to Home
          </a>
          <button onClick={() => { setSubmitted(false); setStep(1); setForm({ make: "", model: "", year: "", mileage: "", condition: "", bodyType: "", fuelType: "", transmission: "", color: "", location: "", description: "", firstName: "", lastName: "", email: "", phone: "", askingPrice: "" }); }} className="border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold px-6 py-3 rounded-xl transition-colors">
            Sell Another Car
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Sell Your Car</h1>
        <p className="text-gray-500">Get the best price from Kenya&apos;s top buyers in 3 easy steps</p>
      </div>

      {/* Steps Progress */}
      <div className="flex items-center justify-between mb-10 relative">
        <div className="absolute left-0 right-0 top-5 h-0.5 bg-gray-200 -z-0">
          <div className="h-full bg-green-500 transition-all duration-500" style={{ width: `${((step - 1) / (steps.length - 1)) * 100}%` }}></div>
        </div>
        {steps.map(s => (
          <div key={s.id} className="flex flex-col items-center gap-1 z-10">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step > s.id ? "bg-green-600 text-white" : step === s.id ? "bg-green-600 text-white ring-4 ring-green-100" : "bg-white border-2 border-gray-200 text-gray-400"}`}>
              {step > s.id ? (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                </svg>
              ) : s.id}
            </div>
            <p className="text-xs font-semibold text-gray-600 hidden sm:block">{s.title}</p>
          </div>
        ))}
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-sm">
          
          {/* Step 1: Car Details */}
          {step === 1 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Tell us about your car</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Make *</label>
                  <select required value={form.make} onChange={e => update("make", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                    <option value="">Select make</option>
                    {["Toyota", "Subaru", "Nissan", "Mitsubishi", "Mazda", "Honda", "Suzuki", "Volkswagen", "Mercedes-Benz", "BMW", "Audi", "Isuzu", "Other"].map(m => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Model *</label>
                  <input required type="text" placeholder="e.g. RAV4, Fielder, Forester" value={form.model} onChange={e => update("model", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Year *</label>
                  <select required value={form.year} onChange={e => update("year", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                    <option value="">Select year</option>
                    {Array.from({ length: 25 }, (_, i) => 2024 - i).map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Mileage (km) *</label>
                  <input required type="number" placeholder="e.g. 45000" value={form.mileage} onChange={e => update("mileage", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Body Type *</label>
                  <select required value={form.bodyType} onChange={e => update("bodyType", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                    <option value="">Select type</option>
                    {["SUV", "Hatchback", "Saloon", "Pickup", "Station Wagon", "Coupe", "Van", "Minivan"].map(bt => <option key={bt} value={bt}>{bt}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Fuel Type *</label>
                  <select required value={form.fuelType} onChange={e => update("fuelType", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                    <option value="">Select fuel</option>
                    {["Petrol", "Diesel", "Hybrid", "Electric"].map(ft => <option key={ft} value={ft}>{ft}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Transmission *</label>
                  <select required value={form.transmission} onChange={e => update("transmission", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                    <option value="">Select transmission</option>
                    {["Automatic", "Manual", "CVT"].map(t => <option key={t} value={t}>{t}</option>)}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Color</label>
                  <input type="text" placeholder="e.g. Pearl White, Silver" value={form.color} onChange={e => update("color", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Asking Price (KES) *</label>
                  <input required type="number" placeholder="e.g. 2500000" value={form.askingPrice} onChange={e => update("askingPrice", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Location *</label>
                  <select required value={form.location} onChange={e => update("location", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white">
                    <option value="">Select location</option>
                    {["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret", "Thika", "Meru", "Other"].map(l => <option key={l} value={l}>{l}</option>)}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Condition */}
          {step === 2 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Rate the condition of your car</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                {[
                  { value: "excellent", label: "Excellent", desc: "Like new. No visible wear, full service history.", icon: "⭐" },
                  { value: "good", label: "Good", desc: "Minor wear only. Well maintained, some service history.", icon: "👍" },
                  { value: "fair", label: "Fair", desc: "Moderate wear. Functional but may need minor work.", icon: "👌" },
                  { value: "poor", label: "Poor", desc: "Significant wear. Needs repairs or maintenance.", icon: "🔧" },
                ].map(cond => (
                  <label key={cond.value} className={`flex items-start gap-4 p-4 rounded-2xl border-2 cursor-pointer transition-all hover:border-green-300 ${form.condition === cond.value ? "border-green-500 bg-green-50" : "border-gray-200"}`}>
                    <input type="radio" name="condition" value={cond.value} checked={form.condition === cond.value} onChange={e => update("condition", e.target.value)} className="sr-only" />
                    <span className="text-2xl">{cond.icon}</span>
                    <div>
                      <p className="font-semibold text-gray-900">{cond.label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">{cond.desc}</p>
                    </div>
                    {form.condition === cond.value && (
                      <div className="ml-auto w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                    )}
                  </label>
                ))}
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Description (optional)</label>
                <textarea
                  value={form.description}
                  onChange={e => update("description", e.target.value)}
                  rows={4}
                  placeholder="Tell potential buyers more about your car. Mention any extras, recent services, or anything unique..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500 resize-none"
                />
              </div>
            </div>
          )}

          {/* Step 3: Contact Details */}
          {step === 3 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Your contact details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                  <input required type="text" placeholder="John" value={form.firstName} onChange={e => update("firstName", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                  <input required type="text" placeholder="Kamau" value={form.lastName} onChange={e => update("lastName", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input required type="email" placeholder="john@example.com" value={form.email} onChange={e => update("email", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input required type="tel" placeholder="+254 700 000 000" value={form.phone} onChange={e => update("phone", e.target.value)} className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-green-500" />
                </div>
              </div>
              <div className="mt-5 p-4 bg-blue-50 rounded-xl text-sm text-blue-700">
                <strong>Privacy note:</strong> Your contact details will only be shared with verified buyers who express serious interest in your vehicle.
              </div>
            </div>
          )}

          {/* Step 4: Review */}
          {step === 4 && (
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-6">Review your listing</h2>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-2xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs text-green-700 font-bold">1</span>
                    Vehicle Details
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div><span className="text-gray-500">Make:</span> <span className="font-medium">{form.make}</span></div>
                    <div><span className="text-gray-500">Model:</span> <span className="font-medium">{form.model}</span></div>
                    <div><span className="text-gray-500">Year:</span> <span className="font-medium">{form.year}</span></div>
                    <div><span className="text-gray-500">Mileage:</span> <span className="font-medium">{form.mileage} km</span></div>
                    <div><span className="text-gray-500">Type:</span> <span className="font-medium">{form.bodyType}</span></div>
                    <div><span className="text-gray-500">Fuel:</span> <span className="font-medium">{form.fuelType}</span></div>
                    <div><span className="text-gray-500">Location:</span> <span className="font-medium">{form.location}</span></div>
                    <div><span className="text-gray-500">Price:</span> <span className="font-bold text-green-600">KES {parseInt(form.askingPrice || "0").toLocaleString()}</span></div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-2xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs text-green-700 font-bold">2</span>
                    Condition
                  </h3>
                  <p className="text-sm capitalize font-medium text-gray-900">{form.condition || "Not specified"}</p>
                  {form.description && <p className="text-sm text-gray-500 mt-1">{form.description}</p>}
                </div>
                <div className="bg-gray-50 rounded-2xl p-5">
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-xs text-green-700 font-bold">3</span>
                    Contact Details
                  </h3>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div><span className="text-gray-500">Name:</span> <span className="font-medium">{form.firstName} {form.lastName}</span></div>
                    <div><span className="text-gray-500">Email:</span> <span className="font-medium">{form.email}</span></div>
                    <div><span className="text-gray-500">Phone:</span> <span className="font-medium">{form.phone}</span></div>
                  </div>
                </div>
              </div>
              <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl text-sm text-green-800">
                By submitting, you agree to our <a href="#" className="underline">Terms of Service</a> and confirm that the information provided is accurate.
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">
            <button
              type="button"
              onClick={() => setStep(s => Math.max(1, s - 1))}
              className={`flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors ${step === 1 ? "invisible" : ""}`}
            >
              ← Back
            </button>
            {step < 4 ? (
              <button
                type="button"
                onClick={() => setStep(s => Math.min(4, s + 1))}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-2.5 rounded-xl transition-colors flex items-center gap-2"
              >
                Continue →
              </button>
            ) : (
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-2.5 rounded-xl transition-colors flex items-center gap-2"
              >
                Submit Listing 🚀
              </button>
            )}
          </div>
        </div>
      </form>

      {/* Benefits */}
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          { icon: "🆓", title: "Free Listing", desc: "List your car for free — no hidden fees." },
          { icon: "⚡", title: "Fast Sale", desc: "Average time to sell is just 7 days on our platform." },
          { icon: "🔒", title: "Safe & Secure", desc: "All buyers are verified before contacting you." },
        ].map(b => (
          <div key={b.title} className="bg-white rounded-2xl border border-gray-100 p-5 text-center">
            <span className="text-3xl">{b.icon}</span>
            <h3 className="font-bold text-gray-900 mt-3 mb-1">{b.title}</h3>
            <p className="text-sm text-gray-500">{b.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
