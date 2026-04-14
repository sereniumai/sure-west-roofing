'use client'

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

const badges = [
  '10+ Years Experience',
  'Certified Contractor',
  'Trusted in Cochrane 2025',
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
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
  backgroundImage,
}: HeroProps) {
  return (
    <section className="bg-white pt-20">
      {/* Trust badges bar */}
      <div className="border-t border-b border-[#E5E5E5]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-3 flex flex-wrap items-center justify-between gap-3">
          {badges.map((badge) => (
            <div key={badge} className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#D4AF60]" />
              <span className="font-body text-xs text-[#666] tracking-wide">
                {badge}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main content area */}
      <motion.div
        className="max-w-7xl mx-auto px-6 lg:px-12 py-12 lg:py-20"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 lg:gap-16">
          {/* Left — massive heading */}
          <motion.div className="flex-1" variants={itemVariants}>
            <h1 className="font-display font-black uppercase text-[clamp(3rem,8vw,9rem)] leading-[0.9] tracking-tighter text-[#1A1A1A]">
              {h1.split('\n').map((line, i) => (
                <span key={i}>
                  {i > 0 && <br />}
                  {line}
                </span>
              ))}
            </h1>
          </motion.div>

          {/* Right — description */}
          <motion.div
            className="lg:max-w-md lg:pb-4 flex-shrink-0"
            variants={itemVariants}
          >
            <p className="font-body text-[#666] text-base leading-relaxed">
              {subtitle}
            </p>
          </motion.div>
        </div>

        {/* CTAs */}
        <motion.div
          className="flex flex-wrap items-center gap-4 mt-10 pt-8 border-t border-[#E5E5E5]"
          variants={itemVariants}
        >
          <Button variant="secondary" size="lg" href={primaryCTA.href}>
            {primaryCTA.label}
          </Button>
          {secondaryCTA && (
            <Button variant="outline" size="lg" href={secondaryCTA.href}>
              {secondaryCTA.label}
            </Button>
          )}
        </motion.div>
      </motion.div>

      {/* Full-width hero image */}
      <motion.div
        className="relative w-full h-[40vh] lg:h-[55vh] overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        {backgroundImage && (
          <img
            src={backgroundImage}
            alt="Sure West Roofing - Cochrane roofing contractor"
            className="w-full h-full object-cover"
          />
        )}
        {/* Subtle dark overlay */}
        <div className="absolute inset-0 bg-black/20" />
      </motion.div>
    </section>
  )
}
