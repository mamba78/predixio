// app/api/markets/route.ts — FINAL, IMMORTAL, POLYMARKET + MANIFOLD (2025 PERFECTION)
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 10;

const CACHE_CONTROL = "s-maxage=10, stale-while-revalidate=30";

export async function GET() {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8500);

  try {
    let allMarkets: any[] = [];

    // === POLYMARKET (PRIMARY) ===
    try {
      const gammaRes = await fetch(
        "https://gamma-api.polymarket.com/markets?active=true&closed=false&limit=300",
        {
          signal: controller.signal,
          headers: {
            "User-Agent": "Predixio/1.0 (+https://predixio.com)",
            Accept: "application/json",
          },
        }
      );

      if (gammaRes.ok) {
        const data = await gammaRes.json();
        const markets = data.map((m: any) => ({
          title: m.question || "Unknown Market",
          platform: "Polymarket",
          yes_price: String(Number(m.outcome_prices?.[0] || m.yes_bid || 0.5).toFixed(2)),
          no_price: String(Number(m.outcome_prices?.[1] || m.no_bid || 0.5).toFixed(2)),
          volume: Number(m.volume_24h || m.volume || 0),
          category: m.tags?.[0] || "Uncategorized", // Real category — no "Other"
          link: `https://polymarket.com/event/${m.slug || m.id}?ref=predixio`,
        }));
        allMarkets.push(...markets);
      }
    } catch (err) {
      console.warn("Polymarket API failed:", err);
    }

    // === MANIFOLD MARKETS (SECONDARY) ===
    try {
      const manifoldRes = await fetch("https://manifold.markets/api/v0/markets?limit=200", {
        signal: controller.signal,
      });

      if (manifoldRes.ok) {
        const data = await manifoldRes.json();
        const markets = data
          .filter((m: any) => m.outcomeType === "BINARY" && !m.isResolved)
          .map((m: any) => ({
            title: m.question,
            platform: "Manifold",
            yes_price: String((m.probability * 100).toFixed(0)).padStart(2, "0") + "¢",
            no_price: String(((1 - m.probability) * 100).toFixed(0)).padStart(2, "0") + "¢",
            volume: Math.round(m.volume || 0),
            category: m.group?.name || m.tags?.[0] || "Uncategorized", // Real category
            link: `https://manifold.markets/${m.creatorUsername}/${m.slug}`,
          }));
        allMarkets.push(...markets);
      }
    } catch (err) {
      console.warn("Manifold API failed:", err);
    }

    // Sort by volume + limit to 500
    const sortedMarkets = allMarkets
      .sort((a, b) => b.volume - a.volume)
      .slice(0, 500);

    return new NextResponse(JSON.stringify(sortedMarkets), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": CACHE_CONTROL,
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("All market APIs failed — returning empty array", error);
    return new NextResponse(JSON.stringify([]), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } finally {
    clearTimeout(timeoutId);
  }
}