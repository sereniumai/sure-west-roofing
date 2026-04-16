'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Home, Zap, Star, ShieldCheck, type LucideIcon } from 'lucide-react'

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
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!inView) return
    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = Math.min((now - startTime) / (duration * 1000), 1)
      const ease = 1 - Math.pow(1 - elapsed, 3)
      setValue(end * ease)
      if (elapsed < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, end, duration])

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

const EASE_OUT = [0.16, 1, 0.3, 1] as const

interface Stat {
  end: number
  suffix: string
  decimals: number
  label: string
  Icon: LucideIcon
}

const STATS: Stat[] = [
  { end: 250, suffix: '+', decimals: 0, label: 'Roofs Completed', Icon: Home },
  { end: 1, suffix: ' Day', decimals: 0, label: 'Average Install Time', Icon: Zap },
  { end: 5, suffix: '.0', decimals: 0, label: 'Google Rating (80+ Reviews)', Icon: Star },
  { end: 10, suffix: ' Yr', decimals: 0, label: 'Workmanship Guarantee', Icon: ShieldCheck },
]

export function TrustLogos() {
  return (
    <section
      className="bg-white"
      style={{
        paddingTop: '64px',
        paddingBottom: '64px',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
      aria-label="Stats and certifications"
    >
      <div className="max-w-[1200px] mx-auto">
        {/* ── Stats ──────────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          {STATS.map((stat) => {
            const { Icon } = stat
            return (
              <div key={stat.label} className="flex flex-col items-center text-center">
                <Icon className="w-6 h-6 text-brand-slate mb-3" strokeWidth={1.5} />
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
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {stat.label}
                </span>
              </div>
            )
          })}
        </motion.div>

        {/* ── Divider ────────────────────────────────────────────── */}
        <div className="mx-auto border-t border-brand-border" style={{ width: '80%', marginTop: '48px' }} />

        {/* ── Certifications ─────────────────────────────────────── */}
        <div className="flex flex-col items-center" style={{ marginTop: '32px' }}>
          <motion.span
            className="inline-flex items-center h-8 md:h-9 px-3 md:px-4 text-[13px] md:text-[14px] font-body font-bold uppercase tracking-[0.12em] rounded-[--radius-sm] mb-8"
            style={{ background: 'rgba(0,0,0,0.04)', color: 'var(--color-accent, #D4AF60)' }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, ease: EASE_OUT }}
          >
            Certified &amp; Accredited
          </motion.span>

          <motion.ul
            className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6"
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.65, delay: 0.08, ease: EASE_OUT }}
          >
            {logos.map((logo) => (
              <li key={logo.src} className="flex items-center justify-center h-[60px]">
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={200}
                  height={60}
                  className="h-full w-auto object-contain"
                />
              </li>
            ))}
          </motion.ul>
        </div>
      </div>
    </section>
  )
}
