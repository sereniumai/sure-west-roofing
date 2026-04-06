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
    <section className="bg-[#F8F8F8] py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT — Heading + Points */}
          <motion.div
            className="lg:col-span-5"
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#D6AE60] mb-3 block">
              {label}
            </span>
            <h2 className="font-display font-extrabold text-3xl lg:text-[40px] text-dark tracking-tight leading-tight">
              {heading}
            </h2>
            <p className="font-body text-body-text leading-relaxed mt-4 mb-8">
              {body}
            </p>

            <div className="flex flex-col gap-4">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  className="group bg-white rounded-xl p-5 border border-[#EBEBEB] hover:border-[#D6AE60]/30 flex items-start gap-4 transition-all duration-300 hover:shadow-[0_4px_20px_rgba(214,174,96,0.08)]"
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                >
                  <div className="w-9 h-9 rounded-lg bg-[#D6AE60]/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-[#D6AE60]/20 transition-colors duration-300">
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
          </motion.div>

          {/* RIGHT — Video or Image */}
          <motion.div
            className="lg:col-span-7"
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            {videoEmbed ? (
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.15)] bg-black">
                <iframe
                  src={videoEmbed}
                  className="absolute -inset-[5%] w-[110%] h-[110%] border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Sure West Roofing"
                />
              </div>
            ) : image ? (
              <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.15)]">
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
        </div>
      </div>
    </section>
  )
}
