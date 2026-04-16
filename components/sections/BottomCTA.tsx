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
        paddingTop: 'calc(var(--section-pad-top) + 24px)',
        paddingBottom: 'calc(var(--section-pad-bot) + 56px)',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      <div
        className="relative mx-auto flex flex-col items-center text-center"
        style={{ maxWidth: '1100px' }}
      >
        {/* Tiny gold eyebrow rule */}
        <motion.span
          aria-hidden="true"
          className="block h-[2px] rounded-full mb-7"
          style={{ background: 'var(--color-accent, #D4AF60)', width: '48px' }}
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: EASE_OUT }}
        />

        {/* Heading */}
        <motion.h2
          className="font-display font-semibold text-[--color-near-black] leading-[1.02] max-w-[980px]"
          style={{
            fontSize: 'clamp(36px, 5.2vw, 72px)',
            letterSpacing: '-0.045em',
          }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, delay: 0.1, ease: EASE_OUT }}
        >
          Ready for a Roofing Contractor
          <br className="hidden md:block" />{' '}
          <span
            className="relative inline-block"
            style={{ color: 'var(--color-accent, #D4AF60)' }}
          >
            You Can Actually Trust?
          </span>
        </motion.h2>

        {/* Bullet chips */}
        <motion.ul
          className="mt-12 md:mt-14 flex flex-col md:flex-row flex-wrap items-center justify-center gap-3 md:gap-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.25, ease: EASE_OUT }}
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
                className="text-[--color-near-black]/85"
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

        {/* Single primary CTA with a soft gold halo */}
        <motion.div
          className="relative mt-12 md:mt-14"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.4, ease: EASE_OUT }}
        >
          {/* Ambient halo behind the button for a premium glow */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[260px] h-[180px] rounded-full blur-2xl"
            style={{
              background:
                'radial-gradient(closest-side, rgba(212,175,96,0.28), rgba(212,175,96,0) 75%)',
            }}
          />
          <Button variant="primary" size="lg" href="/contact">
            Get a Free Estimate
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
