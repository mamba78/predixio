import StatsBar from "@/components/StatsBar";
import MarketCard from "@/components/MarketCard";
import CategoryTabs from "@/components/CategoryTabs";
import { Suspense } from "react";

const SHOW_VIEW_TOGGLE = process.env.NEXT_PUBLIC_ENABLE_VIEW_TOGGLE !== "false";
const SHOW_THEME_TOGGLE = process.env.NEXT_PUBLIC_ENABLE_THEME_TOGGLE !== "false";

export const dynamic = "force-dynamic";

async function MarketsGrid() {
  const res = await fetch("https://predixio.vercel.app/api/markets", { cache: "no-store" });
  const markets = res.ok ? await res.json() : [];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 pb-20" suppressHydrationWarning>
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
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/10 to-black mb-20 pointer-events-none" />
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
        {/* Categories on their own line */}
        <div className="mb-6">
          <CategoryTabs />
        </div>

        {/* Toggle buttons — only show if enabled in .env.local */}
        <div className="flex justify-end gap-4 mb-8">
          {SHOW_VIEW_TOGGLE && (
            <button
              onClick={() => document.documentElement.dataset.view = document.documentElement.dataset.view === "list" ? "grid" : "list"}
              className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold rounded-full hover:scale-105 transition"
            >
              {document.documentElement.dataset.view === "list" ? "Grid View" : "List View"}
            </button>
          )}
          {SHOW_THEME_TOGGLE && (
            <button
              onClick={() => document.documentElement.classList.toggle("dark")}
              className="px-6 py-3 bg-gray-800 text-yellow-400 rounded-full hover:bg-gray-700 transition"
            >
              {document.documentElement.classList.contains("dark") ? "Light" : "Dark"}
            </button>
          )}
        </div>

        <Suspense fallback={<div className="text-center py-32 text-xl text-gray-400">Loading markets...</div>}>
          <MarketsGrid />
        </Suspense>
      </section>
    </main>
  );
}
