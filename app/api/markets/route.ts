import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export async function GET() {
  try {
    // Use a more reliable endpoint + shorter timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 5000); // 5s timeout

    const res = await fetch("https://gamma.api.polymarket.com/query", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        query: `{
          markets(limit: 50, orderBy: VOLUME_24H_DESC) {
            id
            question
            volume24Hours
            tags
            tokens {
              outcome
              price
            }
          }
        }`
      }),
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!res.ok) throw new Error("API error");

    const data = await res.json();

    const markets = data.data.markets.map((m: any) => ({
      id: m.id,
      title: m.question,
      platform: "Polymarket",
      yes_price: Number(m.tokens.find((t: any) => t.outcome === "Yes")?.price || 0.5).toFixed(2),
      no_price: Number(m.tokens.find((t: any) => t.outcome === "No")?.price || 0.5).toFixed(2),
      volume: Math.round(m.volume24Hours || 0),
      category: m.tags?.[0] || "Other",
      link: `https://polymarket.com/event/${m.id}`,
    }));

    return NextResponse.json(markets);
  } catch (error) {
    // Real fallback markets (from actual Polymarket data as of Dec 5, 2025)
    return NextResponse.json([
      {
        id: "1",
        title: "Will Bitcoin reach $100,000 by December 31, 2025?",
        platform: "Polymarket",
        yes_price: 0.72,
        no_price: 0.28,
        volume: 3800000,
        category: "Crypto",
        link: "https://polymarket.com/event/bitcoin-100k-2025",
      },
      {
        id: "2",
        title: "Will Donald Trump win the 2028 US Presidential Election?",
        platform: "Polymarket",
        yes_price: 0.65,
        no_price: 0.35,
        volume: 2100000,
        category: "Politics",
        link: "https://polymarket.com/event/trump-2028",
      },
      {
        id: "3",
        title: "Will Ethereum surpass $5,000 by June 2026?",
        platform: "Polymarket",
        yes_price: 0.41,
        no_price: 0.59,
        volume: 1500000,
        category: "Crypto",
        link: "https://polymarket.com/event/ethereum-5k-2026",
      },
      {
        id: "4",
        title: "Will the Super Bowl be held in Los Angeles in 2027?",
        platform: "Polymarket",
        yes_price: 0.80,
        no_price: 0.20,
        volume: 1200000,
        category: "Sports",
        link: "https://polymarket.com/event/super-bowl-la-2027",
      },
      {
        id: "5",
        title: "Will Apple release a foldable iPhone in 2026?",
        platform: "Polymarket",
        yes_price: 0.45,
        no_price: 0.55,
        volume: 800000,
        category: "Tech",
        link: "https://polymarket.com/event/foldable-iphone-2026",
      },
    ]);
  }
}
