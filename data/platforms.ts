export type Platform = {
  id: string;
  name: string;
  logo: string;
  affiliateLink?: string;
  defaultLink: string;
  status: "Live" | "Coming Soon";
};

export const PLATFORMS: Platform[] = [
  {
    id: "polymarket",
    name: "Polymarket",
    logo: "/logos/polymarket.png",
    affiliateLink: process.env.NEXT_PUBLIC_AFFILIATE_POLYMARKET,
    defaultLink: "https://polymarket.com",
    status: "Live",
  },
  {
    id: "manifold",
    name: "Manifold Markets",
    logo: "/logos/manifold.png",
    defaultLink: "https://manifold.markets",
    status: "Live",
  },
  {
    id: "kalshi",
    name: "Kalshi",
    logo: "/logos/kalshi.png",
    defaultLink: "https://kalshi.com",
    status: "Coming Soon",
  },
  {
    id: "predictit",
    name: "PredictIt",
    logo: "/logos/predictit.png",
    defaultLink: "https://predictit.org",
    status: "Coming Soon",
  },
] as const;
