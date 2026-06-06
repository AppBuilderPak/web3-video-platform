/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: false,
    domains: [
      'img.youtube.com',
      'picsum.photos',
      'api.dicebear.com',
      'ipfs.io',
      'gateway.pinata.cloud',
    ],
  },
  typescript: {
    tsconfigPath: './tsconfig.json',
  },
};

module.exports = nextConfig;
