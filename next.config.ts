import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost:3000',
      },
    ],
    unoptimized: true,
  },
};

export default nextConfig;
