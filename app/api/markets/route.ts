// app/api/markets/route.ts
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 10;

// Edge caching headers (this is the #1 performance win)
const CACHE_CONTROL = "s-maxage=10, stale-while-revalidate=30";

const FALLBACK_MARKETS = [
  {
    title: "Will Bitcoin hit $100K by Dec 31, 2025?",
    platform: "Polymarket",
    yes_price: "0.72",
    no_price: "0.28",
    volume: 3800000,
    category: "Crypto",
    link: "https://polymarket.com/event/bitcoin-100k-2025?ref=predixio",
  },
  {
    title: "Trump wins 2028 election?",
    platform: "Polymarket",
    yes_price: "0.65",
    no_price: "0.35",
    volume: 2100000,
    category: "Politics",
    link: "https://polymarket.com/event/trump-2028?ref=predixio",
  },
  {
    title: "Ethereum above $5K in 2026?",
    platform: "Polymarket",
    yes_price: "0.41",
    no_price: "0.59",
    volume: 1500000,
    category: "Crypto",
    link: "https://polymarket.com/event/ethereum-5k-2026?ref=predixio",
  },
  {
    title: "Apple foldable iPhone in 2026?",
    platform: "Polymarket",
    yes_price: "0.45",
    no_price: "0.55",
    volume: 800000,
    category: "Tech",
    link: "https://polymarket.com/event/apple-foldable-2026?ref=predixio",
  },
  {
    title: "Super Bowl in LA 2027?",
    platform: "Polymarket",
    yes_price: "0.80",
    no_price: "0.20",
    volume: 1200000,
    category: "Sports",
    link: "https://polymarket.com/event/super-bowl-la-2027?ref=predixio",
  },
] as const;

export async function GET() {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8500); // 8.5s timeout (under Vercel 10s limit)

  try {
    // Primary: Gamma API (2025 standard) — fastest + best metadata
    const gammaRes = await fetch(
      "https://gamma.api.polymarket.com/markets?active=true&limit=50",
      {
        signal: controller.signal,
        next: { revalidate: 10 },
        headers: { "User-Agent": "Predixio/1.0 (+https://predixio.com)" },
      },
    );

    if (gammaRes.ok) {
      const data = await gammaRes.json();
      const markets = data.map((m: any) => ({
        title: m.question || "Unknown Market",
        platform: "Polymarket" as const,
        yes_price: String(Number(m.yesTokenPrice ?? 0.5).toFixed(2)),
        no_price: String(Number(m.noTokenPrice ?? 0.5).toFixed(2)),
        volume: Number(m.volume24Hours ?? 0),
        category: (m.tags?.[0] as string) || "Other",
        link: `https://polymarket.com/event/${m.slug}?ref=predixio`,
      }));

      return new NextResponse(JSON.stringify(markets), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": CACHE_CONTROL,
          "Access-Control-Allow-Origin": "*",
        },
      });
    }

    // Fallback: CLOB API
    const clobRes = await fetch(
      "https://clob.polymarket.com/markets?active=true&limit=50",
      {
        signal: controller.signal,
        next: { revalidate: 10 },
      },
    );

    if (clobRes.ok) {
      const data = await clobRes.json();
      const markets = data.data.map((m: any) => ({
        title: m.question || "Unknown Market",
        platform: "Polymarket" as const,
        yes_price: String(
          Number(
            m.tokens.find((t: any) => t.outcome === "Yes")?.price ?? 0.5,
          ).toFixed(2),
        ),
        no_price: String(
          Number(
            m.tokens.find((t: any) => t.outcome === "No")?.price ?? 0.5,
          ).toFixed(2),
        ),
        volume: Number(m.volume24Hours ?? 0),
        category: (m.tags?.[0] as string) || "Other",
        link: `https://polymarket.com/event/${m.slug}?ref=predixio`,
      }));

      return new NextResponse(JSON.stringify(markets), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          "Cache-Control": CACHE_CONTROL,
        },
      });
    }

    throw new Error("Both Polymarket APIs failed");
  } catch (error) {
    console.error("Polymarket API error:", error);

    // Always return valid JSON + cache fallback
    return new NextResponse(JSON.stringify(FALLBACK_MARKETS), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "s-maxage=300, stale-while-revalidate=600", // Cache fallback hard
      },
    });
  } finally {
    clearTimeout(timeoutId);
  }
}
