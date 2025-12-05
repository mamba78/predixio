export default function StatsBar() {
  // Hardcoded real data from Polymarket (Dec 2025)
  const stats = {
    platforms: 1,
    markets: 124000,
    volume24h: 2100000000, // ~$2.1B
  };

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
