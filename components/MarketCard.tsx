// components/MarketCard.tsx — THE FINAL EVOLUTION (2025 EDITION)
"use client";

import Link from "next/link";
import { useTheme } from "next-themes";

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
  const { resolvedTheme } = useTheme();

  // 100% safe price parsing — survives malformed API data
  const rawYes = parseFloat(market.yes_price ?? "0") || 0;
  const rawNo = parseFloat(market.no_price ?? "0") || 0;
  const total = rawYes + rawNo;
  const safeTotal = total > 0 ? total : 1;
  const yesPercent = Math.min(99.9, Math.round((rawYes / safeTotal) * 100));
  const noPercent = 100 - yesPercent;

  const LiquidityBar = () => (
    <div className="relative w-full h-11 md:h-12 bg-gray-100 dark:bg-gray-800 rounded-full overflow-hidden shadow-inner border border-gray-300 dark:border-gray-700">
      {/* YES */}
      <div
        className="absolute inset-y-0 left-0 flex items-center justify-center text-white font-black text-sm md:text-base transition-all duration-700 ease-out px-3 whitespace-nowrap"
        style={{
          width: `${yesPercent}%`,
          background:
            yesPercent >= 50
              ? "linear-gradient(90deg, #10b981, #34d399)"
              : "linear-gradient(90deg, #34d399, #6ee7b7)",
        }}
      >
        <span className="drop-shadow-2xl">{yesPercent}¢ YES</span>
      </div>

      {/* NO */}
      <div
        className="absolute inset-y-0 right-0 flex items-center justify-center text-white font-black text-sm md:text-base transition-all duration-700 ease-out px-3 whitespace-nowrap"
        style={{
          width: `${noPercent}%`,
          background:
            noPercent >= 50
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

  // LIST VIEW — Mobile-first, DexScreener-killer
  if (!isGrid) {
    return (
      <Link
        href={market.link || "https://polymarket.com"}
        target="_blank"
        rel="noopener noreferrer"
        className="group block bg-white dark:bg-gray-900/95 border border-gray-300 dark:border-gray-700 rounded-2xl p-5 hover:border-primary/70 dark:hover:border-primary/60 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
      >
        <div className="flex flex-col gap-4">
          {/* Header */}
          <div className="flex items-center justify-between text-xs font-medium">
            <div className="flex items-center gap-2">
              <span className="text-primary font-bold">
                {market.platform || "Polymarket"}
              </span>
              <span className="text-gray-500 dark:text-gray-400">•</span>
              <span className="text-cyan-400">
                {market.category || "Other"}
              </span>
            </div>
            <span className="hidden sm:block text-gray-500 dark:text-gray-400">
              {formatVolume(market.volume)}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-primary transition line-clamp-2">
            {market.title || "Unknown Market"}
          </h3>

          {/* Liquidity Bar */}
          <div className="my-2">
            <LiquidityBar />
          </div>

          {/* CTA — Now fully clickable */}
          <div className="flex justify-end mt-2">
            <Link
              href={market.link || "https://polymarket.com"}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-full text-sm hover:scale-110 active:scale-95 transition-all duration-200 shadow-xl inline-block"
            >
              Trade Now
            </Link>
          </div>
        </div>
      </Link>
    );
  }

  // GRID VIEW — Desktop masterpiece
  return (
    <div className="group relative bg-white dark:bg-gray-900/95 border border-gray-300 dark:border-gray-700 rounded-3xl p-7 hover:border-primary/70 dark:hover:border-primary/60 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-3 flex flex-col h-full overflow-hidden">
      {/* Platform + Category */}
      <div className="flex justify-between items-start mb-5">
        <span className="text-xs font-bold text-primary uppercase tracking-wider">
          {market.platform || "Polymarket"}
        </span>
        <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
          {market.category || "Other"}
        </span>
      </div>

      {/* Title */}
      <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white line-clamp-3 flex-1 group-hover:text-primary transition duration-300">
        {market.title || "Unknown Market"}
      </h3>

      {/* Liquidity Bar */}
      <div className="my-8">
        <LiquidityBar />
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center pt-5 border-t border-gray-300 dark:border-gray-700 mt-auto">
        <span className="text-sm font-semibold text-gray-600 dark:text-gray-400">
          {formatVolume(market.volume)}
        </span>
        <Link
          href={market.link || "https://polymarket.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-4 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-full text-sm hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl hover:shadow-primary/50"
        >
          Trade Now
        </Link>
      </div>

      {/* Hover glow ring */}
      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-8 ring-primary/10 -z-10" />
    </div>
  );
}
