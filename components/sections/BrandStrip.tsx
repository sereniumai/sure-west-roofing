'use client'

import { motion } from 'framer-motion'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

export function BrandStrip() {
  return (
    <section
      className="bg-brand-cream relative overflow-hidden"
      style={{
        paddingTop: 'clamp(100px, 12vw, 160px)',
        paddingBottom: 'clamp(100px, 12vw, 160px)',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      {/* Mountain silhouette background */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-auto"
        viewBox="0 0 1200 400"
        fill="none"
        style={{ opacity: 0.06, zIndex: 0 }}
      >
        <path d="M0 400 L200 120 L350 260 L500 60 L650 220 L800 100 L950 240 L1100 80 L1200 400 Z" fill="#2C4766" />
        <path d="M0 400 L150 200 L300 300 L480 140 L600 280 L750 160 L900 280 L1050 180 L1200 400 Z" fill="#2C4766" opacity="0.5" />
      </svg>

      <motion.div
        className="max-w-[1200px] mx-auto text-center relative"
        style={{ zIndex: 1 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
      >
        {/* Pre-title pill */}
        <span
          className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-12 text-brand-gold"
          style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 600, lineHeight: 1 }}
        >
          Our Philosophy
        </span>

        {/* Outline display type */}
        <p
          className="font-display font-medium uppercase tracking-[0.05em] mb-10"
          style={{
            fontSize: 'clamp(72px, 10vw, 140px)',
            color: 'transparent',
            WebkitTextStroke: 'clamp(3px, 0.4vw, 4px) #2C4766',
            lineHeight: 1,
          }}
        >
          Move the Mountain
        </p>

        {/* Tagline */}
        <p
          className="text-brand-navy max-w-[720px] mx-auto leading-[1.5] mb-8"
          style={{
            fontSize: 'clamp(16px, 1.5vw, 20px)',
            fontFamily: "'Inter', system-ui, sans-serif",
            fontStyle: 'italic',
            fontWeight: 400,
          }}
        >
          In every shingle laid, we&rsquo;re not just building roofs, we&rsquo;re elevating trust.
        </p>

        {/* Gold signature line */}
        <div
          className="mx-auto"
          style={{ width: '48px', height: '2px', background: '#D4AF60' }}
        />
      </motion.div>
    </section>
  )
}
