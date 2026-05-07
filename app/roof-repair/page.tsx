import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Droplets,
  Wind,
  AlertTriangle,
  Sun,
  Eye,
  RotateCcw,
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
import { RoofRepairHero } from '@/components/sections/RoofRepairHero'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { RoofRepairFAQ } from '@/components/sections/RoofRepairFAQ'
import { ROOF_REPAIR_FAQS } from '@/lib/faqs/roofRepair'
import { HowItWorks, type HowItWorksStep } from '@/components/sections/HowItWorks'
import { RelatedServicesCarousel } from '@/components/sections/RelatedServicesCarousel'
import { ServicesGallery } from '@/components/sections/ServicesGallery'
import { Reviews } from '@/components/sections/Reviews'
import { ServiceAreasPins } from '@/components/sections/ServiceAreasPins'
import { BottomCTA } from '@/components/sections/BottomCTA'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Roof Repair Cochrane',
  description:
    'Red Seal certified roof repair in Cochrane, AB. Leak repair, shingle replacement, flashing fixes, and storm damage. Fixed written quotes, 2-year workmanship warranty, fast turnaround.',
  alternates: {
    canonical: 'https://surewestroofing.ca/roof-repair',
  },
  openGraph: {
    title: 'Roof Repair Cochrane | Sure West Roofing',
    description:
      'Red Seal certified roof repair in Cochrane, AB. Leak repair, shingle replacement, flashing fixes, and storm damage. Fixed written quotes, 2-year workmanship warranty, fast turnaround.',
    url: 'https://surewestroofing.ca/roof-repair',
    type: 'website',
    locale: 'en_CA',
    images: [
      {
        url: 'https://surewestroofing.ca/images/Roof Repair Cochrane.avif',
        width: 1200,
        height: 630,
        alt: 'Sure West Roofing Red Seal Journeyman completing a roof repair in Cochrane Alberta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Repair Cochrane | Sure West Roofing',
    description:
      'Red Seal certified roof repair in Cochrane, AB. Fast diagnosis, fixed quotes, real warranty.',
    images: ['https://surewestroofing.ca/images/Roof Repair Cochrane.avif'],
  },
}

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://surewestroofing.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://surewestroofing.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'Roof Repair', item: 'https://surewestroofing.ca/roof-repair' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Roof Repair',
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
  url: 'https://surewestroofing.ca/roof-repair',
  description:
    'Red Seal certified residential roof repair in Cochrane, Calgary, and Canmore. Leak repair, shingle replacement, flashing rebuilds, and storm damage. 2-year workmanship warranty.',
  offers: {
    '@type': 'Offer',
    priceCurrency: 'CAD',
    priceRange: '$350-$1500',
  },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: ROOF_REPAIR_FAQS.map((f) => ({
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

// ─── Section: Our Standard (team image + numbered items) ───────────────────

const STANDARD_PILLARS = [
  {
    heading: 'Red Seal Journeyman repair',
    body: 'The same in-house Red Seal crew that diagnoses your leak completes the fix. No subcontractors, no rotating cast.',
  },
  {
    heading: 'Fixed written quote',
    body: 'Diagnostic and repair priced before we start. The number on your quote is the number you pay, with zero mid-job upsells.',
  },
  {
    heading: '2-year workmanship warranty',
    body: 'Backed in writing on the repaired area. If the leak returns to that spot inside the window, we come back and fix it.',
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
              Cochrane Roof Repair
              <br className="hidden lg:block" /> Traced to the Source
            </h2>
            <p
              className="mt-5 max-w-[520px] text-brand-slate leading-[1.7]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              A Sure West Cochrane roof repair finds the leak&apos;s true source, fixes it with
              IKO-matched materials, and seals it for good. Red Seal installed and backed in
              writing for 2 years.
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

// ─── Section: What's Included (accordion) ────────────────────────────────────

const REPAIR_INCLUDED_ITEMS = [
  {
    heading: 'Full diagnostic inspection of the leak source',
    body:
      'Cochrane roof leaks rarely show where they start. We trace the water to the entry point and fix the cause, not the symptom.',
  },
  {
    heading: 'Targeted repair using IKO-matched materials',
    body:
      'IKO-grade shingles, underlayment, and flashing matched to your existing roof. No mismatched patches.',
  },
  {
    heading: 'Written 2-year workmanship warranty',
    body:
      'Backed in writing for 2 years. If the leak returns to the repaired spot inside that window, we come back and fix it.',
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
              West Roof Repair
            </h2>
            <p
              className="mt-5 max-w-[520px] text-brand-slate leading-[1.7]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              Every Sure West roof repair is carried out by our Red Seal Journeyman crew. Serving
              Cochrane, Calgary, and Canmore.
            </p>

            <ul className="mt-8 flex flex-col gap-7">
              {REPAIR_INCLUDED_ITEMS.map((item, i) => (
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
                alt="Sure West Roofing crew completing a roof repair on a Cochrane Alberta home"
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

// ─── Section: Signs You Need a Roof Repair ───────────────────────────────────

const SIGNS = [
  {
    Icon: Droplets,
    heading: 'Active leak in attic or ceiling',
    body: 'A wet stain on your ceiling or visible water in the attic means moisture is already inside. Repair quickly to stop drywall, insulation, and framing damage from spreading.',
  },
  {
    Icon: Wind,
    heading: 'Missing or lifted shingles',
    body: 'Cochrane Chinook winds can lift or strip shingles in a single storm. Even a few missing tabs leave the underlayment exposed and need fast repair before the next weather event.',
  },
  {
    Icon: AlertTriangle,
    heading: 'Damaged flashing around chimney or vents',
    body: 'Most Cochrane roof leaks start at the flashing, not the shingles. Lifted, rusted, or cracked flashing around chimneys, vents, and skylights is the single most common repair we make.',
  },
  {
    Icon: Sun,
    heading: 'Cracked or peeling sealant',
    body: 'Caulking and roof sealant break down under Alberta UV in 5 to 10 years. Cracks around penetrations and pipe boots are an easy and affordable repair if caught early.',
  },
  {
    Icon: Eye,
    heading: 'Daylight visible through gaps',
    body: 'Daylight visible through the roof deck from inside the attic means the weather barrier has a hole. Locate it, patch it, and reinforce the underlayment before water finds the same path.',
  },
  {
    Icon: RotateCcw,
    heading: 'Granule buildup in gutters',
    body: 'Some granules in the gutter are normal after a rainstorm. Heavy or repeated buildup means a localized shingle is breaking down and should be replaced before it fails entirely.',
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
            Signs Your Cochrane Roof
            <br />
            Needs a Repair
          </h2>
          <p
            className="mt-5 max-w-[560px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Most Cochrane roof issues are repairable when caught early. Here are the common signs
            it is time to call.
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
              className="bg-brand-cream rounded-[12px] border border-brand-border p-6 shadow-[0_2px_8px_rgba(44,71,102,0.06)] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.12)] transition-all duration-300 ease-out"
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

// ─── Section: How It Works (3-step) ──────────────────────────────────────────

const REPAIR_STEPS: HowItWorksStep[] = [
  {
    number: '01',
    Icon: Calendar,
    title: 'Free Diagnostic',
    description:
      'A Red Seal Journeyman traces the leak back to its true source on your Cochrane home and writes a fixed quote on the spot.',
  },
  {
    number: '02',
    Icon: FileCheck,
    title: 'Approve Your Quote',
    description:
      'Your quote is fixed. Active leaks get tarped same day. Repair date locked in around your schedule.',
  },
  {
    number: '03',
    Icon: CheckCircle,
    title: 'Your Repair, Done Right',
    description:
      'Targeted repair using IKO-matched materials, full site cleanup, and your written 2-year workmanship warranty in writing.',
  },
]

// ─── Section: Common Repair Types ────────────────────────────────────────────

const REPAIR_TYPES = [
  {
    tier: 'Most Common',
    name: 'Leak Repair',
    image: '/images/Cochrane Roofing Contractor Gallery 14.webp',
    imageAlt: 'Cochrane roof leak repair completed by Sure West Roofing',
    body: 'Active leak diagnosis and repair. We trace the water back to the true entry point, replace the failed materials, and reseal the area. Most single-leak repairs are completed in under a day.',
  },
  {
    tier: 'Storm Damage',
    name: 'Shingle Replacement',
    image: '/images/Cochrane Roofing Contractor Gallery 6.webp',
    imageAlt: 'Replacement shingles installed on a Cochrane Alberta roof',
    body: 'Replacement of missing, lifted, cracked, or hail-damaged shingles using matched IKO product. Common after Cochrane Chinook windstorms and summer hail events. Insurance-friendly documentation included.',
  },
  {
    tier: 'Critical',
    name: 'Flashing & Penetration Repair',
    image: '/images/Cochrane Roofing Contractor Gallery 19.webp',
    imageAlt: 'Roof flashing rebuild around a chimney in Cochrane Alberta',
    body: 'Rebuild and reseal of flashing around chimneys, vents, skylights, and pipe boots. The most common source of roof leaks in Cochrane and the highest-impact repair we make.',
  },
]

function RepairTypes() {
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
            Repair Types
          </span>
          <h2
            className="font-display font-medium text-brand-navy"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              lineHeight: 1.15,
              letterSpacing: '-0.005em',
            }}
          >
            Common Roof Repairs in Cochrane
          </h2>
          <p
            className="mt-5 max-w-[600px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Most Cochrane roof issues fall into one of three categories. Sure West handles all
            three using matched IKO materials and a 2-year workmanship warranty.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
              Get a Free Estimate
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {REPAIR_TYPES.map(({ tier, name, image, imageAlt, body }) => (
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
    heading: 'Owner-Led on Every Repair',
    body: 'Craig and Mike personally diagnose every leak, brief the crew, and inspect the finished fix. Same names on the quote, same names on the warranty.',
  },
  {
    Icon: Home,
    heading: 'Cochrane Local, Not a Franchise',
    body: 'We live where we work. Same shops, same coffee places, same neighbours. Our reputation in this town is earned daily, not advertised.',
  },
  {
    Icon: Wrench,
    heading: 'Craft Where Crews Cut Corners',
    body: 'Flashing tied by hand, underlayment lapped properly, shingles colour-matched. Hidden details are what fail first.',
  },
  {
    Icon: MessageSquare,
    heading: 'Communication Built In',
    body: 'Photos and notes from the diagnostic, a clear written quote, and updates while we work. You always know what we found and what we are fixing.',
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
            Why Cochrane Homeowners
            <br />
            Trust Sure West for Repairs
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


// ─── Gallery images for this page (different mix from /roof-replacement) ─────

const RR_GALLERY_IMAGES = [
  { src: '/images/Cochrane Roofing Contractor Gallery 4.webp',  alt: 'Roof repair completed by Sure West Roofing in Cochrane Alberta',     caption: 'Cochrane, AB · Repair' },
  { src: '/images/Cochrane Roofing Contractor Gallery 6.webp',  alt: 'Replacement shingles installed during a Cochrane roof repair',       caption: 'Cochrane, AB · Repair' },
  { src: '/images/Cochrane Roofing Contractor Gallery 12.webp', alt: 'Cochrane roof repair with matched IKO Cambridge shingles',           caption: 'Cochrane, AB · Repair' },
  { src: '/images/Cochrane Roofing Contractor Gallery 13.webp', alt: 'Roof repair completed in Calgary by Sure West Roofing',              caption: 'Calgary, AB · Repair' },
  { src: '/images/Cochrane Roofing Contractor Gallery 14.webp', alt: 'Roof leak repair on a Cochrane Alberta home',                        caption: 'Cochrane, AB · Leak Repair' },
  { src: '/images/Cochrane Roofing Contractor Gallery 15.webp', alt: 'Flashing rebuild around a chimney in Cochrane Alberta',              caption: 'Cochrane, AB · Flashing' },
  { src: '/images/Cochrane Roofing Contractor Gallery 16.webp', alt: 'Cochrane roof repair completed by Sure West Roofing',                caption: 'Cochrane, AB · Repair' },
  { src: '/images/Cochrane Roofing Contractor Gallery 19.webp', alt: 'Detailed roof repair work by Sure West Roofing Cochrane',            caption: 'Cochrane, AB · Repair' },
  { src: '/images/Cochrane Roofing Contractor Gallery 20.webp', alt: 'Storm damage roof repair in Calgary by Sure West Roofing',           caption: 'Calgary, AB · Storm' },
  { src: '/images/Cochrane Roofing Contractor Gallery 21.webp', alt: 'Roof repair documentation for insurance in Cochrane',                caption: 'Cochrane, AB · Repair' },
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

        <RelatedServicesCarousel exclude="/roof-repair" />
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function RoofRepairPage() {
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

      <RoofRepairHero />
      <TrustLogos />
      <OurStandard />
      <WhatIncluded />
      <HowItWorks
        heading={
          <>
            How a Sure West Cochrane
            <br className="hidden md:block" /> Roof Repair Works
          </>
        }
        body="Three clear steps from first call to repair complete, every stage in writing before we start."
        steps={REPAIR_STEPS}
        sectionBg="#FFFFFF"
        cardBg="#FFFFFF"
      />
      <Reviews sectionBg="#F7F5F0" cardBg="#FFFFFF" />
      <SignsYouNeed />
      <RepairTypes />
      <ServicesGallery images={RR_GALLERY_IMAGES} sectionBg="#FFFFFF" />
      <WhySureWest />
      <ServiceAreasPins
        heading={'Roof Repair Across Cochrane,\n Calgary, and Canmore'}
        subhead="Based in Cochrane. Same Red Seal crew across Calgary and Canmore."
      />
      <RoofRepairFAQ />
      <RelatedServices />
      <BottomCTA
        heading={
          <>
            Need a Roof Repair
            <br className="hidden md:block" /> You Can Actually Trust?
          </>
        }
        subtext="Red Seal certified, free diagnostic, 2-year workmanship warranty, and no sales pressure. Get yours scheduled."
      />
    </>
  )
}
