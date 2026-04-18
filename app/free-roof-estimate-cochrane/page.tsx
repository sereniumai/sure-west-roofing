import type { Metadata } from 'next'
import Link from 'next/link'
import { Check, Mail, Clock, MapPin, Phone } from 'lucide-react'
import { ContactForm } from '@/components/sections/ContactForm'
import { ServiceFAQ } from '@/components/sections/ServiceFAQ'
import type { FaqItem } from '@/lib/faqs/types'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Free Roof Estimate Cochrane, Calgary & Canmore | Sure West Roofing',
  description:
    'Book your free roof estimate in Cochrane, Calgary, or Canmore. Red Seal certified inspection, written quote within 24 hours, no obligation. Text back within minutes.',
  alternates: {
    canonical: 'https://surewestroofing.ca/free-roof-estimate-cochrane',
  },
  openGraph: {
    title: 'Free Roof Estimate Cochrane, Calgary & Canmore | Sure West Roofing',
    description:
      'Red Seal certified free roof inspection and written quote within 24 hours across Cochrane, Calgary, and Canmore.',
    url: 'https://surewestroofing.ca/free-roof-estimate-cochrane',
    type: 'website',
    locale: 'en_CA',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Roof Estimate Cochrane, Calgary & Canmore | Sure West Roofing',
    description:
      'Red Seal certified free roof inspection and written quote within 24 hours.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

// ─── FAQs ────────────────────────────────────────────────────────────────────
// Declared before structuredData so the FAQPage schema can reference it.

const ESTIMATE_FAQS: FaqItem[] = [
  {
    question: 'Is the roof estimate really free?',
    answer:
      "Yes. Every roof estimate Sure West provides in Cochrane, Calgary, and Canmore is completely free with no obligation. You don't pay anything for the inspection, the written quote, or the follow-up. If you decide not to move forward, there's no charge and no pressure.",
  },
  {
    question: 'How fast do you respond to estimate requests?',
    answer:
      'We respond to every free estimate request by text within minutes, usually same-day. Most Cochrane, Calgary, and Canmore appointments are booked within 24 hours of the initial request, including evenings and weekends.',
  },
  {
    question: "What's included in a Sure West free roof estimate?",
    answer:
      'A Sure West free estimate includes a full on-site roof inspection by a Red Seal certified roofer, photo documentation of any issues, a review of your decking, flashing, and ventilation, and a fixed written quote within 24 hours covering scope, materials, timeline, and price.',
  },
  {
    question: 'Do you give free estimates for insurance claims?',
    answer:
      'Yes. Sure West provides free inspections and documentation for homeowners in Cochrane, Calgary, and Canmore filing hail or storm damage insurance claims. We photograph damage, prepare a detailed scope, and can work directly with your adjuster through the claim process.',
  },
  {
    question: 'How long does the free roof inspection take?',
    answer:
      "Most free roof inspections take between 30 and 60 minutes, depending on roof size and complexity. You don't need to be on the roof with us. We'll walk you through our findings on the ground once the inspection is complete.",
  },
  {
    question: 'Do I need to be home for the free roof estimate?',
    answer:
      "You don't have to be home for the roof inspection itself, since most of the work happens on the exterior. That said, Sure West recommends being present for the walk-through at the end so we can show you photos of any damage, explain findings, and answer questions on the spot. If you can't be there, we'll send the full written quote and photo report by email.",
  },
  {
    question: 'How much does a new roof cost in Cochrane, Calgary, or Canmore?',
    answer:
      'Most residential roof replacements in Cochrane, Calgary, and Canmore fall between $8,000 and $25,000, depending on roof size, pitch, decking condition, shingle tier (IKO Cambridge, Dynasty, or Nordic), and whether accessories like flashing or vents need to be replaced. Your free Sure West estimate includes a fixed written quote so there are no surprises.',
  },
  {
    question: 'How long is a Sure West roofing quote valid for?',
    answer:
      'Every written Sure West estimate is valid for 30 days from the date it is issued. Within that window the price is locked regardless of material fluctuations. After 30 days we may need to re-price to reflect current shingle, underlayment, and labour costs, but the inspection report itself remains valid for your records and for insurance purposes.',
  },
]

// ─── JSON-LD Schemas ─────────────────────────────────────────────────────────
// LocalBusiness is already injected site-wide via app/layout.tsx. Here we add
// ContactPage, BreadcrumbList, FAQPage (built from ESTIMATE_FAQS above), and
// Offer.

const structuredData = [
  {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact Sure West Roofing',
    description:
      'Request a free roof estimate in Cochrane, Calgary, or Canmore. Red Seal certified roof inspection and written quote within 24 hours.',
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
    '@type': 'FAQPage',
    mainEntity: ESTIMATE_FAQS.map((f) => ({
      '@type': 'Question',
      name: f.question,
      acceptedAnswer: { '@type': 'Answer', text: f.answer },
    })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'Offer',
    name: 'Free Roof Estimate in Cochrane, Calgary and Canmore',
    description:
      'Free in-home roof inspection and written quote within 24 hours, provided by Red Seal certified roofers.',
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
  'Fixed written quote within 24 hours',
  'Red Seal Journeyman certified on every job',
  'No obligation, no sales pressure',
  'Text-first response, we reply within minutes',
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
      <section className="bg-[#F7F5F0] pt-32 lg:pt-40 pb-16 lg:pb-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Left, info */}
            <div className="lg:col-span-5">
              <span className="section-label text-[#D4AF60] mb-3 block">Free Estimate</span>

              <h1
                className="font-display font-semibold text-3xl lg:text-[44px] text-[#2C4766] tracking-tight leading-[1.1]"
              >
                Get Your Free Roof Estimate in Cochrane, Calgary &amp; Canmore
              </h1>

              <p className="font-body text-[#5A7A9A] leading-relaxed mt-5 text-base lg:text-lg">
                Book your free roof estimate today. Our Red Seal certified team serves Cochrane,
                Calgary, and Canmore, inspects your roof on-site, and delivers a fixed written
                quote within 24 hours. No pressure, no surprises, and we text back within
                minutes, even evenings and weekends.
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

              {/* Contact details: NAP crawlable text */}
              <div className="mt-8 pt-8 border-t border-[#E8E8E8] flex flex-col gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-[#D4AF60]/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-[#D4AF60]" />
                  </div>
                  <div>
                    <span className="block font-body text-xs text-[#5A7A9A] uppercase tracking-wider">
                      Phone
                    </span>
                    <a
                      href="tel:+14039907210"
                      className="font-body text-sm text-[#2C4766] hover:text-[#D4AF60] transition-colors"
                    >
                      (403) 990-7210
                    </a>
                  </div>
                </div>

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
                      Mon to Sat, 8:00&nbsp;AM to 6:00&nbsp;PM
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-[#D4AF60]/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-4 h-4 text-[#D4AF60]" />
                  </div>
                  <div>
                    <span className="block font-body text-xs text-[#5A7A9A] uppercase tracking-wider">
                      Location
                    </span>
                    <address className="font-body text-sm text-[#2C4766] not-italic">
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
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* ── Service area context + map ───────────────── */}
      <section className="bg-white py-16 lg:py-20 border-t border-[#E8E8E8]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          {/* Intro block above map */}
          <div className="max-w-3xl mx-auto px-6 text-center mb-8">
            <span className="section-label text-[#D4AF60] mb-3 inline-flex justify-center">
              Service Area
            </span>
            <h2
              className="font-display font-bold text-[#1B3558] mt-3"
              style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
            >
              Free Roof Estimates Across Cochrane, Calgary, and Canmore
            </h2>
            <p
              className="mt-4 text-base text-[#4A5568] leading-relaxed"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              Sure West provides free roof estimates to homeowners across Cochrane, the greater
              Calgary region, and the Bow Valley. Our Red Seal certified crew travels to your
              property, inspects the roof on-site, and delivers a fixed written quote within 24
              hours. View our{' '}
              <Link
                href="/roof-replacement"
                className="text-[#C49A2C] hover:underline font-semibold"
              >
                roof replacement
              </Link>
              ,{' '}
              <Link href="/roof-repair" className="text-[#C49A2C] hover:underline font-semibold">
                roof repair
              </Link>
              , and{' '}
              <Link
                href="/hail-damage-repair"
                className="text-[#C49A2C] hover:underline font-semibold"
              >
                hail damage repair
              </Link>{' '}
              services.
            </p>
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

      {/* ── FAQ (matches the 2-col accordion used on every other page) ───── */}
      <ServiceFAQ
        faqs={ESTIMATE_FAQS}
        heading="Common Questions About a Free Roof Estimate"
        subhead="Everything homeowners in Cochrane, Calgary, and Canmore ask before booking."
      />
    </>
  )
}
