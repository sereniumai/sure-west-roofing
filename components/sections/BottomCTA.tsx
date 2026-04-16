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
    title: '',
    description: '',
  },
  {
    image: '/images/Roof Repair Cochrane.avif',
    title: '',
    description: '',
  },
  {
    image: '/images/Roof Inspection Cochrane.avif',
    title: '',
    description: '',
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
      {/* Contained card with gold glow */}
      <div className="relative mx-auto" style={{ maxWidth: '1320px' }}>
        {/* Outer gold glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -inset-3 md:-inset-4 rounded-[28px] md:rounded-[36px]"
          style={{
            background:
              'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(212,175,96,0.18) 0%, rgba(212,175,96,0.06) 40%, rgba(212,175,96,0) 70%)',
            filter: 'blur(16px)',
          }}
        />

        {/* Main card */}
        <motion.div
          className="relative rounded-[20px] md:rounded-[24px] overflow-hidden"
          style={{
            background: '#F4F3F0',
            boxShadow:
              '0 0 0 1px rgba(212,175,96,0.12), 0 2px 8px rgba(26,22,18,0.04), 0 20px 60px -20px rgba(26,22,18,0.12)',
          }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease: EASE_OUT }}
        >
          <div className="flex flex-col items-center text-center px-8 md:px-12 lg:px-16 pt-14 md:pt-16 lg:pt-20">
            {/* Heading */}
            <h2
              className="font-display font-semibold text-[--color-near-black] leading-[1.02] max-w-[680px]"
              style={{
                fontSize: 'clamp(30px, 3.8vw, 52px)',
                letterSpacing: '-0.04em',
              }}
            >
              Ready for a Roofing Contractor{' '}
              <span style={{ color: 'var(--color-accent, #D4AF60)' }}>
                You Can Actually Trust?
              </span>
            </h2>

            <p
              className="mt-5 text-[--color-near-black]/60 leading-[1.65] max-w-[480px]"
              style={{
                fontSize: '15px',
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 400,
              }}
            >
              Book your free estimate and see why Cochrane homeowners trust Sure West with their roofs.
            </p>

            {/* Bullets — horizontal row */}
            <motion.div
              className="mt-8 flex flex-col sm:flex-row items-center gap-x-7 gap-y-3"
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.15, ease: EASE_OUT }}
            >
              {BULLETS.map((item) => (
                <div key={item} className="flex items-center gap-2">
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
                      fontSize: '13.5px',
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
              className="mt-9"
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

          {/* Stacked cards — centered below content */}
          <motion.div
            className="flex items-center justify-center pt-10 pb-6 md:pt-12 md:pb-8"
            style={{ minHeight: '260px' }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: 0.25, ease: EASE_OUT }}
          >
            <StackedCardsInteraction
              cards={CTA_CARDS}
              spreadDistance={48}
              rotationAngle={7}
              restSpread={0.5}
              animationDelay={0.06}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
