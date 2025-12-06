// components/MarketCard.tsx — FINAL PERFECTION (2025 GOD MODE)
"use client";

import Link from "next/link";
import Image from "next/image";

const formatVolume = (v: number | null | undefined): string => {
  if (!v || v <= 0) return "$0";
  if (v >= 1e12) return `$${(v / 1e12).toFixed(2)}T`;
  if (v >= 1e9) return `$${(v / 1e9).toFixed(2)}B`;
  if (v >= 1e6) return `$${(v / 1e6).toFixed(1)}M`;
  return `$${v.toLocaleString()}`;
};

// OFFICIAL LOGOS — 100% WORKING
const platformLogos: Record<string, string> = {
  Polymarket: "https://polymarket.com/images/polymarket-logo-white.svg",
  Manifold: "https://manifold.markets/logo.png",
  Kalshi: "https://kalshi.com/assets/images/kalshi-logo.svg",
  PredictIt: "https://www.predictit.org/Content/images/PredictItLogo.png",
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
      <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
        <div className="w-px h-full bg-white/40 dark:bg-black/40" />
      </div>
      <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-4 ring-primary/20" />
    </div>
  );

  // SAME SEXY VOLUME FOR BOTH VIEWS
  const VolumeDisplay = () => (
    <span className="text-2xl font-black bg-gradient-to-r from-amber-400 via-orange-500 to-red-600 bg-clip-text text-transparent drop-shadow-lg">
      {formatVolume(market.volume)}
    </span>
  );

  // LIST VIEW — LOGO + SEXY VOLUME
  if (!isGrid) {
    return (
      <Link
        href={market.link || process.env.NEXT_PUBLIC_AFFILIATE_POLYMARKET || "https://polymarket.com"}
        target="_blank"
        rel="noopener noreferrer"
        className="group block bg-background border border-border rounded-2xl p-6 hover:border-primary/70 transition-all duration-300 shadow-lg hover:shadow-2xl hover:-translate-y-1"
      >
        <div className="flex items-center justify-between gap-8">
          <div className="flex items-center gap-5 flex-1 min-w-0">
            <Image
              src={platformLogos[market.platform] || "https://via.placeholder.com/48/333/00f5ff?text=?"}
              alt={market.platform}
              width={48}
              height={48}
              className="rounded-lg border border-border/50 flex-shrink-0"
              unoptimized
            />
            <div className="min-w-0">
              <h3 className="font-bold text-xl truncate text-foreground group-hover:text-primary transition">
                {market.title || "Unknown Market"}
              </h3>
              <div className="flex items-center gap-3 mt-1">
                <span className="text-xs font-bold text-primary/80 uppercase tracking-widest">
                  {market.platform}
                </span>
                <span className="text-xs font-bold text-primary uppercase tracking-widest bg-primary/10 px-3 py-1 rounded-full">
                  {market.category || "Other"}
                </span>
              </div>
            </div>
          </div>

          <div className="w-80 flex-shrink-0">
            <LiquidityBar />
          </div>

          <div className="text-right">
            <VolumeDisplay />
          </div>
        </div>
      </Link>
    );
  }

  // GRID VIEW — SAME SEXY VOLUME + LOGO
  return (
    <div className="group relative bg-background border border-border rounded-3xl p-7 hover:border-primary/70 transition-all duration-500 shadow-xl hover:shadow-2xl hover:-translate-y-3 flex flex-col h-full overflow-hidden">
      <div className="flex items-center justify-between mb-5">
        <Image
          src={platformLogos[market.platform] || "https://via.placeholder.com/40/333/00f5ff?text=?"}
          alt={market.platform}
          width={40}
          height={40}
          className="rounded-lg border border-border/50"
          unoptimized
        />
        <span className="text-xs text-muted font-medium">
          {market.category || "Other"}
        </span>
      </div>

      <h3 className="text-xl md:text-2xl font-black text-foreground line-clamp-3 flex-1 group-hover:text-primary transition duration-300">
        {market.title || "Unknown Market"}
      </h3>

      <div className="my-8">
        <LiquidityBar />
      </div>

      <div className="flex justify-between items-center pt-5 border-t border-border mt-auto">
        <VolumeDisplay />
        <Link
          href={market.link || process.env.NEXT_PUBLIC_AFFILIATE_POLYMARKET || "https://polymarket.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-4 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-full text-sm hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl hover:shadow-primary/50"
        >
          Trade Now
        </Link>
      </div>

      <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none ring-8 ring-primary/10 -z-10" />
    </div>
  );
}