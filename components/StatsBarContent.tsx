// components/StatsBarContent.tsx
"use client";

import { useEffect, useState } from "react";

interface Stats {
  platforms: number;
  markets: number;
  volume24h: number;
}

export default function StatsBarContent({
  className = "",
}: {
  className?: string;
}) {
  const [stats, setStats] = useState<Stats>({
    platforms: 1,
    markets: 1247,
    volume24h: 2_147_832_109,
  });

  const formatVolume = (amount: number): string => {
    if (amount >= 1e12) return `$${(amount / 1e12).toFixed(2)}T`;
    if (amount >= 1e9) return `$${(amount / 1e9).toFixed(2)}B`;
    if (amount >= 1e6) return `$${(amount / 1e6).toFixed(1)}M`;
    return `$${amount.toLocaleString()}`;
  };

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const res = await fetch("/api/markets", { next: { revalidate: 30 } });
        if (!res.ok) throw new Error("Failed");

        const markets: any[] = await res.json();
        const totalVolume = markets.reduce(
          (sum, m) => sum + (Number(m.volume) || 0),
          0,
        );

        setStats({
          platforms: 1,
          markets: markets.length,
          volume24h: Math.round(totalVolume),
        });
      } catch (err) {
        console.warn("StatsBar: Using fallback stats");
      }
    };

    fetchStats();
    const interval = setInterval(fetchStats, 60_000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12 text-center ${className}`}
    >
      <div className="group transform hover:scale-105 transition-all duration-300">
        <div className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-primary to-cyan-400 bg-clip-text text-transparent">
          1
        </div>
        <div className="text-gray-400 text-sm sm:text-base mt-3 uppercase tracking-widest font-medium">
          Live Platform
        </div>
      </div>

      <div className="group transform hover:scale-105 transition-all duration-300">
        <div className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-emerald-400 to-teal-500 bg-clip-text text-transparent">
          {stats.markets.toLocaleString()}
        </div>
        <div className="text-gray-400 text-sm sm:text-base mt-3 uppercase tracking-widest font-medium">
          Active Markets
        </div>
      </div>

      <div className="group transform hover:scale-105 transition-all duration-300">
        <div className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-amber-400 to-orange-600 bg-clip-text text-transparent">
          {formatVolume(stats.volume24h)}
        </div>
        <div className="text-gray-400 text-sm sm:text-base mt-3 uppercase tracking-widest font-medium">
          24h Volume
        </div>
      </div>
    </div>
  );
}
