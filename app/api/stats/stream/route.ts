export async function GET() {
  const stream = new ReadableStream({
    async start(controller) {
      while (true) {
        const res = await fetch("https://clob.polymarket.com/markets?active=true&limit=100", { cache: "no-store" });
        const data = await res.json();
        const vol = data.data.reduce((s: number, m: any) => s + (m.volume24Hours || 0), 0);

        controller.enqueue(`data: {"platforms":38,"markets":${data.data.length},"volume24h":${vol}}\n\n`);
        await new Promise(r => setTimeout(r, 60000));
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
      "Connection": "keep-alive",
    },
  });
}
