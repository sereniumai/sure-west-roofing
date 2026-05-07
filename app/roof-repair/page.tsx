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
  ArrowRight,
  Calendar,
  FileCheck,
  CheckCircle,
  Award,
  Users,
  Handshake,
  ShieldCheck,
  ListChecks,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { RoofRepairHero } from '@/components/sections/RoofRepairHero'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { RoofRepairFAQ, roofRepairFaqSchema } from '@/components/sections/RoofRepairFAQ'
import { HowItWorks, type HowItWorksStep } from '@/components/sections/HowItWorks'
import { RelatedServicesCarousel } from '@/components/sections/RelatedServicesCarousel'
import { ServicesGallery } from '@/components/sections/ServicesGallery'
import { Reviews } from '@/components/sections/Reviews'
import { ServicesHubDifferentiators, type DifferentiatorItem } from '@/components/sections/ServicesHubDifferentiators'
import { BottomCTA } from '@/components/sections/BottomCTA'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Roof Repair Cochrane',
  description:
    'Roof repair in Cochrane, Calgary, and Canmore by Red Seal Journeyman roofers. Leaks, missing shingles, ice dam damage. No upsell to a replacement.',
  alternates: {
    canonical: 'https://surewestroofing.ca/roof-repair',
  },
  openGraph: {
    title: 'Roof Repair Cochrane | Sure West Roofing',
    description:
      'Roof repair in Cochrane, Calgary, and Canmore by Red Seal Journeyman roofers. Leaks, missing shingles, ice dam damage. No upsell to a replacement.',
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
      'Roof repair in Cochrane, Calgary, and Canmore by Red Seal Journeyman roofers. Leaks, missing shingles, ice dam damage. No upsell to a replacement.',
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
    'Red Seal certified residential roof repair in Cochrane, Calgary, and Canmore. Leak repair, shingle replacement, flashing rebuilds, and storm damage. 2-year workmanship guarantee.',
}

// ─── Section: How It Works (3-step) ──────────────────────────────────────────

const REPAIR_STEPS: HowItWorksStep[] = [
  {
    number: '01',
    Icon: Calendar,
    title: 'Free Diagnostic',
    description:
      'A Red Seal Journeyman walks your Cochrane roof in person, traces the leak back to its true source, and writes a fixed quote on the spot before any work is scheduled.',
  },
  {
    number: '02',
    Icon: FileCheck,
    title: 'Approve Your Quote',
    description:
      'Your quote is fixed. The price you approve is the price you pay. Active leaks get tarped same day for weather protection, and the repair itself is scheduled around your availability.',
  },
  {
    number: '03',
    Icon: CheckCircle,
    title: 'Your Repair, Done Right',
    description:
      'Targeted repair using IKO-matched materials, full site cleanup including a magnetic nail sweep, and a written workmanship guarantee handed to you before we leave.',
  },
]

// ─── Section: Common Repair Types ────────────────────────────────────────────

interface RepairTypeItem {
  tier: string
  name: string
  image: string
  imageAlt: string
  body: React.ReactNode
}

const REPAIR_TYPES: RepairTypeItem[] = [
  {
    tier: 'Most Common',
    name: 'Leak Repair',
    image: '/images/Cochrane Roofing Contractor Gallery 14.webp',
    imageAlt: 'Cochrane roof leak repair completed by Sure West Roofing',
    body: 'Active leak diagnosis and targeted repair. We trace the water back to its true entry point, replace the failed materials, and reseal the affected area. Most single-leak repairs are completed in under a day, weather permitting.',
  },
  {
    tier: 'Storm Damage',
    name: 'Shingle Replacement',
    image: '/images/Cochrane Roofing Contractor Gallery 6.webp',
    imageAlt: 'Replacement shingles installed on a Cochrane Alberta roof',
    body: (
      <>
        Replacement of missing, lifted, cracked, or hail-damaged shingles using matched IKO
        product. Common after Cochrane Chinook windstorms and summer{' '}
        <Link
          href="/hail-damage-repair"
          className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors"
        >
          hail damage
        </Link>
        . Documentation provided for insurance claims when applicable.
      </>
    ),
  },
  {
    tier: 'Critical',
    name: 'Flashing & Penetration Repair',
    image: '/images/Cochrane Roofing Contractor Gallery 19.webp',
    imageAlt: 'Roof flashing rebuild around a chimney in Cochrane Alberta',
    body: 'Rebuild and reseal of flashing around chimneys, vents, skylights, and pipe boots. These small joints are the most common source of roof leaks in Cochrane homes and the highest-impact repair we make for the price you pay.',
  },
]

function RepairTypes() {
  return (
    <section
      className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
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
              className="mt-5 max-w-[820px] text-brand-slate leading-[1.7]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              Most Cochrane roof issues fall into one of three categories. Sure West handles all
              three using matched IKO materials, with every repair backed by a written workmanship
              guarantee.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
                Get a Free Estimate
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {REPAIR_TYPES.map(({ tier, name, image, imageAlt, body }) => (
            <div
              key={name}
              className="bg-brand-cream rounded-[12px] border border-brand-border flex flex-col overflow-hidden shadow-[0_2px_8px_rgba(44,71,102,0.06)] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.12)] transition-all duration-300 ease-out"
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
        </Reveal>
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
        <Reveal>
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
                fontSize: 'clamp(32px, 4.5vw, 48px)',
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
        </Reveal>

        <Reveal delay={150}>
          <RelatedServicesCarousel exclude="/roof-repair" cardBg="#F7F5F0" />
        </Reveal>
      </div>
    </section>
  )
}

// ─── Section: Why Sure West (repair-specific items) ─────────────────────────

const REPAIR_DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    Icon: Award,
    heading: 'Legacy',
    subtitle: 'Built to Outlast the Repair',
    body: 'Every repair we make is one we would still stand behind a decade from now. No quick patches that fail in 18 months, no caulk smeared over problems, no homeowner finding out we cut a corner. The repair we leave behind is the reputation we leave behind.',
  },
  {
    Icon: Users,
    heading: 'Brotherhood',
    subtitle: 'Same Crew, Every Repair',
    body: 'The in-house crew that diagnoses your roof is the one that fixes it. Red Seal Journeyman supervised, no subcontractor handoff, no rotating faces, no apprentice you have never met sealing your flashing. From first call to final walkthrough, every job, every time.',
  },
  {
    Icon: Handshake,
    heading: 'Character',
    subtitle: "The Repair That Doesn't Become a Replacement",
    body: 'If your roof still has years left in it, we will tell you so straight. We will not push a $20,000 replacement when a $400 repair is the honest answer. The price on your written quote does not change mid-job, and we put that commitment in writing before the work starts.',
  },
  {
    Icon: ShieldCheck,
    heading: 'Competency',
    subtitle: 'Red Seal Journeyman Standard',
    body: "Red Seal Journeyman is Canada's highest trade credential in roofing. Flashing cut to the wall, underlayment integrated, matched IKO product, manufacturer specs followed. The parts you cannot see, done right first time.",
  },
  {
    Icon: ListChecks,
    heading: 'Proven Processes',
    subtitle: 'Same Playbook, Every Repair',
    body: 'Same diagnostic checklist on every visit. Same communication before every site activity. Same magnetic nail sweep, same final walkthrough, same written workmanship guarantee handed to you before we leave the property.',
  },
]

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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(roofRepairFaqSchema) }}
      />

      <RoofRepairHero />
      <TrustLogos />
      <RepairTypes />
      <HowItWorks
        sectionBg="#F7F5F0"
        cardBg="#FFFFFF"
        heading={
          <>
            How a Sure West Cochrane
            <br className="hidden md:block" /> Roof Repair Works
          </>
        }
        body="Three clear steps from first call to repair complete. Honest diagnosis, fixed written quote, work backed by a written guarantee."
        steps={REPAIR_STEPS}
      />
      <Reviews sectionBg="#FFFFFF" cardBg="#F7F5F0" />
      <ServicesHubDifferentiators
        items={REPAIR_DIFFERENTIATORS}
        heading={
          <>
            What Sets a Sure West
            <br className="hidden lg:block" /> Roof Repair Apart
          </>
        }
        subhead="Five responsibilities we've taken on, five things every Sure West repair gets that the average Cochrane crew can't match."
      />
      <ServicesGallery
        images={RR_GALLERY_IMAGES}
        sectionBg="#FFFFFF"
        heading={<>Roof Repairs Completed Across Cochrane, Calgary, and Canmore</>}
        subhead="Every repair in our gallery was completed by our in-house crew, Red Seal Journeyman supervised. No subcontractors, no compromises."
        ctaLabel="View Full Gallery"
        ctaHref="/gallery"
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
        subtext="Red Seal Journeyman certified, free on-site diagnosis, written workmanship guarantee, and no upsell to a replacement when you do not need one."
      />
    </>
  )
}
