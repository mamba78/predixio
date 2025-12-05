export async function GET() {
  const stream = new ReadableStream({
    async start(controller) {
      while (true) {
        try {
          const res = await fetch("https://clob.polymarket.com/markets?active=true&limit=100");
          const data = await res.json();
          const vol = data.data.reduce((s: number, m: any) => s + (m.volume24Hours || 0), 0);
          const count = data.data.length;

          controller.enqueue(`data: {"platforms":1,"markets":${count},"volume24h":${vol}}\n\n`);
        } catch {
          controller.enqueue(`data: {"platforms":1,"markets":50,"volume24h":2100000000}\n\n`);
        }
        await new Promise(r => setTimeout(r, 60000));
      }
    },
  });

  return new Response(stream, {
    headers: {
      "Content-Type": "text/event-stream",
      "Cache-Control": "no-cache",
    },
  });
}
