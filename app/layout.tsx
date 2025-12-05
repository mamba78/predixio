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
        <script dangerouslySetInnerHTML={{ __html: `window.TronLink={disabled:true};` }} />
      </head>
      <body className={`${inter.variable} font-sans antialiased min-h-screen bg-black text-white flex flex-col`}>
        {/* Main content — grows to fill available space, pushes footer to bottom */}
        <div className="flex-1">{children}</div>

        {/* Footer — no wrapper, no extra space, always at bottom */}
        <ClientFooter />

        <LegalModal />
      </body>
    </html>
  );
}