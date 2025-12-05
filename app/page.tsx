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

  useEffect(() => {
    let result = markets;
    if (search) result = result.filter((m: any) => m.title.toLowerCase().includes(search.toLowerCase()));
    if (category !== "All") result = result.filter((m: any) => m.category === category);
    setFiltered(result);
  }, [search, category, markets]);

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
        {/* Search + Toggle on one line */}
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-8">
          <input
            type="text"
            placeholder="Search markets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full lg:w-96 px-8 py-4 bg-gray-900 border border-gray-700 rounded-full text-lg focus:outline-none focus:border-cyan-500 transition"
          />

          <div className="flex gap-4">
            <button
              onClick={() => setIsGrid(!isGrid)}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold rounded-full shadow-2xl hover:scale-105 transition"
            >
              {isGrid ? (
                <>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/></svg>
                  Grid View
                </>
              ) : (
                <>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"/></svg>
                  List View
                </>
              )}
            </button>

            <button
              onClick={() => document.documentElement.classList.toggle("dark")}
              className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-yellow-500/20 to-orange-600/20 border border-yellow-500/30 rounded-full text-yellow-400 font-medium hover:from-yellow-500/40 transition"
            >
              {document.documentElement.classList.contains("dark") ? "☀️ Light" : "🌙 Dark"}
            </button>
          </div>
        </div>

        {/* Categories — centered */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Crypto", "Politics", "Sports", "Tech", "Entertainment"].map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-8 py-3 rounded-full font-medium transition-all ${category === cat
                ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-black shadow-lg"
                : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Markets */}
        <div className={isGrid ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-32" : "space-y-6 pb-32"}>
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
