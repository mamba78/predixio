// app/legal/terms/page.tsx
import Link from "next/link";

export const metadata = {
  title: "Terms of Service – Predixio",
  description: "Legal terms for using Predixio prediction market aggregator",
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-black text-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-12 text-center md:text-left">
          Terms of Service
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
          <p>
            By accessing <span className="text-cyan-400">predixio.vercel.app</span> ("
            <strong>Predixio</strong>"), you agree to be bound by these Terms of Service.
          </p>

          <h2>1. Nature of Service</h2>
          <p>
            Predixio is an <strong>independent aggregator</strong> displaying publicly available
            prediction market data from platforms including Polymarket and Kalshi. We do{" "}
            <strong>not</strong> operate any markets, accept bets, or hold user funds.
          </p>

          <h2>2. No Financial Advice</h2>
          <p>
            All information is for informational purposes only. Nothing on Predixio constitutes
            financial, investment, or betting advice.
          </p>

          <h2>3. Affiliate Links</h2>
          <p>
            Some “Trade Now” links contain affiliate identifiers. We may earn a commission at no
            extra cost to you.
          </p>

          <h2>4. Accuracy of Data</h2>
          <p>We strive for accuracy but make no warranties. Market prices can change rapidly.</p>

          <h2>5. Age Restriction</h2>
          <p>
            You must be <strong>18 years or older</strong> (or the legal age in your jurisdiction) to
            use Predixio.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            Predixio and its operators shall not be liable for any indirect, incidental, or
            consequential damages arising from your use of the site.
          </p>

          <p className="text-gray-400 mt-12 text-sm">
            Last updated: December 4, 2025
          </p>
        </div>

        <Link
          href="/"
          className="inline-block mt-12 text-cyan-400 hover:text-cyan-300 font-medium transition"
        >
          ← Back to Predixio
        </Link>
      </div>
    </main>
  );
}