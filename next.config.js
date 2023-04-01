const withMDX = require("@next/mdx")({
  options: {
    providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Optionally, add any other Next.js config below
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
};

// Merge MDX config with Next.js config
module.exports = withMDX(nextConfig);
