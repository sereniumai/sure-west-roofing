import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Check,
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
import { RoofReplacementHero } from '@/components/sections/RoofReplacementHero'
import { RoofReplacementFAQ } from '@/components/sections/RoofReplacementFAQ'
import { RelatedServicesCarousel } from '@/components/sections/RelatedServicesCarousel'
import { ServicesGallery } from '@/components/sections/ServicesGallery'
import { Reviews } from '@/components/sections/Reviews'
import { BottomCTA } from '@/components/sections/BottomCTA'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Roof Replacement in Cochrane, AB | Sure West Roofing',
  description:
    'Red Seal certified roof replacement in Cochrane, Calgary, and Canmore. IKO shingles, 10-year workmanship warranty, honest written quotes. Get a free estimate.',
  keywords: [
    'roof replacement Cochrane',
    'roof replacement Cochrane AB',
    'new roof installation Cochrane',
    'asphalt shingle replacement Cochrane',
    'IKO shingles Cochrane',
    'roof replacement cost Cochrane',
    'roofing contractor Cochrane',
    'Red Seal roofing Cochrane',
    'roof replacement Calgary',
    'roof replacement Canmore',
    'residential roofing Cochrane',
    'impact resistant shingles Alberta',
    'architectural shingles Alberta',
    'IKO Nordic Cochrane',
    'IKO Dynasty Cochrane',
    'Sure West Roofing roof replacement',
  ],
  openGraph: {
    title: 'Roof Replacement in Cochrane, AB | Sure West Roofing',
    description:
      'Red Seal certified roof replacement in Cochrane, Calgary, and Canmore. IKO shingles, 10-year workmanship warranty, honest written quotes.',
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
    title: 'Roof Replacement in Cochrane, AB | Sure West Roofing',
    description:
      'Red Seal certified roof replacement in Cochrane, Calgary, and Canmore. IKO shingles, 10-year workmanship warranty, honest written quotes.',
    images: ['https://surewestroofing.ca/images/Roof Replacement Cochrane.avif'],
  },
  alternates: {
    canonical: 'https://surewestroofing.ca/roof-replacement',
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
      name: 'How much does a roof replacement cost in Cochrane?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most residential roof replacements in Cochrane range from $8,000 to $18,000, depending on roof size in square feet, pitch, shingle tier, and deck condition found during tear-off. We provide a detailed written quote at no charge after an on-site inspection. GST (5%) applies in Alberta, no PST. The price you approve is the price you pay.',
      },
    },
    {
      '@type': 'Question',
      name: 'How long does a roof replacement take?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Most standard single-family homes in Cochrane take one day. Larger homes, steeper pitches, or roofs with multiple dormers and penetrations take two. We confirm your timeline in writing before the job starts and never leave a roof unsecured overnight.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you tear off the old roof or install over it?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'We always do a full tear-off. Installing over old shingles can void the IKO material warranty, trap moisture, and hide deck damage that needs addressing. Every Sure West replacement starts with a complete removal so the deck can be inspected before new materials go on.',
      },
    },
    {
      '@type': 'Question',
      name: 'What time of year is best for a roof replacement in Alberta?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Late spring through early fall provides the most reliable conditions in Alberta. That said, we carry out roof replacements year-round in Cochrane where weather allows. Shingles have minimum temperature requirements for sealing, so we schedule around the forecast and will advise if timing affects your options.',
      },
    },
    {
      '@type': 'Question',
      name: 'Do you handle the insurance claim if hail caused the damage?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. If hail or wind caused the damage, we work directly with your insurance adjuster and prepare the full documentation your insurer requires. Alberta home insurance typically covers sudden storm damage. We have handled many Cochrane hail damage claims and can guide you through the process at no extra charge.',
      },
    },
    {
      '@type': 'Question',
      name: 'What happens if my roof deck is damaged?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'If we find deck damage during tear-off, we assess the extent, photograph it, and give you a transparent cost to repair before additional work proceeds. Deck repairs are billed by the square foot at a rate disclosed in your original quote. You approve before we continue.',
      },
    },
    {
      '@type': 'Question',
      name: 'Will my yard and landscaping be protected during the install?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Yes. We lay protective boards over gardens, AC units, and landscaping before tear-off begins. A magnetic nail sweep covers the full property perimeter after the job is complete. We leave the site as clean as we found it, or cleaner.',
      },
    },
    {
      '@type': 'Question',
      name: 'What warranty comes with a Sure West roof replacement?',
      acceptedAnswer: {
        '@type': 'Answer',
        text: 'Every Sure West roof replacement includes a 10-year workmanship warranty covering installation defects. The IKO shingles carry a separate manufacturer material warranty: lifetime limited on most tiers, with wind and algae coverage depending on the product chosen. Both warranties are written into your contract before we start.',
      },
    },
  ],
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

// ─── Section: Inline CTA (text + single gold button, centred) ────────────────

function InlineCTA({ headline }: { headline: string }) {
  return (
    <section
      className="bg-brand-cream py-14 md:py-16"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[720px] mx-auto text-center">
        <h3
          className="font-display text-brand-navy"
          style={{
            fontSize: 'clamp(22px, 2.6vw, 30px)',
            fontWeight: 500,
            letterSpacing: '-0.01em',
            lineHeight: 1.25,
          }}
        >
          {headline}
        </h3>
        <div className="mt-6">
          <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
            Get a Free Estimate
          </Button>
        </div>
      </div>
    </section>
  )
}

// ─── Section: What's Included ─────────────────────────────────────────────────

const INCLUDED_ITEMS = [
  'Full tear-off of old shingles, underlayment, and damaged decking',
  'Synthetic underlayment with ice-and-water shield',
  'New IKO architectural or impact-resistant shingles',
  'Full site cleanup with magnetic nail sweep',
]

function WhatIncluded() {
  return (
    <section
      className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-stretch">
          {/* Left: heading, copy, bullets, CTA */}
          <div className="flex flex-col">
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
              What&apos;s Included in a Sure West Roof Replacement
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

            <ul className="mt-8 flex flex-col gap-3 max-w-[520px]">
              {INCLUDED_ITEMS.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span
                    className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full mt-0.5"
                    style={{ background: 'rgba(212,175,96,0.18)' }}
                  >
                    <Check className="w-3 h-3 text-brand-gold" strokeWidth={2.5} />
                  </span>
                  <span
                    className="text-brand-navy leading-[1.55]"
                    style={{
                      fontSize: '15px',
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontWeight: 400,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-9">
              <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
                Get a Free Estimate
              </Button>
            </div>
          </div>

          {/* Right: photo matches left column height on desktop */}
          <div
            className="relative overflow-hidden rounded-[18px] aspect-[4/3] lg:aspect-auto lg:h-full min-h-[360px]"
            style={{
              boxShadow:
                '0 0 0 1px rgba(212,175,96,0.14), 0 20px 48px -12px rgba(44,71,102,0.20)',
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
          </div>
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
    body: 'Curling, cracking, or missing shingles across multiple slopes signal end-of-life, not a spot repair.',
  },
  {
    Icon: Droplets,
    heading: 'Granules in the gutters',
    body: 'Heavy granule loss means the shingles have lost their UV protection and are breaking down.',
  },
  {
    Icon: Eye,
    heading: 'Daylight in the attic',
    body: 'Visible daylight or water stains on the underside of the decking means the weather barrier has failed.',
  },
  {
    Icon: Home,
    heading: 'Sagging rooflines',
    body: 'Any visible sag points to structural or decking failure that a repair cannot fix.',
  },
  {
    Icon: RotateCcw,
    heading: 'Repeat leaks after repairs',
    body: 'If you have patched the same area more than once, the underlying roof system is done.',
  },
]

function SignsYouNeed() {
  return (
    <section
      className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
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
            Not every roof issue means full replacement. Here is when it does.
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
              className="bg-white rounded-[12px] border border-brand-border p-6 hover:-translate-y-[3px] hover:shadow-[0_10px_24px_rgba(44,71,102,0.09)] transition-all duration-300 ease-out"
            >
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-[8px] mb-4"
                style={{ background: 'rgba(212,175,96,0.10)' }}
              >
                <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
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

// ─── Section: Replacement Process ────────────────────────────────────────────

const PROCESS_STEPS = [
  {
    number: '01',
    Icon: Calendar,
    heading: ['Free On-Site', 'Estimate'],
    body: 'A Red Seal owner (Craig or Mike) inspects your roof, measures it, and walks you through the options. No pressure, no upsell.',
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
    body: 'Full tear-off, deck repair, and new install in a single day on most Cochrane homes. Larger or complex roofs take two days.',
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
            className="mt-5 max-w-[520px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Five steps, clearly explained. No hidden steps, no surprises.
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
                className="bg-brand-cream rounded-[14px] border border-brand-border px-5 py-7 md:px-4 md:py-8 flex flex-col items-center text-center"
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
            Shingle Options for Your Cochrane Roof Replacement
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
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
              Get a Free Estimate
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {SHINGLES.map(({ tier, name, image, imageAlt, body }) => (
            <div
              key={name}
              className="bg-white rounded-[12px] border border-brand-border flex flex-col overflow-hidden hover:-translate-y-[3px] hover:shadow-[0_10px_24px_rgba(44,71,102,0.09)] transition-all duration-300 ease-out"
            >
              {/* Shingle image */}
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

              {/* Card content */}
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
    body: 'Craig and Mike, the owners of Sure West Roofing, both hold Red Seal Journeyman certification, the recognised national trade standard. A credentialed tradesperson is on your roof, not a subcontractor.',
  },
  {
    Icon: CloudLightning,
    heading: 'Built for Alberta Weather',
    body: 'Cochrane winters, chinook swings, hailstorms, and high wind uplift require specific materials and methods. We select installation approaches suited to local freeze-thaw cycles and climate conditions.',
  },
  {
    Icon: FileText,
    heading: 'Honest Quotes, No Pressure',
    body: 'Every estimate is free, on-site, and provided in writing with itemised costs. No high-pressure tactics. If your roof does not need replacing, we will tell you that.',
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
            className="font-display font-semibold text-brand-navy"
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
            Red Seal certified owners on every job, materials built for Alberta weather, and
            warranties you can read before we start.
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
              className="bg-brand-cream rounded-[12px] border border-brand-border p-6 hover:-translate-y-[4px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.10)] transition-all duration-300 ease-out"
            >
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-[8px] mb-5"
                style={{ background: 'rgba(212,175,96,0.12)' }}
              >
                <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
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

// ─── Section: Warranty and Guarantees ────────────────────────────────────────

function WarrantyGuarantees() {
  return (
    <section
      className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
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
            Warranty
          </span>
          <h2
            className="font-display font-medium text-brand-navy"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              lineHeight: 1.15,
              letterSpacing: '-0.005em',
            }}
          >
            What&apos;s Covered After the Install
          </h2>
          <p
            className="mt-5 max-w-[580px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Two layers of written protection, every time: our workmanship and IKO&apos;s materials.
            Both terms land in your contract before the job starts.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-10 lg:gap-14 items-center max-w-[1120px] mx-auto">
          {/* Left: paperwork image */}
          <div
            className="relative overflow-hidden rounded-[18px]"
            style={{
              aspectRatio: '4 / 5',
              boxShadow:
                '0 0 0 1px rgba(212,175,96,0.14), 0 20px 48px -12px rgba(44,71,102,0.20)',
            }}
          >
            <Image
              src="/images/Cochrane Roofing Contractor Gallery 21.webp"
              alt="Sure West Roofing written warranty documents handed to a Cochrane homeowner"
              fill
              sizes="(max-width: 1024px) 100vw, 40vw"
              className="object-cover"
              loading="lazy"
            />
          </div>

          {/* Right: warranty cards */}
          <div className="flex flex-col gap-5">
            <div className="bg-white rounded-[12px] border border-brand-border p-7 md:p-8">
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-[8px] mb-5"
                style={{ background: 'rgba(212,175,96,0.12)' }}
              >
                <ShieldCheck className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
              </div>
              <h3
                className="font-display font-semibold text-brand-navy mb-3 leading-[1.2]"
                style={{ fontSize: '22px', letterSpacing: '-0.02em' }}
              >
                10-Year Workmanship Warranty
              </h3>
              <p
                className="text-brand-slate leading-[1.7]"
                style={{
                  fontSize: '15px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                Our workmanship warranty covers installation defects and workmanship issues for 10
                years from the date your roof is completed. It is standard on every replacement we
                carry out, not an optional add-on.
              </p>
            </div>

            <div className="bg-white rounded-[12px] border border-brand-border p-7 md:p-8">
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-[8px] mb-5"
                style={{ background: 'rgba(212,175,96,0.12)' }}
              >
                <Award className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
              </div>
              <h3
                className="font-display font-semibold text-brand-navy mb-3 leading-[1.2]"
                style={{ fontSize: '22px', letterSpacing: '-0.02em' }}
              >
                Manufacturer Material Warranty
              </h3>
              <p
                className="text-brand-slate leading-[1.7]"
                style={{
                  fontSize: '15px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                IKO shingles carry a lifetime limited material warranty on most tiers, with wind and
                algae resistance coverage depending on the product chosen. Specific coverage terms are
                confirmed in writing before any materials are ordered.
              </p>
            </div>
          </div>
        </div>

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
    href: '/roofing-contractor-calgary',
    detail: 'Full service across the Calgary region',
    buttonLabel: 'Roofing Contractor Calgary',
  },
  {
    name: 'Canmore',
    href: '/roofing-contractor-canmore',
    detail: 'Full service across the Bow Valley',
    buttonLabel: 'Roofing Contractor Canmore',
  },
]

function ServiceAreaCondensed() {
  return (
    <section
      className="relative bg-white overflow-hidden py-20 md:py-24"
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
            Roof Replacement Across Cochrane, Calgary, and Canmore
          </h2>
          <p
            className="mt-5 max-w-[580px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Based in Cochrane. Same Red Seal crew across Calgary and Canmore.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12 max-w-[1060px] mx-auto">
          {LOCATIONS.map(({ name, href, detail, buttonLabel }) => (
            <div key={name} className="flex flex-col items-center text-center">
              <MapPin className="w-12 h-12 text-brand-gold mb-5" strokeWidth={1.5} />
              <h3
                className="font-display font-semibold text-brand-navy leading-[1.05]"
                style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', letterSpacing: '-0.02em' }}
              >
                {name}
              </h3>
              <p
                className="mt-3 max-w-[260px] text-brand-slate leading-[1.6]"
                style={{
                  fontSize: '14px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                {detail}
              </p>
              <div className="mt-6">
                <Button variant="primary" size="md" href={href}>
                  {buttonLabel}
                </Button>
              </div>
            </div>
          ))}
        </div>
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
  { src: '/images/Cochrane Roofing Contractor Gallery 12.webp', alt: 'IKO Cambridge shingle roof replacement in Cochrane Alberta',             caption: 'Cochrane, AB · IKO Cambridge' },
  { src: '/images/Cochrane Roofing Contractor Gallery 13.webp', alt: 'IKO Dynasty roof replacement in Calgary by Sure West Roofing',           caption: 'Calgary, AB · IKO Dynasty' },
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
      <CertsBanner />
      <WhatIncluded />
      <SignsYouNeed />
      <ReplacementProcess />
      <ShingleOptions />
      <WhySureWest />
      <WarrantyGuarantees />
      <ServicesGallery images={RR_GALLERY_IMAGES} sectionBg="#FFFFFF" />
      <Reviews />
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
