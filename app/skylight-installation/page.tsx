import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Moon,
  ShieldCheck,
  Award,
  FileText,
  ArrowRight,
  Calendar,
  FileCheck,
  CheckCircle,
  Square,
  Home,
  Wrench,
  MessageSquare,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SkylightInstallationHero } from '@/components/sections/SkylightInstallationHero'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { ServiceFAQ } from '@/components/sections/ServiceFAQ'
import { HowItWorks, type HowItWorksStep } from '@/components/sections/HowItWorks'
import { RelatedServicesCarousel } from '@/components/sections/RelatedServicesCarousel'
import { ServicesGallery } from '@/components/sections/ServicesGallery'
import { Reviews } from '@/components/sections/Reviews'
import { ServiceAreasPins } from '@/components/sections/ServiceAreasPins'
import { BottomCTA } from '@/components/sections/BottomCTA'
import { SKYLIGHT_INSTALLATION_FAQS } from '@/lib/faqs/skylightInstallation'

export const metadata: Metadata = {
  title: 'Skylight Installation Cochrane',
  description:
    'Red Seal certified skylight installation in Cochrane, AB. Velux and Fakro fixed, vented, and solar-powered skylights. 5-year leak warranty, permit handled. Serving Cochrane, Calgary, and Canmore.',
  alternates: { canonical: 'https://surewestroofing.ca/skylight-installation' },
  openGraph: {
    title: 'Skylight Installation Cochrane | Sure West Roofing',
    description:
      'Red Seal certified skylight installation in Cochrane, AB. Velux and Fakro fixed, vented, and solar-powered skylights. 5-year leak warranty, permit handled. Serving Cochrane, Calgary, and Canmore.',
    url: 'https://surewestroofing.ca/skylight-installation',
    type: 'website',
    locale: 'en_CA',
    images: [
      {
        url: 'https://surewestroofing.ca/images/Cochrane Roofing Contractor Gallery 13.webp',
        width: 1200,
        height: 630,
        alt: 'Velux skylight installation by Sure West Roofing on a Cochrane Alberta home',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skylight Installation Cochrane | Sure West Roofing',
    description: 'Red Seal certified Velux and Fakro skylight installation in Cochrane, AB.',
    images: ['https://surewestroofing.ca/images/Cochrane Roofing Contractor Gallery 13.webp'],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://surewestroofing.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://surewestroofing.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'Skylight Installation', item: 'https://surewestroofing.ca/skylight-installation' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Skylight Installation',
  provider: {
    '@type': 'RoofingContractor',
    name: 'Sure West Roofing',
    url: 'https://surewestroofing.ca',
    telephone: '+14039907210',
    address: { '@type': 'PostalAddress', addressLocality: 'Cochrane', addressRegion: 'AB', addressCountry: 'CA' },
  },
  areaServed: [
    { '@type': 'City', name: 'Cochrane' },
    { '@type': 'City', name: 'Calgary' },
    { '@type': 'City', name: 'Canmore' },
  ],
  url: 'https://surewestroofing.ca/skylight-installation',
  description:
    'Red Seal certified skylight installation in Cochrane, Calgary, and Canmore. Velux and Fakro fixed, vented, and solar-powered skylights with a 5-year leak warranty.',
  offers: { '@type': 'Offer', priceCurrency: 'CAD', priceRange: '$2500-$5500' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: SKYLIGHT_INSTALLATION_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.question,
    acceptedAnswer: { '@type': 'Answer', text: f.answer },
  })),
}

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
    <section className="bg-white py-10 md:py-14"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
      aria-label="Certifications and accreditations">
      <div className="max-w-[1320px] mx-auto flex flex-col items-center">
        <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
          style={{ background: '#F7F5F0', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
          Certified &amp; Accredited
        </span>
        <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
          {CERT_LOGOS.map((logo) => (
            <li key={logo.src} className="flex items-center justify-center h-[52px]">
              <Image src={logo.src} alt={logo.alt} width={130} height={52} sizes="130px" quality={80} loading="lazy" className="h-full w-auto object-contain" />
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
    body: 'A credentialed Red Seal tradesperson cuts, frames, and flashes every skylight. No subcontractors, no rotating cast.',
  },
  {
    heading: 'Permit + manufacturer flashing',
    body: 'Town of Cochrane permit handled by us. Velux or Fakro flashing kit installed exactly as specified, where most skylight leaks fail.',
  },
  {
    heading: '5-year leak warranty',
    body: 'Backed in writing on the flashing and integration. If it leaks at the perimeter inside the warranty term, we come back.',
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
                  Same crew, every install
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
              Cochrane Skylight Installation
              <br className="hidden lg:block" /> Velux &amp; Fakro, Permit Handled
            </h2>
            <p
              className="mt-5 max-w-[520px] text-brand-slate leading-[1.7]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              A Sure West Cochrane skylight is installed with the manufacturer flashing kit, by Red
              Seal Journeymen, and backed in writing for 5 years.
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

const SKYLIGHT_INCLUDED_ITEMS = [
  {
    heading: 'Cut and frame the new opening to spec',
    body:
      'A Red Seal Journeyman cuts the rough opening in the roof deck and frames it to the manufacturer\u2019s spec. Rafter cuts are reinforced before any weather-side work begins.',
  },
  {
    heading: 'Install with manufacturer step flashing',
    body:
      'Velux or Fakro skylight is set into the opening with the manufacturer\u2019s step flashing kit and ice-and-water shield around the perimeter. This is where most skylight leaks fail.',
  },
  {
    heading: 'Interior trim, finish, and 5-year leak warranty',
    body:
      'Interior trim and drywall return finished to a paint-ready state. You receive a written 5-year leak warranty and the manufacturer warranty paperwork at handover.',
  },
]

function WhatIncluded() {
  return (
    <section className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          <div className="flex flex-col lg:order-1">
            <span className="inline-flex self-start items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
              style={{ background: '#F7F5F0', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
              What&apos;s Included
            </span>
            <h2 className="font-display font-medium text-brand-navy"
              style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
              What&apos;s Included in a Sure
              <br />
              West Skylight Install
            </h2>
            <p className="mt-5 max-w-[520px] text-brand-slate leading-[1.7]"
              style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
              Every Sure West skylight installation is carried out by our Red Seal Journeyman crew.
              Serving Cochrane, Calgary, and Canmore.
            </p>

            <ul className="mt-8 flex flex-col gap-7">
              {SKYLIGHT_INCLUDED_ITEMS.map((item, i) => (
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
                alt="Skylight flashing detail by Sure West Roofing on a Cochrane Alberta home"
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
                  Permit, scope, and warranty
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const SKYLIGHT_STEPS: HowItWorksStep[] = [
  {
    number: '01',
    Icon: Calendar,
    title: 'Free Design Consultation',
    description:
      'A Red Seal Journeyman reviews your Cochrane room, confirms skylight type and size, and writes a fixed quote on the spot.',
  },
  {
    number: '02',
    Icon: FileCheck,
    title: 'Permit + Order',
    description:
      'We file the Town of Cochrane permit and order your Velux or Fakro skylight. Lead time is typically 2 to 3 weeks.',
  },
  {
    number: '03',
    Icon: CheckCircle,
    title: 'One-Day Install',
    description:
      'Cut, frame, install, flash, and integrate with shingles. Interior trim finished and your 5-year leak warranty handed over.',
  },
]

const SKYLIGHT_TYPES = [
  { tier: 'Entry Tier', name: 'Fixed Skylights', image: '/images/Cochrane Roofing Contractor Gallery 1.webp', imageAlt: 'Fixed skylight installed in a Cochrane Alberta home', body: 'Daylight only, no opening mechanism. The simplest, most affordable option, and the most leak-resistant by design. Best for living rooms, hallways, and stairwells.' },
  { tier: 'Mid Tier', name: 'Vented Skylights', image: '/images/Cochrane Roofing Contractor Gallery 4.webp', imageAlt: 'Manually-vented skylight in a Cochrane bathroom', body: 'Manually-operated opening for fresh air and moisture release. Ideal for Cochrane bathrooms and kitchens where ventilation is as important as light.' },
  { tier: 'Premium', name: 'Solar-Powered Smart', image: '/images/Cochrane Roofing Contractor Gallery 14.webp', imageAlt: 'Solar-powered Velux skylight on a Cochrane home', body: 'Solar-charged automatic opening with rain sensor close. Velux and Fakro both offer this tier with 10-year manufacturer warranty and rooftop charging.' },
]

function SkylightTypes() {
  return (
    <section className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 max-w-[720px] mx-auto">
          <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#F7F5F0', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
            Skylight Types
          </span>
          <h2 className="font-display font-medium text-brand-navy"
            style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
            Three Skylight Types for Your Cochrane Home
          </h2>
          <p className="mt-5 max-w-[600px] text-brand-slate leading-[1.7]"
            style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
            Sure West installs Velux and Fakro skylights exclusively. All three tiers come with
            manufacturer warranty plus our 5-year leak warranty.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">Get a Free Estimate</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {SKYLIGHT_TYPES.map(({ tier, name, image, imageAlt, body }) => (
            <div key={name} className="bg-white rounded-[12px] border border-brand-border flex flex-col overflow-hidden shadow-[0_2px_8px_rgba(44,71,102,0.06)] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.12)] transition-all duration-300 ease-out">
              <div className="relative flex-shrink-0" style={{ height: '200px' }}>
                <Image src={image} alt={imageAlt} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover" loading="lazy" />
              </div>
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <span className="inline-block text-brand-gold font-semibold uppercase tracking-[0.12em]" style={{ fontSize: '11px', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>{tier}</span>
                </div>
                <h3 className="font-display font-semibold text-brand-navy mb-4 leading-[1.2]" style={{ fontSize: '24px', letterSpacing: '-0.02em' }}>{name}</h3>
                <p className="text-brand-slate leading-[1.65] flex-1" style={{ fontSize: '14px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>{body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const DIFFERENTIATORS = [
  { Icon: Award, heading: 'Owner-Led on Every Install', body: 'Craig and Mike personally walk every Cochrane skylight job, brief the crew, and inspect the flashing. Same names on the quote, same names on the warranty.' },
  { Icon: Home, heading: 'Cochrane Local, Not a Franchise', body: 'We live where we work. Same shops, same coffee places, same neighbours. Our reputation in this town is earned daily, not advertised.' },
  { Icon: Wrench, heading: 'Craft Where Crews Cut Corners', body: 'Manufacturer flashing kits installed exactly as specified, ice-and-water shield around the perimeter, interior trim finished paint-ready. Hidden details are what fail first.' },
  { Icon: MessageSquare, heading: 'Communication Built In', body: 'We handle the Town of Cochrane permit, order the unit, and confirm the install date. You always know where the project stands.' },
]

function WhySureWest() {
  return (
    <section className="relative bg-brand-cream overflow-hidden py-20 md:py-24" style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-[720px] mx-auto">
          <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#F7F5F0', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
            Why Sure West
          </span>
          <h2 className="font-display font-medium text-brand-navy" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
            Why Cochrane Homeowners
            <br />
            Trust Sure West for Skylights
          </h2>
          <p className="mt-5 max-w-[580px] text-brand-slate leading-[1.7]" style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
            Owner-led, Cochrane-rooted, and obsessed with the details most crews skip. The reasons people in town pick Sure West, then tell their neighbours.
          </p>
          <div className="mt-7">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">Get a Free Estimate</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {DIFFERENTIATORS.map(({ Icon, heading, body }) => (
            <div key={heading} className="bg-white rounded-[12px] border border-brand-border p-6 shadow-[0_2px_8px_rgba(44,71,102,0.06)] hover:-translate-y-[4px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.12)] transition-all duration-300 ease-out">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-[8px] mb-5" style={{ background: 'rgba(212,175,96,0.12)' }}>
                <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.75} />
              </div>
              <h3 className="font-display font-semibold text-brand-navy mb-3 leading-[1.25]" style={{ fontSize: '20px', letterSpacing: '-0.01em' }}>{heading}</h3>
              <p className="text-brand-slate leading-[1.65]" style={{ fontSize: '14px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const SKYLIGHT_GALLERY_IMAGES = [
  { src: '/images/Cochrane Roofing Contractor Gallery 1.webp',  alt: 'Velux fixed skylight installed by Sure West Roofing in Cochrane',     caption: 'Cochrane, AB · Fixed Skylight' },
  { src: '/images/Cochrane Roofing Contractor Gallery 4.webp',  alt: 'Vented skylight installed in a Cochrane bathroom',                    caption: 'Cochrane, AB · Vented' },
  { src: '/images/Cochrane Roofing Contractor Gallery 7.webp',  alt: 'Skylight installation completed in Calgary',                          caption: 'Calgary, AB · Skylight' },
  { src: '/images/Cochrane Roofing Contractor Gallery 13.webp', alt: 'Velux skylight installation in Calgary by Sure West Roofing',         caption: 'Calgary, AB · Velux' },
  { src: '/images/Cochrane Roofing Contractor Gallery 14.webp', alt: 'Solar-powered skylight installed on a Cochrane home',                 caption: 'Cochrane, AB · Solar-Powered' },
  { src: '/images/Cochrane Roofing Contractor Gallery 15.webp', alt: 'Skylight flashing detail in Cochrane Alberta',                        caption: 'Cochrane, AB · Flashing' },
  { src: '/images/Cochrane Roofing Contractor Gallery 3.webp', alt: 'Detailed skylight perimeter flashing in Cochrane',                    caption: 'Cochrane, AB · Detail' },
  { src: '/images/Cochrane Roofing Contractor Gallery 20.webp', alt: 'Skylight replacement project in Calgary by Sure West Roofing',       caption: 'Calgary, AB · Replacement' },
  { src: '/images/Cochrane Roofing Contractor Gallery 21.webp', alt: 'Fakro skylight install with written warranty in Cochrane',           caption: 'Cochrane, AB · Fakro' },
  { src: '/images/Cochrane Roofing Contractor Gallery 22.webp', alt: 'Completed skylight installation in Cochrane Alberta',                 caption: 'Cochrane, AB · Completed' },
]

function RelatedServices() {
  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-24" style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <div>
            <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-5 text-brand-gold"
              style={{ background: '#F7F5F0', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
              More Services
            </span>
            <h2 className="font-display font-medium text-brand-navy" style={{ fontSize: 'clamp(28px, 3.5vw, 42px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
              Other Roofing Services We Offer
            </h2>
          </div>
          <Link href="/services" className="flex-shrink-0 inline-flex items-center gap-1.5 text-brand-gold font-semibold hover:text-[#B8943F] transition-colors duration-200"
            style={{ fontSize: '13px', fontFamily: 'var(--font-inter), system-ui, sans-serif', textDecoration: 'underline', textUnderlineOffset: '3px' }}>
            View all services
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
          </Link>
        </div>

        <RelatedServicesCarousel exclude="/skylight-installation" />
      </div>
    </section>
  )
}

export default function SkylightInstallationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SkylightInstallationHero />
      <TrustLogos />
      <OurStandard />
      <WhatIncluded />
      <HowItWorks
        heading={
          <>
            How a Sure West Cochrane
            <br className="hidden md:block" /> Skylight Install Works
          </>
        }
        body="Three clear steps from first consultation to leak-warrantied install. Permit handled."
        steps={SKYLIGHT_STEPS}
      />
      <Reviews sectionBg="#F7F5F0" cardBg="#FFFFFF" />
      <SkylightTypes />
      <ServicesGallery images={SKYLIGHT_GALLERY_IMAGES} sectionBg="#FFFFFF" />
      <WhySureWest />
      <ServiceAreasPins
        heading={'Skylight Installation Across Cochrane,\n Calgary, and Canmore'}
        subhead="Based in Cochrane. Same Red Seal crew across Calgary and Canmore."
      />
      <ServiceFAQ
        faqs={SKYLIGHT_INSTALLATION_FAQS}
        heading="Skylight Installation Questions, Answered"
        subhead="Straight answers about Velux and Fakro skylight installation, leak warranties, and permits in Cochrane."
      />
      <RelatedServices />
      <BottomCTA
        heading={<>Bring Natural Light Into<br className="hidden md:block" /> Your Cochrane Home</>}
        subtext="Red Seal certified, Velux and Fakro brands, 5-year leak warranty, permit handled. Book your free skylight consultation today."
      />
    </>
  )
}
