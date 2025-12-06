// app/page.tsx — FINAL INFINITE SCROLL MASTERPIECE (NATIVE, ZERO-ERROR GOD MODE)
"use client";

import { useState, useEffect, useMemo, useLayoutEffect, useRef, useCallback } from "react";
import MarketCard from "@/components/MarketCard";
import StatsBar from "@/components/StatsBar";
import CategoryTabs from "@/components/CategoryTabs";
import ViewToggle from "@/components/ViewToggle";
import MarketCardSkeleton from "@/components/MarketCardSkeleton";
import SearchBar from "@/components/SearchBar";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useInView } from "react-intersection-observer";

type Market = {
  title: string;
  platform: string;
  yes_price: string;
  no_price: string;
  volume: number;
  category: string;
  link: string;
};

const PAGE_SIZE = 30;

export default function Home() {
  const [allMarkets, setAllMarkets] = useState<Market[]>([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [isGrid, setIsGrid] = useState(true);
  const [sortBy, setSortBy] = useState<"volume" | "yes" | "alpha">("volume");
  const [loading, setLoading] = useState(true);

  const [displayedMarkets, setDisplayedMarkets] = useState<Market[]>([]);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);

  useEffect(() => {
    fetch("/api/markets", { next: { revalidate: 10 } })
      .then(r => r.json())
      .then(data => {
        setAllMarkets(data || []);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

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
      return a.title.localeCompare(b.title);
    });

    return result;
  }, [allMarkets, search, category, sortBy]);

  useEffect(() => {
    const initial = filteredMarkets.slice(0, PAGE_SIZE);
    setDisplayedMarkets(initial);
    setHasMore(filteredMarkets.length > PAGE_SIZE);
  }, [filteredMarkets]);

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

  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce: false,
  });

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

      <section className="relative z-20 max-w-7xl mx-auto px-6 pb-32">
        <div className="space-y-8 mb-10">
          <SearchBar value={search} onChange={setSearch} />
          <div className="flex flex-wrap items-center justify-between gap-4">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-6 py-4 bg-gray-900/90 border border-gray-800 rounded-2xl focus:outline-none focus:border-primary text-base min-w-[200px]"
            >
              <option value="volume">Highest Volume</option>
              <option value="yes">Highest Yes</option>
              <option value="alpha">A-Z</option>
            </select>
            <ViewToggle isGrid={isGrid} toggle={() => setIsGrid(!isGrid)} />
          </div>
        </div>

        <CategoryTabs active={category} onChange={setCategory} markets={allMarkets} />

        {loading ? (
          <div className={isGrid ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-6"}>
            {[...Array(12)].map((_, i) => <MarketCardSkeleton key={i} isGrid={isGrid} />)}
          </div>
        ) : displayedMarkets.length === 0 ? (
          <div className="text-center py-24">
            <p className="text-3xl font-bold text-gray-500 mb-4">No markets found</p>
            <p className="text-gray-400">Try searching "Trump", "Bitcoin", or "Election"</p>
          </div>
        ) : (
          <>
            <div className={isGrid ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6" : "space-y-6"}>
              {displayedMarkets.map(market => (
                <ErrorBoundary key={market.link}>
                  <MarketCard market={market} isGrid={isGrid} />
                </ErrorBoundary>
              ))}
            </div>

            {hasMore && (
              <div ref={ref} className="py-12 text-center">
                {isLoadingMore ? (
                  <div className="inline-block animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-primary" />
                ) : (
                  <p className="text-gray-400">Scroll for more</p>
                )}
              </div>
            )}

            {!hasMore && displayedMarkets.length > 0 && (
              <div className="py-16 text-center text-gray-500">
                <p className="text-lg">You've reached the end</p>
              </div>
            )}
          </>
        )}
      </section>
    </ErrorBoundary>
  );
}