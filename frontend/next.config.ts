import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "1337",
        pathname: "/uploads/**/*",
      },
      {
        protocol: "https",
        hostname: "placehold.co",    "placehold": Unkown word.
      },
      {
        protocol: "https",
        hostname: "luminous-addition-c153b007fc.media.strapiapp.com",    
      }:
    ],
  },
};

export default nextConfig;



