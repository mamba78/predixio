import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export async function GET() {
  try {
    const response = await fetch(
      "https://clob.polymarket.com/markets?active=true&closed=false&limit=100",
      {
        headers: { "User-Agent": "Predixio/1.0 (+https://predixio.vercel.app)" },
        next: { revalidate: 60 },
      }
    );

    if (!response.ok) throw new Error("API error");

    const data = await response.json();

    const markets = data.data.map((m: any) => ({
      id: m.condition_id,
      title: m.question,
      platform: "Polymarket",
      image: m.image_url || null,
      yes_price: Number(m.tokens.find((t: any) => t.outcome === "Yes")?.price || 0.5).toFixed(3),
      no_price: Number(m.tokens.find((t: any) => t.outcome === "No")?.price || 0.5).toFixed(3),
      volume: Math.round(m.volume24Hours || 0),
      volume24h: m.volume24Hours || 0,
      category: m.tags?.[0] || "Other",
      link: `https://polymarket.com/event/${m.slug}`,
      ends_at: m.end_date || null,
    }));

    markets.sort((a: any, b: any) => b.volume24h - a.volume24h);

    return NextResponse.json(markets);
  } catch (error) {
    return NextResponse.json(
      { error: "Unable to load markets right now. Please try again later." },
      { status: 503 }
    );
  }
}
