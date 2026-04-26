'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { Home, Zap, Star, ShieldCheck, type LucideIcon } from 'lucide-react'
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
  end: number
  suffix: string
  decimals: number
  label: React.ReactNode
  Icon: LucideIcon
}

const STATS: Stat[] = [
  { end: 250, suffix: '+', decimals: 0, label: 'Roofs Completed', Icon: Home },
  { end: 1, suffix: ' Day', decimals: 0, label: 'Average Install Time', Icon: Zap },
  { end: 5, suffix: '.0', decimals: 0, label: 'Google Rating', Icon: Star },
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

export function TrustLogos() {
  return (
    <section
      className="bg-white py-12 md:py-16"
      style={{
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
      aria-label="Stats and certifications"
    >
      <div className="max-w-[960px] mx-auto">
        {/* ── Stats ──────────────────────────────────────────────── */}
        <Reveal>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-8 md:gap-x-6">
          {STATS.map((stat, i) => {
            return (
              <div key={i} className="flex flex-col items-center text-center">
                <span
                  className="font-display font-semibold leading-none text-brand-gold"
                  style={{ fontSize: 'clamp(36px, 4.5vw, 56px)', letterSpacing: '-0.03em' }}
                >
                  <CountUp end={stat.end} suffix={stat.suffix} decimals={stat.decimals} duration={2.2} />
                </span>
                <span
                  className="mt-2 text-brand-slate uppercase tracking-[0.1em]"
                  style={{
                    fontSize: '12px',
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

        {/* ── Certifications ─────────────────────────────────────── */}
        <Reveal delay={150}>
        <div className="flex flex-col items-center" style={{ marginTop: '64px' }}>
          <span
            className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-8 text-brand-gold"
            style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: "var(--font-inter), system-ui, sans-serif", fontWeight: 600, lineHeight: 1 }}
          >
            Certified &amp; Accredited
          </span>

          <ul className="flex flex-wrap items-center justify-center gap-x-3 sm:gap-x-12 gap-y-5 sm:gap-y-6">
            {logos.map((logo) => (
              <li
                key={logo.src}
                className="flex items-center justify-center h-[40px] sm:h-[60px] w-[72px] sm:w-auto"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={140}
                  height={60}
                  sizes="(max-width: 640px) 80px, 140px"
                  quality={80}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain"
                />
              </li>
            ))}
          </ul>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
