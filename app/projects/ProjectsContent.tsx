"use client";

import Link from "next/link";
import Image from "next/image";

const platforms = [
  {
    name: "Polymarket",
    description: "World's largest decentralized prediction market on Polygon.",
    logo: "/logos/polymarket.png",
    type: "Crypto",
    regulated: false,
    volume: "$2.1B+",
    markets: "1,200+",
    status: "Live",
    link: process.env.NEXT_PUBLIC_AFFILIATE_POLYMARKET || "https://polymarket.com",
    affiliate: true,
  },
  {
    name: "Manifold Markets",
    description: "Play-money forecasting platform. Fastest-growing community.",
    logo: "/logos/manifold.png",
    type: "Play Money",
    regulated: false,
    volume: "10B+ Mana",
    markets: "15,000+",
    status: "Live",
    link: "https://manifold.markets",
  },
  {
    name: "Kalshi",
    description: "CFTC-regulated real-money prediction markets. US legal.",
    logo: "/logos/kalshi.png",
    type: "Real Money",
    regulated: true,
    volume: "$500M+",
    markets: "100+",
    status: "Coming Soon",
    link: "https://kalshi.com",
  },
  {
    name: "PredictIt",
    description: "Academic political prediction market with real money.",
    logo: "/logos/predictit.png",
    type: "Real Money",
    regulated: true,
    volume: "$1B+",
    markets: "200+",
    status: "Coming Soon",
    link: "https://predictit.org",
  },
];

export default function ProjectsContent() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black hero-gradient mb-6">
            Best Prediction Market Platforms 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Compare Polymarket vs Manifold vs Kalshi vs PredictIt — real-time volumes, regulation, and features.
          </p>
        </div>

        {/* YOUR FULL TABLE + GRID FROM BEFORE */}
        {/* Paste your table and grid here */}
      </div>
    </div>
  );
}
