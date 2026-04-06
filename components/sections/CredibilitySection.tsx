'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

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
  heading,
  image,
  imageAlt,
  badgeNumber,
  badgeLabel,
  steps,
}: CredibilitySectionProps) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* LEFT — Image with badge */}
          <motion.div
            className="relative mb-8 lg:mb-0"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="aspect-[4/5] w-full rounded-2xl overflow-hidden relative shadow-[0_8px_30px_rgba(0,0,0,0.12)]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Badge overlay */}
            <motion.div
              className="absolute -bottom-6 right-4 lg:bottom-8 lg:right-6 bg-[#1B3558] text-white rounded-2xl p-6 shadow-[0_8px_30px_rgba(27,53,88,0.3)]"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="font-display font-extrabold text-3xl lg:text-4xl text-[#D6AE60] tracking-tight">
                {badgeNumber}
              </div>
              <div className="font-body text-xs text-white/70 uppercase tracking-widest mt-1">
                {badgeLabel}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display font-extrabold text-3xl lg:text-[44px] text-dark tracking-tight leading-tight mb-10">
              {heading}
            </h2>

            {/* Steps */}
            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="flex items-start gap-5 relative"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: [0.16, 1, 0.3, 1] }}
                >
                  {/* Vertical line connector */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-6 top-14 bottom-0 w-px bg-[#D6AE60]/20" />
                  )}

                  <div className="w-12 h-12 rounded-full bg-[#D6AE60] flex-shrink-0 flex items-center justify-center shadow-[0_4px_12px_rgba(214,174,96,0.3)] relative z-10">
                    <span className="font-display font-bold text-lg text-white tracking-tight">
                      {step.number}
                    </span>
                  </div>
                  <div className="pb-8">
                    <h3 className="font-display font-bold text-dark text-lg tracking-tight mb-1.5">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-body-text leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
