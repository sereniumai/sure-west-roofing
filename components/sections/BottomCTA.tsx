'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

const BULLETS = [
  'Free on-site estimate',
  'Written quote within 24 hours',
  'Red Seal Journeyman on every job',
]

export function BottomCTA() {
  return (
    <section
      id="contact-cta"
      className="relative bg-white overflow-hidden"
      style={{
        paddingTop: 'var(--section-pad-top)',
        paddingBottom: 'var(--section-pad-bot)',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      <div
        className="relative mx-auto flex flex-col items-center text-center"
        style={{ maxWidth: '1320px' }}
      >
        {/* Heading */}
        <motion.h2
          className="font-display font-semibold text-[--color-near-black] leading-[1.05] max-w-[900px]"
          style={{
            fontSize: 'clamp(32px, 4.4vw, 60px)',
            letterSpacing: '-0.04em',
          }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          Ready for a Roofing Contractor
          <br className="hidden md:block" />{' '}
          <span style={{ color: 'var(--color-accent, #D4AF60)' }}>
            You Can Actually Trust?
          </span>
        </motion.h2>

        {/* Bullet chips */}
        <motion.ul
          className="mt-10 md:mt-12 flex flex-col md:flex-row flex-wrap items-center justify-center gap-3 md:gap-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.15, ease: EASE_OUT }}
        >
          {BULLETS.map((item) => (
            <li
              key={item}
              className="inline-flex items-center gap-2.5 rounded-full pl-2 pr-5 py-2"
              style={{
                background: 'rgba(26,22,18,0.03)',
                border: '1px solid rgba(26,22,18,0.1)',
              }}
            >
              <span
                aria-hidden="true"
                className="inline-flex items-center justify-center w-6 h-6 rounded-full"
                style={{ background: 'var(--color-accent, #D4AF60)' }}
              >
                <Check className="w-[14px] h-[14px] text-[#1A1612]" strokeWidth={2.75} />
              </span>
              <span
                className="text-[--color-near-black]/80"
                style={{
                  fontSize: '14px',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 500,
                  letterSpacing: '0.01em',
                }}
              >
                {item}
              </span>
            </li>
          ))}
        </motion.ul>

        {/* CTA buttons */}
        <motion.div
          className="mt-10 md:mt-12 flex flex-col sm:flex-row items-center gap-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.3, ease: EASE_OUT }}
        >
          <Button variant="primary" size="lg" href="/contact">
            Get a Free Estimate
          </Button>
          <Button variant="outline" size="lg" href="/services">
            Explore Our Services
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
