import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: [
      "api.microlink.io", // Microlink Image Preview
    ],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
      },
      {
        protocol: 'https',
        hostname: 't4.ftcdn.net', 
      },
      {
        protocol: 'https',
        hostname: 'letsenhance.io'
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com'
      }
    ],
  },
};

export default nextConfig;
