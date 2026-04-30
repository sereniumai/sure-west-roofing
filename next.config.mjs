/** @type {import('next').NextConfig} */
const nextConfig = {
  compress: true,
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  reactStrictMode: true,
  // Disable Next.js automatic /foo/ → /foo redirect so our own redirects() rules
  // can handle both forms in a SINGLE 308 hop. The catch-all rule at the end of
  // the redirects array covers the trailing-slash → no-slash normalization for
  // any URL not explicitly listed.
  skipTrailingSlashRedirect: true,
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

      // WordPress legacy URLs (from Yoast sitemap_index.xml). Preserve SEO equity on cutover.
      // Contact / estimate
      { source: '/contact',     destination: '/free-roof-estimate-cochrane', permanent: true },
      { source: '/contact/',    destination: '/free-roof-estimate-cochrane', permanent: true },
      { source: '/est',         destination: '/free-roof-estimate-cochrane', permanent: true },
      { source: '/est/',        destination: '/free-roof-estimate-cochrane', permanent: true },
      // Privacy renamed
      { source: '/privacy-policy',  destination: '/privacy', permanent: true },
      { source: '/privacy-policy/', destination: '/privacy', permanent: true },
      // Careers (no equivalent yet → about)
      { source: '/careers',     destination: '/about', permanent: true },
      { source: '/careers/',    destination: '/about', permanent: true },
      // Blog + WP category index (no blog on new site → home)
      { source: '/blog',                    destination: '/', permanent: true },
      { source: '/blog/',                   destination: '/', permanent: true },
      { source: '/category/uncategorized',  destination: '/', permanent: true },
      { source: '/category/uncategorized/', destination: '/', permanent: true },
      // Old blog post → most-relevant service page
      { source: '/what-are-the-top-roof-maintenance-strategies-2',  destination: '/roof-maintenance', permanent: true },
      { source: '/what-are-the-top-roof-maintenance-strategies-2/', destination: '/roof-maintenance', permanent: true },
      // Test pages and unknown person page (no equivalent → home)
      { source: '/test',                    destination: '/', permanent: true },
      { source: '/test/',                   destination: '/', permanent: true },
      { source: '/test-roof-installation',  destination: '/', permanent: true },
      { source: '/test-roof-installation/', destination: '/', permanent: true },
      { source: '/mark-hees',               destination: '/', permanent: true },
      { source: '/mark-hees/',              destination: '/', permanent: true },

      // Safety net: catch any residual WordPress URLs from external backlinks (single-hop)
      { source: '/wp-admin/:path*',     destination: '/', permanent: true },
      { source: '/wp-admin/:path*/',    destination: '/', permanent: true },
      { source: '/wp-content/:path*',   destination: '/', permanent: true },
      { source: '/wp-content/:path*/',  destination: '/', permanent: true },
      { source: '/wp-includes/:path*',  destination: '/', permanent: true },
      { source: '/wp-includes/:path*/', destination: '/', permanent: true },

      // Trailing-slash canonicalisation catch-all: any other /foo/ → /foo (single hop)
      // Must be LAST so specific rules above match first.
      { source: '/:path+/', destination: '/:path+', permanent: true },
    ]
  },
}

export default nextConfig
