import Link from "next/link";

export const metadata = { title: "Privacy Policy – Predixio" };

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-black text-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-12 text-center md:text-left">
          Privacy Policy
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
          <p>Predixio respects your privacy and collects minimal data.</p>

          <h2>1. Data We Collect</h2>
          <p>
            • No personal information is collected<br />
            • No accounts or sign-ups required<br />
            • We use only Vercel Web Analytics (anonymous, privacy-first)
          </p>

          <h2>2. Cookies</h2>
          <p>
            We use only essential cookies and anonymous analytics. No tracking, no advertising, no sale of data.
          </p>

          <h2>3. Third-Party Links</h2>
          <p>
            When you click “Trade Now”, you are sent to Polymarket, Kalshi, etc. Their privacy policies apply there.
          </p>

          <h2>4. Changes</h2>
          <p>We may update this policy. Continued use constitutes acceptance.</p>

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
