import "./globals.css";
import { Inter } from "next/font/google";
import LegalModal from "@/components/LegalModal";
import ClientFooter from "@/components/ClientFooter";

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
        <ClientFooter />
        <LegalModal />
      </body>
    </html>
  );
}
