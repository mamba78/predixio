"use client";
import { useEffect, useState } from "react";

export default function StatsBar() {
  const [stats, setStats] = useState({ platforms: 1, markets: 0, volume24h: 0 });

  useEffect(() => {
    const es = new EventSource("/api/stats/stream");
    es.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        setStats(data);
      } catch {}
    };
    return () => es.close();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-8 my-16 text-center">
      <div>
        <div className="text-5xl font-bold text-cyan-400">{stats.platforms}+</div>
        <div className="text-gray-400">Platforms</div>
      </div>
      <div>
        <div className="text-5xl font-bold text-green-400">{stats.markets.toLocaleString()}</div>
        <div className="text-gray-400">Active Markets</div>
      </div>
      <div>
        <div className="text-5xl font-bold text-yellow-400">
          ${(stats.volume24h / 1e9).toFixed(2)}B
        </div>
        <div className="text-gray-400">24h Volume</div>
      </div>
    </div>
  );
}
