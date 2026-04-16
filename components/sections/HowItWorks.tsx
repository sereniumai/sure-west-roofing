'use client'

import { useRef } from 'react'
import { motion, useInView, useScroll, useTransform } from 'framer-motion'
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
    title: 'Book Your Free Estimate',
    description:
      'We come to your property in Cochrane, Calgary or Canmore, assess the roof thoroughly, and provide a clear itemised written quote.',
    Icon: ClipboardList,
  },
  {
    number: '02',
    title: 'Approve Your Quote',
    description:
      'Your quote is fixed. The price you approve is the price you pay. We schedule around you.',
    Icon: FileCheck2,
  },
  {
    number: '03',
    title: 'Your Roof Done Right',
    description:
      'Work completed to Red Seal standard. Your property left clean. Your 10-year workmanship guarantee in writing before we leave.',
    Icon: ShieldCheck,
  },
]

function StepCard({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })
  const Icon = step.Icon

  return (
    <motion.div
      ref={ref}
      className="group relative flex flex-col overflow-hidden rounded-[16px] md:rounded-[20px]"
      style={{ background: '#1A1612' }}
      initial={{ y: 60, opacity: 0, scale: 0.95 }}
      animate={inView ? { y: 0, opacity: 1, scale: 1 } : { y: 60, opacity: 0, scale: 0.95 }}
      transition={{
        duration: 0.8,
        delay: 0.15 + index * 0.15,
        ease: EASE_OUT,
      }}
    >
      {/* Ambient gold glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -right-12 w-[200px] h-[200px]"
        style={{
          background:
            'radial-gradient(circle at center, rgba(212,175,96,0.18) 0%, rgba(212,175,96,0) 65%)',
        }}
      />

      {/* Giant watermark number */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-4 -right-2 font-display font-semibold leading-none select-none"
        style={{
          fontSize: 'clamp(120px, 14vw, 180px)',
          letterSpacing: '-0.06em',
          color: 'transparent',
          WebkitTextStroke: '1.5px rgba(212,175,96,0.18)',
        }}
      >
        {step.number}
      </span>

      <div className="relative z-10 flex flex-col flex-1 p-7 md:p-9 lg:p-10">
        {/* Icon */}
        <motion.span
          className="inline-flex items-center justify-center w-12 h-12 rounded-full mb-6"
          style={{
            background: 'var(--color-accent, #D4AF60)',
            boxShadow: '0 8px 20px -8px rgba(184,148,63,0.6)',
          }}
          initial={{ scale: 0, rotate: -20 }}
          animate={inView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: -20 }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 20,
            delay: 0.4 + index * 0.15,
          }}
        >
          <Icon className="w-[22px] h-[22px] text-[#1A1612]" strokeWidth={1.9} />
        </motion.span>

        {/* Step label */}
        <span
          className="font-body font-semibold uppercase tracking-[0.14em] text-[#D4AF60] mb-3"
          style={{ fontSize: '11px' }}
        >
          Step {step.number}
        </span>

        <h3
          className="font-display font-semibold text-white leading-[1.15]"
          style={{
            fontSize: 'clamp(22px, 1.8vw, 28px)',
            letterSpacing: '-0.025em',
          }}
        >
          {step.title}
        </h3>

        {/* Gold accent bar */}
        <motion.span
          aria-hidden="true"
          className="block h-[2px] rounded-full mt-4 mb-4 origin-left"
          style={{ background: 'var(--color-accent, #D4AF60)', width: '32px' }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.6, delay: 0.6 + index * 0.15, ease: EASE_OUT }}
        />

        <p
          className="text-white/65 leading-[1.65] flex-1"
          style={{
            fontSize: '14.5px',
            fontFamily: "'Inter', system-ui, sans-serif",
            fontWeight: 400,
          }}
        >
          {step.description}
        </p>
      </div>

      {/* Bottom gold glow edge */}
      <span
        aria-hidden="true"
        className="absolute bottom-0 left-[15%] right-[15%] h-px"
        style={{
          background:
            'linear-gradient(to right, transparent, rgba(212,175,96,0.4), transparent)',
        }}
      />
    </motion.div>
  )
}

export function HowItWorks() {
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start 80%', 'end 60%'],
  })

  // Progress bar fills as you scroll through the section
  const progressWidth = useTransform(scrollYProgress, [0, 1], ['0%', '100%'])

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

      {/* ── Scroll progress bar ──────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto mb-8 md:mb-10">
        <div className="h-[2px] rounded-full bg-[--color-near-black]/8 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{
              width: progressWidth,
              background: 'var(--color-accent, #D4AF60)',
            }}
          />
        </div>
      </div>

      {/* ── Step cards ───────────────────────────────────────────── */}
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
        {STEPS.map((step, i) => (
          <StepCard key={step.number} step={step} index={i} />
        ))}
      </div>
    </section>
  )
}
