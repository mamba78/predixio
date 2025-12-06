// components/AboutModal.tsx — FINAL, FLAWLESS, PRODUCTION-READY
"use client";

import { X } from "lucide-react";
import { useModal } from "@/components/LegalModal";

export default function AboutModal() {
  const { open, setOpen } = useModal();

  if (open !== "about") return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-black/90 backdrop-blur-2xl"
      onClick={() => setOpen(null)}
    >
      <div
        className="relative max-w-3xl w-full bg-gradient-to-br from-gray-950 via-black to-gray-950 border border-primary/30 rounded-3xl p-10 shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={() => setOpen(null)}
          className="absolute top-6 right-6 z-10 p-3 rounded-full bg-gray-800/80 hover:bg-gray-700 transition backdrop-blur-sm"
          aria-label="Close About modal"
        >
          <X className="w-6 h-6 text-gray-300" />
        </button>

        {/* Background Glow */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 blur-3xl" />
        </div>

        {/* Content */}
        <div className="relative z-10">
          <h2 className="text-6xl md:text-7xl font-black bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent mb-8 leading-tight">
            About Predixio
          </h2>

          <div className="space-y-6 text-gray-300 text-lg md:text-xl leading-relaxed font-light">
            <p>
              <strong className="text-primary font-bold text-2xl">Predixio</strong> is the fastest, most beautiful, and most powerful real-time prediction market dashboard ever built.
            </p>
            <p className="text-gray-400">
              No accounts. No tracking. No bullshit.
            </p>
            <p>
              We aggregate live data from <strong className="text-primary">Polymarket</strong> (and soon Kalshi, Manifold, Drift, Azuro) into one blazing-fast, installable, offline-first PWA.
            </p>
            <p>
              Built with love by <span className="text-primary font-bold">@mamba78</span> — for degens, by a degen.
            </p>
            <p className="text-sm opacity-70 mt-8 italic">
              Not affiliated with any platform. Not financial advice. 18+ only.
            </p>
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setOpen(null)}
              className="px-12 py-5 bg-gradient-to-r from-primary to-accent text-black font-bold text-xl rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl hover:shadow-primary/50"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}