/** @type {import('next').NextConfig} */
const nextConfig = {
  // FIX: Enables the app directory structure in Next.js 13.0.0
  experimental: {
    appDir: true,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
