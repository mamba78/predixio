import Link from "next/link";

export const metadata = { title: "Cookie Policy – Predixio" };

export default function CookiesPage() {
  return (
    <main className="min-h-screen bg-black text-gray-100 py-20 px-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-12 text-center md:text-left">
          Cookie Policy
        </h1>

        <div className="prose prose-invert max-w-none space-y-6 text-gray-300 leading-relaxed">
          <p>Predixio uses the minimum possible cookies.</p>

          <h2>Cookies We Use</h2>
          <p>
            • Essential cookies for site functionality<br />
            • Vercel Web Analytics (anonymous, no personal data)<br />
            • No marketing cookies<br />
            • No third-party tracking
          </p>

          <h2>Your Choices</h2>
          <p>You can disable cookies in your browser settings at any time.</p>

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
