'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'

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
  {
    src: '/images/logos/AARA Roofing Association.webp',
    alt: 'AARA Roofing Association member - Sure West Roofing Cochrane',
  },
  {
    src: '/images/logos/BBB Accredited Business.webp',
    alt: 'BBB Accredited Business - Sure West Roofing Cochrane Alberta',
  },
  {
    src: '/images/logos/WCB Roofing Contractors.webp',
    alt: 'WCB covered roofing contractor - Sure West Roofing Cochrane Alberta',
  },
  {
    src: '/images/logos/Certified Residential Contractor.webp',
    alt: 'Certified Residential Contractor - Sure West Roofing Cochrane',
  },
  {
    src: '/images/logos/Emerald Pro Contractor.webp',
    alt: 'Emerald Pro Contractor - Sure West Roofing Cochrane Alberta',
  },
  {
    src: '/images/logos/Interprovincial Roofing Standard.webp',
    alt: 'Interprovincial Roofing Standard - Sure West Roofing Red Seal certified',
  },
  {
    src: '/images/logos/Roofing Contractor Shingle Master.webp',
    alt: 'ShingleMaster certified roofing contractor - Sure West Roofing Cochrane',
  },
]

const EASE_OUT = [0.16, 1, 0.3, 1] as const

const STATS = [
  { end: 250, suffix: '+', decimals: 0, label: 'Roofs Completed' },
  { end: 20, suffix: '+', decimals: 0, label: 'Years Experience' },
  { end: 5, suffix: '.0', decimals: 0, label: 'Google Rating' },
  { end: 10, suffix: ' Yr', decimals: 0, label: 'Guarantee' },
]

export function TrustLogos() {
  return (
    <section
      className="relative bg-white overflow-hidden"
      style={{
        paddingTop: '48px',
        paddingBottom: '48px',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
      aria-label="Certifications and industry accreditations"
    >
      <div className="relative max-w-[1320px] mx-auto">
        {/* ── Stats ──────────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-0 md:flex md:items-center md:justify-between"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="hidden md:block w-px h-10 bg-[--color-near-black]/10 mr-6 lg:mr-10"
                />
              )}
              <div className="flex flex-col items-center text-center flex-1 md:flex-none md:px-2 lg:px-4">
                <span
                  className="font-display font-semibold leading-none"
                  style={{
                    fontSize: 'clamp(26px, 3.2vw, 46px)',
                    letterSpacing: '-0.04em',
                    color: 'var(--color-accent, #D4AF60)',
                  }}
                >
                  <CountUp end={stat.end} suffix={stat.suffix} decimals={stat.decimals} duration={2.2} />
                </span>
                <span
                  className="mt-1.5 text-[--color-near-black]/55"
                  style={{
                    fontSize: '10px',
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 600,
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                  }}
                >
                  {stat.label}
                </span>
              </div>
            </div>
          ))}
        </motion.div>

        {/* ── Thin divider ───────────────────────────────────────── */}
        <div className="h-px w-full bg-[--color-near-black]/8 my-8 md:my-10" />

        {/* ── Logos ──────────────────────────────────────────────── */}
        <motion.ul
          className="flex flex-wrap items-center justify-center gap-x-8 gap-y-6 md:gap-x-12"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.65, delay: 0.08, ease: EASE_OUT }}
        >
          {logos.map((logo) => (
            <li
              key={logo.src}
              className="flex items-center justify-center h-10 md:h-12 lg:h-14"
            >
              <Image
                src={logo.src}
                alt={logo.alt}
                width={200}
                height={60}
                className="h-full w-auto object-contain opacity-70 grayscale-[30%] transition-all duration-500 ease-out hover:opacity-100 hover:grayscale-0"
              />
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  )
}
