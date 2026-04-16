'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Check, Play } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface ReasonPoint {
  title: string
  description: string
  icon: React.ReactNode
}

interface ReasonsSectionProps {
  label: string
  heading: string
  headingAccent?: string
  body: string
  image?: string
  imageAlt?: string
  videoEmbed?: string
  videoPoster?: string
  points: ReasonPoint[]
}

export function ReasonsSection({
  label,
  heading,
  headingAccent,
  body,
  image,
  imageAlt,
  videoEmbed,
  videoPoster,
  points,
}: ReasonsSectionProps) {
  const [videoPlaying, setVideoPlaying] = useState(false)
  return (
    <section className="bg-[#F7F5F0] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header, full width, same as ServicesGrid */}
        <motion.div
          className="mb-10"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#D4AF60] mb-3 block">
            {label}
          </span>
          <h2 className="font-display font-semibold text-4xl lg:text-[56px] text-dark tracking-tight leading-tight">
            {heading}
            {headingAccent && (
              <>
                <br className="hidden lg:block" />{' '}
                <span className="text-[#D4AF60]">{headingAccent}</span>
              </>
            )}
          </h2>
          <p className="font-body text-body-text leading-relaxed mt-4 text-lg">
            {body}
          </p>
        </motion.div>

        {/* Grid, 5/7 split, content left, video right */}
        <div className="grid grid-cols-12 gap-5 items-start">
          {/* Content card, col-span-5 */}
          <div className="col-span-12 lg:col-span-5 bg-[#F7F5F0] rounded-2xl p-6 lg:p-8 flex flex-col justify-center border border-[#E8E8E8]">
            <div className="flex flex-col gap-4">
              {points.map((point, i) => (
                <motion.div
                  key={i}
                  className="flex items-start gap-3"
                  initial={{ y: 15, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                >
                  <div className="w-5 h-5 rounded-full bg-[#D4AF60]/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-3 h-3 text-[#D4AF60]" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-dark text-base tracking-tight mb-0.5">
                      {point.title}
                    </h3>
                    <p className="font-body text-sm text-body-text leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <Button variant="primary" href="/contact" className="mt-6 w-fit">
              Get A Free Estimate
            </Button>
          </div>

          {/* Video side, col-span-7 */}
          <div className="col-span-12 lg:col-span-7">
            {videoEmbed ? (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                {videoPlaying ? (
                  <iframe
                    src={`${videoEmbed}${videoEmbed.includes('?') ? '&' : '?'}autoplay=1`}
                    className="absolute inset-0 w-full h-full border-0"
                    allow="autoplay; fullscreen; picture-in-picture"
                    allowFullScreen
                    title="Sure West Roofing"
                  />
                ) : (
                  <button
                    onClick={() => setVideoPlaying(true)}
                    className="absolute inset-0 w-full h-full cursor-pointer group"
                    aria-label="Play video"
                  >
                    {videoPoster && (
                      <Image
                        src={videoPoster}
                        alt="Play video"
                        fill
                        className="object-cover"
                        sizes="60vw"
                      />
                    )}
                    <div className="absolute inset-0 bg-[#2C4766]" />
                    <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-16 h-16 lg:w-20 lg:h-20 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-300 flex items-center justify-center shadow-lg">
                        <Play className="w-7 h-7 lg:w-8 lg:h-8 text-[#2C4766] fill-[#2C4766] ml-1" />
                      </div>
                    </div>
                  </button>
                )}
              </div>
            ) : image ? (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)]">
                <Image
                  src={image}
                  alt={imageAlt || ''}
                  fill
                  className="object-cover"
                  sizes="60vw"
                />
              </div>
            ) : (
              <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.12)] bg-gradient-to-br from-[#2C4766] to-[#5A7A9A]" />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
