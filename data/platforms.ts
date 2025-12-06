export const PLATFORMS = [
  {
    id: "polymarket",
    name: "Polymarket",
    logo: "/logos/polymarket.png",
    link: process.env.NEXT_PUBLIC_AFFILIATE_POLYMARKET || "https://polymarket.com",
    affiliate: true,
    status: "Live" as const,
  },
  {
    id: "manifold",
    name: "Manifold Markets",
    logo: "/logos/manifold.png",
    link: "https://manifold.markets",
    affiliate: false,
    status: "Live" as const,
  },
  {
    id: "kalshi",
    name: "Kalshi",
    logo: "/logos/kalshi.png",
    link: "https://kalshi.com",
    affiliate: false,
    status: "Coming Soon" as const,
  },
  {
    id: "predictit",
    name: "PredictIt",
    logo: "/logos/predictit.png",
    link: "https://predictit.org",
    affiliate: false,
    status: "Coming Soon" as const,
  },
] as const;
