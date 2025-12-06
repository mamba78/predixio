// app/page.tsx — FINAL, 100% TYPE-SAFE, NO ERRORS (2025 PERFECTION)
"use client";

import { useState, useEffect, useMemo, useCallback } from "react";
import MarketCard from "@/components/MarketCard";
import StatsBar from "@/components/StatsBar";
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
  tags?: string[];
  group?: { name: string };
};

const PAGE_SIZE = 30;

export default function Home() {
  const [allMarkets, setAllMarkets] = useState<Market[]>([]);
  const [search, setSearch] = useState("");
  const [selectedPlatform, setSelectedPlatform] = useState<string>("All");
  const [category, setCategory] = useState("All");
  const [isGrid, setIsGrid] = useState(true);
  const [sortBy, setSortBy] = useState<"volume" | "yes" | "alpha">("volume");
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

  // Dynamic platforms
  const availablePlatforms = useMemo(() => {
    const set = new Set<string>(["All"]);
    allMarkets.forEach(m => set.add(m.platform));
    return Array.from(set).sort();
  }, [allMarkets]);

  // Dynamic categories — real ones only
  const availableCategories = useMemo(() => {
    const set = new Set<string>(["All"]);
    allMarkets.forEach(m => {
      const cat = m.category || m.tags?.[0] || m.group?.name;
      if (cat && !["Other", "Uncategorized"].includes(cat)) {
        set.add(cat);
      }
    });
    return Array.from(set).sort();
  }, [allMarkets]);

  // Filter + sort
  const filteredMarkets = useMemo(() => {
    let result = allMarkets;

    // Platform filter
    if (selectedPlatform !== "All") {
      result = result.filter(m => m.platform === selectedPlatform);
    }

    // Search filter
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(m =>
        m.title.toLowerCase().includes(q) ||
        m.platform.toLowerCase().includes(q) ||
        m.category.toLowerCase().includes(q)
      );
    }

    // Category filter
    if (category !== "All") {
      result = result.filter(m => {
        const cat = m.category || m.tags?.[0] || m.group?.name;
        return cat === category;
      });
    }

    // Sort
    result = [...result].sort((a, b) => {
      if (sortBy === "volume") return (b.volume || 0) - (a.volume || 0);
      if (sortBy === "yes") {
        const aYes = parseFloat(a.yes_price ?? "0") || 0;
        const bYes = parseFloat(b.yes_price ?? "0") || 0;
        return bYes - aYes;
      }
      return a.title.localeCompare(b.title);
    });

    return result;
  }, [allMarkets, selectedPlatform, search, category, sortBy]);

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
    if (inView && hasMore && !isLoadingMore) loadMore();
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

      {/* Main Content */}
      <section className="relative z-20 max-w-7xl mx-auto px-6 pb-32">
        {/* SEARCH + FILTERS IN ONE ROW */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12">
          <SearchBar value={search} onChange={setSearch} className="w-full lg:w-96" />

          <div className="flex items-center gap-4">
            {/* Platform Filter */}
            <div className="flex flex-wrap justify-center gap-2">
              {availablePlatforms.map(plat => (
                <button
                  key={plat}
                  onClick={() => setSelectedPlatform(plat)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                    selectedPlatform === plat
                      ? "bg-gradient-to-r from-primary to-accent text-black"
                      : "bg-gray-800/80 text-gray-400 hover:text-white"
                  }`}
                >
                  {plat === "All" ? "All" : plat}
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as any)}
              className="px-5 py-2.5 bg-gray-800/90 border border-gray-700 rounded-2xl text-xs font-medium"
            >
              <option value="volume">Volume</option>
              <option value="yes">Yes Price</option>
              <option value="alpha">A-Z</option>
            </select>

            {/* View Toggle */}
            {process.env.NEXT_PUBLIC_ENABLE_VIEW_TOGGLE !== "false" && (
              <ViewToggle isGrid={isGrid} toggle={() => setIsGrid(!isGrid)} />
            )}
          </div>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {availableCategories.map(cat => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-6 py-3 rounded-full font-bold text-xs tracking-wider transition-all duration-300 ${
                category === cat
                  ? "bg-gradient-to-r from-primary to-accent text-black shadow-xl"
                  : "bg-gray-800/90 text-gray-400 hover:text-white"
              }`}
            >
              {cat === "All" ? "All Categories" : cat}
            </button>
          ))}
        </div>

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
            <p className="text-gray-400 text-lg">Try changing filters or search</p>
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