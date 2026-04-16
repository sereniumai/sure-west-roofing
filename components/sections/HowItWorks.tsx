'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { Calendar, FileCheck, CheckCircle, type LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const EASE_OUT = [0.16, 1, 0.3, 1] as const

interface Step {
  number: string
  title: string
  description: string
  image: string
  Icon: LucideIcon
}

const STEPS: Step[] = [
  {
    number: '01',
    title: 'Book Your Free Estimate',
    description:
      'We come to your property in Cochrane, Calgary or Canmore, assess the roof thoroughly, and provide a clear itemised written quote.',
    image: '/images/Roof Inspection Cochrane.avif',
    Icon: Calendar,
  },
  {
    number: '02',
    title: 'Approve Your Quote',
    description:
      'Your quote is fixed. The price you approve is the price you pay. Our Red Seal certified crew then schedules your job around you.',
    image: '/images/Roof Replacement Cochrane.avif',
    Icon: FileCheck,
  },
  {
    number: '03',
    title: 'Your Roof Done Right',
    description:
      'Work completed to Red Seal standard. Your property left clean. Your 10-year workmanship guarantee in writing before we leave.',
    image: '/images/Roof Repair Cochrane.avif',
    Icon: CheckCircle,
  },
]

function StepCard({ step, index }: { step: Step; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const { Icon } = step

  return (
    <motion.div
      ref={ref}
      className="group relative flex flex-col bg-white rounded-[12px] shadow-[0_2px_8px_rgba(44,71,102,0.06)] overflow-hidden"
      initial={{ y: 40, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: 40, opacity: 0 }}
      transition={{ duration: 0.7, delay: 0.1 + index * 0.15, ease: EASE_OUT }}
    >
      {/* Image */}
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={step.image}
          alt={step.title}
          fill
          sizes="(max-width: 768px) 100vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        {/* Step badge: gold circle, navy icon */}
        <div
          aria-hidden="true"
          className="absolute bottom-4 left-4 flex items-center justify-center w-12 h-12 rounded-full bg-brand-gold border-2 border-white shadow-lg"
        >
          <Icon className="w-5 h-5 text-brand-navy" strokeWidth={1.5} />
        </div>
      </div>

      {/* Content */}
      <div className="p-5 md:p-6">
        <h3
          className="font-display font-semibold text-[--color-near-black] leading-[1.15]"
          style={{ fontSize: '22px', letterSpacing: '-0.025em' }}
        >
          {step.title}
        </h3>

        <motion.span
          aria-hidden="true"
          className="block h-[2px] rounded-full mt-2 mb-3 origin-left"
          style={{ background: 'var(--color-accent, #D4AF60)', width: '40px' }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.5, delay: 0.4 + index * 0.15, ease: EASE_OUT }}
        />

        <p
          className="text-brand-slate leading-[1.6]"
          style={{
            fontSize: '14px',
            fontFamily: "'Inter', system-ui, sans-serif",
            fontWeight: 400,
          }}
        >
          {step.description}
        </p>
      </div>
    </motion.div>
  )
}

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative bg-brand-cream overflow-hidden"
      style={{
        paddingTop: 'var(--section-pad-top)',
        paddingBottom: 'var(--section-pad-bot)',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      {/* ── Header ───────────────────────────────────────────────── */}
      <motion.div
        className="relative flex flex-col items-center text-center mb-12 md:mb-14 max-w-[920px] mx-auto"
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
          className="mt-5 max-w-[600px] text-brand-slate leading-[1.65]"
          style={{
            fontSize: '16px',
            fontFamily: "'Inter', system-ui, sans-serif",
            fontWeight: 400,
          }}
        >
          No surprises. No pressure. Just a clear simple process from your first call to the final inspection.
        </p>

        <motion.div
          className="mt-7"
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

      {/* ── 3-column step cards with connector ────────────────── */}
      <div className="max-w-[1200px] mx-auto relative">
        <div
          aria-hidden="true"
          className="hidden md:block absolute z-0 border-t-2 border-dashed border-brand-gold/50"
          style={{ top: '120px', left: '16.67%', right: '16.67%' }}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-7 relative z-[1]">
          {STEPS.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
