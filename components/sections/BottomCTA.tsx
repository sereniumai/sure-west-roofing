'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CheckCircle } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { EASE_OUT, VIEWPORT } from '@/lib/animations'

const BULLETS = [
  'Free on-site estimate',
  'Written quote within 24 hours',
  'Red Seal Journeyman on every job',
  'Response within minutes, even after hours',
]

export function BottomCTA() {
  return (
    <section
      id="contact-cta"
      className="relative bg-white overflow-hidden py-12 md:py-16"
      style={{
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
          viewport={VIEWPORT}
          transition={{ duration: 0.75, ease: EASE_OUT }}
        >
          {/* Left — content */}
          <div className="flex flex-col items-start justify-center px-6 sm:px-8 md:px-12 lg:px-14 py-10 sm:py-12 md:py-16 lg:py-20">
            <h2
              className="font-display font-semibold text-[--color-near-black] leading-[1.2]"
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
                  <CheckCircle className="w-5 h-5 text-brand-gold flex-shrink-0" strokeWidth={1.5} />
                  <span
                    className="text-brand-navy"
                    style={{
                      fontSize: '15px',
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
                Get a Free Estimate
              </Button>
              <p
                className="mt-4"
                style={{ fontSize: '14px', fontFamily: "'Inter', system-ui, sans-serif" }}
              >
                <span className="text-brand-slate">Or call us directly: </span>
                <a
                  href="tel:+14039907210"
                  className="text-brand-gold font-semibold hover:underline hover:underline-offset-2 transition-colors"
                >
                  (403) 990-7210
                </a>
              </p>
            </div>
          </div>

          {/* Right — image */}
          <div className="relative h-[200px] sm:h-[240px] lg:h-auto lg:min-h-[400px]">
            <Image
              src="/images/Sure West Roofing in Cochrane.webp"
              alt="Sure West Roofing in Cochrane"
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
