'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

interface Step {
  number: string
  title: string
  description: string
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Step 1 - Book Your Free Estimate',
    description:
      'We come to your property in Cochrane, Calgary or Canmore, assess the roof thoroughly, and provide a clear itemised written quote. No charge. No obligation. No sales pressure.',
  },
  {
    number: '02',
    title: 'Step 2 - Approve Your Quote',
    description:
      'Your quote is fixed. The price you approve is the price you pay. Our Red Seal Journeyman certified crew then schedules your job around you.',
  },
  {
    number: '03',
    title: 'Step 3 - Your Roof Done Right',
    description:
      'Work completed to Red Seal standard. Your property left clean. Your 10-year workmanship guarantee in writing before we leave.',
  },
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const inView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative bg-white overflow-hidden"
      style={{
        paddingTop: 'var(--section-pad-top)',
        paddingBottom: 'var(--section-pad-bot)',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      {/* ── Header ───────────────────────────────────────────────── */}
      <motion.div
        className="relative flex flex-col items-center text-center mb-14 md:mb-20 max-w-[920px] mx-auto"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: EASE_OUT }}
      >
        <span
          className="inline-flex items-center h-8 md:h-9 px-3 md:px-4 text-[13px] md:text-[14px] font-body font-bold uppercase tracking-[0.12em] rounded-[--radius-sm] mb-6"
          style={{ background: 'rgba(0,0,0,0.04)', color: 'var(--color-accent, #D4AF60)' }}
        >
          How It Works
        </span>
        <h2
          className="font-display font-semibold leading-[1.05] max-w-[900px] text-[--color-near-black]"
          style={{
            fontSize: 'clamp(30px, 3.8vw, 52px)',
            letterSpacing: '-0.04em',
          }}
        >
          From Free Estimate to Finished
          <br className="hidden md:block" /> Roof in Three Steps
        </h2>
        <p
          className="mt-7 max-w-[640px] text-[--color-near-black]/70 leading-[1.7]"
          style={{
            fontSize: '16px',
            fontFamily: "'Inter', system-ui, sans-serif",
            fontWeight: 400,
          }}
        >
          No surprises. No pressure. Just a clear simple process from your first call to the final inspection.
        </p>
      </motion.div>

      {/* ── Steps ────────────────────────────────────────────────── */}
      <div className="relative max-w-[1200px] mx-auto">
        {/* Connecting line across the three step numbers (desktop only) */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute left-[16.6%] right-[16.6%] h-px bg-[--color-near-black]/10"
          style={{ top: '42px' }}
        >
          <motion.div
            className="h-full origin-left"
            style={{ background: 'var(--color-accent, #D4AF60)' }}
            initial={{ scaleX: 0 }}
            animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: EASE_OUT }}
          />
        </div>

        <ol className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10">
          {STEPS.map((step, i) => (
            <motion.li
              key={step.number}
              className="relative flex flex-col items-center text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.55, delay: 0.1 + i * 0.12, ease: EASE_OUT }}
            >
              {/* Step number badge */}
              <span
                aria-hidden="true"
                className="relative z-10 inline-flex items-center justify-center w-[84px] h-[84px] rounded-full bg-white mb-7"
                style={{
                  boxShadow:
                    '0 0 0 1px rgba(212,175,96,0.35), 0 10px 24px -12px rgba(184,148,63,0.3)',
                }}
              >
                <span
                  className="inline-flex items-center justify-center w-[64px] h-[64px] rounded-full font-display font-semibold tabular-nums text-[--color-near-black]"
                  style={{
                    background: 'var(--color-accent, #D4AF60)',
                    fontSize: '22px',
                    letterSpacing: '0.02em',
                    boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.25)',
                  }}
                >
                  {step.number}
                </span>
              </span>

              <h3
                className="font-display font-semibold text-[--color-near-black] leading-[1.2]"
                style={{
                  fontSize: 'clamp(18px, 1.35vw, 21px)',
                  letterSpacing: '-0.02em',
                }}
              >
                {step.title}
              </h3>

              <p
                className="mt-3 max-w-[340px] text-[--color-near-black]/65 leading-[1.65]"
                style={{
                  fontSize: '14.5px',
                  fontFamily: "'Inter', system-ui, sans-serif",
                  fontWeight: 400,
                }}
              >
                {step.description}
              </p>
            </motion.li>
          ))}
        </ol>
      </div>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <motion.div
        className="flex justify-center mt-14 md:mt-20"
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-60px' }}
        transition={{ duration: 0.55, delay: 0.2, ease: EASE_OUT }}
      >
        <Button variant="primary" size="lg" href="/contact">
          Get a Free Estimate
        </Button>
      </motion.div>
    </section>
  )
}
