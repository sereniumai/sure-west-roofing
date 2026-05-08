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
  ArrowRight,
  CheckCircle,
  ShoppingBag,
  Users,
  Handshake,
  ListChecks,
} from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'
import { Button } from '@/components/ui/Button'
import { RoofInspectionHero } from '@/components/sections/RoofInspectionHero'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { RoofInspectionFAQ, roofInspectionFaqSchema } from '@/components/sections/RoofInspectionFAQ'
import { HowItWorks, type HowItWorksStep } from '@/components/sections/HowItWorks'
import { RelatedServicesCarousel } from '@/components/sections/RelatedServicesCarousel'
import { ServicesGallery } from '@/components/sections/ServicesGallery'
import { Reviews } from '@/components/sections/Reviews'
import {
  ServicesHubDifferentiators,
  type DifferentiatorItem,
} from '@/components/sections/ServicesHubDifferentiators'
import { BottomCTA } from '@/components/sections/BottomCTA'

export const metadata: Metadata = {
  title: 'Roof Inspection Cochrane',
  description:
    'Roof inspection Cochrane homeowners trust. Red Seal Journeyman certified. Photo report for buyers, sellers, and insurers. Free with quoted work.',
  alternates: { canonical: 'https://surewestroofing.ca/roof-inspection' },
  openGraph: {
    title: 'Roof Inspection Cochrane | Sure West Roofing',
    description:
      'Roof inspection Cochrane homeowners trust. Red Seal Journeyman certified. Photo report for buyers, sellers, and insurers. Free with quoted work.',
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
    description: 'Roof inspection Cochrane homeowners trust. Red Seal Journeyman certified. Photo report for buyers, sellers, and insurers. Free with quoted work.',
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
    'Red Seal Journeyman certified roof inspection in Cochrane, Calgary, and Canmore. Pre-purchase, post-storm, and annual inspections with a written photo report.',
}


// ─── Section: Cochrane Roof Inspections Documented for Buyers and Insurers ─


const SIGNS = [
  { Icon: ShoppingBag, heading: 'Buying or selling a Cochrane home', body: "Pre-purchase and pre-listing inspections give you negotiating leverage and remove a deal-breaker before it surfaces in the deal. The report carries weight with realtors, buyers, and sellers' lawyers." },
  { Icon: CloudLightning, heading: 'After a hail or windstorm', body: 'Cochrane storms cause damage that often does not show from the ground. A post-storm inspection documents what happened with dated photos, useful whether you are filing a claim or paying direct.' },
  { Icon: Clock, heading: 'Roof is 10 or more years old', body: 'Roofs over 10 years old have been through enough freeze-thaw and wind to develop early-stage issues. An inspection finds them while they are still cheap to fix, before they leak.' },
  { Icon: FileCheck, heading: 'Insurance carrier requests one', body: 'Many Alberta insurers request a professional roof inspection at policy renewal or as part of a claim. Sure West provides the photo-documented report and written diagnosis your insurer needs.' },
  { Icon: Eye, heading: 'Visible signs of wear from the ground', body: 'Curling shingles, missing tabs, granule buildup in gutters, or sagging rooflines visible from below mean the roof is asking for attention. Confirm what is actually happening before it becomes a leak inside the home.' },
  { Icon: Calendar, heading: 'Annual maintenance check', body: 'Most Cochrane homes benefit from one professional inspection per year. The cost is small compared to what early detection saves on repairs, and it builds a documented history of the roof.' },
]

function SignsYouNeed() {
  return (
    <section className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
        <div className="flex flex-col items-center text-center mb-12 max-w-[820px] mx-auto">
          <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#FFFFFF', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
            When to Book
          </span>
          <h2 className="font-display font-medium text-brand-navy"
            style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
            When to Book a Roof
            <br />
            Inspection in Cochrane
          </h2>
          <p className="mt-5 max-w-[820px] text-brand-slate leading-[1.7]"
            style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
            A roof inspection is the cheapest insight your Cochrane roof can give you.
            <br className="hidden md:block" /> Here are six situations where booking one is the right call, claim or no claim.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">Get a Free Estimate</Button>
          </div>
        </div>
        </Reveal>

        <Reveal delay={120}>
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
        </Reveal>
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
      'Online or by phone. We confirm by phone or email after we receive your booking, scheduled around your Cochrane week and the forecast. No deposit required, no obligation if you change your mind.',
  },
  {
    number: '02',
    Icon: FileCheck,
    title: 'Walk and Attic Check',
    description:
      'Every slope walked, attic checked from inside. Every checkpoint photographed with location notes and a severity rating. Approximately 60 to 90 minutes on-site, weather permitting.',
  },
  {
    number: '03',
    Icon: CheckCircle,
    title: 'Written Report Delivered',
    description:
      'Photo-documented PDF delivered after the on-site inspection, formatted for buyers, sellers, or insurers. Free if you book any of the recommended repair, replacement, or maintenance work with Sure West.',
  },
]

const INSPECTION_TYPES = [
  { tier: 'Real Estate', name: 'Pre-Purchase Inspection', image: '/images/Cochrane Roofing Contractor Gallery 2.webp', imageAlt: 'Pre-purchase roof inspection in Cochrane Alberta', body: 'Independent roof condition report for buyers, often paired with a general home inspection. We document remaining lifespan, repair priorities, and replacement cost ranges. Findings translate directly into negotiating leverage on the offer price, in writing, with photos.' },
  {
    tier: 'Insurance',
    name: 'Post-Storm / Claim Inspection',
    image: '/images/Cochrane Roofing Contractor Gallery 8.webp',
    imageAlt: 'Post-storm insurance roof inspection in Cochrane',
    body: (
      <>
        Photo-documented{' '}
        <Link
          href="/hail-damage-repair"
          className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors"
        >
          hail and wind damage report
        </Link>
        {' '}built to Alberta insurer documentation standards. Includes itemised scope, damage classification, and direct adjuster communication on request. Equally useful if you are paying out of pocket and want a clear written record of damage.
      </>
    ),
  },
  { tier: 'Annual', name: 'Maintenance Inspection', image: '/images/Cochrane Roofing Contractor Gallery 12.webp', imageAlt: 'Annual maintenance roof inspection in Cochrane', body: 'Yearly inspection that catches small issues, lifted shingles, cracked sealant, minor flashing problems, before they become leaks. Often paired with a maintenance visit during the same on-site call. Recommended on roofs over five years old, especially after a Cochrane winter or hail season.' },
]

function InspectionTypes() {
  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
        <div className="flex flex-col items-center text-center mb-12 max-w-[820px] mx-auto">
          <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#F7F5F0', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
            Inspection Types
          </span>
          <h2 className="font-display font-medium text-brand-navy"
            style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
            Cochrane Roof Inspections We Offer
          </h2>
          <p className="mt-5 max-w-[820px] text-brand-slate leading-[1.7]"
            style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
            Most Cochrane roof inspections fall into one of three categories. Each one uses the same crew, the same checklist, and the same photo-documented report, tailored to your situation.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">Get a Free Estimate</Button>
          </div>
        </div>
        </Reveal>

        <Reveal delay={120}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {INSPECTION_TYPES.map(({ tier, name, image, imageAlt, body }) => (
            <div key={name} className="bg-brand-cream rounded-[12px] border border-brand-border flex flex-col overflow-hidden shadow-[0_2px_8px_rgba(44,71,102,0.06)] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.12)] transition-all duration-300 ease-out">
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
        </Reveal>
      </div>
    </section>
  )
}
// ─── Section: Why Sure West (5-card, placeholder copy) ────────────────────

const INSPECTION_DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    Icon: Award,
    heading: 'Legacy',
    subtitle: 'Worth Standing Behind in 20 Years',
    body: 'Every inspection report we sign is one we would still stand behind in 20 years. Honest findings, accurate severity ratings, no inflating issues to push a sale, no missing problems to keep a job small. The report we leave is the reputation we leave.',
  },
  {
    Icon: Users,
    heading: 'Brotherhood',
    subtitle: 'Same Crew Through to the Work',
    body: 'Craig leads every inspection. The crew you meet on the inspection is the crew on any work that follows. No subcontractor handoff, no rotating faces, no estimator who hands you off to a different team. First photo to final repair, every time.',
  },
  {
    Icon: Handshake,
    heading: 'Character',
    subtitle: "The Report That Doesn't Sell You",
    body: 'We will not inflate a small issue into a full replacement quote. We will not bury a real problem to avoid a tough conversation. The inspection is the inspection, the same whether you book the work with us or take the report elsewhere.',
  },
  {
    Icon: ShieldCheck,
    heading: 'Competency',
    subtitle: 'Red Seal Journeyman Standard',
    body: 'Red Seal Journeyman is the highest trade credential in Canadian roofing. Inspections done right means every slope walked, attic checked inside, flashings and penetrations evaluated, findings classified accurately. The parts a quick visual misses, we find first.',
  },
  {
    Icon: ListChecks,
    heading: 'Proven Processes',
    subtitle: 'Same Checklist, Every Roof',
    body: 'Same checklist on every Cochrane roof. Same photo-documentation standard. Same severity ratings, same report format, same one-business-day delivery. Whether your inspection is for a buyer, a seller, an insurer, or yourself, the standard does not change.',
  },
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
    <section className="relative bg-brand-cream overflow-hidden py-20 md:py-24" style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
          <div>
            <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-5 text-brand-gold"
              style={{ background: '#FFFFFF', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
              More Services
            </span>
            <h2 className="font-display font-medium text-brand-navy" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(roofInspectionFaqSchema) }} />

      <RoofInspectionHero />
      <TrustLogos />
      <InspectionTypes />
      <SignsYouNeed />
      <HowItWorks
        sectionBg="#FFFFFF"
        cardBg="#F7F5F0"
        heading={
          <>
            How a Sure West Cochrane
            <br className="hidden md:block" /> Roof Inspection Works
          </>
        }
        body={
          <>
            Three clear steps from booking to written report. Most inspections are
            <br className="hidden md:block" /> completed in 60 to 90 minutes on-site.
          </>
        }
        steps={INSPECTION_STEPS}
      />
      <Reviews sectionBg="#F7F5F0" cardBg="#FFFFFF" />
      <ServicesHubDifferentiators
        items={INSPECTION_DIFFERENTIATORS}
        heading={
          <>
            What Sets a Sure West
            <br className="hidden lg:block" /> Roof Inspection Apart
          </>
        }
        subhead="Five responsibilities we've taken on, five things every Sure West roof inspection gets that the average Cochrane crew can't match."
        sectionBg="#FFFFFF"
        cardBg="#F7F5F0"
      />
      <ServicesGallery
        images={INSPECTION_GALLERY_IMAGES}
        sectionBg="#F7F5F0"
        ctaLabel="View Full Gallery"
        ctaHref="/gallery"
      />
      <RoofInspectionFAQ />
      <RelatedServices />
      <BottomCTA
        sectionBg="#FFFFFF"
        heading={
          <>
            Need a Roof Inspection
            <br className="hidden md:block" /> You Can Actually Trust?
          </>
        }
        subtext="Red Seal Journeyman certified, written photo report after every inspection, free with quoted work, and no sales pressure. Same standard for buyers, sellers, and insurers."
      />
    </>
  )
}
