import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "Predixio – All Prediction Markets 2025",
  description: "Real-time Polymarket • Kalshi • Manifold aggregator",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen">
        {children}
        <footer className="border-t border-gray-800 py-8 mt-20 text-center text-sm text-gray-500">
          <div className="space-x-6">
            <Link href="/terms">Terms</Link>
            <Link href="/privacy">Privacy</Link>
            <Link href="/cookie-policy">Cookies</Link>
            <Link href="/disclaimer">Disclaimer</Link>
          </div>
          <p className="mt-4">© 2025 Predixio – Not financial advice • 18+</p>
        </footer>
      </body>
    </html>
  );
}
