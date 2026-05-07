import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ShieldCheck,
  Award,
  CloudLightning,
  FileText,
  ArrowRight,
  Calendar,
  FileCheck,
  CheckCircle,
  Home,
  Wrench,
  MessageSquare,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SidingSoftMetalsHero } from '@/components/sections/SidingSoftMetalsHero'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { SidingSoftMetalsFAQ } from '@/components/sections/SidingSoftMetalsFAQ'
import { SIDING_SOFT_METALS_FAQS } from '@/lib/faqs/sidingSoftMetals'
import { HowItWorks, type HowItWorksStep } from '@/components/sections/HowItWorks'
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
      'Red Seal certified siding installation, eavestroughs, fascia, and soffit work in Cochrane, AB. Vinyl, fiber cement, and metal siding built for Alberta weather. Free written quotes, 5-year workmanship warranty.',
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
            background: '#F7F5F0',
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

// ─── Section: Our Standard (team image + numbered items) ───────────────────

const STANDARD_PILLARS = [
  {
    heading: 'Red Seal Journeyman install',
    body: 'The same in-house Red Seal crew that quotes your project installs your siding. No subcontractors, no rotating cast.',
  },
  {
    heading: 'Fixed written quote',
    body: 'Every line item priced before we start. The number on your quote is the number you pay, with zero mid-project upsells.',
  },
  {
    heading: '5-year workmanship warranty',
    body: 'Backed in writing on top of the manufacturer warranty for the materials. Both warranties are spelled out in your quote.',
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
                  Same crew, every project
                </div>
              </div>
            </div>
          </div>

          <div className="flex flex-col lg:order-2">
            <span
              className="inline-flex self-start items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
              style={{
                background: '#F7F5F0',
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
              Cochrane Siding &amp; Soft Metals
              <br className="hidden lg:block" /> By the Same Crew That Roofs You
            </h2>
            <p
              className="mt-5 max-w-[520px] text-brand-slate leading-[1.7]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              A Sure West siding project rebuilds the protective shell around your home, installed
              by Red Seal Journeymen and backed in writing for 5 years.
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

// ─── Section: What's Included ────────────────────────────────────────────────

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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="flex flex-col lg:order-1">
            <span
              className="inline-flex self-start items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
              style={{
                background: '#F7F5F0',
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

            <ul className="mt-8 flex flex-col gap-7">
              {SIDING_INCLUDED_ITEMS.map((item, i) => (
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
                alt="Sure West Roofing crew completing siding and soft metals work on a Cochrane Alberta home"
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

// ─── Section: How It Works (3-step) ──────────────────────────────────────────

const SIDING_STEPS: HowItWorksStep[] = [
  {
    number: '01',
    Icon: Calendar,
    title: 'Free On-Site Assessment',
    description:
      'We walk every elevation of your Cochrane home and review siding, fascia, soffits, and eavestroughs as one system.',
  },
  {
    number: '02',
    Icon: FileCheck,
    title: 'Approve Your Quote',
    description:
      'Fixed written quote with material choice, scope, timeline, and price. Materials ordered, install scheduled around you.',
  },
  {
    number: '03',
    Icon: CheckCircle,
    title: 'Tear-Off + New Install',
    description:
      'Old siding off, new panels and matched soft metals on, full cleanup, and your written 5-year workmanship warranty.',
  },
]

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
      className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 max-w-[720px] mx-auto">
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
    heading: 'Owner-Led on Every Project',
    body: 'Craig and Mike personally walk every elevation, brief the crew, and inspect the finish. Same names on the quote, same names on the warranty.',
  },
  {
    Icon: Home,
    heading: 'Cochrane Local, Not a Franchise',
    body: 'We live where we work. Same shops, same coffee places, same neighbours. Our reputation in this town is earned daily, not advertised.',
  },
  {
    Icon: Wrench,
    heading: 'Craft Where Crews Cut Corners',
    body: 'Panels squared up, J-channel tight, soffit ventilated properly, eaves pitched to drain. Hidden details are what fail first.',
  },
  {
    Icon: MessageSquare,
    heading: 'Communication Built In',
    body: 'Daily texts with progress photos, a tidy site at the end of each day, and a final walkthrough. You always know where the project stands.',
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
              background: '#F7F5F0',
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
            Owner-led, Cochrane-rooted, and obsessed with the details most crews skip. The reasons
            people in town pick Sure West, then tell their neighbours.
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
              className="bg-white rounded-[12px] border border-brand-border p-6 shadow-[0_2px_8px_rgba(44,71,102,0.06)] hover:-translate-y-[4px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.12)] transition-all duration-300 ease-out"
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

// ─── Overview carousel images ────────────────────────────────────────────────

// ─── Gallery images for this page ─────────────────────────────────────────────

const SSM_GALLERY_IMAGES = [
  { src: '/images/Cochrane Roofing Contractor Gallery 1.webp',  alt: 'Siding project completed by Sure West Roofing in Cochrane Alberta',     caption: 'Cochrane, AB · Siding' },
  { src: '/images/Cochrane Roofing Contractor Gallery 5.webp',  alt: 'Eavestrough installation in Cochrane Alberta by Sure West Roofing',     caption: 'Cochrane, AB · Eaves' },
  { src: '/images/Cochrane Roofing Contractor Gallery 7.webp',  alt: 'Sure West Roofing exterior project in Cochrane Alberta',                caption: 'Cochrane, AB · Exterior' },
  { src: '/images/Cochrane Roofing Contractor Gallery 9.webp',  alt: 'Soffit and fascia work in Cochrane Alberta by Sure West Roofing',       caption: 'Cochrane, AB · Trim' },
  { src: '/images/Cochrane Roofing Contractor Gallery 3.webp', alt: 'Siding and soft metals project in Calgary by Sure West Roofing',        caption: 'Calgary, AB · Siding' },
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
                background: '#F7F5F0',
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
      <TrustLogos />
      <OurStandard />
      <WhatIncluded />
      <HowItWorks
        heading={
          <>
            How a Sure West Cochrane
            <br className="hidden md:block" /> Siding Project Works
          </>
        }
        body="Three clear steps from first assessment to install complete. No hidden steps, no surprises."
        steps={SIDING_STEPS}
      />
      <Reviews sectionBg="#F7F5F0" cardBg="#FFFFFF" />
      <ServiceTypes />
      <ServicesGallery images={SSM_GALLERY_IMAGES} sectionBg="#FFFFFF" />
      <WhySureWest />
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
