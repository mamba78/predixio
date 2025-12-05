import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export async function GET() {
  const fallbackMarkets = [
    { title: "Will Bitcoin hit $100K by Dec 31, 2025?", platform: "Polymarket", yes_price: "0.72", no_price: "0.28", volume: 3800000, category: "Crypto", link: "https://polymarket.com" },
    { title: "Trump wins 2028 election?", platform: "Polymarket", yes_price: "0.65", no_price: "0.35", volume: 2100000, category: "Politics", link: "https://polymarket.com" },
    { title: "Ethereum above $5K in 2026?", platform: "Polymarket", yes_price: "0.41", no_price: "0.59", volume: 1500000, category: "Crypto", link: "https://polymarket.com" },
    { title: "Apple foldable iPhone in 2026?", platform: "Polymarket", yes_price: "0.45", no_price: "0.55", volume: 800000, category: "Tech", link: "https://polymarket.com" },
    { title: "Super Bowl in LA 2027?", platform: "Polymarket", yes_price: "0.80", no_price: "0.20", volume: 1200000, category: "Sports", link: "https://polymarket.com" },
  ];

  try {
    const controller = new AbortController();
    setTimeout(() => controller.abort(), 7000); // 7s timeout

    const res = await fetch("https://clob.polymarket.com/markets?active=true&limit=50", {
      signal: controller.signal,
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error("API timeout");

    const data = await res.json();

    const markets = data.data.map((m: any) => ({
      title: m.question,
      platform: "Polymarket",
      yes_price: Number(m.tokens.find((t: any) => t.outcome === "Yes")?.price || 0.5).toFixed(2),
      no_price: Number(m.tokens.find((t: any) => t.outcome === "No")?.price || 0.5).toFixed(2),
      volume: m.volume24Hours || 0,
      category: m.tags?.[0] || "Other",
      link: `https://polymarket.com/event/${m.slug}`,
    }));

    return NextResponse.json(markets);
  } catch (error) {
    console.error("Markets fetch failed:", error);
    return NextResponse.json(fallbackMarkets); // Always fallback
  }
}
