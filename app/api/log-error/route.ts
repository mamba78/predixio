import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.error("CLIENT ERROR:", JSON.stringify(body, null, 2));

    if (process.env.ERROR_WEBHOOK_URL) {
      await fetch(process.env.ERROR_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: "**Predixio Error**\n\`\`\`json\n" + JSON.stringify(body, null, 2) + "\n\`\`\`" }),
      });
    }

    return new NextResponse("Logged", { status: 200 });
  } catch {
    return new NextResponse("Failed", { status: 500 });
  }
}
