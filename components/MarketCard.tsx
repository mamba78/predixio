// components/MarketCard.tsx — THE FINAL EVOLUTION (2025 PERFECTION)
"use client";

import Link from "next/link";

const formatVolume = (v: number | null | undefined): string => {
  if (!v || v <= 0) return "$0";
  if (v >= 1e12) return `$${(v / 1e12).toFixed(2)}T`;
  if (v >= 1e9) return `$${(v / 1e9).toFixed(2)}B`;
  if (v >= 1e6) return `$${(v / 1e6).toFixed(1)}M`;
  return `$${v.toLocaleString()}`;
};

export default function MarketCard({
  market,
  isGrid,
}: {
  market: any;
  isGrid: boolean;
}) {
  const rawYes = parseFloat(market.yes_price ?? "0") || 0;
  const rawNo = parseFloat(market.no_price ?? "0") || 0;
  const total = rawYes + rawNo;
  const safeTotal = total > 0 ? total : 1;
  const yesPercent = Math.min(99.9, Math.round((rawYes / safeTotal) * 100));
  const noPercent = 100 - yesPercent;

  const LiquidityBar = () => (
    <div className="relative w-full h-11 md:h-12 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden shadow-inner border border-border">
      {/* YES — Never overflows */}
      <div
        className="absolute inset-y-0 left-0 flex items-center text-white font-black text-sm md:text-base transition-all duration-700 ease-out"
        style={{
          width: `${yesPercent}%`,
          minWidth: yesPercent < 25 ? "72px" : "auto",
          justifyContent: yesPercent < 25 ? "flex-start" : "center",
          paddingLeft: yesPercent < 25 ? "12px" : "0",
          background: yesPercent >= 50
            ? "linear-gradient(90deg, #10b981, #34d399)"
            : "linear-gradient(90deg, #34d399, #6ee7b7)",
        }}
      >
        <span className="drop-shadow-2xl">{yesPercent}¢ YES</span>
      </div>

      {/* NO — Never overflows */}
      <div
        className="absolute inset-y-0 right-0 flex items-center text-white font-black text-sm md:text-base transition-all duration-700 ease-out"
        style={{
          width: `${noPercent}%`,
          minWidth: noPercent < 25 ? "72px" : "auto",
          justifyContent: noPercent < 25 ? "flex-end" : "center",
          paddingRight: noPercent < 25 ? "12px" : "0",
          background: noPercent >= 50
            ? "linear-gradient(90deg, #ef4444, #f87171)"
            : "linear-gradient(90deg, #f87171, #fca5a5)",
        }}
      >
        <span className="drop-shadow-2xl">{noPercent}¢ NO</span>
      </div>

      {/* Center Line */}
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-px h-full bg-white/40 dark:bg-black/40" />
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-4 ring-primary/20" />
    </div>
  );

  // LIST VIEW — Perfect one-line, DexScreener-killer, FIRE volume
  if (!isGrid) {
    return (
      <Link
        href={market.link || process.env.NEXT_PUBLIC_AFFILIATE_POLYMARKET || "https://polymarket.com"}
        target="_blank"
        rel="noopener noreferrer"
        className="group block bg-background border border-border rounded-2xl p-5 hover:border-primary/70 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
      >
        <div className="flex items-center justify-between gap-6">
          {/* Title + Category (perfect alignment) */}
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg truncate text-foreground group-hover:text-primary transition">
              {market.title || "Unknown Market"}
            </h3>
            <div className="text-xs text-primary/80 font-medium uppercase tracking-wider">
              {market.category || "Other"}
            </div>
          </div>

          {/* Liquidity Bar */}
          <div className="w-64 flex-shrink-0">
            <LiquidityBar />
          </div>

          {/* Volume — Smaller font, FIRE when greater than $10M */}
          <div className="text-right">
            <span className="text-xl font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
              {market.volume > 10_000_000 ? "FIRE " : ""}
              {formatVolume(market.volume)}
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // GRID VIEW — Desktop masterpiece, smaller volume
  return (
    <div className="group relative bg-background border border-border rounded-3xl p-7 hover:border-primary/70 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-3 flex flex-col h-full overflow-hidden">
      {/* Platform + Category */}
      <div className="flex justify-between items-start mb-5">
        <span className="text-xs font-bold text-primary uppercase tracking-wider">
          {market.platform || "Polymarket"}
        </span>
        <span className="text-xs text-muted font-medium">
          {market.category || "Other"}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-black text-foreground line-clamp-3 flex-1 group-hover:text-primary transition duration-300">
        {market.title || "Unknown Market"}
      </h3>

      {/* Liquidity Bar */}
      <div className="my-8">
        <LiquidityBar />
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-5 border-t border-border mt-auto">
        {/* Volume — Smaller font in grid */}
        <span className="text-base font-black bg-gradient-to-r from-yellow-400 via-orange-500 to-red-600 bg-clip-text text-transparent">
          {market.volume > 10_000_000 ? "FIRE " : ""}
          {formatVolume(market.volume)}
        </span>

        <Link
          href={market.link || process.env.NEXT_PUBLIC_AFFILIATE_POLYMARKET || "https://polymarket.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-4 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-full text-sm hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl hover:shadow-primary/50"
        >
          Trade Now
        </Link>
      </div>

      {/* Hover glow */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-8 ring-primary/10 -z-10" />
    </div>
  );
}