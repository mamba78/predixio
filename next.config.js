/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  output: 'export',  // Forces static-like routing for pages
};

module.exports = nextConfig;