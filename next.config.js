/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
  // Configure for GitHub Pages deployment
  basePath: '/darshan-industries-ghp1',
  assetPrefix: '/darshan-industries-ghp1',
}

module.exports = nextConfig
