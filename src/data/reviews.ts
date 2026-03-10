export interface Review {
  id: string;
  carId: string;
  make: string;
  model: string;
  year: number;
  title: string;
  summary: string;
  content: string;
  image: string;
  authorName: string;
  authorAvatar: string;
  date: string;
  overallRating: number;
  ratings: {
    performance: number;
    comfort: number;
    reliability: number;
    value: number;
    safety: number;
    economy: number;
  };
  pros: string[];
  cons: string[];
  verdict: string;
  tags: string[];
  helpful: number;
  views: number;
  recommended: boolean;
}

export const reviews: Review[] = [
  {
    id: "toyota-hilux-review",
    carId: "toyota-hilux-2024",
    make: "Toyota",
    model: "Hilux",
    year: 2024,
    title: "Toyota Hilux 2024 – Kenya's Indestructible Workhorse Reinvented",
    summary: "The new Hilux is better than ever, combining legendary toughness with modern tech that Kenyan drivers will love.",
    content: `The Toyota Hilux needs no introduction in Kenya. It's the car that built this nation's roads, carried tea harvests across the Rift Valley, and never broke down when you needed it most. The 2024 model takes this legend and adds a fresh coat of technology without losing a single ounce of that famed Hilux DNA.

Powering the new Hilux is an upgraded 2.8L GD-6 diesel engine producing 204hp and a massive 500Nm of torque. Out on the tarmac from Nairobi to Thika, it pulls effortlessly. But where it truly shines is off-road — engage 4WD and the Hilux navigates Kenyan murram roads with contemptuous ease.

The interior represents the biggest leap forward. Gone is the utilitarian cabin of old; in its place is a sophisticated space with a large touchscreen, digital instrument cluster, and soft-touch materials. It finally feels like a premium vehicle inside, while remaining practical with rubber floor mats when you spec them.

Toyota Safety Sense is now standard, including pre-collision braking, lane departure alert, and automatic high beams. This is welcome news given Kenya's road safety challenges.

Ride quality on rough roads is much improved, thanks to revised suspension tuning that absorbs those notorious Nairobi potholes without throwing occupants around. On smooth highway tarmac, wind and road noise are well suppressed.

Fuel consumption is around 10-11 km/L in mixed driving — acceptable for a truck of this capability, and better than the old model.`,
    image: "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1200&q=80",
    authorName: "James Mwangi",
    authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80",
    date: "2024-02-15",
    overallRating: 4.9,
    ratings: {
      performance: 5.0,
      comfort: 4.7,
      reliability: 5.0,
      value: 4.8,
      safety: 4.9,
      economy: 4.5,
    },
    pros: [
      "Unstoppable off-road capability",
      "Hugely improved interior quality",
      "Toyota Safety Sense now standard",
      "Best-in-class resale value in Kenya",
      "Excellent dealer network across Kenya",
      "500Nm of torque for any task",
    ],
    cons: [
      "Premium price for the top trim",
      "Load bay could be slightly larger",
      "No factory bed liner on base model",
    ],
    verdict: "The 2024 Toyota Hilux remains Kenya's premier pickup truck. With significant improvements in technology, safety and refinement, it's now better than ever while retaining the bulletproof reliability that made it legendary. An essential buy for anyone who needs a truck that works as hard as Kenya itself.",
    tags: ["Pickup", "4WD", "Diesel", "Work Vehicle", "Safari", "Towing"],
    helpful: 847,
    views: 12500,
    recommended: true,
  },
  {
    id: "suzuki-jimny-review",
    carId: "suzuki-jimny-2024",
    make: "Suzuki",
    model: "Jimny",
    year: 2024,
    title: "Suzuki Jimny 2024 – David vs Goliath Off-Road Champion",
    summary: "The tiny Jimny packs a giant off-road punch — and it's become the surprise hit of the Kenyan car market.",
    content: `You'll either love or hate the Suzuki Jimny's boxy, retro styling. But after a week driving it through Nairobi's chaos and along the dusty roads of Maasai Mara, we can confirm: this compact SUV is absolutely brilliant for Kenya.

The new Jimny keeps the formula that made its predecessor a legend. A lightweight body, a proper ladder-frame chassis, and a part-time 4WD system with low-range gearing. These are things that far more expensive SUVs have abandoned in pursuit of on-road refinement.

In the city, the Jimny is a delight. Its small footprint means parking is never a problem on Nairobi's congested streets. The tight turning circle lets you perform U-turns where others give up. The tall seating position gives you excellent visibility.

Off-road, it's almost comically capable for its size. We navigated deep mud, rocky tracks, and steep inclines that would have challenged vehicles twice its price. The AllGrip Pro system with low range really works, and the approach and departure angles are best-in-class.

The 1.5L petrol engine feels a little strained on the highway — it's not a fast car. And the interior, while improved from the old model, still feels basic in places. Rear seat space is cramped for anyone over 5'8".

But for what it does — providing genuine off-road capability at an accessible price point — the Jimny is without equal. It's become the darling of Nairobi's young professionals who want adventure without spending millions.`,
    image: "https://images.unsplash.com/photo-1617654112368-307921291f42?w=1200&q=80",
    authorName: "Amelia Otieno",
    authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80",
    date: "2024-01-22",
    overallRating: 4.7,
    ratings: {
      performance: 4.2,
      comfort: 4.1,
      reliability: 4.9,
      value: 5.0,
      safety: 4.5,
      economy: 4.8,
    },
    pros: [
      "Best-in-class off-road capability for price",
      "Easy to park in Nairobi's tight spaces",
      "Excellent fuel economy",
      "Suzuki's rock-solid reliability",
      "Affordable entry price",
      "Android Auto & Apple CarPlay standard",
    ],
    cons: [
      "Cramped rear seats",
      "Limited highway performance",
      "No diesel option in Kenya",
      "Small luggage space",
    ],
    verdict: "The Jimny is proof that you don't need to spend millions to have a genuinely capable off-roader in Kenya. It's economical, reliable, fun, and endearingly characterful. Best suited for the adventurous solo driver or couple who want to explore Kenya's wild places.",
    tags: ["Off-Road", "Compact SUV", "Budget", "City Car", "Adventure"],
    helpful: 634,
    views: 9800,
    recommended: true,
  },
  {
    id: "toyota-rav4-review",
    carId: "toyota-rav4-2024",
    make: "Toyota",
    model: "RAV4",
    year: 2024,
    title: "Toyota RAV4 Hybrid 2024 – The Smart Family SUV for Kenya",
    summary: "The RAV4 Hybrid is the perfect antidote to Kenya's rising fuel prices — practical, spacious, and remarkably economical.",
    content: `With fuel prices at record highs in Kenya, the Toyota RAV4 Hybrid makes an increasingly compelling case as the family SUV of choice. We spent two weeks with the latest model, driving city commutes, school runs, and a weekend trip to Nakuru, and came away seriously impressed.

The 2.5L hybrid system produces a combined 218hp, making this the most powerful RAV4 ever. The petrol engine and electric motor work seamlessly together — you're rarely aware of transitions between them. The result is smooth, effortless performance with Nairobi traffic requiring very little fuel at all.

In our real-world testing, we achieved an impressive 19-21 km/L in mixed city and highway driving. That's almost double what a comparable diesel SUV achieves, and the fuel savings over a year of Nairobi commuting are substantial.

The interior is well-designed and thoroughly practical. Five adults fit comfortably, and the boot is generous enough for a family's luggage. The 8" touchscreen works well, and wireless Android Auto/Apple CarPlay connectivity is hugely convenient.

Toyota Safety Sense comes standard and proved genuinely useful in Nairobi's unpredictable traffic. The pre-collision system activated twice during our test when cyclists suddenly emerged from side streets.

AWD is standard, using the electric rear motor to drive the rear wheels when needed. It handled the wet murram roads around Lake Nakuru without drama.

If we're being critical, the ride is slightly firm over sharp urban bumps, and the interior plastics, while practical, lack the premium feel of European rivals at this price.`,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=1200&q=80",
    authorName: "David Kamau",
    authorAvatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80",
    date: "2024-03-05",
    overallRating: 4.7,
    ratings: {
      performance: 4.6,
      comfort: 4.7,
      reliability: 4.9,
      value: 4.8,
      safety: 4.9,
      economy: 5.0,
    },
    pros: [
      "Exceptional fuel economy for an SUV",
      "Toyota Safety Sense standard",
      "Spacious, practical family interior",
      "Smooth, refined hybrid powertrain",
      "Excellent resale value expected",
      "AWD standard across all trims",
    ],
    cons: [
      "Slightly firm ride on rough roads",
      "Interior plastics less premium than rivals",
      "Higher entry price than standard RAV4",
    ],
    verdict: "The RAV4 Hybrid is the most sensible family SUV you can buy in Kenya today. The fuel savings are real and meaningful, the reliability is Toyota-level reassuring, and the practicality is hard to fault. Rising fuel costs make the hybrid premium increasingly justified.",
    tags: ["Family SUV", "Hybrid", "Fuel Efficient", "AWD", "Safe"],
    helpful: 512,
    views: 8200,
    recommended: true,
  },
  {
    id: "mazda-cx5-review",
    carId: "mazda-cx5-2024",
    make: "Mazda",
    model: "CX-5",
    year: 2024,
    title: "Mazda CX-5 2024 – The Driver's Premium SUV",
    summary: "Mazda's flagship SUV delivers a driving experience that no other car in this class can match.",
    content: `The Mazda CX-5 has long been something of a secret weapon in Kenya's premium SUV market. It doesn't have the badge prestige of a German rival, but it offers something arguably more valuable: genuine driving pleasure combined with near-luxury interior quality.

The 2.5L turbocharged engine produces 227hp and feels genuinely muscular. On the Nairobi-Thika highway, it covers ground in a most satisfying manner. The 6-speed automatic gearbox is responsive and smooth. This is a car that actively rewards spirited driving.

KODO Soul of Motion design language makes the CX-5 one of the most beautiful cars in its class — the Soul Red Crystal metallic paint is genuinely stunning. Mazda's attention to detail is exceptional; every touchpoint feels considered and quality.

Inside, the cabin has genuinely premium feel. Leather seating, suede headliner, real metal accents, and BOSE sound system combine to create an environment that feels luxurious. The 10.25" infotainment screen is large and crisp, though Mazda's rotary controller takes some learning.

The i-ACTIV AWD system is wonderfully intuitive, distributing power before wheel slip is detected rather than reacting to it. This makes the car feel extremely confident and secure on Kenya's variable road surfaces.

i-ACTIVSENSE safety suite is comprehensive — every driver aid you'd expect from a premium brand is standard.

On the downside, the CX-5 is slightly small inside compared to the RAV4, particularly in rear seat legroom. Fuel economy, while good at 15-17 km/L, doesn't match the RAV4 Hybrid.`,
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?w=1200&q=80",
    authorName: "Grace Wanjiku",
    authorAvatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&q=80",
    date: "2024-02-28",
    overallRating: 4.6,
    ratings: {
      performance: 4.8,
      comfort: 4.6,
      reliability: 4.7,
      value: 4.5,
      safety: 4.8,
      economy: 4.3,
    },
    pros: [
      "Outstanding driving dynamics",
      "Stunning KODO design",
      "Near-luxury interior quality",
      "BOSE audio system",
      "i-ACTIV AWD system",
      "Beautiful Soul Red Crystal paint",
    ],
    cons: [
      "Slightly tight rear seat space",
      "Rotary controller has learning curve",
      "Fuel economy not as good as hybrid rivals",
    ],
    verdict: "If driving enjoyment matters to you and you want a premium interior without paying German luxury prices, the CX-5 is your car. It's not the biggest or most economical SUV, but it's unquestionably the most satisfying to drive every day.",
    tags: ["Premium SUV", "Driver's Car", "AWD", "Luxury Interior", "Performance"],
    helpful: 389,
    views: 6700,
    recommended: true,
  },
  {
    id: "subaru-forester-review",
    carId: "subaru-forester-2024",
    make: "Subaru",
    model: "Forester",
    year: 2024,
    title: "Subaru Forester 2024 – Safety First, Adventure Always",
    summary: "EyeSight makes the Forester one of the safest cars on Kenyan roads — and it's a great family SUV too.",
    content: `Subaru has carved out a unique niche in Kenya's car market by offering something no one else does: standard EyeSight driver assistance at a mid-range price point. The 2024 Forester continues this tradition and remains one of the most safety-focused cars you can buy for Kenyan roads.

EyeSight uses twin cameras behind the windscreen to monitor the road ahead, enabling pre-collision braking, adaptive cruise control with full stop capability, lane keep assist, and lane departure warning. In Nairobi's challenging traffic, these systems proved their worth multiple times during our test.

The 2.0L Boxer engine and Lineartronic CVT are smooth and refined. The Forester doesn't pretend to be sporty — acceleration is adequate rather than exhilarating — but the powertrain is hushed and stress-free in the city.

Symmetrical AWD with X-MODE for off-road situations means the Forester is genuinely capable when roads deteriorate. X-MODE's grip control worked brilliantly on a muddy track outside Naivasha.

The interior is spacious and practical — best-in-class headroom means even tall adults are comfortable, and the boot is massive. The panoramic sunroof floods the cabin with light and makes the space feel airy.

The 8" infotainment with SUBARU STARLINK is intuitive and connected. Apple CarPlay, Android Auto and a 4G Wi-Fi hotspot are all present.

Where the Forester falls short is in interior premium feel — it's functional rather than luxurious. The exterior design is conservative. And while EyeSight works brilliantly, the lane assist system can be overly aggressive on winding Kenyan roads.`,
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?w=1200&q=80",
    authorName: "Patrick Ochieng",
    authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80",
    date: "2024-01-10",
    overallRating: 4.5,
    ratings: {
      performance: 4.2,
      comfort: 4.5,
      reliability: 4.8,
      value: 4.6,
      safety: 5.0,
      economy: 4.4,
    },
    pros: [
      "EyeSight is class-leading safety tech",
      "Excellent headroom and interior space",
      "Symmetrical AWD with X-MODE",
      "Subaru's renowned reliability",
      "4G Wi-Fi hotspot standard",
      "Best-in-class boot space",
    ],
    cons: [
      "Interior design feels conservative",
      "Lane assist can be over-eager",
      "Exterior styling is polarising",
      "Not as fun to drive as CX-5",
    ],
    verdict: "For the safety-conscious Kenyan family, the Forester is the answer. EyeSight works, AWD is reassuring, and space is generous. It's not the flashiest or most exciting choice, but it might be the most responsible one.",
    tags: ["Family SUV", "Safety", "AWD", "EyeSight", "Practical"],
    helpful: 298,
    views: 5400,
    recommended: true,
  },
  {
    id: "toyota-prado-review",
    carId: "toyota-prado-2024",
    make: "Toyota",
    model: "Land Cruiser Prado",
    year: 2024,
    title: "Toyota Land Cruiser Prado 2024 – Kenya's Premium Off-Roader",
    summary: "The Prado remains the go-to premium 4x4 for Kenya's elite — and the new model is better than ever.",
    content: `If there's one vehicle that symbolises success and capability in Kenya's business world, it's the Toyota Land Cruiser Prado. Company directors, NGO managers, and safari operators all swear by it — and the 2024 model gives them more reasons than ever to remain loyal.

The 2.7L petrol engine is smooth and refined, though we'd ideally want the diesel for its stronger pulling power and better economy in Kenya's vast distances. The standard 4WD system with crawl control is exemplary — there's almost nothing this car can't tackle.

Inside, the new Prado leaps forward in luxury. The large digital display, premium leather, and new premium audio system create a genuinely executive environment. All seven seats are comfortable, and the third row folds electrically — a small touch that owners will appreciate daily.

The Multi-Terrain Select system lets you choose between different surface modes, and the car adjusts all systems accordingly. Whether it's rock, sand, mud or snow, the Prado optimises itself. Combined with the Multi-Terrain Monitor's 360-degree camera view, navigating difficult terrain is almost effortless.

Ride comfort on tarmac has been specifically improved for the Kenyan market — a welcome change that means the Prado is now genuinely comfortable on the Northern Bypass as well as in the bush.

The price is eye-watering, and running costs aren't low. But the Prado's resale value is second to none in Kenya, and its combination of status, capability and reliability is unmatched.`,
    image: "https://images.unsplash.com/photo-1619767886558-efdc259cde1a?w=1200&q=80",
    authorName: "Sarah Njoroge",
    authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80",
    date: "2024-03-12",
    overallRating: 4.8,
    ratings: {
      performance: 4.7,
      comfort: 4.9,
      reliability: 5.0,
      value: 4.5,
      safety: 4.8,
      economy: 4.3,
    },
    pros: [
      "Unmatched off-road capability",
      "Premium executive interior",
      "Exceptional Toyota reliability",
      "Best resale value in Kenya",
      "Multi-Terrain Monitor system",
      "7 comfortable seats",
    ],
    cons: [
      "Very high purchase price",
      "Petrol engine less economical than diesel",
      "Large size difficult in Nairobi CBD",
    ],
    verdict: "The Land Cruiser Prado justifies every shilling of its premium price. In Kenya's market, where off-road ability genuinely matters and resale value is critical, the Prado is simply the best all-round premium SUV money can buy.",
    tags: ["Premium SUV", "4WD", "Luxury", "Off-Road", "7 Seats", "Safari"],
    helpful: 756,
    views: 14200,
    recommended: true,
  },
];
