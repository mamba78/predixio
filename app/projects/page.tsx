// app/projects/page.tsx — FINAL SEO + SCHEMA.ORG (2025 PERFECTION)
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Best Prediction Market Platforms 2025 — Polymarket, Manifold, Kalshi & More",
  description: "Compare top prediction market platforms: Polymarket (crypto), Manifold (play-money), Kalshi (regulated), PredictIt. Real-time data, volumes, categories, and affiliate links.",
  keywords: "best prediction markets 2025, polymarket, manifold markets, kalshi, predictit, prediction market platforms, crypto betting, real money prediction markets",
  openGraph: {
    title: "Best Prediction Market Platforms 2025 — Predixio",
    description: "Compare Polymarket, Manifold, Kalshi, PredictIt and more in one place.",
    url: "https://predixio.com/projects",
    type: "website",
    images: [{ url: "/og-projects.png", width: 1200, height: 630, alt: "Best Prediction Markets 2025" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Prediction Market Platforms 2025",
    description: "Polymarket, Manifold, Kalshi & more — compared live",
    images: ["/og-projects.png"],
  },
  alternates: {
    canonical: "https://predixio.com/projects",
  },
};

const platforms = [
  {
    name: "Polymarket",
    description: "World's largest decentralized prediction market on Polygon. Crypto, politics, sports, culture.",
    logo: "/logos/polymarket.png",
    status: "Live",
    volume: "$2.1B+",
    markets: "1,200+",
    link: process.env.NEXT_PUBLIC_AFFILIATE_POLYMARKET || "https://polymarket.com",
    affiliate: true,
  },
  {
    name: "Manifold Markets",
    description: "Play-money forecasting platform. AI, news, personal bets. Fastest-growing community.",
    logo: "/logos/manifold.png",
    status: "Live",
    volume: "10B+ Mana",
    markets: "15,000+",
    link: "https://manifold.markets",
  },
  {
    name: "Kalshi",
    description: "CFTC-regulated real-money prediction markets. Weather, economy, events. US legal.",
    logo: "/logos/kalshi.png",
    status: "Coming Soon",
    volume: "$500M+",
    markets: "100+",
    link: "https://kalshi.com",
  },
  {
    name: "PredictIt",
    description: "Academic political prediction market. Election odds with real money.",
    logo: "/logos/predictit.png",
    status: "Coming Soon",
    volume: "$1B+",
    markets: "200+",
    link: "https://predictit.org",
  },
];

export default function Projects() {
  return (
    <>
      {/* === FULL SCHEMA.ORG MARKUP — GOOGLE WILL LOVE THIS === */}
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
                sameAs: [
                  platform.link,
                  platform.name === "Polymarket" ? "https://twitter.com/polymarket" : undefined,
                  platform.name === "Manifold Markets" ? "https://twitter.com/manifoldmarkets" : undefined,
                ].filter(Boolean),
                additionalType: "https://schema.org/FinancialService",
              },
            })),
            author: {
              "@type": "Organization",
              name: "Predixio",
              url: "https://predixio.com",
            },
          }),
        }}
      />

      <div className="min-h-screen bg-background py-24">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-black hero-gradient mb-6">
              Best Prediction Market Platforms 2025
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto">
              Compare the top real-time prediction markets: Polymarket (crypto), Manifold (play-money), Kalshi (regulated), PredictIt (politics).
            </p>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {platforms.map((platform) => (
              <div
                key={platform.name}
                className="card p-8 text-center group hover:shadow-glow transition-all duration-500"
                itemScope
                itemType="https://schema.org/Organization"
              >
                <meta itemProp="name" content={platform.name} />
                <meta itemProp="description" content={platform.description} />
                <meta itemProp="url" content={platform.link} />

                <Image
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  width={100}
                  height={100}
                  className="mx-auto mb-6 rounded-2xl"
                  itemProp="logo"
                />
                <h2 className="text-2xl font-black mb-3" itemProp="name">
                  {platform.name}
                </h2>
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
                  className="btn-gradient block"
                  itemProp="url"
                >
                  {platform.status === "Live" ? "Visit Platform" : "Learn More"}
                  {platform.affiliate && " →"}
                </Link>
              </div>
            ))}
          </div>

          {/* Footer CTA */}
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
    </>
  );
}