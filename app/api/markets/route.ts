export async function GET() {
  const res = await fetch("https://clob.polymarket.com/markets?active=true&limit=100", {
    next: { revalidate: 60 },
  });
  const data = await res.json();

  const markets = data.data.map((m: any) => ({
    title: m.question,
    platform: "Polymarket",
    yes_price: m.tokens.find((t: any) => t.outcome === "Yes")?.price ?? null,
    no_price: m.tokens.find((t: any) => t.outcome === "No")?.price ?? null,
    volume: m.volume24Hours ?? 0,
    category: m.tags?.[0] ?? "Other",
  }));

  return Response.json(markets.slice(0, 50));
}
