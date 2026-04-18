import type { ReactNode } from 'react'
import { Button } from '@/components/ui/Button'

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
}: BottomCTAProps) {
  return (
    <section
      id="contact-cta"
      className="relative bg-brand-cream overflow-hidden py-20 md:py-28"
      style={{
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      <div className="relative z-10 max-w-[800px] mx-auto text-center">
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
          className="mt-6 mx-auto max-w-[520px] text-brand-slate leading-[1.7]"
          style={{
            fontSize: '17px',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontWeight: 400,
          }}
        >
          {subtext}
        </p>
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-3">
          <Button variant="primary" size="lg" href={primaryCTA.href}>
            {primaryCTA.label}
          </Button>
          <Button variant="outline" size="lg" href={secondaryCTA.href}>
            {secondaryCTA.label}
          </Button>
        </div>

        <div className="mt-12 flex flex-wrap items-start justify-center gap-x-6 sm:gap-x-10 md:gap-x-16 gap-y-6">
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
    </section>
  )
}
