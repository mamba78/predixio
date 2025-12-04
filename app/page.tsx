import StatsBar from "@/components/StatsBar";
import MarketCard from "@/components/MarketCard";
import CategoryTabs from "@/components/CategoryTabs";
import { Suspense } from "react";

export default async function Home() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL || ""}/api/markets`, { next: { revalidate: 60 } });
  const markets = res.ok ? await res.json() : [];

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
          <Suspense fallback={<div>Loading markets...</div>}>
            {markets.map((m: any, i: number) => (
              <MarketCard key={i} market={m} />
            ))}
          </Suspense>
        </div>
      </section>
    </main>
  );
}
