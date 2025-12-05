import StatsBar from "@/components/StatsBar";
import MarketCard from "@/components/MarketCard";
import CategoryTabs from "@/components/CategoryTabs";
import ViewToggle from "@/components/ViewToggle";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

// Set this to false to completely disable toggle
const SHOW_VIEW_TOGGLE = true;

async function MarketsGrid() {
  const res = await fetch("https://predixio.vercel.app/api/markets", { cache: "no-store" });
  const markets = res.ok ? await res.json() : [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 pb-32" suppressHydrationWarning>
      {markets.length > 0 ? (
        markets.map((market: any, i: number) => (
          <MarketCard key={i} market={market} />
        ))
      ) : (
        <div className="col-span-full text-center py-32 text-xl text-gray-400">
          Loading live markets...
        </div>
      )}
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen">
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
        <div className="flex items-center justify-between mb-8">
          <CategoryTabs />
          {SHOW_VIEW_TOGGLE && <ViewToggle />}
        </div>
        <Suspense fallback={<div className="text-center py-32 text-xl text-gray-400">Loading markets...</div>}>
          <MarketsGrid />
        </Suspense>
      </section>
    </main>
  );
}
