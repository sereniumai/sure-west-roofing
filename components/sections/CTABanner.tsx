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
    <section className="relative py-20 lg:py-24 overflow-hidden bg-[#D6AE60]">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-white/[0.08]" />
        <div className="absolute -bottom-24 -left-16 w-72 h-72 rounded-full bg-white/[0.06]" />
      </div>

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

        <p className="font-body text-white/85 text-base lg:text-lg leading-relaxed mt-5 max-w-xl mx-auto">
          {subtext}
        </p>

        <div className="flex flex-wrap gap-5 mt-10 justify-center items-center">
          <Button variant="secondary" size="lg" href={primaryCTA.href}>
            {primaryCTA.label}
          </Button>

          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              className="inline-flex items-center gap-2 font-body font-semibold text-white hover:text-[#1B3558] transition-colors duration-300 text-lg"
            >
              {secondaryCTA.label}
            </a>
          )}
        </div>
      </motion.div>
    </section>
  )
}
