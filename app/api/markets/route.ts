// app/api/markets/route.ts
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 10; // Real-time: revalidate every 10s

export async function GET() {
  const fallbackMarkets = [
    { title: "Will Bitcoin hit $100K by Dec 31, 2025?", platform: "Polymarket", yes_price: "0.72", no_price: "0.28", volume: 3800000, category: "Crypto", link: "https://polymarket.com/event/bitcoin-100k-2025?ref=predixio" },
    { title: "Trump wins 2028 election?", platform: "Polymarket", yes_price: "0.65", no_price: "0.35", volume: 2100000, category: "Politics", link: "https://polymarket.com/event/trump-2028?ref=predixio" },
    { title: "Ethereum above $5K in 2026?", platform: "Polymarket", yes_price: "0.41", no_price: "0.59", volume: 1500000, category: "Crypto", link: "https://polymarket.com/event/ethereum-5k-2026?ref=predixio" },
    { title: "Apple foldable iPhone in 2026?", platform: "Polymarket", yes_price: "0.45", no_price: "0.55", volume: 800000, category: "Tech", link: "https://polymarket.com/event/apple-foldable-2026?ref=predixio" },
    { title: "Super Bowl in LA 2027?", platform: "Polymarket", yes_price: "0.80", no_price: "0.20", volume: 1200000, category: "Sports", link: "https://polymarket.com/event/super-bowl-la-2027?ref=predixio" },
  ];

  try {
    // Primary: Gamma API for indexed markets with metadata (2025 standard)
    const gammaRes = await fetch("https://gamma.api.polymarket.com/markets?active=true&limit=50", {
      next: { revalidate: 10 },
    });

    if (gammaRes.ok) {
      const data = await gammaRes.json();
      const markets = data.map((m: any) => ({
        title: m.question,
        platform: "Polymarket",
        yes_price: (m.yesTokenPrice || 0.5).toFixed(2),
        no_price: (m.noTokenPrice || 0.5).toFixed(2),
        volume: m.volume24Hours || 0,
        category: m.tags?.[0] || "Other",
        link: `https://polymarket.com/event/${m.slug}?ref=predixio`, // Affiliate param
      }));
      return NextResponse.json(markets);
    }

    // Fallback: CLOB API for raw order book data
    const clobRes = await fetch("https://clob.polymarket.com/markets?active=true&limit=50", {
      next: { revalidate: 10 },
    });

    if (clobRes.ok) {
      const data = await clobRes.json();
      const markets = data.data.map((m: any) => ({
        title: m.question,
        platform: "Polymarket",
        yes_price: Number(m.tokens.find((t: any) => t.outcome === "Yes")?.price || 0.5).toFixed(2),
        no_price: Number(m.tokens.find((t: any) => t.outcome === "No")?.price || 0.5).toFixed(2),
        volume: m.volume24Hours || 0,
        category: m.tags?.[0] || "Other",
        link: `https://polymarket.com/event/${m.slug}?ref=predixio`,
      }));
      return NextResponse.json(markets);
    }

    throw new Error("All APIs failed");
  } catch (error) {
    console.error("Polymarket API failed:", error);
    return NextResponse.json(fallbackMarkets);
  }
}