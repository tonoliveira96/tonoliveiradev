/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['raw.githubusercontent.com','images.pexels.com', 'github.com']
  }
}

module.exports = nextConfig
