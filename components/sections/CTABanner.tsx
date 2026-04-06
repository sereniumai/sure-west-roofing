'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { ShieldCheck, Phone } from 'lucide-react'
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
  backgroundImage,
}: CTABannerProps) {
  return (
    <section className="relative py-28 overflow-hidden">
      {/* Background */}
      <Image
        src={backgroundImage}
        alt=""
        fill
        className="object-cover"
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[rgba(10,18,35,0.85)] to-[rgba(10,18,35,0.60)]" />

      {/* Content */}
      <motion.div
        className="relative z-10 max-w-6xl mx-auto px-6"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6, ease: [0, 0, 0.2, 1] }}
      >
        <div className="max-w-2xl">
          <h2 className="font-display font-bold text-3xl lg:text-5xl text-white tracking-wide leading-tight">
            {heading}
          </h2>

          <p className="font-body text-white/70 text-base leading-relaxed mt-4 max-w-lg">
            {subtext}
          </p>

          <div className="flex flex-wrap gap-4 mt-8 items-center">
            <Button variant="ghost" href={primaryCTA.href}>
              {primaryCTA.label}
            </Button>

            {secondaryCTA && (
              <a
                href={secondaryCTA.href}
                className="inline-flex items-center gap-2 font-body font-semibold text-white hover:text-[#C49A2C] transition-colors duration-200"
              >
                <Phone className="w-5 h-5" />
                {secondaryCTA.label}
              </a>
            )}
          </div>

          <div className="mt-8 flex items-center gap-3">
            <ShieldCheck className="text-[#C49A2C] w-5 h-5 flex-shrink-0" />
            <span className="font-body text-sm text-white/60">
              Red Seal Certified · Free Estimates · Serving Cochrane &amp; Area
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
