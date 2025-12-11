import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  // @ts-ignore - turbopack types might not be updated yet
  turbopack: {
    root: __dirname,
  },
};

export default nextConfig;
