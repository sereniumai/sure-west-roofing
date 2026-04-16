'use client'

import { motion } from 'framer-motion'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

export function BrandStrip() {
  return (
    <section
      className="bg-white relative overflow-hidden"
      style={{
        paddingTop: 'clamp(100px, 12vw, 160px)',
        paddingBottom: 'clamp(100px, 12vw, 160px)',
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

        {/* Outline display type */}
        <p
          className="font-display font-medium uppercase tracking-[0.05em] mb-10 whitespace-nowrap"
          style={{
            fontSize: 'clamp(32px, 6.5vw, 88px)',
            color: 'transparent',
            WebkitTextStroke: 'clamp(2px, 0.3vw, 4px) #2C4766',
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
