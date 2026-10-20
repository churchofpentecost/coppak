import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The original theme modifies DOM nodes after hydration. Production pages
  // are static and use full-page navigation for a predictable plugin lifecycle.
  reactStrictMode: false,
  poweredByHeader: false,
};

export default nextConfig;
