import StatsBar from "@/components/StatsBar";
import MarketCard from "@/components/MarketCard";
import CategoryTabs from "@/components/CategoryTabs";

// Force dynamic rendering — no build-time fetch errors
export const dynamic = "force-dynamic";
export const revalidate = 0;

export default async function Home() {
  // BULLETPROOF FETCH — works locally AND on Vercel/Railway
  const baseUrl =
    typeof window === "undefined"
      ? process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
      : "";

  const res = await fetch(`${baseUrl}/api/markets`, {
    cache: "no-store",
  });

  const markets = res.ok ? await res.json() : [];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
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

      {/* Markets Grid */}
      <section className="max-w-7xl mx-auto px-6 -mt-10">
        <CategoryTabs />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 pb-20">
          {markets.length > 0 ? (
            markets.map((market: any, i: number) => (
              <MarketCard key={i} market={market} />
            ))
          ) : (
            <div className="col-span-full text-center py-32 text-gray-500 text-xl">
              Loading live markets from Polymarket + Kalshi...
            </div>
          )}
        </div>
      </section>
    </main>
  );
}