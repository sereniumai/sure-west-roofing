'use client'

import { useState } from 'react'
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

export function Hero({
  h1,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundVideo,
  backgroundImage,
}: HeroProps) {
  const [videoReady, setVideoReady] = useState(false)

  // Parse lines and calculate timing
  const lines = h1.split('\n')
  const totalWords = lines.reduce(
    (acc, line) => acc + line.split(/\s+/).filter(Boolean).length,
    0
  )
  const afterHeadingDelay = 0.3 + (totalWords - 1) * 0.09 + 0.35

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Background video */}
      {backgroundVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          onCanPlay={() => setVideoReady(true)}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${videoReady ? 'opacity-100' : 'opacity-0'}`}
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
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 py-32 my-auto">
        {/* Location label */}
        <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#D6AE60]">
            Roofing Contractor · Cochrane, AB
          </span>
        </motion.div>

        {/* H1 — word-by-word blur reveal */}
        <h1 className="font-display font-extrabold tracking-tight text-4xl md:text-5xl lg:text-7xl xl:text-[90px] leading-[1.05] text-white">
          {lines.map((line, lineIdx) => {
            const prevWordCount = lines
              .slice(0, lineIdx)
              .reduce(
                (acc, l) => acc + l.split(/\s+/).filter(Boolean).length,
                0
              )
            return (
              <span key={lineIdx} className="block">
                {line
                  .split(/\s+/)
                  .filter(Boolean)
                  .map((word, wordIdx) => (
                    <motion.span
                      key={wordIdx}
                      className="inline-block"
                      style={{ marginRight: '0.25em' }}
                      initial={{
                        opacity: 0,
                        filter: 'blur(12px)',
                        y: 14,
                      }}
                      animate={{
                        opacity: 1,
                        filter: 'blur(0px)',
                        y: 0,
                      }}
                      transition={{
                        duration: 0.7,
                        delay: 0.3 + (prevWordCount + wordIdx) * 0.09,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                    >
                      {word}
                    </motion.span>
                  ))}
              </span>
            )
          })}
        </h1>

        {/* Subtitle — fades in after heading completes */}
        <motion.p
          className="font-body text-white/80 text-base md:text-lg leading-relaxed mt-5 max-w-xl"
          initial={{ opacity: 0, filter: 'blur(6px)', y: 12 }}
          animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
          transition={{
            duration: 0.7,
            delay: afterHeadingDelay,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          {subtitle}
        </motion.p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-5 mt-8">
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{
              duration: 0.6,
              delay: afterHeadingDelay + 0.2,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            <Button variant="primary" size="lg" href={primaryCTA.href}>
              {primaryCTA.label}
            </Button>
          </motion.div>
          {secondaryCTA && (
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{
                duration: 0.6,
                delay: afterHeadingDelay + 0.35,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <Button variant="ghost" size="lg" href={secondaryCTA.href}>
                {secondaryCTA.label}
              </Button>
            </motion.div>
          )}
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: afterHeadingDelay + 0.6, duration: 0.8 }}
      >
        <span className="font-body text-white/50 text-xs tracking-widest uppercase">
          Scroll
        </span>
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
