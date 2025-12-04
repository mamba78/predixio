import "./globals.css";
import { Inter } from "next/font/google";
import LegalModal from "@/components/LegalModal";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });

export const metadata = {
  title: "Predixio – Real-Time Prediction Markets 2025",
  description: "Polymarket • Kalshi • All markets in one place",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-black text-white flex flex-col`}>
        <div className="flex-1">{children}</div>

        <footer className="border-t border-gray-800 py-8 mt-20 text-center text-sm text-gray-500">
          <div className="max-w-7xl mx-auto px-6">
            <div className="flex flex-wrap justify-center gap-6">
              <button onClick={() => document.dispatchEvent(new CustomEvent("open-legal", { detail: "terms" }))} className="hover:text-cyan-400 transition">Terms</button>
              <button onClick={() => document.dispatchEvent(new CustomEvent("open-legal", { detail: "privacy" }))} className="hover:text-cyan-400 transition">Privacy</button>
              <button onClick={() => document.dispatchEvent(new CustomEvent("open-legal", { detail: "cookies" }))} className="hover:text-cyan-400 transition">Cookies</button>
              <button onClick={() => document.dispatchEvent(new CustomEvent("open-legal", { detail: "disclaimer" }))} className="hover:text-cyan-400 transition">Disclaimer</button>
            </div>
            <p className="mt-4 text-xs">© 2025 Predixio • Not financial advice • 18+</p>
          </div>
        </footer>

        <LegalModal />
      </body>
    </html>
  );
}
