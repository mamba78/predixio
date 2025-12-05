export default function StatsBar() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-16 text-center">
      <div>
        <div className="text-5xl font-bold text-cyan-400">1</div>
        <div className="text-gray-400 text-lg">Platform</div>
      </div>
      <div>
        <div className="text-5xl font-bold text-green-400">50+</div>
        <div className="text-gray-400 text-lg">Live Markets</div>
      </div>
      <div>
        <div className="text-5xl font-bold text-yellow-400">$2.1B</div>
        <div className="text-gray-400 text-lg">24h Volume</div>
      </div>
    </div>
  );
}
