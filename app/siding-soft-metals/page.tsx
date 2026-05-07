import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ShieldCheck,
  Award,
  ArrowRight,
  Calendar,
  FileCheck,
  CheckCircle,
  Users,
  Handshake,
  ListChecks,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { SidingSoftMetalsHero } from '@/components/sections/SidingSoftMetalsHero'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { SidingWhatIncluded } from '@/components/sections/SidingWhatIncluded'
import {
  SidingSoftMetalsFAQ,
  sidingSoftMetalsFaqSchema,
} from '@/components/sections/SidingSoftMetalsFAQ'
import { HowItWorks, type HowItWorksStep } from '@/components/sections/HowItWorks'
import { RelatedServicesCarousel } from '@/components/sections/RelatedServicesCarousel'
import { ServicesGallery } from '@/components/sections/ServicesGallery'
import { Reviews } from '@/components/sections/Reviews'
import {
  ServicesHubDifferentiators,
  type DifferentiatorItem,
} from '@/components/sections/ServicesHubDifferentiators'
import { BottomCTA } from '@/components/sections/BottomCTA'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Siding & Soft Metals Cochrane',
  description:
    'Cochrane siding and soft metals by Red Seal Journeyman roofers. All major materials installed. Standalone or bundled with your roof project.',
  alternates: {
    canonical: 'https://surewestroofing.ca/siding-soft-metals',
  },
  openGraph: {
    title: 'Siding & Soft Metals Cochrane | Sure West Roofing',
    description:
      'Cochrane siding and soft metals by Red Seal Journeyman roofers. All major materials installed. Standalone or bundled with your roof project.',
    url: 'https://surewestroofing.ca/siding-soft-metals',
    type: 'website',
    locale: 'en_CA',
    images: [
      {
        url: 'https://surewestroofing.ca/images/Cochrane Roofing Contractor Gallery 7.webp',
        width: 1200,
        height: 630,
        alt: 'Sure West Roofing siding and soft metals project on a Cochrane Alberta home',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Siding & Soft Metals Cochrane | Sure West Roofing',
    description:
      'Red Seal Journeyman siding, eavestroughs, fascia, and soffit work in Cochrane, AB. Written workmanship guarantee.',
    images: ['https://surewestroofing.ca/images/Cochrane Roofing Contractor Gallery 7.webp'],
  },
}

// ─── JSON-LD Schemas ──────────────────────────────────────────────────────────

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://surewestroofing.ca' },
    { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://surewestroofing.ca/services' },
    { '@type': 'ListItem', position: 3, name: 'Siding & Soft Metals', item: 'https://surewestroofing.ca/siding-soft-metals' },
  ],
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Siding and Soft Metals Installation',
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
  url: 'https://surewestroofing.ca/siding-soft-metals',
  description:
    'Red Seal Journeyman siding installation, eavestroughs, fascia, soffit, and metal flashing across Cochrane, Calgary, and Canmore. Vinyl, fiber cement, and metal siding. Written workmanship guarantee.',
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
            background: '#F7F5F0',
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

// ─── Section: How It Works (3-step) ──────────────────────────────────────────

const SIDING_STEPS: HowItWorksStep[] = [
  {
    number: '01',
    Icon: Calendar,
    title: 'Free On-Site Assessment',
    description:
      'We walk every elevation of your Cochrane home and review siding, fascia, soffits, and eavestroughs as one connected system. We confirm by phone or email after you book, scheduled around your week.',
  },
  {
    number: '02',
    Icon: FileCheck,
    title: 'Approve Your Written Quote',
    description:
      'Fixed written quote with material choice, full scope, project timeline, and total price. Once you approve, materials are ordered and the install is scheduled around your calendar and the Cochrane forecast.',
  },
  {
    number: '03',
    Icon: CheckCircle,
    title: 'Install and Final Walkthrough',
    description:
      'Old siding off, new panels and matched soft metals on, full daily cleanup. We finish with a final walkthrough, hand you the written workmanship guarantee, and leave the site cleaner than we found it.',
  },
]

// ─── Section: Service Types ──────────────────────────────────────────────────

const SERVICE_TYPES = [
  {
    tier: 'Exterior Refresh',
    name: 'Siding Installation & Repair',
    image: '/images/Cochrane Roofing Contractor Gallery 1.webp',
    imageAlt: 'Siding installation completed by Sure West Roofing in Cochrane Alberta',
    body: 'Vinyl, fibre cement (James Hardie), metal, and engineered siding installed to manufacturer spec on every elevation. Full replacements and partial repairs across Cochrane, Calgary, and Canmore. Hail-rated and Chinook-tested products, matched to the Alberta climate your home actually faces.',
  },
  {
    tier: 'Water Management',
    name: 'Eavestroughs & Downspouts',
    image: '/images/Cochrane Roofing Contractor Gallery 5.webp',
    imageAlt: 'Seamless aluminum eavestroughs installed on a Cochrane Alberta home',
    body: 'Seamless 5-inch and 6-inch K-style aluminum eavestrough systems with matched downspouts and proper grade for water flow. Clean replacement of full systems or repair of damaged sections, with attention to where the water actually goes once it leaves your roof, away from your foundation.',
  },
  {
    tier: 'Roofline Trim',
    name: 'Fascia, Soffits & Flashing',
    image: '/images/Cochrane Roofing Contractor Gallery 19.webp',
    imageAlt: 'New fascia and soffit work on a Cochrane Alberta home',
    body: 'Aluminum fascia and properly vented soffit panels paired with custom flashing around windows, doors, dormers, and roof-to-wall transitions. The trim work that quietly protects everything else from water, ice, and wildlife. Often the difference between a tight envelope and a future repair.',
  },
]

function ServiceTypes() {
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
              background: '#F7F5F0',
              fontSize: '12px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            What We Install
          </span>
          <h2
            className="font-display font-medium text-brand-navy"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              lineHeight: 1.15,
              letterSpacing: '-0.005em',
            }}
          >
            Siding &amp; Soft Metals We
            <br className="hidden md:block" /> Install in Cochrane
          </h2>
          <p
            className="mt-5 max-w-[720px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Three connected trades, one in-house crew, all major materials. Sure West installs the
            siding and the soft metalwork that protects it, standalone or bundled with your roof
            project.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
              Get a Free Estimate
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {SERVICE_TYPES.map(({ tier, name, image, imageAlt, body }) => (
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
      </div>
    </section>
  )
}

// ─── Section: Why Sure West (5-card, placeholder copy) ────────────────────

const SIDING_DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    Icon: Award,
    heading: 'Legacy',
    subtitle: 'Worth Standing Behind in 20 Years',
    body: 'Every panel we hang, every J-channel we tuck, every fascia line we run is one we would still stand behind in 20 years. Honest work, accurate detail, no shortcuts buried under trim. The shell we leave on your home is the reputation we leave in Cochrane.',
  },
  {
    Icon: Users,
    heading: 'Brotherhood',
    subtitle: 'Same Crew Through to the Finish',
    body: 'Craig leads every Sure West siding project. The crew you meet on the assessment is the crew on the install. No subcontractor handoff, no rotating faces, no estimator who hands you off to someone else. First measurement to final walkthrough, every time.',
  },
  {
    Icon: Handshake,
    heading: 'Character',
    subtitle: 'The Quote That Holds',
    body: 'We will not pad the quote with line items you do not need. We will not bury a real problem behind a panel. The price on your written quote does not change mid-project, the same whether you are bundling siding with a roof or booking standalone.',
  },
  {
    Icon: ShieldCheck,
    heading: 'Competency',
    subtitle: 'Red Seal Journeyman Standard',
    body: 'Red Seal Journeyman is the highest trade credential in Canadian roofing. Soft metals done right means tight panel reveals, watertight transitions, properly vented soffit, eaves pitched to drain, flashing tied in. The details a generalist crew misses, we catch first.',
  },
  {
    Icon: ListChecks,
    heading: 'Proven Processes',
    subtitle: 'Same Standard, Every Project',
    body: 'Same site protocol on every Cochrane project. Same daily progress photos, end-of-day cleanup, final walkthrough, written workmanship guarantee. Whether your project is one elevation or a full re-clad, the standard does not change panel by panel.',
  },
]

// ─── Overview carousel images ────────────────────────────────────────────────

// ─── Gallery images for this page ─────────────────────────────────────────────

const SSM_GALLERY_IMAGES = [
  { src: '/images/Cochrane Roofing Contractor Gallery 1.webp',  alt: 'Siding project completed by Sure West Roofing in Cochrane Alberta',     caption: 'Cochrane, AB · Siding' },
  { src: '/images/Cochrane Roofing Contractor Gallery 5.webp',  alt: 'Eavestrough installation in Cochrane Alberta by Sure West Roofing',     caption: 'Cochrane, AB · Eaves' },
  { src: '/images/Cochrane Roofing Contractor Gallery 7.webp',  alt: 'Sure West Roofing exterior project in Cochrane Alberta',                caption: 'Cochrane, AB · Exterior' },
  { src: '/images/Cochrane Roofing Contractor Gallery 9.webp',  alt: 'Soffit and fascia work in Cochrane Alberta by Sure West Roofing',       caption: 'Cochrane, AB · Trim' },
  { src: '/images/Cochrane Roofing Contractor Gallery 3.webp', alt: 'Siding and soft metals project in Calgary by Sure West Roofing',        caption: 'Calgary, AB · Siding' },
  { src: '/images/Cochrane Roofing Contractor Gallery 15.webp', alt: 'Custom flashing rebuild in Cochrane Alberta by Sure West Roofing',      caption: 'Cochrane, AB · Flashing' },
  { src: '/images/Cochrane Roofing Contractor Gallery 16.webp', alt: 'Exterior trim project in Cochrane Alberta by Sure West Roofing',        caption: 'Cochrane, AB · Trim' },
  { src: '/images/Cochrane Roofing Contractor Gallery 19.webp', alt: 'Detailed soft-metal work in Cochrane Alberta by Sure West Roofing',     caption: 'Cochrane, AB · Soft Metals' },
  { src: '/images/Cochrane Roofing Contractor Gallery 20.webp', alt: 'Storm-recovery siding repair in Calgary by Sure West Roofing',          caption: 'Calgary, AB · Repair' },
  { src: '/images/Cochrane Roofing Contractor Gallery 21.webp', alt: 'Insurance-documented siding repair in Cochrane',                        caption: 'Cochrane, AB · Repair' },
]

// ─── Section: Related Services ────────────────────────────────────────────────

function RelatedServices() {
  return (
    <section
      className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <div>
            <span
              className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-5 text-brand-gold"
              style={{
                background: '#FFFFFF',
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

        <RelatedServicesCarousel exclude="/siding-soft-metals" cardBg="#FFFFFF" />
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function SidingSoftMetalsPage() {
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sidingSoftMetalsFaqSchema) }}
      />

      <SidingSoftMetalsHero />
      <TrustLogos />
      <ServiceTypes />
      <SidingWhatIncluded />
      <HowItWorks
        heading={
          <>
            How a Sure West Cochrane
            <br className="hidden md:block" /> Siding Project Works
          </>
        }
        body="Three clear steps from first walkthrough to project complete. No surprise charges, no rotating crews, no hidden steps you only discover when the bill arrives."
        steps={SIDING_STEPS}
      />
      <Reviews sectionBg="#F7F5F0" cardBg="#FFFFFF" />
      <ServicesHubDifferentiators
        items={SIDING_DIFFERENTIATORS}
        heading={
          <>
            What Sets a Sure West Siding
            <br className="hidden lg:block" /> &amp; Soft Metals Project Apart
          </>
        }
        subhead="Five responsibilities we've taken on, five things every Sure West siding project gets that the average Cochrane crew can't match."
        sectionBg="#FFFFFF"
        cardBg="#F7F5F0"
      />
      <ServicesGallery
        images={SSM_GALLERY_IMAGES}
        sectionBg="#F7F5F0"
        heading="Siding & Soft Metals Projects in Cochrane, Calgary, and Canmore"
        subhead="Every project in our gallery was completed by our in-house crew, Red Seal Journeyman supervised. No subcontractors, no compromises."
      />
      <SidingSoftMetalsFAQ />
      <RelatedServices />
      <BottomCTA
        heading={
          <>
            Ready for Siding &amp; Soft Metals
            <br className="hidden md:block" /> You Can Actually Trust?
          </>
        }
        subtext="Red Seal Journeyman certified, fixed written quote during the on-site visit, written workmanship guarantee, and no sales pressure. Standalone or bundled with your roof project."
        sectionBg="#FFFFFF"
      />
    </>
  )
}
