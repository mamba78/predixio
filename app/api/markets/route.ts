// app/api/markets/route.ts — FINAL, IMMORTAL, WITH FULL ERROR HANDLING
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";
export const revalidate = 10;

const CACHE_CONTROL = "s-maxage=10, stale-while-revalidate=30";

export async function GET() {
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), 8500);

  try {
    // === POLYMARKET (PRIMARY) ===
    let polymarketMarkets: any[] = [];

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
        polymarketMarkets = data.map((m: any) => ({
          title: m.question || "Unknown Market",
          platform: "Polymarket",
          yes_price: String(Number(m.outcome_prices?.[0] || m.yes_bid || 0.5).toFixed(2)),
          no_price: String(Number(m.outcome_prices?.[1] || m.no_bid || 0.5).toFixed(2)),
          volume: Number(m.volume_24h || m.volume || 0),
          category: m.tags?.[0] || "Other",
          link: `https://polymarket.com/event/${m.slug || m.id}?ref=predixio`,
        }));
      }
    } catch (err) {
      console.warn("Polymarket Gamma API failed:", err);
    }

    // === MANIFOLD MARKETS (SECONDARY) ===
    let manifoldMarkets: any[] = [];

    try {
      const manifoldRes = await fetch("https://manifold.markets/api/v0/markets?limit=200", {
        signal: controller.signal,
      });

      if (manifoldRes.ok) {
        const data = await manifoldRes.json();
        manifoldMarkets = data
          .filter((m: any) => m.outcomeType === "BINARY" && !m.isResolved)
          .map((m: any) => ({
            title: m.question,
            platform: "Manifold",
            yes_price: String((m.probability * 100).toFixed(0)).padStart(2, "0") + "¢",
            no_price: String(((1 - m.probability) * 100).toFixed(0)).padStart(2, "0") + "¢",
            volume: Math.round(m.volume || 0),
            category: m.group?.name || m.tags?.[0] || "Other",
            link: `https://manifold.markets/${m.creatorUsername}/${m.slug}`,
          }));
      }
    } catch (err) {
      console.warn("Manifold API failed:", err);
    }

    // Combine results
    const allMarkets = [...polymarketMarkets, ...manifoldMarkets]
      .sort((a, b) => b.volume - a.volume)
      .slice(0, 500);

    return new NextResponse(JSON.stringify(allMarkets), {
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
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "s-maxage=60",
      },
    });
  } finally {
    clearTimeout(timeoutId);
  }
}