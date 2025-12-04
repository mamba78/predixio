import Link from "next/link";

export const metadata = { title: "Disclaimer – Predixio" };

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-black text-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-12 text-center md:text-left">
          Disclaimer
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
          <p>
            Predixio is an <strong>independent third-party aggregator</strong> and is not affiliated
            with, endorsed by, or sponsored by Polymarket, Kalshi, Manifold Markets, or any other platform displayed.
          </p>

          <p>
            All trademarks, logos, and brand names are the property of their respective owners.
          </p>

          <p>
            Market data is provided "as is" with no warranty of accuracy or timeliness.
          </p>

          <p>
            Trading prediction markets involves substantial risk. You are solely responsible for your actions.
          </p>

          <p className="text-gray-400 mt-12 text-sm">
            Last updated: December 4, 2025
          </p>
        </div>

        <Link href="/" className="inline-block mt-12 text-cyan-400 hover:text-cyan-300 font-medium transition">
          ← Back to Predixio
        </Link>
      </div>
    </main>
  );
}
