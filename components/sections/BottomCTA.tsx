import type { ReactNode } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

interface Stat {
  value: string
  label: string
}

interface CTA {
  label: string
  href: string
}

interface BottomCTAProps {
  heading: ReactNode
  subtext: string
  primaryCTA?: CTA
  secondaryCTA?: CTA
  stats?: Stat[]
  sectionBg?: string
}

const DEFAULT_STATS: Stat[] = [
  { value: '250+', label: 'Roofs Completed' },
  { value: '5.0 ★', label: 'Google Rating' },
  { value: '10 yr', label: 'Workmanship Warranty' },
]

export function BottomCTA({
  heading,
  subtext,
  primaryCTA = { label: 'Get a Free Estimate', href: '/free-roof-estimate-cochrane' },
  secondaryCTA = { label: 'Call 403-990-7210', href: 'tel:+14039907210' },
  stats = DEFAULT_STATS,
  sectionBg = '#F7F5F0',
}: BottomCTAProps) {
  return (
    <section
      id="contact-cta"
      className="relative overflow-hidden py-20 md:py-28"
      style={{
        background: sectionBg,
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      {/* Paper-grain warm wash, same recipe as WhySureWest / PortfolioCarousel */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          background:
            'radial-gradient(1200px 600px at 15% 20%, rgba(212,175,96,0.10), transparent 60%), radial-gradient(900px 500px at 85% 80%, rgba(26,22,18,0.04), transparent 60%)',
        }}
      />

      <Reveal>
      <div className="relative z-10 max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* LEFT, heading + CTAs + stats */}
        <div className="text-center lg:text-left">
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
            Free Estimate
          </span>
          <h2
            className="font-display font-semibold text-brand-navy"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 52px)',
              lineHeight: 1.1,
              letterSpacing: '-0.025em',
            }}
          >
            {heading}
          </h2>
          <p
            className="mt-6 mx-auto lg:mx-0 max-w-[520px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '17px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            {subtext}
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-3">
            <Button variant="primary" size="lg" href={primaryCTA.href}>
              {primaryCTA.label}
            </Button>
            <Button variant="outline" size="lg" href={secondaryCTA.href}>
              {secondaryCTA.label}
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-start justify-center lg:justify-start gap-x-6 sm:gap-x-10 md:gap-x-16 gap-y-6">
            {stats.map(({ value, label }) => (
              <div key={label} className="flex flex-col items-center text-center">
                <span
                  className="font-display font-semibold text-brand-gold"
                  style={{ fontSize: '26px', letterSpacing: '-0.02em', lineHeight: 1 }}
                >
                  {value}
                </span>
                <span
                  className="mt-2 text-brand-slate"
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 500,
                    letterSpacing: '0.04em',
                    textTransform: 'uppercase',
                  }}
                >
                  {label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT, team photo, premium framing matching FoundersVideo */}
        <div className="relative">
          <div className="relative">
            {/* Soft gold radial glow behind */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-8 -inset-y-6 -z-10"
              style={{
                background:
                  'radial-gradient(600px 280px at 50% 50%, rgba(212,175,96,0.18), transparent 70%)',
                filter: 'blur(4px)',
              }}
            />
            <div
              className="relative aspect-[4/3] w-full max-w-[640px] mx-auto lg:max-w-none rounded-[16px] overflow-hidden ring-1 ring-black/5"
              style={{
                boxShadow:
                  '0 40px 90px -30px rgba(26,22,18,0.55), 0 18px 40px -18px rgba(26,22,18,0.3)',
              }}
            >
              <Image
                src="/images/sure-wests-roofing-team-cochrane.webp"
                alt="The Sure West Roofing team in Cochrane, Alberta"
                fill
                sizes="(max-width: 1024px) 90vw, 640px"
                quality={95}
                className="object-cover"
              />
            </div>
          </div>
          <p
            className="mt-5 text-center text-brand-slate uppercase tracking-[0.1em]"
            style={{
              fontSize: '11px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 500,
            }}
          >
            The Sure West Crew · Cochrane, Alberta
          </p>
        </div>
      </div>
      </Reveal>
    </section>
  )
}
