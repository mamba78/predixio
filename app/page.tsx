// app/page.tsx — FINAL INFINITE SCROLL MASTERPIECE (2025 PERFECTION)
"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import MarketCard from "@/components/MarketCard";
import StatsBar from "@/components/StatsBar";
import CategoryTabs from "@/components/CategoryTabs";
import ViewToggle from "@/components/ViewToggle";
import MarketCardSkeleton from "@/components/MarketCardSkeleton";
import SearchBar from "@/components/SearchBar";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useInView } from "react-intersection-observer";
import Link from "next/link";

type Market = {
  title: string;
  platform: string;
  yes_price: string;
  no_price: string;
  volume: number;
  category: string;
  link: string;
  created_at?: number;
  liquidity?: number;
};

const PAGE_SIZE = 30;

export default function Home() {
  const [allMarkets, setAllMarkets] = useState<Market[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [isGrid, setIsGrid] = useState(true);
  const [sortBy, setSortBy] = useState<"volume" | "yes" | "alpha" | "newest" | "liquidity">("volume");
  const [loading, setLoading] = useState(true);

  const [displayedMarkets, setDisplayedMarkets] = useState<Market[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  // Fetch markets
  useEffect(() => {
    fetch("/api/markets")
      .then(r => r.json())
      .then(data => {
        setAllMarkets(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  // Filter + sort
  const filteredMarkets = useMemo(() => {
    let result = allMarkets
      .filter(m => typeof m.title === "string" && m.title.toLowerCase().includes(search.toLowerCase()))
      .filter(m => category === "All" || m.category === category);

    result.sort((a, b) => {
      if (sortBy === "volume") return (b.volume || 0) - (a.volume || 0);
      if (sortBy === "yes") {
        const aYes = parseFloat(a.yes_price ?? "0") || 0;
        const bYes = parseFloat(b.yes_price ?? "0") || 0;
        return bYes - aYes;
      }
      if (sortBy === "newest") return (b.created_at || 0) - (a.created_at || 0);
      if (sortBy === "liquidity") return (b.liquidity || b.volume || 0) - (a.liquidity || a.volume || 0);
      return a.title.localeCompare(b.title);
    });

    return result;
  }, [allMarkets, search, category, sortBy]);

  // Initial load
  useEffect(() => {
    const initial = filteredMarkets.slice(0, PAGE_SIZE);
    setDisplayedMarkets(initial);
    setHasMore(filteredMarkets.length > PAGE_SIZE);
  }, [filteredMarkets]);

  // Load more
  const loadMore = useCallback(async () => {
    if (isLoadingMore || !hasMore) return;
    setIsLoadingMore(true);
    await new Promise(r => setTimeout(r, 400));
    const nextStart = displayedMarkets.length;
    const nextEnd = nextStart + PAGE_SIZE;
    const nextItems = filteredMarkets.slice(nextStart, nextEnd);
    setDisplayedMarkets(prev => [...prev, ...nextItems]);
    setHasMore(nextEnd < filteredMarkets.length);
    setIsLoadingMore(false);
  }, [displayedMarkets.length, filteredMarkets, isLoadingMore, hasMore]);

  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView && hasMore && !isLoadingMore) {
      loadMore();
    }
  }, [inView, hasMore, isLoadingMore, loadMore]);

  return (
    <ErrorBoundary>
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-black hero-gradient">PREDIXIO</h1>
          <p className="text-xl md:text-2xl mt-6 text-gray-300">All Prediction Markets • Real-Time • One Dashboard</p>
          <StatsBar className="mt-16" />
        </div>
      </section>

      {/* Platforms Banner */}
      <div className="py-8 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 backdrop-blur-xl border-y border-primary/20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <p className="text-xl text-gray-300">
            Live data from{" "}
            <Link href="/projects" className="font-bold text-primary hover:underline">
              Polymarket • Manifold • Kalshi
            </Link>{" "}
            and more
          </p>
        </div>
      </div>

      {/* Main Content */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 pb-32">
        {/* Controls */}
        <div className="space-y-8 mb-12">
          <SearchBar value={search} onChange={setSearch} />

          <div className="flex flex-wrap items-center justify-between gap-6">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-8 py-4 bg-gray-900/90 border border-gray-800 rounded-3xl focus:outline-none focus:border-primary text-base font-medium min-w-[260px]"
            >
              <option value="volume">Highest Volume</option>
              <option value="yes">Highest Yes Price</option>
              <option value="liquidity">Most Liquid</option>
              <option value="newest">Newest First</option>
              <option value="alpha">A-Z</option>
            </select>

            {process.env.NEXT_PUBLIC_ENABLE_VIEW_TOGGLE !== "false" && (
              <ViewToggle isGrid={isGrid} toggle={() => setIsGrid(!isGrid)} />
            )}
          </div>
        </div>

        <CategoryTabs active={category} onChange={setCategory} markets={allMarkets} />

        {/* Markets */}
        {loading ? (
          <div className={isGrid ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-6"}>
            {[...Array(12)].map((_, i) => (
              <MarketCardSkeleton key={i} isGrid={isGrid} />
            ))}
          </div>
        ) : displayedMarkets.length === 0 ? (
          <div className="text-center py-32">
            <p className="text-4xl font-bold text-gray-500 mb-4">No markets found</p>
            <p className="text-gray-400 text-lg">Try searching "Trump", "Bitcoin", or "Election"</p>
          </div>
        ) : (
          <>
            <div className={isGrid ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-6"}>
              {displayedMarkets.map(market => (
                <ErrorBoundary key={market.link}>
                  <MarketCard key={market.link} market={market} isGrid={isGrid} />
                </ErrorBoundary>
              ))}
            </div>

            {/* Infinite Scroll Trigger */}
            {hasMore && (
              <div ref={ref} className="py-16 text-center">
                {isLoadingMore ? (
                  <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary" />
                ) : (
                  <p className="text-gray-400 text-lg">Scroll for more</p>
                )}
              </div>
            )}
          </>
        )}
      </section>
    </ErrorBoundary>
  );
}