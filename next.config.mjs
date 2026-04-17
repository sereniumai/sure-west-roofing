/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  transpilePackages: ['@21st-extension/toolbar'],
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['lucide-react'],
  },
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2560],
    imageSizes: [256, 384, 512, 640],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        ],
      },
      {
        source: '/images/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|mp4|woff|woff2)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      // Slug-style legacy URLs → canonical service pages (single hop)
      { source: '/roof-replacement-cochrane',      destination: '/roof-replacement',   permanent: true },
      { source: '/roof-repair-cochrane',           destination: '/roof-repair',        permanent: true },
      { source: '/hail-damage-repair-cochrane',    destination: '/hail-damage-repair', permanent: true },
      { source: '/roof-maintenance-cochrane',      destination: '/roof-maintenance',   permanent: true },
      { source: '/roof-inspection-cochrane',       destination: '/roof-inspection',    permanent: true },
      { source: '/skylight-installation-cochrane', destination: '/skylight-installation', permanent: true },
      // Old nested URL structure → canonical service pages
      { source: '/services/roof-replacement/cochrane',      destination: '/roof-replacement',   permanent: true },
      { source: '/services/roof-repair/cochrane',           destination: '/roof-repair',        permanent: true },
      { source: '/services/hail-damage-repair/cochrane',    destination: '/hail-damage-repair', permanent: true },
      { source: '/services/roof-maintenance/cochrane',      destination: '/roof-maintenance',   permanent: true },
      { source: '/services/roof-inspection/cochrane',       destination: '/roof-inspection',    permanent: true },
      { source: '/services/skylight-installation/cochrane', destination: '/skylight-installation', permanent: true },
    ]
  },
}

export default nextConfig
