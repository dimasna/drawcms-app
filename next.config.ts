import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Required by the OpenNext Cloudflare build; harmless for Node hosting
  // (Vercel, Netlify, Render) which use their own adapters.
  output: "standalone",
};

export default nextConfig;
