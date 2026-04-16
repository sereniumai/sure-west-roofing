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
    let start = 0
    const startTime = performance.now()
    const step = (now: number) => {
      const elapsed = Math.min((now - startTime) / (duration * 1000), 1)
      const ease = 1 - Math.pow(1 - elapsed, 3) // ease-out cubic
      const current = start + (end - start) * ease
      setValue(current)
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

export function TrustLogos() {
  return (
    <section
      className="relative bg-white overflow-hidden"
      style={{
        paddingTop: '56px',
        paddingBottom: '32px',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
      aria-label="Certifications and industry accreditations"
    >
      {/* Paper-grain warm wash — same recipe used in the Hero and Portfolio.
          Anchors the logo row so it doesn't read as a floating island. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          background:
            'radial-gradient(1100px 500px at 50% 30%, rgba(212,175,96,0.10), transparent 65%), radial-gradient(800px 400px at 80% 80%, rgba(26,22,18,0.04), transparent 60%)',
        }}
      />

      <div className="relative max-w-[1320px] mx-auto">
        {/* ── Stats row ──────────────────────────────────────────────── */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 mb-12 md:mb-16 border border-[--color-near-black]/8 rounded-[--radius-md] overflow-hidden"
          style={{
            boxShadow: '0 1px 3px rgba(26,22,18,0.04), 0 8px 24px -14px rgba(26,22,18,0.08)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          {[
            { end: 250, suffix: '+', decimals: 0, label: 'Roofs Completed' },
            { end: 20, suffix: '+', decimals: 0, label: 'Years Experience' },
            { end: 5, suffix: '.0', decimals: 0, label: 'Google Rating' },
            { end: 10, suffix: ' Yr', decimals: 0, label: 'Workmanship Guarantee' },
          ].map((stat, i) => (
            <div
              key={stat.label}
              className="relative flex flex-col items-center text-center py-8 md:py-10 bg-white"
            >
              {/* Vertical divider (not on first item per row) */}
              {i > 0 && (
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[20%] bottom-[20%] w-px bg-[--color-near-black]/8 hidden md:block"
                />
              )}
              {/* Mobile: second column divider */}
              {i % 2 === 1 && (
                <span
                  aria-hidden="true"
                  className="absolute left-0 top-[20%] bottom-[20%] w-px bg-[--color-near-black]/8 md:hidden"
                />
              )}
              {/* Horizontal divider for mobile bottom row */}
              {i >= 2 && (
                <span
                  aria-hidden="true"
                  className="absolute top-0 left-[10%] right-[10%] h-px bg-[--color-near-black]/8 md:hidden"
                />
              )}
              <span
                className="font-display font-semibold leading-none"
                style={{
                  fontSize: 'clamp(32px, 3.8vw, 52px)',
                  letterSpacing: '-0.04em',
                  color: 'var(--color-accent, #D4AF60)',
                }}
              >
                <CountUp end={stat.end} suffix={stat.suffix} decimals={stat.decimals} duration={2.2} />
              </span>
              <span
                className="mt-2.5 text-[--color-near-black]/60"
                style={{
                  fontSize: '12px',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 600,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                }}
              >
                {stat.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* ── Header: eyebrow ────────────────────────────────────────── */}
        <motion.div
          className="flex flex-col items-center text-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        >
          <span
            className="inline-flex items-center h-8 md:h-9 px-3 md:px-4 text-[13px] md:text-[14px] font-body font-bold uppercase tracking-[0.12em] rounded-[--radius-sm]"
            style={{ background: 'rgba(0,0,0,0.04)', color: 'var(--color-accent, #D4AF60)' }}
          >
            Our Associations
          </span>
        </motion.div>

        {/* ── Logo row, framed by editorial hairlines ──────────────── */}
        <motion.div
          className="relative mt-5 md:mt-7"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.75, delay: 0.1, ease: EASE_OUT }}
        >
          {/* Top hairline */}
          <div className="h-px w-full bg-[--color-near-black]/10" />

          <ul className="flex flex-wrap items-center justify-center gap-x-10 gap-y-8 md:gap-x-14 pt-7 pb-6 md:pt-9 md:pb-7">
            {logos.map((logo) => (
              <li
                key={logo.src}
                className="flex items-center justify-center h-14 md:h-16 lg:h-20"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={260}
                  height={80}
                  className="h-full w-auto object-contain opacity-85 transition-all duration-500 ease-out hover:opacity-100 hover:-translate-y-0.5 hover:scale-[1.04]"
                />
              </li>
            ))}
          </ul>

          {/* Bottom hairline */}
          <div className="h-px w-full bg-[--color-near-black]/10" />
        </motion.div>
      </div>
    </section>
  )
}
