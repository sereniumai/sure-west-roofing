'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Phone } from 'lucide-react'

interface CTABannerProps {
  heading: string
  subtext: string
  primaryCTA: { label: string; href: string }
  secondaryCTA?: { label: string; href: string }
  backgroundImage?: string
}

export function CTABanner({
  heading,
  subtext,
  primaryCTA,
  secondaryCTA,
}: CTABannerProps) {
  return (
    <section className="relative py-20 lg:py-28 overflow-hidden bg-[#1B3558]">
      {/* Gradient glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[#D6AE60]/[0.08] rounded-full blur-[120px]" />
        <div className="absolute -top-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D6AE60]/30 to-transparent" />
        <div className="absolute -bottom-px left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#D6AE60]/30 to-transparent" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-3xl mx-auto px-6 text-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.div
          className="inline-flex items-center gap-2 bg-white/[0.08] border border-white/[0.1] rounded-full px-4 py-1.5 mb-6"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="w-2 h-2 rounded-full bg-[#D6AE60] animate-pulse" />
          <span className="font-body text-xs text-white/70 tracking-wide">
            Free estimates within 48 hours
          </span>
        </motion.div>

        <h2 className="font-display font-extrabold text-4xl lg:text-[56px] text-white tracking-tight leading-[1.1]">
          {heading}
        </h2>

        <p className="font-body text-white/50 text-base lg:text-lg leading-relaxed mt-5 max-w-xl mx-auto">
          {subtext}
        </p>

        <div className="flex flex-wrap gap-4 mt-10 justify-center items-center">
          <Button variant="primary" size="lg" href={primaryCTA.href}>
            {primaryCTA.label}
          </Button>

          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              className="inline-flex items-center gap-2.5 font-body font-semibold text-white/80 hover:text-white transition-colors duration-300 text-base bg-white/[0.06] hover:bg-white/[0.1] border border-white/[0.1] rounded-full px-6 py-3"
            >
              <Phone className="w-4 h-4" />
              {secondaryCTA.label}
            </a>
          )}
        </div>
      </motion.div>
    </section>
  )
}
