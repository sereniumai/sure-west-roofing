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
  Target,
  ArrowRight,
  Calendar,
  FileCheck,
  CheckCircle,
  Camera,
  Search,
  Wrench,
  Users,
  ShieldCheck,
  Home,
  Phone,
  Award,
  Handshake,
  ListChecks,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { HailDamageHero } from '@/components/sections/HailDamageHero'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { HailDamageFAQ, hailDamageFaqSchema } from '@/components/sections/HailDamageFAQ'
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
  title: 'Hail Damage Roof Repair Cochrane',
  description:
    'Hail damage roof repair in Cochrane, Calgary, and Canmore. Post-storm inspection, photo documentation, written diagnosis. Same standard, claim or no claim.',
  alternates: { canonical: 'https://surewestroofing.ca/hail-damage-repair' },
  openGraph: {
    title: 'Hail Damage Roof Repair Cochrane | Sure West Roofing',
    description:
      'Hail damage roof repair in Cochrane, Calgary, and Canmore. Post-storm inspection, photo documentation, written diagnosis. Same standard, claim or no claim.',
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
    description:
      'Hail damage roof repair in Cochrane, Calgary, and Canmore. Post-storm inspection, photo documentation, written diagnosis. Same standard, claim or no claim.',
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
    'Red Seal Journeyman certified hail damage roof repair in Cochrane, Calgary, and Canmore. Post-storm inspections, full insurance documentation, and a written workmanship guarantee.',
}


// ─── Section: Signs Your Cochrane Roof Took Hail Damage ────────────────────

const SIGNS = [
  { Icon: Disc, heading: 'Dents on metal flashing or vents', body: 'Roof vents, valley flashing, and downspouts dent visibly during hail. If the metal shows clear hits, the asphalt shingles almost always took damage too, even if it is not visible from below.' },
  { Icon: AlertTriangle, heading: 'Bruised or pitted shingles', body: 'Hail bruises the asphalt mat underneath the granule layer. The shingle looks fine from a distance, but reveals soft spots, fractures, or missing granules once a roofer inspects it up close.' },
  { Icon: Droplets, heading: 'Heavy granule loss after a storm', body: 'Gutters and downspouts full of shingle granules after a Cochrane hailstorm signal impact damage. Granule loss exposes the asphalt underneath and accelerates UV breakdown over the months that follow the storm.' },
  { Icon: AlertCircle, heading: 'Cracked skylight or pipe boot', body: 'Skylight glass, plastic vent caps, and rubber pipe boots crack under hail before shingles do. Visible cracks on these accessories are an early indicator of roof-wide damage worth a closer look.' },
  { Icon: CloudRain, heading: 'Leaks that started after recent hail', body: 'A new leak in the weeks or months after a storm is one of the strongest signs of hail damage. Hail can fracture shingles without leaking immediately, with water finding the crack later.' },
  { Icon: Target, heading: 'Spatter marks on horizontal surfaces', body: 'Hail leaves circular dirt-free spots on AC units, deck rails, wooden fences, and outdoor furniture. If you spot spatter marks on hard surfaces around your property, the roof above almost certainly took hits.' },
]

function SignsYouNeed() {
  return (
    <section
      className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-12 max-w-[720px] mx-auto">
            <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
              style={{ background: '#F7F5F0', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
              Signs to Watch
            </span>
            <h2 className="font-display font-medium text-brand-navy" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
              Signs Your Cochrane Roof{' '}
              <br className="hidden md:block" />
              Took Hail Damage
            </h2>
            <p className="mt-5 max-w-[560px] text-brand-slate leading-[1.7]" style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
              Hail damage is not always obvious from the ground. Here is what to watch for after a Cochrane storm, before you call us or your insurer.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">Get a Free Estimate</Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
            {SIGNS.map(({ Icon, heading, body }) => (
              <div key={heading} className="bg-brand-cream rounded-[12px] border border-brand-border p-6 shadow-[0_2px_8px_rgba(44,71,102,0.06)] hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.12)] transition-all duration-300 ease-out">
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

// ─── Section: Three Hail Damage Categories We See in Cochrane ─────────────

const HAIL_CATEGORIES = [
  { tier: 'Light Hail', name: 'Cosmetic Damage', image: '/images/Cosmetic Hail Damages.jpg', imageAlt: 'Close-up of cosmetic hail damage on an asphalt shingle roof', body: 'Surface bruising and minor granule loss without structural impact. Often does not affect the roof’s lifespan in the short term, but written documentation matters for future claims. We inspect every slope, photograph every hit, and advise honestly.' },
  { tier: 'Moderate Hail', name: 'Functional Damage', image: '/images/Functional Hail Damages.jpg', imageAlt: 'Close-up of functional hail damage on an asphalt shingle roof', body: 'Multiple shingle hits with fractured mats and significant granule loss across multiple slopes. A targeted repair with shingles matched to your existing roof is the right call, often partially or fully insurance-funded depending on policy and storm severity.' },
  { tier: 'Severe Hail', name: 'Structural Damage', image: '/images/Structural Hail Damagse.jpg', imageAlt: 'Close-up of structural hail damage on an asphalt shingle roof', body: 'Golf-ball or larger hail compromises the entire roof system. Most insurers approve a full replacement at this severity, often using Class 4 impact-rated shingles to reduce risk and qualify the home for future premium discounts.' },
]

function HailCategories() {
  return (
    <section className="relative bg-brand-cream overflow-hidden py-20 md:py-24" style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
          <div className="flex flex-col items-center text-center mb-12 max-w-[820px] mx-auto">
            <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
              style={{ background: '#FFFFFF', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
              Damage Categories
            </span>
            <h2 className="font-display font-medium text-brand-navy" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
              Three Hail Damage Categories
              <br className="hidden lg:block" /> We See in Cochrane
            </h2>
            <p className="mt-5 max-w-[820px] text-brand-slate leading-[1.7]" style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
              Most hail damage falls into one of three severity tiers. The category determines whether you need a repair, partial replacement, or full replacement, and what your insurer will likely cover.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">Get a Free Estimate</Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
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
        </Reveal>
      </div>
    </section>
  )
}

// ─── Section: How a Sure West Hail Damage Repair Works ─────────────────────

const HAIL_STEPS: HowItWorksStep[] = [
  {
    number: '01',
    Icon: Calendar,
    title: 'Post-Storm Inspection',
    description:
      'We walk every slope of your Cochrane roof in person, photograph every dent and fracture, and deliver a written diagnosis you can hand to your insurer or keep for your records.',
  },
  {
    number: '02',
    Icon: FileCheck,
    title: 'Written Diagnosis and Documentation',
    description:
      'You receive dated photos, a written diagnosis, an itemised quote, and a damage classification. Built to insurer standards, equally useful if you are paying direct.',
  },
  {
    number: '03',
    Icon: CheckCircle,
    title: 'Repair or Replace, Done Right',
    description:
      'Once approved, by your insurer or by you, we schedule on your timeline. Impact-rated shingles where the damage calls for them, magnetic nail sweep, written workmanship guarantee.',
  },
]

// ─── Section: What Sure West Provides vs What You Handle (NEW, placeholder) ─

const PROVIDES_ITEMS = [
  {
    Icon: Search,
    subtitle: 'On-site post-storm inspection',
    body: 'We walk every slope of your roof in person, no satellite-only assessments and no second-hand reports.',
  },
  {
    Icon: Camera,
    subtitle: 'Written diagnosis with full photo documentation',
    body: 'Dated, high-resolution photos of every dent, fracture, and granule loss, with a clear written assessment.',
  },
  {
    Icon: FileText,
    subtitle: 'Itemised written quote with damage classification',
    body: 'Cosmetic, functional, or structural, with an itemised written quote built to Alberta insurer documentation standards.',
  },
  {
    Icon: Users,
    subtitle: 'Adjuster meeting on-site, if helpful',
    body: 'We meet your insurance adjuster at the property if you would like us there.',
  },
  {
    Icon: Wrench,
    subtitle: 'Repair or replacement, end to end',
    body: 'Targeted repair or full replacement with impact-rated shingles where the damage calls for them, by our in-house crew, magnetic nail sweep included.',
  },
]

const HANDLES_ITEMS = [
  {
    Icon: Calendar,
    subtitle: 'Schedule the inspection',
    body: 'Call or book online to pick a time that works. We come to you, no rush.',
  },
  {
    Icon: Home,
    subtitle: 'Provide property access',
    body: 'Be home, or have someone there, so we can walk every slope and access the attic.',
  },
  {
    Icon: Phone,
    subtitle: 'File the claim, if you are filing one',
    body: 'If you are working with an insurer, open the claim and forward our written report and photos.',
  },
  {
    Icon: CheckCircle,
    subtitle: 'Approve the quote before work begins',
    body: 'Review the written quote, ask any questions, and confirm before we schedule the repair or replacement.',
  },
]

function ProvidesVsHandle() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-24"
      style={{ background: '#F7F5F0', paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
          <div className="text-center mb-12 md:mb-16 max-w-[820px] mx-auto">
            <span
              className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
              style={{ background: '#FFFFFF', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}
            >
              Roles &amp; Boundaries
            </span>
            <h2 className="font-display font-medium text-brand-navy" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
              What Sure West Provides
              <br className="hidden lg:block" /> vs What You Handle
            </h2>
            <p className="mt-5 max-w-[820px] mx-auto text-brand-slate leading-[1.7]" style={{ fontSize: '16px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
              A Sure West hail damage repair runs on clear roles. Here is exactly what we deliver and exactly what is yours, whether you are filing an insurance claim or paying direct.
            </p>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 max-w-[1100px] mx-auto">
            {/* LEFT: Sure West provides */}
            <div
              className="relative rounded-[16px] border border-brand-border p-7 md:p-9"
              style={{ background: '#FFFFFF', boxShadow: '0 12px 28px -12px rgba(44,71,102,0.18), 0 2px 8px rgba(44,71,102,0.08)' }}
            >
              <span
                aria-hidden="true"
                className="absolute left-0 top-7 bottom-7 w-[3px] rounded-r-full"
                style={{ background: 'linear-gradient(to bottom, #C49A2C, rgba(196,154,44,0.05))' }}
              />
              <h3 className="font-display font-semibold text-brand-navy mb-7" style={{ fontSize: '28px', letterSpacing: '-0.015em', lineHeight: 1.15 }}>
                What Sure West Provides
              </h3>
              <ul className="flex flex-col gap-5">
                {PROVIDES_ITEMS.map(({ Icon, subtitle, body }, idx) => (
                  <li key={idx} className="flex gap-3.5">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-[8px] mt-0.5" style={{ background: 'rgba(212,175,96,0.12)' }}>
                      <Icon className="w-[18px] h-[18px] text-brand-gold" strokeWidth={1.5} />
                    </span>
                    <div className="pt-1">
                      <h4 className="font-display font-semibold text-brand-navy leading-[1.3]" style={{ fontSize: '15px', letterSpacing: '-0.005em' }}>
                        {subtitle}
                      </h4>
                      <p className="text-brand-slate leading-[1.55] mt-1" style={{ fontSize: '14px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
                        {body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* RIGHT: You handle */}
            <div
              className="rounded-[16px] border border-brand-border p-7 md:p-9"
              style={{ background: '#FFFFFF', boxShadow: '0 2px 6px rgba(44,71,102,0.06)' }}
            >
              <h3 className="font-display font-semibold text-brand-navy mb-7" style={{ fontSize: '28px', letterSpacing: '-0.015em', lineHeight: 1.15 }}>
                What You Handle
              </h3>
              <ul className="flex flex-col gap-5">
                {HANDLES_ITEMS.map(({ Icon, subtitle, body }, idx) => (
                  <li key={idx} className="flex gap-3.5">
                    <span className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-[8px] mt-0.5" style={{ background: 'rgba(27,53,88,0.07)' }}>
                      <Icon className="w-[18px] h-[18px] text-brand-navy" strokeWidth={1.5} />
                    </span>
                    <div className="pt-1">
                      <h4 className="font-display font-semibold text-brand-navy leading-[1.3]" style={{ fontSize: '15px', letterSpacing: '-0.005em' }}>
                        {subtitle}
                      </h4>
                      <p className="text-brand-slate leading-[1.55] mt-1" style={{ fontSize: '14px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 400 }}>
                        {body}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-12 md:mt-14 flex justify-center">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
              Get a Free Estimate
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

// ─── Section: Why Sure West (5-card, placeholder copy) ────────────────────

const HAIL_DIFFERENTIATORS: DifferentiatorItem[] = [
  {
    Icon: Award,
    heading: 'Legacy',
    subtitle: 'The Repair Decision Itself',
    body: 'Legacy on a hail repair decision starts the moment we walk your roof. Repair when repair is the honest answer, replacement when replacement is. The repairs we leave behind in Cochrane are a reputation, not just a fix on a shingle.',
  },
  {
    Icon: Users,
    heading: 'Brotherhood',
    subtitle: 'A Tight-Knit Crew',
    body: 'A team that has each other’s backs on the roof and off. Tight-knit, cohesive, aligned in purpose, because the work is too hard to do alongside people you cannot respect. In-house on every Cochrane hail repair, start to finish.',
  },
  {
    Icon: Handshake,
    heading: 'Character',
    subtitle: 'Honest Damage Classification',
    body: 'We classify every hail job honestly. Cosmetic, functional, or structural. We will not inflate cosmetic damage into a full replacement, and we will not under-call functional damage to keep a job small. Same standard, claim or out of pocket.',
  },
  {
    Icon: ShieldCheck,
    heading: 'Competency',
    subtitle: 'Red Seal Journeyman Standard',
    body: 'Red Seal Journeyman is the highest trade credential in Canadian roofing. Hail repairs done right means underlayment integrated, flashing tied by hand, impact-rated shingles matched to your roof. The parts you cannot see, done right first time.',
  },
  {
    Icon: ListChecks,
    heading: 'Proven Processes',
    subtitle: 'Same Playbook, Every Storm',
    body: 'Same diagnostic checklist on every roof. Same photo documentation standard whether your insurer requires it or not. Same magnetic nail sweep, same final walkthrough, same written workmanship guarantee on the repair we leave behind.',
  },
]

// ─── Section: Gallery images ──────────────────────────────────────────────

const HAIL_GALLERY_IMAGES = [
  { src: '/images/Cochrane Roofing Contractor Gallery 3.webp',  alt: 'Class 4 impact-rated hail-resistant roof in Calgary',                caption: 'Calgary, AB · Class 4' },
  { src: '/images/Cochrane Roofing Contractor Gallery 5.webp',  alt: 'Hail-damaged roof inspection in Canmore Alberta',                    caption: 'Canmore, AB · Inspection' },
  { src: '/images/Cochrane Roofing Contractor Gallery 7.webp',  alt: 'Hail damage repair completed in Calgary by Sure West Roofing',      caption: 'Calgary, AB · Hail Repair' },
  { src: '/images/Cochrane Roofing Contractor Gallery 8.webp',  alt: 'Cochrane hail damage roof replacement with impact-rated shingles',  caption: 'Cochrane, AB · Class 4' },
  { src: '/images/Cochrane Roofing Contractor Gallery 9.webp',  alt: 'Sure West crew completing a hail damage repair in the Calgary region',          caption: 'Cochrane, AB · Hail Repair' },
  { src: '/images/Cochrane Roofing Contractor Gallery 10.webp', alt: 'Insurance-funded hail damage repair in the Calgary region',         caption: 'Calgary, AB · Insurance' },
  { src: '/images/Cochrane Roofing Contractor Gallery 12.webp', alt: 'Targeted hail damage shingle replacement in Cochrane',              caption: 'Cochrane, AB · Targeted' },
  { src: '/images/Cochrane Roofing Contractor Gallery 14.webp', alt: 'Hail damage roof leak repair on a Cochrane Alberta home',           caption: 'Cochrane, AB · Hail Leak' },
  { src: '/images/Cochrane Roofing Contractor Gallery 19.webp', alt: 'Detailed hail damage flashing repair in Cochrane',                  caption: 'Cochrane, AB · Flashing' },
  { src: '/images/Cochrane Roofing Contractor Gallery 20.webp', alt: 'Storm and hail damage roof repair in Calgary',                      caption: 'Calgary, AB · Storm' },
]

// ─── Section: Other Roofing Services We Offer ─────────────────────────────

function RelatedServices() {
  return (
    <section className="relative bg-white overflow-hidden py-20 md:py-24" style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}>
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10 gap-4">
            <div>
              <span className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-5 text-brand-gold"
                style={{ background: '#F7F5F0', fontSize: '12px', fontFamily: 'var(--font-inter), system-ui, sans-serif', fontWeight: 600, lineHeight: 1 }}>
                More Services
              </span>
              <h2 className="font-display font-medium text-brand-navy" style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', lineHeight: 1.15, letterSpacing: '-0.005em' }}>
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
        </Reveal>

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
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(hailDamageFaqSchema) }} />

      <HailDamageHero />
      <TrustLogos />
      <SignsYouNeed />
      <HailCategories />
      <HowItWorks
        sectionBg="#FFFFFF"
        cardBg="#F7F5F0"
        heading={
          <>
            How a Sure West Hail Damage
            <br className="hidden md:block" /> Repair Works
          </>
        }
        body="Three clear steps from first post-storm inspection to repair complete. Insurance claim or out of pocket, the process and the standard do not change."
        steps={HAIL_STEPS}
      />
      <ProvidesVsHandle />
      <Reviews sectionBg="#FFFFFF" cardBg="#F7F5F0" />
      <ServicesHubDifferentiators
        items={HAIL_DIFFERENTIATORS}
        heading={
          <>
            What Sets a Sure West
            <br className="hidden lg:block" /> Hail Damage Repair Apart
          </>
        }
        subhead="Five responsibilities we've taken on, five things every Sure West hail damage repair gets that the average Cochrane crew can't match."
        sectionBg="#F7F5F0"
        cardBg="#FFFFFF"
      />
      <ServicesGallery
        images={HAIL_GALLERY_IMAGES}
        sectionBg="#FFFFFF"
        heading={
          <>
            Hail Damage Repairs in
            <br className="hidden lg:block" /> Cochrane, Calgary, and Canmore
          </>
        }
        subhead="Every hail repair in our gallery was completed by our in-house crew, Red Seal Journeyman supervised. No subcontractors, no compromises."
        ctaLabel="View Full Gallery"
        ctaHref="/gallery"
      />
      <HailDamageFAQ />
      <RelatedServices />
      <BottomCTA
        sectionBg="#F7F5F0"
        heading={
          <>
            Need Hail Damage Roof Repair
            <br className="hidden md:block" /> You Can Actually Trust?
          </>
        }
        subtext="Post-storm inspection, written diagnosis with photo documentation, written workmanship guarantee, and no sales pressure. Same standard, claim or out of pocket."
      />
    </>
  )
}
