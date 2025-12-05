import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export const dynamic = "force-dynamic";
export const revalidate = 60;

export async function GET() {
  const logPath = path.join(process.cwd(), "error.log");

  try {
    const res = await fetch("https://clob.polymarket.com/markets?active=true&limit=100", {
      headers: { "User-Agent": "Predixio/1.0" },
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);

    const data = await res.json();

    if (!data.data || !Array.isArray(data.data)) throw new Error("Invalid API response");

    const markets = data.data.map((m: any) => ({
      title: m.question || "Unknown market",
      platform: "Polymarket",
      yes_price: Number(m.tokens?.find((t: any) => t.outcome === "Yes")?.price || 0.5).toFixed(2),
      no_price: Number(m.tokens?.find((t: any) => t.outcome === "No")?.price || 0.5).toFixed(2),
      volume: Math.round(m.volume24Hours || 0),
      category: m.tags?.[0] || "Other",
      link: `https://polymarket.com/event/${m.slug || ""}`,
    }));

    // SUCCESS - write to log
    fs.appendFileSync(logPath, `${new Date().toISOString()} - SUCCESS: ${markets.length} markets loaded\n`);

    return NextResponse.json(markets);
  } catch (error: any) {
    // FAILURE - write detailed error to log
    const errorMsg = `${new Date().toISOString()} - ERROR: ${error.message}\n`;
    fs.appendFileSync(logPath, errorMsg);
    console.error(errorMsg);

    // Always return fallback markets so site never looks empty
    const fallback = [
      { title: "Will Bitcoin hit $100K by Dec 31, 2025?", platform: "Polymarket", yes_price: "0.72", no_price: "0.28", volume: 3800000, category: "Crypto", link: "https://polymarket.com" },
      { title: "Trump wins 2028 election?", platform: "Polymarket", yes_price: "0.65", no_price: "0.35", volume: 2100000, category: "Politics", link: "https://polymarket.com" },
      { title: "Ethereum above $5K in 2026?", platform: "Polymarket", yes_price: "0.41", no_price: "0.59", volume: 1500000, category: "Crypto", link: "https://polymarket.com" },
      { title: "Apple foldable iPhone in 2026?", platform: "Polymarket", yes_price: "0.45", no_price: "0.55", volume: 800000, category: "Tech", link: "https://polymarket.com" },
    ];

    fs.appendFileSync(logPath, `${new Date().toISOString()} - FALLBACK: showing ${fallback.length} markets\n`);

    return NextResponse.json(fallback);
  }
}
