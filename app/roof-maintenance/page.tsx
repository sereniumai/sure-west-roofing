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
  ArrowRight,
  FileCheck,
  CheckCircle,
  Users,
  Handshake,
  ListChecks,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { RoofMaintenanceHero } from '@/components/sections/RoofMaintenanceHero'
import { TrustLogos } from '@/components/sections/TrustLogos'
import {
  RoofMaintenanceFAQ,
  roofMaintenanceFaqSchema,
} from '@/components/sections/RoofMaintenanceFAQ'
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
  title: 'Roof Maintenance Cochrane',
  description:
    'Roof maintenance Cochrane homeowners trust. Red Seal Journeyman certified. Annual visits, written reports, manufacturer warranty support included.',
  alternates: { canonical: 'https://surewestroofing.ca/roof-maintenance' },
  openGraph: {
    title: 'Roof Maintenance Cochrane | Sure West Roofing',
    description:
      'Roof maintenance Cochrane homeowners trust. Red Seal Journeyman certified. Annual visits, written reports, manufacturer warranty support included.',
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
    description: 'Red Seal certified annual roof maintenance in Cochrane, AB.',
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
    'Red Seal certified annual roof maintenance in Cochrane, Calgary, and Canmore. Inspections, minor repairs, and a written maintenance log to support your manufacturer warranty.',
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
          style={{ background: '#F7F5F0', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
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

const SIGNS = [
  {
    Icon: Clock,
    heading: 'Roof is over 5 years old',
    body: 'Even healthy Cochrane roofs benefit from an annual inspection after year five. The shingle layer has aged enough to show the early signs of wear, and catching them now is the cheapest form of roof care.',
  },
  {
    Icon: Wind,
    heading: 'Recent Chinook windstorm',
    body: 'Chinook winds regularly lift shingle tabs in Cochrane without obvious damage. A post-storm maintenance visit reseats tabs and tops up flashing seals before the next weather event finds the gap.',
  },
  {
    Icon: Calendar,
    heading: 'Spring or fall transition',
    body: 'Spring catches winter freeze-thaw damage and ice dam stress. Fall preps the roof for snow load and seals up small issues before they freeze. Two visits per year is the standard for Cochrane roofs over 15 years old.',
  },
  {
    Icon: Home,
    heading: 'Selling or buying a Cochrane home',
    body: 'A clean maintenance log adds buyer confidence and supports your asking price. For buyers, the log gives peace of mind that the roof has been professionally cared for, not deferred until something leaked.',
  },
  {
    Icon: Leaf,
    heading: 'Visible debris in valleys or gutters',
    body: 'Leaves, twigs, and shingle granules in valleys trap moisture against the shingles. A maintenance clean removes the debris and prevents the slow rot that follows when valleys cannot drain properly.',
  },
  {
    Icon: ShieldCheck,
    heading: 'Taking charge of home maintenance',
    body: 'Owning a home means staying ahead of small problems before they become expensive. A Sure West maintenance log gives you a written record of the roof, like logging furnace service or oil changes.',
  },
]

function SignsYouNeed() {
  return (
    <section className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
        <div className="flex flex-col items-center text-center mb-12 max-w-[720px] mx-auto">
          <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#FFFFFF', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
            When to Book
          </span>
          <h2 className="font-display font-medium text-brand-navy"
            style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
            When to Book Roof
            <br />
            Maintenance in Cochrane
          </h2>
          <p className="mt-5 max-w-[640px] text-brand-slate leading-[1.7]"
            style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
            Annual maintenance is the cheapest insurance your Cochrane roof can carry. Here are six situations where booking a visit is the right call.
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

const MAINTENANCE_STEPS: HowItWorksStep[] = [
  {
    number: '01',
    Icon: Calendar,
    title: 'Schedule Your Visit',
    description:
      'Booked online or by phone. We confirm by phone or email after we receive your booking, scheduled around your Cochrane week and the forecast. No deposit required, no obligation if your plans change.',
  },
  {
    number: '02',
    Icon: FileCheck,
    title: 'Inspect, Clean, Repair',
    description:
      'Slope walk and attic check, valleys cleared of debris, shingle tabs reseated, minor flashing reseals completed during the same visit, every checkpoint photographed for the log. Approximately two hours on-site.',
  },
  {
    number: '03',
    Icon: CheckCircle,
    title: 'Written Maintenance Log',
    description:
      "Photo-documented log delivered after every visit. Supports your manufacturer warranty, gives buyers a clean record at resale, and keeps your insurer informed of the roof's condition over time.",
  },
]

const MAINTENANCE_PLANS = [
  {
    tier: 'Most Popular',
    name: 'Annual Tune-Up',
    image: '/images/Cochrane Roofing Contractor Gallery 4.webp',
    imageAlt: 'Annual roof maintenance tune-up in Cochrane Alberta',
    body: 'One full inspection plus minor repairs and cleaning per year, scheduled around the Cochrane forecast. The right cadence for Cochrane homes under 15 years old. Includes a written maintenance log. Pricing scales with roof size.',
  },
  {
    tier: 'Heavy Use',
    name: 'Bi-Annual Plan',
    image: '/images/Cochrane Roofing Contractor Gallery 16.webp',
    imageAlt: 'Bi-annual roof maintenance plan for older Cochrane homes',
    body: 'Spring and fall visits to catch freeze-thaw damage and prep for snow load. Recommended for Cochrane roofs over 15 years old, hail-prone neighbourhoods, or properties with trees overhanging the roofline. Pricing scales with roof size.',
  },
  {
    tier: 'Resale Ready',
    name: 'Pre-Sale Maintenance',
    image: '/images/Cochrane Roofing Contractor Gallery 19.webp',
    imageAlt: 'Pre-sale roof maintenance package in Cochrane Alberta',
    body: 'A one-time visit timed for listing day. Includes full inspection, minor repairs, and a presentable maintenance log buyers and home inspectors can review. Removes a common deal-breaker before it surfaces in the offer negotiation.',
  },
]

function MaintenancePlans() {
  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
        <div className="flex flex-col items-center text-center mb-12 max-w-[720px] mx-auto">
          <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#F7F5F0', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
            Maintenance Plans
          </span>
          <h2 className="font-display font-medium text-brand-navy"
            style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
            Three Maintenance Plans for Cochrane Homes
          </h2>
          <p className="mt-5 max-w-[600px] text-brand-slate leading-[1.7]"
            style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
            Choose the cadence that fits your roof&apos;s age, your neighbourhood, and where you are in homeownership. Every plan includes a written maintenance log that supports your manufacturer warranty and your records.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">Get a Free Estimate</Button>
          </div>
        </div>
        </Reveal>

        <Reveal delay={120}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {MAINTENANCE_PLANS.map(({ tier, name, image, imageAlt, body }) => (
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

const MAINTENANCE_DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    Icon: Award,
    heading: 'Legacy',
    subtitle: 'The Log We Sign Our Name To',
    body: 'Every maintenance log we sign is one we would stand behind in Cochrane long after the visit. Honest findings, accurate condition ratings, no padding the visit, no missing problems to skip a repair. The log we leave is the reputation we leave.',
  },
  {
    Icon: Users,
    heading: 'Brotherhood',
    subtitle: 'A Tight-Knit Crew',
    body: 'A team that has each other’s backs on the roof and off. Tight-knit, cohesive, aligned in purpose, because the work is too hard to do alongside people you cannot respect. Anyone in a Sure West uniform is held to the same standard, every Cochrane maintenance visit.',
  },
  {
    Icon: Handshake,
    heading: 'Character',
    subtitle: "The Visit That Doesn't Upsell",
    body: 'We will not inflate a minor reset into a full repair quote. We will not bury a real issue to avoid an awkward conversation. The maintenance is the maintenance, the same whether your roof is two years old or twelve.',
  },
  {
    Icon: ShieldCheck,
    heading: 'Competency',
    subtitle: 'Red Seal Journeyman Standard',
    body: 'Red Seal Journeyman is the highest trade credential in Canadian roofing. Done right: every slope walked, every flashing checked, every valley cleared, warranty terms respected. The details a quick visit misses, we catch first.',
  },
  {
    Icon: ListChecks,
    heading: 'Proven Processes',
    subtitle: 'Same Checklist, Every Roof',
    body: 'Same checklist on every Cochrane roof. Same photo-documentation standard, same condition ratings, same maintenance log format, same delivery timing. Whether your roof is one year old or fifteen, the standard does not change.',
  },
]


const MAINTENANCE_GALLERY_IMAGES = [
  { src: '/images/Cochrane Roofing Contractor Gallery 1.webp',  alt: 'Cochrane roof maintained by Sure West Roofing',                       caption: 'Cochrane, AB · Maintained' },
  { src: '/images/Cochrane Roofing Contractor Gallery 4.webp',  alt: 'Annual maintenance tune-up on a Cochrane Alberta home',               caption: 'Cochrane, AB · Annual Visit' },
  { src: '/images/Cochrane Roofing Contractor Gallery 7.webp',  alt: 'Maintenance visit completed by Sure West Roofing in Calgary',         caption: 'Calgary, AB · Maintenance' },
  { src: '/images/Cochrane Roofing Contractor Gallery 9.webp',  alt: 'Sure West crew clearing debris from roof valleys during maintenance',  caption: 'Cochrane, AB · Valleys' },
  { src: '/images/Cochrane Roofing Contractor Gallery 12.webp', alt: 'Pre-sale maintenance package on a Cochrane home',                     caption: 'Cochrane, AB · Pre-Sale' },
  { src: '/images/Cochrane Roofing Contractor Gallery 15.webp', alt: 'Roof inspection and minor repair in Cochrane Alberta',                caption: 'Cochrane, AB · Inspection' },
  { src: '/images/Cochrane Roofing Contractor Gallery 16.webp', alt: 'Bi-annual maintenance plan for an older Cochrane home',               caption: 'Cochrane, AB · Bi-Annual' },
  { src: '/images/Cochrane Roofing Contractor Gallery 19.webp', alt: 'Pre-sale roof maintenance documentation in Cochrane',                 caption: 'Cochrane, AB · Resale Log' },
  { src: '/images/Cochrane Roofing Contractor Gallery 20.webp', alt: 'Maintenance after a Calgary windstorm by Sure West Roofing',          caption: 'Calgary, AB · Post-Storm' },
  { src: '/images/Cochrane Roofing Contractor Gallery 3.webp', alt: 'Written maintenance log handed to a Cochrane homeowner',              caption: 'Cochrane, AB · Written Log' },
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

        <RelatedServicesCarousel exclude="/roof-maintenance" cardBg="#FFFFFF" />
      </div>
    </section>
  )
}

export default function RoofMaintenancePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(roofMaintenanceFaqSchema) }} />

      <RoofMaintenanceHero />
      <TrustLogos />
      <MaintenancePlans />
      <SignsYouNeed />
      <HowItWorks
        heading={
          <>
            How a Sure West Cochrane
            <br className="hidden md:block" /> Maintenance Visit Works
          </>
        }
        body={
          <>
            Three clear steps from booking to written log. Most maintenance visits are
            <br className="hidden md:block" /> completed in under two hours, with no hidden steps and no surprise charges.
          </>
        }
        steps={MAINTENANCE_STEPS}
      />
      <Reviews sectionBg="#F7F5F0" cardBg="#FFFFFF" />
      <ServicesHubDifferentiators
        items={MAINTENANCE_DIFFERENTIATORS}
        heading={
          <>
            What Sets a Sure West
            <br className="hidden lg:block" /> Maintenance Visit Apart
          </>
        }
        subhead="Five responsibilities we've taken on, five things every Sure West maintenance visit gets that the average Cochrane crew can't match."
        sectionBg="#FFFFFF"
        cardBg="#F7F5F0"
      />
      <ServicesGallery images={MAINTENANCE_GALLERY_IMAGES} sectionBg="#F7F5F0" />
      <RoofMaintenanceFAQ />
      <RelatedServices />
      <BottomCTA
        heading={<>Need Roof Maintenance<br className="hidden md:block" /> You Can Actually Trust?</>}
        subtext="Red Seal Journeyman certified, written itemised quote during the on-site visit, written maintenance log, and no sales pressure. Same standard, every visit, every roof."
        sectionBg="#FFFFFF"
      />
    </>
  )
}
