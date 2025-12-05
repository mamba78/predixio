// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import { Search, Grid3X3, List } from "lucide-react";
import MarketCardGrid from "@/components/ui/MarketCardGrid";
import MarketCardList from "@/components/ui/MarketCardList";
import StatsBar from "@/components/ui/StatsBar";
import CategoryTabs from "@/components/ui/CategoryTabs";
import ViewToggle from "@/components/ui/ViewToggle";
import SortSelect from "@/components/ui/SortSelect";
import { Market } from "@/types/market";

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
      })
      .catch(() => {
        const fallback: Market[] = [
          { title: "Will Bitcoin hit $100K by Dec 31, 2025?", platform: "Polymarket", yes_price: "0.72", no_price: "0.28", volume: 3800000, category: "Crypto", link: process.env.NEXT_PUBLIC_AFFILIATE_POLYMARKET || "https://polymarket.com" },
          // ... more
        ];
        setMarkets(fallback);
        setFiltered(fallback);
      });
  }, []);

  useEffect(() => {
    let result = markets.filter(m =>
      m.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "All" || m.category === category)
    );

    result.sort((a, b) => {
      if (sortBy === "volume") return b.volume - a.volume;
      if (sortBy === "yes") return parseFloat(b.yes_price) - parseFloat(a.yes_price);
      return a.title.localeCompare(b.title);
    });

    setFiltered(result);
  }, [search, category, sortBy, markets]);

  return (
    <main className="min-h-screen bg-black text-white pb-24">
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-black to-black" />
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
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-6 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-4 top-4 w-5 h-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search markets..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-12 pr-6 py-4 bg-gray-900/80 border border-gray-800 rounded-2xl text-lg focus:outline-none focus:border-primary transition"
            />
          </div>

          <div className="flex gap-3">
            <SortSelect value={sortBy} onChange={setSortBy} />
            <ViewToggle isGrid={isGrid} toggle={() => setIsGrid(!isGrid)} />
          </div>
        </div>

        <CategoryTabs active={category} onChange={setCategory} />

        {/* Markets */}
        <div className={isGrid
          ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
          : "space-y-4"
        }>
          {filtered.length === 0 ? (
            <p className="col-span-full text-center py-20 text-gray-500 text-xl">
              No markets found
            </p>
          ) : (
            filtered.map((market) => (
              isGrid ? (
                <MarketCardGrid key={market.title} market={market} />
              ) : (
                <MarketCardList key={market.title} market={market} />
              )
            ))
          )}
        </div>
      </section>
    </main>
  );
}