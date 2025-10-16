import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      new URL("https://demo.templatesjungle.com/booksaw/images/tab-item1.jpg"),
    ],
  },
};

export default nextConfig;
