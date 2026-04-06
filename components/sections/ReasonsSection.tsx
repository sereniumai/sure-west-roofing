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
        {/* Header */}
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
          <p className="font-body text-body-text leading-relaxed mt-4 text-lg max-w-3xl">
            {body}
          </p>
        </motion.div>

        {/* Video — full width */}
        <motion.div
          className="mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {videoEmbed ? (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
              <iframe
                src={videoEmbed}
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Sure West Roofing"
              />
            </div>
          ) : image ? (
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
              <Image
                src={image}
                alt={imageAlt || ''}
                fill
                className="object-cover"
                sizes="100vw"
              />
            </div>
          ) : null}
        </motion.div>

        {/* Points — 3-column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {points.map((point, i) => (
            <motion.div
              key={i}
              className="bg-[#F8F8F8] rounded-2xl p-7 border border-[#EBEBEB]"
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            >
              <div className="w-10 h-10 rounded-xl bg-[#D6AE60]/10 flex items-center justify-center mb-4">
                <Check className="w-5 h-5 text-[#D6AE60]" />
              </div>
              <h3 className="font-display font-bold text-dark text-lg tracking-tight mb-2">
                {point.title}
              </h3>
              <p className="font-body text-sm text-body-text leading-relaxed">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
