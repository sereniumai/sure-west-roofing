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
  Star,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { RoofReplacementHero } from '@/components/sections/RoofReplacementHero'
import { RoofReplacementFAQ } from '@/components/sections/RoofReplacementFAQ'
import { RelatedServicesCarousel } from '@/components/sections/RelatedServicesCarousel'
import { ServicesGallery } from '@/components/sections/ServicesGallery'

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
          className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-8 text-brand-gold"
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

// ─── Section: What's Included ─────────────────────────────────────────────────

const INCLUDED_ITEMS = [
  'Full tear-off of old shingles, underlayment, and damaged decking',
  'Deck inspection and repair (charged transparently if needed)',
  'Synthetic underlayment and ice-and-water shield at eaves and valleys',
  'New IKO architectural or impact-resistant shingles',
  'New pipe boots, flashing, drip edge, and ridge vents',
  'Full site cleanup with magnetic nail sweep',
]

function WhatIncluded() {
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
            className="mt-5 max-w-[640px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Every roof replacement Cochrane homeowners book with Sure West includes the complete
            scope below, carried out by Red Seal Journeyman trades. We serve Cochrane as our home
            market, with crews also covering Calgary and Canmore.
          </p>
        </div>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-[900px] mx-auto">
          {INCLUDED_ITEMS.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 p-4 md:p-5 rounded-[10px] bg-brand-cream border border-brand-border"
            >
              <span
                className="flex-shrink-0 flex items-center justify-center w-5 h-5 rounded-full mt-0.5"
                style={{ background: 'rgba(212,175,96,0.18)' }}
              >
                <Check className="w-3 h-3 text-brand-gold" strokeWidth={2.5} />
              </span>
              <span
                className="text-brand-navy leading-[1.55]"
                style={{
                  fontSize: '14px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
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
            Signs Your Roof Needs Replacing, Not Just Repairing
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
    heading: 'Free On-Site Estimate',
    body: 'A Red Seal owner (Craig or Mike) inspects your roof, measures it, and walks you through the options. No pressure, no upsell.',
  },
  {
    number: '02',
    heading: 'Written Quote, No Surprises',
    body: 'You get a detailed written quote with shingle choice, scope, timeline, and price. Everything that could affect cost is spelled out up front.',
  },
  {
    number: '03',
    heading: 'Material Delivery and Scheduling',
    body: 'Once approved, we order materials and lock in an install date that works for you and the weather.',
  },
  {
    number: '04',
    heading: 'One-Day Install on Most Homes',
    body: 'Full tear-off, repair, and new install happens in a single day on most Cochrane homes. Larger or complex roofs take two.',
  },
  {
    number: '05',
    heading: 'Cleanup and Final Walkthrough',
    body: 'Magnetic nail sweep, site cleanup, and a walkthrough with you before we leave. Your written warranty in hand.',
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
            How a Sure West Roof Replacement Works
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
        </div>

        {/* 5-step grid */}
        <div className="relative">
          {/* Dashed connector — desktop only */}
          <div
            aria-hidden="true"
            className="hidden xl:block absolute border-t-2 border-dashed border-brand-gold/35"
            style={{ top: '28px', left: '10%', right: '10%' }}
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-6 relative z-[1]">
            {PROCESS_STEPS.map((step) => (
              <div key={step.number} className="flex flex-col items-center text-center">
                {/* Number circle */}
                <div
                  className="flex items-center justify-center w-[56px] h-[56px] rounded-full mb-5 flex-shrink-0"
                  style={{
                    background: 'rgba(212,175,96,0.10)',
                    border: '2px solid rgba(212,175,96,0.40)',
                  }}
                >
                  <span
                    className="font-display font-semibold text-brand-gold"
                    style={{ fontSize: '17px' }}
                  >
                    {step.number}
                  </span>
                </div>
                <h3
                  className="font-display font-semibold text-brand-navy mb-2 leading-[1.25]"
                  style={{ fontSize: '17px', letterSpacing: '-0.01em' }}
                >
                  {step.heading}
                </h3>
                <p
                  className="text-brand-slate leading-[1.6]"
                  style={{
                    fontSize: '13px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {step.body}
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
    imageAlt: 'IKO Cambridge architectural shingle — entry tier option by Sure West Roofing Cochrane',
    body: 'Quality architectural shingle with a strong warranty. A reliable choice for most Cochrane homes that delivers solid performance and curb appeal at a competitive price point.',
  },
  {
    tier: 'Mid Tier',
    name: 'IKO Dynasty',
    image: '/images/IKO Dynasty .webp',
    imageAlt: 'IKO Dynasty shingle — mid tier option by Sure West Roofing Cochrane',
    body: 'Heavier shingle with better curb appeal and improved wind resistance. Popular for move-up homes and properties preparing for resale, where appearance and durability matter.',
  },
  {
    tier: 'Impact Resistant',
    name: 'IKO Nordic',
    image: '/images/IKO Nordic .webp',
    imageAlt: 'IKO Nordic Class 4 impact resistant shingle — hail protection option by Sure West Roofing Cochrane',
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
            and backed by some of the strongest material warranties in the industry.
          </p>
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
                    className="inline-block text-brand-gold font-semibold uppercase tracking-[0.12em] pb-1"
                    style={{
                      fontSize: '11px',
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      borderBottom: '2px solid #D4AF60',
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
    body: 'Craig and Mike, the owners of Sure West Roofing, both hold Red Seal Journeyman certification — the highest trade credential in Canada. A credentialed tradesperson is on your roof, not a subcontractor.',
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
      className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
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
            Why Cochrane Homeowners Trust Sure West
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {DIFFERENTIATORS.map(({ Icon, heading, body }) => (
            <div
              key={heading}
              className="bg-white rounded-[12px] border border-brand-border p-6 hover:-translate-y-[4px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.10)] transition-all duration-300 ease-out"
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-[960px] mx-auto">
          {/* Workmanship warranty */}
          <div className="bg-brand-cream rounded-[12px] border border-brand-border p-7 md:p-8">
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

          {/* Manufacturer warranty */}
          <div className="bg-brand-cream rounded-[12px] border border-brand-border p-7 md:p-8">
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

        <p
          className="text-center mt-8 text-brand-slate font-semibold"
          style={{
            fontSize: '15px',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
          }}
        >
          Both warranties are written into your contract. Nothing verbal, nothing implied.
        </p>
      </div>
    </section>
  )
}

// ─── Section: Service Area ────────────────────────────────────────────────────

const LOCATIONS = [
  { name: 'Cochrane', href: '/', detail: 'Home base · Primary market' },
  { name: 'Calgary', href: '/roofing-contractor-calgary', detail: 'Full service area' },
  { name: 'Canmore', href: '/roofing-contractor-canmore', detail: 'Full service area' },
]

function ServiceAreaCondensed() {
  return (
    <section
      className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-10 max-w-[720px] mx-auto">
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
            Sure West is based in Cochrane but carries out roof replacements across the full Calgary
            region. Same crew, same Red Seal standard, wherever you are in southern Alberta.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-[640px] mx-auto">
          {LOCATIONS.map(({ name, href, detail }) => (
            <Link
              key={name}
              href={href}
              className="flex-1 flex flex-col items-center gap-2 bg-white rounded-[12px] border border-brand-border p-5 hover:-translate-y-[3px] hover:shadow-[0_10px_24px_rgba(44,71,102,0.09)] hover:border-brand-gold transition-all duration-300 ease-out"
            >
              <div
                className="flex items-center justify-center w-10 h-10 rounded-full"
                style={{ background: 'rgba(212,175,96,0.10)' }}
              >
                <MapPin className="w-4.5 h-4.5 text-brand-gold" strokeWidth={1.5} />
              </div>
              <span
                className="font-display font-semibold text-brand-navy leading-[1.2]"
                style={{ fontSize: '18px', letterSpacing: '-0.01em' }}
              >
                {name}
              </span>
              <span
                className="text-brand-slate"
                style={{
                  fontSize: '12px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                {detail}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section: Gallery images for this page ───────────────────────────────────

const RR_GALLERY_IMAGES = [
  { src: '/images/Cochrane Roofing Contractor Gallery 3.webp',  alt: 'IKO Nordic roof replacement completed in Cochrane Alberta' },
  { src: '/images/Cochrane Roofing Contractor Gallery 7.webp',  alt: 'Roof replacement project Cochrane Alberta Sure West Roofing' },
  { src: '/images/Cochrane Roofing Contractor Gallery 8.webp',  alt: 'Completed shingle roof replacement Cochrane AB' },
  { src: '/images/Cochrane Roofing Contractor Gallery 10.webp', alt: 'Sure West Roofing completed roof replacement Calgary region' },
  { src: '/images/Cochrane Roofing Contractor Gallery 12.webp', alt: 'IKO shingle roof replacement Cochrane Alberta' },
  { src: '/images/Cochrane Roofing Contractor Gallery 13.webp', alt: 'Residential roof replacement by Sure West Roofing Cochrane' },
]

// ─── Section: Testimonials ────────────────────────────────────────────────────

const TESTIMONIALS = [
  {
    quote:
      'Sure West did an outstanding job replacing my roof from start to finish. Professional, punctual, and incredibly thorough. The quality of their work is top-notch and they left my property spotless after the job was done.',
    author: 'Steve LeNeveu',
    location: 'Cochrane, AB',
  },
  {
    quote:
      'Very professional and responsive team. From the time I called for a quote to when the last shingle was installed I was impressed by the quality of the team and the service provided. The site was left clean every day and the end product looks great.',
    author: 'Greg Barsi',
    location: 'Cochrane, AB',
  },
  {
    quote:
      'Sure West Roofing is a serious and professional company. They are 100% reliable. The crew\u2019s professionalism, courtesy, punctuality, and efficiency made a positive difference. We are very happy with the job they did and fully recommend them.',
    author: 'Elizabeth Montes Garces',
    location: 'Cochrane, AB',
  },
]

function ReplacementTestimonials() {
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
            Client Reviews
          </span>
          <h2
            className="font-display font-medium text-brand-navy"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              lineHeight: 1.15,
              letterSpacing: '-0.005em',
            }}
          >
            What Cochrane Homeowners Say About Their New Roof
          </h2>

          <div className="mt-6 inline-flex items-center gap-3">
            <span className="flex items-center gap-[3px]" aria-label="5 out of 5 stars">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className="w-[15px] h-[15px]"
                  style={{ color: '#D4AF60', fill: '#D4AF60' }}
                  strokeWidth={0}
                />
              ))}
            </span>
            <span
              className="font-display font-semibold text-brand-navy"
              style={{ fontSize: '15px', letterSpacing: '-0.01em' }}
            >
              5.0
            </span>
            <span
              aria-hidden="true"
              className="inline-block w-1 h-1 rounded-full bg-brand-navy/30"
            />
            <span
              className="text-brand-slate"
              style={{ fontSize: '14px', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              80+ Google reviews
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {TESTIMONIALS.map(({ quote, author, location }) => (
            <div
              key={author}
              className="bg-white rounded-[12px] border border-brand-border p-6 md:p-7"
              style={{ boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}
            >
              <div className="flex items-center gap-[3px] mb-4" aria-label="5 out of 5 stars">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-[14px] h-[14px]"
                    style={{ color: '#D4AF60', fill: '#D4AF60' }}
                    strokeWidth={0}
                  />
                ))}
              </div>
              <p
                className="text-brand-navy leading-[1.6] flex-1"
                style={{
                  fontSize: '14px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                &ldquo;{quote}&rdquo;
              </p>
              <div className="mt-5 pt-4 border-t border-brand-border">
                <div
                  className="text-brand-navy font-semibold"
                  style={{ fontSize: '14px', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  {author}
                </div>
                <div
                  className="mt-0.5 text-brand-slate"
                  style={{ fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                >
                  {location}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

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

// ─── Section: Final CTA ───────────────────────────────────────────────────────

function ReplacementFinalCTA() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: 'var(--brand-navy, #2C4766)',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      {/* Gold top accent */}
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0"
        style={{ height: '3px', background: '#D4AF60' }}
      />

      {/* Subtle background pattern */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 80% at 50% 100%, rgba(212,175,96,0.08) 0%, transparent 70%)',
        }}
      />

      <div className="relative z-10 max-w-[800px] mx-auto text-center">
        <h2
          className="font-display font-semibold text-white"
          style={{
            fontSize: 'clamp(32px, 4.5vw, 52px)',
            lineHeight: 1.1,
            letterSpacing: '-0.025em',
          }}
        >
          Ready for a Roof Replacement
          <br className="hidden md:block" /> You Can Actually Trust?
        </h2>
        <p
          className="mt-6 leading-[1.7]"
          style={{
            fontSize: '17px',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontWeight: 400,
            color: 'rgba(255,255,255,0.65)',
          }}
        >
          Red Seal certified, free estimate, 10-year workmanship warranty, and no sales pressure.
          Book yours today.
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
          <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
            Get a Free Estimate
          </Button>
          <Button variant="ghost" size="lg" href="tel:4039907210">
            Call 403-990-7210
          </Button>
        </div>
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
      <ServiceAreaCondensed />
      <ServicesGallery images={RR_GALLERY_IMAGES} />
      <ReplacementTestimonials />
      <RoofReplacementFAQ />
      <RelatedServices />
      <ReplacementFinalCTA />
    </>
  )
}
