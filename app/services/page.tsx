import type { Metadata } from 'next'
import dynamic from 'next/dynamic'

import { ServicesHero } from '@/components/sections/ServicesHero'
import { ServicesHubGrid } from '@/components/sections/ServicesHubGrid'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { ServicesHubDifferentiators } from '@/components/sections/ServicesHubDifferentiators'
import { ServiceAreasPins } from '@/components/sections/ServiceAreasPins'
import { ServicesFAQ, servicesFaqSchema } from '@/components/sections/ServicesFAQ'

const HowItWorks = dynamic(() =>
  import('@/components/sections/HowItWorks').then((m) => m.HowItWorks),
)
const ServicesGallery = dynamic(() =>
  import('@/components/sections/ServicesGallery').then((m) => m.ServicesGallery),
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
  title: { absolute: 'Roofing Services Cochrane | Sure West Roofing' },
  description:
    'Roofing services Cochrane homeowners trust. Red Seal Journeyman certified for replacement, repair, hail damage, inspections, maintenance, and skylights.',
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
    title: 'Roofing Services Cochrane | Sure West Roofing',
    description:
      'Roofing services Cochrane homeowners trust. Red Seal Journeyman certified for replacement, repair, hail damage, inspections, maintenance, and skylights.',
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
    title: 'Roofing Services Cochrane | Sure West Roofing',
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
        subhead="Cochrane roofing services delivered by one Red Seal Journeyman crew, one proven process, one standard. Serving Cochrane, Calgary, and Canmore."
        primaryCTA={{ label: 'Get a Free Estimate', href: '/free-roof-estimate-cochrane' }}
        secondaryCTA={{ label: 'Call 403-990-7210', href: 'tel:+14039907210' }}
      />

      {/* 2. Stats + Certifications, immediately after hero, matches homepage order */}
      <TrustLogos />

      {/* 3. Services grid, featured spotlight + 6-card grid */}
      <ServicesHubGrid />

      {/* 4. Why Sure West, differentiators lead before social proof to frame the lens */}
      <ServicesHubDifferentiators />

      {/* 5. Reviews, immediate social proof to validate the differentiators above */}
      <Reviews />

      {/* 6. How It Works, rational close before geographic relevance */}
      <HowItWorks sectionBg="#F7F5F0" cardBg="#FFFFFF" />

      {/* 7. Gallery, image-right carousel matching individual service pages */}
      <ServicesGallery
        sectionBg="#FFFFFF"
        heading={<>Roofing Services Completed Across Cochrane, Calgary &amp; Canmore</>}
        images={[
          { src: '/images/Cochrane Roofing Contractor Gallery 5.webp', alt: 'Cochrane roof replacement by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 3.webp', alt: 'Cochrane roof installation by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 7.webp', alt: 'Cochrane siding and soft metals by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 10.webp', alt: 'Cochrane roofing project by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 13.webp', alt: 'Cochrane skylight installation by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 1.webp', alt: 'Cochrane roof replacement project by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 4.webp', alt: 'Cochrane re-roof project by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 22.webp', alt: 'Cochrane shingle roof by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 16.webp', alt: 'Cochrane finished roof by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 6.webp', alt: 'Cochrane shingle roof completed by Sure West Roofing' },
        ]}
      />

      {/* 8. Service Areas, canonical 3-city pins matching About */}
      <ServiceAreasPins
        heading={'Roofing Services Across Cochrane,\n Calgary and Canmore'}
        subhead="Based in Cochrane, Alberta. We serve homeowners across the Bow Valley corridor and the Calgary region."
        sectionBg="#F7F5F0"
      />

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
        subtext="Seven services, one in-house Red Seal Journeyman crew, one standard. Free written quote within two business days and no sales pressure."
      />
    </>
  )
}
