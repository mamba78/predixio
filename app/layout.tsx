import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Predixio – Real-Time Prediction Markets 2025",
  description: "Polymarket • Kalshi • Manifold • All markets, live odds, one place.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className="min-h-screen bg-black text-white">  {/* Added bg-black text-white */}
        {children}
        <footer className="border-t border-gray-800 py-8 mt-20 text-center text-sm text-gray-500">
          <div className="flex justify-center gap-6 flex-wrap">
            <Link href="/legal/terms">Terms</Link>
            <Link href="/legal/privacy">Privacy</Link>
            <Link href="/legal/cookies">Cookies</Link>
            <Link href="/legal/disclaimer">Disclaimer</Link>
          </div>
          <p className="mt-4">© 2025 Predixio – Not financial advice • 18+</p>
        </footer>
      </body>
    </html>
  );
}