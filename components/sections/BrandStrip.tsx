'use client'

import { motion } from 'framer-motion'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

export function BrandStrip() {
  return (
    <section
      className="bg-brand-cream"
      style={{
        paddingTop: '64px',
        paddingBottom: '64px',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      <motion.div
        className="max-w-[1200px] mx-auto text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
      >
        <p
          className="font-display font-semibold uppercase tracking-[0.05em] mb-6"
          style={{
            fontSize: 'clamp(48px, 8vw, 96px)',
            color: 'transparent',
            WebkitTextStroke: '3px #2C4766',
            lineHeight: 0.95,
          }}
        >
          Move the Mountain
        </p>
        <p
          className="text-brand-slate max-w-[680px] mx-auto leading-[1.5]"
          style={{
            fontSize: '18px',
            fontFamily: "'Inter', system-ui, sans-serif",
            fontStyle: 'italic',
          }}
        >
          In every shingle laid, we&rsquo;re not just building roofs,we&rsquo;re elevating trust.
        </p>
      </motion.div>
    </section>
  )
}
