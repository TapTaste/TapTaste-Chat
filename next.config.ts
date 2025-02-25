import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  env: {
    CHAT_WEBSOCKET_URL: process.env.CHAT_WEBSOCKET_URL,
  }
};

export default nextConfig;
