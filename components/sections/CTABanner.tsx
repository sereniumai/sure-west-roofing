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
    <section className="bg-[#F8F8F8] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="relative bg-gradient-to-br from-[#D6AE60] via-[#C9A355] to-[#B8943F] rounded-3xl px-8 py-14 lg:px-16 lg:py-20 overflow-hidden"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Subtle texture */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-white/[0.07]" />
            <div className="absolute -bottom-32 -left-20 w-[400px] h-[400px] rounded-full bg-black/[0.04]" />
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left — Text */}
            <div className="lg:max-w-lg">
              <h2 className="font-display font-semibold text-3xl lg:text-[44px] text-white tracking-tight leading-[1.1]">
                {heading}
              </h2>
              <p className="font-body text-white/80 text-base leading-relaxed mt-4">
                {subtext}
              </p>
            </div>

            {/* Right — CTAs stacked */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end flex-shrink-0">
              <Button variant="secondary" size="lg" href={primaryCTA.href}>
                {primaryCTA.label}
              </Button>

              {secondaryCTA && (
                <a
                  href={secondaryCTA.href}
                  className="inline-flex items-center justify-center gap-2 font-body font-semibold text-white hover:text-white/80 transition-colors duration-300 text-base bg-white/[0.15] hover:bg-white/[0.25] backdrop-blur-sm rounded-full px-6 py-3"
                >
                  <Phone className="w-4 h-4" />
                  {secondaryCTA.label}
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
