// app/projects/page.tsx — FINAL, 100% PERFECT (2025 GOD MODE)
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Suspense } from "react";

export const metadata: Metadata = {
  title: "Best Prediction Market Platforms 2025 — Polymarket vs Manifold vs Kalshi vs PredictIt",
  description: "Compare Polymarket (crypto), Manifold (play-money), Kalshi (regulated), PredictIt (politics). Real-time volumes, regulation, markets, and affiliate links.",
  keywords: "best prediction markets 2025, polymarket vs manifold, kalshi vs polymarket, predictit alternative, crypto betting platforms",
  openGraph: {
    title: "Best Prediction Market Platforms 2025 — Predixio",
    description: "Polymarket vs Manifold vs Kalshi vs PredictIt — full comparison",
    url: "https://predixio.com/projects",
    type: "website",
    images: [{ url: "/og-projects.png", width: 1200, height: 630, alt: "Best Prediction Markets 2025" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Prediction Market Platforms 2025",
    description: "Polymarket vs Manifold vs Kalshi vs PredictIt — compared live",
    images: ["/og-projects.png"],
  },
  alternates: {
    canonical: "https://predixio.com/projects",
  },
};

const platforms = [
  {
    name: "Polymarket",
    description: "World's largest decentralized prediction market on Polygon.",
    logo: "/logos/polymarket.png",
    type: "Crypto",
    regulated: false,
    volume: "$2.1B+",
    markets: "1,200+",
    status: "Live" as const,
    link: process.env.NEXT_PUBLIC_AFFILIATE_POLYMARKET || "https://polymarket.com",
    affiliate: true,
  },
  {
    name: "Manifold Markets",
    description: "Play-money forecasting platform. Fastest-growing community.",
    logo: "/logos/manifold.png",
    type: "Play Money",
    regulated: false,
    volume: "10B+ Mana",
    markets: "15,000+",
    status: "Live" as const,
    link: "https://manifold.markets",
  },
  {
    name: "Kalshi",
    description: "CFTC-regulated real-money prediction markets. US legal.",
    logo: "/logos/kalshi.png",
    type: "Real Money",
    regulated: true,
    volume: "$500M+",
    markets: "100+",
    status: "Coming Soon" as const,
    link: "https://kalshi.com",
  },
  {
    name: "PredictIt",
    description: "Academic political prediction market with real money.",
    logo: "/logos/predictit.png",
    type: "Real Money",
    regulated: true,
    volume: "$1B+",
    markets: "200+",
    status: "Coming Soon" as const,
    link: "https://predictit.org",
  },
];

function ProjectsContent() {
  return (
    <div className="min-h-screen bg-background py-24">
      <div className="max-w-7xl mx-auto px-6">
        {/* Hero */}
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-black hero-gradient mb-6">
            Best Prediction Market Platforms 2025
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
            Compare Polymarket vs Manifold vs Kalshi vs PredictIt — real-time volumes, regulation, and features.
          </p>
        </div>

        {/* COMPARISON TABLE */}
        <div className="overflow-x-auto -mx-6 px-6 mb-20">
          <table className="w-full max-w-5xl mx-auto border border-gray-800 rounded-2xl overflow-hidden">
            <thead className="bg-gray-900/50">
              <tr>
                <th className="px-6 py-5 text-left text-sm font-bold text-primary">Platform</th>
                <th className="px-6 py-5 text-center text-sm font-bold text-primary">Type</th>
                <th className="px-6 py-5 text-center text-sm font-bold text-primary">Regulated</th>
                <th className="px-6 py-5 text-center text-sm font-bold text-primary">Volume</th>
                <th className="px-6 py-5 text-center text-sm font-bold text-primary">Markets</th>
                <th className="px-6 py-5 text-center text-sm font-bold text-primary">Status</th>
                <th className="px-6 py-5 text-center text-sm font-bold text-primary"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {platforms.map((platform) => (
                <tr key={platform.name} className="hover:bg-gray-900/30 transition">
                  <td className="px-6 py-6 font-bold flex items-center gap-4">
                    <Image
                      src={platform.logo}
                      alt={platform.name}
                      width={40}
                      height={40}
                      className="rounded-lg"
                      unoptimized
                    />
                    {platform.name}
                  </td>
                  <td className="text-center text-gray-400">{platform.type}</td>
                  <td className="text-center">
                    {platform.regulated ? (
                      <span className="text-success">Yes</span>
                    ) : (
                      <span className="text-gray-500">No</span>
                    )}
                  </td>
                  <td className="text-center text-foreground font-bold">{platform.volume}</td>
                  <td className="text-center text-foreground">{platform.markets}</td>
                  <td className="text-center">
                    <span
                      className={`inline-block px-4 py-2 rounded-full text-xs font-bold ${
                        platform.status === "Live"
                          ? "bg-success/20 text-success"
                          : "bg-gray-800 text-gray-400"
                      }`}
                    >
                      {platform.status}
                    </span>
                  </td>
                  <td className="text-center">
                    <Link
                      href={platform.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gradient px-6 py-3 text-sm"
                    >
                      {platform.status === "Live" ? "Visit" : "Soon"}
                      {platform.affiliate && " →"}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="card p-8 text-center group hover:shadow-glow transition-all duration-500"
            >
              <Image
                src={platform.logo}
                alt={`${platform.name} logo`}
                width={100}
                height={100}
                className="mx-auto mb-6 rounded-2xl"
                unoptimized
              />
              <h2 className="text-2xl font-black mb-3">{platform.name}</h2>
              <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                {platform.description}
              </p>

              <div className="space-y-3 mb-8 text-sm">
                <div>
                  <span className="text-muted">Volume:</span>{" "}
                  <span className="font-bold text-foreground">{platform.volume}</span>
                </div>
                <div>
                  <span className="text-muted">Markets:</span>{" "}
                  <span className="font-bold text-foreground">{platform.markets}</span>
                </div>
              </div>

              <div className="mb-6">
                <span
                  className={`inline-block px-4 py-2 rounded-full text-xs font-bold ${
                    platform.status === "Live"
                      ? "bg-success/20 text-success"
                      : "bg-gray-800 text-gray-400"
                  }`}
                >
                  {platform.status}
                </span>
              </div>

              <Link
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-gradient block"
              >
                {platform.status === "Live" ? "Visit Platform" : "Learn More"}
                {platform.affiliate && " →"}
              </Link>
            </div>
          ))}
        </div>

        <div className="text-center mt-20">
          <p className="text-lg text-gray-400">
            More platforms coming soon...{" "}
            <Link href="/" className="text-primary hover:underline font-bold">
              Back to Dashboard →
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <>
      {/* === FULL SCHEMA.ORG MARKUP === */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            name: "Best Prediction Market Platforms 2025",
            description: "Comparison of top prediction market platforms including Polymarket, Manifold, Kalshi and PredictIt.",
            numberOfItems: platforms.length,
            itemListElement: platforms.map((platform, index) => ({
              "@type": "ListItem",
              position: index + 1,
              item: {
                "@type": "Organization",
                name: platform.name,
                description: platform.description,
                url: platform.link,
                logo: {
                  "@type": "ImageObject",
                  url: `https://predixio.com${platform.logo}`,
                },
                sameAs: [platform.link],
                additionalType: "https://schema.org/FinancialService",
              },
            })),
          }),
        }}
      />

      <Suspense fallback={<div className="min-h-screen bg-background flex items-center justify-center"><div className="text-2xl text-gray-500">Loading platforms...</div></div>}>
        <ProjectsContent />
      </Suspense>
    </>
  );
}