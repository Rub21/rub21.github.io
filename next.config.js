/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['user-images.githubusercontent.com','miro.medium.com',"cloud.githubusercontent.com"],
      },
}

module.exports = nextConfig
