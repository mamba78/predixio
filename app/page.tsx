import StatsBar from "@/components/StatsBar";
import MarketCard from "@/components/MarketCard";
import CategoryTabs from "@/components/CategoryTabs";
import HeaderControls from "@/components/HeaderControls";
import { Suspense } from "react";

export const dynamic = "force-dynamic";

async function MarketsGrid({ category }: { category: string }) {
  const res = await fetch("https://predixio.vercel.app/api/markets", { cache: "no-store" });
  let markets = res.ok ? await res.json() : [];

  if (category !== "All") {
    markets = markets.filter((m: any) => m.category === category);
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 pb-20" suppressHydrationWarning>
      {markets.length > 0 ? (
        markets.map((market: any, i: number) => <MarketCard key={i} market={market} />)
      ) : (
        <div className="col-span-full text-center py-32 text-xl text-gray-400">
          No markets available in {category} category
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
        <HeaderControls onCategory={(cat) => {}} /> {/* Add state later */}
        <CategoryTabs />
        <Suspense fallback={<div className="text-center py-32 text-xl text-gray-400">Loading markets...</div>}>
          <MarketsGrid category="All" />
        </Suspense>
      </section>
    </main>
  );
}
