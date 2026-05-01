import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  CloudLightning,
  Clock,
  FileCheck,
  Eye,
  Calendar,
  ShieldCheck,
  Award,
  FileText,
  ArrowRight,
  CheckCircle,
  ShoppingBag,
  ShieldAlert,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { RoofInspectionHero } from '@/components/sections/RoofInspectionHero'
import { ServiceFAQ } from '@/components/sections/ServiceFAQ'
import { ServiceOverview } from '@/components/sections/ServiceOverview'
import { HowItWorks, type HowItWorksStep } from '@/components/sections/HowItWorks'
import { WhatIncludedAccordion } from '@/components/sections/WhatIncludedAccordion'
import { RelatedServicesCarousel } from '@/components/sections/RelatedServicesCarousel'
import { ServicesGallery } from '@/components/sections/ServicesGallery'
import { Reviews } from '@/components/sections/Reviews'
import { ServiceAreasPins } from '@/components/sections/ServiceAreasPins'
import { BottomCTA } from '@/components/sections/BottomCTA'
import { ROOF_INSPECTION_FAQS } from '@/lib/faqs/roofInspection'

export const metadata: Metadata = {
  title: 'Roof Inspection Cochrane',
  description:
    'Red Seal certified roof inspection in Cochrane, AB. Pre-purchase, post-storm, and annual inspections with a written photo report. Free with any quoted work, $200 standalone.',
  alternates: { canonical: 'https://surewestroofing.ca/roof-inspection' },
  openGraph: {
    title: 'Roof Inspection Cochrane | Sure West Roofing',
    description:
      'Red Seal certified roof inspection in Cochrane, AB. Written photo report, free with quote.',
    url: 'https://surewestroofing.ca/roof-inspection',
    type: 'website',
    locale: 'en_CA',
    images: [
      {
        url: 'https://surewestroofing.ca/images/Roof Inspection Cochrane.avif',
        width: 1200,
        height: 630,
        alt: 'Sure West Roofing Red Seal Journeyman performing a roof inspection in Cochrane Alberta',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Inspection Cochrane | Sure West Roofing',
    description: 'Red Seal certified roof inspection in Cochrane, AB. Written photo report.',
    images: ['https://surewestroofing.ca/images/Roof Inspection Cochrane.avif'],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://surewestroofing.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://surewestroofing.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'Roof Inspection', item: 'https://surewestroofing.ca/roof-inspection' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Roof Inspection',
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
  url: 'https://surewestroofing.ca/roof-inspection',
  description:
    'Red Seal certified roof inspection in Cochrane, Calgary, and Canmore. Pre-purchase, post-storm, and annual inspections with a written photo report.',
  offers: { '@type': 'Offer', priceCurrency: 'CAD', priceRange: '$0-$300' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: ROOF_INSPECTION_FAQS.map((f) => ({
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
          style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
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

const INSPECTION_INCLUDED_ITEMS = [
  {
    heading: 'Full exterior walk + interior attic check',
    body:
      'A Red Seal Journeyman walks every shingle slope of your Cochrane roof, then inspects the attic from inside the home for daylight, water staining, and ventilation issues.',
  },
  {
    heading: 'Photo-documented written report',
    body:
      'Every checkpoint is photographed with location notes and a severity rating. The PDF report is delivered within one business day and built for buyers, insurers, and adjusters.',
  },
  {
    heading: 'Repair recommendations + fixed quote',
    body:
      'If repairs are needed you receive a clear quote at fixed Cochrane rates. The inspection is free of charge if you book any of the recommended work with Sure West.',
  },
]

function WhatIncluded() {
  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-stretch">
          {/* Hero is RIGHT, so WhatIncluded image goes LEFT (lg:order swap) */}
          <div className="flex flex-col lg:order-2">
            <span className="inline-flex self-start items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
              style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
              What&apos;s Included
            </span>
            <h2 className="font-display font-medium text-brand-navy"
              style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
              What&apos;s Included in a Sure
              <br />
              West Roof Inspection
            </h2>
            <p className="mt-5 max-w-[520px] text-brand-slate leading-[1.7]"
              style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
              Every Sure West roof inspection is carried out by our Red Seal Journeyman crew.
              Serving Cochrane, Calgary, and Canmore.
            </p>

            <WhatIncludedAccordion items={INSPECTION_INCLUDED_ITEMS} />
          </div>

          <div className="relative overflow-hidden rounded-[18px] aspect-square lg:aspect-auto lg:h-full min-h-[560px] lg:order-1"
            style={{ boxShadow: '0 0 0 1px rgba(212,175,96,0.14), 0 20px 48px -12px rgba(44,71,102,0.20)' }}>
            <Image
              src="/images/Cochrane Roofing Contractor Gallery 5.webp"
              alt="Detailed roof inspection on a Cochrane Alberta home"
              fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

const SIGNS = [
  { Icon: ShoppingBag, heading: 'Buying or selling a Cochrane home', body: 'Pre-purchase and pre-listing inspections give you negotiating leverage and remove a common deal-breaker before it surfaces in the deal.' },
  { Icon: CloudLightning, heading: 'After a hail or windstorm', body: 'Cochrane storms can cause damage that does not show from the ground. A post-storm inspection documents what happened, before it leaks.' },
  { Icon: Clock, heading: 'Roof is 10+ years old, no inspection', body: 'Roofs over 10 years old have usually been through enough freeze-thaw and wind to develop early-stage issues. An inspection finds them while they are cheap to fix.' },
  { Icon: FileCheck, heading: 'Insurance carrier requests one', body: 'Many Alberta insurers request a professional roof inspection at policy renewal or as part of a claim. Sure West provides the report your insurer needs.' },
  { Icon: Eye, heading: 'Visible signs of wear from the ground', body: 'Curling shingles, missing tabs, or sagging rooflines visible from below mean the roof is communicating with you. Confirm what is happening before it becomes a leak.' },
  { Icon: Calendar, heading: 'Annual maintenance check', body: 'Most Cochrane homes benefit from one professional inspection per year. The cost is small relative to what early detection saves.' },
]

function SignsYouNeed() {
  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 max-w-[720px] mx-auto">
          <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
            When to Book
          </span>
          <h2 className="font-display font-medium text-brand-navy"
            style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
            When to Book a Roof
            <br />
            Inspection in Cochrane
          </h2>
          <p className="mt-5 max-w-[560px] text-brand-slate leading-[1.7]"
            style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
            A roof inspection is the cheapest insight your Cochrane roof can give you. Here is when
            to schedule one.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">Get a Free Estimate</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SIGNS.map(({ Icon, heading, body }) => (
            <div key={heading} className="bg-white rounded-[12px] border border-brand-border p-6 shadow-[0_2px_8px_rgba(44,71,102,0.06)] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.12)] transition-all duration-300 ease-out">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-[8px] mb-4" style={{ background: 'rgba(212,175,96,0.10)' }}>
                <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.75} />
              </div>
              <h3 className="font-display font-semibold text-brand-navy mb-2 leading-[1.25]" style={{ fontSize: '19px', letterSpacing: '-0.01em' }}>{heading}</h3>
              <p className="text-brand-slate leading-[1.65]" style={{ fontSize: '14px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const INSPECTION_STEPS: HowItWorksStep[] = [
  {
    number: '01',
    Icon: Calendar,
    title: 'Book Your Inspection',
    description:
      'Online or by phone. Confirmed within one business day, scheduled around your week and the Cochrane forecast.',
  },
  {
    number: '02',
    Icon: FileCheck,
    title: 'Walk + Attic Check',
    description:
      'Every slope walked, attic checked from inside, every checkpoint photographed with location notes and a severity rating.',
  },
  {
    number: '03',
    Icon: CheckCircle,
    title: 'Written Report Delivered',
    description:
      'PDF report within one business day. Free of charge if you book any of the recommended repair, replacement, or maintenance work.',
  },
]

const INSPECTION_TYPES = [
  { tier: 'Real Estate', name: 'Pre-Purchase Inspection', image: '/images/Cochrane Roofing Contractor Gallery 2.webp', imageAlt: 'Pre-purchase roof inspection in Cochrane Alberta', body: 'Independent roof condition report for buyers, often as a follow-up to a general home inspection. Findings often translate directly into negotiating leverage on the offer price.' },
  { tier: 'Insurance', name: 'Post-Storm / Claim Inspection', image: '/images/Cochrane Roofing Contractor Gallery 8.webp', imageAlt: 'Post-storm insurance roof inspection in Cochrane', body: 'Photo-documented hail and wind damage report built for Alberta insurance carriers. Includes itemised scope at insurer-accepted rates and direct adjuster communication on request.' },
  { tier: 'Annual', name: 'Maintenance Inspection', image: '/images/Cochrane Roofing Contractor Gallery 12.webp', imageAlt: 'Annual maintenance roof inspection in Cochrane', body: 'Yearly inspection that catches small issues (lifted shingles, cracked sealant, minor flashing) before they become leaks. Often paired with a maintenance visit on the same day.' },
]

function InspectionTypes() {
  return (
    <section className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 max-w-[720px] mx-auto">
          <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
            Inspection Types
          </span>
          <h2 className="font-display font-medium text-brand-navy"
            style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
            Three Roof Inspection Types in Cochrane
          </h2>
          <p className="mt-5 max-w-[600px] text-brand-slate leading-[1.7]"
            style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
            Most Cochrane inspection requests fall into one of three categories. The format and report style is tailored to the use case.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">Get a Free Estimate</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {INSPECTION_TYPES.map(({ tier, name, image, imageAlt, body }) => (
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
  { Icon: Award, heading: 'Red Seal Certified Trades', body: 'Sure West is owned and operated by Red Seal Journeyman roofers. A credentialed inspector walks every Cochrane roof, never a subcontractor.' },
  { Icon: FileText, heading: 'Buyer & Insurer-Ready Reports', body: 'Photo reports formatted for real estate transactions and Alberta insurance carriers. Most reports approve on first submission with no rework needed.' },
  { Icon: ShieldAlert, heading: 'No Pressure, No Upsell', body: 'Inspections produce honest findings, not invented work. If your Cochrane roof is in good shape we will tell you that and recommend the next inspection date.' },
  { Icon: ShieldCheck, heading: 'Free with Quoted Work', body: 'If you book any of the recommended repair, replacement, or maintenance work after the inspection, the inspection cost is waived.' },
]

function WhySureWest() {
  return (
    <section className="relative bg-brand-cream overflow-hidden py-20 md:py-24" style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-[720px] mx-auto">
          <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
            Why Sure West
          </span>
          <h2 className="font-display font-medium text-brand-navy" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
            Why Cochrane Homeowners
            <br />
            Trust Sure West for Inspections
          </h2>
          <p className="mt-5 max-w-[580px] text-brand-slate leading-[1.7]" style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
            Built across Cochrane, Calgary, and Canmore on Red Seal ownership, buyer and insurer-ready reports, and zero upsell pressure.
          </p>
          <div className="mt-7">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">Get a Free Estimate</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {DIFFERENTIATORS.map(({ Icon, heading, body }) => (
            <div key={heading} className="bg-brand-cream rounded-[12px] border border-brand-border p-6 shadow-[0_2px_8px_rgba(44,71,102,0.06)] hover:-translate-y-[4px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.12)] transition-all duration-300 ease-out">
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

const INSPECTION_OVERVIEW_IMAGES = [
  { src: '/images/Cochrane Roofing Contractor Gallery 2.webp',  alt: 'Pre-purchase roof inspection in Cochrane Alberta' },
  { src: '/images/Cochrane Roofing Contractor Gallery 5.webp',  alt: 'Detailed roof inspection by Sure West Roofing in Cochrane' },
  { src: '/images/Cochrane Roofing Contractor Gallery 21.webp', alt: 'Written inspection report handed to a Cochrane homeowner' },
  { src: '/images/Cochrane Roofing Contractor Gallery 12.webp', alt: 'Annual roof inspection on a Cochrane Alberta home' },
]

const INSPECTION_GALLERY_IMAGES = [
  { src: '/images/Cochrane Roofing Contractor Gallery 2.webp',  alt: 'Pre-purchase roof inspection in Cochrane Alberta',                    caption: 'Cochrane, AB · Pre-Purchase' },
  { src: '/images/Cochrane Roofing Contractor Gallery 5.webp',  alt: 'Post-storm roof inspection in Canmore Alberta',                       caption: 'Canmore, AB · Post-Storm' },
  { src: '/images/Cochrane Roofing Contractor Gallery 6.webp',  alt: 'Annual roof inspection on a Cochrane Alberta home',                   caption: 'Cochrane, AB · Annual' },
  { src: '/images/Cochrane Roofing Contractor Gallery 8.webp',  alt: 'Insurance hail damage inspection in Cochrane',                        caption: 'Cochrane, AB · Insurance' },
  { src: '/images/Cochrane Roofing Contractor Gallery 12.webp', alt: 'Roof inspection report documentation in Cochrane',                    caption: 'Cochrane, AB · Report' },
  { src: '/images/Cochrane Roofing Contractor Gallery 13.webp', alt: 'Roof inspection completed by Sure West Roofing in Calgary',           caption: 'Calgary, AB · Inspection' },
  { src: '/images/Cochrane Roofing Contractor Gallery 3.webp', alt: 'Detailed shingle and flashing inspection in Cochrane',                caption: 'Cochrane, AB · Detail Check' },
  { src: '/images/Cochrane Roofing Contractor Gallery 19.webp', alt: 'Flashing and penetration inspection in Cochrane',                     caption: 'Cochrane, AB · Flashing' },
  { src: '/images/Cochrane Roofing Contractor Gallery 21.webp', alt: 'Written inspection report handed to a Cochrane homeowner',            caption: 'Cochrane, AB · Written Report' },
  { src: '/images/Cochrane Roofing Contractor Gallery 22.webp', alt: 'Sure West Roofing inspection in Cochrane Alberta',                    caption: 'Cochrane, AB · Inspection' },
]

function RelatedServices() {
  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-24" style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <div>
            <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-5 text-brand-gold"
              style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
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

        <RelatedServicesCarousel exclude="/roof-inspection" />
      </div>
    </section>
  )
}

export default function RoofInspectionPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <RoofInspectionHero />
      <CertsBanner />
      <ServiceOverview
        heading={'Cochrane Roof Inspections,\nDocumented for Buyers and Insurers'}
        body="A roof inspection is a slope-by-slope walk of your roof plus an attic check from inside the home, documented with a written photo report you can hand to a buyer, insurer, or adjuster. Carried out by Red Seal Journeyman roofers, with no upsell pressure and the inspection cost waived if you book any of the recommended work."
        images={INSPECTION_OVERVIEW_IMAGES}
      />
      <WhatIncluded />
      <Reviews />
      <ServicesGallery images={INSPECTION_GALLERY_IMAGES} sectionBg="#FFFFFF" />
      <WhySureWest />
      <HowItWorks
        heading={
          <>
            How a Sure West Cochrane
            <br className="hidden md:block" /> Roof Inspection Works
          </>
        }
        body="Three clear steps from booking to written report. Most inspections are completed in 60 to 90 minutes on-site."
        steps={INSPECTION_STEPS}
      />
      <InspectionTypes />
      <SignsYouNeed />
      <ServiceAreasPins
        heading={'Roof Inspections Across Cochrane,\n Calgary, and Canmore'}
        subhead="Based in Cochrane. Same Red Seal crew across Calgary and Canmore."
      />
      <ServiceFAQ
        faqs={ROOF_INSPECTION_FAQS}
        heading="Roof Inspection Questions, Answered"
        subhead="Straight answers about roof inspections, written reports, and insurance documentation in Cochrane."
      />
      <RelatedServices />
      <BottomCTA
        heading={<>Get a Professional Roof<br className="hidden md:block" /> Inspection in Cochrane</>}
        subtext="Red Seal certified, written photo report, free with quoted work, and no sales pressure. Book yours today."
      />
    </>
  )
}
