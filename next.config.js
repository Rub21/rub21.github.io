/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production';

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['user-images.githubusercontent.com', 'miro.medium.com', 'cloud.githubusercontent.com'],
  },
  ...(isProd && { output: 'export' }),
};

module.exports = nextConfig;