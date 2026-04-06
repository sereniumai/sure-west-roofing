'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — Content */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display font-extrabold text-3xl lg:text-[52px] text-dark tracking-tight leading-tight">
              {heading}
            </h2>

            <div className="flex flex-col gap-0 mt-10">
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
                    <div className="absolute left-5 top-12 bottom-0 w-px bg-[#D6AE60]/20" />
                  )}

                  <div className="w-10 h-10 rounded-full bg-[#D6AE60]/15 flex-shrink-0 flex items-center justify-center relative z-10 mt-0.5">
                    <span className="font-display font-bold text-base text-[#D6AE60] tracking-tight">
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

            <Button variant="primary" href="/contact">
              Book a free inspection
            </Button>
          </motion.div>

          {/* RIGHT — Image with badge */}
          <motion.div
            className="relative mb-8 lg:mb-0 order-first lg:order-last"
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
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
              className="absolute bottom-6 left-6 bg-[#D6AE60] text-white rounded-2xl p-5 shadow-[0_8px_24px_rgba(214,174,96,0.3)]"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="font-display font-extrabold text-2xl lg:text-3xl text-white tracking-tight">
                {badgeNumber}
              </div>
              <div className="font-body text-xs text-white/80 uppercase tracking-widest mt-0.5">
                {badgeLabel}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
