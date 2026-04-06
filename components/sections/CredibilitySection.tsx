'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'

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

const stats = [
  { number: '500+', label: 'Roofs Completed' },
  { number: '15+', label: 'Years Experience' },
  { number: '100%', label: 'Insured & Bonded' },
  { number: '50+', label: '5-Star Reviews' },
]

export function CredibilitySection({
  label,
  heading,
  image,
  imageAlt,
  badgeNumber,
  badgeLabel,
  steps,
}: CredibilitySectionProps) {
  return (
    <section className="bg-[#EDEEE8] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — Image with badge */}
          <motion.div
            className="relative"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          >
            <div className="aspect-[4/5] w-full max-w-lg rounded-2xl overflow-hidden relative">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            {/* Badge overlay */}
            <div className="absolute bottom-8 left-8 bg-[#1B3558] text-white rounded-2xl p-6 border-l-4 border-[#C49A2C]">
              <div className="font-display font-bold text-4xl text-[#C49A2C] tracking-wide">
                {badgeNumber}
              </div>
              <div className="font-body text-xs text-white/70 uppercase tracking-widest mt-1">
                {badgeLabel}
              </div>
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
          >
            <SectionLabel text={label} />

            <h2 className="font-display font-bold text-3xl lg:text-4xl text-dark tracking-wide leading-tight mt-3 mb-10">
              {heading}
            </h2>

            {/* Steps */}
            <div className="flex flex-col gap-8">
              {steps.map((step) => (
                <div key={step.number} className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-full bg-[#4A7FA8] flex-shrink-0 flex items-center justify-center">
                    <span className="font-display font-bold text-lg text-white tracking-wide">
                      {step.number}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-dark text-base tracking-wide mb-1">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-body-text leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="mt-10 grid grid-cols-2 gap-6">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white border border-[#E5E2D9] rounded-2xl p-5"
                >
                  <div className="font-display font-bold text-3xl text-[#C49A2C] tracking-wide">
                    {stat.number}
                  </div>
                  <div className="font-body text-xs text-body-text mt-1 uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
