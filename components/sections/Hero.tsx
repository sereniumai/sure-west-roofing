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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background video */}
      {backgroundVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
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
        className="relative z-10 w-full max-w-6xl mx-auto px-6 py-32 my-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Location label */}
        <motion.div
          className="mb-4"
          variants={itemVariants}
        >
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#D6AE60]">
            Red Seal Certified · Cochrane, Alberta
          </span>
        </motion.div>

        {/* H1 */}
        <motion.h1
          className="font-display font-extrabold tracking-tight text-4xl md:text-5xl lg:text-7xl xl:text-[90px] leading-[1.05] text-white"
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
          className="font-body text-white/80 text-base md:text-lg leading-relaxed mt-5 max-w-xl"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-5 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <Button variant="primary" size="lg" href={primaryCTA.href}>
              {primaryCTA.label}
            </Button>
          </motion.div>
          {secondaryCTA && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, delay: 1.0, ease: [0.16, 1, 0.3, 1] }}
            >
              <Button variant="ghost" size="lg" href={secondaryCTA.href}>
                {secondaryCTA.label}
              </Button>
            </motion.div>
          )}
        </div>


      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <span className="font-body text-white/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          className="w-5 h-8 rounded-full border-2 border-white/30 flex justify-center pt-1.5"
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <div className="w-1 h-1.5 rounded-full bg-white/60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
