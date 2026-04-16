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
    image: '/images/Roof Replacement Cochrane.avif',
    title: 'Roof Replacement',
    description: 'Premium materials, expert installation',
  },
  {
    image: '/images/Roof Repair Cochrane.avif',
    title: 'Roof Repair',
    description: 'Fast response, lasting results',
  },
  {
    image: '/images/Roof Inspection Cochrane.avif',
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
        paddingTop: 'calc(var(--section-pad-top) + 16px)',
        paddingBottom: 'calc(var(--section-pad-bot) + 48px)',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      <div
        className="relative mx-auto grid grid-cols-1 lg:grid-cols-12 items-center gap-10 lg:gap-8"
        style={{ maxWidth: '1320px' }}
      >
        {/* Left — content (5 cols) */}
        <motion.div
          className="lg:col-span-5 flex flex-col items-start text-left"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease: EASE_OUT }}
        >
          <h2
            className="font-display font-semibold text-[--color-near-black] leading-[1.02]"
            style={{
              fontSize: 'clamp(30px, 3.5vw, 48px)',
              letterSpacing: '-0.04em',
            }}
          >
            Ready for a Roofing Contractor{' '}
            <span style={{ color: 'var(--color-accent, #D4AF60)' }}>
              You Can Actually Trust?
            </span>
          </h2>

          <p
            className="mt-5 text-[--color-near-black]/60 leading-[1.65] max-w-[400px]"
            style={{
              fontSize: '15px',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 400,
            }}
          >
            Book your free estimate and see why Cochrane homeowners trust Sure West with their roofs.
          </p>

          <ul className="mt-7 flex flex-col gap-3">
            {BULLETS.map((item) => (
              <li key={item} className="flex items-center gap-2.5">
                <span
                  aria-hidden="true"
                  className="inline-flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
                  style={{ background: 'var(--color-accent, #D4AF60)' }}
                >
                  <Check className="w-3 h-3 text-[#1A1612]" strokeWidth={3} />
                </span>
                <span
                  className="text-[--color-near-black]/75"
                  style={{
                    fontSize: '14px',
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 500,
                  }}
                >
                  {item}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-9">
            <Button variant="primary" size="lg" href="/contact">
              Get a Free Estimate
            </Button>
          </div>
        </motion.div>

        {/* Right — stacked cards (7 cols, centered) */}
        <motion.div
          className="hidden lg:flex lg:col-span-7 items-center justify-center"
          style={{ minHeight: '480px' }}
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.85, delay: 0.15, ease: EASE_OUT }}
        >
          <StackedCardsInteraction
            cards={CTA_CARDS}
            spreadDistance={50}
            rotationAngle={7}
            restSpread={0.5}
            animationDelay={0.06}
          />
        </motion.div>
      </div>
    </section>
  )
}
