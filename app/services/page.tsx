import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { MapPin, ChevronRight } from 'lucide-react'

import { Button } from '@/components/ui/Button'

import { ServicesHero } from '@/components/sections/ServicesHero'
import { ServicesHubGrid } from '@/components/sections/ServicesHubGrid'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { ServicesHubDifferentiators } from '@/components/sections/ServicesHubDifferentiators'
import { ServicesFAQ, servicesFaqSchema } from '@/components/sections/ServicesFAQ'

const HowItWorks = dynamic(() =>
  import('@/components/sections/HowItWorks').then((m) => m.HowItWorks),
)
const ServicesGallery = dynamic(
  () => import('@/components/sections/ServicesGallery').then((m) => m.ServicesGallery),
  { ssr: false },
)
const Reviews = dynamic(() =>
  import('@/components/sections/Reviews').then((m) => m.Reviews),
)
const BottomCTA = dynamic(() =>
  import('@/components/sections/BottomCTA').then((m) => m.BottomCTA),
)

// ── Metadata ──────────────────────────────────────────────────────────────────
// Title: 57 chars — includes primary keyword, within 55-60 target
export const metadata: Metadata = {
  title: 'Roofing Services in Cochrane, AB',
  description:
    'Red Seal certified roofing services in Cochrane, Calgary, and Canmore. Replacement, repair, hail damage, inspections, and more. Get a free estimate today.',
  keywords: [
    'roofing services Cochrane',
    'Cochrane roofing contractor',
    'roof replacement Cochrane',
    'roof repair Cochrane',
    'hail damage roof repair Cochrane',
    'roof inspection Cochrane',
    'roofing company Cochrane AB',
    'roof maintenance Cochrane',
    'skylight installation Cochrane',
    'emergency roof repair Cochrane',
    'residential roofing Cochrane',
    'roofers Cochrane',
    'licensed insured roofing Cochrane',
    'Red Seal roofing contractor Alberta',
    'roofing services Calgary',
    'roofing services Canmore',
  ],
  openGraph: {
    title: 'Roofing Services in Cochrane, AB | Sure West Roofing',
    description:
      'Red Seal certified roofing services in Cochrane, Calgary, and Canmore. Replacement, repair, hail damage, inspections, and more. Get a free estimate today.',
    url: 'https://surewestroofing.ca/services',
    type: 'website',
    locale: 'en_CA',
    images: [
      {
        url: 'https://surewestroofing.ca/images/Sure West Roofing in Cochrane.webp',
        width: 1200,
        height: 630,
        alt: 'Sure West Roofing team, Red Seal certified roofing contractors serving Cochrane',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roofing Services in Cochrane, AB | Sure West Roofing',
    description:
      'Red Seal certified roofing services in Cochrane, Calgary, and Canmore. Replacement, repair, hail damage, inspections, and more.',
    images: ['https://surewestroofing.ca/images/Sure West Roofing in Cochrane.webp'],
  },
  alternates: {
    canonical: 'https://surewestroofing.ca/services',
  },
}

// ── Schema blocks ─────────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://surewestroofing.ca',
    },
    {
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://surewestroofing.ca/services',
    },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Roofing Services in Cochrane',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      item: {
        '@type': 'Service',
        name: 'Roof Replacement Cochrane',
        serviceType: 'Roof Replacement',
        provider: { '@type': 'RoofingContractor', name: 'Sure West Roofing' },
        areaServed: 'Cochrane, Alberta',
        url: 'https://surewestroofing.ca/roof-replacement',
      },
    },
    {
      '@type': 'ListItem',
      position: 2,
      item: {
        '@type': 'Service',
        name: 'Roof Repair Cochrane',
        serviceType: 'Roof Repair',
        provider: { '@type': 'RoofingContractor', name: 'Sure West Roofing' },
        areaServed: 'Cochrane, Alberta',
        url: 'https://surewestroofing.ca/roof-repair',
      },
    },
    {
      '@type': 'ListItem',
      position: 3,
      item: {
        '@type': 'Service',
        name: 'Hail Damage Roof Repair Cochrane',
        serviceType: 'Hail Damage Repair',
        provider: { '@type': 'RoofingContractor', name: 'Sure West Roofing' },
        areaServed: 'Cochrane, Alberta',
        url: 'https://surewestroofing.ca/hail-damage-repair',
      },
    },
    {
      '@type': 'ListItem',
      position: 4,
      item: {
        '@type': 'Service',
        name: 'Roof Maintenance Cochrane',
        serviceType: 'Roof Maintenance',
        provider: { '@type': 'RoofingContractor', name: 'Sure West Roofing' },
        areaServed: 'Cochrane, Alberta',
        url: 'https://surewestroofing.ca/roof-maintenance',
      },
    },
    {
      '@type': 'ListItem',
      position: 5,
      item: {
        '@type': 'Service',
        name: 'Roof Inspection Cochrane',
        serviceType: 'Roof Inspection',
        provider: { '@type': 'RoofingContractor', name: 'Sure West Roofing' },
        areaServed: 'Cochrane, Alberta',
        url: 'https://surewestroofing.ca/roof-inspection',
      },
    },
    {
      '@type': 'ListItem',
      position: 6,
      item: {
        '@type': 'Service',
        name: 'Skylight Installation Cochrane',
        serviceType: 'Skylight Installation',
        provider: { '@type': 'RoofingContractor', name: 'Sure West Roofing' },
        areaServed: 'Cochrane, Alberta',
        url: 'https://surewestroofing.ca/skylight-installation',
      },
    },
  ],
}


// ── Service area cards ────────────────────────────────────────────────────────

const AREAS = [
  {
    name: 'Cochrane',
    description:
      'Sure West Roofing is based in Cochrane, Alberta, and this is our primary service area. From Sunset Ridge to Heritage Hills, we know the local weather patterns and building styles that matter for every roofing decision here.',
    href: '/free-roof-estimate-cochrane',
    linkText: 'Get a free estimate in Cochrane',
  },
  {
    name: 'Calgary',
    description:
      'We bring the same Red Seal certified standard to Calgary as we deliver in Cochrane. Whether you are in the northwest suburbs or across the city, our crew travels to complete roofing services in Calgary including replacement, repair, hail damage, and inspections.',
    href: '/roofing-contractor-calgary',
    linkText: 'Calgary roofing services',
  },
  {
    name: 'Canmore',
    description:
      "Canmore's mountain climate is demanding on roofs. Steep pitches, heavy snow loads, and Chinook wind uplift require specific material choices and installation methods. Our team has the local knowledge to build roofs that last here.",
    href: '/roofing-contractor-canmore',
    linkText: 'Canmore roofing services',
  },
]

// ── Page ──────────────────────────────────────────────────────────────────────

export default function ServicesPage() {
  return (
    <>
      {/* Schema blocks */}
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesFaqSchema) }}
      />

      {/* 1. Hero — split layout, cream bg, single image right */}
      <ServicesHero
        h1={"Roofing Services\nin Cochrane, Alberta"}
        subhead="Red Seal certified roofing for replacement, repair, hail damage, maintenance, inspections, and skylights. Serving homeowners across Cochrane, Calgary, and Canmore."
        primaryCTA={{ label: 'Get a Free Estimate', href: '/free-roof-estimate-cochrane' }}
        secondaryCTA={{ label: 'Call 403-990-7210', href: 'tel:+14039907210' }}
      />

      {/* 2. Stats + Certifications — immediately after hero, matches homepage order */}
      <TrustLogos />

      {/* 3. Services grid — expanded 40-60 word cards with learn-more links */}
      <ServicesHubGrid />

      {/* 5. Why Sure West — 4-col differentiator block */}
      <ServicesHubDifferentiators />

      {/* 6. 3-step process */}
      <HowItWorks />

      {/* 7. Gallery — split layout, image right, scrollable */}
      <ServicesGallery />

      {/* 8. Service area block — Cochrane, Calgary, Canmore */}
      <section
        className="relative overflow-hidden py-20 md:py-24"
        style={{
          background: '#F7F5F0',
          paddingLeft: 'var(--section-pad-x)',
          paddingRight: 'var(--section-pad-x)',
        }}
      >
        <div className="max-w-[1320px] mx-auto">
          {/* Header */}
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
              Service Areas
            </span>
            <h2
              className="font-display font-semibold text-brand-navy"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                lineHeight: 1.15,
                letterSpacing: '-0.005em',
              }}
            >
              Roofing Services Across Cochrane,
              <br className="hidden lg:block" /> Calgary and Canmore
            </h2>
            <p
              className="mt-5 max-w-[580px] mx-auto text-brand-slate leading-[1.7]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              Based in Cochrane, Alberta. We serve homeowners across the Bow Valley corridor
              and the Calgary region.
            </p>
          </div>

          {/* 3-column location cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {AREAS.map((area) => (
              <div
                key={area.name}
                className="bg-white rounded-[12px] border border-brand-border p-6 md:p-8 hover:-translate-y-[4px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.10)] transition-all duration-300 ease-out"
              >
                <div
                  className="inline-flex items-center justify-center w-11 h-11 rounded-[8px] mb-5"
                  style={{ background: 'rgba(212,175,96,0.10)' }}
                >
                  <MapPin className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
                </div>
                <h3
                  className="font-display font-semibold text-brand-navy mb-3"
                  style={{ fontSize: '22px', letterSpacing: '-0.01em', lineHeight: 1.25 }}
                >
                  {area.name}
                </h3>
                <p
                  className="text-brand-slate leading-[1.65] mb-5"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {area.description}
                </p>
                <Link
                  href={area.href}
                  className="inline-flex items-center gap-1.5 font-semibold text-brand-gold hover:text-[#B8943F] transition-colors duration-200"
                  style={{
                    fontSize: '13px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    textDecoration: 'none',
                  }}
                >
                  {area.linkText}
                  <ChevronRight className="w-3.5 h-3.5" strokeWidth={2} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Testimonials */}
      <Reviews />

      {/* 10. FAQ — 8 questions, FAQPage schema injected by ServicesFAQ */}
      <ServicesFAQ />

      {/* 11. Final CTA */}
      <BottomCTA
        heading={
          <>
            Need Roofing Services in Cochrane,
            <br className="hidden md:block" /> Calgary, or Canmore?
          </>
        }
        subtext="Roof replacement, repair, hail damage, inspections, and more. Red Seal certified crews with a written warranty on every job."
      />
    </>
  )
}
