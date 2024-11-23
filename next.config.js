/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        esmExternals: true,
    },
    images: {
        unoptimized: true,
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
        ],
    },
};

module.exports = nextConfig;
