import type { Metadata } from 'next'
import { Oswald, Inter } from 'next/font/google'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import { MotionProvider } from '@/components/MotionProvider'
import './globals.css'

const oswald = Oswald({
  subsets: ['latin'],
  display: 'swap',
  weight: ['500', '600', '700'],
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
  title: 'Roofing Contractor Cochrane AB | Sure West Roofing',
  description:
    'Sure West Roofing. Certified roofing contractor in Cochrane, AB. Roof replacement, repair, hail damage and inspections serving Calgary and Canmore. Free estimates.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${oswald.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "RoofingContractor",
                "name": "Sure West Roofing",
                "url": "https://surewestroofing.ca",
                "email": "info@surewestroofing.ca",
                "description": "Certified roofing contractor in Cochrane, Alberta serving Calgary and Canmore. Specialising in roof replacement, roof repair, hail damage repair, roof maintenance, roof inspections and skylight installation.",
                "address": {
                  "@type": "PostalAddress",
                  "addressLocality": "Cochrane",
                  "addressRegion": "AB",
                  "addressCountry": "CA"
                },
                "geo": {
                  "@type": "GeoCoordinates",
                  "latitude": 51.1897,
                  "longitude": -114.4672
                },
                "areaServed": [
                  { "@type": "City", "name": "Cochrane" },
                  { "@type": "City", "name": "Calgary" },
                  { "@type": "City", "name": "Canmore" }
                ],
                "openingHoursSpecification": {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
                  "opens": "08:00",
                  "closes": "18:00"
                },
                "hasOfferCatalog": {
                  "@type": "OfferCatalog",
                  "name": "Roofing Services",
                  "itemListElement": [
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Replacement Cochrane" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Repair Cochrane" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Hail Damage Roof Repair Cochrane" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Maintenance Cochrane" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Roof Inspection Cochrane" } },
                    { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Skylight Installation Cochrane" } }
                  ]
                }
              },
              {
                "@context": "https://schema.org",
                "@type": "FAQPage",
                "mainEntity": [
                  {
                    "@type": "Question",
                    "name": "How much does a roof replacement cost in Cochrane?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Roof replacement costs in Cochrane typically range from $8,000 to $25,000 depending on the size of your roof, the materials chosen, and the complexity of the job. We provide free on-site estimates with a clear written quote before any work begins." }
                  },
                  {
                    "@type": "Question",
                    "name": "How do I know if my roof needs replacing or just repairing?",
                    "acceptedAnswer": { "@type": "Answer", "text": "If your roof is under 15 years old and the damage is isolated, a repair is usually the right call. If it is over 20 years old, has widespread damage, or is showing signs of failure in multiple areas, replacement is likely more cost effective. Our team offers free roof inspections in Cochrane to help you make the right decision." }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you handle Alberta insurance claims for hail damage?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. We have extensive experience working with Alberta insurance companies on hail damage claims. We document all damage with photographs and a detailed inspection report, and we can work directly alongside your insurance adjuster to make the process as smooth as possible." }
                  },
                  {
                    "@type": "Question",
                    "name": "How long does a roof replacement take in Cochrane?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Most residential roof replacements in Cochrane are completed within one to two days depending on the size and complexity of your roof. We provide a clear timeline before work begins and keep you updated throughout the project." }
                  },
                  {
                    "@type": "Question",
                    "name": "Are you licensed and insured to work in Alberta?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. Sure West Roofing is fully licensed and insured to operate in Alberta. We carry full liability insurance and WCB coverage on every job." }
                  },
                  {
                    "@type": "Question",
                    "name": "Do you serve Calgary and Canmore as well as Cochrane?",
                    "acceptedAnswer": { "@type": "Answer", "text": "Yes. While Cochrane is our home base we also serve Calgary and Canmore. We have dedicated pages for roofing services in Calgary and roofing services in Canmore if you would like to learn more about our work in those areas." }
                  }
                ]
              }
            ])
          }}
        />
      </head>
      <body>
        <MotionProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </MotionProvider>
      </body>
    </html>
  )
}
