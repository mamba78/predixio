import Link from "next/link";

export default function MarketCard({ market }: { market: any }) {
  const yes = (Number(market.yes_price) * 100).toFixed(0);
  const no = (Number(market.no_price) * 100).toFixed(0);
  const volumeM = (market.volume / 1e6).toFixed(1);

  return (
    <div className="group bg-gray-900/80 backdrop-blur border border-gray-800 rounded-2xl p-6 hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20">
      <div className="flex justify-between items-start mb-4">
        <span className="text-xs font-bold text-cyan-400 uppercase">{market.platform}</span>
        <span className="text-xs text-gray-500">{market.category}</span>
      </div>

      <h3 className="text-lg font-bold text-white line-clamp-3 mb-4 group-hover:text-cyan-400 transition">
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
        <div className="text-sm text-gray-400">
          Volume: ${volumeM}M
        </div>
        <Link
          href={market.link || "https://polymarket.com"}
          target="_blank"
          className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold rounded-full hover:scale-105 transition"
        >
          Trade Now
        </Link>
      </div>
    </div>
  );
}
