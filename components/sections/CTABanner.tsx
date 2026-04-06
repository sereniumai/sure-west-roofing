'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Phone, ArrowRight } from 'lucide-react'

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
    <section className="bg-[#F8F8F8] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="relative bg-white rounded-3xl border border-[#EBEBEB] px-8 py-14 lg:px-16 lg:py-20 overflow-hidden shadow-[0_8px_40px_rgba(0,0,0,0.04)]"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Decorative gold accent line */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-[#D6AE60] to-transparent rounded-full" />

          {/* Subtle radial glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#D6AE60]/[0.04] rounded-full blur-[80px]" />

          <div className="relative z-10 text-center max-w-2xl mx-auto">
            <motion.div
              className="inline-flex items-center gap-2 bg-[#D6AE60]/[0.08] border border-[#D6AE60]/20 rounded-full px-4 py-1.5 mb-6"
              initial={{ scale: 0.9, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-2 h-2 rounded-full bg-[#D6AE60] animate-pulse" />
              <span className="font-body text-xs text-[#D6AE60] font-semibold tracking-wide">
                Free estimates within 48 hours
              </span>
            </motion.div>

            <h2 className="font-display font-extrabold text-3xl lg:text-[48px] text-dark tracking-tight leading-[1.1]">
              {heading}
            </h2>

            <p className="font-body text-body-text text-base leading-relaxed mt-4 max-w-lg mx-auto">
              {subtext}
            </p>

            <div className="flex flex-wrap gap-4 mt-10 justify-center items-center">
              <Button variant="primary" size="lg" href={primaryCTA.href}>
                {primaryCTA.label}
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>

              {secondaryCTA && (
                <a
                  href={secondaryCTA.href}
                  className="inline-flex items-center gap-2.5 font-body font-semibold text-dark hover:text-[#D6AE60] transition-colors duration-300 text-base bg-[#F8F8F8] hover:bg-[#F0F0F0] border border-[#EBEBEB] rounded-full px-6 py-3"
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
