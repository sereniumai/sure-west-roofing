'use client'

import { motion } from 'framer-motion'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

export function BrandStrip() {
  return (
    <section
      className="bg-white relative overflow-hidden py-20 md:py-24"
      style={{
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
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

        {/* Display heading */}
        <h2
          className="font-display font-bold text-brand-navy tracking-[-0.01em] mb-10 whitespace-nowrap"
          style={{
            fontSize: 'clamp(48px, 9vw, 128px)',
            lineHeight: 1,
          }}
        >
          Move the Mountain
        </h2>

        {/* Tagline with decorative gold quotes */}
        <div className="relative max-w-[720px] mx-auto">
          <span
            aria-hidden="true"
            className="absolute font-display text-brand-gold select-none leading-none"
            style={{
              fontSize: 'clamp(56px, 6vw, 88px)',
              top: '-0.25em',
              left: '-0.15em',
            }}
          >
            &ldquo;
          </span>
          <p
            className="text-brand-navy leading-[1.5] px-6 md:px-10"
            style={{
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontStyle: 'italic',
              fontWeight: 400,
            }}
          >
            In every shingle laid, we&rsquo;re not just building roofs, we&rsquo;re elevating trust.
          </p>
          <span
            aria-hidden="true"
            className="absolute font-display text-brand-gold select-none leading-none"
            style={{
              fontSize: 'clamp(56px, 6vw, 88px)',
              bottom: '-0.55em',
              right: '-0.15em',
            }}
          >
            &rdquo;
          </span>
        </div>
      </motion.div>
    </section>
  )
}
