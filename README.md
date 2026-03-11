# AutoVelo 🚗

**Kenya's leading online platform for buying new cars, selling used cars, and reading expert car reviews.**

A Carwow-style car marketplace built for the Kenyan market — with KES pricing, Kenyan dealer listings, and reviews tested on real Kenyan roads.

## Features

- 🛒 **Buy New & Used Cars** — Browse 13+ cars with filters by make, body type, fuel, transmission, price, and location
- 💰 **Sell Your Car** — 4-step listing wizard with free valuation
- ⭐ **Expert Reviews** — In-depth reviews tested on Kenyan roads (city, highway, off-road)
- ⚖️ **Compare Cars** — Side-by-side spec comparison with "Best" highlights for up to 3 cars
- 📍 **Kenyan Market** — KES pricing, local dealers, cities (Nairobi, Mombasa, Kisumu, Nakuru...)

## Tech Stack

- **Framework**: Next.js 14+ (App Router, Static Site Generation)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel-ready

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

## Pages

| Route | Description |
|-------|-------------|
| `/` | Homepage with hero, featured cars, reviews |
| `/new-cars` | Searchable car listings with filters |
| `/sell` | Multi-step form to list your car |
| `/reviews` | Expert car reviews |
| `/reviews/[id]` | Individual review detail |
| `/cars/[id]` | Car detail with specs & dealer contact |
| `/compare` | Side-by-side car comparison |
