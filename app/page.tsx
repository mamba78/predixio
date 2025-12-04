import StatsBar from "@/components/StatsBar";
import MarketCard from "@/components/MarketCard";
import CategoryTabs from "@/components/CategoryTabs";
import { Suspense } from "react";

export const dynamic = 'force-dynamic';  // Forces dynamic rendering — no pre-render fetch errors

export default async function Home() {
  // Fetch markets dynamically (runs on each request, not build time)
  const res = await fetch("http://localhost:3000/api/markets", { 
    cache: 'no-store',  // No caching for real-time
    next: { revalidate: 0 } 
  });
  let markets = [];
  if (res.ok) {
    markets = await res.json();
  }

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-black pointer-events-none" />
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

      {/* Categories + Markets */}
      <section className="max-w-7xl mx-auto px-6 -mt-10">
        <CategoryTabs />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          <Suspense fallback={<div className="col-span-full text-center py-8 text-gray-500">Loading markets...</div>}>
            {markets.length > 0 ? (
              markets.map((m: any, i: number) => (
                <MarketCard key={i} market={m} />
              ))
            ) : (
              <div className="col-span-full text-center py-8 text-gray-500">No markets available — check API keys</div>
            )}
          </Suspense>
        </div>
      </section>
    </main>
  );
}