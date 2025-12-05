// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Search } from "lucide-react";
import MarketCard from "@/components/MarketCard";           // ← your existing card (we’ll improve it below)
import StatsBar from "@/components/StatsBar";
import CategoryTabs from "@/components/CategoryTabs";
import ViewToggle from "@/components/ViewToggle";
import ClientFooter from "@/components/ClientFooter";

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
  const [filtered, setFiltered] = useState<Market[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [isGrid, setIsGrid] = useState(true);
  const [sortBy, setSortBy] = useState<"volume" | "yes" | "alpha">("volume");

  useEffect(() => {
    fetch("/api/markets")
      .then(r => r.json())
      .then(data => {
        setMarkets(data);
        setFiltered(data);
      });
  }, []);

  useEffect(() => {
    let result = markets
      .filter(m => m.title.toLowerCase().includes(search.toLowerCase()))
      .filter(m => category === "All" || m.category === category);

    result.sort((a, b) => {
      if (sortBy === "volume") return b.volume - a.volume;
      if (sortBy === "yes") return Number(b.yes_price) - Number(a.yes_price);
      return a.title.localeCompare(b.title);
    });

    setFiltered(result);
  }, [search, category, sortBy, markets]);

  return (
    <main className="min-h-screen bg-black text-white pb-32">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-black to-black" />
        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            PREDIXIO
          </h1>
          <p className="text-xl md:text-2xl mt-6 text-gray-300">
            All Prediction Markets • Real-Time • One Dashboard
          </p>
          <StatsBar className="mt-16" />
        </div>
      </section>

      {/* Controls */}
      <section className="max-w-7xl mx-auto px-6 -mt-8">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-10">
          <div className="relative flex-1 max-w-xl">
            <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search any market..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="w-full pl-14 pr-6 py-5 bg-gray-900/90 border border-gray-800 rounded-2xl text-lg focus:outline-none focus:border-primary transition"
            />
          </div>

          <div className="flex gap-4">
            <select
              value={sortBy}
              onChange={e => setSortBy(e.target.value as any)}
              className="px-6 py-4 bg-gray-900/90 border border-gray-800 rounded-2xl focus:outline-none focus:border-primary"
            >
              <option value="volume">Highest Volume</option>
              <option value="yes">Highest Yes</option>
              <option value="alpha">A-Z</option>
            </select>

            <ViewToggle isGrid={isGrid} toggle={() => setIsGrid(!isGrid)} />
          </div>
        </div>

        <CategoryTabs active={category} onChange={setCategory} />

        {/* MARKETS – Grid or List */}
        <div className={isGrid
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          : "space-y-5"
        }>
          {filtered.map(market => (
            <MarketCard key={market.title + market.yes_price} market={market} isGrid={isGrid} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="text-center py-20 text-xl text-gray-500">
            No markets match your filters
          </div>
        )}
      </section>
    </main>
  );
}