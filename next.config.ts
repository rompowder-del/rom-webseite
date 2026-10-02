import type { NextConfig } from "next";

// Für GitHub Pages: STATIC_EXPORT=1 und BASE_PATH=/cartech setzen
const base = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  ...(process.env.STATIC_EXPORT ? { output: "export", trailingSlash: true } : {}),
  basePath: base,
  env: { NEXT_PUBLIC_BASE_PATH: base },
};

export default nextConfig;
