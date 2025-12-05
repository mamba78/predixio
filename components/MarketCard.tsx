import Link from "next/link";

export default function MarketCard({ market }: { market: any }) {
  const yes = Number(market.yes_price) * 100;
  const no = Number(market.no_price) * 100;

  return (
    <div className="group relative bg-gray-900 border border-gray-800 rounded-2xl p-6 hover:border-cyan-400/50 transition-all hover:shadow-xl">
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-bold text-cyan-400">{market.platform}</span>
        <span className="text-xs text-gray-500">{market.category}</span>
      </div>
      <h3 className="text-lg font-bold text-white mb-4 line-clamp-3 group-hover:text-cyan-400">
        {market.title}
      </h3>
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="text-center">
          <div className="text-3xl font-black text-green-400">{yes.toFixed(0)}¢</div>
          <div className="text-xs text-gray-400">YES</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-black text-red-400">{no.toFixed(0)}¢</div>
          <div className="text-xs text-gray-400">NO</div>
        </div>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-sm text-gray-400">
          Volume: ${(market.volume / 1e6).toFixed(1)}M
        </div>
        <Link
          href={market.link || "https://polymarket.com"}
          target="_blank"
          className="px-6 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold rounded-full hover:scale-105 transition"
        >
          Trade Now
        </Link>
      </div>
    </div>
  );
}
