'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll, useTransform } from 'framer-motion'
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
  body,
  image,
  imageAlt,
  videoEmbed,
  points,
}: ReasonsSectionProps) {
  const [videoPlaying, setVideoPlaying] = useState(false)
  const sectionRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  })

  const imageY = useTransform(scrollYProgress, [0, 1], ['-4%', '4%'])
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.08, 1])

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#0A1223] py-20 lg:py-32 overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1223] via-[#111D33] to-[#0A1223]" />

      {/* Subtle grain texture */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noise\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noise)\'/%3E%3C/svg%3E")' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header — centered, white text */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14 lg:mb-20"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#D6AE60] mb-3 block">
            {label}
          </span>
          <h2 className="font-display font-extrabold text-4xl lg:text-[56px] text-white tracking-tight leading-tight">
            {heading}
          </h2>
          <p className="font-body text-white/50 leading-relaxed mt-4 text-lg">
            {body}
          </p>
        </motion.div>

        {/* Roofer Image — large cinematic container with parallax */}
        {image && (
          <motion.div
            className="relative w-full aspect-[2.2/1] lg:aspect-[21/9] rounded-3xl overflow-hidden mb-5 lg:mb-6"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.9,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Parallax image */}
            <motion.div
              className="absolute inset-[-10%]"
              style={{ y: imageY, scale: imageScale }}
            >
              <Image
                src={image}
                alt={imageAlt || 'Certified roofing contractor'}
                fill
                className="object-cover"
                sizes="95vw"
                priority
              />
            </motion.div>

            {/* Gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A1223] via-[#0A1223]/30 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A1223]/30 to-transparent" />

            {/* Glass trust cards floating over the bottom of the image */}
            <div className="absolute bottom-0 left-0 right-0 p-4 lg:p-8">
              <div className="flex flex-col sm:flex-row flex-wrap gap-3 lg:gap-4 justify-center">
                {points.map((point, i) => (
                  <motion.div
                    key={i}
                    className="bg-white/[0.08] backdrop-blur-xl border border-white/[0.12] rounded-2xl px-5 py-4 lg:px-6 lg:py-5 flex-1 min-w-0 max-w-[340px] hover:bg-white/[0.12] hover:border-white/20 transition-all duration-500"
                    initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: 0.3 + i * 0.12,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    <div className="flex items-start gap-3">
                      <motion.div
                        className="w-6 h-6 rounded-full bg-[#D6AE60]/20 flex items-center justify-center flex-shrink-0 mt-0.5"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          type: 'spring',
                          stiffness: 400,
                          damping: 15,
                          delay: 0.4 + i * 0.12,
                        }}
                      >
                        <Check className="w-3.5 h-3.5 text-[#D6AE60]" />
                      </motion.div>
                      <div>
                        <h3 className="font-display font-bold text-white text-sm tracking-tight mb-1">
                          {point.title}
                        </h3>
                        <p className="font-body text-xs text-white/50 leading-relaxed">
                          {point.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Vimeo Video — cinematic container below the image */}
        {videoEmbed && (
          <motion.div
            className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-[0_25px_80px_rgba(0,0,0,0.6)]"
            initial={{ y: 60, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{
              duration: 0.9,
              delay: 0.15,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {/* Subtle glow ring */}
            <div className="absolute -inset-px rounded-3xl bg-gradient-to-b from-white/[0.08] to-transparent pointer-events-none z-10" />

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
                {/* Background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1B3558] to-[#0A1223]" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" />

                {/* Animated pulse rings */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="absolute w-28 h-28 lg:w-36 lg:h-36 rounded-full border border-white/[0.08]"
                    animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                  />
                  <motion.div
                    className="absolute w-28 h-28 lg:w-36 lg:h-36 rounded-full border border-white/[0.08]"
                    animate={{ scale: [1, 1.6], opacity: [0.4, 0] }}
                    transition={{
                      duration: 2.5,
                      delay: 0.8,
                      repeat: Infinity,
                      ease: 'easeOut',
                    }}
                  />

                  {/* Play button */}
                  <motion.div
                    className="w-20 h-20 lg:w-24 lg:h-24 rounded-full bg-white/90 group-hover:bg-white group-hover:scale-110 transition-all duration-500 flex items-center justify-center shadow-[0_10px_50px_rgba(0,0,0,0.4)] relative z-10"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      type: 'spring',
                      stiffness: 300,
                      damping: 20,
                      delay: 0.4,
                    }}
                  >
                    <Play className="w-8 h-8 lg:w-9 lg:h-9 text-[#1B3558] fill-[#1B3558] ml-1" />
                  </motion.div>
                </div>

                {/* "Watch Our Story" label */}
                <motion.span
                  className="absolute bottom-6 lg:bottom-8 left-1/2 -translate-x-1/2 font-body text-white/40 text-[11px] tracking-[0.2em] uppercase"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  Watch Our Story
                </motion.span>
              </button>
            )}
          </motion.div>
        )}

        {/* CTA */}
        <motion.div
          className="text-center mt-12 lg:mt-16"
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Button variant="primary" size="lg" href="/contact">
            Get A Free Estimate
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
