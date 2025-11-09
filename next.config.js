/** @type {import('next').NextConfig} */
const nextConfig = {
    // This setting is CRITICAL for Vercel to recognize the 'app' directory
    experimental: {
        appDir: true,
    },
};

module.exports = nextConfig;
