'use client'

import { motion } from 'framer-motion'
import { Award, BadgeCheck, MapPin } from 'lucide-react'
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
  { label: '10+ years of experience', Icon: Award, hideOnMobile: false },
  { label: 'Certified contractor', Icon: BadgeCheck, hideOnMobile: false },
  { label: 'Trusted in Cochrane 2025', Icon: MapPin, hideOnMobile: true },
]

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
}

const itemVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const },
  },
}

export function Hero({
  h1,
  subtitle,
  primaryCTA,
  secondaryCTA,
}: HeroProps) {
  return (
    <section
      className="min-h-screen bg-black flex flex-col justify-center relative pb-[140px] md:pb-[280px]"
      style={{ paddingTop: '110px', paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      {/* Credential badges — 2 on mobile, 3 on desktop */}
      <motion.div
        className="flex flex-wrap justify-start md:justify-between items-center gap-2 md:gap-3 pt-2 md:pt-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {badges.map(({ label, Icon, hideOnMobile }) => (
          <motion.span
            key={label}
            className={`inline-flex items-center gap-2 px-3 md:px-4 h-8 md:h-9 text-[13px] md:text-[14px] font-bold ${hideOnMobile ? 'hidden md:inline-flex' : ''}`}
            style={{
              background: 'var(--color-glass)',
              color: 'var(--color-warm-white)',
            }}
            variants={itemVariants}
          >
            <Icon className="w-3.5 h-3.5 md:w-4 md:h-4 flex-shrink-0" style={{ color: '#D4AF60' }} />
            {label}
          </motion.span>
        ))}
      </motion.div>

      {/* Divider */}
      <div className="w-full h-px bg-white/15 my-5 md:my-3.5" />

      {/* Giant headline */}
      <motion.h1
        className="font-display font-semibold uppercase leading-[0.95] md:leading-none"
        style={{
          fontSize: 'var(--text-hero)',
          letterSpacing: '-0.044em',
          color: 'var(--color-warm-white)',
        }}
        initial={{ y: 40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
      >
        {h1.split('\n').map((line, i) => (
          <span key={i}>
            {i > 0 && <br />}
            {line}
          </span>
        ))}
      </motion.h1>

      {/* Divider */}
      <div className="w-full h-px bg-white/15 my-5 md:my-3.5" />

      {/* Bottom row: CTAs + tagline */}
      <motion.div
        className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 lg:gap-8 mt-6 md:mt-10"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 w-full lg:w-auto">
          <Button
            variant="secondary"
            size="lg"
            href={primaryCTA.href}
            className="w-full sm:w-auto justify-center"
          >
            {primaryCTA.label}
          </Button>
          {secondaryCTA && (
            <Button
              variant="ghost"
              size="lg"
              href={secondaryCTA.href}
              className="w-full sm:w-auto justify-center"
            >
              {secondaryCTA.label}
            </Button>
          )}
        </div>

        <p
          className="leading-relaxed font-semibold opacity-85 max-w-[400px] lg:text-right"
          style={{
            fontSize: 'var(--text-body)',
            color: 'var(--color-warm-white)',
          }}
        >
          {subtitle}
        </p>
      </motion.div>
    </section>
  )
}
