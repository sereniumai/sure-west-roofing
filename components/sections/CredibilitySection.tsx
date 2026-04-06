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
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header — full width, same pattern as other sections */}
        <motion.div
          className="mb-10"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display font-extrabold text-3xl lg:text-[48px] text-dark tracking-tight leading-tight">
            {heading}
          </h2>
        </motion.div>

        {/* Grid — 5/7 split, steps left, image right */}
        <div className="grid grid-cols-12 gap-5 items-start">
          {/* Steps card — col-span-5 */}
          <div className="col-span-12 lg:col-span-5 bg-[#F8F8F8] rounded-2xl p-6 lg:p-8 border border-[#EBEBEB]">
            <div className="flex flex-col gap-0">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  className="flex items-start gap-4 relative"
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                >
                  {/* Vertical connector line */}
                  {i < steps.length - 1 && (
                    <div className="absolute left-[18px] top-10 bottom-0 w-px bg-[#D6AE60]/20" />
                  )}

                  <div className="w-9 h-9 rounded-full bg-[#D6AE60]/10 flex-shrink-0 flex items-center justify-center relative z-10 mt-0.5">
                    <span className="font-display font-bold text-sm text-[#D6AE60]">
                      {step.number}
                    </span>
                  </div>
                  <div className={i < steps.length - 1 ? 'pb-6' : ''}>
                    <h3 className="font-display font-bold text-dark text-base tracking-tight mb-0.5">
                      {step.title}
                    </h3>
                    <p className="font-body text-sm text-body-text leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="primary" href="/contact" className="mt-6 w-fit">
              Book A Free Inspection
            </Button>
          </div>

          {/* Image side — col-span-7 */}
          <motion.div
            className="col-span-12 lg:col-span-7 relative"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="60vw"
              />
            </div>

            {/* Badge */}
            <motion.div
              className="absolute bottom-4 left-4 bg-[#D6AE60] text-white rounded-xl px-4 py-3 shadow-[0_8px_24px_rgba(214,174,96,0.3)]"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="font-display font-extrabold text-xl text-white tracking-tight">
                {badgeNumber}
              </div>
              <div className="font-body text-[10px] text-white/80 uppercase tracking-widest">
                {badgeLabel}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
