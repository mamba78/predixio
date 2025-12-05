"use client";

import { useState, useEffect } from "react";
import StatsBar from "@/components/StatsBar";
import MarketCard from "@/components/MarketCard";

const categories = ["All", "Crypto", "Politics", "Sports", "Tech", "Entertainment"];

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
        // Fallback
        const fallback = [
          { title: "Bitcoin $100K 2025", platform: "Polymarket", yes_price: "0.72", no_price: "0.28", volume: 3800000, category: "Crypto" },
          { title: "Trump wins 2028", platform: "Polymarket", yes_price: "0.65", no_price: "0.35", volume: 2100000, category: "Politics" },
          { title: "Ethereum $5K 2026", platform: "Polymarket", yes_price: "0.41", no_price: "0.59", volume: 1500000, category: "Crypto" },
        ];
        setMarkets(fallback);
        setFiltered(fallback);
      });
  }, []);

  useEffect(() => {
    let result = markets;

    if (search) {
      result = result.filter((m: any) => m.title.toLowerCase().includes(search.toLowerCase()));
    }

    if (category !== "All") {
      result = result.filter((m: any) => m.category === category);
    }

    setFiltered(result);
  }, [search, category, markets]);

  return (
    <main className="min-h-screen bg-black text-white">
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 to-purple-900/20" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-8xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
            PREDIXIO
          </h1>
          <p className="text-2xl mt-6 text-gray-300">
            All Prediction Markets • Real-Time • One Dashboard
          </p>
          <StatsBar />
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 -mt-10">
        {/* Search + Filters + Toggle */}
        <div className="flex flex-col md:flex-row gap-6 mb-8 items-center justify-between">
          <input
            type="text"
            placeholder="Search markets..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 px-6 py-3 bg-gray-900/80 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500"
          />

          <div className="flex gap-3 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-6 py-3 rounded-full font-medium transition-all ${category === cat
                  ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-black"
                  : "bg-gray-800 text-gray-400 hover:text-white"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <button
            onClick={() => setIsGrid(!isGrid)}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold rounded-full shadow-lg hover:scale-105 transition"
          >
            {isGrid ? "List View" : "Grid View"}
          </button>
        </div>

        {/* Markets Grid/List */}
        <div className={isGrid
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 pb-32"
          : "space-y-8 mt-8 pb-32"
        }>
          {filtered.length > 0 ? (
            filtered.map((market: any, i: number) => (
              <div key={i} className={!isGrid ? "flex gap-6 items-start" : ""}>
                <MarketCard market={market} />
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-32 text-xl text-gray-400">
              No markets found
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
