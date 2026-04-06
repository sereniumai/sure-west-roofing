'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'

interface ReasonPoint {
  title: string
  description: string
  icon: React.ReactNode
}

interface ReasonsSectionProps {
  label: string
  heading: string
  body: string
  image: string
  imageAlt: string
  points: ReasonPoint[]
}

export function ReasonsSection({
  label,
  heading,
  body,
  image,
  imageAlt,
  points,
}: ReasonsSectionProps) {
  return (
    <section className="bg-[#F9F8F5] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — Image */}
          <motion.div
            className="relative aspect-[4/5] w-full max-w-lg"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#1B3558] rounded-xl -z-10" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border-4 border-[#E8922A] rounded-2xl -z-10" />

            <div className="relative w-full h-full rounded-2xl overflow-hidden">
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </motion.div>

          {/* RIGHT — Content */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <SectionLabel text={label} />

            <h2 className="font-display font-bold text-3xl lg:text-4xl text-dark tracking-wide leading-tight mt-3">
              {heading}
            </h2>

            <p className="font-body text-body-text leading-relaxed mt-4 mb-10">
              {body}
            </p>

            <div className="flex flex-col gap-8">
              {points.map((point, i) => (
                <div key={i} className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-[#1B3558] flex items-center justify-center flex-shrink-0">
                    <div className="text-[#E8922A] w-6 h-6 [&>svg]:w-6 [&>svg]:h-6">
                      {point.icon}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-dark text-base tracking-wide mb-1">
                      {point.title}
                    </h3>
                    <p className="font-body text-sm text-body-text leading-relaxed">
                      {point.description}
                    </p>
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
