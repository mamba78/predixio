import "./globals.css";
import { Inter } from "next/font/google";
import LegalModal from "@/components/LegalModal";
import ClientFooter from "@/components/ClientFooter";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = { 
  title: "Predixio – Real-Time Prediction Markets", 
  description: "Polymarket • Kalshi • All markets in one place" 
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <script dangerouslySetInnerHTML={{ __html: `window.TronLink={disabled:true};` }} />
      </head>
      <body className={`${inter.variable} font-sans antialiased bg-black text-white min-h-screen flex flex-col`}>
        {/* Main content grows to push footer down */}
        <main className="flex-1">{children}</main>

        {/* Sticky footer — always at bottom, no extra space */}
        <div className="sticky bottom-0 w-full bg-black border-t border-gray-800 z-50">
          <ClientFooter />
        </div>

        <LegalModal />
      </body>
    </html>
  );
}