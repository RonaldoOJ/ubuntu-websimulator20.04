/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  basePath: "/ubuntu-websimulator20.04",
  assetPrefix: "/ubuntu-websimulator20.04/",
  trailingSlash: true,
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;