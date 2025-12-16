/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  basePath: isProd ? "/ubuntu-websimulator20.04" : "",
  assetPrefix: isProd ? "/ubuntu-websimulator20.04/" : "",
  images: {
    unoptimized: true
  }
};

module.exports = nextConfig;