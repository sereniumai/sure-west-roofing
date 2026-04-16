/** @type {import('next').NextConfig} */
const nextConfig = {
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
    return [{
      source: '/(.*)',
      headers: [
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
      ],
    }]
  },
  async redirects() {
    return [
      {
        source: '/roof-replacement-cochrane',
        destination: '/services/roof-replacement/cochrane',
        permanent: true,
      },
      {
        source: '/roof-repair-cochrane',
        destination: '/services/roof-repair/cochrane',
        permanent: true,
      },
      {
        source: '/hail-damage-repair-cochrane',
        destination: '/services/hail-damage-repair/cochrane',
        permanent: true,
      },
      {
        source: '/roof-maintenance-cochrane',
        destination: '/services/roof-maintenance/cochrane',
        permanent: true,
      },
      {
        source: '/roof-inspection-cochrane',
        destination: '/services/roof-inspection/cochrane',
        permanent: true,
      },
      {
        source: '/skylight-installation-cochrane',
        destination: '/services/skylight-installation/cochrane',
        permanent: true,
      },
    ]
  },
}

export default nextConfig
