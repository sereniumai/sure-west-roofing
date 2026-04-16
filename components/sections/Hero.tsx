'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { EASE_OUT } from '@/lib/animations'

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
  const videoARef = useRef<HTMLVideoElement>(null)
  const videoBRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (!backgroundVideo) return
    const a = videoARef.current
    const b = videoBRef.current
    if (!a || !b) return

    const OVERLAP = 1.2
    let active: HTMLVideoElement = a
    let inactive: HTMLVideoElement = b
    let handoffArmed = true

    a.style.opacity = '1'
    b.style.opacity = '0'
    b.currentTime = 0
    b.pause()

    const swapRoles = () => {
      ;[active, inactive] = [inactive, active]
      handoffArmed = true
    }

    const onTimeUpdate = (e: Event) => {
      const v = e.currentTarget as HTMLVideoElement
      if (v !== active) return
      const duration = v.duration
      if (!isFinite(duration) || duration <= OVERLAP + 0.2) return
      const remaining = duration - v.currentTime

      if (handoffArmed && remaining <= OVERLAP) {
        handoffArmed = false
        inactive.currentTime = 0
        const p = inactive.play()
        if (p) p.catch(() => {})
      }

      if (remaining <= OVERLAP) {
        const progress = Math.max(0, Math.min(1, (OVERLAP - remaining) / OVERLAP))
        active.style.opacity = String(1 - progress)
        inactive.style.opacity = String(progress)
      } else {
        active.style.opacity = '1'
        inactive.style.opacity = '0'
      }
    }

    const onEnded = (e: Event) => {
      const v = e.currentTarget as HTMLVideoElement
      if (v !== active) return
      active.style.opacity = '0'
      inactive.style.opacity = '1'
      active.currentTime = 0
      active.pause()
      swapRoles()
    }

    a.addEventListener('timeupdate', onTimeUpdate)
    b.addEventListener('timeupdate', onTimeUpdate)
    a.addEventListener('ended', onEnded)
    b.addEventListener('ended', onEnded)

    return () => {
      a.removeEventListener('timeupdate', onTimeUpdate)
      b.removeEventListener('timeupdate', onTimeUpdate)
      a.removeEventListener('ended', onEnded)
      b.removeEventListener('ended', onEnded)
    }
  }, [backgroundVideo])

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      {/* ── Video / image background ─────────────────────────────── */}
      <div className="absolute inset-0 z-0">
        {/* Static image for mobile (no video download) + desktop video */}
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            sizes="100vw"
            className={`object-cover ${backgroundVideo ? 'md:hidden' : ''}`}
            style={{ objectPosition: 'center 30%' }}
          />
        )}
        {backgroundVideo && (
          <>
            <video
              ref={videoARef}
              src={backgroundVideo}
              autoPlay
              muted
              playsInline
              preload="metadata"
              className="absolute inset-0 w-full h-full object-cover hidden md:block"
              style={{ objectPosition: 'center 30%', opacity: 1, transition: 'opacity 60ms linear' }}
            />
            <video
              ref={videoBRef}
              src={backgroundVideo}
              muted
              playsInline
              preload="metadata"
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover hidden md:block"
              style={{ objectPosition: 'center 30%', opacity: 0, transition: 'opacity 60ms linear' }}
            />
          </>
        )}

        {/* Mobile overlay: vertical, more even & darker for legibility */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              'linear-gradient(180deg, rgba(44,71,102,0.55) 0%, rgba(44,71,102,0.7) 50%, rgba(44,71,102,0.85) 100%)',
          }}
        />
        {/* Desktop overlay: horizontal, fading to right */}
        <div
          className="absolute inset-0 hidden md:block"
          style={{
            background:
              'linear-gradient(to right, rgba(44,71,102,0.85) 0%, rgba(44,71,102,0.5) 60%, rgba(44,71,102,0.2) 100%)',
          }}
        />
      </div>

      {/* ── Content ──────────────────────────────────────────────── */}
      <div className="relative z-10 w-full max-w-[1320px] mx-auto pt-[100px] sm:pt-[120px] md:pt-[140px] pb-[80px] sm:pb-[100px] md:pb-[160px]">
        {/* Giant headline — NO opacity animation (blocks LCP) */}
        <motion.h1
          className="font-display font-semibold leading-[0.95] md:leading-none text-white"
          style={{
            fontSize: 'var(--text-hero)',
            letterSpacing: '-0.044em',
          }}
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: EASE_OUT }}
        >
          {h1.split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </motion.h1>

        {/* Subtitle — visible on first paint for good LCP */}
        <motion.p
          className="mt-6 leading-relaxed max-w-[640px] text-left text-[16px] md:text-[18px] text-white/90"
          style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontWeight: 400 }}
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: EASE_OUT }}
        >
          {subtitle}
        </motion.p>

        {/* CTAs */}
        <motion.div
          className="flex flex-row flex-nowrap items-center gap-2 sm:gap-4 w-full lg:w-auto mt-6"
          initial={{ y: 16 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: EASE_OUT }}
        >
          <Button
            variant="secondary"
            size="lg"
            href={primaryCTA.href}
            className="flex-1 lg:flex-none !h-[44px] md:!h-[56px] !px-3 md:!px-[26px] !text-[12px] md:!text-[16px] justify-center whitespace-nowrap [&_.btn-arrow]:hidden md:[&_.btn-arrow]:inline-flex"
          >
            {primaryCTA.label}
          </Button>
          {secondaryCTA && (
            <Button
              variant="ghost"
              size="lg"
              href={secondaryCTA.href}
              className="flex-1 lg:flex-none !h-[44px] md:!h-[56px] !px-3 md:!px-[26px] !text-[12px] md:!text-[16px] justify-center whitespace-nowrap [&_.btn-arrow]:hidden md:[&_.btn-arrow]:inline-flex"
            >
              {secondaryCTA.label}
            </Button>
          )}
        </motion.div>
      </div>

      {/* ── Scroll down indicator ────────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2, ease: EASE_OUT }}
      >
        <span className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-5 h-5 text-white/45" strokeWidth={1.5} />
        </motion.div>
      </motion.div>
    </section>
  )
}
