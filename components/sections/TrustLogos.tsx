'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Home, Users, Star, ShieldCheck, type LucideIcon } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

function CountUp({
  end,
  suffix = '',
  decimals = 0,
  duration = 2,
}: {
  end: number
  suffix?: string
  decimals?: number
  duration?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const [value, setValue] = useState(end)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.disconnect()
        const startTime = performance.now()
        const step = (now: number) => {
          const elapsed = Math.min((now - startTime) / (duration * 1000), 1)
          const ease = 1 - Math.pow(1 - elapsed, 3)
          setValue(end * ease)
          if (elapsed < 1) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
      },
      { rootMargin: '-60px' }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [end, duration])

  return (
    <span ref={ref}>
      {decimals > 0 ? value.toFixed(decimals) : Math.round(value)}
      {suffix}
    </span>
  )
}

const logos = [
  { src: '/images/logos/AARA Roofing Association.webp', alt: 'AARA Roofing Association member' },
  { src: '/images/logos/BBB Accredited Business.webp', alt: 'BBB Accredited Business' },
  { src: '/images/logos/WCB Roofing Contractors.webp', alt: 'WCB covered roofing contractor' },
  { src: '/images/logos/Certified Residential Contractor.webp', alt: 'Certified Residential Contractor' },
  { src: '/images/logos/Emerald Pro Contractor.webp', alt: 'Emerald Pro Contractor' },
  { src: '/images/logos/Interprovincial Roofing Standard.webp', alt: 'Interprovincial Roofing Standard' },
  { src: '/images/logos/Roofing Contractor Shingle Master.webp', alt: 'ShingleMaster certified' },
]


interface Stat {
  end?: number
  suffix?: string
  decimals?: number
  staticValue?: string
  label: React.ReactNode
  Icon: LucideIcon
}

const STATS: Stat[] = [
  {
    end: 1200,
    suffix: '+',
    decimals: 0,
    label: (
      <>
        <span className="md:hidden">Homeowners</span>
        <span className="hidden md:inline">Homeowners Served</span>
      </>
    ),
    Icon: Home,
  },
  {
    end: 100,
    suffix: '%',
    decimals: 0,
    label: (
      <>
        <span className="md:hidden">In-House</span>
        <span className="hidden md:inline">In-House Roofers</span>
      </>
    ),
    Icon: Users,
  },
  {
    end: 5,
    suffix: '.0',
    decimals: 0,
    label: (
      <>
        <span className="md:hidden">Rating</span>
        <span className="hidden md:inline">Google Rating</span>
      </>
    ),
    Icon: Star,
  },
  {
    end: 10,
    suffix: ' Yr',
    decimals: 0,
    label: (
      <>
        <span className="md:hidden">Guarantee</span>
        <span className="hidden md:inline">Workmanship Guarantee</span>
      </>
    ),
    Icon: ShieldCheck,
  },
]

type TrustLogosVariant = 'both' | 'stats' | 'certs'

interface TrustLogosProps {
  variant?: TrustLogosVariant
  /** Override the section background. Defaults to white. */
  sectionBg?: string
}

export function TrustLogos({ variant = 'both', sectionBg = '#FFFFFF' }: TrustLogosProps = {}) {
  const showStats = variant === 'both' || variant === 'stats'
  const showCerts = variant === 'both' || variant === 'certs'

  // When the certs strip continues a cream section above (e.g. under WhySureWest),
  // strip the top padding so it sits closer to the content above.
  const isContinuationOnCream = variant === 'certs' && sectionBg.toUpperCase() === '#F7F5F0'
  const paddingClasses = isContinuationOnCream ? 'pt-0 pb-16 md:pt-0 md:pb-20' : 'py-12 md:py-16'

  return (
    <section
      className={paddingClasses}
      style={{
        background: sectionBg,
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
      aria-label={
        variant === 'stats'
          ? 'Company stats'
          : variant === 'certs'
            ? 'Certifications'
            : 'Stats and certifications'
      }
    >
      <div className="max-w-[960px] mx-auto">
        {/* ── Stats ──────────────────────────────────────────────── */}
        {showStats && (
        <Reveal>
        <div className="grid grid-cols-4 gap-x-3 sm:gap-x-4 md:gap-x-6">
          {STATS.map((stat, i) => {
            return (
              <div key={i} className="flex flex-col items-center text-center">
                <span
                  className="font-display font-semibold leading-none text-brand-gold"
                  style={{ fontSize: 'clamp(22px, 4.5vw, 56px)', letterSpacing: '-0.03em' }}
                >
                  {stat.staticValue ? (
                    <span>{stat.staticValue}</span>
                  ) : (
                    <CountUp end={stat.end ?? 0} suffix={stat.suffix ?? ''} decimals={stat.decimals ?? 0} duration={2.2} />
                  )}
                </span>
                <span
                  className="mt-2 text-brand-slate uppercase tracking-[0.08em] md:tracking-[0.1em] leading-tight"
                  style={{
                    fontSize: 'clamp(10px, 1.2vw, 12px)',
                    fontFamily: "var(--font-inter), system-ui, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            )
          })}
        </div>
        </Reveal>
        )}

        {/* ── Certifications ─────────────────────────────────────── */}
        {showCerts && (
        <Reveal delay={150}>
        <div className="flex flex-col items-center" style={{ marginTop: showStats ? '64px' : '0px' }}>
          <span
            className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-8 text-brand-gold"
            style={{
              background: sectionBg.toUpperCase() === '#F7F5F0' ? '#FFFFFF' : '#F7F5F0',
              fontSize: '12px',
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            Certified &amp; Accredited
          </span>

          <ul className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-12 gap-y-5 sm:gap-y-6">
            {logos.map((logo) => (
              <li
                key={logo.src}
                className="flex items-center justify-center h-[40px] sm:h-[60px] basis-[calc(25%-9px)] sm:basis-auto"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={60}
                  sizes="(max-width: 640px) 80px, 140px"
                  quality={80}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain sm:max-w-none sm:h-full sm:w-auto"
                />
              </li>
            ))}
          </ul>
        </div>
        </Reveal>
        )}
      </div>
    </section>
  )
}
