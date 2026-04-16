'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Button } from '@/components/ui/Button'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

const STEPS = [
  {
    number: '01',
    title: 'Book Your Free Estimate',
    description:
      'We come to your property in Cochrane, Calgary or Canmore, assess the roof thoroughly, and provide a clear itemised written quote.',
    image: '/images/Roof Inspection Cochrane.avif',
  },
  {
    number: '02',
    title: 'Approve Your Quote',
    description:
      'Your quote is fixed. The price you approve is the price you pay. We schedule around you.',
    image: '/images/Roof Replacement Cochrane.avif',
  },
  {
    number: '03',
    title: 'Your Roof Done Right',
    description:
      'Work completed to Red Seal standard. Your property left clean. Your 10-year workmanship guarantee in writing before we leave.',
    image: '/images/Roof Repair Cochrane.avif',
  },
]

function StepRow({ step, index, reversed }: { step: typeof STEPS[0]; index: number; reversed: boolean }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <motion.div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-16 ${
        index > 0 ? 'mt-16 md:mt-24' : ''
      }`}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5, ease: EASE_OUT }}
    >
      {/* Image side */}
      <motion.div
        className={`relative ${reversed ? 'lg:order-2' : 'lg:order-1'}`}
        initial={{ x: reversed ? 60 : -60, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: reversed ? 60 : -60, opacity: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: EASE_OUT }}
      >
        <div className="relative aspect-[4/3] rounded-[16px] overflow-hidden">
          <Image
            src={step.image}
            alt={step.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {/* Subtle vignette */}
          <div
            aria-hidden="true"
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.15) 100%)',
            }}
          />
        </div>

        {/* Giant number watermark behind the image */}
        <motion.span
          aria-hidden="true"
          className={`pointer-events-none absolute -bottom-8 md:-bottom-12 font-display font-semibold leading-none select-none ${
            reversed ? '-left-4 md:-left-8' : '-right-4 md:-right-8'
          }`}
          style={{
            fontSize: 'clamp(100px, 14vw, 180px)',
            letterSpacing: '-0.06em',
            color: 'transparent',
            WebkitTextStroke: '1.5px rgba(212,175,96,0.25)',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.3, ease: EASE_OUT }}
        >
          {step.number}
        </motion.span>
      </motion.div>

      {/* Content side */}
      <motion.div
        className={`flex flex-col ${reversed ? 'lg:order-1 lg:items-end lg:text-right' : 'lg:order-2'}`}
        initial={{ x: reversed ? -40 : 40, opacity: 0 }}
        animate={inView ? { x: 0, opacity: 1 } : { x: reversed ? -40 : 40, opacity: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: EASE_OUT }}
      >
        {/* Step label */}
        <span
          className="font-body font-semibold uppercase tracking-[0.16em] mb-3"
          style={{ fontSize: '12px', color: 'var(--color-accent, #D4AF60)' }}
        >
          Step {step.number}
        </span>

        <h3
          className="font-display font-semibold text-[--color-near-black] leading-[1.1]"
          style={{
            fontSize: 'clamp(26px, 2.4vw, 38px)',
            letterSpacing: '-0.03em',
          }}
        >
          {step.title}
        </h3>

        {/* Gold rule */}
        <motion.span
          aria-hidden="true"
          className={`block h-[2px] rounded-full mt-5 mb-5 ${reversed ? 'origin-right' : 'origin-left'}`}
          style={{ background: 'var(--color-accent, #D4AF60)', width: '40px' }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: EASE_OUT }}
        />

        <p
          className={`text-[--color-near-black]/65 leading-[1.7] ${reversed ? 'max-w-[420px] ml-auto' : 'max-w-[420px]'}`}
          style={{
            fontSize: '15.5px',
            fontFamily: "'Inter', system-ui, sans-serif",
            fontWeight: 400,
          }}
        >
          {step.description}
        </p>
      </motion.div>
    </motion.div>
  )
}

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
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

      {/* ── Steps — alternating image/text rows ──────────────────── */}
      <div className="max-w-[1200px] mx-auto">
        {STEPS.map((step, i) => (
          <StepRow key={step.number} step={step} index={i} reversed={i % 2 === 1} />
        ))}
      </div>
    </section>
  )
}
