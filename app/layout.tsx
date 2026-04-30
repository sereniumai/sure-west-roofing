import type { Metadata } from 'next'
import { Oswald, Inter } from 'next/font/google'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { MotionProvider } from '@/components/MotionProvider'
import LocalBusinessSchema from '@/components/seo/LocalBusinessSchema'
import Analytics from '@/components/seo/Analytics'
import { DevToolbar } from '@/components/DevToolbar'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  weight: ['600', '700'],
  variable: '--font-oswald',
  preload: true,
  adjustFontFallback: true,
})

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500', '600'],
  variable: '--font-inter',
  preload: false,
  adjustFontFallback: true,
})

export const metadata: Metadata = {
  metadataBase: new URL('https://surewestroofing.ca'),
  title: {
    default: 'Sure West Roofing | Red Seal Roofer in Cochrane, Calgary & Canmore',
    template: '%s | Sure West Roofing',
  },
  description:
    'Red Seal certified roofing contractor in Cochrane, Alberta. Roof replacement, repair, hail damage restoration. Serving Cochrane, Calgary, and Canmore.',
  keywords: [
    'roofing contractor Cochrane',
    'Red Seal roofer Cochrane',
    'roof replacement Cochrane',
    'roofing Calgary',
    'roofing Canmore',
    'hail damage repair Alberta',
  ],
  authors: [{ name: 'Sure West Roofing Ltd.' }],
  creator: 'Sure West Roofing Ltd.',
  publisher: 'Sure West Roofing Ltd.',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://surewestroofing.ca',
    siteName: 'Sure West Roofing',
    title: 'Sure West Roofing | Red Seal Roofer in Cochrane, Calgary & Canmore',
    description:
      'Red Seal certified roofing contractor serving Cochrane, Calgary, and Canmore. Free estimates, fixed written quotes, no subcontractors.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Sure West Roofing, Red Seal certified roofing contractor in Cochrane, Alberta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sure West Roofing | Red Seal Roofer in Cochrane',
    description: 'Red Seal certified roofing serving Cochrane, Calgary, and Canmore.',
    images: ['/images/og-default.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  // Favicon + apple touch icon are served via Next.js file convention:
  //   app/icon.png      → browser favicon
  //   app/apple-icon.png → iOS home screen icon
  manifest: '/site.webmanifest',
  // TODO: paste the Google Search Console verification code from the client before launch.
  verification: {
    google: 'INSERT_GOOGLE_SEARCH_CONSOLE_VERIFICATION_CODE',
  },
  alternates: {
    canonical: 'https://surewestroofing.ca',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA" className={`${oswald.variable} ${inter.variable}`}>
      <body>
        {/* DEMO LOCK, navigation allowlist for client preview.
            As pages are completed and approved, add their paths to ALLOWED_PATHS.
            Remove this entire <script> block once all pages are approved. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function(){
                var ALLOWED_PATHS = [
                  '/',
                  '/calgary-roofing-contractor',
                  '/canmore-roofing-contractor'
                ];
                document.addEventListener('click', function(e){
                  var t = e.target;
                  while (t && t !== document.body) {
                    if (t.tagName === 'A') {
                      var href = t.getAttribute('href') || '';
                      // Always allow: empty, anchor-only, tel:, mailto:, and full external URLs
                      if (href === '' || href.charAt(0) === '#') return;
                      if (href.indexOf('tel:') === 0 || href.indexOf('mailto:') === 0) return;
                      if (href.indexOf('http://') === 0 || href.indexOf('https://') === 0) return;
                      // Internal links: strip query/hash, normalise trailing slash, check allowlist
                      var path = href.split('?')[0].split('#')[0];
                      if (path.length > 1 && path.charAt(path.length - 1) === '/') {
                        path = path.slice(0, -1);
                      }
                      if (ALLOWED_PATHS.indexOf(path) === -1) {
                        e.preventDefault();
                        e.stopPropagation();
                      }
                      return;
                    }
                    t = t.parentElement;
                  }
                }, true);
              })();
            `,
          }}
        />
        <LocalBusinessSchema />
        <Analytics />
        <MotionProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
          <DevToolbar />
        </MotionProvider>
        {/* Site-wide FAQPage JSON-LD, surfaces in rich results across the site. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'FAQPage',
              mainEntity: [
                {
                  '@type': 'Question',
                  name: 'How much does a roof replacement cost in Cochrane?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Roof replacement costs in Cochrane typically range from $8,000 to $25,000 depending on the size of your roof, the materials chosen, and the complexity of the job. We provide free on-site estimates with a clear written quote before any work begins.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How do I know if my roof needs replacing or just repairing?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'If your roof is under 15 years old and the damage is isolated, a repair is usually the right call. If it is over 20 years old, has widespread damage, or is showing signs of failure in multiple areas, replacement is likely more cost effective. Our team offers free roof inspections in Cochrane to help you make the right decision.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do you help with hail damage roofing claims in Alberta?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'We document hail and storm damage with photos and a detailed inspection report, which is what most Alberta insurers ask for. Coverage depends on your individual policy. We are not insurance specialists, but we can give you the documentation you need to file with your provider.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'How long does a roof replacement take in Cochrane?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Most residential roof replacements in Cochrane are completed within one to two days depending on the size and complexity of your roof. We provide a clear timeline before work begins and keep you updated throughout the project.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Are you licensed and insured to work in Alberta?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. Sure West Roofing is fully licensed and insured to operate in Alberta. We carry full liability insurance and WCB coverage on every job.',
                  },
                },
                {
                  '@type': 'Question',
                  name: 'Do you serve Calgary and Canmore as well as Cochrane?',
                  acceptedAnswer: {
                    '@type': 'Answer',
                    text: 'Yes. While Cochrane is our home base we also serve Calgary and Canmore. We have dedicated pages for roofing services in Calgary and roofing services in Canmore if you would like to learn more about our work in those areas.',
                  },
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  )
}
