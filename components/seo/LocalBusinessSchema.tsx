import Script from 'next/script'

const schema = {
  '@context': 'https://schema.org',
  '@type': 'RoofingContractor',
  '@id': 'https://surewestroofing.ca/#organization',
  name: 'Sure West Roofing',
  alternateName: 'Sure West Roofing Ltd.',
  url: 'https://surewestroofing.ca',
  logo: 'https://surewestroofing.ca/images/logo.png',
  image: 'https://surewestroofing.ca/images/og-default.jpg',
  description:
    'Red Seal certified roofing contractor in Cochrane, Alberta. Roof replacement, repair, hail damage restoration, and maintenance for Cochrane, Calgary, and Canmore homes.',
  telephone: '+14039907210',
  email: 'info@surewestroofing.ca',
  priceRange: '$$',
  foundingDate: '2020',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Unit 9, 225 Railway St E',
    addressLocality: 'Cochrane',
    addressRegion: 'AB',
    postalCode: 'T4C 2C3',
    addressCountry: 'CA',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 51.1894,
    longitude: -114.4669,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Cochrane',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Alberta' },
    },
    {
      '@type': 'City',
      name: 'Calgary',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Alberta' },
    },
    {
      '@type': 'City',
      name: 'Canmore',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Alberta' },
    },
    {
      '@type': 'City',
      name: 'Airdrie',
      containedInPlace: { '@type': 'AdministrativeArea', name: 'Alberta' },
    },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '16:30',
    },
  ],
  sameAs: [
    'https://www.facebook.com/surewestroofing',
    'https://www.instagram.com/surewestroofing',
  ],
  hasCredential: [
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'Red Seal Journeyman Certification',
    },
    {
      '@type': 'EducationalOccupationalCredential',
      name: 'IKO ShieldPRO Installer',
    },
  ],
  makesOffer: [
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Replacement' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Repair' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Hail Damage Repair' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Maintenance' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Roof Inspection' } },
    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Skylight Installation' } },
  ],
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5.0',
    reviewCount: '88',
  },
}

export default function LocalBusinessSchema() {
  return (
    <Script
      id="local-business-schema"
      type="application/ld+json"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
