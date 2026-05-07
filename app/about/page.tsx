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
  ClipboardCheck,
  Users,
  UserCheck,
  BadgeCheck,
  BadgeX,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import { Reviews } from '@/components/sections/Reviews'
import { BottomCTA } from '@/components/sections/BottomCTA'
import { TrustLogos } from '@/components/sections/TrustLogos'
import { TeamCarousel } from '@/components/sections/TeamCarousel'
import { AboutFAQ } from '@/components/sections/AboutFAQ'
import { FoundersVideo } from '@/components/ui/FoundersVideo'

// ─── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Red Seal Roofer Cochrane',
  description:
    'The Red Seal Roofer Cochrane homeowners trust, with an in-house crew, written warranty, honest quotes from day one, serving Cochrane, Calgary and Canmore.',
  alternates: {
    canonical: 'https://surewestroofing.ca/about',
  },
  openGraph: {
    title: 'Red Seal Roofer Cochrane | Sure West Roofing',
    description:
      'The Red Seal Roofer Cochrane homeowners trust, with an in-house crew, written warranty, honest quotes from day one, serving Cochrane, Calgary and Canmore.',
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
                background: '#FFFFFF',
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
              className="mt-5 text-brand-slate leading-[1.65] max-w-[480px] lg:max-w-[540px]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              Founded in 2020 by two roofers who chose character, competency, and craft over the industry standard. Red Seal Journeyman certified, serving Cochrane, Calgary, and Canmore.
            </p>
            </Reveal>

            <Reveal delay={420}>
            <div className="mt-8 flex flex-col sm:flex-row flex-wrap gap-3">
              <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
                Get a Free Estimate
              </Button>
              <Button variant="outline" size="lg" href="#brotherhood">
                Meet the Team
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
      id="why-we-exist"
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
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.05fr] gap-12 lg:gap-20 items-center">
          {/* Content column */}
          <Reveal>
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
              Why We Exist
            </span>

            <h2
              className="font-display font-medium text-brand-navy"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                lineHeight: 1.15,
                letterSpacing: '-0.005em',
              }}
            >
              Built on a Roof, Under the Sun
            </h2>

            <p
              className="mt-7 text-brand-navy leading-[1.55]"
              style={{
                fontSize: 'clamp(17px, 1.5vw, 19px)',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 500,
                letterSpacing: '-0.005em',
              }}
            >
              Two subcontractors recognized in each other something rare in the industry. Care, consistency, and pride in the craft.
            </p>

            <p
              className="mt-6 text-brand-slate leading-[1.7]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              Craig and Mike started Sure West in 2020 because the industry had normalized shortcuts they couldn&apos;t accept. Their answer was simple. Take on responsibility for the craft, for the team, and for every homeowner who hands over a roof. That responsibility breaks down into five parts: <strong className="font-semibold text-brand-navy">Legacy</strong>, <strong className="font-semibold text-brand-navy">Brotherhood</strong>, <strong className="font-semibold text-brand-navy">Character</strong>, <strong className="font-semibold text-brand-navy">Competency</strong>, and <strong className="font-semibold text-brand-navy">Proven Processes</strong>.
            </p>
          </Reveal>

          {/* Video column */}
          <Reveal delay={150} noBlur className="relative">
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
              alt="Craig and Mike, founders of Sure West Roofing in Cochrane Alberta"
              className="relative aspect-video w-full overflow-hidden rounded-[14px] bg-black"
              vimeoId="917315486"
              thumbnail="/images/About Sure West Roofing Thumbnail.jpg"
            />
          </Reveal>
        </div>
      </div>
    </section>
  )
}

// Stats strip + certifications row: reuse shared TrustLogos for consistency with
// the rest of the site.

// ─── Section: Legacy (Responsibility 01) ─────────────────────────────────────

const LEGACY_SERIF = "Georgia, 'Times New Roman', serif"

function Legacy() {
  return (
    <section
      id="legacy"
      className="relative overflow-hidden py-20 md:py-24 bg-brand-cream"
      style={{
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      <Reveal>
        <div className="relative max-w-[1200px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* LEFT — Framed portrait photo */}
            <div className="lg:col-span-5">
              <div
                className="relative aspect-[4/5] w-full overflow-hidden rounded-[10px]"
                style={{
                  boxShadow:
                    '0 30px 60px -25px rgba(26,22,18,0.35), 0 12px 30px -12px rgba(26,22,18,0.2)',
                }}
              >
                <Image
                  src="/images/Sure West Roofing Legacy.jpg"
                  alt="Sure West Roofing legacy of completed roofs across Cochrane, Calgary, and Canmore"
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  quality={95}
                  className="object-cover"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[inherit]"
                  style={{ boxShadow: 'inset 0 0 0 1px rgba(196,154,44,0.4)' }}
                />
              </div>
            </div>

            {/* RIGHT — Eyebrow + Heading + Body + Closing + Signature */}
            <div className="lg:col-span-7">
              <span
                className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] text-brand-gold"
                style={{
                  background: '#FFFFFF',
                  fontSize: '12px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 600,
                  lineHeight: 1,
                }}
              >
                Responsibility 01
              </span>

              <h2
                className="mt-6 font-display font-medium text-brand-navy"
                style={{
                  fontSize: 'clamp(32px, 4.5vw, 48px)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.005em',
                }}
              >
                Legacy
              </h2>

              <div
                className="mt-8 text-brand-slate leading-[1.65] max-w-[560px] space-y-5"
                style={{
                  fontSize: '16px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                <p>
                  Legacy isn&apos;t a marketing word. It&apos;s the long view. The reminder that what we do today echoes into tomorrow.
                </p>
                <p>
                  We treat every roof like our reputation depends on it, because in Cochrane, it does. Customers speak our name. Families say we showed up. Communities remember whether we made it better or left it the same.
                </p>
                <p>
                  That&apos;s what legacy means here. Not a tagline. The question we ask before every job:
                </p>
              </div>

              {/* Closing line, gold and quiet */}
              <p
                className="mt-6 font-display text-brand-gold"
                style={{
                  fontWeight: 400,
                  fontSize: 'clamp(18px, 1.5vw, 22px)',
                  lineHeight: 1.4,
                  letterSpacing: '0.01em',
                }}
              >
                Will I be proud of this in 20 years?
              </p>

              {/* Founders signature */}
              <p
                className="mt-3 text-brand-navy/70"
                style={{
                  fontFamily: LEGACY_SERIF,
                  fontStyle: 'italic',
                  fontWeight: 400,
                  fontSize: '17px',
                  letterSpacing: '0.01em',
                }}
              >
                Craig &amp; Mike, Founders
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

// ─── Reusable Value Section Template ─────────────────────────────────────────
// Used by Character (slot 5), Competency (slot 6), Proven Processes (slot 8).
// Centered intro block → two paired contrast cards → customer-translation paragraph
// → optional inline visual slot.

interface ValueCard {
  label: string
  body: string
  accent: 'gold' | 'navy'
}

interface ValueSectionProps {
  id: string
  eyebrow: string
  heading: string
  subtext: string
  cards: [ValueCard, ValueCard]
  customerTranslation: string
  /** Optional visual block rendered below the customer translation (e.g. 3-step strip). */
  optionalSlot?: React.ReactNode
  /** Override the section background. Defaults to brand cream. */
  sectionBg?: string
  /** When true, cards render on the left on desktop and text on the right. Mobile order unchanged. */
  cardsLeft?: boolean
}

function ValueSection({
  id,
  eyebrow,
  heading,
  subtext,
  cards,
  customerTranslation,
  optionalSlot,
  sectionBg = '#F7F5F0',
  cardsLeft = false,
}: ValueSectionProps) {
  return (
    <section
      id={id}
      className="relative overflow-hidden py-20 md:py-24"
      style={{
        background: sectionBg,
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Text column (left by default, right when cardsLeft) */}
          <Reveal className={`lg:col-span-6 ${cardsLeft ? 'lg:order-2' : ''}`}>
            <span
              className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] text-brand-gold"
              style={
                sectionBg.toUpperCase() === '#F7F5F0'
                  ? {
                      background: '#FFFFFF',
                      fontSize: '12px',
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontWeight: 600,
                      lineHeight: 1,
                    }
                  : {
                      background: '#F7F5F0',
                      fontSize: '12px',
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontWeight: 600,
                      lineHeight: 1,
                    }
              }
            >
              {eyebrow}
            </span>
            <h2
              className="mt-6 font-display font-medium text-brand-navy"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                lineHeight: 1.15,
                letterSpacing: '-0.005em',
              }}
            >
              {heading}
            </h2>
            <p
              className="mt-6 max-w-[520px] text-brand-slate leading-[1.65]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              {subtext}
            </p>
            <p
              className="mt-6 max-w-[520px] text-brand-slate leading-[1.65]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              {customerTranslation}
            </p>
          </Reveal>

          {/* Cards column (right by default, left when cardsLeft) */}
          <Reveal delay={150} className={`lg:col-span-6 ${cardsLeft ? 'lg:order-1' : ''}`}>
            <div className="flex flex-col gap-4 md:gap-5">
              {cards.map((card, i) => {
                const isGold = card.accent === 'gold'
                return (
                  <article
                    key={i}
                    className="relative rounded-[14px] border border-[#E5E2D9] bg-white p-7 md:p-8 overflow-hidden"
                    style={{
                      boxShadow:
                        '0 18px 40px -22px rgba(26,22,18,0.18), 0 4px 12px -6px rgba(26,22,18,0.08)',
                    }}
                  >
                    <span
                      aria-hidden="true"
                      className="absolute left-0 top-0 bottom-0 w-[3px]"
                      style={{
                        background: isGold ? '#C49A2C' : 'rgba(27,53,88,0.35)',
                      }}
                    />

                    <div className="flex items-center gap-3">
                      <span
                        aria-hidden="true"
                        className="inline-flex items-center justify-center w-7 h-7 rounded-full"
                        style={{
                          background: isGold
                            ? 'rgba(196,154,44,0.12)'
                            : 'rgba(27,53,88,0.08)',
                          border: isGold
                            ? '1px solid rgba(196,154,44,0.3)'
                            : '1px solid rgba(27,53,88,0.2)',
                        }}
                      >
                        {isGold ? (
                          <BadgeCheck className="w-4 h-4 text-brand-gold" strokeWidth={2} />
                        ) : (
                          <BadgeX
                            className="w-4 h-4"
                            strokeWidth={2}
                            style={{ color: 'rgba(27,53,88,0.7)' }}
                          />
                        )}
                      </span>
                      <p
                        className="uppercase tracking-[0.12em]"
                        style={{
                          fontSize: '12px',
                          fontFamily: 'var(--font-inter), system-ui, sans-serif',
                          fontWeight: 600,
                          color: isGold ? '#C49A2C' : 'rgba(27,53,88,0.7)',
                        }}
                      >
                        {card.label}
                      </p>
                    </div>

                    <p
                      className="mt-4 text-brand-navy leading-[1.6]"
                      style={{
                        fontSize: '16px',
                        fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        fontWeight: 400,
                      }}
                    >
                      {card.body}
                    </p>
                  </article>
                )
              })}
            </div>
          </Reveal>
        </div>

        {/* Optional inline visual */}
        {optionalSlot && (
          <Reveal delay={400}>
            <div className="mt-10 md:mt-14">{optionalSlot}</div>
          </Reveal>
        )}
      </div>
    </section>
  )
}

// ─── Section: Character (Responsibility 03) ──────────────────────────────────

function Character() {
  return (
    <ValueSection
      id="character"
      eyebrow="Responsibility 03"
      heading="Character"
      subtext="Who we are when no one's watching, with honest estimates, straight answers, and corners we don't cut, even when it costs us."
      cards={[
        {
          label: 'When Character Runs the Job',
          body: "Customers recommend us. Crews respect each other because honesty is the default. Our legacy is built on a foundation that won't crack.",
          accent: 'gold',
        },
        {
          label: "When It Doesn't",
          body: 'Promises are broken, trust erodes, and our reputation suffers. The mountain becomes heavier, and we lose the respect of those who matter most.',
          accent: 'navy',
        },
      ]}
      customerTranslation="For a homeowner, character is what shows up when no one's checking. It's the quote that doesn't get padded mid-project, the mistake reported before you spot it, the roof we'd tell you not to replace when the easier money is the replacement."
    />
  )
}

// ─── Section: Competency (Responsibility 04) ─────────────────────────────────

function Competency() {
  return (
    <ValueSection
      id="competency"
      sectionBg="#FFFFFF"
      cardsLeft
      eyebrow="Responsibility 04"
      heading="Competency"
      subtext="Knowing every system on a roof, anticipating every challenge, arriving with the tools and training for both, and hungry to be better tomorrow than today."
      cards={[
        {
          label: 'When Competency Runs the Job',
          body: 'Jobs done right the first time. Crews work with confidence. Customers feel safe under our roofs. We become men who are capable, dependable, always growing.',
          accent: 'gold',
        },
        {
          label: "When It Doesn't",
          body: 'Mistakes pile up, rework grows, and confidence in our work disappears. The mountain becomes heavier, and we lose the respect of those who depend on us.',
          accent: 'navy',
        },
      ]}
      customerTranslation="For a homeowner, competency means the parts you can't see done right the first time. The deck inspected before shingles go on. Flashings cut to the wall, not slapped over. Manufacturer specs followed every time. Twenty years from now, your roof shouldn't be how you find out we cut a corner."
    />
  )
}

// ─── Section: Proven Processes (Responsibility 05) ───────────────────────────

function ProvenProcesses() {
  return (
    <ValueSection
      id="proven-processes"
      eyebrow="Responsibility 05"
      heading="Proven Processes"
      subtext="Checklists, systems, and standards followed step by step on every roof, because the playbook isn't optional and discipline is the point."
      cards={[
        {
          label: 'When Processes Run the Job',
          body: 'Jobs finish on schedule with consistent quality. Crews operate smoothly and safely. Customers see the difference. We become men who are disciplined and dependable.',
          accent: 'gold',
        },
        {
          label: "When They Don't",
          body: 'Details are missed, rework grows, safety slips, and customers lose confidence in our reliability. The mountain becomes heavier, and chaos replaces order.',
          accent: 'navy',
        },
      ]}
      customerTranslation="For a homeowner, proven processes mean no improvisation on your roof. The same checklists run on day one and day three. The same communication before every site activity, the same magnetic nail sweep before we leave. Nothing gets skipped because the playbook doesn't allow it."
    />
  )
}

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
      "The highest trade credential in Canadian roofing. Sure West is Red Seal Journeyman certified, holding the standard that's recognized nationally.",
  },
  {
    icon: 'Award',
    title: 'IKO ShieldPRO Installer',
    body:
      'Approved by IKO to install at their highest standard, which qualifies your roof for top-tier manufacturer warranty coverage on materials and workmanship.',
  },
  {
    icon: 'FileCheck',
    title: '$2 Million Liability Insurance',
    body:
      'Comprehensive liability coverage on every job. Proof of coverage provided before any work begins, no questions asked.',
  },
  {
    icon: 'HardHat',
    title: 'WCB Alberta Covered',
    body:
      "Every crew member is covered by Workers' Compensation Board Alberta. If anything happens, it's handled through WCB, not your homeowner's insurance.",
  },
]

function Credentials() {
  return (
    <section
      id="credentials"
      className="bg-brand-cream py-20 md:py-28"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <Reveal>
        <div className="text-center max-w-[680px] mx-auto mb-12 md:mb-16">
          <span
            className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{
              background: '#FFFFFF',
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
            className="mt-5 max-w-[560px] mx-auto text-brand-slate leading-[1.65]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            What it means to be a Red Seal roofer in Cochrane: the certifications and protections behind every roof we install.
          </p>
        </div>
        </Reveal>

        <Reveal delay={150}>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-[920px] mx-auto">
          {CREDENTIALS.map((cred) => {
            const Icon = CRED_ICON_MAP[cred.icon]
            return (
              <article
                key={cred.title}
                className="group relative bg-white rounded-[14px] border border-[#E5E2D9] p-6 md:p-7 overflow-hidden cursor-default transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-[0_22px_44px_-22px_rgba(212,175,96,0.45),0_10px_22px_-10px_rgba(44,71,102,0.18)]"
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


// ─── Section: Testimonials ───────────────────────────────────────────────────

function AboutTestimonials() {
  return <Reviews sectionBg="#FFFFFF" cardBg="#F7F5F0" />
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
      <Legacy />
      <TeamCarousel />
      <Character />
      <Competency />
      <ProvenProcesses />
      <AboutTestimonials />
      <Credentials />
      <AboutFAQ />
      <BottomCTA
        sectionBg="#F7F5F0"
        heading="Ready to Hire the Red Seal Roofer Cochrane Trusts?"
        subtext="Five responsibilities, an in-house crew on every roof, and one standard. Free written quote and no sales pressure."
      />
    </>
  )
}
