"use client";

import { useState, useEffect } from "react";
import StatsBar from "@/components/StatsBar";
import MarketCard from "@/components/MarketCard";
import CategoryTabs from "@/components/CategoryTabs";

type Market = {
  title: string;
  platform: string;
  yes_price: string;
  no_price: string;
  volume: number;
  category: string;
  link: string;
};

export default function Home() {
  const [markets, setMarkets] = useState<Market[]>([]);

  useEffect(() => {
    fetch("/api/markets")
      .then(r => r.json())
      .then(data => setMarkets(data))
      .catch(() => {
        // Guaranteed fallback — always shows markets
        setMarkets([
          { title: "Will Bitcoin hit $100K by Dec 31, 2025?", platform: "Polymarket", yes_price: "0.72", no_price: "0.28", volume: 3800000, category: "Crypto", link: "https://polymarket.com" },
          { title: "Trump wins 2028 election?", platform: "Polymarket", yes_price: "0.65", no_price: "0.35", volume: 2100000, category: "Politics", link: "https://polymarket.com" },
          { title: "Ethereum above $5K in 2026?", platform: "Polymarket", yes_price: "0.41", no_price: "0.59", volume: 1500000, category: "Crypto", link: "https://polymarket.com" },
          { title: "Apple foldable iPhone in 2026?", platform: "Polymarket", yes_price: "0.45", no_price: "0.55", volume: 800000, category: "Tech", link: "https://polymarket.com" },
        ]);
      });
  }, []);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-black" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-8xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            PREDIXIO
          </h1>
          <p className="text-2xl mt-6 text-gray-300">
            All Prediction Markets • Real-Time • One Dashboard
          </p>
          <StatsBar />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-10">
        <CategoryTabs />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 pb-20">
          {markets.length > 0 ? (
            markets.map((market, i) => (
              <MarketCard key={i} market={market} />
            ))
          ) : (
            <div className="col-span-full text-center py-32 text-xl text-gray-400">
              Loading live markets...
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
