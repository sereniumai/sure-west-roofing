'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'
import { EASE_OUT, VIEWPORT } from '@/lib/animations'

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
        viewport={VIEWPORT}
        transition={{ duration: 0.7, ease: EASE_OUT }}
      >
        {/* Pre-title pill */}
        <span
          className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-12 text-brand-gold"
          style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: "var(--font-inter), system-ui, sans-serif", fontWeight: 600, lineHeight: 1 }}
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

        {/* Tagline with soft decorative gold quote icons */}
        <div className="relative max-w-[520px] mx-auto">
          <Quote
            aria-hidden="true"
            className="hidden md:block absolute text-brand-gold opacity-30"
            style={{
              width: 'clamp(40px, 4vw, 56px)',
              height: 'clamp(40px, 4vw, 56px)',
              top: '-0.5em',
              left: '-0.2em',
            }}
            strokeWidth={1.5}
          />
          <p
            className="text-brand-navy leading-[1.5] relative z-10 px-4 md:px-8"
            style={{
              fontSize: 'clamp(16px, 1.5vw, 20px)',
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontStyle: 'italic',
              fontWeight: 400,
            }}
          >
            In every shingle laid, we&rsquo;re not just building roofs, we&rsquo;re elevating trust.
          </p>
          <Quote
            aria-hidden="true"
            className="hidden md:block absolute text-brand-gold opacity-30 rotate-180"
            style={{
              width: 'clamp(40px, 4vw, 56px)',
              height: 'clamp(40px, 4vw, 56px)',
              bottom: '-0.5em',
              right: '-0.2em',
            }}
            strokeWidth={1.5}
          />
        </div>
      </motion.div>
    </section>
  )
}
