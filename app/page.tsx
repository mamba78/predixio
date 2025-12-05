"use client";

import { useState, useEffect } from "react";
import StatsBar from "@/components/StatsBar";
import MarketCard from "@/components/MarketCard";

type Market = {
  title: string;
  platform: string;
  yes_price: string;
  no_price: string;
  volume: number;
  category: string;
  link?: string;
};

export default function Home() {
  const [markets, setMarkets] = useState<Market[]>([]);
  const [filtered, setFiltered] = useState<Market[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [sortBy, setSortBy] = useState("volume");

  useEffect(() => {
    fetch("/api/markets")
      .then(r => r.json())
      .then(data => {
        setMarkets(data);
        setFiltered(data);
      })
      .catch(() => {
        const fallback: Market[] = [
          { title: "Will Bitcoin hit $100K by Dec 31, 2025?", platform: "Polymarket", yes_price: "0.72", no_price: "0.28", volume: 3800000, category: "Crypto", link: "https://polymarket.com" },
          { title: "Trump wins 2028 election?", platform: "Polymarket", yes_price: "0.65", no_price: "0.35", volume: 2100000, category: "Politics", link: "https://polymarket.com" },
          { title: "Ethereum above $5K in 2026?", platform: "Polymarket", yes_price: "0.41", no_price: "0.59", volume: 1500000, category: "Crypto", link: "https://polymarket.com" },
          { title: "Apple foldable iPhone in 2026?", platform: "Polymarket", yes_price: "0.45", no_price: "0.55", volume: 800000, category: "Tech", link: "https://polymarket.com" },
        ];
        setMarkets(fallback);
        setFiltered(fallback);
      });
  }, []);

  useEffect(() => {
    let result = [...markets];

    if (search) result = result.filter(m => m.title.toLowerCase().includes(search.toLowerCase()));
    if (category !== "All") result = result.filter(m => m.category === category);

    // Sorting
    if (sortBy === "volume") result.sort((a, b) => b.volume - a.volume);
    if (sortBy === "alpha") result.sort((a, b) => a.title.localeCompare(b.title));
    if (sortBy === "yes") result.sort((a, b) => Number(b.yes_price) - Number(a.yes_price));

    setFiltered(result);
  }, [search, category, sortBy, markets]);

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero with 70px margin */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20 mb-20" />
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
        {/* Search + Sorting */}
        <div className="flex flex-col md:flex-row gap-6 items-center justify-between mb-8">
          <input
            type="text"
            placeholder="Search markets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 px-8 py-4 bg-gray-900 border border-gray-700 rounded-full text-lg focus:outline-none focus:border-cyan-500"
          />

          <div className="flex gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-6 py-4 bg-gray-900 border border-gray-700 rounded-full text-white focus:outline-none"
            >
              <option value="volume">Sort by Volume</option>
              <option value="yes">Sort by Yes Price</option>
              <option value="alpha">Sort by Name</option>
            </select>
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Crypto", "Politics", "Sports", "Tech", "Entertainment"].map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-8 py-3 rounded-full font-medium transition-all ${category === cat ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-black" : "bg-gray-800 text-gray-400 hover:text-white"}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Markets */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32">
          {filtered.length > 0 ? (
            filtered.map((market, i) => (
              <MarketCard key={i} market={market} />
            ))
          ) : (
            <div className="col-span-full text-center py-32 text-xl text-gray-400">No markets found</div>
          )}
        </div>
      </section>
    </main>
  );
}
