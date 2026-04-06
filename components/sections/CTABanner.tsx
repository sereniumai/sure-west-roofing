'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

interface CTABannerProps {
  heading: string
  subtext: string
  primaryCTA: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  backgroundImage: string
}

export function CTABanner({
  heading,
  subtext,
  primaryCTA,
  secondaryCTA,
}: CTABannerProps) {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-[#1B3558]">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1B3558] via-[#1B3558] to-[#2a4a7a]" />

      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#D6AE60]/5" />
        <div className="absolute -bottom-32 -left-16 w-80 h-80 rounded-full bg-[#D6AE60]/5" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#D6AE60]/[0.02]" />
      </div>

      {/* Gold accent line at top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#D6AE60] to-transparent" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <h2 className="font-display font-extrabold text-3xl lg:text-5xl text-white tracking-tight leading-tight">
          {heading}
        </h2>

        <p className="font-body text-white/70 text-base lg:text-lg leading-relaxed mt-5 max-w-xl mx-auto">
          {subtext}
        </p>

        <div className="flex flex-wrap gap-5 mt-10 justify-center items-center">
          <Button variant="primary" size="lg" href={primaryCTA.href}>
            {primaryCTA.label}
          </Button>

          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              className="inline-flex items-center gap-2 font-body font-semibold text-white/80 hover:text-[#D6AE60] transition-colors duration-300 text-lg"
            >
              {secondaryCTA.label}
            </a>
          )}
        </div>
      </motion.div>
    </section>
  )
}
