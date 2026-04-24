/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  distDir: 'out',
  // Configure for GitHub Pages deployment
  assetPrefix: '/darshan-industries',
  basePath: '/darshan-industries',
}

module.exports = nextConfig
