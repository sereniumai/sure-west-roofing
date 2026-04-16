import type { Metadata } from 'next'
import { Check, Mail, Clock, MapPin } from 'lucide-react'
import { ContactForm } from '@/components/sections/ContactForm'

export const metadata: Metadata = {
  title: 'Contact Us | Free Roofing Estimate Cochrane AB | Sure West Roofing',
  description:
    'Request your free roofing estimate in Cochrane, AB. Our certified roofers provide no-obligation inspections and written quotes within 24 hours. Serving Cochrane, Calgary, and Canmore.',
  keywords: [
    'free roofing estimate Cochrane',
    'roofing quote Cochrane AB',
    'contact roofer Cochrane',
    'roof inspection Cochrane free',
    'roofing contractor Cochrane contact',
    'free roof assessment Alberta',
    'Sure West Roofing contact',
    'Cochrane roof replacement quote',
  ],
  openGraph: {
    title: 'Get Your Free Roofing Estimate | Sure West Roofing',
    description:
      "Request a free, no-obligation roofing estimate from Cochrane's trusted roofing contractor. Written quote within 24 hours.",
    url: 'https://surewestroofing.ca/contact',
    type: 'website',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Get Your Free Roofing Estimate | Sure West Roofing',
    description:
      'Request a free, no-obligation roofing estimate in Cochrane, AB. Written quote within 24 hours.',
  },
  alternates: {
    canonical: 'https://surewestroofing.ca/contact',
  },
  robots: {
    index: true,
    follow: true,
  },
}

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Sure West Roofing',
    description:
      'Request a free roofing estimate in Cochrane, AB. No-obligation roof inspections and written quotes within 24 hours.',
    url: 'https://surewestroofing.ca/contact',
    mainEntity: {
      '@type': 'RoofingContractor',
      name: 'Sure West Roofing',
      url: 'https://surewestroofing.ca',
      email: 'info@surewestroofing.ca',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Cochrane',
        addressRegion: 'AB',
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
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
        ],
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
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: 'https://surewestroofing.ca',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Contact',
        item: 'https://surewestroofing.ca/contact',
      },
    ],
  },
]

const benefits = [
  'Free on-site roof inspection',
  'Clear written quote within 24 hours',
  'No obligation, no pressure',
  'Certified Red Seal roofers on every job',
]

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* ── Main contact section ──────────────────── */}
      <section className="bg-[#F7F5F0] pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left, info */}
            <div className="lg:col-span-5">
              <span className="section-label text-[#D4AF60] mb-3 block">
                Free Estimate
              </span>

              <h1 className="font-display font-semibold uppercase text-3xl lg:text-[44px] text-[#2C4766] tracking-tight leading-[1.1]">
                Get Your Free Roofing{' '}
                <span className="text-[#D4AF60]">Estimate&nbsp;in&nbsp;Cochrane</span>
              </h1>

              <p className="font-body text-[#5A7A9A] leading-relaxed mt-5 text-base lg:text-lg">
                Book your no-obligation roof inspection today. Our certified
                team will assess your roof, answer every question, and deliver a
                clear written quote within 24&nbsp;hours. No pressure. No
                surprises.
              </p>

              {/* Benefits */}
              <div className="flex flex-col gap-3 mt-8">
                {benefits.map((b) => (
                  <div key={b} className="flex items-center gap-2.5">
                    <div className="w-5 h-5 bg-[#D4AF60]/15 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-[#D4AF60]" />
                    </div>
                    <span className="font-body text-sm text-[#5A7A9A]">{b}</span>
                  </div>
                ))}
              </div>

              {/* Contact details */}
              <div className="mt-8 pt-8 border-t border-[#E8E8E8] flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#D4AF60]/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-[#D4AF60]" />
                  </div>
                  <div>
                    <span className="block font-body text-xs text-[#5A7A9A] uppercase tracking-wider">
                      Email
                    </span>
                    <a
                      href="mailto:info@surewestroofing.ca"
                      className="font-body text-sm text-[#2C4766] hover:text-[#D4AF60] transition-colors"
                    >
                      info@surewestroofing.ca
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#D4AF60]/10 flex items-center justify-center flex-shrink-0">
                    <Clock className="w-4 h-4 text-[#D4AF60]" />
                  </div>
                  <div>
                    <span className="block font-body text-xs text-[#5A7A9A] uppercase tracking-wider">
                      Hours
                    </span>
                    <span className="font-body text-sm text-[#2C4766]">
                      Mon – Sat, 8:00&nbsp;AM – 6:00&nbsp;PM
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#D4AF60]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#D4AF60]" />
                  </div>
                  <div>
                    <span className="block font-body text-xs text-[#5A7A9A] uppercase tracking-wider">
                      Location
                    </span>
                    <span className="font-body text-sm text-[#2C4766]">
                      Cochrane, AB
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right, form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Map section ───────────────────────────── */}
      <section className="bg-white py-16 lg:py-20 border-t border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-8">
            <span className="section-label text-[#D4AF60] mb-3 inline-flex justify-center">
              Our Location
            </span>
            <h2 className="font-display font-semibold uppercase text-2xl lg:text-4xl text-[#2C4766] tracking-tight mt-3">
              Serving Cochrane, Calgary &amp; Canmore
            </h2>
          </div>

          <div className="relative w-full aspect-[16/9] lg:aspect-[21/9] overflow-hidden border border-[#E8E8E8]">
            <iframe
              src="https://maps.google.com/maps?q=Cochrane+AB+Canada&t=&z=12&ie=UTF8&iwloc=&output=embed"
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Sure West Roofing, Cochrane, AB location"
            />
          </div>
        </div>
      </section>
    </>
  )
}
