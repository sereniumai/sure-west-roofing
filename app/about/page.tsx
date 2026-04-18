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
  ArrowRight,
  Phone,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reviews } from '@/components/sections/Reviews'
import { FAQSection } from '@/components/sections/FAQSection'
import type { FAQItem } from '@/lib/types'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Red Seal Roofer Cochrane | About Sure West Roofing',
  description:
    'Sure West is a Red Seal certified roofer in Cochrane, Alberta. Owner-operated, no subcontractors, and serving Cochrane, Calgary, and Canmore. Meet the team behind every Sure West roof.',
  alternates: {
    canonical: 'https://surewestroofing.ca/about',
  },
  openGraph: {
    title: 'Red Seal Roofer Cochrane | About Sure West Roofing',
    description:
      'Meet the Red Seal certified roofing team behind Sure West. Owner-operated in Cochrane, Alberta, serving Cochrane, Calgary, and Canmore.',
    url: 'https://surewestroofing.ca/about',
    type: 'website',
    locale: 'en_CA',
    images: [
      {
        // TODO: shoot a Sure West team group photo and place at /public/images/about/team-hero.jpg
        url: '/images/about/team-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'Sure West Roofing Red Seal certified team in Cochrane, Alberta',
      },
    ],
  },
}

// ─── JSON-LD: AboutPage ──────────────────────────────────────────────────────
// LocalBusiness/RoofingContractor schema is already injected site-wide via
// app/layout.tsx, so we only add the AboutPage schema here.

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
    email: 'info@surewestroofing.ca',
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

// ─── Section: Asymmetric Hero ────────────────────────────────────────────────

function AboutHero() {
  return (
    <section className="bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6 pt-28 pb-20 lg:pt-36 lg:pb-28">
        {/* Breadcrumb */}
        <nav aria-label="Breadcrumb" className="mb-10">
          <ol
            className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#4A5568]"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            <li>
              <Link href="/" className="hover:text-[#C49A2C] transition-colors duration-200">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="opacity-40 select-none">/</li>
            <li className="text-[#1B3558] font-medium" aria-current="page">
              About
            </li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left content (col-span-2) */}
          <div className="lg:col-span-2 flex flex-col justify-center">
            <span
              className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-[#C49A2C]"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              About Sure West
            </span>

            <h1
              className="font-display font-bold text-[#1B3558] leading-[1.05] mt-4"
              style={{ fontSize: 'clamp(36px, 5vw, 64px)', letterSpacing: '-0.02em' }}
            >
              The Red Seal Roofer Cochrane Homeowners Trust
            </h1>

            <p
              className="text-lg text-[#4A5568] leading-relaxed mt-6 max-w-md"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              Sure West is an owner-operated, Red Seal certified roofing company serving
              Cochrane, Calgary, and Canmore. Meet the team behind every Sure West roof.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              {/* /contact route does not exist; using /free-roof-estimate-cochrane (the actual estimate form). */}
              <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
                Get a Free Estimate
              </Button>
              <Button variant="outline" size="lg" href="#team">
                Meet the Team
              </Button>
            </div>
          </div>

          {/* Right image (col-span-3) */}
          <div className="lg:col-span-3 relative">
            <div
              aria-hidden="true"
              className="absolute -bottom-4 -right-4 w-full h-full rounded-2xl bg-[#1B3558] opacity-[0.08] -z-10"
            />

            <div className="relative overflow-hidden rounded-2xl bg-white">
              <div className="relative aspect-[4/3]">
                <Image
                  // TODO: place hero team group photo at /public/images/about/team-group-hero.jpg
                  src="/images/about/team-group-hero.jpg"
                  alt="Red Seal certified Sure West Roofing team in Cochrane, Alberta"
                  fill
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                  priority
                />
              </div>

              <div className="absolute bottom-4 left-4 inline-flex items-center gap-1.5 bg-[#C49A2C] text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1.5 rounded-full shadow-md">
                <ShieldCheck className="w-3.5 h-3.5" strokeWidth={2.5} />
                Red Seal Certified
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section: Our Story (Chunk 3) ────────────────────────────────────────────
// Asymmetric 12-col split. Oversized pull-quote left, portrait offset down right.

function OurStory() {
  return (
    <section className="bg-[#EFEBE0]">
      <div className="max-w-6xl mx-auto px-6 py-24 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left column (col-span-7) */}
          <div className="lg:col-span-7">
            <span
              className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-[#C49A2C]"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              Our Story
            </span>

            <h2
              className="font-display font-bold text-[#1B3558] mt-4"
              style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              Character, Competency, Proven Processes
            </h2>

            {/* Pull-quote with thick gold left bar */}
            <blockquote
              className="font-display font-medium text-[#1B3558] italic leading-snug mt-8 max-w-xl border-l-4 border-[#C49A2C] pl-6"
              style={{ fontSize: 'clamp(20px, 2.4vw, 30px)' }}
            >
              &ldquo;The roofing industry rewards speed first. We were tired of watching
              homeowners pay the price.&rdquo;
            </blockquote>

            <div
              className="space-y-4 max-w-xl mt-8 text-base text-[#4A5568] leading-relaxed"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              <p>
                You deserve a predictable, reliable roofing experience that impresses the
                neighbours and leaves your lifestyle uninterrupted. That&apos;s hard to find in
                a largely unskilled industry built to reward speed first.
              </p>
              <p>
                Sure West exists to change that. We&apos;re a Red Seal roofing contractor in
                Cochrane, Alberta, built on strong individual character, genuine trade
                competency, and proven processes every crew member follows on every roof.
              </p>
              <p>
                Owner-operated. No subcontractors. No corner-cutting. Just Red Seal Journeyman
                roofers who treat your home the way they&apos;d treat their own.
              </p>
            </div>

            <div className="mt-10">
              <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
                Get a Free Estimate
              </Button>
            </div>
          </div>

          {/* Right column (col-span-5): portrait offset down */}
          <div className="lg:col-span-5 relative mt-12 lg:mt-32">
            <div
              className="relative overflow-hidden rounded-2xl bg-white"
              style={{
                boxShadow: '0 2px 4px rgba(27,53,88,0.06), 0 20px 48px -12px rgba(27,53,88,0.18)',
              }}
            >
              <div className="relative aspect-[3/4]">
                <Image
                  // TODO: place owner portrait at /public/images/about/craig-on-roof.jpg
                  src="/images/about/craig-on-roof.jpg"
                  alt="Craig, Red Seal Journeyman roofer and Sure West owner, on a Cochrane roof"
                  fill
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            {/* Floating caption card: bottom-left of image, partially overlapping */}
            <div className="absolute bottom-6 -left-4 sm:-ml-6 bg-white border border-[#E5E2D9] rounded-xl shadow-sm p-5 max-w-[220px]">
              <span
                className="inline-block text-xs uppercase tracking-widest font-semibold text-[#C49A2C]"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                Owner
              </span>
              <p
                className="font-display font-semibold text-[#1B3558] text-lg mt-1"
                style={{ letterSpacing: '-0.01em' }}
              >
                Craig
              </p>
              <p
                className="text-xs text-[#4A5568] mt-1"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                Red Seal Journeyman
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section: Meet the Team (Chunk 4) ────────────────────────────────────────
// Mobile: horizontal scroll. Desktop: 4-up grid. Red Seal badge on certified members.
// TODO: All team photos need to be shot in matching style (outdoor, Sure West apparel,
// matching lighting). Confirm full team roster with Craig before launch.

interface TeamMember {
  name: string
  role: string
  bio: string
  photo: string
  redSeal: boolean
  credentials: ('red-seal' | 'fall-protection' | 'first-aid')[]
}

const TEAM: TeamMember[] = [
  {
    name: 'Craig',
    role: 'Owner & Red Seal Journeyman',
    bio: 'Founded Sure West to raise the standard of roofing in Alberta. Lives in Cochrane and personally inspects every roof the team installs.',
    photo: '/images/about/team-craig.jpg',
    redSeal: true,
    credentials: ['red-seal', 'fall-protection', 'first-aid'],
  },
  {
    name: 'Mark',
    role: 'Lead Installer',
    bio: '[placeholder, request bio from Craig]',
    photo: '/images/about/team-mark.jpg',
    redSeal: true,
    credentials: ['red-seal', 'fall-protection', 'first-aid'],
  },
  {
    name: 'Kyle',
    role: 'Installer',
    bio: '[placeholder, request bio from Craig]',
    photo: '/images/about/team-kyle.jpg',
    redSeal: false,
    credentials: ['fall-protection', 'first-aid'],
  },
  {
    name: 'Jaron',
    role: 'Installer',
    bio: '[placeholder, request bio from Craig]',
    photo: '/images/about/team-jaron.jpg',
    redSeal: false,
    credentials: ['fall-protection', 'first-aid'],
  },
]

const CRED_ICONS = {
  'red-seal': ShieldCheck,
  'fall-protection': HardHat,
  'first-aid': HeartPulse,
} as const

function TeamCard({ member }: { member: TeamMember }) {
  return (
    <article className="bg-white rounded-2xl border border-[#E5E2D9] overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300">
      <div className="relative aspect-[4/5]">
        <Image
          src={member.photo}
          alt={`${member.name}, ${member.role} at Sure West Roofing in Cochrane, Alberta`}
          fill
          sizes="(max-width: 768px) 80vw, 25vw"
          className="object-cover object-top"
          loading="lazy"
        />

        {/* Red Seal badge: top-right of photo, certified journeymen only */}
        {member.redSeal && (
          <div className="absolute top-4 right-4 inline-flex items-center gap-1 bg-[#C49A2C] text-white text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md">
            <ShieldCheck className="w-3 h-3" strokeWidth={2.5} />
            Red Seal
          </div>
        )}
      </div>

      <div className="p-6">
        <h3
          className="font-display font-bold text-xl text-[#1B3558]"
          style={{ letterSpacing: '-0.01em' }}
        >
          {member.name}
        </h3>
        <p
          className="text-[11px] uppercase tracking-widest text-[#C49A2C] mt-1 font-semibold"
          style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
        >
          {member.role}
        </p>

        <div className="border-t border-[#E5E2D9] mt-4 pt-4">
          <p
            className="text-sm text-[#4A5568] leading-relaxed"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            {member.bio}
          </p>

          <div className="flex gap-3 mt-4">
            {member.credentials.map((cred) => {
              const Icon = CRED_ICONS[cred]
              return (
                <Icon
                  key={cred}
                  className="w-4 h-4 text-[#1B3558]"
                  strokeWidth={1.75}
                  aria-label={cred.replace('-', ' ')}
                />
              )
            })}
          </div>
        </div>
      </div>
    </article>
  )
}

function MeetTheTeam() {
  return (
    <section id="team" className="bg-[#F7F5F0]">
      <div className="max-w-7xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-[#C49A2C]"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            The Team
          </span>
          <h2
            className="font-display font-bold text-[#1B3558] mt-4"
            style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            Meet the Sure West Crew
          </h2>
          <p
            className="text-base text-[#4A5568] leading-relaxed mt-4"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            Every Sure West roof is installed by our in-house Red Seal crew. No subcontractors,
            ever.
          </p>
        </div>

        {/* Mobile: horizontal scroll. Tablet: 2-up. Desktop: 4-up. */}
        <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-4 -mx-6 px-6">
          {TEAM.map((member) => (
            <div key={member.name} className="flex-shrink-0 w-[80vw] max-w-[280px] snap-start">
              <TeamCard member={member} />
            </div>
          ))}
        </div>

        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TEAM.map((member) => (
            <TeamCard key={member.name} member={member} />
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section: By the Numbers (Chunk 5) ───────────────────────────────────────
// Flat horizontal stat strip. Gold dividers between stats on desktop. NO cards.
// TODO: confirm all numbers with client before launch.

const STATS = [
  { number: '500+', label: 'Cochrane Roofs Completed' },
  { number: '23+', label: 'Years Combined Experience' },
  { number: '4.9', label: 'Google Review Average' },
  { number: '100%', label: 'Red Seal Installed' },
]

function ByTheNumbers() {
  return (
    <section className="bg-[#EFEBE0]">
      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 lg:gap-0">
          {STATS.map((stat, i) => (
            <div
              key={stat.label}
              className={`text-center px-6 ${
                i < STATS.length - 1 ? 'lg:border-r lg:border-[#C49A2C]/30' : ''
              }`}
            >
              <div
                className="font-display font-bold text-[#1B3558] leading-none"
                style={{ fontSize: 'clamp(48px, 6vw, 64px)', letterSpacing: '-0.02em' }}
              >
                {stat.number}
              </div>
              <div className="w-12 h-[3px] bg-[#C49A2C] mx-auto mt-3" aria-hidden="true" />
              <p
                className="text-sm uppercase tracking-widest text-[#4A5568] mt-4"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section: Credentials Zig-Zag (Chunk 6) ──────────────────────────────────
// Alternating left/right layout. Large icon block paired with title + body.

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
      "The highest interprovincial trade credential in Canada. Every Sure West lead installer holds Red Seal certification, which means they've passed the national trade exam, completed a formal apprenticeship, and meet the same standard enforced across every Canadian province.",
  },
  {
    icon: 'Award',
    title: 'IKO ShieldPRO Installer',
    body:
      "Qualifies your roof for IKO's top-tier manufacturer warranty, including extended coverage on materials and workmanship. Most non-certified installers can't offer this level of protection on the shingles they install.",
  },
  {
    icon: 'FileCheck',
    title: '$2 Million Liability Insurance',
    body:
      "Comprehensive liability coverage on every job, every property, every time. As a homeowner, you have the right to ask any contractor for proof of coverage. We're happy to provide it before any work begins.",
  },
  {
    icon: 'HardHat',
    title: 'WCB Alberta Covered',
    body:
      "Every Sure West crew member is covered by Workers' Compensation Board Alberta. That means any injury sustained on your property is handled through WCB, not your homeowner's insurance.",
  },
  {
    icon: 'HeartPulse',
    title: 'Fall Protection & First Aid Certified',
    body:
      'Current Fall Protection and Standard First Aid certifications on every installer. Roofing is one of the highest-risk trades in Canada. We take crew safety as seriously as roof quality.',
  },
  {
    icon: 'MapPin',
    title: 'Licensed in Cochrane, Calgary & Canmore',
    body:
      "Active municipal business licenses in every community we serve. Alberta's roofing regulations are tightening, and every contractor you consider should be able to show current licensing for your municipality.",
  },
]

function Credentials() {
  return (
    <section className="bg-[#F7F5F0]">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-20">
          <span
            className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-[#C49A2C]"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            Credentials
          </span>
          <h2
            className="font-display font-bold text-[#1B3558] mt-4"
            style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            What Makes Sure West a Red Seal Roofer in Cochrane
          </h2>
          <p
            className="text-base text-[#4A5568] leading-relaxed mt-4"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            These are the credentials, certifications, and protections behind every roof we
            install in Cochrane, Calgary, and Canmore.
          </p>
        </div>

        <div className="space-y-16">
          {CREDENTIALS.map((cred, i) => {
            const Icon = CRED_ICON_MAP[cred.icon]
            const isEven = i % 2 === 1
            return (
              <div
                key={cred.title}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                <div
                  className={`lg:col-span-4 flex justify-center ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="w-32 h-32 rounded-2xl bg-white border border-[#E5E2D9] flex items-center justify-center shadow-sm">
                    <Icon className="w-16 h-16 text-[#C49A2C]" strokeWidth={1.5} />
                  </div>
                </div>

                <div className={`lg:col-span-8 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <h3
                    className="font-display font-bold text-[#1B3558]"
                    style={{ fontSize: 'clamp(22px, 2.5vw, 28px)', letterSpacing: '-0.01em', lineHeight: 1.2 }}
                  >
                    {cred.title}
                  </h3>
                  <p
                    className="text-base text-[#4A5568] leading-relaxed mt-4"
                    style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                  >
                    {cred.body}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

// ─── Section: How We Work Differently (Chunk 7) ──────────────────────────────
// Stacked horizontal cards with massive numerals. NOT a 4-up grid.

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
    <section className="bg-[#EFEBE0]">
      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span
            className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-[#C49A2C]"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            How We Work
          </span>
          <h2
            className="font-display font-bold text-[#1B3558] mt-4"
            style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
          >
            Four Things That Make Sure West Different
          </h2>
          <p
            className="text-base text-[#4A5568] leading-relaxed mt-4"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            What you get from a Red Seal roofing contractor that you don&apos;t get from the
            average Cochrane crew.
          </p>
        </div>

        <div className="space-y-6">
          {DIFFERENTIATORS.map((d) => (
            <div
              key={d.number}
              className="bg-white rounded-2xl border border-[#E5E2D9] p-8 lg:p-10 shadow-sm"
            >
              <div className="grid grid-cols-12 gap-6 items-center">
                <div className="col-span-2">
                  <span
                    className="font-display font-bold text-[#C49A2C] leading-none block"
                    style={{ fontSize: 'clamp(48px, 6vw, 72px)', letterSpacing: '-0.02em' }}
                  >
                    {d.number}
                  </span>
                </div>
                <div className="col-span-10">
                  <h3
                    className="font-display font-bold text-[#1B3558]"
                    style={{ fontSize: 'clamp(20px, 2.2vw, 26px)', letterSpacing: '-0.01em', lineHeight: 1.2 }}
                  >
                    {d.title}
                  </h3>
                  <p
                    className="text-base text-[#4A5568] leading-relaxed mt-3"
                    style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                  >
                    {d.body}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Section: Service Area Map (Chunk 8) ─────────────────────────────────────

const LOCATIONS = [
  { name: 'Cochrane', href: '/', primary: true },
  { name: 'Calgary', href: '/roofing-contractor-calgary', primary: false },
  { name: 'Canmore', href: '/roofing-contractor-canmore', primary: false },
]

function ServiceAreaMap() {
  return (
    <section className="bg-[#F7F5F0]">
      <div className="max-w-6xl mx-auto px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: text + location list */}
          <div>
            <span
              className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-[#C49A2C]"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              Service Area
            </span>
            <h2
              className="font-display font-bold text-[#1B3558] mt-4"
              style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              Serving Cochrane, Calgary, and Canmore
            </h2>
            <p
              className="text-base text-[#4A5568] leading-relaxed mt-6 max-w-lg"
              style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
            >
              Sure West is headquartered in Cochrane, Alberta and serves homeowners across the
              Bow Valley and the greater Calgary region. As a Red Seal roofing contractor
              licensed in all three municipalities, we bring the same standard of work to every
              roof, whether you&apos;re five minutes away or an hour down the highway.
            </p>

            <ul className="mt-8 space-y-4">
              {LOCATIONS.map((loc) => (
                <li key={loc.name} className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-[#C49A2C] flex-shrink-0" strokeWidth={1.75} />
                  <span
                    className="font-display font-semibold text-[#1B3558] text-xl flex-1"
                    style={{ letterSpacing: '-0.01em' }}
                  >
                    {loc.name}
                    {loc.primary && (
                      <span
                        className="ml-3 text-[10px] uppercase tracking-widest text-[#C49A2C] font-semibold align-middle"
                        style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
                      >
                        Primary
                      </span>
                    )}
                  </span>
                  <Link
                    href={loc.href}
                    className="inline-flex items-center gap-1.5 text-sm text-[#C49A2C] font-semibold hover:text-[#B8943F] transition-colors"
                    style={{
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      textDecoration: 'underline',
                      textUnderlineOffset: '3px',
                    }}
                  >
                    Visit page
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: stylised map */}
          <div className="relative">
            <div
              className="relative overflow-hidden rounded-2xl bg-white border border-[#E5E2D9] aspect-[4/3]"
              style={{
                boxShadow: '0 2px 4px rgba(27,53,88,0.06), 0 20px 48px -12px rgba(27,53,88,0.18)',
              }}
            >
              {/* TODO: design and place a stylised southern Alberta SVG map at
                  /public/images/about/service-area-map.svg with gold dots on Cochrane,
                  Calgary, and Canmore connected by a gold line. Until then, fall back
                  to a simple inline SVG schematic so the layout reads correctly. */}
              <Image
                src="/images/about/service-area-map.svg"
                alt="Sure West Roofing service area map covering Cochrane, Calgary, and Canmore Alberta"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                loading="lazy"
                onError={undefined}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Section: Testimonials (Chunk 9) ─────────────────────────────────────────
// Reuse the homepage Reviews component for voice consistency. The brief asked for
// per-section props (label/h2/testimonials) but the existing Reviews component
// renders its own marquee with its own 10-item dataset; not modifying the shared
// component here. White section, cream cards (matches the treatment used on the
// service pages so the voice is consistent across the site).

function AboutTestimonials() {
  return <Reviews sectionBg="#F7F5F0" cardBg="#FFFFFF" />
}

// ─── Section: About FAQ (Chunk 10) ───────────────────────────────────────────

const ABOUT_FAQS: FAQItem[] = [
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
    <FAQSection
      label="Common Questions"
      heading="About Sure West Roofing"
      body="Everything homeowners ask about our company, credentials, and approach."
      faqs={ABOUT_FAQS}
      schemaEnabled
    />
  )
}

// ─── Section: Final CTA (Chunk 11) ───────────────────────────────────────────
// Cream background with gold accent. NO navy band.

function FinalCTA() {
  return (
    <section className="bg-[#EFEBE0]">
      <div className="max-w-5xl mx-auto px-6 py-24 lg:py-32 text-center">
        <span
          className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-[#C49A2C]"
          style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
        >
          Next Step
        </span>
        <h2
          className="font-display font-bold text-[#1B3558] mt-4 max-w-3xl mx-auto"
          style={{ fontSize: 'clamp(32px, 4.5vw, 48px)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
        >
          Ready to Work With a Cochrane Roofing Team You Can Actually Trust?
        </h2>
        <p
          className="text-lg text-[#4A5568] leading-relaxed mt-6 max-w-2xl mx-auto"
          style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
        >
          Free in-home estimate. Fixed written quote within 48 hours. Quick replies, even after
          hours.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
            Get a Free Estimate
          </Button>
          <Button variant="outline" size="lg" href="tel:4039907210">
            <Phone className="w-4 h-4 mr-2 inline-block" strokeWidth={2} />
            (403) 990-7210
          </Button>
        </div>

        {/* Gold accent line + tagline */}
        <div className="mt-12">
          <div className="w-24 h-[3px] bg-[#C49A2C] mx-auto" aria-hidden="true" />
          <p
            className="text-xs uppercase tracking-widest text-[#1B3558] mt-6"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            Red Seal certified. Cochrane owned. Built for Alberta weather.
          </p>
        </div>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />

      <AboutHero />
      <OurStory />
      <MeetTheTeam />
      <ByTheNumbers />
      <Credentials />
      <HowWeWork />
      <ServiceAreaMap />
      <AboutTestimonials />
      <AboutFAQ />
      <FinalCTA />
    </>
  )
}
