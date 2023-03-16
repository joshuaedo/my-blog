/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    workerThreads: false,
    cpus: 1,
  },
  reactStrictMode: true,
  images: {
    domains: ["media.graphassets.com"],
  },
};

module.exports = nextConfig;
