'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
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
    <section className="relative py-24 overflow-hidden bg-[#E8922A]">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full -translate-y-1/2 translate-x-1/3" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full translate-y-1/2 -translate-x-1/4" />
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6 text-center"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
      >
        <h2 className="font-display font-bold text-3xl lg:text-5xl text-white tracking-wide leading-tight max-w-3xl mx-auto">
          {heading}
        </h2>

        <p className="font-body text-white/85 text-base leading-relaxed mt-4 max-w-xl mx-auto">
          {subtext}
        </p>

        <div className="flex flex-wrap gap-4 mt-8 justify-center items-center">
          <Button variant="secondary" size="lg" href={primaryCTA.href}>
            {primaryCTA.label}
          </Button>

          {secondaryCTA && (
            <a
              href={secondaryCTA.href}
              className="inline-flex items-center gap-2 font-body font-semibold text-white hover:text-[#1B3558] transition-colors duration-200 text-lg"
            >
              <Phone className="w-5 h-5" />
              {secondaryCTA.label}
            </a>
          )}
        </div>
      </motion.div>
    </section>
  )
}
