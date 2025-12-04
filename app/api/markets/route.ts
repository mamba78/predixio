export async function GET() {
  try {
    // Fetch Polymarket (public, always works)
    const pmRes = await fetch("https://clob.polymarket.com/markets?active=true&limit=50", {
      next: { revalidate: 60 },
    });
    const pmData = await pmRes.json();

    const pmMarkets = pmData.data.slice(0, 25).map((m: any) => ({
      title: m.question,
      platform: "Polymarket",
      yes_price: m.tokens.find((t: any) => t.outcome === "Yes")?.price || 0.5,
      no_price: m.tokens.find((t: any) => t.outcome === "No")?.price || 0.5,
      volume: m.volume24Hours || 0,
      category: m.tags?.[0] || "Other",
    }));

    // Kalshi fallback (demo for now — add key later)
    const kalMarkets = [
      {
        title: "Will the US have a recession in 2025?",
        platform: "Kalshi",
        yes_price: 0.25,
        no_price: 0.75,
        volume: 1500000,
        category: "Economics",
      },
      {
        title: "Will Bitcoin hit $100K by Dec 2025?",
        platform: "Kalshi",
        yes_price: 0.72,
        no_price: 0.28,
        volume: 2500000,
        category: "Crypto",
      },
    ];

    // Combine & return
    const allMarkets = [...pmMarkets, ...kalMarkets];
    return Response.json(allMarkets);
  } catch (error) {
    // Fallback demo markets if fetch fails
    return Response.json([
      {
        title: "Will Trump win 2028 election?",
        platform: "Polymarket",
        yes_price: 0.65,
        no_price: 0.35,
        volume: 1500000,
        category: "Politics",
      },
      {
        title: "Will Bitcoin hit $100K by Dec 2025?",
        platform: "Polymarket",
        yes_price: 0.72,
        no_price: 0.28,
        volume: 2500000,
        category: "Crypto",
      },
    ]);
  }
}