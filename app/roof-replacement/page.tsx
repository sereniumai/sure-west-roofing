import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Clock,
  AlertTriangle,
  Droplets,
  Layers,
  Sun,
  Repeat,
  ArrowRight,
  Calendar,
  FileCheck,
  CheckCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { RoofReplacementHero } from '@/components/sections/RoofReplacementHero'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { HowItWorks, type HowItWorksStep } from '@/components/sections/HowItWorks'
import { RoofReplacementFAQ, roofReplacementFaqSchema } from '@/components/sections/RoofReplacementFAQ'
import { RelatedServicesCarousel } from '@/components/sections/RelatedServicesCarousel'
import { ServicesGallery } from '@/components/sections/ServicesGallery'
import { Reviews } from '@/components/sections/Reviews'
import { ServicesHubDifferentiators } from '@/components/sections/ServicesHubDifferentiators'
import { WhatIncludedAccordion } from '@/components/sections/WhatIncludedAccordion'
import { BottomCTA } from '@/components/sections/BottomCTA'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Roof Replacement Cochrane',
  description:
    'Roof replacement in Cochrane, Calgary, and Canmore by Red Seal Journeyman roofers. Written itemised quote, premium shingle install, 10-year workmanship guarantee.',
  alternates: {
    canonical: 'https://surewestroofing.ca/roof-replacement',
  },
  openGraph: {
    title: 'Roof Replacement Cochrane | Sure West Roofing',
    description:
      'Roof replacement in Cochrane, Calgary, and Canmore by Red Seal Journeyman roofers. Written itemised quote, premium shingle install, 10-year workmanship guarantee.',
    url: 'https://surewestroofing.ca/roof-replacement',
    type: 'website',
    locale: 'en_CA',
    images: [
      {
        url: 'https://surewestroofing.ca/images/Roof Replacement Cochrane.avif',
        width: 1200,
        height: 630,
        alt: 'New asphalt shingle roof replacement completed by Sure West Roofing in Cochrane Alberta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Replacement Cochrane | Sure West Roofing',
    description:
      'Roof replacement in Cochrane, Calgary, and Canmore by Red Seal Journeyman roofers. Written itemised quote, premium shingle install, 10-year workmanship guarantee.',
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
    'Red Seal certified residential roof replacement in Cochrane, Calgary, and Canmore. Performance-tiered shingle options, 10-year workmanship guarantee, free written estimates.',
}

// ─── Section: What's Included ─────────────────────────────────────────────────

const INCLUDED_ITEMS = [
  {
    heading: 'Full tear-off and decking inspection',
    body:
      'We strip the roof to the deck and inspect every square foot for rot or water damage. Any compromised sheathing is replaced before new materials go on, so the new roof has a sound foundation underneath.',
  },
  {
    heading: 'Underlayment, ice-and-water shield, tiered shingles',
    body:
      'Synthetic underlayment and ice-and-water shield protect the deck. Shingles selected by performance tier: builder grade, wind performance, or polymer-modified for hail-prone Alberta neighbourhoods.',
  },
  {
    heading: 'Full site cleanup, walkthrough, and warranty',
    body:
      'We tarp landscaping before tear-off and run a magnetic nail sweep daily. The job closes with a final walkthrough and your 10-year written workmanship warranty handed over before we leave.',
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
                background: '#FFFFFF',
                fontSize: '12px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              What's Included
            </span>
            <h2
              className="font-display font-medium text-brand-navy"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                lineHeight: 1.15,
                letterSpacing: '-0.005em',
              }}
            >
              What's Included in a Sure
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
              Every Sure West replacement is carried out by our in-house crew. Serving Cochrane,
              Calgary, and Canmore.
            </p>

            <WhatIncludedAccordion items={INCLUDED_ITEMS} />

            <div className="mt-10">
              <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
                Get a Free Estimate
              </Button>
            </div>
          </div>

          {/* Image RIGHT on desktop, with floating badge */}
          <div className="relative lg:order-2">
            <div
              className="relative overflow-hidden rounded-[18px] aspect-[4/3] md:aspect-[16/10] lg:aspect-auto lg:h-[600px]"
              style={{
                boxShadow:
                  '0 2px 4px rgba(44,71,102,0.06), 0 12px 40px -8px rgba(44,71,102,0.18), 0 40px 100px -20px rgba(44,71,102,0.22)',
              }}
            >
              <Image
                src="/images/Cochrane Roofing Contractor Gallery 5.webp"
                alt="Sure West crew installing architectural shingles on a Cochrane home"
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
    body: 'Most Cochrane architectural asphalt shingles last 15 to 25 years. Freeze-thaw cycles, chinooks, and hail push the lower end. Past 18 years, a replacement usually beats another round of repairs.',
  },
  {
    Icon: Layers,
    heading: 'Widespread shingle damage',
    body: 'Curling, cracking, or missing shingles across multiple slopes signal end-of-life, not a spot repair. A replacement protects the decking underneath before water finds a way in and rot starts.',
  },
  {
    Icon: Droplets,
    heading: 'Granules in the gutters',
    body: 'Heavy granule loss means the shingles have lost their UV protection and are breaking down. Once the asphalt underneath is exposed, deterioration accelerates fast under Alberta sun.',
  },
  {
    Icon: Sun,
    heading: 'Daylight in the attic',
    body: 'Visible daylight or water stains on the underside of the decking means the weather barrier has failed. Moisture is already entering the home and rot in the wood, drywall, or insulation will follow soon after.',
  },
  {
    Icon: AlertTriangle,
    heading: 'Sagging rooflines',
    body: 'Any visible sag points to structural or decking failure that a repair cannot fix. The frame underneath needs a proper structural assessment from a Red Seal roofer before any new roof goes on top of it.',
  },
  {
    Icon: Repeat,
    heading: 'Repeat leaks after repairs',
    body: 'Patching the same area more than once, or wind damage two or three times a year, means the roof is at end-of-life. The cost-benefit shifts to replacement, and we will tell you so straight, no upsell.',
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
                background: '#F7F5F0',
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
              Signs Your Cochrane Roof Needs{' '}
              <br className="hidden md:block" />
              Replacing, Not Just Repairing
            </h2>
            <p
              className="mt-5 max-w-[620px] text-brand-slate leading-[1.7]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              Education over the easy upsell. If your Cochrane roof is under 15 years old, a repair
              is almost always smarter than a full replacement. Here is when it isn&apos;t.
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
    title: 'On-Site Estimate',
    description:
      'We visit your Cochrane home, walk the roof, and bring shingle samples. The visit gives you face time with your contractor and catches what tech misses: access, skylights, chimneys, and persistent leak points.',
  },
  {
    number: '02',
    Icon: FileCheck,
    title: 'Approve Your Quote',
    description:
      'A clear, itemised written quote with site photos and notes follows the visit. If something unexpected comes up once the work is underway, we flag it early and walk you through all your options before we proceed.',
  },
  {
    number: '03',
    Icon: CheckCircle,
    title: 'Your New Roof, Done Right',
    description:
      'Tear-off, premium shingle install, magnetic nail sweep, and your 10-year written workmanship guarantee handed over before we leave. A final walkthrough on site confirms the work meets your standard.',
  },
]

// ─── Section: Shingle Options ─────────────────────────────────────────────────

const SHINGLES = [
  // Row 1: non-Malarkey lineup
  {
    tier: 'Builder Grade',
    name: 'IKO Cambridge',
    image: '/images/IKO Cambridge .webp',
    imageAlt: 'IKO Cambridge architectural shingle, builder grade option by Sure West Roofing Cochrane',
    body: 'Reliable architectural shingle with a solid wind warranty. The accessible choice for Cochrane homes where protection and curb appeal come first.',
  },
  {
    tier: 'Wind Performance',
    name: 'Owens Corning Duration',
    image: '/images/Owens Corning Duration.jpeg',
    imageAlt: 'Owens Corning Duration shingle, wind performance option by Sure West Roofing',
    body: 'SureNail technology delivers stronger fastening and tested wind ratings up to 130 mph. Built for Cochrane homes on exposed slopes or in chinook corridors.',
  },
  {
    tier: 'Premium Rubber',
    name: 'Euroshield Rubber',
    image: '/images/Euroshield Rubber.webp',
    imageAlt: 'Euroshield rubber roofing shingle, premium top-tier option by Sure West Roofing',
    body: 'Recycled rubber roofing with exceptional impact resistance and a 50-year warranty. The longest-lasting option we install, ideal for Alberta hail corridors.',
  },
  // Row 2: Malarkey lineup grouped together
  {
    tier: 'Polymer-Modified',
    name: 'Malarkey Vista',
    image: '/images/Malarkey Vista.jpg',
    imageAlt: 'Malarkey Vista polymer-modified shingle, hail performance option by Sure West Roofing',
    body: 'Heavier laminated shingle with deep shadow lines and impact resistance. The move-up option for homeowners wanting visual presence and performance.',
  },
  {
    tier: 'Hail Performance',
    name: 'Malarkey Legacy',
    image: '/images/Malarkey Legacy.jpg',
    imageAlt: 'Malarkey Legacy polymer-modified shingle, hail performance option by Sure West Roofing',
    body: 'Polymer-modified asphalt with a Class 4 impact rating. Built for hail-prone Alberta neighbourhoods, and may qualify your home for an insurance premium discount.',
    imageZoom: 1.25,
  },
  {
    tier: 'Premium Hail Performance',
    name: 'Malarkey Windsor',
    image: '/images/Malarkey Windsor.jpg',
    imageAlt: 'Malarkey Windsor polymer-modified shingle, premium hail performance option by Sure West Roofing',
    body: 'Hail-rated shingle with Malarkey’s NEX polymer technology. Deeper shadow lines and storm resilience for homeowners who want look plus longevity.',
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
              background: '#FFFFFF',
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
            className="mt-5 max-w-[640px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            We tier shingles by performance, not brand loyalty. Builder grade, wind performance, or polymer-modified hail performance, matched to your roof and your exposure during the on-site visit.
          </p>
        </div>
        </Reveal>

        <Reveal delay={150}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {SHINGLES.map(({ tier, name, image, imageAlt, body, imageZoom }) => (
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
                  className={`object-cover transition-transform duration-700 ease-out ${imageZoom ? '' : 'group-hover:scale-[1.06]'}`}
                  style={imageZoom ? { transform: `scale(${imageZoom})` } : undefined}
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

// ─── Section: Financing ──────────────────────────────────────────────────────

function Financing() {
  return (
    <section
      className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      {/* Soft gold radial wash behind the card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(800px 400px at 50% 50%, rgba(212,175,96,0.10), transparent 65%)',
        }}
      />

      <Reveal>
        <div
          className="relative max-w-[960px] mx-auto rounded-[20px] overflow-hidden"
          style={{
            background: '#F7F5F0',
            border: '1px solid rgba(26,22,18,0.06)',
            boxShadow:
              '0 2px 4px rgba(44,71,102,0.06), 0 14px 38px -10px rgba(44,71,102,0.14), 0 36px 80px -28px rgba(44,71,102,0.18)',
          }}
        >
          {/* Gold left rail accent */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-[3px]"
            style={{
              background:
                'linear-gradient(180deg, rgba(212,175,96,0) 0%, rgba(212,175,96,0.95) 18%, rgba(212,175,96,0.95) 82%, rgba(212,175,96,0) 100%)',
            }}
          />

          {/* Soft top gold gradient */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute top-0 left-0 right-0 h-[3px]"
            style={{
              background:
                'linear-gradient(90deg, transparent 0%, rgba(212,175,96,0.85) 50%, transparent 100%)',
              opacity: 0.7,
            }}
          />

          <div className="relative px-8 md:px-14 py-14 md:py-20 flex flex-col items-center text-center">
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
              Financing
            </span>

            <h2
              className="font-display font-medium text-brand-navy max-w-[640px]"
              style={{
                fontSize: 'clamp(30px, 4vw, 44px)',
                lineHeight: 1.15,
                letterSpacing: '-0.005em',
              }}
            >
              Financing Options for Your Cochrane Roof Replacement
            </h2>

            <p
              className="mt-5 max-w-[600px] text-brand-slate leading-[1.7]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              A new roof is a significant investment. Ask us about financing when we visit your
              property, and we will walk through the options available with you.
            </p>

            <div className="mt-9 flex justify-center">
              <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
                Get a Free Estimate
              </Button>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

// ─── Section: Gallery images for this page ───────────────────────────────────

const RR_GALLERY_IMAGES = [
  { src: '/images/Cochrane Roofing Contractor Gallery 1.webp',  alt: 'Completed asphalt shingle roof replacement in Cochrane Alberta',             caption: 'Cochrane, AB' },
  { src: '/images/Cochrane Roofing Contractor Gallery 2.webp',  alt: 'Architectural shingle roof replacement in Cochrane Alberta',                 caption: 'Cochrane, AB' },
  { src: '/images/Cochrane Roofing Contractor Gallery 3.webp',  alt: 'Impact-resistant roof replacement in Calgary Alberta',                       caption: 'Calgary, AB' },
  { src: '/images/Cochrane Roofing Contractor Gallery 4.webp',  alt: 'Residential roof replacement by Sure West Roofing Cochrane',                 caption: 'Cochrane, AB' },
  { src: '/images/Cochrane Roofing Contractor Gallery 5.webp',  alt: 'Architectural shingle roof replacement in Canmore Alberta',                  caption: 'Canmore, AB' },
  { src: '/images/Cochrane Roofing Contractor Gallery 6.webp',  alt: 'Architectural shingle roof replacement in Cochrane Alberta',                 caption: 'Cochrane, AB' },
  { src: '/images/Cochrane Roofing Contractor Gallery 7.webp',  alt: 'Architectural shingle roof replacement in Calgary Alberta by Sure West',     caption: 'Calgary, AB' },
  { src: '/images/Cochrane Roofing Contractor Gallery 8.webp',  alt: 'Impact-resistant roof replacement in Cochrane Alberta',                      caption: 'Cochrane, AB' },
  { src: '/images/Cochrane Roofing Contractor Gallery 3.webp',  alt: 'Sure West in-house crew completing a residential roof replacement in Cochrane', caption: 'Cochrane, AB' },
  { src: '/images/Cochrane Roofing Contractor Gallery 10.webp', alt: 'Sure West Roofing completed roof replacement in the Calgary region',         caption: 'Calgary, AB' },
]

// ─── Section: Related Services ────────────────────────────────────────────────

function RelatedServices() {
  return (
    <section
      className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <div>
            <span
              className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-5 text-brand-gold"
              style={{
                background: '#FFFFFF',
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
                fontSize: 'clamp(32px, 4.5vw, 48px)',
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

        <RelatedServicesCarousel exclude="/roof-replacement" cardBg="#FFFFFF" />
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roofReplacementFaqSchema) }}
      />

      <RoofReplacementHero />
      <TrustLogos />
      <SignsYouNeed />
      <WhatIncluded />
      <HowItWorks
        heading={
          <>
            How a Sure West Cochrane
            <br className="hidden md:block" /> Roof Replacement Works
          </>
        }
        body={
          <>
            Three clear steps from your free estimate to a new roof in writing.
            <br className="hidden md:block" /> No surprises, no pressure, no hidden fees.
          </>
        }
        steps={REPLACEMENT_STEPS}
      />
      <ServicesHubDifferentiators />
      <Reviews sectionBg="#FFFFFF" cardBg="#F7F5F0" />
      <ShingleOptions />
      <Financing />
      <ServicesGallery
        images={RR_GALLERY_IMAGES.map(({ src, alt }) => ({ src, alt }))}
        sectionBg="#F7F5F0"
        heading={<>Roof Replacements Completed Across Cochrane, Calgary, and Canmore</>}
        subhead="Every roof in our gallery was completed by our in-house crew, Red Seal Journeyman supervised. No subcontractors, no compromises."
        ctaLabel="View Full Gallery"
        ctaHref="/gallery"
      />
      <RoofReplacementFAQ />
      <RelatedServices />
      <BottomCTA
        sectionBg="#FFFFFF"
        heading={
          <>
            Ready for a Roof Replacement
            <br className="hidden md:block" /> You Can Actually Trust?
          </>
        }
        subtext="Red Seal Journeyman certified, free written quote, 10-year workmanship guarantee in writing, and no sales pressure. The same in-house crew on every Cochrane roof."
      />
    </>
  )
}
