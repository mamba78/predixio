import Link from "next/link";

type Market = {
  title: string;
  platform: string;
  yes_price: number | null;
  no_price: number | null;
  volume: number;
  category: string;
};

export default function MarketCard({ market }: { market: Market }) {
  const platformColors: Record<string, string> = {
    Polymarket: "from-cyan-500 to-blue-600",
    Kalshi: "from-purple-500 to-pink-600",
  };

  const bgGradient = platformColors[market.platform] || "from-gray-600 to-gray-800";

  return (
    <div className="group relative bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/20">
      <div className={`absolute inset-0 bg-gradient-to-br ${bgGradient} opacity-10 rounded-2xl blur-xl group-hover:opacity-30 transition-opacity`} />

      <div className="relative">
        <div className="flex justify-between items-start mb-4">
          <span className="text-xs font-semibold text-primary uppercase tracking-wider">
            {market.platform}
          </span>
          <span className="text-xs text-gray-500">{market.category}</span>
        </div>

        <h3 className="text-lg font-bold text-foreground line-clamp-3 mb-4 group-hover:text-primary transition-colors">
          {market.title}
        </h3>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="text-center">
            <div className="text-3xl font-black text-green-400">
              {market.yes_price ? `${(market.yes_price * 100).toFixed(0)}¢` : "—"}
            </div>
            <div className="text-xs text-gray-400 mt-1">YES</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-red-400">
              {market.no_price ? `${(market.no_price * 100).toFixed(0)}¢` : "—"}
            </div>
            <div className="text-xs text-gray-400 mt-1">NO</div>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Volume: ${(market.volume / 1e6).toFixed(1)}M
          </div>
          <Link
            href={
              market.platform === "Polymarket"
                ? "https://polymarket.com/?ref=predixio"
                : "https://kalshi.com/?ref=predixio"
            }
            target="_blank"
            className="px-4 py-2 bg-primary/20 hover:bg-primary/40 text-primary font-semibold text-sm rounded-lg transition-all"
          >
            Trade Now
          </Link>
        </div>
      </div>
    </div>
  );
}
