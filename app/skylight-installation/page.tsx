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
import { SkylightInstallationHero } from '@/components/sections/SkylightInstallationHero'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { SkylightWhatIncluded } from '@/components/sections/SkylightWhatIncluded'
import {
  SkylightInstallationFAQ,
  skylightInstallationFaqSchema,
} from '@/components/sections/SkylightInstallationFAQ'
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
  title: 'Skylight Installation Cochrane',
  description:
    'Cochrane skylight installation by Red Seal Journeyman roofers. Sealed, flashed, and finished to manufacturer spec. No leaks, no shortcuts.',
  alternates: { canonical: 'https://surewestroofing.ca/skylight-installation' },
  openGraph: {
    title: 'Skylight Installation Cochrane | Sure West Roofing',
    description:
      'Cochrane skylight installation by Red Seal Journeyman roofers. Sealed, flashed, and finished to manufacturer spec. No leaks, no shortcuts.',
    url: 'https://surewestroofing.ca/skylight-installation',
    type: 'website',
    locale: 'en_CA',
    images: [
      {
        url: 'https://surewestroofing.ca/images/Cochrane Roofing Contractor Gallery 13.webp',
        width: 1200,
        height: 630,
        alt: 'Skylight installation by Sure West Roofing on a Cochrane Alberta home',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Skylight Installation Cochrane | Sure West Roofing',
    description:
      'Cochrane skylight installation by Red Seal Journeyman roofers. Sealed, flashed, and finished to manufacturer spec.',
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
    'Red Seal Journeyman skylight installation in Cochrane, Calgary, and Canmore. Sealed, flashed, and finished to manufacturer spec, with permit handling included where required.',
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

const SKYLIGHT_STEPS: HowItWorksStep[] = [
  {
    number: '01',
    Icon: Calendar,
    title: 'Free On-Site Walkthrough',
    description:
      'A Red Seal Journeyman comes to your Cochrane home, reviews the room you want a skylight in, checks the roof for pitch and access, confirms the right type and size for the space, and writes the fixed quote on site.',
  },
  {
    number: '02',
    Icon: FileCheck,
    title: 'Approve Your Written Quote',
    description:
      'Fixed written quote, skylight type, size, scope, timeline, and total price. Once you approve, we order the unit, handle permit paperwork, and schedule the install around your calendar and the Cochrane forecast.',
  },
  {
    number: '03',
    Icon: CheckCircle,
    title: 'Cut, Flash, Finish, Walkthrough',
    description:
      'Rough opening cut and framed, manufacturer flashing kit installed, shingles woven back in, interior trim and drywall return finished. We close with a final walkthrough and hand you the written workmanship guarantee.',
  },
]

const SKYLIGHT_TYPES = [
  {
    tier: 'Daylight Only',
    name: 'Fixed Skylights',
    image: '/images/Cochrane Roofing Contractor Gallery 1.webp',
    imageAlt: 'Fixed skylight installed in a Cochrane Alberta home',
    body: 'Sealed glass, no opening mechanism. The most leak-resistant skylight type by design and the simplest to install. Used to bring natural light into living rooms, hallways, stairwells, and finished basements where ventilation is not the goal.',
  },
  {
    tier: 'For Ventilation',
    name: 'Vented Skylights',
    image: '/images/Cochrane Roofing Contractor Gallery 4.webp',
    imageAlt: 'Vented skylight in a Cochrane Alberta bathroom',
    body: 'Open for fresh air and moisture release. Ideal for Cochrane kitchens and bathrooms where ventilation matters as much as light. Some open manually, others with solar or electric motors and rain-sensor close. Also called roof windows.',
  },
  {
    tier: 'For Small Spaces',
    name: 'Tubular Skylights',
    image: '/images/Cochrane Roofing Contractor Gallery 14.webp',
    imageAlt: 'Tubular skylight on a Cochrane Alberta home',
    body: 'A rooftop dome and reflective tube channel daylight down into small, dark spaces. Ideal for closets, hallways, ensuites, and powder rooms where a full skylight is not practical. The smallest install footprint of the three types. Also called sun tunnels.',
  },
]

function SkylightTypes() {
  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col items-center text-center mb-12 max-w-[720px] mx-auto">
          <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#F7F5F0', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
            Skylight Types
          </span>
          <h2 className="font-display font-medium text-brand-navy"
            style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
            Three Skylight Types Common
            <br className="hidden md:block" /> in Cochrane Homes
          </h2>
          <p className="mt-5 max-w-[640px] text-brand-slate leading-[1.7]"
            style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
            Three industry-standard skylight types are commonly installed in Alberta homes. Each
            suits a different room and a different goal. Sure West will walk you through which type
            fits your home at the on-site assessment.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">Get a Free Estimate</Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {SKYLIGHT_TYPES.map(({ tier, name, image, imageAlt, body }) => (
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
      </div>
    </section>
  )
}

// ─── Section: Why Sure West (5-card, placeholder copy awaiting Robert) ────

const SKYLIGHT_DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    Icon: Award,
    heading: 'Legacy',
    subtitle: 'Worth Standing Behind in 20 Years',
    body: 'Every skylight we cut into a Cochrane roof is one we would still stand behind in 20 years. Honest work, accurate detail, no shortcuts buried under flashing. The opening we leave in your roof is the reputation we leave in town.',
  },
  {
    Icon: Users,
    heading: 'Brotherhood',
    subtitle: 'Same Crew Through to the Finish',
    body: 'Craig leads every Sure West skylight project. The crew you meet at the consultation is the crew on the install. No subcontractor handoff, no rotating faces, no estimator who hands you off. First measurement to final walkthrough, every time.',
  },
  {
    Icon: Handshake,
    heading: 'Character',
    subtitle: 'The Quote That Holds',
    body: 'We will not pad the quote with line items you do not need. We will not bury a real problem behind drywall return. The price on your written quote does not change mid-project, the same whether you are bundling skylights with a roof or booking standalone.',
  },
  {
    Icon: ShieldCheck,
    heading: 'Competency',
    subtitle: 'Red Seal Journeyman Standard',
    body: 'Red Seal Journeyman is the highest trade credential in Canadian roofing. A skylight done right means manufacturer flashing kit installed as specified, ice-and-water shield around the perimeter, interior trim finished paint-ready. We catch what generalists miss.',
  },
  {
    Icon: ListChecks,
    heading: 'Proven Processes',
    subtitle: 'Same Standard, Every Project',
    body: 'Same site protocol on every Cochrane skylight project. Same daily progress photos, end-of-day cleanup, final walkthrough, written workmanship guarantee. Whether your project is a single skylight or a multi-unit install, the standard does not change.',
  },
]

const SKYLIGHT_GALLERY_IMAGES = [
  { src: '/images/Cochrane Roofing Contractor Gallery 1.webp',  alt: 'Skylight installation completed by Sure West Roofing in Cochrane Alberta',   caption: 'Cochrane, AB · Installation' },
  { src: '/images/Cochrane Roofing Contractor Gallery 4.webp',  alt: 'Vented skylight installed in a Cochrane Alberta bathroom',                  caption: 'Cochrane, AB · Vented' },
  { src: '/images/Cochrane Roofing Contractor Gallery 7.webp',  alt: 'Skylight installation completed by Sure West Roofing in Calgary Alberta',   caption: 'Calgary, AB · Skylight' },
  { src: '/images/Cochrane Roofing Contractor Gallery 13.webp', alt: 'Skylight cut and flashed by Sure West Roofing on a Cochrane Alberta home',  caption: 'Calgary, AB · Skylight' },
  { src: '/images/Cochrane Roofing Contractor Gallery 14.webp', alt: 'Manufacturer-spec skylight installation by Sure West Roofing in Cochrane Alberta', caption: 'Cochrane, AB · Skylight' },
  { src: '/images/Cochrane Roofing Contractor Gallery 15.webp', alt: 'Skylight flashing detail in Cochrane Alberta',                              caption: 'Cochrane, AB · Flashing' },
  { src: '/images/Cochrane Roofing Contractor Gallery 3.webp',  alt: 'Detailed skylight perimeter flashing in Cochrane',                          caption: 'Cochrane, AB · Detail' },
  { src: '/images/Cochrane Roofing Contractor Gallery 20.webp', alt: 'Skylight replacement project in Calgary by Sure West Roofing',             caption: 'Calgary, AB · Replacement' },
  { src: '/images/Cochrane Roofing Contractor Gallery 21.webp', alt: 'Skylight installed by Sure West Roofing on a Cochrane Alberta roof',       caption: 'Cochrane, AB · Skylight' },
  { src: '/images/Cochrane Roofing Contractor Gallery 22.webp', alt: 'Completed skylight installation in Cochrane Alberta',                       caption: 'Cochrane, AB · Completed' },
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

        <RelatedServicesCarousel exclude="/skylight-installation" cardBg="#FFFFFF" />
      </div>
    </section>
  )
}

export default function SkylightInstallationPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(skylightInstallationFaqSchema) }} />

      <SkylightInstallationHero />
      <TrustLogos />
      <SkylightTypes />
      <SkylightWhatIncluded />
      <HowItWorks
        heading={
          <>
            How a Sure West Cochrane
            <br className="hidden md:block" /> Skylight Install Works
          </>
        }
        body="Three clear steps from first walkthrough to install complete. No surprise charges, no rotating crews, no hidden steps you only discover at handover."
        steps={SKYLIGHT_STEPS}
      />
      <Reviews sectionBg="#F7F5F0" cardBg="#FFFFFF" />
      <ServicesHubDifferentiators
        items={SKYLIGHT_DIFFERENTIATORS}
        heading={
          <>
            Why Cochrane Homeowners
            <br className="hidden lg:block" /> Trust Sure West for Skylights
          </>
        }
        subhead="Five responsibilities we've taken on, five things every Sure West skylight install gets that the average Cochrane crew can't match."
        sectionBg="#FFFFFF"
        cardBg="#F7F5F0"
      />
      <ServicesGallery
        images={SKYLIGHT_GALLERY_IMAGES}
        sectionBg="#F7F5F0"
        heading="Skylight Projects in Cochrane, Calgary, and Canmore"
        subhead="Every project in our gallery was completed by our in-house crew, Red Seal Journeyman supervised. No subcontractors, no compromises."
      />
      <SkylightInstallationFAQ />
      <RelatedServices />
      <BottomCTA
        heading={
          <>
            Ready for Skylight Installation
            <br className="hidden md:block" /> You Can Actually Trust?
          </>
        }
        subtext="Red Seal Journeyman certified, fixed written quote during the on-site walkthrough, written workmanship guarantee, and no sales pressure. Standalone or bundled with your roof project."
        sectionBg="#FFFFFF"
      />
    </>
  )
}
