'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

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
  heading,
  body,
  image,
  imageAlt,
  points,
}: ReasonsSectionProps) {
  return (
    <section className="bg-[#EDEEE8] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* LEFT — Image */}
          <motion.div
            className="relative w-full"
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden">
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
            <h2 className="font-display font-bold text-3xl lg:text-5xl text-dark tracking-tight leading-tight">
              {heading}
            </h2>

            <p className="font-body text-body-text leading-relaxed mt-6 mb-10">
              {body}
            </p>

            <div className="flex flex-col gap-8">
              {points.map((point, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-6 h-6 mt-0.5 flex-shrink-0">
                    <Check className="w-6 h-6 text-[#D6AE60]" />
                  </div>
                  <div>
                    <h3 className="font-body font-bold text-dark text-base mb-1">
                      {point.title}:
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
