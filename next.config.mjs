/** @type {import('next').NextConfig} */
const nextConfig = {
  // This forces full dynamic server mode – Vercel CANNOT make it static
  experimental: {
    serverActions: true,
  },
  // Explicitly disable any static export
  output: undefined,
};

export default nextConfig;
