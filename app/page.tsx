// app/page.tsx — FINAL VERSION WITH EVERYTHING
"use client";

import { useState, useEffect } from "react";
import StatsBar from "@/components/StatsBar";
import MarketCard from "@/components/MarketCard";

export default function Home() {
  const [markets, setMarkets] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [isGrid, setIsGrid] = useState(true);

  // Load markets
  useEffect(() => {
    fetch("/api/markets")
      .then(r => r.json())
      .then(data => {
        setMarkets(data);
        setFiltered(data);
      })
      .catch(() => {
        const fallback = [
          { title: "Will Bitcoin hit $100K by Dec 31, 2025?", platform: "Polymarket", yes_price: "0.72", no_price: "0.28", volume: 3800000, category: "Crypto", link: "https://polymarket.com" },
          { title: "Trump wins 2028 election?", platform: "Polymarket", yes_price: "0.65", no_price: "0.35", volume: 2100000, category: "Politics", link: "https://polymarket.com" },
          { title: "Ethereum above $5K in 2026?", platform: "Polymarket", yes_price: "0.41", no_price: "0.59", volume: 1500000, category: "Crypto", link: "https://polymarket.com" },
          { title: "Apple foldable iPhone in 2026?", platform: "Polymarket", yes_price: "0.45", no_price: "0.55", volume: 800000, category: "Tech", link: "https://polymarket.com" },
        ];
        setMarkets(fallback);
        setFiltered(fallback);
      });
  }, []);

  // Filter by search + category
  useEffect(() => {
    let result = markets;
    if (search) result = result.filter((m: any) => m.title.toLowerCase().includes(search.toLowerCase()));
    if (category !== "All") result = result.filter((m: any) => m.category === category);
    setFiltered(result);
  }, [search, category, markets]);

  return (
    <main className="min-h-screen bg-black dark:bg-black text-white dark:text-white">
      {/* Hero */}
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

      {/* Controls — search + categories + grid/list + dark/light toggle */}
      <section className="max-w-7xl mx-auto px-6 -mt-10">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
          <input
            type="text"
            placeholder="Search markets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full lg:w-96 px-6 py-3 bg-gray-900 border border-gray-700 rounded-full focus:outline-none focus:border-cyan-500"
          />

          <div className="flex flex-wrap gap-3">
            {["All", "Crypto", "Politics", "Sports", "Tech", "Entertainment"].map(cat => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-3 rounded-full font-medium transition ${category === cat ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-black" : "bg-gray-800 text-gray-400 hover:text-white"}`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="flex gap-4">
            {/* Grid/List Toggle */}
            <button
              onClick={() => setIsGrid(!isGrid)}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold rounded-full hover:scale-105 transition"
            >
              {isGrid ? "List View" : "Grid View"}
            </button>

            {/* Dark/Light Toggle */}
            <button
              onClick={() => document.documentElement.classList.toggle("dark")}
              className="px-6 py-3 bg-gray-800 rounded-full hover:bg-gray-700 transition"
            >
              {document.documentElement.classList.contains("dark") ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>

        {/* Markets */}
        <div className={isGrid 
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32" 
          : "space-y-8 pb-32"
        }>
          {filtered.length > 0 ? (
            filtered.map((market: any, i: number) => (
              <MarketCard key={i} market={market} />
            ))
          ) : (
            <div className="text-center py-32 text-xl text-gray-400">No markets found</div>
          )}
        </div>
      </section>
    </main>
  );
}