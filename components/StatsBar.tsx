"use client";

import { useEffect, useState } from "react";

export default function StatsBar() {
  const [stats, setStats] = useState({
    platforms: 38,
    markets: 127000,
    volume24h: 2100000000,
  });

  useEffect(() => {
    const es = new EventSource("/api/stats/stream");
    es.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        setStats(data);
      } catch (err) {
        console.error("SSE parse error:", err);
      }
    };
    return () => es.close();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 text-center">
      <div className="group">
        <div className="text-5xl font-black text-primary group-hover:scale-110 transition-transform duration-300">
          {stats.platforms}+
        </div>
        <div className="text-gray-400 mt-2 text-lg">Platforms Tracked</div>
      </div>

      <div className="group">
        <div className="text-5xl font-black text-green-400 group-hover:scale-110 transition-transform duration-300">
          {stats.markets.toLocaleString()}
        </div>
        <div className="text-gray-400 mt-2 text-lg">Active Markets</div>
      </div>

      <div className="group">
        <div className="text-5xl font-black text-yellow-400 group-hover:scale-110 transition-transform duration-300">
          ${(stats.volume24h / 1e9).toFixed(1)}B
        </div>
        <div className="text-gray-400 mt-2 text-lg">24h Volume</div>
      </div>
    </div>
  );
}
