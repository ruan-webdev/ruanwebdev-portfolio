/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  images: {
    domains: [
      "media.graphassets.com",
      "private-user-images.githubusercontent.com",
    ],
  },
}

module.exports = nextConfig
