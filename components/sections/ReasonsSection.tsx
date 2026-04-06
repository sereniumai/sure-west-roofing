'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface ReasonPoint {
  title: string
  description: string
  icon: React.ReactNode
}

interface ReasonsSectionProps {
  label: string
  heading: string
  body: string
  image?: string
  imageAlt?: string
  videoEmbed?: string
  points: ReasonPoint[]
}

export function ReasonsSection({
  label,
  heading,
  body,
  image,
  imageAlt,
  videoEmbed,
  points,
}: ReasonsSectionProps) {
  return (
    <section className="bg-white py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* LEFT — Content */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display font-extrabold text-3xl lg:text-[44px] text-dark tracking-tight leading-[1.1]">
              {heading}
            </h2>
            <p className="font-body text-body-text leading-relaxed mt-5">
              {body}
            </p>

            <div className="mt-8 space-y-1">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4 rounded-xl p-4 -ml-4 hover:bg-[#F8F8F8] transition-colors duration-300"
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                >
                  <div className="w-6 h-6 rounded-full bg-[#D6AE60]/15 flex items-center justify-center flex-shrink-0 mt-1">
                    <Check className="w-3.5 h-3.5 text-[#D6AE60]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-dark text-[15px] tracking-tight">
                      {point.title}
                    </h3>
                    <p className="font-body text-sm text-body-text leading-relaxed mt-0.5">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-8"
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.35, ease: 'easeOut' }}
            >
              <Button variant="primary" href="/contact">
                Get A Free Estimate
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT — Video */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {videoEmbed ? (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.15)]">
                <iframe
                  src={videoEmbed}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Sure West Roofing"
                />
              </div>
            ) : image ? (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_12px_48px_rgba(0,0,0,0.15)]">
                <Image
                  src={image}
                  alt={imageAlt || ''}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ) : null}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
