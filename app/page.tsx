// app/page.tsx — FINAL VERSION (WORKS ON GITHUB PAGES + VERCEL)
"use client";

import { useState, useEffect, useMemo } from "react";
import MarketCard from "@/components/MarketCard";
import StatsBar from "@/components/StatsBar";
import CategoryTabs from "@/components/CategoryTabs";
import ViewToggle from "@/components/ViewToggle";
import MarketCardSkeleton from "@/components/MarketCardSkeleton";

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
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [isGrid, setIsGrid] = useState(true);
  const [sortBy, setSortBy] = useState<"volume" | "yes" | "alpha">("volume");
  const [loading, setLoading] = useState(true);

  // Fetch markets
  useEffect(() => {
    fetch("/api/markets")
      .then(r => r.json())
      .then(data => {
        setMarkets(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Filter + Sort
  const filteredMarkets = useMemo(() => {
    let result = markets
      .filter(m => m.title.toLowerCase().includes(search.toLowerCase()))
      .filter(m => category === "All" || m.category === category);

    result.sort((a, b) => {
      if (sortBy === "volume") return (b.volume || 0) - (a.volume || 0);
      if (sortBy === "yes") return parseFloat(b.yes_price || "0") - parseFloat(a.yes_price || "0");
      return a.title.localeCompare(b.title);
    });

    return result;
  }, [markets, search, category, sortBy]);

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-black hero-gradient">PREDIXIO</h1>
          <p className="text-xl md:text-2xl mt-6 text-gray-300">All Prediction Markets • Real-Time • One Dashboard</p>
          <StatsBar className="mt-16" />
        </div>
      </section>

      <section className="relative z-20 max-w-7xl mx-auto px-6 pb-32">
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-between mb-10">
          <div className="relative flex-1 max-w-xl">
            <span className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 text-lg">Search</span>
            <input
              type="text"
              placeholder="Search any market..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-16 pr-6 py-5 bg-gray-900/90 border border-gray-800 rounded-2xl text-lg focus:outline-none focus:border-primary transition"
            />
          </div>

          <div className="flex gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-6 py-4 bg-gray-900/90 border border-gray-800 rounded-2xl focus:outline-none focus:border-primary"
            >
              <option value="volume">Highest Volume</option>
              <option value="yes">Highest Yes</option>
              <option value="alpha">A-Z</option>
            </select>
            <ViewToggle isGrid={isGrid} toggle={() => setIsGrid(!isGrid)} />
          </div>
        </div>

        <CategoryTabs active={category} onChange={setCategory} markets={markets} />

        {/* Simple, fast, working grid/list */}
        <div className={isGrid
          ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          : "space-y-6"
        }>
          {loading ? (
            [...Array(12)].map((_, i) => <MarketCardSkeleton key={i} isGrid={isGrid} />)
          ) : filteredMarkets.length === 0 ? (
            <div className="col-span-full text-center py-24 text-2xl text-gray-500">
              No markets found
            </div>
          ) : (
            filteredMarkets.map((market) => (
              <MarketCard key={market.title} market={market} isGrid={isGrid} />
            ))
          )}
        </div>
      </section>
    </>
  );
}