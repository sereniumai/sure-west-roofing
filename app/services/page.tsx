import type { Metadata } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { MapPin } from 'lucide-react'

import { Reveal } from '@/components/ui/Reveal'

import { ServicesHero } from '@/components/sections/ServicesHero'
import { ServicesHubGrid } from '@/components/sections/ServicesHubGrid'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { ServicesHubDifferentiators } from '@/components/sections/ServicesHubDifferentiators'
import { ServicesFAQ, servicesFaqSchema } from '@/components/sections/ServicesFAQ'

const HowItWorks = dynamic(() =>
  import('@/components/sections/HowItWorks').then((m) => m.HowItWorks),
)
const PortfolioGallery = dynamic(() =>
  import('@/components/sections/PortfolioGallery').then((m) => m.PortfolioGallery),
)
const Reviews = dynamic(() =>
  import('@/components/sections/Reviews').then((m) => m.Reviews),
)
const BottomCTA = dynamic(() =>
  import('@/components/sections/BottomCTA').then((m) => m.BottomCTA),
)

// ── Metadata ──────────────────────────────────────────────────────────────────
// Title: 57 chars, includes primary keyword, within 55-60 target
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
    linkText: 'Get a Free Estimate in Cochrane',
  },
  {
    name: 'Calgary',
    description:
      'We bring the same Red Seal certified standard to Calgary as we deliver in Cochrane. Whether you are in the northwest suburbs or across the city, our crew travels to complete roofing services in Calgary including replacement, repair, hail damage, and inspections.',
    href: '/calgary-roofing-contractor',
    linkText: 'Calgary Roofing Services',
  },
  {
    name: 'Canmore',
    description:
      "Canmore's mountain climate is demanding on roofs. Steep pitches, heavy snow loads, and Chinook wind uplift require specific material choices and installation methods. Our team has the local knowledge to build roofs that last here.",
    href: '/canmore-roofing-contractor',
    linkText: 'Canmore Roofing Services',
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

      {/* 1. Hero, split layout, cream bg, single image right */}
      <ServicesHero
        h1={"Roofing Services\nin Cochrane, Alberta"}
        subhead="Red Seal certified roofing for replacement, repair, hail damage, maintenance, inspections, and skylights. Serving homeowners across Cochrane, Calgary, and Canmore."
        primaryCTA={{ label: 'Get a Free Estimate', href: '/free-roof-estimate-cochrane' }}
        secondaryCTA={{ label: 'Call 403-990-7210', href: 'tel:+14039907210' }}
      />

      {/* 2. Stats + Certifications, immediately after hero, matches homepage order */}
      <TrustLogos />

      {/* 3. Services grid, featured spotlight + 6-card grid */}
      <ServicesHubGrid />

      {/* 4. Reviews, immediate social proof to validate the services list */}
      <Reviews sectionBg="#F7F5F0" cardBg="#FFFFFF" />

      {/* 5. Gallery, paired with reviews to keep the proof block tight */}
      <PortfolioGallery
        sectionBg="#FFFFFF"
        images={[
          { src: '/images/Cochrane Roofing Contractor Gallery 5.webp', alt: 'Cochrane roof replacement by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 3.webp', alt: 'Cochrane roof installation by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 7.webp', alt: 'Cochrane siding and soft metals by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 10.webp', alt: 'Cochrane roofing project by Sure West Roofing', objectPosition: '70% center' },
          { src: '/images/Cochrane Roofing Contractor Gallery 13.webp', alt: 'Cochrane skylight installation by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 1.webp', alt: 'Cochrane roof replacement project by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 4.webp', alt: 'Cochrane re-roof project by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 22.webp', alt: 'Cochrane shingle roof by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 16.webp', alt: 'Cochrane finished roof by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 6.webp', alt: 'Cochrane shingle roof completed by Sure West Roofing' },
        ]}
      />

      {/* 6. Why Sure West, 4 differentiators primed by the proof block above */}
      <ServicesHubDifferentiators />

      {/* 7. How It Works, rational close before geographic relevance */}
      <HowItWorks />

      {/* 8. Service Areas, multi-layer pin design matching About page */}
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
              className="font-display font-medium text-brand-navy"
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
          </Reveal>

          <Reveal delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-[1100px] mx-auto relative">
            {/* Dashed gold connector across pin centres on desktop */}
            <div
              aria-hidden="true"
              className="hidden md:block absolute z-0 border-t-2 border-dashed border-brand-gold/30"
              style={{ top: '52px', left: '20%', right: '20%' }}
            />

            {AREAS.map((area) => (
              <div
                key={area.name}
                className="group relative z-[1] flex flex-col items-center text-center"
              >
                {/* Multi-layer pin */}
                <div className="relative mb-6 w-[104px] h-[104px] flex items-center justify-center">
                  {/* Soft outer halo */}
                  <span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full transition-opacity duration-500 group-hover:opacity-100 opacity-70"
                    style={{
                      background:
                        'radial-gradient(closest-side, rgba(212,175,96,0.22), transparent 70%)',
                      filter: 'blur(6px)',
                    }}
                  />
                  {/* Outer ring */}
                  <span
                    aria-hidden="true"
                    className="absolute w-[96px] h-[96px] rounded-full"
                    style={{
                      background: 'rgba(212,175,96,0.05)',
                      border: '1px solid rgba(212,175,96,0.20)',
                    }}
                  />
                  {/* Mid ring */}
                  <span
                    aria-hidden="true"
                    className="absolute w-[78px] h-[78px] rounded-full"
                    style={{
                      background: 'rgba(212,175,96,0.10)',
                      border: '1px solid rgba(212,175,96,0.32)',
                    }}
                  />
                  {/* Inner pin */}
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
                  {area.name}
                </h3>

                <p
                  className="text-brand-slate leading-[1.65] mb-5 max-w-[320px]"
                  style={{
                    fontSize: '14.5px',
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
                    letterSpacing: '0.02em',
                  }}
                >
                  {area.linkText}
                  <svg
                    className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            ))}
          </div>
          </Reveal>
        </div>
      </section>

      {/* 9. FAQ, 8 questions, FAQPage schema injected by ServicesFAQ */}
      <ServicesFAQ />

      {/* 10. Final CTA */}
      <BottomCTA
        heading={
          <>
            Need Roofing Services
            <br className="hidden lg:block" /> in Cochrane, Calgary,
            <br className="hidden lg:block" /> or Canmore?
          </>
        }
        subtext="Roof replacement, repair, hail damage, inspections, and more. Red Seal certified crews with a written warranty on every job."
      />
    </>
  )
}
