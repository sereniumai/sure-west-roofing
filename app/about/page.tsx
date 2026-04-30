import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  ShieldCheck,
  Award,
  FileCheck,
  HardHat,
  HeartPulse,
  MapPin,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reviews } from '@/components/sections/Reviews'
import { BottomCTA } from '@/components/sections/BottomCTA'
import { ServiceFAQ } from '@/components/sections/ServiceFAQ'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { TeamCarousel } from '@/components/sections/TeamCarousel'
import { PortfolioCarousel } from '@/components/sections/PortfolioCarousel'
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
      className="relative bg-brand-cream pt-28 md:pt-36 pb-16 md:pb-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol
            className="flex items-center gap-2"
            style={{
              fontSize: '13px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              color: 'var(--brand-slate, #4D6A87)',
            }}
          >
            <li>
              <Link href="/" className="hover:text-brand-gold transition-colors duration-200">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-brand-border select-none">/</li>
            <li className="text-brand-navy font-medium" aria-current="page">
              About
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="lg:order-1 order-2">
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

            <h1
              className="font-display font-semibold text-brand-navy"
              style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', lineHeight: 1.08, letterSpacing: '-0.03em' }}
            >
              The Red Seal Roofer
              <br />
              Cochrane Homeowners Trust
            </h1>

            <p
              className="mt-5 text-brand-slate leading-[1.65] max-w-[480px]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              Sure West is an owner-operated, Red Seal certified roofing company serving
              Cochrane, Calgary, and Canmore. Built on strong individual character, genuine
              trade competency, and proven processes every crew follows on every roof.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
                Get a Free Estimate
              </Button>
              <Button variant="outline" size="lg" href="#credentials">
                See Our Credentials
              </Button>
            </div>

            <div
              className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2"
              style={{
                fontSize: '12px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 500,
                color: '#4A5568',
                letterSpacing: '0.07em',
                textTransform: 'uppercase',
              }}
            >
              <span>Red Seal Certified</span>
              <span aria-hidden="true" style={{ color: '#C49A2C' }}>·</span>
              <span>Owner-Operated</span>
              <span aria-hidden="true" style={{ color: '#C49A2C' }}>·</span>
              <span>IKO ShieldPRO</span>
            </div>
          </div>

          <div className="relative lg:order-2 order-1">
            <div
              aria-hidden="true"
              className="absolute inset-0 rounded-[22px]"
              style={{
                border: '1px solid rgba(212,175,96,0.4)',
                transform: 'translate(10px, 12px)',
                zIndex: -1,
              }}
            />
            <div
              className="relative overflow-hidden rounded-[18px]"
              style={{
                boxShadow:
                  '0 2px 4px rgba(44,71,102,0.06), 0 12px 40px -8px rgba(44,71,102,0.18), 0 40px 100px -20px rgba(44,71,102,0.22)',
              }}
            >
              <div className="relative h-[280px] sm:h-[360px] lg:h-[440px]">
                <Image
                  src="/images/Sure West Roofing in Cochrane.webp"
                  alt="Sure West Roofing, Red Seal certified roofing contractor in Cochrane Alberta"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section: Our Story ──────────────────────────────────────────────────────

function OurStory() {
  return (
    <section
      className="bg-white py-20 md:py-28"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div className="relative">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-6 -inset-y-4 -z-10"
              style={{
                background:
                  'radial-gradient(500px 220px at 50% 50%, rgba(212,175,96,0.14), transparent 70%)',
                filter: 'blur(4px)',
              }}
            />
            <FoundersVideo
              alt="Sure West Roofing founders video thumbnail, Cochrane Alberta"
              className="relative aspect-video w-full overflow-hidden rounded-[--radius-lg] bg-black"
            />
          </div>

          <div>
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
              className="font-display font-semibold text-brand-navy"
              style={{
                fontSize: 'clamp(30px, 4vw, 46px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Character, Competency,
              <br className="hidden sm:block" /> Proven Processes
            </h2>

            <blockquote
              className="font-display italic text-brand-navy leading-snug mt-6 border-l-[3px] border-brand-gold pl-5"
              style={{ fontSize: 'clamp(18px, 2vw, 22px)', fontWeight: 500 }}
            >
              &ldquo;The roofing industry rewards speed first. We were tired of watching
              homeowners pay the price.&rdquo;
            </blockquote>

            <div
              className="space-y-4 mt-6 text-brand-slate leading-[1.7]"
              style={{
                fontSize: '15.5px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              <p>
                Sure West was founded to raise the standard of roofing in Alberta. We are a
                Red Seal roofing contractor in Cochrane, built on strong individual character,
                genuine trade competency, and proven processes every crew member follows on
                every roof.
              </p>
              <p>
                Owner-operated. No subcontractors. No corner-cutting. Just Red Seal Journeyman
                roofers who treat your home the way they&apos;d treat their own.
              </p>
            </div>

            <div className="mt-8">
              <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
                Get a Free Estimate
              </Button>
            </div>
          </div>
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
            className="font-display font-semibold text-brand-navy"
            style={{
              fontSize: 'clamp(30px, 4vw, 46px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            What Makes Sure West a Red Seal Roofer in Cochrane
          </h2>
          <p
            className="mt-5 text-brand-slate leading-[1.65]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            The credentials, certifications, and protections behind every roof we install in
            Cochrane, Calgary, and Canmore.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {CREDENTIALS.map((cred) => {
            const Icon = CRED_ICON_MAP[cred.icon]
            return (
              <div
                key={cred.title}
                className="bg-brand-cream rounded-[14px] border border-[#E5E2D9] p-6 md:p-7 hover:border-brand-gold/40 transition-colors duration-300"
              >
                <div className="w-12 h-12 rounded-[10px] bg-white flex items-center justify-center shadow-sm">
                  <Icon className="w-6 h-6 text-brand-gold" strokeWidth={1.75} />
                </div>
                <h3
                  className="font-display font-semibold text-brand-navy mt-5"
                  style={{ fontSize: '19px', letterSpacing: '-0.01em', lineHeight: 1.25 }}
                >
                  {cred.title}
                </h3>
                <p
                  className="text-brand-slate leading-[1.6] mt-3"
                  style={{
                    fontSize: '14.5px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {cred.body}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Section: How We Work ────────────────────────────────────────────────────

const DIFFERENTIATORS = [
  {
    number: '01',
    title: 'Fixed Written Quotes',
    body:
      'The quote you see is the invoice you pay. No surprise charges, no mid-project upsells, no scope creep. We walk every detail that could affect cost before work begins.',
  },
  {
    number: '02',
    title: 'No Subcontractors, Ever',
    body:
      "Every Sure West roof is installed by our in-house Red Seal crew. We don't hand your home off to the cheapest available contractor the morning of install.",
  },
  {
    number: '03',
    title: 'Advisor, Not Salesperson',
    body:
      "If your roof doesn't need replacing, we'll tell you. We'd rather lose a quote than sell you work you don't need. Honest assessments are how we've built our reputation in Cochrane.",
  },
  {
    number: '04',
    title: 'Text-First Communication',
    body:
      'We reply to every message within minutes, even evenings and weekends. No phone tag, no waiting days for a callback. Ask a question, get an answer.',
  },
]

function HowWeWork() {
  return (
    <section
      className="bg-brand-cream py-20 md:py-28"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1100px] mx-auto">
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
            className="font-display font-semibold text-brand-navy"
            style={{
              fontSize: 'clamp(30px, 4vw, 46px)',
              lineHeight: 1.1,
              letterSpacing: '-0.02em',
            }}
          >
            Four Things That Make Sure West Different
          </h2>
          <p
            className="mt-5 text-brand-slate leading-[1.65]"
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {DIFFERENTIATORS.map((d) => (
            <div
              key={d.number}
              className="bg-white rounded-2xl border border-[#E5E2D9] p-6 md:p-8 shadow-sm"
            >
              <span
                className="font-display font-bold text-brand-gold leading-none block"
                style={{ fontSize: 'clamp(36px, 4vw, 48px)', letterSpacing: '-0.02em' }}
              >
                {d.number}
              </span>
              <h3
                className="font-display font-semibold text-brand-navy mt-4"
                style={{ fontSize: '20px', letterSpacing: '-0.01em', lineHeight: 1.25 }}
              >
                {d.title}
              </h3>
              <p
                className="text-brand-slate leading-[1.65] mt-3"
                style={{
                  fontSize: '14.5px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                {d.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section: Service Areas (matches services hub pattern) ───────────────────

const AREAS = [
  {
    name: 'Cochrane',
    description:
      'Sure West Roofing is based in Cochrane, Alberta, and this is our primary service area. From Sunset Ridge to Heritage Hills, we know the local weather patterns and building styles that matter for every roofing decision here.',
    href: '/free-roof-estimate-cochrane',
    linkText: 'Get a free estimate in Cochrane',
  },
  {
    name: 'Calgary',
    description:
      'We bring the same Red Seal certified standard to Calgary as we deliver in Cochrane. Whether you are in the northwest suburbs or across the city, our crew travels to complete roofing services in Calgary including replacement, repair, hail damage, and inspections.',
    href: '/calgary-roofing-contractor',
    linkText: 'Calgary roofing services',
  },
  {
    name: 'Canmore',
    description:
      "Canmore's mountain climate is demanding on roofs. Steep pitches, heavy snow loads, and Chinook wind uplift require specific material choices and installation methods. Our team has the local knowledge to build roofs that last here.",
    href: '/canmore-roofing-contractor',
    linkText: 'Canmore roofing services',
  },
]

function ServiceAreas() {
  return (
    <section
      className="relative overflow-hidden py-20 md:py-24"
      style={{
        background: '#F7F5F0',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center mb-12 md:mb-16">
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
            Service Areas
          </span>
          <h2
            className="font-display font-semibold text-brand-navy"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              lineHeight: 1.15,
              letterSpacing: '-0.005em',
            }}
          >
            Roofing Services Across Cochrane,
            <br className="hidden lg:block" /> Calgary and Canmore
          </h2>
          <p
            className="mt-5 max-w-[580px] mx-auto text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Based in Cochrane, Alberta. We serve homeowners across the Bow Valley corridor
            and the Calgary region.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
          {AREAS.map((area) => (
            <div
              key={area.name}
              className="bg-white rounded-[12px] border border-brand-border p-6 md:p-8 hover:-translate-y-[4px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.10)] transition-all duration-300 ease-out"
            >
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-[8px] mb-5"
                style={{ background: 'rgba(212,175,96,0.10)' }}
              >
                <MapPin className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
              </div>
              <h3
                className="font-display font-semibold text-brand-navy mb-3"
                style={{ fontSize: '22px', letterSpacing: '-0.01em', lineHeight: 1.25 }}
              >
                {area.name}
              </h3>
              <p
                className="text-brand-slate leading-[1.65] mb-5"
                style={{
                  fontSize: '14px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                {area.description}
              </p>
              <Link
                href={area.href}
                className="inline-flex items-center gap-1.5 font-semibold text-brand-gold hover:text-[#B8943F] transition-colors duration-200"
                style={{
                  fontSize: '13px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  textDecoration: 'none',
                }}
              >
                {area.linkText}
                <svg
                  className="w-3.5 h-3.5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
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
      'Yes. Sure West carries a $2 million liability policy that protects you in the unlikely event of faulty workmanship leading to damage. Every crew member is covered by WCB Alberta, which means any injury sustained on your property is handled properly and will not fall back on you. As a homeowner, you have the right to request a copy of any contractor\u2019s coverage before work begins, and we encourage you to do so.',
  },
  {
    question: 'What certifications does Sure West Roofing hold?',
    answer:
      "Sure West is a Red Seal Journeyman certified roofer in Cochrane, which is the highest interprovincial trade credential in Canada. We also hold current Fall Protection and Standard First Aid certifications on every installer, and we carry IKO ShieldPRO installer status that qualifies your roof for top-tier manufacturer warranty coverage. Alberta\u2019s roofing regulations are tightening: contractors are now required to hold Journeyman Certification and pay crew members according to provincial schedules. Ask any contractor you\u2019re considering how they\u2019re adjusting their processes to comply.",
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
      'Every Sure West roof replacement is backed by our 10-year written workmanship warranty, covering installation defects like fastener issues, flashing failures, or ventilation problems. Materials are covered by the manufacturer: standard IKO shingles carry a limited lifetime warranty, and because Sure West is an IKO ShieldPRO installer, eligible roofs qualify for upgraded ShieldPRO Plus coverage including non-prorated material replacement and labour for the first 25 years.',
  },
  {
    question: 'Why choose Sure West Roofing over other Cochrane roofing contractors?',
    answer:
      'Three things set Sure West apart in Cochrane: every installer is Red Seal Journeyman certified, every roof is installed by our own in-house crew with zero subcontractors, and every project is backed by IKO ShieldPRO manufacturer coverage plus our 10-year workmanship warranty. We also operate with a fixed written quote before work begins and handle insurance claims directly with your adjuster, so there are no surprise costs and no chasing paperwork.',
  },
]

function AboutFAQ() {
  return (
    <ServiceFAQ
      faqs={ABOUT_FAQS}
      heading="About Sure West Roofing"
      subhead="Everything homeowners ask about our company, credentials, and approach."
      sectionBg="#EFEBE0"
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
      <Credentials />
      <HowWeWork />
      <PortfolioCarousel
        images={[
          { src: '/images/Cochrane Roofing Contractor Gallery 1.webp', alt: 'Cochrane roofing contractor project 1' },
          { src: '/images/Cochrane Roofing Contractor Gallery 2.webp', alt: 'Cochrane roofing contractor project 2' },
          { src: '/images/Cochrane Roofing Contractor Gallery 3.webp', alt: 'Cochrane roofing contractor project 3' },
          { src: '/images/Cochrane Roofing Contractor Gallery 4.webp', alt: 'Cochrane roofing contractor project 4' },
          { src: '/images/Cochrane Roofing Contractor Gallery 5.webp', alt: 'Cochrane roofing contractor project 5' },
          { src: '/images/Cochrane Roofing Contractor Gallery 6.webp', alt: 'Cochrane roofing contractor project 6' },
          { src: '/images/Cochrane Roofing Contractor Gallery 7.webp', alt: 'Cochrane roofing contractor project 7' },
          { src: '/images/Cochrane Roofing Contractor Gallery 8.webp', alt: 'Cochrane roofing contractor project 8' },
          { src: '/images/Cochrane Roofing Contractor Gallery 9.webp', alt: 'Cochrane roofing contractor project 9' },
          { src: '/images/Cochrane Roofing Contractor Gallery 10.webp', alt: 'Cochrane roofing contractor project 10', objectPosition: '70% center' },
          { src: '/images/Cochrane Roofing Contractor Gallery 12.webp', alt: 'Cochrane roofing contractor project 11' },
          { src: '/images/Cochrane Roofing Contractor Gallery 13.webp', alt: 'Cochrane roofing contractor project 12' },
          { src: '/images/Cochrane Roofing Contractor Gallery 14.webp', alt: 'Cochrane roofing contractor project 13' },
          { src: '/images/Cochrane Roofing Contractor Gallery 15.webp', alt: 'Cochrane roofing contractor project 14', objectPosition: '70% center' },
          { src: '/images/Cochrane Roofing Contractor Gallery 16.webp', alt: 'Cochrane roofing contractor project 15' },
          { src: '/images/Cochrane Roofing Contractor Gallery 19.webp', alt: 'Cochrane roofing contractor project 16' },
          { src: '/images/Cochrane Roofing Contractor Gallery 20.webp', alt: 'Cochrane roofing contractor project 17' },
          { src: '/images/Cochrane Roofing Contractor Gallery 21.webp', alt: 'Cochrane roofing contractor project 18' },
          { src: '/images/Cochrane Roofing Contractor Gallery 22.webp', alt: 'Cochrane roofing contractor project 19' },
        ]}
      />
      <ServiceAreas />
      <AboutTestimonials />
      <AboutFAQ />
      <BottomCTA
        heading="Ready to Work With a Cochrane Roofing Team You Can Actually Trust?"
        subtext="Free in-home estimate. Fixed written quote within 48 hours. Quick replies, even after hours."
      />
    </>
  )
}
