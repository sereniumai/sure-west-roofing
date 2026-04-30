import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Sun,
  Moon,
  Clock,
  Hammer,
  Bath,
  TrendingUp,
  ShieldCheck,
  Award,
  FileText,
  MapPin,
  ArrowRight,
  Calendar,
  Lightbulb,
  Truck,
  CheckCircle2,
  Square,
  ArrowUpDown,
  BadgeCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SkylightInstallationHero } from '@/components/sections/SkylightInstallationHero'
import { ServiceFAQ } from '@/components/sections/ServiceFAQ'
import { WhatIncludedAccordion } from '@/components/sections/WhatIncludedAccordion'
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
      'Red Seal certified Velux and Fakro skylight installation in Cochrane, AB. 5-year leak warranty.',
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
              West Skylight Install
            </h2>
            <p className="mt-5 max-w-[520px] text-brand-slate leading-[1.7]"
              style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
              Every Sure West skylight installation is carried out by our Red Seal Journeyman crew.
              Serving Cochrane, Calgary, and Canmore.
            </p>

            <WhatIncludedAccordion items={SKYLIGHT_INCLUDED_ITEMS} />
          </div>

          <div className="relative overflow-hidden rounded-[18px] aspect-square lg:aspect-auto lg:h-full min-h-[560px]"
            style={{ boxShadow: '0 0 0 1px rgba(212,175,96,0.14), 0 20px 48px -12px rgba(44,71,102,0.20)' }}>
            <Image
              src="/images/Cochrane Roofing Contractor Gallery 19.webp"
              alt="Skylight flashing detail by Sure West Roofing on a Cochrane Alberta home"
              fill sizes="(max-width: 1024px) 100vw, 45vw" className="object-cover" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

const SIGNS = [
  { Icon: Sun, heading: 'Dark interior rooms', body: 'A Cochrane skylight delivers daylight equivalent to several extra wall windows without changing the floor plan. The single best fix for chronically dark interior rooms.' },
  { Icon: Lightbulb, heading: 'Energy-efficient daylighting', body: 'Daylighting reduces electric lighting load during the day. Modern triple-glazed skylights also gain passive solar heat in winter, offsetting heating cost.' },
  { Icon: Clock, heading: 'Existing skylight beyond service life', body: 'Older single-pane and acrylic skylights condensate, leak, and fog after 15 to 20 years. Replacement with a modern unit fixes the issues at the source.' },
  { Icon: Hammer, heading: 'Renovation or addition project', body: 'Installing a skylight during a roof replacement, addition, or interior renovation costs less than a standalone install. We coordinate with your other trades.' },
  { Icon: Bath, heading: 'Bathroom ventilation needs', body: 'A vented skylight in a Cochrane bathroom moves moisture out, reduces mould risk, and adds natural light. Solar-powered models open and close on schedule.' },
  { Icon: TrendingUp, heading: 'Resale value upgrade', body: 'Skylights remain one of the highest-perceived-value upgrades in Calgary-area home sales. Buyers respond strongly to natural light, especially in north-facing rooms.' },
]

function SignsYouNeed() {
  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 max-w-[720px] mx-auto">
          <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
            When to Consider
          </span>
          <h2 className="font-display font-medium text-brand-navy"
            style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
            When to Consider a Skylight
            <br />
            for Your Cochrane Home
          </h2>
          <p className="mt-5 max-w-[560px] text-brand-slate leading-[1.7]"
            style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
            Skylights are most effective when timed correctly. Here are the moments most Cochrane
            homeowners reach out.
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

const PROCESS_STEPS = [
  { number: '01', Icon: Calendar, heading: ['Free Design', 'Consultation'], body: 'A Red Seal Journeyman visits your Cochrane home, reviews the room, and confirms which skylight type and size fits the rafter spacing and roof pitch.' },
  { number: '02', Icon: FileText, heading: ['Quote and', 'Selection'], body: 'A fixed written quote with your chosen Velux or Fakro skylight, scope, timeline, permit handling, and total price. No surprise add-ons.' },
  { number: '03', Icon: Truck, heading: ['Permit and', 'Order'], body: 'Sure West files the building permit with the Town of Cochrane and orders your skylight. Lead time is typically 2 to 3 weeks for in-stock units.' },
  { number: '04', Icon: Hammer, heading: ['One-Day Install', 'on Most Jobs'], body: 'Cut, frame, install, flash, and shingle integration completed in a single day for most single-skylight projects. Multi-skylight jobs run two days.' },
  { number: '05', Icon: BadgeCheck, heading: ['Interior Finish', 'and Warranty'], body: 'Interior trim and drywall return finished to a paint-ready state. Your written 5-year leak warranty and manufacturer paperwork handed over.' },
]

function SkylightProcess() {
  return (
    <section className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-[720px] mx-auto">
          <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
            How It Works
          </span>
          <h2 className="font-display font-medium text-brand-navy"
            style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
            How a Sure West Skylight
            <br />
            Installation Works
          </h2>
          <p className="mt-5 max-w-[560px] text-brand-slate leading-[1.7]"
            style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
            Five clear steps from first consultation to leak-warrantied install. Permit handled.
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

const SKYLIGHT_TYPES = [
  { tier: 'Entry Tier', name: 'Fixed Skylights', image: '/images/Cochrane Roofing Contractor Gallery 1.webp', imageAlt: 'Fixed skylight installed in a Cochrane Alberta home', body: 'Daylight only, no opening mechanism. The simplest, most affordable option, and the most leak-resistant by design. Best for living rooms, hallways, and stairwells.' },
  { tier: 'Mid Tier', name: 'Vented Skylights', image: '/images/Cochrane Roofing Contractor Gallery 4.webp', imageAlt: 'Manually-vented skylight in a Cochrane bathroom', body: 'Manually-operated opening for fresh air and moisture release. Ideal for Cochrane bathrooms and kitchens where ventilation is as important as light.' },
  { tier: 'Premium', name: 'Solar-Powered Smart', image: '/images/Cochrane Roofing Contractor Gallery 14.webp', imageAlt: 'Solar-powered Velux skylight on a Cochrane home', body: 'Solar-charged automatic opening with rain sensor close. Velux and Fakro both offer this tier with 10-year manufacturer warranty and rooftop charging.' },
]

function SkylightTypes() {
  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 max-w-[720px] mx-auto">
          <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
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
  { Icon: Award, heading: 'Red Seal Certified Trades', body: 'Sure West is owned and operated by Red Seal Journeyman roofers. A credentialed tradesperson installs every Cochrane skylight, never a subcontractor.' },
  { Icon: Square, heading: 'Velux + Fakro Brands Only', body: 'We install only the two best-warrantied skylight brands in the market. Both come with manufacturer-spec flashing kits that we install exactly as specified.' },
  { Icon: Moon, heading: 'Built for Alberta Winters', body: 'Every skylight we install is rated for cold-climate performance with double or triple glazing. Heat loss in Cochrane winters is minimal.' },
  { Icon: ShieldCheck, heading: '5-Year Leak Warranty', body: 'Every skylight installation comes with a 5-year leak warranty in writing on the flashing and integration. If it leaks at the perimeter we come back at no charge.' },
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
            Trust Sure West for Skylights
          </h2>
          <p className="mt-5 max-w-[580px] text-brand-slate leading-[1.7]" style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
            Built across Cochrane, Calgary, and Canmore on Red Seal ownership, Velux and Fakro skylights, and a 5-year leak warranty.
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

const SKYLIGHT_GALLERY_IMAGES = [
  { src: '/images/Cochrane Roofing Contractor Gallery 1.webp',  alt: 'Velux fixed skylight installed by Sure West Roofing in Cochrane',     caption: 'Cochrane, AB · Fixed Skylight' },
  { src: '/images/Cochrane Roofing Contractor Gallery 4.webp',  alt: 'Vented skylight installed in a Cochrane bathroom',                    caption: 'Cochrane, AB · Vented' },
  { src: '/images/Cochrane Roofing Contractor Gallery 7.webp',  alt: 'Skylight installation completed in Calgary',                          caption: 'Calgary, AB · Skylight' },
  { src: '/images/Cochrane Roofing Contractor Gallery 13.webp', alt: 'Velux skylight installation in Calgary by Sure West Roofing',         caption: 'Calgary, AB · Velux' },
  { src: '/images/Cochrane Roofing Contractor Gallery 14.webp', alt: 'Solar-powered skylight installed on a Cochrane home',                 caption: 'Cochrane, AB · Solar-Powered' },
  { src: '/images/Cochrane Roofing Contractor Gallery 15.webp', alt: 'Skylight flashing detail in Cochrane Alberta',                        caption: 'Cochrane, AB · Flashing' },
  { src: '/images/Cochrane Roofing Contractor Gallery 19.webp', alt: 'Detailed skylight perimeter flashing in Cochrane',                    caption: 'Cochrane, AB · Detail' },
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
      <CertsBanner />
      <WhatIncluded />
      <SignsYouNeed />
      <SkylightProcess />
      <SkylightTypes />
      <WhySureWest />
      <ServicesGallery images={SKYLIGHT_GALLERY_IMAGES} sectionBg="#FFFFFF" />
      <Reviews sectionBg="#F7F5F0" cardBg="#FFFFFF" />
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
