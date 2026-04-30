import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Wind,
  Droplets,
  AlertTriangle,
  Hammer,
  Bug,
  Sparkles,
  ShieldCheck,
  Award,
  CloudLightning,
  FileText,
  MapPin,
  ArrowRight,
  Calendar,
  Search,
  Wrench,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SidingSoftMetalsHero } from '@/components/sections/SidingSoftMetalsHero'
import { SidingSoftMetalsFAQ } from '@/components/sections/SidingSoftMetalsFAQ'
import { SIDING_SOFT_METALS_FAQS } from '@/lib/faqs/sidingSoftMetals'
import { WhatIncludedAccordion } from '@/components/sections/WhatIncludedAccordion'
import { RelatedServicesCarousel } from '@/components/sections/RelatedServicesCarousel'
import { ServicesGallery } from '@/components/sections/ServicesGallery'
import { Reviews } from '@/components/sections/Reviews'
import { ServiceAreasPins } from '@/components/sections/ServiceAreasPins'
import { BottomCTA } from '@/components/sections/BottomCTA'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Siding & Soft Metals Cochrane',
  description:
    'Red Seal certified siding installation, eavestroughs, fascia, and soffit work in Cochrane, AB. Vinyl, fiber cement, and metal siding built for Alberta weather. Free written quotes, 5-year workmanship warranty.',
  alternates: {
    canonical: 'https://surewestroofing.ca/siding-soft-metals',
  },
  openGraph: {
    title: 'Siding & Soft Metals Cochrane | Sure West Roofing',
    description:
      'Red Seal certified siding, eavestroughs, fascia, and soffit work in Cochrane, AB. Built for Alberta weather, finished by the same crew that does our roofs.',
    url: 'https://surewestroofing.ca/siding-soft-metals',
    type: 'website',
    locale: 'en_CA',
    images: [
      {
        url: 'https://surewestroofing.ca/images/Cochrane Roofing Contractor Gallery 7.webp',
        width: 1200,
        height: 630,
        alt: 'Sure West Roofing siding and soft metals project on a Cochrane Alberta home',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siding & Soft Metals Cochrane | Sure West Roofing',
    description:
      'Red Seal certified siding, eavestroughs, fascia, and soffit work in Cochrane, AB. 5-year workmanship warranty.',
    images: ['https://surewestroofing.ca/images/Cochrane Roofing Contractor Gallery 7.webp'],
  },
}

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://surewestroofing.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://surewestroofing.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'Siding & Soft Metals', item: 'https://surewestroofing.ca/siding-soft-metals' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Siding and Soft Metals Installation',
  provider: {
    '@type': 'RoofingContractor',
    name: 'Sure West Roofing',
    url: 'https://surewestroofing.ca',
    telephone: '+14039907210',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Cochrane',
      addressRegion: 'AB',
      addressCountry: 'CA',
    },
  },
  areaServed: [
    { '@type': 'City', name: 'Cochrane' },
    { '@type': 'City', name: 'Calgary' },
    { '@type': 'City', name: 'Canmore' },
  ],
  url: 'https://surewestroofing.ca/siding-soft-metals',
  description:
    'Red Seal certified siding installation, eavestroughs, fascia, soffit, and metal flashing across Cochrane, Calgary, and Canmore. Vinyl, fiber cement, and metal siding. 5-year workmanship warranty.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'CAD',
    priceRange: '$8000-$25000',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: SIDING_SOFT_METALS_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

// ─── Section: Certifications banner ──────────────────────────────────────────

const CERT_LOGOS = [
  { src: '/images/logos/AARA Roofing Association.webp', alt: 'AARA Roofing Association member' },
  { src: '/images/logos/BBB Accredited Business.webp', alt: 'BBB Accredited Business' },
  { src: '/images/logos/WCB Roofing Contractors.webp', alt: 'WCB covered roofing contractor' },
  { src: '/images/logos/Certified Residential Contractor.webp', alt: 'Certified Residential Contractor' },
  { src: '/images/logos/Emerald Pro Contractor.webp', alt: 'Emerald Pro Contractor' },
  { src: '/images/logos/Interprovincial Roofing Standard.webp', alt: 'Interprovincial Roofing Standard' },
  { src: '/images/logos/Roofing Contractor Shingle Master.webp', alt: 'ShingleMaster certified' },
]

function CertsBanner() {
  return (
    <section
      className="bg-white py-10 md:py-14"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
      aria-label="Certifications and accreditations"
    >
      <div className="max-w-[1320px] mx-auto flex flex-col items-center">
        <span
          className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
          style={{
            background: '#F0EEE8',
            fontSize: '12px',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontWeight: 600,
            lineHeight: 1,
          }}
        >
          Certified &amp; Accredited
        </span>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {CERT_LOGOS.map((logo) => (
            <li key={logo.src} className="flex items-center justify-center h-[52px]">
              <Image
                src={logo.src}
                alt={logo.alt}
                width={130}
                height={52}
                sizes="130px"
                quality={80}
                loading="lazy"
                className="h-full w-auto object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}

// ─── Section: What's Included (accordion) ────────────────────────────────────

const SIDING_INCLUDED_ITEMS = [
  {
    heading: 'Full assessment of siding, fascia, soffits, and eaves',
    body:
      'We start with a full walk-around of your Cochrane home, checking the siding, fascia, soffit, eavestroughs, downspouts, and metal flashing as a connected system. The estimate covers everything that needs work, not just what you noticed.',
  },
  {
    heading: 'Premium materials matched to Alberta weather',
    body:
      'Vinyl, fiber cement (James Hardie), or metal siding paired with seamless aluminum eavestroughs and matched soft-metal trim. Every material is rated for Cochrane temperature swings, Chinook winds, and Alberta UV.',
  },
  {
    heading: 'Written 5-year workmanship warranty',
    body:
      'Every Sure West siding and soft metals job in Cochrane comes with a 5-year workmanship warranty in writing, on top of the manufacturer warranty for the materials. Both warranties are spelled out in your quote before a panel goes up.',
  },
]

function WhatIncluded() {
  return (
    <section
      className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-stretch">
          {/* Hero has image on the RIGHT, so WhatIncluded image goes on the LEFT (opposite-side rule). */}
          {/* TODO: Replace placeholder with a Sure West siding/eavestrough project photo from Craig */}
          <div
            className="relative overflow-hidden rounded-[18px] aspect-square lg:aspect-auto lg:h-full min-h-[560px] lg:order-1 order-2"
            style={{
              boxShadow:
                '0 0 0 1px rgba(212,175,96,0.14), 0 20px 48px -12px rgba(44,71,102,0.20)',
            }}
          >
            <Image
              src="/images/Cochrane Roofing Contractor Gallery 13.webp"
              alt="Sure West Roofing crew completing siding and soft metals work on a Cochrane Alberta home"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              loading="lazy"
            />
          </div>

          <div className="flex flex-col lg:order-2 order-1">
            <span
              className="inline-flex self-start items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
              style={{
                background: '#F0EEE8',
                fontSize: '12px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              What&apos;s Included
            </span>
            <h2
              className="font-display font-medium text-brand-navy"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                lineHeight: 1.15,
                letterSpacing: '-0.005em',
              }}
            >
              What&apos;s Included in a Sure
              <br />
              West Siding Install
            </h2>
            <p
              className="mt-5 max-w-[520px] text-brand-slate leading-[1.7]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              Every Sure West siding and soft metals project is finished by our Red Seal Journeyman
              crew. Serving Cochrane, Calgary, and Canmore.
            </p>

            <WhatIncludedAccordion items={SIDING_INCLUDED_ITEMS} />
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section: Signs You Need Siding or Soft Metals Work ──────────────────────

const SIGNS = [
  {
    Icon: Wind,
    heading: 'Cracked, warped, or buckled siding',
    body: 'Cochrane Chinook winds, hail, and freeze-thaw cycles take a toll on aging siding. Cracked panels and buckling sections let water behind the wall and need replacement before sheathing damage spreads.',
  },
  {
    Icon: Droplets,
    heading: 'Sagging or overflowing eavestroughs',
    body: 'Eavestroughs that overflow, sag, or pull away from the fascia can no longer move water away from your home. Left unfixed, they cause foundation pooling, fascia rot, and ice dams in winter.',
  },
  {
    Icon: AlertTriangle,
    heading: 'Rotting or peeling fascia boards',
    body: 'Soft, dark, or peeling fascia is a sign water is getting behind the eavestrough. Replace the fascia and reseat the gutter system together. Patching one without the other is a common mistake.',
  },
  {
    Icon: Hammer,
    heading: 'Loose or rusted metal flashing',
    body: 'Metal flashing around windows, doors, and roof-to-wall transitions is your home\'s last line of defence against driven rain. Lifted, rusted, or torn flashing should be reseated or replaced quickly.',
  },
  {
    Icon: Bug,
    heading: 'Pest entry through soffit gaps',
    body: 'Squirrels, mice, and birds get into Cochrane attics through gaps in old or damaged soffits. New aluminum soffit panels with proper venting close the entry points and keep airflow correct.',
  },
  {
    Icon: Sparkles,
    heading: 'Faded, stained, or tired exterior',
    body: 'If your siding is sound but the colour has gone chalky or faded, fresh siding can transform the curb appeal of your Cochrane home. The right material choice also locks in 25 to 50 years of weather protection.',
  },
]

function SignsYouNeed() {
  return (
    <section
      className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 max-w-[720px] mx-auto">
          <span
            className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{
              background: '#F0EEE8',
              fontSize: '12px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            Signs to Watch
          </span>
          <h2
            className="font-display font-medium text-brand-navy"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              lineHeight: 1.15,
              letterSpacing: '-0.005em',
            }}
          >
            Signs Your Cochrane Home
            <br />
            Needs Siding or Soft Metals Work
          </h2>
          <p
            className="mt-5 max-w-[560px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Most exterior issues start small and stay affordable when caught early. Here are the
            common signs it is time to call.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
              Get a Free Estimate
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SIGNS.map(({ Icon, heading, body }) => (
            <div
              key={heading}
              className="bg-white rounded-[12px] border border-brand-border p-6 shadow-[0_2px_8px_rgba(44,71,102,0.06)] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.12)] transition-all duration-300 ease-out"
            >
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-[8px] mb-4"
                style={{ background: 'rgba(212,175,96,0.10)' }}
              >
                <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.75} />
              </div>
              <h3
                className="font-display font-semibold text-brand-navy mb-2 leading-[1.25]"
                style={{ fontSize: '19px', letterSpacing: '-0.01em' }}
              >
                {heading}
              </h3>
              <p
                className="text-brand-slate leading-[1.65]"
                style={{
                  fontSize: '14px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section: Install Process ────────────────────────────────────────────────

const PROCESS_STEPS = [
  {
    number: '01',
    Icon: Calendar,
    heading: ['Free On-Site', 'Assessment'],
    body: 'A Red Seal Journeyman walks the home, checks every elevation, and reviews the siding, fascia, soffits, and eavestroughs as one connected system.',
  },
  {
    number: '02',
    Icon: FileText,
    heading: ['Fixed Written', 'Quote'],
    body: 'A clear written quote with material choice, scope, timeline, and price. Everything that affects cost is spelled out before we book the job.',
  },
  {
    number: '03',
    Icon: Search,
    heading: ['Order Materials', 'and Schedule'],
    body: 'Once approved, we order your siding, eavestroughs, and trim and lock in a start date. Lead times vary by material. We confirm in writing.',
  },
  {
    number: '04',
    Icon: Wrench,
    heading: ['Tear-Off and', 'Install'],
    body: 'Old siding and damaged soft metals come down, the wall is checked, then new panels, eavestroughs, fascia, and soffits go on to manufacturer spec.',
  },
  {
    number: '05',
    Icon: CheckCircle2,
    heading: ['Cleanup and', '5-Year Warranty'],
    body: 'Full site cleanup, magnetic nail sweep, and a final walkthrough with you. Your written 5-year workmanship warranty stays with the property.',
  },
]

function InstallProcess() {
  return (
    <section
      className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-[720px] mx-auto">
          <span
            className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{
              background: '#F0EEE8',
              fontSize: '12px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            How It Works
          </span>
          <h2
            className="font-display font-medium text-brand-navy"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              lineHeight: 1.15,
              letterSpacing: '-0.005em',
            }}
          >
            How a Sure West Siding
            <br />
            Project Works
          </h2>
          <p
            className="mt-5 max-w-[560px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Five clear steps from first call to install complete. No hidden steps, no surprises.
          </p>
          <div className="mt-7">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
              Get a Free Estimate
            </Button>
          </div>
        </div>

        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
            {PROCESS_STEPS.map(({ number, Icon, heading, body }) => (
              <div
                key={number}
                className="bg-brand-cream rounded-[14px] border border-brand-border px-5 py-7 md:px-4 md:py-8 flex flex-col items-center text-center shadow-[0_2px_8px_rgba(44,71,102,0.06)] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.12)] transition-all duration-300 ease-out"
              >
                <span
                  className="uppercase tracking-[0.18em] text-brand-gold font-semibold"
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  }}
                >
                  Step {number}
                </span>
                <div
                  className="mt-4 mb-5 flex items-center justify-center w-16 h-16 rounded-full"
                  style={{
                    background: 'rgba(212,175,96,0.10)',
                    border: '1.5px solid rgba(212,175,96,0.45)',
                  }}
                >
                  <Icon className="w-6 h-6 text-brand-gold" strokeWidth={1.75} />
                </div>
                <h3
                  className="font-display font-semibold text-brand-navy leading-[1.2] min-h-[44px]"
                  style={{ fontSize: '17px', letterSpacing: '-0.01em' }}
                >
                  {heading[0]}
                  <br />
                  {heading[1]}
                </h3>
                <p
                  className="mt-4 text-brand-slate leading-[1.6] max-w-[220px]"
                  style={{
                    fontSize: '13px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section: Service Types ──────────────────────────────────────────────────

const SERVICE_TYPES = [
  {
    tier: 'Exterior Refresh',
    name: 'Siding Installation & Repair',
    image: '/images/Cochrane Roofing Contractor Gallery 1.webp',
    imageAlt: 'Siding installation completed by Sure West Roofing in Cochrane Alberta',
    body: 'Vinyl, fiber cement (James Hardie), and metal siding installed to manufacturer spec. Full replacements and partial repairs across Cochrane, Calgary, and Canmore. Hail-rated and Chinook-tested products.',
  },
  {
    tier: 'Water Management',
    name: 'Eavestroughs & Downspouts',
    image: '/images/Cochrane Roofing Contractor Gallery 5.webp',
    imageAlt: 'Seamless aluminum eavestroughs installed on a Cochrane Alberta home',
    body: 'Seamless 5-inch and 6-inch K-style aluminum eavestrough systems with matched downspouts and proper grade. Most full Cochrane eavestrough replacements completed in a single day.',
  },
  {
    tier: 'Roofline Trim',
    name: 'Fascia, Soffits & Flashing',
    image: '/images/Cochrane Roofing Contractor Gallery 19.webp',
    imageAlt: 'New fascia and soffit work on a Cochrane Alberta home',
    body: 'Aluminum fascia and vented soffit panels paired with custom flashing around windows, doors, and roof-to-wall transitions. The trim work that protects everything else from water and wildlife.',
  },
]

function ServiceTypes() {
  return (
    <section
      className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 max-w-[720px] mx-auto">
          <span
            className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{
              background: '#F0EEE8',
              fontSize: '12px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            What We Install
          </span>
          <h2
            className="font-display font-medium text-brand-navy"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              lineHeight: 1.15,
              letterSpacing: '-0.005em',
            }}
          >
            Siding &amp; Soft Metals We Install in Cochrane
          </h2>
          <p
            className="mt-5 max-w-[600px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Three connected trades, one Red Seal Journeyman crew. Sure West installs siding and
            the soft metalwork that protects it.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
              Get a Free Estimate
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {SERVICE_TYPES.map(({ tier, name, image, imageAlt, body }) => (
            <div
              key={name}
              className="bg-white rounded-[12px] border border-brand-border flex flex-col overflow-hidden shadow-[0_2px_8px_rgba(44,71,102,0.06)] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.12)] transition-all duration-300 ease-out"
            >
              <div className="relative flex-shrink-0" style={{ height: '200px' }}>
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <span
                    className="inline-block text-brand-gold font-semibold uppercase tracking-[0.12em]"
                    style={{
                      fontSize: '11px',
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    }}
                  >
                    {tier}
                  </span>
                </div>
                <h3
                  className="font-display font-semibold text-brand-navy mb-4 leading-[1.2]"
                  style={{ fontSize: '24px', letterSpacing: '-0.02em' }}
                >
                  {name}
                </h3>
                <p
                  className="text-brand-slate leading-[1.65] flex-1"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {body}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section: Why Sure West ───────────────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    Icon: Award,
    heading: 'Red Seal Certified Trades',
    body: 'Sure West is owned and operated by Red Seal Journeyman tradespeople, the recognised national standard. The same crew that earns five-star reviews on roofs handles your siding and soft metals.',
  },
  {
    Icon: CloudLightning,
    heading: 'Built for Alberta Weather',
    body: 'Cochrane winters, Chinook winds, hailstorms, and intense UV demand specific materials. Every panel, gutter, and trim piece we install is rated for what your home actually faces year-round.',
  },
  {
    Icon: FileText,
    heading: 'Honest Quotes, No Pressure',
    body: 'Every assessment is free, on-site, and provided in writing with itemised costs. If a partial repair makes more sense than a full replacement we will tell you that straight.',
  },
  {
    Icon: ShieldCheck,
    heading: '5-Year Workmanship Warranty',
    body: 'Every siding and soft metals job comes with a 5-year workmanship warranty in writing, on top of the full manufacturer warranty (often 25 to 50 years) on the materials themselves.',
  },
]

function WhySureWest() {
  return (
    <section
      className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-[720px] mx-auto">
          <span
            className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{
              background: '#F0EEE8',
              fontSize: '12px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            Why Sure West
          </span>
          <h2
            className="font-display font-medium text-brand-navy"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              lineHeight: 1.15,
              letterSpacing: '-0.005em',
            }}
          >
            Why Cochrane Homeowners Trust
            <br />
            Sure West for Siding &amp; Soft Metals
          </h2>
          <p
            className="mt-5 max-w-[580px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Built across Cochrane, Calgary, and Canmore on Red Seal ownership, premium materials,
            and warranties you can read.
          </p>
          <div className="mt-7">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
              Get a Free Estimate
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {DIFFERENTIATORS.map(({ Icon, heading, body }) => (
            <div
              key={heading}
              className="bg-brand-cream rounded-[12px] border border-brand-border p-6 shadow-[0_2px_8px_rgba(44,71,102,0.06)] hover:-translate-y-[4px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.12)] transition-all duration-300 ease-out"
            >
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-[8px] mb-5"
                style={{ background: 'rgba(212,175,96,0.12)' }}
              >
                <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.75} />
              </div>
              <h3
                className="font-display font-semibold text-brand-navy mb-3 leading-[1.25]"
                style={{ fontSize: '20px', letterSpacing: '-0.01em' }}
              >
                {heading}
              </h3>
              <p
                className="text-brand-slate leading-[1.65]"
                style={{
                  fontSize: '14px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Gallery images for this page ─────────────────────────────────────────────

const SSM_GALLERY_IMAGES = [
  { src: '/images/Cochrane Roofing Contractor Gallery 1.webp',  alt: 'Siding project completed by Sure West Roofing in Cochrane Alberta',     caption: 'Cochrane, AB · Siding' },
  { src: '/images/Cochrane Roofing Contractor Gallery 5.webp',  alt: 'Eavestrough installation in Cochrane Alberta by Sure West Roofing',     caption: 'Cochrane, AB · Eaves' },
  { src: '/images/Cochrane Roofing Contractor Gallery 7.webp',  alt: 'Sure West Roofing exterior project in Cochrane Alberta',                caption: 'Cochrane, AB · Exterior' },
  { src: '/images/Cochrane Roofing Contractor Gallery 9.webp',  alt: 'Soffit and fascia work in Cochrane Alberta by Sure West Roofing',       caption: 'Cochrane, AB · Trim' },
  { src: '/images/Cochrane Roofing Contractor Gallery 13.webp', alt: 'Siding and soft metals project in Calgary by Sure West Roofing',        caption: 'Calgary, AB · Siding' },
  { src: '/images/Cochrane Roofing Contractor Gallery 15.webp', alt: 'Custom flashing rebuild in Cochrane Alberta by Sure West Roofing',      caption: 'Cochrane, AB · Flashing' },
  { src: '/images/Cochrane Roofing Contractor Gallery 16.webp', alt: 'Exterior trim project in Cochrane Alberta by Sure West Roofing',        caption: 'Cochrane, AB · Trim' },
  { src: '/images/Cochrane Roofing Contractor Gallery 19.webp', alt: 'Detailed soft-metal work in Cochrane Alberta by Sure West Roofing',     caption: 'Cochrane, AB · Soft Metals' },
  { src: '/images/Cochrane Roofing Contractor Gallery 20.webp', alt: 'Storm-recovery siding repair in Calgary by Sure West Roofing',          caption: 'Calgary, AB · Repair' },
  { src: '/images/Cochrane Roofing Contractor Gallery 21.webp', alt: 'Insurance-documented siding repair in Cochrane',                        caption: 'Cochrane, AB · Repair' },
]

// ─── Section: Related Services ────────────────────────────────────────────────

function RelatedServices() {
  return (
    <section
      className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <div>
            <span
              className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-5 text-brand-gold"
              style={{
                background: '#F0EEE8',
                fontSize: '12px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              More Services
            </span>
            <h2
              className="font-display font-medium text-brand-navy"
              style={{
                fontSize: 'clamp(28px, 3.5vw, 42px)',
                lineHeight: 1.15,
                letterSpacing: '-0.005em',
              }}
            >
              Other Roofing Services We Offer
            </h2>
          </div>
          <Link
            href="/services"
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-brand-gold font-semibold hover:text-[#B8943F] transition-colors duration-200"
            style={{
              fontSize: '13px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              textDecoration: 'underline',
              textUnderlineOffset: '3px',
            }}
          >
            View all services
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
          </Link>
        </div>

        <RelatedServicesCarousel exclude="/siding-soft-metals" />
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SidingSoftMetalsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <SidingSoftMetalsHero />
      <CertsBanner />
      <WhatIncluded />
      <SignsYouNeed />
      <InstallProcess />
      <ServiceTypes />
      <WhySureWest />
      <ServicesGallery images={SSM_GALLERY_IMAGES} sectionBg="#FFFFFF" />
      <Reviews sectionBg="#F7F5F0" cardBg="#FFFFFF" />
      <ServiceAreasPins
        heading={'Siding & Soft Metals Across Cochrane,\n Calgary, and Canmore'}
        subhead="Based in Cochrane. Same Red Seal crew across Calgary and Canmore."
      />
      <SidingSoftMetalsFAQ />
      <RelatedServices />
      <BottomCTA
        heading={
          <>
            Ready for Siding &amp; Soft Metals
            <br className="hidden md:block" /> You Can Actually Trust?
          </>
        }
        subtext="Red Seal certified, free written quote, 5-year workmanship warranty, and no sales pressure. Get yours scheduled."
      />
    </>
  )
}
