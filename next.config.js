// next.config.js
/** @type {import('next').NextConfig} */

const isProd = process.env.NODE_ENV === "production";

// === PWA – Ultra-optimized for instant offline & install ===
const withPWA = require("next-pwa")({
  dest: "public",
  disable: !isProd,
  register: true,
  skipWaiting: true,
  buildExcludes: [/middleware-manifest\.json$/, /.*-manifest\.js$/],
  runtimeCaching: [
    // Polymarket APIs – critical path
    {
      urlPattern: /^https:\/\/(gamma\.api|clob)\.polymarket\.com\/.*/i,
      handler: "NetworkFirst",
      options: {
        cacheName: "polymarket-critical",
        expiration: { maxEntries: 64, maxAgeSeconds: 30 },
        networkTimeoutSeconds: 8,
      },
    },
    // Images – immortal cache
    {
      urlPattern: /\.(?:png|jpg|jpeg|svg|webp|avif|ico|gif)$/i,
      handler: "CacheFirst",
      options: {
        cacheName: "static-images",
        expiration: { maxEntries: 200, maxAgeSeconds: 31536000 * 2 }, // 2 years
      },
    },
    // Fonts & CSS/JS
    {
      urlPattern: /\.(?:woff2?|ttf|eot|otf|css|js)$/i,
      handler: "CacheFirst",
      options: {
        cacheName: "static-assets",
        expiration: { maxEntries: 100, maxAgeSeconds: 31536000 },
      },
    },
  ],
});

// === Final Next.js Config – Maximum Speed & Security ===
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  poweredByHeader: false,
  output: "standalone",

  // Image optimization – elite tier
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "polymarket.com" },
      { protocol: "https", hostname: "*.polymarket.com" },
      { protocol: "https", hostname: "*.cloudfront.net" },
      { protocol: "https", hostname: "**.ipfs.cf-ipfs.com" },
    ],
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 31536000,
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },

  // Security + Performance Headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-DNS-Prefetch-Control", value: "on" },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value:
              "camera=(), microphone=(), geolocation=(), interest-cohort=()",
          },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "X-XSS-Protection", value: "1; mode=block" },
        ],
      },
      {
        source: "/_next/static/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/api/markets",
        headers: [
          {
            key: "Cache-Control",
            value: "s-maxage=10, stale-while-revalidate=30",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      {
        source: "/discord",
        destination: "https://discord.gg/yourlink",
        permanent: true,
      },
      {
        source: "/twitter",
        destination: "https://twitter.com/predixio",
        permanent: true,
      },
      {
        source: "/x",
        destination: "https://twitter.com/predixio",
        permanent: true,
      },
    ];
  },

  experimental: {
    optimizePackageImports: ["lucide-react"],
    serverActions: true,
    // Uncomment when ready:
    // optimizeCss: true,           // Reduces CSS by ~30%
    // instrumentationHook: true,  // For OpenTelemetry
  },

  // Production-only enhancements
  ...(isProd && {
    compiler: {
      removeConsole: true, // Strips console.log in production
    },
    eslint: { ignoreDuringBuilds: true },
    typescript: { ignoreBuildErrors: false },
  }),
};

// Final config with PWA only in production
const finalConfig = isProd ? withPWA(nextConfig) : nextConfig;

module.exports = finalConfig;
