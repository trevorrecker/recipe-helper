// @ts-check

import {
  PHASE_DEVELOPMENT_SERVER,
  PHASE_PRODUCTION_BUILD,
} from "next/constants.js";

/** @type {import("next").NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  trailingSlash: false,
  swcMinify: true,
  output: 'export',
  distDir: './dist',
  compiler: {
    removeConsole: process.env.NODE_ENV !== "development"
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true,
  },
};

const nextConfigFunction = async (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD) {
    const withPWA = (await import("@ducanh2912/next-pwa")).default({
      dest: "public",
      disable: process.env.NODE_ENV === "development",
      register: true,
    });
    return withPWA(nextConfig);
  }
  return nextConfig;
};

export default nextConfigFunction;
