'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

interface HeroProps {
  h1: string
  subtitle: string
  primaryCTA: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  socialProofCount: string
  socialProofLabel: string
  backgroundVideo?: string
  backgroundImage?: string
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const itemVariants = {
  hidden: { y: 40, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0, 0, 0.2, 1] as const },
  },
}

export function Hero({
  h1,
  subtitle,
  primaryCTA,
  secondaryCTA,
  socialProofCount,
  socialProofLabel,
  backgroundVideo,
  backgroundImage,
}: HeroProps) {
  const [videoReady, setVideoReady] = useState(false)

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#1A1A1A]">
      {/* Background video */}
      {backgroundVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={() => setVideoReady(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
            videoReady ? 'opacity-40' : 'opacity-0'
          }`}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : backgroundImage ? (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />
      ) : null}

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/60 via-transparent to-[#1A1A1A]/80" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-12 py-32"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Location label */}
        <motion.div className="mb-6" variants={itemVariants}>
          <span className="section-label text-[#D4AF60]">
            Roofing Contractor · Cochrane, AB
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="font-display font-extrabold uppercase tracking-tight text-4xl md:text-6xl lg:text-7xl xl:text-[90px] leading-[0.95] text-white max-w-4xl"
          variants={itemVariants}
        >
          {h1.split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="font-body text-white/60 text-base md:text-lg leading-relaxed mt-6 max-w-xl"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>

        {/* Social proof */}
        <motion.div
          className="flex items-center gap-3 mt-6"
          variants={itemVariants}
        >
          <span className="font-display font-extrabold text-[#D4AF60] text-2xl">
            {socialProofCount}
          </span>
          <span className="font-body text-white/50 text-sm uppercase tracking-wider">
            {socialProofLabel}
          </span>
        </motion.div>

        {/* Buttons */}
        <motion.div className="flex flex-wrap gap-4 mt-8" variants={itemVariants}>
          <Button variant="secondary" size="lg" href={primaryCTA.href}>
            {primaryCTA.label}
          </Button>
          {secondaryCTA && (
            <Button variant="ghost" size="lg" href={secondaryCTA.href}>
              {secondaryCTA.label}
            </Button>
          )}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="font-body text-white/40 text-xs tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-white/20 flex justify-center pt-1.5"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-1 h-1.5 rounded-full bg-white/40" />
        </motion.div>
      </motion.div>
    </section>
  )
}
