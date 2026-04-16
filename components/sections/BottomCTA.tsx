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
      className="relative bg-brand-cream overflow-hidden"
      style={{
        paddingTop: 'calc(var(--section-pad-top) + 16px)',
        paddingBottom: 'calc(var(--section-pad-bot) + 48px)',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
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
          className="relative rounded-[20px] md:rounded-[24px] overflow-hidden grid grid-cols-1 lg:grid-cols-2"
          style={{
            background: '#FFFFFF',
            boxShadow:
              '0 0 0 1px rgba(212,175,96,0.12), 0 2px 8px rgba(26,22,18,0.04), 0 20px 60px -20px rgba(26,22,18,0.12)',
          }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.75, ease: EASE_OUT }}
        >
          {/* Left — content */}
          <div className="flex flex-col items-start justify-center px-6 sm:px-8 md:px-12 lg:px-14 py-10 sm:py-12 md:py-16 lg:py-20">
            <h2
              className="font-display font-semibold text-[--color-near-black] leading-[1.02]"
              style={{
                fontSize: 'clamp(28px, 3.2vw, 44px)',
                letterSpacing: '-0.04em',
              }}
            >
              Ready for a Roofing Contractor{' '}
              <span style={{ color: 'var(--color-accent, #D4AF60)' }}>
                You Can Actually Trust?
              </span>
            </h2>

            <p
              className="mt-4 text-brand-slate leading-[1.65] max-w-[420px]"
              style={{
                fontSize: '15px',
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 400,
              }}
            >
              Book your free estimate and see why Cochrane homeowners trust Sure West with their roofs.
            </p>

            <ul className="mt-6 flex flex-col gap-2.5">
              {BULLETS.map((item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <span
                    aria-hidden="true"
                    className="inline-flex items-center justify-center w-5 h-5 rounded-full flex-shrink-0"
                    style={{ background: 'var(--color-accent, #D4AF60)' }}
                  >
                    <Check className="w-3 h-3 text-brand-navy" strokeWidth={3} />
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

            <div className="mt-8">
              <Button variant="primary" size="lg" href="/contact">
                Get a Free Estimate
              </Button>
            </div>
          </div>

          {/* Right — image */}
          <div className="relative h-[200px] sm:h-[240px] lg:h-auto lg:min-h-[400px]">
            <Image
              src="/images/Roof Replacement Cochrane.avif"
              alt="Roofing contractor working in Cochrane"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              style={{ objectPosition: 'center 30%' }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
