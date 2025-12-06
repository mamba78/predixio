// app/layout.tsx
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "next-themes";
import Navbar from "@/components/Navbar";
import ClientFooter from "@/components/ClientFooter";
import LegalModal from "@/components/LegalModal";

// Optimized Inter font with preload
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800", "900"],
  display: "swap",
  preload: true, // Faster font loading
});

// ——— VIEWPORT & THEME COLOR ———
export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
};

// ——— METADATA (SEO + OG + Twitter) ———
export const metadata = {
  title: {
    default: "Predixio – Real-Time Prediction Markets",
    template: "%s | Predixio",
  },
  description:
    "All Polymarket, Kalshi, Manifold & prediction markets in one fast, real-time dashboard.",
  keywords:
    "prediction markets, polymarket, kalshi, manifold, crypto, real-time odds, blockchain betting",
  authors: [{ name: "Predixio", url: "https://predixio.com" }],
  creator: "Predixio",
  publisher: "Predixio",
  metadataBase: new URL("https://predixio.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Predixio – All Prediction Markets in One Place",
    description:
      "Real-time prices, volume, liquidity — Polymarket + Kalshi + more",
    url: "https://predixio.com",
    siteName: "Predixio",
    images: [{ url: "/og.png", width: 1200, height: 630, alt: "Predixio" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Predixio – Real-Time Prediction Markets",
    description: "Polymarket + Kalshi + all platforms in one dashboard",
    images: ["/og.png"],
    creator: "@predixio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  manifest: "/manifest.json",
  icons: {
    icon: ["/favicon.ico"],
    apple: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* PWA Essentials */}
        <meta name="application-name" content="Predixio" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
        <meta name="format-detection" content="telephone=no" />

        {/* Icons & Manifest */}
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="icon" href="/favicon.ico" />

        {/* Critical Performance Preloads */}
        <link
          rel="preload"
          href="/api/markets"
          as="fetch"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://gamma.api.polymarket.com" />
        <link rel="preconnect" href="https://clob.polymarket.com" />

        {/* Block TronLink spam */}
        <script
          dangerouslySetInnerHTML={{
            __html: `window.TronLink={disabled:true};`,
          }}
        />
      </head>

      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col bg-background text-foreground`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />

          {/* Main content with safe padding */}
          <main className="flex-1 pt-20 pb-24 md:pb-20">{children}</main>

          {/* Mobile-safe fixed footer */}
          <footer className="fixed inset-x-0 bottom-0 bg-black/95 backdrop-blur-xl border-t border-gray-800 z-50 supports-[backdrop-filter]:bg-black/80">
            <div className="pb-safe">
              <ClientFooter />
            </div>
          </footer>

          <LegalModal />
        </ThemeProvider>
      </body>
    </html>
  );
}
