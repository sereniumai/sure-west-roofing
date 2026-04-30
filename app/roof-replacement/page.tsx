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
  MapPin,
  ArrowRight,
  Calendar,
  Package,
  Hammer,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { RoofReplacementHero } from '@/components/sections/RoofReplacementHero'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { WhatIncludedAccordion } from '@/components/sections/WhatIncludedAccordion'
import { RoofReplacementFAQ } from '@/components/sections/RoofReplacementFAQ'
import { RelatedServicesCarousel } from '@/components/sections/RelatedServicesCarousel'
import { PortfolioGallery } from '@/components/sections/PortfolioGallery'
import { Reviews } from '@/components/sections/Reviews'
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
      'Red Seal certified roof replacement in Cochrane, AB. Fixed quotes, real warranties, in-house crews.',
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

// ─── Section: What's Included ─────────────────────────────────────────────────

function WhatIncluded() {
  return (
    <section
      className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Right (desktop): heading, copy, accordion, CTA. Mobile keeps content first. */}
          <Reveal delay={150} className="flex flex-col lg:order-2">
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

            <WhatIncludedAccordion />
          </Reveal>

          {/* Left (desktop): photo with premium framing matching About / Service hero shadow */}
          <Reveal noBlur className="lg:order-1">
            <div
              className="relative overflow-hidden rounded-[18px] aspect-[4/5] lg:aspect-auto lg:h-[600px]"
              style={{
                boxShadow:
                  '0 2px 4px rgba(44,71,102,0.06), 0 12px 40px -8px rgba(44,71,102,0.18), 0 40px 100px -20px rgba(44,71,102,0.22)',
              }}
            >
              <Image
                src="/images/Cochrane Roofing Contractor Gallery 14.webp"
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
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ─── Section: Signs You Need Replacement ─────────────────────────────────────

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
            Signs Your Roof Needs
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
              className="group relative bg-white rounded-[14px] border border-[#E5E2D9] p-6 md:p-7 overflow-hidden cursor-default transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-[0_22px_44px_-22px_rgba(212,175,96,0.45),0_10px_22px_-10px_rgba(44,71,102,0.18)]"
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

// ─── Section: Replacement Process ────────────────────────────────────────────

const PROCESS_STEPS = [
  {
    number: '01',
    Icon: Calendar,
    heading: ['Free On-Site', 'Estimate'],
    body: 'A Red Seal Journeyman inspects your Cochrane roof, measures it, and walks you through the options. No pressure, no upsell.',
  },
  {
    number: '02',
    Icon: FileText,
    heading: ['Written Quote,', 'No Surprises'],
    body: 'A detailed written quote with shingle choice, scope, timeline, and price. Everything that affects cost is spelled out up front.',
  },
  {
    number: '03',
    Icon: Package,
    heading: ['Material Delivery', 'and Scheduling'],
    body: 'Once approved, we order materials and lock in an install date that fits your schedule and the forecast. Nothing left vague.',
  },
  {
    number: '04',
    Icon: Hammer,
    heading: ['One-Day Install', 'on Most Homes'],
    body: 'Our Cochrane crews handle tear-off, deck repair, and install in a single day on most homes. Larger roofs take two days.',
  },
  {
    number: '05',
    Icon: CheckCircle2,
    heading: ['Cleanup and', 'Final Walkthrough'],
    body: 'Magnetic nail sweep, full site cleanup, and a final walkthrough with you before we leave. Your written warranty in hand.',
  },
]

function ReplacementProcess() {
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
            How a Sure West Roof
            <br />
            Replacement Works
          </h2>
          <p
            className="mt-5 max-w-[560px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Five clear steps from first estimate to final cleanup. Every stage is mapped out in
            writing before we start. No hidden steps, no surprises.
          </p>
        </div>
        </Reveal>

        <Reveal delay={150}>
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 md:gap-6">
            {PROCESS_STEPS.map(({ number, Icon, heading, body }) => (
              <article
                key={number}
                className="group relative rounded-[16px] px-5 py-7 md:px-5 md:py-8 flex flex-col items-center text-center overflow-hidden cursor-default transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_22px_44px_-22px_rgba(212,175,96,0.45),0_10px_22px_-10px_rgba(44,71,102,0.18)]"
                style={{
                  background: 'linear-gradient(155deg, #FAF8F2 0%, #F4F1E8 100%)',
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
                  className="relative uppercase tracking-[0.18em] text-brand-gold font-semibold"
                  style={{
                    fontSize: '11px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  }}
                >
                  Step {number}
                </span>
                <div
                  className="relative mt-4 mb-5 flex items-center justify-center w-14 h-14 rounded-[12px] bg-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-3deg]"
                  style={{
                    boxShadow:
                      '0 1px 3px rgba(44,71,102,0.08), 0 10px 22px -10px rgba(212,175,96,0.45), 0 4px 10px -4px rgba(44,71,102,0.10)',
                    border: '1px solid rgba(212,175,96,0.20)',
                  }}
                >
                  <Icon className="w-6 h-6 text-brand-gold" strokeWidth={1.75} />
                </div>
                <h3
                  className="relative font-display font-semibold text-brand-navy leading-[1.2] min-h-[44px]"
                  style={{ fontSize: '17px', letterSpacing: '-0.01em' }}
                >
                  {heading[0]}
                  <br />
                  {heading[1]}
                </h3>
                <p
                  className="relative mt-4 text-brand-slate leading-[1.6] max-w-[220px]"
                  style={{
                    fontSize: '13px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {body}
                </p>
              </article>
            ))}
          </div>
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
    heading: 'Red Seal Certified Trades',
    body: 'Sure West is owned and operated by Red Seal Journeyman roofers, the recognised national trade standard. A credentialed tradesperson is on every roof, never a subcontractor.',
  },
  {
    Icon: CloudLightning,
    heading: 'Built for Alberta Weather',
    body: 'Cochrane winters, Chinooks, hailstorms, and high winds demand specific materials. Every install is tuned for local freeze-thaw conditions.',
  },
  {
    Icon: FileText,
    heading: 'Honest Quotes, No Pressure',
    body: 'Every estimate is free, on-site, and provided in writing with itemised costs. If your roof does not need replacing, we will tell you that straight.',
  },
  {
    Icon: ShieldCheck,
    heading: '10-Year Workmanship Warranty',
    body: 'Every roof replacement comes with a 10-year workmanship warranty in writing before we leave the job site, on top of the IKO material warranty. Two layers of documented protection.',
  },
]

function WhySureWest() {
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
            Built across Cochrane, Calgary, and Canmore on Red Seal ownership, materials made for
            Alberta weather, and warranties you can read.
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
                background: 'linear-gradient(155deg, #FAF8F2 0%, #F4F1E8 100%)',
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


// ─── Section: Service Area ────────────────────────────────────────────────────

const LOCATIONS = [
  {
    name: 'Cochrane',
    href: '/services',
    detail: 'Home base, primary market',
    buttonLabel: 'Roofing Services Cochrane',
  },
  {
    name: 'Calgary',
    href: '/calgary-roofing-contractor',
    detail: 'Full service across the Calgary region',
    buttonLabel: 'Roofing Contractor Calgary',
  },
  {
    name: 'Canmore',
    href: '/canmore-roofing-contractor',
    detail: 'Full service across the Bow Valley',
    buttonLabel: 'Roofing Contractor Canmore',
  },
]

function ServiceAreaCondensed() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-24"
      style={{
        background: '#FFFFFF',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
        <div className="text-center mb-12 md:mb-16 max-w-[720px] mx-auto">
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
            Service Area
          </span>
          <h2
            className="font-display font-medium text-brand-navy"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              lineHeight: 1.15,
              letterSpacing: '-0.005em',
            }}
          >
            Roof Replacement Across Cochrane,
            <br className="hidden lg:block" /> Calgary, and Canmore
          </h2>
          <p
            className="mt-5 max-w-[580px] mx-auto text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Based in Cochrane. Same Red Seal crew across Calgary and Canmore.
          </p>
        </div>
        </Reveal>

        <Reveal delay={150}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-[1100px] mx-auto relative">
          {/* Dashed gold connector across pin centres on desktop */}
          <div
            aria-hidden="true"
            className="hidden md:block absolute z-0 border-t-2 border-dashed border-brand-gold/30"
            style={{ top: '52px', left: '20%', right: '20%' }}
          />

          {LOCATIONS.map(({ name, href, detail, buttonLabel }) => (
            <div
              key={name}
              className="group relative z-[1] flex flex-col items-center text-center"
            >
              {/* Multi-layer pin */}
              <div className="relative mb-6 w-[104px] h-[104px] flex items-center justify-center">
                <span
                  aria-hidden="true"
                  className="absolute inset-0 rounded-full transition-opacity duration-500 group-hover:opacity-100 opacity-70"
                  style={{
                    background:
                      'radial-gradient(closest-side, rgba(212,175,96,0.22), transparent 70%)',
                    filter: 'blur(6px)',
                  }}
                />
                <span
                  aria-hidden="true"
                  className="absolute w-[96px] h-[96px] rounded-full"
                  style={{
                    background: 'rgba(212,175,96,0.05)',
                    border: '1px solid rgba(212,175,96,0.20)',
                  }}
                />
                <span
                  aria-hidden="true"
                  className="absolute w-[78px] h-[78px] rounded-full"
                  style={{
                    background: 'rgba(212,175,96,0.10)',
                    border: '1px solid rgba(212,175,96,0.32)',
                  }}
                />
                <span
                  className="relative w-[60px] h-[60px] rounded-full bg-white flex items-center justify-center transition-all duration-500 ease-out group-hover:scale-[1.08] group-hover:shadow-[0_14px_30px_-10px_rgba(212,175,96,0.55)]"
                  style={{
                    boxShadow: '0 6px 18px -8px rgba(212,175,96,0.40)',
                  }}
                >
                  <MapPin className="w-7 h-7 text-brand-gold" strokeWidth={1.75} />
                </span>
              </div>

              <h3
                className="font-display font-semibold text-brand-navy mb-3 transition-colors duration-300 group-hover:text-brand-gold"
                style={{ fontSize: '28px', letterSpacing: '-0.015em', lineHeight: 1.15 }}
              >
                {name}
              </h3>

              <p
                className="text-brand-slate leading-[1.65] mb-5 max-w-[280px]"
                style={{
                  fontSize: '14.5px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                {detail}
              </p>

              <Button variant="primary" size="md" href={href}>
                {buttonLabel}
              </Button>
            </div>
          ))}
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
  { src: '/images/Cochrane Roofing Contractor Gallery 9.webp',  alt: 'Red Seal Journeyman crew completing roof replacement in Cochrane',       caption: 'Cochrane, AB · IKO Dynasty' },
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
      <WhatIncluded />
      <SignsYouNeed />
      <ReplacementProcess />
      <ShingleOptions />
      <WhySureWest />
      <Reviews sectionBg="#F7F5F0" cardBg="#FFFFFF" />
      <PortfolioGallery
        sectionBg="#F7F5F0"
        images={RR_GALLERY_IMAGES.map(({ src, alt }) => ({ src, alt }))}
      />
      <ServiceAreaCondensed />
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
