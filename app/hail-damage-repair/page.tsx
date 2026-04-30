import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  AlertTriangle,
  CloudRain,
  Disc,
  Droplets,
  AlertCircle,
  FileText,
  ShieldCheck,
  Award,
  MapPin,
  ArrowRight,
  Calendar,
  Camera,
  Phone,
  Wrench,
  CheckCircle2,
  Sparkles,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { HailDamageHero } from '@/components/sections/HailDamageHero'
import { ServiceFAQ } from '@/components/sections/ServiceFAQ'
import { WhatIncludedAccordion } from '@/components/sections/WhatIncludedAccordion'
import { RelatedServicesCarousel } from '@/components/sections/RelatedServicesCarousel'
import { ServicesGallery } from '@/components/sections/ServicesGallery'
import { Reviews } from '@/components/sections/Reviews'
import { ServiceAreasPins } from '@/components/sections/ServiceAreasPins'
import { BottomCTA } from '@/components/sections/BottomCTA'
import { HAIL_DAMAGE_FAQS } from '@/lib/faqs/hailDamage'

export const metadata: Metadata = {
  title: 'Hail Damage Roof Repair Cochrane',
  description:
    'Red Seal certified hail damage roof repair in Cochrane, AB. Free post-storm inspections, full insurance documentation, IKO impact-rated materials. Serving Cochrane, Calgary, and Canmore.',
  alternates: { canonical: 'https://surewestroofing.ca/hail-damage-repair' },
  openGraph: {
    title: 'Hail Damage Roof Repair Cochrane | Sure West Roofing',
    description:
      'Red Seal certified hail damage roof repair in Cochrane, AB. Free inspections, insurance-friendly documentation, fast response.',
    url: 'https://surewestroofing.ca/hail-damage-repair',
    type: 'website',
    locale: 'en_CA',
    images: [
      {
        url: 'https://surewestroofing.ca/images/Cochrane Roofing Contractor Gallery 8.webp',
        width: 1200,
        height: 630,
        alt: 'Hail damage roof inspection in Cochrane Alberta by Sure West Roofing',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hail Damage Roof Repair Cochrane | Sure West Roofing',
    description: 'Red Seal certified hail damage repair in Cochrane, AB. Insurance-friendly.',
    images: ['https://surewestroofing.ca/images/Cochrane Roofing Contractor Gallery 8.webp'],
  },
}

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://surewestroofing.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://surewestroofing.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'Hail Damage Repair', item: 'https://surewestroofing.ca/hail-damage-repair' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Hail Damage Roof Repair',
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
  url: 'https://surewestroofing.ca/hail-damage-repair',
  description:
    'Red Seal certified hail damage roof repair in Cochrane, Calgary, and Canmore. Free post-storm inspections, full insurance documentation, and direct work with your adjuster.',
}

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HAIL_DAMAGE_FAQS.map((f) => ({
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
    <section
      className="bg-white py-10 md:py-14"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
      aria-label="Certifications and accreditations"
    >
      <div className="max-w-[1320px] mx-auto flex flex-col items-center">
        <span
          className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
          style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}
        >
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

const HAIL_INCLUDED_ITEMS = [
  {
    heading: 'Free post-storm hail damage inspection',
    body:
      'A Red Seal Journeyman walks your Cochrane roof after any major hail event, climbs every slope, and documents every dent, bruise, and fracture with high-resolution photos.',
  },
  {
    heading: 'Clear scope and documentation',
    body:
      'You receive a written report, full photo set, and an itemised quote in a format that works for most Alberta insurers. Share it with your insurer in whatever way suits you.',
  },
  {
    heading: 'Repair or replacement with IKO impact-rated materials',
    body:
      'Once the claim is approved we complete the work using IKO Nordic Class 4 impact-rated shingles where appropriate, backed by a 2-year workmanship warranty in writing.',
  },
]

function WhatIncluded() {
  return (
    <section
      className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-stretch">
          {/* Content (RIGHT on desktop). Hero image is RIGHT, so WhatIncluded image goes LEFT (opposite-side rule). */}
          <div className="flex flex-col lg:order-2">
            <span
              className="inline-flex self-start items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
              style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}
            >
              What&apos;s Included
            </span>
            <h2
              className="font-display font-medium text-brand-navy"
              style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}
            >
              What&apos;s Included in a Sure
              <br />
              West Hail Damage Repair
            </h2>
            <p
              className="mt-5 max-w-[520px] text-brand-slate leading-[1.7]"
              style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}
            >
              Every Sure West hail damage repair is carried out by our Red Seal Journeyman crew.
              Serving Cochrane, Calgary, and Canmore.
            </p>

            <WhatIncludedAccordion items={HAIL_INCLUDED_ITEMS} />
          </div>

          {/* Photo (LEFT on desktop) */}
          <div
            className="relative overflow-hidden rounded-[18px] aspect-square lg:aspect-auto lg:h-full min-h-[560px] lg:order-1"
            style={{ boxShadow: '0 0 0 1px rgba(212,175,96,0.14), 0 20px 48px -12px rgba(44,71,102,0.20)' }}
          >
            <Image
              src="/images/Cochrane Roofing Contractor Gallery 3.webp"
              alt="Hail damage roof inspection and repair on a Cochrane Alberta home"
              fill
              sizes="(max-width: 1024px) 100vw, 45vw"
              className="object-cover"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

const SIGNS = [
  { Icon: Disc, heading: 'Dents on metal flashing or vents', body: 'Roof vents, valley flashing, and downspouts dent visibly during hail. If the metal shows hits, the asphalt shingles almost always do too even if you cannot see it from below.' },
  { Icon: AlertTriangle, heading: 'Bruised or pitted shingles', body: 'Hail bruises the asphalt mat under the granule layer. The shingle looks fine from a distance but reveals soft spots, fractures, or missing granules under inspection.' },
  { Icon: Droplets, heading: 'Heavy granule loss after a storm', body: 'Cochrane gutters and downspouts full of shingle granules after a hailstorm signal impact damage. Granule loss exposes the asphalt underneath and accelerates UV breakdown.' },
  { Icon: AlertCircle, heading: 'Cracked skylight or pipe boot', body: 'Skylight glass, plastic vent caps, and rubber pipe boots crack under hail before shingles do. Visible cracks on these accessories are an early indicator of roof-wide damage.' },
  { Icon: CloudRain, heading: 'Leaks that started after recent hail', body: 'A new leak in the weeks or months after a storm is one of the strongest signs of hail damage. Hail can fracture shingles without immediate leaking, with water finding the crack later.' },
  { Icon: FileText, heading: 'Insurer asks for an inspection', body: 'Many Alberta insurers ask for a professional roof inspection to support a hail claim. Sure West provides the photo report and written scope at no charge.' },
]

function SignsYouNeed() {
  return (
    <section
      className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 max-w-[720px] mx-auto">
          <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
            Signs to Watch
          </span>
          <h2 className="font-display font-medium text-brand-navy" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
            Signs Your Cochrane Roof
            <br />
            Took Hail Damage
          </h2>
          <p className="mt-5 max-w-[560px] text-brand-slate leading-[1.7]" style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
            Hail damage is not always obvious from the ground. Here is what to watch for after a Cochrane storm.
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
  { number: '01', Icon: Calendar, heading: ['Free Post-Storm', 'Inspection'], body: 'A Red Seal Journeyman inspects your Cochrane roof slope by slope after any major hail event. No charge for the inspection itself.' },
  { number: '02', Icon: Camera, heading: ['Full Photo', 'Documentation'], body: 'Every dent, bruise, and fracture is photographed with measurements and location notes. The package is built for insurance review.' },
  { number: '03', Icon: Phone, heading: ['Shareable', 'Documentation'], body: 'Send the report and photo package to your insurer however suits you. We keep everything in a clear, written format so nothing gets lost in translation.' },
  { number: '04', Icon: Wrench, heading: ['Repair or', 'Replace'], body: 'Once approved we complete targeted repairs or full replacement using IKO Nordic Class 4 impact-rated shingles where appropriate.' },
  { number: '05', Icon: CheckCircle2, heading: ['Cleanup and', 'Warranty'], body: 'Magnetic nail sweep, full site cleanup, and a written 2-year workmanship warranty handed over at the final walkthrough.' },
]

function HailProcess() {
  return (
    <section className="relative bg-brand-cream overflow-hidden py-20 md:py-24" style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 max-w-[720px] mx-auto">
          <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
            How It Works
          </span>
          <h2 className="font-display font-medium text-brand-navy" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
            How a Sure West Hail
            <br />
            Damage Claim Works
          </h2>
          <p className="mt-5 max-w-[560px] text-brand-slate leading-[1.7]" style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
            Five clear steps from first inspection to warrantied repair. No paperwork left to you alone.
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

const HAIL_CATEGORIES = [
  { tier: 'Light Hail', name: 'Cosmetic Damage', image: '/images/Cochrane Roofing Contractor Gallery 5.webp', imageAlt: 'Cosmetic hail damage inspection on a Cochrane Alberta roof', body: 'Surface bruising and minor granule loss without structural impact. Often does not affect the roof\u2019s lifespan, but documentation matters for any future claim. We inspect, photograph, and advise.' },
  { tier: 'Moderate Hail', name: 'Functional Damage', image: '/images/Cochrane Roofing Contractor Gallery 7.webp', imageAlt: 'Functional hail damage repair on a Cochrane Alberta roof', body: 'Multiple shingle hits with fractured mats and significant granule loss. Targeted repair using matched IKO product, often partially or fully insurance-funded depending on policy and storm severity.' },
  { tier: 'Severe Hail', name: 'Structural Damage', image: '/images/Cochrane Roofing Contractor Gallery 9.webp', imageAlt: 'Severe hail damage roof replacement in Cochrane Alberta', body: 'Golf-ball or larger hail compromises the entire roof system. Most insurers approve a full replacement at this severity, often using IKO Nordic Class 4 impact-rated shingles to reduce future risk.' },
]

function HailCategories() {
  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-24" style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 max-w-[720px] mx-auto">
          <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
            Damage Categories
          </span>
          <h2 className="font-display font-medium text-brand-navy" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
            Three Hail Damage Categories We See in Cochrane
          </h2>
          <p className="mt-5 max-w-[600px] text-brand-slate leading-[1.7]" style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
            Most hail claims fall into one of three severity tiers. The category determines whether you need a repair, partial replacement, or full replacement.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">Get a Free Estimate</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {HAIL_CATEGORIES.map(({ tier, name, image, imageAlt, body }) => (
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
  { Icon: Award, heading: 'Red Seal Certified Trades', body: 'Sure West is owned and operated by Red Seal Journeyman roofers, the recognised national trade standard. A credentialed inspector documents every Cochrane hail claim, never a subcontractor.' },
  { Icon: FileText, heading: 'Clear Written Documentation', body: 'Photo reports, written scope, and itemised quotes in a format that works for most Alberta insurers. Share the package with your insurer however suits you.' },
  { Icon: Sparkles, heading: 'Impact-Rated IKO Materials', body: 'Where appropriate we install IKO Nordic Class 4 impact-rated shingles, the highest hail-resistant tier available. Some Alberta insurers offer premium discounts for upgraded materials.' },
  { Icon: ShieldCheck, heading: '2-Year Workmanship Warranty', body: 'Every hail damage repair comes with a 2-year workmanship warranty in writing. If the repaired area fails inside the warranty term we come back at no charge.' },
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
            Trust Sure West for Hail Claims
          </h2>
          <p className="mt-5 max-w-[580px] text-brand-slate leading-[1.7]" style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
            Built across Cochrane, Calgary, and Canmore on Red Seal ownership, insurer-friendly documentation, and warranties you can read.
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

const HAIL_GALLERY_IMAGES = [
  { src: '/images/Cochrane Roofing Contractor Gallery 3.webp',  alt: 'IKO Nordic Class 4 hail-resistant roof in Calgary',                  caption: 'Calgary, AB · IKO Nordic' },
  { src: '/images/Cochrane Roofing Contractor Gallery 5.webp',  alt: 'Hail-damaged roof inspection in Canmore Alberta',                    caption: 'Canmore, AB · Inspection' },
  { src: '/images/Cochrane Roofing Contractor Gallery 7.webp',  alt: 'Hail damage repair completed in Calgary by Sure West Roofing',      caption: 'Calgary, AB · Hail Repair' },
  { src: '/images/Cochrane Roofing Contractor Gallery 8.webp',  alt: 'Cochrane hail damage roof replacement with IKO Nordic shingles',    caption: 'Cochrane, AB · IKO Nordic' },
  { src: '/images/Cochrane Roofing Contractor Gallery 9.webp',  alt: 'Red Seal Journeyman crew completing a hail damage repair',          caption: 'Cochrane, AB · Hail Repair' },
  { src: '/images/Cochrane Roofing Contractor Gallery 10.webp', alt: 'Insurance-funded hail damage repair in the Calgary region',         caption: 'Calgary, AB · Insurance' },
  { src: '/images/Cochrane Roofing Contractor Gallery 12.webp', alt: 'Targeted hail damage shingle replacement in Cochrane',              caption: 'Cochrane, AB · Targeted' },
  { src: '/images/Cochrane Roofing Contractor Gallery 14.webp', alt: 'Hail damage roof leak repair on a Cochrane Alberta home',           caption: 'Cochrane, AB · Hail Leak' },
  { src: '/images/Cochrane Roofing Contractor Gallery 19.webp', alt: 'Detailed hail damage flashing repair in Cochrane',                  caption: 'Cochrane, AB · Flashing' },
  { src: '/images/Cochrane Roofing Contractor Gallery 20.webp', alt: 'Storm and hail damage roof repair in Calgary',                      caption: 'Calgary, AB · Storm' },
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
          <Link
            href="/services"
            className="flex-shrink-0 inline-flex items-center gap-1.5 text-brand-gold font-semibold hover:text-[#B8943F] transition-colors duration-200"
            style={{ fontSize: '13px', fontFamily: 'var(--font-inter), system-ui, sans-serif', textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            View all services
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
          </Link>
        </div>

        <RelatedServicesCarousel exclude="/hail-damage-repair" />
      </div>
    </section>
  )
}

export default function HailDamageRepairPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <HailDamageHero />
      <CertsBanner />
      <WhatIncluded />
      <SignsYouNeed />
      <HailProcess />
      <HailCategories />
      <WhySureWest />
      <ServicesGallery images={HAIL_GALLERY_IMAGES} sectionBg="#FFFFFF" />
      <Reviews sectionBg="#F7F5F0" cardBg="#FFFFFF" />
      <ServiceAreasPins
        heading={'Hail Damage Repair Across Cochrane,\n Calgary, and Canmore'}
        subhead="Based in Cochrane. Same Red Seal crew across Calgary and Canmore."
      />
      <ServiceFAQ
        faqs={HAIL_DAMAGE_FAQS}
        heading="Hail Damage Repair Questions, Answered"
        subhead="Straight answers about hail damage roof repair and insurance claims in Cochrane."
      />
      <RelatedServices />
      <BottomCTA
        heading={<>Roof Took a Hit<br className="hidden md:block" /> From the Last Storm?</>}
        subtext="Free post-storm inspection, full insurance documentation, 2-year workmanship warranty, and no sales pressure. Book yours today."
      />
    </>
  )
}
