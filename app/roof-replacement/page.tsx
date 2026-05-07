import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Clock,
  AlertTriangle,
  Droplets,
  Eye,
  Home,
  RotateCcw,
  ShieldCheck,
  Award,
  CloudLightning,
  FileText,
  ArrowRight,
  Calendar,
  FileCheck,
  CheckCircle,
  Wrench,
  MessageSquare,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { RoofReplacementHero } from '@/components/sections/RoofReplacementHero'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { HowItWorks, type HowItWorksStep } from '@/components/sections/HowItWorks'
import { RoofReplacementFAQ } from '@/components/sections/RoofReplacementFAQ'
import { RelatedServicesCarousel } from '@/components/sections/RelatedServicesCarousel'
import { ServicesGallery } from '@/components/sections/ServicesGallery'
import { Reviews } from '@/components/sections/Reviews'
import { ServiceAreasPins } from '@/components/sections/ServiceAreasPins'
import { BottomCTA } from '@/components/sections/BottomCTA'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Roof Replacement Cochrane',
  description:
    'Red Seal certified roof replacement in Cochrane, AB. Fixed written quotes, manufacturer-backed warranties, in-house crews. Serving Cochrane, Calgary, and Canmore. Free estimates with fast follow-up.',
  alternates: {
    canonical: 'https://surewestroofing.ca/roof-replacement',
  },
  openGraph: {
    title: 'Roof Replacement Cochrane | Sure West Roofing',
    description:
      'Red Seal certified roof replacement in Cochrane, AB. Fixed written quotes, manufacturer-backed warranties, in-house crews. Serving Cochrane, Calgary, and Canmore. Free estimates with fast follow-up.',
    url: 'https://surewestroofing.ca/roof-replacement',
    type: 'website',
    locale: 'en_CA',
    images: [
      {
        url: 'https://surewestroofing.ca/images/Roof Replacement Cochrane.avif',
        width: 1200,
        height: 630,
        alt: 'New IKO shingle roof replacement completed by Sure West Roofing in Cochrane Alberta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Replacement Cochrane | Sure West Roofing',
    description:
      'Red Seal certified roof replacement in Cochrane, AB. Fixed quotes, real warranties, in-house crews.',
    images: ['https://surewestroofing.ca/images/Roof Replacement Cochrane.avif'],
  },
}

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://surewestroofing.ca' },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://surewestroofing.ca/services',
    },
    {
      '@type': 'ListItem',
      position: 3,
      name: 'Roof Replacement',
      item: 'https://surewestroofing.ca/roof-replacement',
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Roof Replacement',
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
  url: 'https://surewestroofing.ca/roof-replacement',
  description:
    'Red Seal certified residential roof replacement in Cochrane, Calgary, and Canmore. IKO shingles, 10-year workmanship warranty, free written estimates.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'CAD',
    priceRange: '$8000-$18000',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: [
    {
      '@type': 'Question',
      name: 'How much does a new roof cost in Cochrane, Alberta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'A typical asphalt shingle roof replacement in Cochrane costs between $8,000 and $18,000, with most 2,000 sq ft homes landing between $11,000 and $14,000. The final price depends on roof size, pitch, shingle tier (IKO Cambridge, Dynasty, or Nordic), whether decking needs replacement, and the complexity of flashing and valleys. Sure West gives every Cochrane homeowner a fixed written quote after an in-home inspection, so the number you see is the number you pay.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a roof replacement take in Cochrane?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most Cochrane single-family roof replacements are completed in 1 to 2 days once our crew is on site. Steep pitches, multi-layer tear-offs, and weather delays can extend the job to 3 days. We give you a firm start date and completion timeline in writing before work begins, and our Cochrane install crews are in-house, not subcontracted, so scheduling stays predictable.',
      },
    },
    {
      '@type': 'Question',
      name: 'What are the signs my roof needs replacing, not just repairing?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Clear signs you need a full roof replacement in Cochrane include shingles older than 20 years, curling or buckling across large sections, widespread granule loss, sagging decking, repeated leaks in multiple spots, and significant hail damage confirmed by an adjuster. If damage is localized and your roof is under 15 years old, roof repair is usually the smarter call. We will tell you honestly which one you need, including when you don't need us at all.",
      },
    },
    {
      '@type': 'Question',
      name: 'What warranty do I get on a roof replacement from Sure West?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Every Sure West roof replacement in Cochrane comes with two warranties: a manufacturer warranty from IKO covering the shingles themselves (up to lifetime limited, depending on tier), and a workmanship warranty from Sure West covering the installation. Because Sure West is a Red Seal certified contractor installing IKO products to spec, your shingles qualify for the top-tier manufacturer coverage that many non-certified installers can't offer.",
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to replace my roof after hail damage in Cochrane?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: "Not always. Light hail can cause cosmetic damage that doesn't affect the roof's life, while severe hail can compromise the entire roof system and require a full replacement. The right first step is a professional hail damage inspection, which also documents the damage for your insurance claim. Most Cochrane hail claims in the May to August season result in insurer-approved replacements.",
      },
    },
    {
      '@type': 'Question',
      name: 'When is the best time of year to replace a roof in Cochrane?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'The best time to replace a roof in Cochrane is late April through October, when temperatures stay consistently above 5°C and shingles seal properly. Spring and early summer are peak booking season, with slots often filling 4 to 6 weeks out, especially after hail events. September and October are ideal for pre-winter installs before snow arrives. We do not install in deep cold because asphalt shingles will not seal correctly below 5°C.',
      },
    },
    {
      '@type': 'Question',
      name: 'Can I finance a roof replacement in Alberta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes, Sure West offers financing options for Cochrane roof replacements, including payment plans that spread the cost over 12 to 60 months. Financing is a common path for insurance-deductible coverage and for homeowners who want to upgrade to a premium shingle tier without paying upfront. We will walk you through the options during your free in-home estimate.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do I need to be home during my roof replacement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'No, you do not need to be home during your Cochrane roof replacement. Our crews work from the exterior only and do not need access to your home. We recommend moving vehicles out of the driveway, removing fragile items from walls (vibration can shake them loose), and keeping pets indoors. We send daily progress updates by text so you always know where the job stands.',
      },
    },
  ],
}

// ─── Section: Our Standard (team image + numbered items) ───────────────────

const STANDARD_PILLARS = [
  {
    heading: 'Red Seal Journeyman installation',
    body: 'The same in-house Red Seal crew that quotes your roof installs your roof. No subcontractors, no rotating cast, no day-of surprises.',
  },
  {
    heading: 'Fixed written quote',
    body: 'Every line item priced before we start. The number on your quote is the number you pay, with zero mid-project upsells.',
  },
  {
    heading: '10-year workmanship warranty',
    body: 'Backed in writing on top of your IKO manufacturer coverage. If anything in the install fails, we come back and fix it.',
  },
]

function OurStandard() {
  return (
    <section
      className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Image LEFT on desktop, with floating badge */}
          <div className="relative lg:order-1">
            <div
              className="relative overflow-hidden rounded-[18px] aspect-[4/5] lg:aspect-auto lg:h-[600px]"
              style={{
                boxShadow:
                  '0 2px 4px rgba(44,71,102,0.06), 0 12px 40px -8px rgba(44,71,102,0.18), 0 40px 100px -20px rgba(44,71,102,0.22)',
              }}
            >
              <Image
                src="/sure-west-roofing-team-cochrane.webp"
                alt="Craig and Mike, owners of Sure West Roofing, with the in-house crew in Cochrane Alberta"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                style={{ objectPosition: 'center 30%' }}
                loading="lazy"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(44,71,102,0.18) 0%, transparent 40%)',
                }}
              />
            </div>

            {/* Floating Owner-Operated badge */}
            <div
              className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-5 lg:-bottom-7 lg:-right-7 bg-white rounded-[14px] flex items-center gap-3.5 px-4 py-3 sm:px-5 sm:py-3.5 max-w-[260px]"
              style={{
                boxShadow:
                  '0 2px 4px rgba(44,71,102,0.08), 0 14px 32px -10px rgba(44,71,102,0.22), 0 28px 60px -18px rgba(44,71,102,0.18)',
              }}
            >
              <span
                className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full"
                style={{
                  background: 'rgba(212,175,96,0.14)',
                  border: '1px solid rgba(212,175,96,0.35)',
                }}
              >
                <ShieldCheck className="w-5 h-5 text-brand-gold" strokeWidth={1.75} />
              </span>
              <div>
                <div
                  className="font-display text-brand-navy leading-none"
                  style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.01em' }}
                >
                  Owner-Operated
                </div>
                <div
                  className="text-brand-slate mt-1.5"
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                    lineHeight: 1.3,
                  }}
                >
                  Same crew, every roof
                </div>
              </div>
            </div>
          </div>

          {/* Content RIGHT on desktop */}
          <div className="flex flex-col lg:order-2">
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
              Our Standard
            </span>
            <h2
              className="font-display font-medium text-brand-navy"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                lineHeight: 1.15,
                letterSpacing: '-0.005em',
              }}
            >
              Cochrane Roof Replacement
              <br className="hidden lg:block" /> Done Right the First Time
            </h2>
            <p
              className="mt-5 max-w-[520px] text-brand-slate leading-[1.7]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              A Sure West Cochrane roof replacement is more than new shingles. We rebuild the full
              system, Red Seal installed and backed for 10 years.
            </p>

            <ul className="mt-8 flex flex-col gap-7">
              {STANDARD_PILLARS.map((p, i) => (
                <li key={p.heading} className="flex gap-5">
                  <div
                    aria-hidden="true"
                    className="flex-shrink-0 font-display font-bold text-brand-gold leading-none"
                    style={{ fontSize: '32px', letterSpacing: '-0.03em', minWidth: '46px' }}
                  >
                    0{i + 1}
                  </div>
                  <div>
                    <h3
                      className="font-display font-semibold text-brand-navy"
                      style={{ fontSize: '18px', letterSpacing: '-0.005em', lineHeight: 1.3 }}
                    >
                      {p.heading}
                    </h3>
                    <p
                      className="mt-2 text-brand-slate leading-[1.65] max-w-[460px]"
                      style={{
                        fontSize: '15px',
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontWeight: 400,
                      }}
                    >
                      {p.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
                Get a Free Estimate
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section: What's Included ─────────────────────────────────────────────────

const INCLUDED_ITEMS = [
  {
    heading: 'Full tear-off and decking inspection',
    body:
      'We strip the roof to the deck and inspect for rot or water damage. Any compromised sheathing is replaced before new materials go on.',
  },
  {
    heading: 'Underlayment, ice-and-water shield, IKO shingles',
    body:
      'Synthetic underlayment and ice-and-water shield protect the deck. IKO shingles in your tier of choice: Cambridge, Dynasty, or Class 4 Nordic.',
  },
  {
    heading: 'Full site cleanup, walkthrough, and warranty',
    body:
      'We tarp landscaping before tear-off, then run a magnetic nail sweep daily. Closes with a walkthrough and your 10-year written warranty.',
  },
]


function WhatIncluded() {
  return (
    <section
      className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Content LEFT on desktop */}
          <div className="flex flex-col lg:order-1">
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
              West Roof Replacement
            </h2>
            <p
              className="mt-5 max-w-[520px] text-brand-slate leading-[1.7]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              Every Sure West replacement is carried out by our Red Seal Journeyman crew. Serving
              Cochrane, Calgary, and Canmore.
            </p>

            <ul className="mt-8 flex flex-col gap-7">
              {INCLUDED_ITEMS.map((item, i) => (
                <li key={item.heading} className="flex gap-5">
                  <div
                    aria-hidden="true"
                    className="flex-shrink-0 font-display font-bold text-brand-gold leading-none"
                    style={{ fontSize: '32px', letterSpacing: '-0.03em', minWidth: '46px' }}
                  >
                    0{i + 1}
                  </div>
                  <div>
                    <h3
                      className="font-display font-semibold text-brand-navy"
                      style={{ fontSize: '18px', letterSpacing: '-0.005em', lineHeight: 1.3 }}
                    >
                      {item.heading}
                    </h3>
                    <p
                      className="mt-2 text-brand-slate leading-[1.65] max-w-[460px]"
                      style={{
                        fontSize: '15px',
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontWeight: 400,
                      }}
                    >
                      {item.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
                Get a Free Estimate
              </Button>
            </div>
          </div>

          {/* Image RIGHT on desktop, with floating badge */}
          <div className="relative lg:order-2">
            <div
              className="relative overflow-hidden rounded-[18px] aspect-[4/5] lg:aspect-auto lg:h-[600px]"
              style={{
                boxShadow:
                  '0 2px 4px rgba(44,71,102,0.06), 0 12px 40px -8px rgba(44,71,102,0.18), 0 40px 100px -20px rgba(44,71,102,0.22)',
              }}
            >
              <Image
                src="/images/Cochrane Roofing Contractor Gallery 5.webp"
                alt="Sure West Roofing Red Seal crew installing new shingles on a Cochrane home"
                fill
                sizes="(max-width: 1024px) 100vw, 45vw"
                className="object-cover"
                loading="lazy"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(44,71,102,0.18) 0%, transparent 40%)',
                }}
              />
            </div>

            {/* Floating "In Writing" badge */}
            <div
              className="absolute -bottom-5 -left-3 sm:-bottom-6 sm:-left-5 lg:-bottom-7 lg:-left-7 bg-white rounded-[14px] flex items-center gap-3.5 px-4 py-3 sm:px-5 sm:py-3.5 max-w-[260px]"
              style={{
                boxShadow:
                  '0 2px 4px rgba(44,71,102,0.08), 0 14px 32px -10px rgba(44,71,102,0.22), 0 28px 60px -18px rgba(44,71,102,0.18)',
              }}
            >
              <span
                className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full"
                style={{
                  background: 'rgba(212,175,96,0.14)',
                  border: '1px solid rgba(212,175,96,0.35)',
                }}
              >
                <FileCheck className="w-5 h-5 text-brand-gold" strokeWidth={1.75} />
              </span>
              <div>
                <div
                  className="font-display text-brand-navy leading-none"
                  style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.01em' }}
                >
                  In Writing
                </div>
                <div
                  className="text-brand-slate mt-1.5"
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                    lineHeight: 1.3,
                  }}
                >
                  Quote, scope, and warranty
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section: Signs You Need a Replacement ──────────────────────────────────

const SIGNS = [
  {
    Icon: Clock,
    heading: 'Your roof is 18+ years old',
    body: 'Most Cochrane asphalt shingle roofs last 20 to 25 years. If yours is close, replacement is usually more cost-effective than repeat repairs.',
  },
  {
    Icon: AlertTriangle,
    heading: 'Widespread shingle damage',
    body: 'Curling, cracking, or missing shingles across multiple slopes signal end-of-life, not a spot repair. Replacement protects the decking before water finds its way in.',
  },
  {
    Icon: Droplets,
    heading: 'Granules in the gutters',
    body: 'Heavy granule loss means the shingles have lost their UV protection and are breaking down. Once the asphalt is exposed, deterioration accelerates quickly.',
  },
  {
    Icon: Eye,
    heading: 'Daylight in the attic',
    body: 'Visible daylight or water stains on the underside of the decking means the weather barrier has failed. Moisture is already entering and rot will follow.',
  },
  {
    Icon: Home,
    heading: 'Sagging rooflines',
    body: 'Any visible sag points to structural or decking failure that a repair cannot fix. The frame underneath needs proper assessment before any new roof goes on.',
  },
  {
    Icon: RotateCcw,
    heading: 'Repeat leaks after repairs',
    body: 'If you have patched the same area more than once, the underlying roof system is done. Continued repairs only delay the inevitable full replacement.',
  },
]

function SignsYouNeed() {
  return (
    <section
      className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
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
              Signs Your Cochrane Roof Needs
              <br />
              Replacing, Not Just Repairing
            </h2>
            <p
              className="mt-5 max-w-[560px] text-brand-slate leading-[1.7]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              If your Cochrane roof is under 15 years old, a repair is usually smarter than a full
              replacement. Here is when it isn&apos;t.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {SIGNS.map(({ Icon, heading, body }) => (
              <article
                key={heading}
                className="group relative rounded-[14px] bg-brand-cream border border-[#E5E2D9] p-6 md:p-7 overflow-hidden cursor-default transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-[0_22px_44px_-22px_rgba(212,175,96,0.45),0_10px_22px_-10px_rgba(44,71,102,0.18)]"
              >
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent 0%, rgba(212,175,96,0.85) 50%, transparent 100%)',
                    opacity: 0.45,
                  }}
                />
                <div
                  className="relative w-12 h-12 rounded-[10px] bg-white flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-3deg] mb-5"
                  style={{
                    boxShadow:
                      '0 1px 3px rgba(44,71,102,0.08), 0 10px 22px -10px rgba(212,175,96,0.45), 0 4px 10px -4px rgba(44,71,102,0.10)',
                    border: '1px solid rgba(212,175,96,0.20)',
                  }}
                >
                  <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.75} />
                </div>
                <h3
                  className="relative font-display font-semibold text-brand-navy mb-3 leading-[1.25]"
                  style={{ fontSize: '19px', letterSpacing: '-0.01em' }}
                >
                  {heading}
                </h3>
                <p
                  className="relative text-brand-slate leading-[1.65]"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {body}
                </p>
              </article>
            ))}
          </div>

          <div className="mt-12 md:mt-14 flex justify-center">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
              Get a Free Estimate
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─── Section: How It Works (3-step) ──────────────────────────────────────────

const REPLACEMENT_STEPS: HowItWorksStep[] = [
  {
    number: '01',
    Icon: Calendar,
    title: 'Free On-Site Estimate',
    description:
      'A Red Seal Journeyman inspects your Cochrane roof, measures every slope, and writes a fixed quote on the spot.',
  },
  {
    number: '02',
    Icon: FileCheck,
    title: 'Approve Your Quote',
    description:
      'Your quote is fixed. The price you approve is the price you pay. Install date locked in around your schedule.',
  },
  {
    number: '03',
    Icon: CheckCircle,
    title: 'Your New Roof, Done Right',
    description:
      'Tear-off, IKO install, magnetic nail sweep, and your written 10-year workmanship warranty handed over before we leave.',
  },
]

// ─── Section: Shingle Options ─────────────────────────────────────────────────

const SHINGLES = [
  {
    tier: 'Entry Tier',
    name: 'IKO Cambridge',
    image: '/images/IKO Cambridge .webp',
    imageAlt: 'IKO Cambridge architectural shingle, entry tier option by Sure West Roofing Cochrane',
    body: 'Quality architectural shingle with a strong warranty. A reliable choice for most Cochrane homes that delivers solid performance and curb appeal at a competitive price point.',
  },
  {
    tier: 'Mid Tier',
    name: 'IKO Dynasty',
    image: '/images/IKO Dynasty .webp',
    imageAlt: 'IKO Dynasty shingle, mid tier option by Sure West Roofing Cochrane',
    body: 'Heavier shingle with better curb appeal and improved wind resistance. Popular for move-up homes and properties preparing for resale, where appearance and durability matter.',
  },
  {
    tier: 'Impact Resistant',
    name: 'IKO Nordic',
    image: '/images/IKO Nordic .webp',
    imageAlt: 'IKO Nordic Class 4 impact resistant shingle, hail protection option by Sure West Roofing Cochrane',
    body: "Class 4 impact rating for hail protection. Designed for Alberta's hail belt and may qualify your property for insurance premium discounts, depending on your provider.",
  },
]

function ShingleOptions() {
  return (
    <section
      className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
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
            Shingle Options
          </span>
          <h2
            className="font-display font-medium text-brand-navy"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              lineHeight: 1.15,
              letterSpacing: '-0.005em',
            }}
          >
            Shingle Options for Your
            <br className="hidden lg:block" /> Cochrane Roof Replacement
          </h2>
          <p
            className="mt-5 max-w-[600px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Sure West installs IKO shingles exclusively. Canadian-made, proven in Alberta weather,
            and backed by long-term material warranties documented in writing.
          </p>
        </div>
        </Reveal>

        <Reveal delay={150}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {SHINGLES.map(({ tier, name, image, imageAlt, body }) => (
            <article
              key={name}
              className="group flex flex-col h-full rounded-[14px] bg-white border border-[#E5E2D9] overflow-hidden shadow-[0_2px_8px_rgba(44,71,102,0.06)] transition-all duration-500 ease-out hover:-translate-y-[6px] hover:border-brand-gold/60 hover:shadow-[0_22px_44px_-22px_rgba(212,175,96,0.45),0_10px_22px_-10px_rgba(44,71,102,0.18)]"
            >
              {/* Shingle image */}
              <div className="relative flex-shrink-0 overflow-hidden" style={{ height: '220px' }}>
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                  loading="lazy"
                />
              </div>

              {/* Card content */}
              <div className="p-6 md:p-7 flex flex-col flex-1">
                <span
                  className="inline-block text-brand-gold font-semibold uppercase tracking-[0.12em] mb-3"
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  }}
                >
                  {tier}
                </span>
                <h3
                  className="font-display font-semibold text-brand-navy mb-4 leading-[1.2] transition-colors duration-300 group-hover:text-brand-gold"
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
            </article>
          ))}
        </div>

        <div className="mt-12 md:mt-14 flex justify-center">
          <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
            Get a Free Estimate
          </Button>
        </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─── Section: Why Sure West ───────────────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    Icon: Award,
    heading: 'Owner-Led on Every Roof',
    body: 'Craig and Mike personally walk every roof, brief the crew, and inspect the finish. Same names on the quote, same names on the warranty.',
  },
  {
    Icon: Home,
    heading: 'Cochrane Local, Not a Franchise',
    body: 'We live where we work. Same shops, same coffee places, same neighbours. Our reputation in this town is earned daily, not advertised.',
  },
  {
    Icon: Wrench,
    heading: 'Craft Where Most Crews Cut Corners',
    body: 'Snapped chalk lines on every course, balanced ventilation, flashing tied in by hand. The parts you never see done well are the parts that fail first.',
  },
  {
    Icon: MessageSquare,
    heading: 'Communication Built In',
    body: 'Daily texts with progress photos, a tidy site at the end of each day, and a magnetic nail sweep before we leave. You always know where the job stands.',
  },
]

function WhySureWest() {
  return (
    <section
      className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
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
            Why Cochrane Homeowners
            <br />
            Trust Sure West
          </h2>
          <p
            className="mt-5 max-w-[580px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Owner-led, Cochrane-rooted, and obsessed with the details most crews skip. The
            reasons people in town pick Sure West, then tell their neighbours.
          </p>
        </div>
        </Reveal>

        <Reveal delay={150}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {DIFFERENTIATORS.map(({ Icon, heading, body }) => (
            <article
              key={heading}
              className="group relative rounded-[16px] p-6 md:p-7 overflow-hidden cursor-default transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_22px_44px_-22px_rgba(212,175,96,0.45),0_10px_22px_-10px_rgba(44,71,102,0.18)]"
              style={{
                background: '#FFFFFF',
                border: '1px solid #E8E4D8',
                boxShadow:
                  '0 1px 2px rgba(44,71,102,0.04), 0 8px 22px -10px rgba(44,71,102,0.10)',
              }}
            >
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background:
                    'linear-gradient(90deg, transparent 0%, rgba(212,175,96,0.85) 50%, transparent 100%)',
                  opacity: 0.55,
                }}
              />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-6 md:left-7 top-5 md:top-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'radial-gradient(closest-side, rgba(212,175,96,0.32), transparent 70%)',
                  filter: 'blur(8px)',
                }}
              />
              <div
                className="relative inline-flex items-center justify-center w-12 h-12 rounded-[10px] bg-white mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-3deg]"
                style={{
                  boxShadow:
                    '0 1px 3px rgba(44,71,102,0.08), 0 10px 22px -10px rgba(212,175,96,0.45), 0 4px 10px -4px rgba(44,71,102,0.10)',
                  border: '1px solid rgba(212,175,96,0.20)',
                }}
              >
                <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.75} />
              </div>
              <h3
                className="relative font-display font-semibold text-brand-navy mb-3 leading-[1.25]"
                style={{ fontSize: '20px', letterSpacing: '-0.01em' }}
              >
                {heading}
              </h3>
              <p
                className="relative text-brand-slate leading-[1.65]"
                style={{
                  fontSize: '14px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                {body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 md:mt-14 flex justify-center">
          <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
            Get a Free Estimate
          </Button>
        </div>
        </Reveal>
      </div>
    </section>
  )
}


// ─── Section: Gallery images for this page ───────────────────────────────────

const RR_GALLERY_IMAGES = [
  { src: '/images/Cochrane Roofing Contractor Gallery 1.webp',  alt: 'Completed IKO Dynasty roof replacement in Cochrane Alberta',              caption: 'Cochrane, AB · IKO Dynasty' },
  { src: '/images/Cochrane Roofing Contractor Gallery 2.webp',  alt: 'IKO Cambridge shingle roof replacement in Cochrane Alberta',             caption: 'Cochrane, AB · IKO Cambridge' },
  { src: '/images/Cochrane Roofing Contractor Gallery 3.webp',  alt: 'IKO Nordic impact resistant roof replacement in Calgary Alberta',        caption: 'Calgary, AB · IKO Nordic' },
  { src: '/images/Cochrane Roofing Contractor Gallery 4.webp',  alt: 'Residential roof replacement by Sure West Roofing Cochrane',             caption: 'Cochrane, AB · IKO Cambridge' },
  { src: '/images/Cochrane Roofing Contractor Gallery 5.webp',  alt: 'IKO Dynasty shingle roof replacement in Canmore Alberta',                caption: 'Canmore, AB · IKO Dynasty' },
  { src: '/images/Cochrane Roofing Contractor Gallery 6.webp',  alt: 'Architectural shingle roof replacement in Cochrane Alberta',             caption: 'Cochrane, AB · IKO Cambridge' },
  { src: '/images/Cochrane Roofing Contractor Gallery 7.webp',  alt: 'IKO Dynasty roof replacement in Calgary Alberta by Sure West Roofing',   caption: 'Calgary, AB · IKO Dynasty' },
  { src: '/images/Cochrane Roofing Contractor Gallery 8.webp',  alt: 'IKO Nordic impact resistant roof replacement in Cochrane Alberta',       caption: 'Cochrane, AB · IKO Nordic' },
  { src: '/images/Cochrane Roofing Contractor Gallery 3.webp',  alt: 'Red Seal Journeyman crew completing roof replacement in Cochrane',       caption: 'Cochrane, AB · IKO Dynasty' },
  { src: '/images/Cochrane Roofing Contractor Gallery 10.webp', alt: 'Sure West Roofing completed roof replacement in the Calgary region',     caption: 'Calgary, AB · IKO Dynasty' },
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

        <RelatedServicesCarousel exclude="/roof-replacement" />
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RoofReplacementPage() {
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

      <RoofReplacementHero />
      <TrustLogos />
      <OurStandard />
      <WhatIncluded />
      <HowItWorks
        heading={
          <>
            How a Sure West Cochrane
            <br className="hidden md:block" /> Roof Replacement Works
          </>
        }
        body="Three clear steps from first estimate to your new roof in writing. No surprises, no pressure, no hidden fees."
        steps={REPLACEMENT_STEPS}
      />
      <Reviews sectionBg="#F7F5F0" cardBg="#FFFFFF" />
      <SignsYouNeed />
      <ShingleOptions />
      <ServicesGallery
        images={RR_GALLERY_IMAGES.map(({ src, alt }) => ({ src, alt }))}
        sectionBg="#FFFFFF"
      />
      <WhySureWest />
      <ServiceAreasPins
        heading={'Roof Replacement Across Cochrane,\n Calgary, and Canmore'}
        subhead="Based in Cochrane. Same Red Seal crew across Calgary and Canmore."
      />
      <RoofReplacementFAQ />
      <RelatedServices />
      <BottomCTA
        heading={
          <>
            Ready for a Roof Replacement
            <br className="hidden md:block" /> You Can Actually Trust?
          </>
        }
        subtext="Red Seal certified, free estimate, 10-year workmanship warranty, and no sales pressure. Book yours today."
      />
    </>
  )
}
