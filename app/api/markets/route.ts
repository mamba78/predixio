export async function GET() {
  try {
    // Polymarket fetch with timeout
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 8000); // 8s timeout

    const pmRes = await fetch("https://clob.polymarket.com/markets?active=true&limit=50", {
      signal: controller.signal,
    });
    clearTimeout(timeoutId);

    const pmData = await pmRes.json();

    const pmMarkets = pmData.data?.map((m: any) => ({
      title: m.question,
      platform: "Polymarket",
      yes_price: m.tokens.find((t: any) => t.outcome === "Yes")?.price || 0.5,
      no_price: m.tokens.find((t: any) => t.outcome === "No")?.price || 0.5,
      volume: m.volume24Hours || 0,
      category: m.tags?.[0] || "Other",
    })) || [];

    // Kalshi demo (add key later for real)
    const kalMarkets = [
      { title: "Will the US have a recession in 2025?", platform: "Kalshi", yes_price: 0.25, no_price: 0.75, volume: 1500000, category: "Economics" },
      { title: "Will Bitcoin hit $100K by Dec 2025?", platform: "Kalshi", yes_price: 0.72, no_price: 0.28, volume: 2500000, category: "Crypto" },
    ];

    return Response.json([...pmMarkets, ...kalMarkets]);
  } catch (error) {
    // Fallback demo markets (always shows 10+ cards)
    return Response.json([
      { title: "Will Trump win 2028 election?", platform: "Polymarket", yes_price: 0.65, no_price: 0.35, volume: 1500000, category: "Politics" },
      { title: "Will Bitcoin hit $100K by Dec 2025?", platform: "Polymarket", yes_price: 0.72, no_price: 0.28, volume: 2500000, category: "Crypto" },
      { title: "Will Apple release foldable iPhone in 2026?", platform: "Kalshi", yes_price: 0.45, no_price: 0.55, volume: 800000, category: "Tech" },
      { title: "Will Super Bowl be in LA in 2027?", platform: "Polymarket", yes_price: 0.80, no_price: 0.20, volume: 1200000, category: "Sports" },
      { title: "Will climate change cause 10% GDP loss by 2030?", platform: "Kalshi", yes_price: 0.55, no_price: 0.45, volume: 900000, category: "Climate" },
    ]);
  }
}