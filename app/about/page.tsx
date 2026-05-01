import type { Metadata } from 'next'
import Image from 'next/image'
import {
  ShieldCheck,
  Award,
  FileCheck,
  HardHat,
  HeartPulse,
  MapPin,
  ClipboardCheck,
  Users,
  UserCheck,
  BadgeCheck,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { Reviews } from '@/components/sections/Reviews'
import { BottomCTA } from '@/components/sections/BottomCTA'
import { ServiceFAQ } from '@/components/sections/ServiceFAQ'
import { ServiceAreasPins } from '@/components/sections/ServiceAreasPins'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { TeamCarousel } from '@/components/sections/TeamCarousel'
import { PortfolioGallery } from '@/components/sections/PortfolioGallery'
import { FoundersVideo } from '@/components/ui/FoundersVideo'
import type { FaqItem } from '@/lib/faqs/types'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Red Seal Roofer Cochrane',
  description:
    'Sure West is a Red Seal certified roofer in Cochrane, Alberta. Owner-operated, no subcontractors, and serving Cochrane, Calgary, and Canmore. Meet the team behind every Sure West roof.',
  alternates: {
    canonical: 'https://surewestroofing.ca/about',
  },
  openGraph: {
    title: 'Red Seal Roofer Cochrane | Sure West Roofing',
    description:
      'Meet the Red Seal certified roofing team behind Sure West. Owner-operated in Cochrane, Alberta, serving Cochrane, Calgary, and Canmore.',
    url: 'https://surewestroofing.ca/about',
    type: 'website',
    locale: 'en_CA',
    images: [
      {
        url: '/images/Sure West Roofing in Cochrane.webp',
        width: 1200,
        height: 630,
        alt: 'Sure West Roofing Red Seal certified team in Cochrane, Alberta',
      },
    ],
  },
}

const aboutPageSchema = {
  '@context': 'https://schema.org',
  '@type': 'AboutPage',
  url: 'https://surewestroofing.ca/about',
  name: 'About Sure West Roofing',
  description:
    'Sure West Roofing is a Red Seal certified roofing company in Cochrane, Alberta serving Cochrane, Calgary, and Canmore.',
  mainEntity: {
    '@type': 'RoofingContractor',
    name: 'Sure West Roofing',
    url: 'https://surewestroofing.ca',
    telephone: '+14039907210',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Unit 9, 225 Railway St E',
      addressLocality: 'Cochrane',
      addressRegion: 'AB',
      postalCode: 'T4C 2C3',
      addressCountry: 'CA',
    },
    areaServed: ['Cochrane', 'Calgary', 'Canmore'],
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Red Seal Journeyman Certification',
        credentialCategory: 'Interprovincial Trade Certification',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'IKO ShieldPRO Installer',
      },
    ],
  },
}

// ─── Section: Hero ───────────────────────────────────────────────────────────

function AboutHero() {
  return (
    <section
      className="relative overflow-x-clip bg-brand-cream pt-36 md:pt-44 pb-16 md:pb-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="lg:order-1 order-1">
            <Reveal delay={80}>
            <span
              className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
              style={{
                background: '#F0EEE8',
                fontSize: '12px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              About Sure West
            </span>
            </Reveal>

            <Reveal delay={180}>
            <h1
              className="font-display font-semibold text-brand-navy"
              style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.08, letterSpacing: '-0.03em' }}
            >
              The Red Seal Roofer
              <br />
              Cochrane Homeowners Trust
            </h1>
            </Reveal>

            <Reveal delay={300}>
            <p
              className="mt-5 text-brand-slate leading-[1.65] max-w-[480px]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              Owner-operated, Red Seal certified roofing serving Cochrane, Calgary, and
              Canmore. Built on character, competency, and proven processes on every roof.
            </p>
            </Reveal>

            <Reveal delay={420}>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
                Get a Free Estimate
              </Button>
              <Button variant="outline" size="lg" href="/services">
                Explore Our Services
              </Button>
            </div>
            </Reveal>

          </div>

          <Reveal delay={250} noBlur className="relative lg:order-2 order-2">
            <div
              className="relative overflow-hidden rounded-[18px] transition-shadow duration-700 ease-out shadow-[0_2px_4px_rgba(44,71,102,0.06),0_12px_40px_-8px_rgba(44,71,102,0.18),0_40px_100px_-20px_rgba(44,71,102,0.22)] hover:shadow-[0_2px_4px_rgba(44,71,102,0.10),0_22px_56px_-8px_rgba(44,71,102,0.32),0_60px_130px_-20px_rgba(44,71,102,0.40)]"
            >
              <div className="relative h-[280px] sm:h-[360px] lg:h-[440px]">
                <Image
                  src="/Sure West Roofing in Cochrane.webp"
                  alt="Sure West Roofing, Red Seal certified roofing contractor in Cochrane Alberta"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>

            {/* Floating trust badge, overhangs the image bottom-right */}
            <div
              className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-5 lg:-bottom-7 lg:-right-7 bg-white rounded-[14px] flex items-center gap-3.5 px-4 py-3 sm:px-5 sm:py-3.5 max-w-[260px]"
              style={{
                boxShadow:
                  '0 2px 4px rgba(44,71,102,0.08), 0 14px 32px -10px rgba(44,71,102,0.22), 0 28px 60px -18px rgba(44,71,102,0.18)',
              }}
            >
              <span
                className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full"
                style={{
                  background: 'rgba(212,175,96,0.14)',
                  border: '1px solid rgba(212,175,96,0.35)',
                }}
              >
                <ShieldCheck className="w-5 h-5 text-brand-gold" strokeWidth={1.75} />
              </span>
              <div>
                <div
                  className="font-display text-brand-navy leading-none"
                  style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.01em' }}
                >
                  Owner-Operated
                </div>
                <div
                  className="text-brand-slate mt-1.5"
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 500,
                    letterSpacing: '0.01em',
                    lineHeight: 1.3,
                  }}
                >
                  Same crew, every roof
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// ─── Section: Our Story ──────────────────────────────────────────────────────

function OurStory() {
  return (
    <section
      className="bg-white py-24 md:py-32 relative overflow-hidden"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      {/* Soft cream wash on the right to anchor the content column */}
      <div
        aria-hidden="true"
        className="hidden lg:block absolute top-0 right-0 bottom-0 w-[42%] -z-10"
        style={{
          background:
            'linear-gradient(135deg, rgba(212,175,96,0.04) 0%, rgba(247,245,240,0.6) 100%)',
        }}
      />

      <div className="max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_1fr] gap-12 lg:gap-20 items-center">
          {/* Video column */}
          <Reveal noBlur className="relative">
            {/* Soft gold radial behind video */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-8 -inset-y-6 -z-10"
              style={{
                background:
                  'radial-gradient(600px 280px at 50% 50%, rgba(212,175,96,0.22), transparent 70%)',
                filter: 'blur(8px)',
              }}
            />
            <FoundersVideo
              alt="Craig and Mike, owners of Sure West Roofing in Cochrane Alberta"
              className="relative aspect-video w-full overflow-hidden rounded-[18px] bg-black"
            />

            {/* Story-focused stats: team & reach */}
            <div className="mt-7 grid grid-cols-3 divide-x divide-brand-gold/25">
              <div className="px-2 sm:px-3 text-center">
                <div
                  className="font-display font-bold text-brand-gold leading-none"
                  style={{ fontSize: 'clamp(22px, 2.4vw, 28px)', letterSpacing: '-0.01em' }}
                >
                  2
                </div>
                <div
                  className="mt-1.5 uppercase text-brand-slate"
                  style={{
                    fontSize: '10px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                  }}
                >
                  Owner-Operators
                </div>
              </div>
              <div className="px-2 sm:px-3 text-center">
                <div
                  className="font-display font-bold text-brand-gold leading-none"
                  style={{ fontSize: 'clamp(22px, 2.4vw, 28px)', letterSpacing: '-0.01em' }}
                >
                  10
                </div>
                <div
                  className="mt-1.5 uppercase text-brand-slate"
                  style={{
                    fontSize: '10px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                  }}
                >
                  In-House Crew
                </div>
              </div>
              <div className="px-2 sm:px-3 text-center">
                <div
                  className="font-display font-bold text-brand-gold leading-none"
                  style={{ fontSize: 'clamp(22px, 2.4vw, 28px)', letterSpacing: '-0.01em' }}
                >
                  3
                </div>
                <div
                  className="mt-1.5 uppercase text-brand-slate"
                  style={{
                    fontSize: '10px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                  }}
                >
                  Locations Served
                </div>
              </div>
            </div>
          </Reveal>

          {/* Content column */}
          <Reveal delay={150}>
            <span
              className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
              style={{
                background: '#F0EEE8',
                fontSize: '12px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              Our Story
            </span>

            <h2
              className="font-display font-medium text-brand-navy"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                lineHeight: 1.15,
                letterSpacing: '-0.005em',
              }}
            >
              Two Owners.
              <br className="hidden sm:block" /> One Higher Standard.
            </h2>

            {/* Premium pull-quote */}
            <figure className="mt-8 relative pl-8 lg:pl-10">
              <span
                aria-hidden="true"
                className="absolute left-0 top-[-12px] font-display select-none"
                style={{
                  fontSize: 'clamp(56px, 6vw, 80px)',
                  lineHeight: 1,
                  color: 'var(--color-accent, #D4AF60)',
                  opacity: 0.45,
                }}
              >
                &ldquo;
              </span>
              <blockquote
                className="font-display italic text-brand-navy"
                style={{
                  fontSize: 'clamp(20px, 2vw, 24px)',
                  lineHeight: 1.4,
                  fontWeight: 500,
                  letterSpacing: '-0.005em',
                }}
              >
                In every shingle laid, we&rsquo;re not just building roofs, we&rsquo;re elevating
                trust.
              </blockquote>
            </figure>

            {/* Trimmed, punchier body */}
            <p
              className="mt-8 text-brand-slate leading-[1.7]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              Two roofers who got tired of watching shortcuts cost homeowners and built Sure
              West instead. Owner-operated, no subcontractors, no corner-cutting. Just Red Seal
              Journeyman roofers who treat your home the way they&apos;d treat their own. From
              the first quote to the last shingle, you deal with the same crew that puts their
              name on the job, and stands behind it long after.
            </p>

          </Reveal>
        </div>
      </div>
    </section>
  )
}

// Stats strip + certifications row: reuse shared TrustLogos for consistency with
// the rest of the site.

// ─── Section: Credentials Grid ───────────────────────────────────────────────

const CRED_ICON_MAP = {
  ShieldCheck,
  Award,
  FileCheck,
  HardHat,
  HeartPulse,
  MapPin,
} as const

const CREDENTIALS: { icon: keyof typeof CRED_ICON_MAP; title: string; body: string }[] = [
  {
    icon: 'ShieldCheck',
    title: 'Red Seal Journeyman Certified',
    body:
      'The highest interprovincial trade credential in Canada. Every Sure West lead installer holds Red Seal certification, enforced nationally.',
  },
  {
    icon: 'Award',
    title: 'IKO ShieldPRO Installer',
    body:
      "Qualifies your roof for IKO's top-tier manufacturer warranty, including extended coverage on materials and workmanship.",
  },
  {
    icon: 'FileCheck',
    title: '$2 Million Liability Insurance',
    body:
      "Comprehensive liability coverage on every job, every property, every time. Proof of coverage provided before any work begins.",
  },
  {
    icon: 'HardHat',
    title: 'WCB Alberta Covered',
    body:
      "Every crew member is covered by Workers' Compensation Board Alberta. Any on-site injury is handled through WCB, not your homeowner's insurance.",
  },
  {
    icon: 'HeartPulse',
    title: 'Fall Protection & First Aid',
    body:
      'Current Fall Protection and Standard First Aid certifications on every installer. We take crew safety as seriously as roof quality.',
  },
  {
    icon: 'MapPin',
    title: 'Licensed in All Three Cities',
    body:
      "Active municipal business licenses in Cochrane, Calgary, and Canmore. We can show current licensing for your municipality on request.",
  },
]

function Credentials() {
  return (
    <section
      id="credentials"
      className="bg-white py-20 md:py-28"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
        <div className="text-center max-w-[680px] mx-auto mb-12 md:mb-16">
          <span
            className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{
              background: '#F0EEE8',
              fontSize: '12px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            Credentials
          </span>
          <h2
            className="font-display font-medium text-brand-navy"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              lineHeight: 1.15,
              letterSpacing: '-0.005em',
            }}
          >
            Real Credentials. Real Coverage.
          </h2>
          <p
            className="mt-5 max-w-[480px] mx-auto text-brand-slate leading-[1.65]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            The certifications and protections behind every roof we install across Cochrane,
            Calgary, and Canmore.
          </p>
        </div>
        </Reveal>

        <Reveal delay={150}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {CREDENTIALS.map((cred) => {
            const Icon = CRED_ICON_MAP[cred.icon]
            return (
              <article
                key={cred.title}
                className="group relative bg-brand-cream rounded-[14px] border border-[#E5E2D9] p-6 md:p-7 overflow-hidden cursor-default transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-[0_22px_44px_-22px_rgba(212,175,96,0.45),0_10px_22px_-10px_rgba(44,71,102,0.18)]"
              >
                {/* Top gold ribbon, subtle resting state */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-0 right-0 h-[2px]"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent 0%, rgba(212,175,96,0.85) 50%, transparent 100%)',
                    opacity: 0.45,
                  }}
                />

                {/* Soft gold halo behind icon on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-6 md:left-7 top-5 md:top-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'radial-gradient(closest-side, rgba(212,175,96,0.30), transparent 70%)',
                    filter: 'blur(8px)',
                  }}
                />

                <div
                  className="relative w-12 h-12 rounded-[10px] bg-white flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-3deg]"
                  style={{
                    boxShadow:
                      '0 1px 3px rgba(44,71,102,0.08), 0 10px 22px -10px rgba(212,175,96,0.45), 0 4px 10px -4px rgba(44,71,102,0.10)',
                    border: '1px solid rgba(212,175,96,0.20)',
                  }}
                >
                  <Icon className="w-6 h-6 text-brand-gold" strokeWidth={1.75} />
                </div>
                <h3
                  className="relative font-display font-semibold text-brand-navy mt-5"
                  style={{ fontSize: '19px', letterSpacing: '-0.01em', lineHeight: 1.25 }}
                >
                  {cred.title}
                </h3>
                <p
                  className="relative text-brand-slate leading-[1.6] mt-3"
                  style={{
                    fontSize: '14.5px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {cred.body}
                </p>
              </article>
            )
          })}
        </div>

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

// ─── Section: How We Work ────────────────────────────────────────────────────

const DIFFERENTIATORS: { number: string; title: string; body: string; Icon: typeof ClipboardCheck }[] = [
  {
    number: '01',
    title: 'Fixed Written Quotes',
    body:
      'The quote is the invoice you pay. No surprise charges, no mid-project upsells, no scope creep. We walk every detail that could affect cost before work begins.',
    Icon: ClipboardCheck,
  },
  {
    number: '02',
    title: 'No Subcontractors, Ever',
    body:
      "Every Sure West roof is installed by our in-house Red Seal crew. We don't hand your home off to the cheapest available contractor the morning of install.",
    Icon: Users,
  },
  {
    number: '03',
    title: 'Advisor, Not Salesperson',
    body:
      "If your roof doesn't need replacing, we'll tell you. We'd rather lose a quote than sell you work you don't need. Honest assessments built our Cochrane reputation.",
    Icon: UserCheck,
  },
  {
    number: '04',
    title: '10-Year Written Warranty',
    body:
      "Every Sure West roof gets a 10-year workmanship warranty in writing, on top of IKO's. If anything in the install fails, we come back and fix it.",
    Icon: BadgeCheck,
  },
]

function HowWeWork() {
  return (
    <section
      className="bg-white py-20 md:py-28"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1100px] mx-auto">
        <Reveal>
        <div className="text-center max-w-[680px] mx-auto mb-12 md:mb-16">
          <span
            className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{
              background: '#F0EEE8',
              fontSize: '12px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            How We Work
          </span>
          <h2
            className="font-display font-medium text-brand-navy"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              lineHeight: 1.15,
              letterSpacing: '-0.005em',
            }}
          >
            Four Things That Make
            <br className="hidden sm:block" /> Sure West Different
          </h2>
          <p
            className="mt-5 max-w-[480px] mx-auto text-brand-slate leading-[1.65]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            What you get from a Red Seal roofing contractor that you don&apos;t get from the
            average Cochrane crew.
          </p>
        </div>
        </Reveal>

        <Reveal delay={150}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
          {DIFFERENTIATORS.map((d) => {
            const { Icon } = d
            return (
              <article
                key={d.number}
                className="group relative rounded-[20px] p-8 md:p-10 text-center overflow-hidden cursor-default transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_22px_44px_-22px_rgba(212,175,96,0.45),0_10px_22px_-10px_rgba(44,71,102,0.18)]"
                style={{
                  background:
                    'linear-gradient(155deg, #FAF8F2 0%, #F4F1E8 100%)',
                  border: '1px solid #E8E4D8',
                  boxShadow:
                    '0 1px 2px rgba(44,71,102,0.04), 0 8px 22px -10px rgba(44,71,102,0.10)',
                }}
              >
                {/* Top gold ribbon, full width, subtle resting + intensifies on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] transition-opacity duration-500"
                  style={{
                    background:
                      'linear-gradient(90deg, transparent 0%, rgba(212,175,96,0.85) 50%, transparent 100%)',
                    opacity: 0.55,
                  }}
                />

                {/* Ghosted number, top-right corner, smaller and refined */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute select-none font-display font-bold leading-none transition-opacity duration-500 group-hover:opacity-[0.16]"
                  style={{
                    right: '20px',
                    top: '20px',
                    fontSize: 'clamp(56px, 6vw, 84px)',
                    color: 'var(--color-near-black, #1B2532)',
                    opacity: 0.10,
                    letterSpacing: '-0.04em',
                  }}
                >
                  {d.number}
                </span>

                {/* Soft gold halo behind icon on hover */}
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 -translate-x-1/2 top-6 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background:
                      'radial-gradient(closest-side, rgba(212,175,96,0.32), transparent 70%)',
                    filter: 'blur(8px)',
                  }}
                />

                {/* Icon tile, larger and more refined */}
                <div
                  className="relative mx-auto inline-flex items-center justify-center w-14 h-14 rounded-[12px] bg-white mb-6 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-3deg]"
                  style={{
                    boxShadow:
                      '0 1px 3px rgba(44,71,102,0.08), 0 10px 22px -10px rgba(212,175,96,0.45), 0 4px 10px -4px rgba(44,71,102,0.10)',
                    border: '1px solid rgba(212,175,96,0.20)',
                  }}
                >
                  <Icon className="w-7 h-7 text-brand-gold" strokeWidth={1.75} />
                </div>

                <h3
                  className="relative font-display font-semibold text-brand-navy mb-3"
                  style={{ fontSize: '22px', letterSpacing: '-0.01em', lineHeight: 1.25 }}
                >
                  {d.title}
                </h3>

                <p
                  className="relative text-brand-slate leading-[1.7] max-w-[380px] mx-auto"
                  style={{
                    fontSize: '14.5px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {d.body}
                </p>
              </article>
            )
          })}
        </div>

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

// ─── Section: Service Areas (uses canonical ServiceAreasPins) ────────────────

function ServiceAreas() {
  return (
    <ServiceAreasPins
      heading={'Roofing Services Across Cochrane,\n Calgary and Canmore'}
      subhead="Based in Cochrane, Alberta. We serve homeowners across the Bow Valley corridor and the Calgary region."
    />
  )
}

// ─── Section: Testimonials ───────────────────────────────────────────────────

function AboutTestimonials() {
  return <Reviews sectionBg="#F7F5F0" cardBg="#FFFFFF" />
}

// ─── Section: FAQ ────────────────────────────────────────────────────────────

const ABOUT_FAQS: FaqItem[] = [
  {
    question: 'How long has Sure West Roofing been in business?',
    answer:
      "Sure West Roofing has over 23 years of combined roofing experience serving Cochrane, Calgary, and Canmore. More valuable than our time in the industry is our emphasis on education, systems, and processes rooted in Red Seal Journeyman standards. That's how we've built a reputation for consistently great quality roofing in Cochrane, the Calgary region, and the Bow Valley.",
  },
  {
    question: 'Will a Sure West representative actually come to my house?',
    answer:
      "Absolutely. When you call Sure West for your replacement estimate, the first thing we schedule is a free in-home consultation. We use satellite service to get your measurements beforehand, so our team member arrives with numbers in hand. After a quick on-site assessment to confirm the details match, we'll walk you through the finer points of our estimate and process in person.",
  },
  {
    question: 'Is Sure West Roofing licensed and insured in Alberta?',
    answer:
      'Yes. Sure West carries a $2 million liability policy that protects you in the unlikely event of faulty workmanship leading to damage. Every crew member is covered by WCB Alberta, which means any injury sustained on your property is handled properly and will not fall back on you.\n\nAs a homeowner, you have the right to request a copy of any contractor\u2019s coverage before work begins, and we encourage you to do so.',
  },
  {
    question: 'What certifications does Sure West Roofing hold?',
    answer:
      "Sure West is a Red Seal Journeyman certified roofer in Cochrane, which is the highest interprovincial trade credential in Canada. We also hold current Fall Protection and Standard First Aid certifications on every installer, and we carry IKO ShieldPRO installer status that qualifies your roof for top-tier manufacturer warranty coverage.\n\nAlberta\u2019s roofing regulations are tightening: contractors are now required to hold Journeyman Certification and pay crew members according to provincial schedules. Ask any contractor you\u2019re considering how they\u2019re adjusting their processes to comply.",
  },
  {
    question: 'Do you use subcontractors, or your own crew?',
    answer:
      'Every Sure West roof is installed by our in-house Red Seal crew. No subcontractors, ever. When you hire Sure West, the team that quotes your roof is the team that installs it, and Craig is personally accountable for every finished job.',
  },
  {
    question: 'What areas does Sure West Roofing serve?',
    answer:
      'Sure West is headquartered in Cochrane, Alberta and serves homeowners across Cochrane, Calgary, Canmore, Airdrie, Chestermere, Bragg Creek, Springbank, and the surrounding Bow Valley and greater Calgary region. If your home is within roughly 100 km of Cochrane, we cover it. Travel is included in every written quote.',
  },
  {
    question: 'What warranty does Sure West Roofing offer?',
    answer:
      'Every Sure West roof replacement is backed by our 10-year written workmanship warranty, covering installation defects like fastener issues, flashing failures, or ventilation problems.\n\nMaterials are covered by the manufacturer: standard IKO shingles carry a limited lifetime warranty, and because Sure West is an IKO ShieldPRO installer, eligible roofs qualify for upgraded ShieldPRO Plus coverage including non-prorated material replacement and labour for the first 25 years.',
  },
  {
    question: 'Why choose Sure West Roofing in Cochrane?',
    answer:
      'Three things set Sure West apart in Cochrane: every installer is Red Seal Journeyman certified, every roof is installed by our own in-house crew with zero subcontractors, and every project is backed by IKO ShieldPRO manufacturer coverage plus our 10-year workmanship warranty.\n\nWe also operate with a fixed written quote before work begins and handle insurance claims directly with your adjuster, so there are no surprise costs and no chasing paperwork.',
  },
]

function AboutFAQ() {
  return (
    <ServiceFAQ
      faqs={ABOUT_FAQS}
      heading="About Sure West Roofing"
      subhead="Everything homeowners ask about our company, credentials, and approach."
      sectionBg="#F7F5F0"
    />
  )
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      <AboutHero />
      <TrustLogos />
      <OurStory />
      <TeamCarousel />
      <HowWeWork />
      <AboutTestimonials />
      <Credentials />
      <PortfolioGallery
        sectionBg="#F7F5F0"
        images={[
          { src: '/images/Cochrane Roofing Contractor Gallery 5.webp', alt: 'Cochrane roof replacement by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 3.webp', alt: 'Cochrane roof installation by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 7.webp', alt: 'Cochrane siding and soft metals by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 10.webp', alt: 'Cochrane roofing project by Sure West Roofing', objectPosition: '70% center' },
          { src: '/images/Cochrane Roofing Contractor Gallery 13.webp', alt: 'Cochrane skylight installation by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 1.webp', alt: 'Cochrane roof replacement project by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 4.webp', alt: 'Cochrane re-roof project by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 22.webp', alt: 'Cochrane shingle roof by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 16.webp', alt: 'Cochrane finished roof by Sure West Roofing' },
          { src: '/images/Cochrane Roofing Contractor Gallery 6.webp', alt: 'Cochrane shingle roof completed by Sure West Roofing' },
        ]}
      />
      <ServiceAreas />
      <AboutFAQ />
      <BottomCTA
        sectionBg="#FFFFFF"
        heading="Ready to Work With a Cochrane Roofing Team You Can Actually Trust?"
        subtext="Free in-home estimate. Fixed written quote. Quick replies, even after hours."
      />
    </>
  )
}
