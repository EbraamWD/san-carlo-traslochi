import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Dominio canonico: www
      {
        source: "/:path*",
        has: [{ type: "host", value: "sancarlotraslochi.it" }],
        destination: "https://www.sancarlotraslochi.it/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
