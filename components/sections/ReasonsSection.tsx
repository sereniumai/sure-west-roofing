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
  heading,
  body,
  image,
  imageAlt,
  videoEmbed,
  points,
}: ReasonsSectionProps) {
  return (
    <section className="bg-[#F8F8F8] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="max-w-2xl mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display font-extrabold text-3xl lg:text-[48px] text-dark tracking-tight leading-tight">
            {heading}
          </h2>
          <p className="font-body text-body-text leading-relaxed mt-4 text-lg">
            {body}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT — Video or Image */}
          <motion.div
            className="lg:col-span-7"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {videoEmbed ? (
              <div className="relative w-full h-full min-h-[300px] lg:min-h-[420px] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)] bg-black">
                <iframe
                  src={videoEmbed}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Sure West Roofing"
                />
              </div>
            ) : image ? (
              <div className="relative w-full h-full min-h-[300px] lg:min-h-[420px] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                <Image
                  src={image}
                  alt={imageAlt || ''}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
              </div>
            ) : null}
          </motion.div>

          {/* RIGHT — Points */}
          <motion.div
            className="lg:col-span-5 flex flex-col justify-center gap-6 lg:pl-4"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {points.map((point, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-xl p-6 border border-[#EBEBEB] flex items-start gap-4"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
              >
                <div className="w-10 h-10 rounded-full bg-[#D6AE60]/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-5 h-5 text-[#D6AE60]" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-dark text-lg tracking-tight mb-1">
                    {point.title}
                  </h3>
                  <p className="font-body text-sm text-body-text leading-relaxed">
                    {point.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
