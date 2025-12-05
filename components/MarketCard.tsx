// components/MarketCard.tsx
"use client";

import Link from "next/link";
import { useTheme } from "next-themes";

const formatVolume = (v: number) => {
  if (!v || v === 0) return "$0";
  if (v >= 1e9) return `$${(v / 1e9).toFixed(1)}B`;
  if (v >= 1e6) return `$${(v / 1e6).toFixed(1)}M`;
  return `$${v.toLocaleString()}`;
};

export default function MarketCard({ market, isGrid }: { market: any; isGrid: boolean }) {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const yesPercent = Math.round(parseFloat(market.yes_price || "0") * 100);
  const noPercent = Math.round(parseFloat(market.no_price || "0") * 100);

  // Liquidity Bar – works in both themes
  const LiquidityBar = () => (
    <div className="w-full h-10 md:h-11 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden flex relative shadow-inner border border-gray-300 dark:border-gray-700">
      <div
        className="flex items-center justify-center text-white font-bold text-sm md:text-base transition-all duration-500 relative z-10 px-2"
        style={{
          width: `${yesPercent}%`,
          backgroundColor: yesPercent > 50 ? "#10b981" : "#34d399",
        }}
      >
        <span className="drop-shadow-md">{yesPercent}¢ YES</span>
      </div>
      <div
        className="flex items-center justify-center text-white font-bold text-sm md:text-base transition-all duration-500 relative z-10 px-2"
        style={{
          width: `${noPercent}%`,
          backgroundColor: noPercent > 50 ? "#ef4444" : "#f87171",
        }}
      >
        <span className="drop-shadow-md">{noPercent}¢ NO</span>
      </div>
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-px bg-white/30 dark:bg-black/30" />
      </div>
    </div>
  );

  // LIST VIEW – Mobile-first, ultra-clean
  if (!isGrid) {
    return (
      <Link
        href={market.link || "https://polymarket.com"}
        target="_blank"
        rel="noopener noreferrer"
        className="block bg-white dark:bg-gray-900/90 border border-gray-300 dark:border-gray-800 rounded-xl p-4 hover:border-primary/70 dark:hover:border-primary/60 transition-all group shadow-sm hover:shadow-lg"
      >
        <div className="flex flex-col gap-3">
          {/* Header */}
          <div className="flex items-center justify-between gap-3">
            <div className="flex items-center gap-2 text-xs">
              <span className="font-bold text-primary">{market.platform}</span>
              <span className="text-gray-500 dark:text-gray-400">•</span>
              <span className="text-cyan-400">{market.category}</span>
            </div>
            <span className="text-gray-500 dark:text-gray-400 text-xs hidden sm:block">
              {formatVolume(market.volume)}
            </span>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-gray-900 dark:text-white group-hover:text-primary transition line-clamp-2 text-sm md:text-base">
            {market.title}
          </h3>

          {/* Liquidity Bar */}
          <LiquidityBar />

          {/* Trade Button */}
          <div className="flex justify-end">
            <span className="px-5 py-2.5 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-full text-sm hover:scale-105 transition shadow-md">
              Trade Now
            </span>
          </div>
        </div>
      </Link>
    );
  }

  // GRID VIEW – Beautiful cards
  return (
    <div className="group bg-white dark:bg-gray-900/90 border border-gray-300 dark:border-gray-800 rounded-2xl p-6 hover:border-primary/70 dark:hover:border-primary/60 transition-all shadow-md hover:shadow-2xl flex flex-col h-full">
      <div className="flex justify-between text-xs mb-4">
        <span className="font-bold text-primary uppercase">{market.platform}</span>
        <span className="text-gray-500 dark:text-gray-400">{market.category}</span>
      </div>

      <h3 className="text-lg md:text-xl font-bold text-gray-900 dark:text-white line-clamp-3 flex-1 group-hover:text-primary transition">
        {market.title}
      </h3>

      <div className="my-6">
        <LiquidityBar />
      </div>

      <div className="flex justify-between items-center pt-4 border-t border-gray-300 dark:border-gray-700 mt-auto">
        <span className="text-sm text-gray-600 dark:text-gray-400 font-medium">
          {formatVolume(market.volume)}
        </span>
        <Link
          href={market.link || "https://polymarket.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-full text-sm hover:scale-105 transition shadow-lg"
        >
          Trade Now
        </Link>
      </div>
    </div>
  );
}