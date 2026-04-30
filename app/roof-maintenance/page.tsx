import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Clock,
  Wind,
  Calendar,
  Home,
  Leaf,
  ShieldCheck,
  Award,
  CloudLightning,
  FileText,
  MapPin,
  ArrowRight,
  Eye,
  Brush,
  BellRing,
  Sparkles,
  KeyRound,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { RoofMaintenanceHero } from '@/components/sections/RoofMaintenanceHero'
import { ServiceFAQ } from '@/components/sections/ServiceFAQ'
import { WhatIncludedAccordion } from '@/components/sections/WhatIncludedAccordion'
import { RelatedServicesCarousel } from '@/components/sections/RelatedServicesCarousel'
import { ServicesGallery } from '@/components/sections/ServicesGallery'
import { Reviews } from '@/components/sections/Reviews'
import { BottomCTA } from '@/components/sections/BottomCTA'
import { ROOF_MAINTENANCE_FAQS } from '@/lib/faqs/roofMaintenance'

export const metadata: Metadata = {
  title: 'Roof Maintenance Cochrane',
  description:
    'Red Seal certified roof maintenance in Cochrane, AB. Annual inspections, minor repairs, valley clearing, and a written maintenance log to support your IKO warranty. From $250.',
  alternates: { canonical: 'https://surewestroofing.ca/roof-maintenance' },
  openGraph: {
    title: 'Roof Maintenance Cochrane | Sure West Roofing',
    description:
      'Red Seal certified annual roof maintenance in Cochrane, AB. Add years to your roof from $250.',
    url: 'https://surewestroofing.ca/roof-maintenance',
    type: 'website',
    locale: 'en_CA',
    images: [
      {
        url: 'https://surewestroofing.ca/images/Cochrane Roofing Contractor Gallery 15.webp',
        width: 1200,
        height: 630,
        alt: 'Sure West Roofing Red Seal Journeyman performing annual roof maintenance in Cochrane',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roof Maintenance Cochrane | Sure West Roofing',
    description: 'Red Seal certified annual roof maintenance from $250 in Cochrane, AB.',
    images: ['https://surewestroofing.ca/images/Cochrane Roofing Contractor Gallery 15.webp'],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://surewestroofing.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://surewestroofing.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'Roof Maintenance', item: 'https://surewestroofing.ca/roof-maintenance' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Roof Maintenance',
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
  url: 'https://surewestroofing.ca/roof-maintenance',
  description:
    'Red Seal certified annual roof maintenance in Cochrane, Calgary, and Canmore. Inspections, minor repairs, and a written maintenance log to support IKO warranty.',
  offers: { '@type': 'Offer', priceCurrency: 'CAD', priceRange: '$250-$650' },
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: ROOF_MAINTENANCE_FAQS.map((f) => ({
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

const MAINTENANCE_INCLUDED_ITEMS = [
  {
    heading: 'Full visual inspection of every roof system',
    body:
      'A Red Seal Journeyman walks every slope of your Cochrane roof and inspects shingles, flashing, vents, valleys, and penetrations for early signs of failure.',
  },
  {
    heading: 'Cleaning, resealing, and minor repairs included',
    body:
      'Valleys cleared of debris, lifted shingles reset, cracked sealant replaced, and minor flashing fixes completed during the visit. No surprise add-ons.',
  },
  {
    heading: 'Written maintenance log + photo report',
    body:
      'You receive a written maintenance log with photos of every checkpoint. The log supports your IKO warranty and gives you a clear record for resale or insurance.',
  },
]

function WhatIncluded() {
  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-stretch">
          {/* Hero is LEFT, so WhatIncluded image goes RIGHT (default JSX order). Content first / left. */}
          <div className="flex flex-col">
            <span className="inline-flex self-start items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
              style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
              What&apos;s Included
            </span>
            <h2 className="font-display font-medium text-brand-navy"
              style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
              What&apos;s Included in a Sure
              <br />
              West Maintenance Visit
            </h2>
            <p className="mt-5 max-w-[520px] text-brand-slate leading-[1.7]"
              style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
              Every Sure West maintenance visit is carried out by our Red Seal Journeyman crew.
              Serving Cochrane, Calgary, and Canmore.
            </p>

            <WhatIncludedAccordion items={MAINTENANCE_INCLUDED_ITEMS} />
          </div>

          <div className="relative overflow-hidden rounded-[18px] aspect-square lg:aspect-auto lg:h-full min-h-[560px]"
            style={{ boxShadow: '0 0 0 1px rgba(212,175,96,0.14), 0 20px 48px -12px rgba(44,71,102,0.20)' }}>
            <Image
              src="/images/Cochrane Roofing Contractor Gallery 21.webp"
              alt="Annual roof maintenance and inspection on a Cochrane Alberta home"
              fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

const SIGNS = [
  { Icon: Clock, heading: 'Roof is over 5 years old', body: 'Even healthy Cochrane roofs benefit from an annual inspection after year five. Catching small issues early is the cheapest form of roof care available.' },
  { Icon: Wind, heading: 'Recent Chinook windstorm', body: 'Chinook winds regularly lift shingle tabs in Cochrane without obvious damage. A post-storm maintenance visit resets them before the next weather event.' },
  { Icon: Calendar, heading: 'Spring or fall transition', body: 'Spring catches winter freeze-thaw damage; fall preps the roof for snow load. Two visits per year is the gold standard for Cochrane homes over 15 years old.' },
  { Icon: Home, heading: 'Selling or buying a Cochrane home', body: 'A clean maintenance log adds buyer confidence and supports your asking price. Buyers get peace of mind that the roof has been cared for.' },
  { Icon: Leaf, heading: 'Visible debris in valleys or gutters', body: 'Leaves, twigs, and granules in valleys trap moisture against the shingles. A maintenance clean prevents the slow rot that follows.' },
  { Icon: ShieldCheck, heading: 'Approaching IKO warranty milestone', body: 'IKO manufacturer warranties require evidence of reasonable maintenance. A documented Sure West visit before milestone dates protects your coverage.' },
]

function SignsYouNeed() {
  return (
    <section className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 max-w-[720px] mx-auto">
          <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
            When to Book
          </span>
          <h2 className="font-display font-medium text-brand-navy"
            style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
            When to Book Roof
            <br />
            Maintenance in Cochrane
          </h2>
          <p className="mt-5 max-w-[560px] text-brand-slate leading-[1.7]"
            style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
            Annual maintenance is the cheapest insurance your Cochrane roof can have. Here is when to call.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">Get a Free Estimate</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {SIGNS.map(({ Icon, heading, body }) => (
            <div key={heading} className="bg-white rounded-[12px] border border-brand-border p-6 shadow-[0_2px_8px_rgba(44,71,102,0.06)] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.12)] transition-all duration-300 ease-out">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-[8px] mb-4" style={{ background: 'rgba(212,175,96,0.10)' }}>
                <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
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

const PROCESS_STEPS = [
  { number: '01', Icon: Calendar, heading: ['Schedule Your', 'Visit'], body: 'Book online or by phone. Sure West confirms within one business day and locks in a date that fits your schedule and the forecast.' },
  { number: '02', Icon: Eye, heading: ['Detailed Roof', 'Inspection'], body: 'A Red Seal Journeyman walks every slope of your Cochrane roof and inspects shingles, flashing, valleys, and penetrations.' },
  { number: '03', Icon: Brush, heading: ['Cleaning and', 'Minor Repairs'], body: 'Valleys cleared, lifted shingles reset, cracked sealant replaced, and minor flashing fixes completed during the same visit.' },
  { number: '04', Icon: FileText, heading: ['Written Photo', 'Report'], body: 'A photo-documented written report is sent to you and kept on file. The report supports your IKO warranty and resale documentation.' },
  { number: '05', Icon: BellRing, heading: ['Recommendation,', 'Next Visit'], body: 'A clear recommendation on timing for your next visit. Most Cochrane homes book annually; older roofs benefit from twice a year.' },
]

function MaintenanceProcess() {
  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-[720px] mx-auto">
          <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
            How It Works
          </span>
          <h2 className="font-display font-medium text-brand-navy"
            style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
            How a Sure West
            <br />
            Maintenance Visit Works
          </h2>
          <p className="mt-5 max-w-[560px] text-brand-slate leading-[1.7]"
            style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
            Five clear steps from booking to next-visit reminder. No hidden steps, no surprise charges.
          </p>
          <div className="mt-7">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">Get a Free Estimate</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-6">
          {PROCESS_STEPS.map(({ number, Icon, heading, body }) => (
            <div key={number} className="bg-brand-cream rounded-[14px] border border-brand-border px-5 py-7 md:px-4 md:py-8 flex flex-col items-center text-center shadow-[0_2px_8px_rgba(44,71,102,0.06)] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.12)] transition-all duration-300 ease-out">
              <span className="uppercase tracking-[0.18em] text-brand-gold font-semibold" style={{ fontSize: '11px', fontFamily: 'var(--font-inter), system-ui, sans-serif' }}>Step {number}</span>
              <div className="mt-4 mb-5 flex items-center justify-center w-16 h-16 rounded-full" style={{ background: 'rgba(212,175,96,0.10)', border: '1.5px solid rgba(212,175,96,0.45)' }}>
                <Icon className="w-6 h-6 text-brand-gold" strokeWidth={1.75} />
              </div>
              <h3 className="font-display font-semibold text-brand-navy leading-[1.2] min-h-[44px]" style={{ fontSize: '17px', letterSpacing: '-0.01em' }}>
                {heading[0]}<br />{heading[1]}
              </h3>
              <p className="mt-4 text-brand-slate leading-[1.6] max-w-[220px]" style={{ fontSize: '13px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const MAINTENANCE_PLANS = [
  { tier: 'Most Popular', name: 'Annual Tune-Up', image: '/images/Cochrane Roofing Contractor Gallery 4.webp', imageAlt: 'Annual roof maintenance tune-up in Cochrane Alberta', body: 'One full inspection plus minor repairs and cleaning per year. The right cadence for Cochrane homes under 15 years old. Starts from $250 for a standard single-family roof.' },
  { tier: 'Heavy Use', name: 'Bi-Annual Plan', image: '/images/Cochrane Roofing Contractor Gallery 16.webp', imageAlt: 'Bi-annual roof maintenance plan for older Cochrane homes', body: 'Spring and fall visits to catch winter freeze-thaw damage and prep for snow load. Recommended for Cochrane roofs over 15 years old, hail-prone neighbourhoods, or properties with mature trees.' },
  { tier: 'Resale Ready', name: 'Pre-Sale Maintenance', image: '/images/Cochrane Roofing Contractor Gallery 19.webp', imageAlt: 'Pre-sale roof maintenance package in Cochrane Alberta', body: 'A one-time visit timed for listing day. Includes full inspection, repairs, and a presentable maintenance log buyers and inspectors can review. Removes a common deal-breaker before it surfaces.' },
]

function MaintenancePlans() {
  return (
    <section className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 max-w-[720px] mx-auto">
          <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
            Maintenance Plans
          </span>
          <h2 className="font-display font-medium text-brand-navy"
            style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
            Three Maintenance Plans for Cochrane Homes
          </h2>
          <p className="mt-5 max-w-[600px] text-brand-slate leading-[1.7]"
            style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
            Choose the cadence that fits your roof age, neighbourhood, and stage. All plans include a written maintenance log.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">Get a Free Estimate</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {MAINTENANCE_PLANS.map(({ tier, name, image, imageAlt, body }) => (
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
  { Icon: Award, heading: 'Red Seal Certified Trades', body: 'Sure West is owned and operated by Red Seal Journeyman roofers. A credentialed tradesperson does every Cochrane maintenance visit, never a subcontractor.' },
  { Icon: CloudLightning, heading: 'Built for Alberta Weather', body: 'Cochrane winters, Chinooks, hailstorms, and freeze-thaw cycles each leave a mark. Maintenance is tuned for what local conditions actually do to roofs.' },
  { Icon: Sparkles, heading: 'Warranty-Extending Care', body: 'IKO manufacturer warranties require evidence of reasonable maintenance. Our written log is exactly what an IKO claim review requires.' },
  { Icon: KeyRound, heading: 'Fixed Pricing, No Surprises', body: 'Maintenance is quoted in advance at fixed rates. Steeper or larger roofs and any flashing rebuilds during the visit are quoted before we book.' },
]

function WhySureWest() {
  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-24" style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-[720px] mx-auto">
          <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
            Why Sure West
          </span>
          <h2 className="font-display font-semibold text-brand-navy" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
            Why Cochrane Homeowners
            <br />
            Trust Sure West for Maintenance
          </h2>
          <p className="mt-5 max-w-[580px] text-brand-slate leading-[1.7]" style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
            Built across Cochrane, Calgary, and Canmore on Red Seal ownership, fixed-price maintenance, and warranty-supporting documentation.
          </p>
          <div className="mt-7">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">Get a Free Estimate</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {DIFFERENTIATORS.map(({ Icon, heading, body }) => (
            <div key={heading} className="bg-brand-cream rounded-[12px] border border-brand-border p-6 shadow-[0_2px_8px_rgba(44,71,102,0.06)] hover:-translate-y-[4px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.12)] transition-all duration-300 ease-out">
              <div className="inline-flex items-center justify-center w-11 h-11 rounded-[8px] mb-5" style={{ background: 'rgba(212,175,96,0.12)' }}>
                <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
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

const LOCATIONS = [
  { name: 'Cochrane', href: '/services', detail: 'Home base, primary market', buttonLabel: 'Roofing Services Cochrane' },
  { name: 'Calgary', href: '/calgary-roofing-contractor', detail: 'Maintenance across the Calgary region', buttonLabel: 'Roofing Contractor Calgary' },
  { name: 'Canmore', href: '/canmore-roofing-contractor', detail: 'Maintenance across the Bow Valley', buttonLabel: 'Roofing Contractor Canmore' },
]

function ServiceAreaCondensed() {
  return (
    <section className="relative bg-white overflow-hidden pt-10 md:pt-12 pb-20 md:pb-24" style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-[720px] mx-auto">
          <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
            Service Area
          </span>
          <h2 className="font-display font-medium text-brand-navy" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
            Roof Maintenance Across Cochrane, Calgary, and Canmore
          </h2>
          <p className="mt-5 max-w-[580px] text-brand-slate leading-[1.7]" style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
            Based in Cochrane. Same Red Seal crew across Calgary and Canmore.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 md:gap-12 max-w-[1060px] mx-auto">
          {LOCATIONS.map(({ name, href, detail, buttonLabel }) => (
            <div key={name} className="flex flex-col items-center text-center">
              <MapPin className="w-12 h-12 text-brand-gold mb-5" strokeWidth={1.5} />
              <h3 className="font-display font-semibold text-brand-navy leading-[1.05]" style={{ fontSize: 'clamp(32px, 3.5vw, 44px)', letterSpacing: '-0.02em' }}>{name}</h3>
              <p className="mt-3 max-w-[260px] text-brand-slate leading-[1.6]" style={{ fontSize: '14px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>{detail}</p>
              <div className="mt-6">
                <Button variant="primary" size="md" href={href}>{buttonLabel}</Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const MAINTENANCE_GALLERY_IMAGES = [
  { src: '/images/Cochrane Roofing Contractor Gallery 1.webp',  alt: 'Cochrane roof maintained by Sure West Roofing',                       caption: 'Cochrane, AB · Maintained' },
  { src: '/images/Cochrane Roofing Contractor Gallery 4.webp',  alt: 'Annual maintenance tune-up on a Cochrane Alberta home',               caption: 'Cochrane, AB · Annual Visit' },
  { src: '/images/Cochrane Roofing Contractor Gallery 7.webp',  alt: 'Maintenance visit completed by Sure West Roofing in Calgary',         caption: 'Calgary, AB · Maintenance' },
  { src: '/images/Cochrane Roofing Contractor Gallery 9.webp',  alt: 'Red Seal crew clearing valleys during a Cochrane maintenance visit',  caption: 'Cochrane, AB · Valleys' },
  { src: '/images/Cochrane Roofing Contractor Gallery 12.webp', alt: 'Pre-sale maintenance package on a Cochrane home',                     caption: 'Cochrane, AB · Pre-Sale' },
  { src: '/images/Cochrane Roofing Contractor Gallery 15.webp', alt: 'Roof inspection and minor repair in Cochrane Alberta',                caption: 'Cochrane, AB · Inspection' },
  { src: '/images/Cochrane Roofing Contractor Gallery 16.webp', alt: 'Bi-annual maintenance plan for an older Cochrane home',               caption: 'Cochrane, AB · Bi-Annual' },
  { src: '/images/Cochrane Roofing Contractor Gallery 19.webp', alt: 'Pre-sale roof maintenance documentation in Cochrane',                 caption: 'Cochrane, AB · Resale Log' },
  { src: '/images/Cochrane Roofing Contractor Gallery 20.webp', alt: 'Maintenance after a Calgary windstorm by Sure West Roofing',          caption: 'Calgary, AB · Post-Storm' },
  { src: '/images/Cochrane Roofing Contractor Gallery 21.webp', alt: 'Written maintenance log handed to a Cochrane homeowner',              caption: 'Cochrane, AB · Written Log' },
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

        <RelatedServicesCarousel exclude="/roof-maintenance" />
      </div>
    </section>
  )
}

export default function RoofMaintenancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <RoofMaintenanceHero />
      <CertsBanner />
      <WhatIncluded />
      <SignsYouNeed />
      <MaintenanceProcess />
      <MaintenancePlans />
      <WhySureWest />
      <ServicesGallery images={MAINTENANCE_GALLERY_IMAGES} sectionBg="#F7F5F0" />
      <Reviews sectionBg="#FFFFFF" cardBg="#F7F5F0" />
      <ServiceAreaCondensed />
      <ServiceFAQ
        faqs={ROOF_MAINTENANCE_FAQS}
        heading="Roof Maintenance Questions, Answered"
        subhead="Straight answers about annual roof maintenance and IKO warranty care in Cochrane."
      />
      <RelatedServices />
      <BottomCTA
        heading={<>Add Years to Your<br className="hidden md:block" /> Cochrane Roof&apos;s Life</>}
        subtext="Red Seal certified, fixed pricing from $250, written maintenance log, and no sales pressure. Book your annual visit today."
      />
    </>
  )
}
