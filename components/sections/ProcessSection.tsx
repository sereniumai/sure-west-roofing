'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface Step {
  number: number
  title: string
  description: string
}

interface ProcessSectionProps {
  heading: string
  body?: string
  steps: Step[]
}

export function ProcessSection({ heading, body, steps }: ProcessSectionProps) {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px' })

  return (
    <section
      ref={sectionRef}
      className="bg-[--color-cream] overflow-hidden"
      style={{ padding: 'var(--section-pad-top) var(--section-pad-x) var(--section-pad-bot)' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label text-[#D4AF60] mb-4 inline-flex justify-center">
            Our Process
          </span>
          <h2 className="font-display font-semibold uppercase text-3xl md:text-4xl lg:text-5xl xl:text-[70px] tracking-[-0.04em] leading-[0.95] text-black mt-4">
            {heading}
          </h2>
          {body && (
            <p className="font-body text-[#666] leading-relaxed mt-4 text-lg">
              {body}
            </p>
          )}
        </motion.div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="hidden lg:block absolute top-20 left-[16%] right-[16%] h-px bg-[#E5E5E5]">
            <motion.div
              className="h-full bg-[#D4AF60]"
              initial={{ width: '0%' }}
              animate={isInView ? { width: '100%' } : { width: '0%' }}
              transition={{ duration: 1.2, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                className="relative text-center"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.2 }}
              >
                {/* Step number circle */}
                <motion.div
                  className="w-16 h-16 bg-black flex items-center justify-center mx-auto mb-6 relative z-10"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: 'spring',
                    stiffness: 300,
                    damping: 20,
                    delay: i * 0.2 + 0.1,
                  }}
                >
                  <span className="font-display font-semibold text-2xl text-[#D4AF60]">
                    {step.number}
                  </span>
                </motion.div>

                <h3 className="font-display font-semibold text-black uppercase text-base tracking-wider mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-[#666] leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
