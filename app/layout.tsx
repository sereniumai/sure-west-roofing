import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: {
    default: 'Roofing Contractor Cochrane AB | Sure West Roofing',
    template: '%s | Sure West Roofing',
  },
  description:
    'Red Seal Journeyman certified roofing contractor in Cochrane, AB. Roof replacement, repair, hail damage & inspections serving Calgary & Canmore. Free estimates — call (403) 990-7210.',
  keywords: [
    'roofing contractor Cochrane',
    'roofer Cochrane AB',
    'roof replacement Cochrane',
    'roofing Calgary',
    'hail damage repair Calgary',
    'Red Seal roofer Alberta',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://surewestroofing.ca',
    siteName: 'Sure West Roofing',
  },
}

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  name: 'Sure West Roofing',
  description:
    'Red Seal Journeyman certified roofing contractor serving Cochrane, Calgary and Canmore, Alberta.',
  url: 'https://surewestroofing.ca',
  telephone: '+14039907210',
  email: 'info@surewestroofing.ca',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Unit 9 – 225 Railway St E',
    addressLocality: 'Cochrane',
    addressRegion: 'AB',
    postalCode: 'T4C 2C3',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.1897,
    longitude: -114.4672,
  },
  openingHoursSpecification: {
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
    opens: '08:00',
    closes: '18:00',
  },
  areaServed: ['Cochrane, AB', 'Calgary, AB', 'Canmore, AB'],
  priceRange: '$$',
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '50',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA">
      <body className="antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  )
}
