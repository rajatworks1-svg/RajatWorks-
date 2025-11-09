/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        appDir: true,
        // FIX: Disable the metadata image loader that is failing the build.
        // We will manage favicon/icon manually or delete the corrupt file.
        nextMetadataImageLoader: false,
    },
};

module.exports = nextConfig;
