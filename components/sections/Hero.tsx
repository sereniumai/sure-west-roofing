'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
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
    transition: { staggerChildren: 0.15 },
  },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0, 0, 0.2, 1] as const },
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
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background video */}
      {backgroundVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          poster={backgroundImage}
        >
          <source src={backgroundVideo} type="video/mp4" />
        </video>
      ) : backgroundImage ? (
        <img
          src={backgroundImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      ) : null}

      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(10,18,35,0.55)]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,18,35,0.75)] via-[rgba(10,18,35,0.45)] to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 py-32 max-w-2xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Location label */}
        <motion.div
          className="flex items-center gap-3 mb-4"
          variants={itemVariants}
        >
          <span className="w-8 h-0.5 bg-[#C49A2C]" />
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#C49A2C]">
            Cochrane, Alberta
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="font-display font-bold tracking-wide text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-[1.1] text-white"
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
          className="font-body text-white/80 text-base md:text-lg leading-relaxed mt-5 max-w-lg"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mt-8"
          variants={itemVariants}
        >
          <Button variant="primary" size="lg" href={primaryCTA.href}>
            <span className="inline-flex items-center gap-2">
              <Phone className="w-5 h-5" />
              {primaryCTA.label}
            </span>
          </Button>
          {secondaryCTA && (
            <Button variant="ghost" size="lg" href={secondaryCTA.href}>
              {secondaryCTA.label}
            </Button>
          )}
        </motion.div>

        {/* Social proof */}
        <motion.div
          className="mt-10 flex items-center gap-4"
          variants={itemVariants}
        >
          <div className="flex items-center gap-3">
            <span className="font-display font-bold text-white text-3xl tracking-wide">
              {socialProofCount}
            </span>
            <span className="font-body text-white/70 text-sm">
              {socialProofLabel}
            </span>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
