'use client';

import { useEffect, useState } from "react";

type ModalType = "terms" | "privacy" | "cookies" | "disclaimer" | null;

export default function LegalModal() {
  const [open, setOpen] = useState<ModalType>(null);

  useEffect(() => {
    const handler = (e: any) => setOpen(e.detail);
    document.addEventListener("open-legal", handler);
    return () => document.removeEventListener("open-legal", handler);
  }, []);

  const content: Record<string, { title: string; body: string }> = {
    terms: {
      title: "Terms of Service",
      body: "By using Predixio you agree that we are an independent aggregator of public data from Polymarket and others. We do not operate markets, accept bets, or hold funds. All information is for informational purposes only — not financial advice. You must be 18+.",
    },
    privacy: {
      title: "Privacy Policy",
      body: "We collect zero personal data. No accounts, no emails, no tracking. Only anonymous Vercel Analytics to improve performance.",
    },
    cookies: {
      title: "Cookie Policy",
      body: "We use only essential cookies and anonymous analytics. No marketing, no tracking, no data selling.",
    },
    disclaimer: {
      title: "Disclaimer",
      body: "Predixio is not affiliated with Polymarket, Kalshi, or any listed platform. All data is provided 'as is' with no warranty. Trading involves risk.",
    },
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setOpen(null)}>
      <div className="max-w-2xl w-full max-h-[85vh] overflow-y-auto bg-gray-950 border border-cyan-500/50 rounded-2xl p-8" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-6">
          {content[open].title}
        </h2>
        <p className="text-gray-300 leading-relaxed whitespace-pre-line">{content[open].body}</p>
        <button
          onClick={() => setOpen(null)}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold rounded-full hover:scale-105 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}
