'use client'

import Image from 'next/image'
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
      <div
        className="relative mx-auto overflow-hidden"
        style={{ maxWidth: '1320px', borderRadius: '20px' }}
      >
        {/* Full-bleed background image */}
        <div className="absolute inset-0">
          <Image
            src="/images/Roof Replacement Cochrane.avif"
            alt=""
            fill
            sizes="100vw"
            className="object-cover"
            style={{ objectPosition: 'center 40%' }}
            aria-hidden="true"
          />
          {/* Gradient overlay: dark left for text, fades to reveal image on right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                'linear-gradient(105deg, rgba(26,22,18,0.92) 0%, rgba(26,22,18,0.82) 40%, rgba(26,22,18,0.45) 70%, rgba(26,22,18,0.25) 100%)',
            }}
          />
        </div>

        {/* Content — left-aligned over the dark side */}
        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2">
          <div className="flex flex-col items-start text-left px-8 md:px-12 lg:px-16 py-14 md:py-20 lg:py-24">
            <motion.h2
              className="font-display font-semibold text-white leading-[1.02] max-w-[520px]"
              style={{
                fontSize: 'clamp(30px, 3.8vw, 52px)',
                letterSpacing: '-0.04em',
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

            <motion.ul
              className="mt-8 flex flex-col gap-3"
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.25, ease: EASE_OUT }}
            >
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
                    className="text-white/80"
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
            </motion.ul>

            <motion.div
              className="mt-10"
              initial={{ y: 16, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: 0.4, ease: EASE_OUT }}
            >
              <Button variant="primary" size="lg" href="/contact">
                Get a Free Estimate
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
