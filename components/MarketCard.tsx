// components/MarketCard.tsx
import Link from "next/link";

const formatVolume = (v: number) => {
  if (v >= 1e9) return `$${(v / 1e9).toFixed(1)}B`;
  if (v >= 1e6) return `$${(v / 1e6).toFixed(1)}M`;
  return `$${v.toLocaleString()}`;
};

export default function MarketCard({ market, isGrid }: { market: any; isGrid: boolean }) {
  const yes = (parseFloat(market.yes_price) * 100).toFixed(0);
  const no = (parseFloat(market.no_price) * 100).toFixed(0);

  if (!isGrid) {
    // LIST VIEW — beautiful one-row
    return (
      <Link
        href={market.link || "https://polymarket.com"}
        target="_blank"
        className="block bg-gray-900/70 border border-gray-800 rounded-2xl p-5 hover:border-primary/60 hover:bg-gray-900/90 transition-all group"
      >
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 text-xs text-gray-500 mb-2">
              <span className="font-bold text-primary">{market.platform}</span>
              <span>•</span>
              <span>{market.category}</span>
            </div>
            <h3 className="font-semibold text-white group-hover:text-primary transition">
              {market.title}
            </h3>
          </div>

          <div className="flex items-center gap-6 text-sm">
            <div className="text-center">
              <div className="text-xl font-bold text-green-400">{yes}¢</div>
              <div className="text-xs text-gray-500">YES</div>
            </div>
            <div className="text-center">
              <div className="text-xl font-bold text-red-400">{no}¢</div>
              <div className="text-xs text-gray-500">NO</div>
            </div>
            <div className="text-gray-400 hidden md:block">
              {formatVolume(market.volume)}
            </div>
            <div className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-full text-sm hover:scale-105 transition">
              Trade Now
            </div>
          </div>
        </div>
      </Link>
    );
  }

  // GRID VIEW — clean and elegant
  return (
    <div className="group bg-gray-900/80 border border-gray-800 rounded-2xl p-6 hover:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 transition-all">
      <div className="flex justify-between text-xs mb-3">
        <span className="font-bold text-primary uppercase">{market.platform}</span>
        <span className="text-gray-500">{market.category}</span>
      </div>

      <h3 className="text-lg font-bold text-white line-clamp-3 mb-5 group-hover:text-primary transition">
        {market.title}
      </h3>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center">
          <div className="text-3xl font-black text-green-400">{yes}¢</div>
          <div className="text-xs text-gray-400">YES</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-black text-red-400">{no}¢</div>
          <div className="text-xs text-gray-400">NO</div>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-400">{formatVolume(market.volume)}</span>
        <Link
          href={market.link || "https://polymarket.com"}
          target="_blank"
          className="px-6 py-3 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-full text-sm hover:scale-105 transition"
        >
          Trade Now
        </Link>
      </div>
    </div>
  );
}