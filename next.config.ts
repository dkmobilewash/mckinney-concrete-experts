import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Canonicalize on the www host: permanently (308) redirect the bare
  // apex domain to the www version so every URL has exactly one address.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "mckinneyconcreteexperts.com" }],
        destination: "https://www.mckinneyconcreteexperts.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
