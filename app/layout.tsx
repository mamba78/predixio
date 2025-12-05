import "./globals.css";
import { Inter } from "next/font/google";
import LegalModal from "@/components/LegalModal";
import ClientFooter from "@/components/ClientFooter";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata = { title: "Predixio", description: "All prediction markets" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: `window.TronLink={disabled:true};` }} />
      </head>
      <body className={`${inter.variable} font-sans min-h-screen bg-black text-white flex flex-col`}>
        {children}
        <ClientFooter />
        <LegalModal />
      </body>
    </html>
  );
}