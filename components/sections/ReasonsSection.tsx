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
    <section className="bg-[#1B3558] py-20 lg:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* LEFT — Content */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#D6AE60] mb-4 block">
              {label}
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-[48px] text-white tracking-tight leading-tight">
              {heading}
            </h2>
            <p className="font-body text-white/60 leading-relaxed mt-5 text-lg">
              {body}
            </p>

            <div className="flex flex-col gap-5 mt-10">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-4"
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
                >
                  <div className="w-8 h-8 rounded-full bg-[#D6AE60]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-[#D6AE60]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-white text-lg tracking-tight mb-1">
                      {point.title}
                    </h3>
                    <p className="font-body text-sm text-white/50 leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-10"
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4, ease: 'easeOut' }}
            >
              <Button variant="primary" href="/contact">
                Get A Free Estimate
              </Button>
            </motion.div>
          </motion.div>

          {/* RIGHT — Video */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            {videoEmbed ? (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] ring-1 ring-white/10">
                <iframe
                  src={videoEmbed}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Sure West Roofing"
                />
              </div>
            ) : image ? (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.4)] ring-1 ring-white/10">
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
