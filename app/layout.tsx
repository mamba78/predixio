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
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Block TronLink and other wallets from breaking hydration */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof window !== 'undefined') {
                window.TronLink = { disabled: true };
                if (window.ethereum) window.ethereum.isMetaMask = false;
              }
            `,
          }}
        />
      </head>

      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-black text-white flex flex-col`}>
        {/* Main content grows to push footer down */}
        <div className="flex-1">{children}</div>

        {/* Sticky footer — always at bottom, even on short pages */}
        <footer className="sticky bottom-0 w-full bg-black border-t border-gray-800 z-50">
          <ClientFooter />
        </footer>

        <LegalModal />
      </body>
    </html>
  );
}