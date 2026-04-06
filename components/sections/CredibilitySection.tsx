'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { ArrowRight } from 'lucide-react'

interface Step {
  number: number
  title: string
  description: string
}

interface CredibilitySectionProps {
  label: string
  heading: string
  image: string
  imageAlt: string
  badgeNumber: string
  badgeLabel: string
  steps: Step[]
}

export function CredibilitySection({
  label,
  heading,
  steps,
}: CredibilitySectionProps) {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header — centered */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#D6AE60] mb-3 block">
            {label}
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-[48px] text-dark tracking-tight leading-tight">
            {heading}
          </h2>
        </motion.div>

        {/* 3 step cards with connecting line */}
        <div className="relative">
          {/* Connecting line — desktop only */}
          <div className="hidden lg:block absolute top-16 left-[16%] right-[16%] h-px bg-[#D6AE60]/20" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative text-center"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.15, ease: 'easeOut' }}
              >
                {/* Step number */}
                <div className="w-14 h-14 rounded-2xl bg-[#D6AE60]/10 flex items-center justify-center mx-auto mb-6 relative z-10">
                  <span className="font-display font-extrabold text-2xl text-[#D6AE60]">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display font-bold text-dark text-xl tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-body-text leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>

                {/* Arrow between steps — desktop only */}
                {i < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-3 top-16 -translate-y-1/2 z-10">
                    <ArrowRight className="w-5 h-5 text-[#D6AE60]/40" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: 'easeOut' }}
        >
          <Button variant="primary" href="/contact">
            Book A Free Inspection
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
