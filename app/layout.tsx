// app/layout.tsx
import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import CookieConsent from "@/components/CookieConsent"; // ← we'll create this next

// Fast, beautiful font (loads instantly)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Predixio – Real-Time Prediction Markets 2025",
  description: "Polymarket • Kalshi • Manifold • All markets, live odds, one place.",
  keywords: "prediction markets, polymarket, kalshi, crypto betting, real time odds",
  authors: [{ name: "mamba78" }],
  openGraph: {
    title: "Predixio – All Prediction Markets in One Place",
    description: "Live odds from Polymarket, Kalshi and more – updated every minute.",
    url: "https://predixio.vercel.app",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen bg-black text-white flex flex-col`}
      >
        <div className="flex-1">{children}</div>

        {/* Footer – mobile-friendly */}
        <footer className="border-t border-gray-800 py-8 mt-20 text-center text-sm text-gray-500 bg-black/50 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-6 mb-4">
              <Link href="/legal/terms" className="hover:text-cyan-400 transition">
                Terms
              </Link>
              <Link href="/legal/privacy" className="hover:text-cyan-400 transition">
                Privacy
              </Link>
              <Link href="/legal/cookies" className="hover:text-cyan-400 transition">
                Cookies
              </Link>
              <Link href="/legal/disclaimer" className="hover:text-cyan-400 transition">
                Disclaimer
              </Link>
            </div>
            <p className="text-xs">
              © 2025 Predixio • Not financial advice • 18+ only
            </p>
          </div>
        </footer>

        {/* Cookie Consent Popup */}
        <CookieConsent />
      </body>
    </html>
  );
}