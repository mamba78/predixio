// next.config.js
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

// === PWA Setup (must be defined first) ===
const withPWA = require("next-pwa")({
  dest: "public",
  disable: !isProd,
  register: true,
  skipWaiting: true,
  buildExcludes: [/middleware-manifest\.json$/],
  runtimeCaching: [
    {
      urlPattern: /^https:\/\/clob\.polymarket\.com\/.*/i,
      handler: "NetworkFirst",
      options: {
        cacheName: "polymarket-api",
        expiration: { maxEntries: 32, maxAgeSeconds: 60 },
      },
    },
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|webp|avif|ico)$/i,
      handler: "CacheFirst",
      options: {
        cacheName: "images",
        expiration: { maxEntries: 100, maxAgeSeconds: 31536000 },
      },
    },
  ],
});

// === Base Next.js Config ===
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  output: "standalone",

  images: {
    remotePatterns: [
      { protocol: "https", hostname: "polymarket.com" },
      { protocol: "https", hostname: "**.polymarket.com" },
      { protocol: "https", hostname: "**.cloudfront.net" },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
  },

  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          { key: "Strict-Transport-Security", value: "max-age=63072000; includeSubDomains; preload" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "origin-when-cross-origin" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }],
      },
    ];
  },

  async redirects() {
    return [
      { source: "/discord", destination: "https://discord.gg/yourlink", permanent: true },
      { source: "/twitter", destination: "https://twitter.com/predixio", permanent: true },
    ];
  },

  experimental: {
    serverComponentsExternalPackages: ["@prisma/client"],
    optimizePackageImports: ["lucide-react"],
  },
};

// Apply production-only image tweaks
const finalConfig = isProd
  ? {
      ...nextConfig,
      images: {
        ...nextConfig.images,
        loader: "default",
        dangerouslyAllowSVG: true,
      },
    }
  : nextConfig;

// Export with PWA only in production
module.exports = isProd ? withPWA(finalConfig) : finalConfig;