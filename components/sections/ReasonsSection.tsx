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
    <section className="bg-[#F8F8F8] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header — full width */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#D6AE60] mb-3 block">
            {label}
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-[48px] text-dark tracking-tight leading-tight">
            {heading}
          </h2>
          <p className="font-body text-body-text leading-relaxed mt-4 text-lg">
            {body}
          </p>
        </motion.div>

        {/* Content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* LEFT — Video */}
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {videoEmbed ? (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)] bg-black">
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
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            ) : null}
          </motion.div>

          {/* RIGHT — Points stacked */}
          <div className="flex flex-col gap-4">
            {points.map((point, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl p-5 border border-[#EBEBEB] flex items-start gap-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              >
                <div className="w-9 h-9 rounded-lg bg-[#D6AE60]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-4 h-4 text-[#D6AE60]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-dark text-base tracking-tight mb-1">
                    {point.title}
                  </h3>
                  <p className="font-body text-sm text-body-text leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
