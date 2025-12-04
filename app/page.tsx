import StatsBar from "./components/StatsBar";

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto px-6 py-20 text-center">
      <h1 className="text-7xl font-black bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent">
        Predixio
      </h1>
      <p className="text-2xl mt-6 text-gray-400">
        All Prediction Markets • One Real-Time Dashboard
      </p>
      <StatsBar />
      <p className="mt-12 text-xl">Polymarket • Kalshi • Manifold • 40+ platforms • Live now</p>
    </main>
  );
}
