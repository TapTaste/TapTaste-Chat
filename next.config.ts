import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  env: {
    CHAT_WEBSOCKET_URL: process.env.CHAT_WEBSOCKET_URL,
    CHAT_WEBSOCKET_KEEP_ALIVE_INTERVAL: process.env.CHAT_WEBSOCKET_KEEP_ALIVE_INTERVAL,
  }
};

export default nextConfig;
