/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    // Add rule for SVG files
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },

  async redirects() {
    return [
      // {
      //   source: "/EXAMPLE",
      //   destination: "https://EXAMPLE.DOMAIN.com",
      //   permanent: true,
      // },
    ];
  },
};

export default nextConfig;
