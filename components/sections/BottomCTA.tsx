'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { StackedCardsInteraction } from '@/components/ui/stacked-cards-interaction'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

const BULLETS = [
  'Free on-site estimate',
  'Written quote within 24 hours',
  'Red Seal Journeyman on every job',
]

const CTA_CARDS = [
  {
    image: '/images/Cochrane Roofing Contractor Gallery 1.webp',
    title: 'Roof Replacement',
    description: 'Premium materials, expert installation',
  },
  {
    image: '/images/Cochrane Roofing Contractor Gallery 3.webp',
    title: 'Hail Damage Repair',
    description: 'Fast response, insurance handled',
  },
  {
    image: '/images/Cochrane Roofing Contractor Gallery 5.webp',
    title: 'Roof Inspection',
    description: 'Red Seal certified assessments',
  },
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
      {/* Gray rounded container */}
      <div
        className="relative mx-auto rounded-[20px] md:rounded-[28px] overflow-hidden"
        style={{
          maxWidth: '1320px',
          background: '#F4F3F0',
        }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-12 p-8 md:p-12 lg:p-16">
          {/* Left - content */}
          <div className="flex flex-col items-start text-left">
            {/* Gold eyebrow rule */}
            <motion.span
              aria-hidden="true"
              className="block h-[2px] rounded-full mb-7"
              style={{ background: 'var(--color-accent, #D4AF60)', width: '48px' }}
              initial={{ scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: EASE_OUT }}
            />

            <motion.h2
              className="font-display font-semibold text-[--color-near-black] leading-[1.02]"
              style={{
                fontSize: 'clamp(32px, 4vw, 56px)',
                letterSpacing: '-0.045em',
              }}
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.75, delay: 0.1, ease: EASE_OUT }}
            >
              Ready for a Roofing Contractor{' '}
              <span style={{ color: 'var(--color-accent, #D4AF60)' }}>
                You Can Actually Trust?
              </span>
            </motion.h2>

            {/* Bullet chips */}
            <motion.ul
              className="mt-8 flex flex-col gap-3"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.25, ease: EASE_OUT }}
            >
              {BULLETS.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2.5 rounded-full pl-2 pr-5 py-2 w-fit"
                  style={{
                    background: 'rgba(255,255,255,0.7)',
                    border: '1px solid rgba(26,22,18,0.08)',
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

            {/* Primary CTA */}
            <motion.div
              className="relative mt-8"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.4, ease: EASE_OUT }}
            >
              <Button variant="primary" size="lg" href="/contact">
                Get a Free Estimate
              </Button>
            </motion.div>
          </div>

          {/* Right - stacked cards */}
          <motion.div
            className="hidden lg:flex items-center justify-center min-h-[460px]"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT }}
          >
            <StackedCardsInteraction
              cards={CTA_CARDS}
              spreadDistance={42}
              rotationAngle={7}
              restSpread={0.5}
              animationDelay={0.06}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
