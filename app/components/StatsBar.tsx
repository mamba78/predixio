"use client";
import { useEffect, useState } from "react";

export default function StatsBar() {
  const [stats, setStats] = useState({ platforms: 38, markets: 127000, volume24h: 2100000000 });

  useEffect(() => {
    const es = new EventSource("/api/stats/stream");
    es.onmessage = (e) => setStats(JSON.parse(e.data));
    return () => es.close();
  }, []);

  return (
    <div className="grid grid-cols-3 gap-12 my-20 text-center">
      <div>
        <div className="text-5xl font-bold text-cyan-400">{stats.platforms}+</div>
        <div className="text-gray-400">Platforms</div>
      </div>
      <div>
        <div className="text-5xl font-bold text-green-400">{stats.markets.toLocaleString()}</div>
        <div className="text-gray-400">Markets</div>
      </div>
      <div>
        <div className="text-5xl font-bold text-yellow-400">
          ${(stats.volume24h / 1e9).toFixed(1)}B
        </div>
        <div className="text-gray-400">24h Volume</div>
      </div>
    </div>
  );
}
