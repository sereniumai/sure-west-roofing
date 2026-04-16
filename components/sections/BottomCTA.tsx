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
        paddingTop: 'calc(var(--section-pad-top) + 16px)',
        paddingBottom: 'calc(var(--section-pad-bot) + 48px)',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      {/* Dark contained card */}
      <motion.div
        className="relative mx-auto overflow-hidden"
        style={{
          maxWidth: '1320px',
          background: '#1A1612',
          borderRadius: '20px',
        }}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
      >
        {/* Ambient gold glow, top-left */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-20 -left-20 w-[500px] h-[400px]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(212,175,96,0.15) 0%, rgba(212,175,96,0) 65%)',
          }}
        />
        {/* Subtle second glow, bottom-right */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-16 -right-16 w-[400px] h-[350px]"
          style={{
            background:
              'radial-gradient(ellipse at center, rgba(212,175,96,0.08) 0%, rgba(212,175,96,0) 65%)',
          }}
        />

        <div className="relative z-10 flex flex-col items-center text-center px-8 md:px-16 lg:px-24 py-16 md:py-20 lg:py-24">
          {/* Heading */}
          <h2
            className="font-display font-semibold text-white leading-[1.02] max-w-[780px]"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 60px)',
              letterSpacing: '-0.045em',
            }}
          >
            Ready for a Roofing Contractor{' '}
            <span style={{ color: 'var(--color-accent, #D4AF60)' }}>
              You Can Actually Trust?
            </span>
          </h2>

          {/* Bullets — horizontal, minimal */}
          <motion.div
            className="mt-8 md:mt-10 flex flex-col sm:flex-row items-center gap-x-8 gap-y-3"
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.15, ease: EASE_OUT }}
          >
            {BULLETS.map((item) => (
              <div key={item} className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
                  style={{ background: 'var(--color-accent, #D4AF60)' }}
                >
                  <Check className="w-3 h-3 text-[#1A1612]" strokeWidth={3} />
                </span>
                <span
                  className="text-white/75"
                  style={{
                    fontSize: '14px',
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </span>
              </div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div
            className="mt-10 md:mt-12"
            initial={{ y: 16, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.55, delay: 0.3, ease: EASE_OUT }}
          >
            <Button variant="primary" size="lg" href="/contact">
              Get a Free Estimate
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
