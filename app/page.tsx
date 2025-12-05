import StatsBar from "@/components/StatsBar";
import MarketCard from "@/components/MarketCard";
import CategoryTabs from "@/components/CategoryTabs";
import { Suspense } from "react";

export const dynamic = "force-dynamic";
export const revalidate = 60;

// Async component to fetch and render markets
async function MarketsGrid() {
  let markets = [];

  try {
    const res = await fetch("https://predixio.vercel.app/api/markets", {
      cache: "no-store",
    });
    if (res.ok) markets = await res.json();
  } catch (e) {
    console.log("Using fallback markets");
  }

  // Fallback if API fails (always shows something)
  if (markets.length === 0) {
    markets = [
      { title: "Will Bitcoin hit $100K by Dec 31, 2025?", platform: "Polymarket", yes_price: "0.72", no_price: "0.28", volume: 3800000, category: "Crypto" },
      { title: "Trump wins 2028 election?", platform: "Polymarket", yes_price: "0.65", no_price: "0.35", volume: 2100000, category: "Politics" },
      { title: "Ethereum above $5K in 2026?", platform: "Polymarket", yes_price: "0.41", no_price: "0.59", volume: 1500000, category: "Crypto" },
      { title: "Apple foldable iPhone in 2026?", platform: "Polymarket", yes_price: "0.45", no_price: "0.55", volume: 800000, category: "Tech" },
    ];
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 pb-32" suppressHydrationWarning>
      {markets.map((market: any, i: number) => (
        <MarketCard key={i} market={market} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
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

      {/* Markets Section */}
      <section className="max-w-7xl mx-auto px-6 -mt-10">
        <CategoryTabs />
        <Suspense fallback={<div className="text-center py-32 text-xl text-gray-400">Loading live markets...</div>}>
          <MarketsGrid />
        </Suspense>
      </section>
    </main>
  );
}