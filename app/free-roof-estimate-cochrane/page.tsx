import type { Metadata } from 'next'
import { Check, Clock, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '@/components/sections/ContactForm'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Free Roof Estimate Cochrane, Calgary, and Canmore',
  description:
    'Book your free roof estimate in Cochrane, Calgary, or Canmore. Red Seal Journeyman roofers, on-site inspection, fixed written quote, no obligation.',
  alternates: {
    canonical: 'https://surewestroofing.ca/free-roof-estimate-cochrane',
  },
  openGraph: {
    title: 'Free Roof Estimate Cochrane, Calgary, and Canmore | Sure West Roofing',
    description:
      'Book your free roof estimate in Cochrane, Calgary, or Canmore. Red Seal Journeyman roofers, on-site inspection, fixed written quote, no obligation.',
    url: 'https://surewestroofing.ca/free-roof-estimate-cochrane',
    type: 'website',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Roof Estimate Cochrane, Calgary, and Canmore | Sure West Roofing',
    description:
      'Book your free roof estimate in Cochrane, Calgary, or Canmore. Red Seal Journeyman roofers, on-site inspection, fixed written quote, no obligation.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// ─── JSON-LD Schemas ─────────────────────────────────────────────────────────
// LocalBusiness is already injected site-wide via app/layout.tsx. Here we add
// ContactPage, BreadcrumbList, and Offer.

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Sure West Roofing',
    description:
      'Request a free roof estimate in Cochrane, Calgary, or Canmore. Red Seal Journeyman roof inspection and written quote.',
    url: 'https://surewestroofing.ca/free-roof-estimate-cochrane',
    mainEntity: {
      '@type': 'RoofingContractor',
      name: 'Sure West Roofing',
      url: 'https://surewestroofing.ca',
      telephone: '+14039907210',
      email: 'info@surewestroofing.ca',
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
        latitude: 51.1897,
        longitude: -114.4672,
      },
      areaServed: [
        { '@type': 'City', name: 'Cochrane' },
        { '@type': 'City', name: 'Calgary' },
        { '@type': 'City', name: 'Canmore' },
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '18:00',
      },
      hasMap: 'https://www.google.com/maps?q=51.1897,-114.4672',
    },
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://surewestroofing.ca' },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact',
        item: 'https://surewestroofing.ca/free-roof-estimate-cochrane',
      },
    ],
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Free Roof Estimate in Cochrane, Calgary and Canmore',
    description:
      'Free in-home roof inspection and written quote, provided by Red Seal Journeyman owned roofing company.',
    price: '0',
    priceCurrency: 'CAD',
    availability: 'https://schema.org/InStock',
    areaServed: [
      { '@type': 'City', name: 'Cochrane' },
      { '@type': 'City', name: 'Calgary' },
      { '@type': 'City', name: 'Canmore' },
    ],
    seller: {
      '@type': 'RoofingContractor',
      name: 'Sure West Roofing',
      url: 'https://surewestroofing.ca',
      telephone: '+14039907210',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'Unit 9, 225 Railway St E',
        addressLocality: 'Cochrane',
        addressRegion: 'AB',
        postalCode: 'T4C 2C3',
        addressCountry: 'CA',
      },
    },
  },
]

const benefits = [
  'Free on-site roof inspection',
  'Fixed written quote',
  'No obligation, no sales pressure',
]

// ─── Page ────────────────────────────────────────────────────────────────────

export default function FreeEstimatePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Main contact section ──────────────────────── */}
      <section className="bg-brand-cream pt-32 lg:pt-40 pb-16 md:pb-20 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left, info */}
            <div className="lg:col-span-6 order-2 lg:order-1">
              <span
                className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
                style={{
                  background: '#FFFFFF',
                  fontSize: '12px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 600,
                  lineHeight: 1,
                }}
              >
                Free Estimate
              </span>

              <h1
                className="font-display font-medium text-brand-navy"
                style={{
                  fontSize: 'clamp(36px, 5vw, 52px)',
                  letterSpacing: '-0.005em',
                  lineHeight: 1.1,
                }}
              >
                Get Your Free Roof Estimate in Cochrane, Calgary, and Canmore
              </h1>

              <p
                className="text-brand-slate leading-[1.7] mt-5"
                style={{
                  fontSize: '16px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                Our in-house Red Seal Journeyman crew comes to your Cochrane, Calgary, or Canmore
                home, inspects the roof on-site, and delivers a fixed written quote. No pressure,
                no surprises.
              </p>

              {/* Benefits */}
              <ul className="flex flex-col gap-3 mt-8">
                {benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2.5">
                    <span className="w-5 h-5 rounded-full bg-brand-gold/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-brand-gold" strokeWidth={2.5} />
                    </span>
                    <span
                      className="text-brand-slate"
                      style={{
                        fontSize: '14px',
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontWeight: 400,
                      }}
                    >
                      {b}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Contact details: NAP crawlable text */}
              <div className="mt-8 pt-8 border-t border-brand-border flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-[8px] bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-brand-gold" strokeWidth={1.75} />
                  </span>
                  <div>
                    <span
                      className="block text-brand-slate uppercase tracking-[0.1em]"
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      Phone
                    </span>
                    <a
                      href="tel:+14039907210"
                      className="text-brand-navy hover:text-brand-gold transition-colors"
                      style={{
                        fontSize: '15px',
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      (403) 990-7210
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span className="w-10 h-10 rounded-[8px] bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-brand-gold" strokeWidth={1.75} />
                  </span>
                  <div>
                    <span
                      className="block text-brand-slate uppercase tracking-[0.1em]"
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      Hours
                    </span>
                    <span
                      className="text-brand-navy"
                      style={{
                        fontSize: '15px',
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      Mon to Sat, 8:00&nbsp;AM to 6:00&nbsp;PM
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="w-10 h-10 rounded-[8px] bg-brand-gold/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-brand-gold" strokeWidth={1.75} />
                  </span>
                  <div>
                    <span
                      className="block text-brand-slate uppercase tracking-[0.1em]"
                      style={{
                        fontSize: '11px',
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontWeight: 600,
                      }}
                    >
                      Location
                    </span>
                    <address
                      className="text-brand-navy not-italic leading-[1.5]"
                      style={{
                        fontSize: '15px',
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontWeight: 500,
                      }}
                    >
                      Sure West Roofing
                      <br />
                      Unit 9, 225 Railway St E
                      <br />
                      Cochrane, Alberta T4C 2C3
                    </address>
                  </div>
                </div>
              </div>
            </div>

            {/* Right, form */}
            <div className="lg:col-span-6 order-1 lg:order-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Service area context + map ───────────────── */}
      <section className="bg-white py-20 md:py-24 border-t border-brand-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Intro block above map */}
          <div className="max-w-3xl mx-auto text-center mb-10">
            <span
              className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
              style={{
                background: '#F7F5F0',
                fontSize: '12px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              Service Area
            </span>
            <h2
              className="font-display font-medium text-brand-navy"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                letterSpacing: '-0.005em',
                lineHeight: 1.15,
              }}
            >
              Free Roof Estimates Across Cochrane, Calgary, and Canmore
            </h2>
            <p
              className="mt-5 text-brand-slate leading-[1.7]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              Sure West provides free roof estimates to homeowners across Cochrane, the greater
              Calgary region, and the Bow Valley. Our in-house crew, Red Seal Journeyman supervised,
              travels to your property, inspects the roof on-site, and delivers a fixed written
              quote.
            </p>
          </div>

          <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] lg:aspect-[21/9] overflow-hidden rounded-[12px] border border-brand-border">
            <iframe
              src="https://maps.google.com/maps?ll=51.13,-114.7&z=9&t=&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sure West Roofing service area: Cochrane, Calgary, and Canmore"
            />
          </div>
        </div>
      </section>
    </>
  )
}
