'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ClipboardList, FileCheck2, ShieldCheck, type LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

interface Step {
  number: string
  title: string
  description: string
  Icon: LucideIcon
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Step 1 - Book Your Free Estimate',
    description:
      'We come to your property in Cochrane, Calgary or Canmore, assess the roof thoroughly, and provide a clear itemised written quote.',
    Icon: ClipboardList,
  },
  {
    number: '02',
    title: 'Step 2 - Approve Your Quote',
    description:
      'Your quote is fixed. The price you approve is the price you pay. We schedule around you.',
    Icon: FileCheck2,
  },
  {
    number: '03',
    title: 'Step 3 - Your Roof Done Right',
    description:
      'Work completed to Red Seal standard. Your property left clean. Your 10-year workmanship guarantee in writing before we leave.',
    Icon: ShieldCheck,
  },
]

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const stepsRef = useRef<HTMLDivElement>(null)
  const stepsInView = useInView(stepsRef, { once: true, margin: '-80px' })

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
      {/* Ambient gold glow backdrop */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-[520px] opacity-50"
        style={{
          background:
            'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(212,175,96,0.12) 0%, rgba(212,175,96,0) 70%)',
        }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.55 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.2, ease: EASE_OUT }}
      />

      {/* ── Header ───────────────────────────────────────────────── */}
      <motion.div
        className="relative flex flex-col items-center text-center mb-10 md:mb-14 max-w-[920px] mx-auto"
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

        {/* CTA directly under the sub-copy */}
        <motion.div
          className="mt-8"
          initial={{ y: 16, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.55, delay: 0.25, ease: EASE_OUT }}
        >
          <Button variant="primary" size="lg" href="/contact">
            Get a Free Estimate
          </Button>
        </motion.div>
      </motion.div>

      {/* ── Steps ────────────────────────────────────────────────── */}
      <div ref={stepsRef} className="relative max-w-[1200px] mx-auto pt-8 md:pt-10">
        {/* Connecting line across the three step numbers (desktop only) */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute left-[16.6%] right-[16.6%] h-px overflow-hidden"
          style={{ top: 'calc(2rem + 42px)' }}
        >
          <span className="absolute inset-0 bg-[--color-near-black]/10" />
          <motion.span
            className="absolute inset-0 origin-left"
            style={{
              background:
                'linear-gradient(to right, rgba(212,175,96,0) 0%, rgba(212,175,96,1) 12%, rgba(212,175,96,1) 88%, rgba(212,175,96,0) 100%)',
            }}
            initial={{ scaleX: 0 }}
            animate={stepsInView ? { scaleX: 1 } : { scaleX: 0 }}
            transition={{ duration: 1.4, delay: 0.35, ease: EASE_OUT }}
          />
        </div>

        <ol className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {STEPS.map((step, i) => {
            const Icon = step.Icon
            return (
              <motion.li
                key={step.number}
                className="group relative flex flex-col items-center text-center"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.18, ease: EASE_OUT }}
              >
                {/* Icon + step badge stack */}
                <div className="relative mb-8">
                  {/* Ghost outer ring */}
                  <motion.span
                    aria-hidden="true"
                    className="absolute inset-0 rounded-full"
                    style={{
                      background:
                        'radial-gradient(closest-side, rgba(212,175,96,0.22), rgba(212,175,96,0) 70%)',
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={stepsInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.8, delay: 0.5 + i * 0.18, ease: EASE_OUT }}
                  />

                  {/* Main gold badge */}
                  <motion.span
                    className="relative z-10 flex items-center justify-center w-[88px] h-[88px] rounded-full bg-white"
                    style={{
                      boxShadow:
                        '0 0 0 1px rgba(212,175,96,0.4), 0 14px 28px -14px rgba(184,148,63,0.45)',
                    }}
                    initial={{ scale: 0.6, opacity: 0 }}
                    animate={stepsInView ? { scale: 1, opacity: 1 } : { scale: 0.6, opacity: 0 }}
                    transition={{
                      type: 'spring',
                      stiffness: 280,
                      damping: 22,
                      delay: 0.4 + i * 0.18,
                    }}
                  >
                    <span
                      className="relative flex items-center justify-center w-[66px] h-[66px] rounded-full transition-transform duration-500 ease-out group-hover:scale-[1.06]"
                      style={{
                        background: 'var(--color-accent, #D4AF60)',
                        boxShadow:
                          'inset 0 0 0 1px rgba(255,255,255,0.3), inset 0 -6px 12px rgba(0,0,0,0.08)',
                      }}
                    >
                      <Icon
                        className="w-[26px] h-[26px] text-[--color-near-black]"
                        strokeWidth={1.9}
                      />
                    </span>

                    {/* Tiny numeric chip, top-right */}
                    <span
                      aria-hidden="true"
                      className="absolute -top-1 -right-1 z-20 inline-flex items-center justify-center w-7 h-7 rounded-full bg-[--color-near-black] text-[--color-accent,#D4AF60] font-display font-semibold tabular-nums"
                      style={{
                        fontSize: '10.5px',
                        letterSpacing: '0.08em',
                        boxShadow:
                          '0 4px 10px -4px rgba(0,0,0,0.4), inset 0 0 0 1px rgba(212,175,96,0.35)',
                      }}
                    >
                      {step.number}
                    </span>
                  </motion.span>
                </div>

                <h3
                  className="font-display font-semibold text-[--color-near-black] leading-[1.2]"
                  style={{
                    fontSize: 'clamp(18px, 1.35vw, 21px)',
                    letterSpacing: '-0.02em',
                  }}
                >
                  {step.title}
                </h3>

                {/* Gold accent rule under title */}
                <motion.span
                  aria-hidden="true"
                  className="block h-[2px] rounded-full mt-3 origin-center"
                  style={{ background: 'var(--color-accent, #D4AF60)', width: '28px' }}
                  initial={{ scaleX: 0, opacity: 0 }}
                  animate={stepsInView ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 + i * 0.18, ease: EASE_OUT }}
                />

                <p
                  className="mt-4 max-w-[340px] text-[--color-near-black]/65 leading-[1.65]"
                  style={{
                    fontSize: '14.5px',
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {step.description}
                </p>
              </motion.li>
            )
          })}
        </ol>
      </div>
    </section>
  )
}
