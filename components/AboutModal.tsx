// components/AboutModal.tsx
"use client";

import { X } from "lucide-react";
import { useModal } from "@/components/LegalModal";

export default function AboutModal() {
  const { open, setOpen } = useModal();

  if (open !== "about") return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/90 backdrop-blur-xl"
      onClick={() => setOpen(null)}
    >
      <div
        className="relative max-w-2xl w-full bg-gradient-to-br from-gray-900 via-black to-gray-900 border border-cyan-500/50 rounded-3xl p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={() => setOpen(null)}
          className="absolute top-6 right-6 p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-5xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-8">
          About Predixio
        </h2>

        <div className="space-y-6 text-gray-300 text-lg leading-relaxed">
          <p>
            <strong className="text-primary">Predixio</strong> is the fastest, most beautiful, and most powerful real-time prediction market dashboard ever built.
          </p>
          <p>
            No accounts. No tracking. No bullshit.
          </p>
          <p>
            We aggregate live data from Polymarket (and soon Kalshi, Manifold, Drift, Azuro) into one blazing-fast, installable, offline-first PWA.
          </p>
          <p>
            Built with love by <span className="text-primary font-bold">@mamba78</span> — for degens, by a degen.
          </p>
          <p className="text-sm opacity-70">
            Not affiliated with any platform. Not financial advice. 18+ only.
          </p>
        </div>

        <div className="mt-10 text-center">
          <button
            onClick={() => setOpen(null)}
            className="px-10 py-5 bg-gradient-to-r from-primary to-accent text-black font-bold text-xl rounded-full hover:scale-105 transition shadow-2xl"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}