'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
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

interface NetworkInformation {
  saveData?: boolean
  effectiveType?: string
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

  // Deferred video state.
  // - videoEnabled: true after we have decided this device should load the video.
  //   We defer this decision until the browser is idle so the video never
  //   competes with the LCP (which stays the poster image on every viewport).
  // - videoVisible: true once the video element has actually started painting,
  //   at which point we cross-fade away the poster image.
  const [videoEnabled, setVideoEnabled] = useState(false)
  const [videoVisible, setVideoVisible] = useState(false)

  // Phase 1: decide whether to load video at all, then defer until idle.
  useEffect(() => {
    if (!backgroundVideo) return
    if (typeof window === 'undefined') return

    // Respect explicit user preferences and constrained networks.
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const conn = (navigator as unknown as { connection?: NetworkInformation }).connection
    if (conn?.saveData) return
    if (conn?.effectiveType && ['slow-2g', '2g'].includes(conn.effectiveType)) return

    // Defer until the browser is idle. Falls back to a 1.5s timeout when
    // requestIdleCallback is unavailable (Safari).
    type IdleAPI = (cb: () => void, opts?: { timeout: number }) => number
    const ric = (window as unknown as { requestIdleCallback?: IdleAPI }).requestIdleCallback
    const cic = (window as unknown as { cancelIdleCallback?: (id: number) => void })
      .cancelIdleCallback

    if (ric) {
      const id = ric(() => setVideoEnabled(true), { timeout: 2500 })
      return () => cic?.(id)
    }
    const id = window.setTimeout(() => setVideoEnabled(true), 1500)
    return () => window.clearTimeout(id)
  }, [backgroundVideo])

  // Phase 2: once enabled, hook up the cross-fade loop and start playback.
  useEffect(() => {
    if (!videoEnabled || !backgroundVideo) return
    const a = videoARef.current
    const b = videoBRef.current
    if (!a || !b) return

    const OVERLAP = 1.2
    let active: HTMLVideoElement = a
    let inactive: HTMLVideoElement = b
    let handoffArmed = true
    let lastOpacityA = 1
    let lastOpacityB = 0

    const setOpacity = (el: HTMLVideoElement, value: number) => {
      const last = el === a ? lastOpacityA : lastOpacityB
      if (Math.abs(last - value) < 0.02) return
      el.style.opacity = String(value)
      if (el === a) lastOpacityA = value
      else lastOpacityB = value
    }

    setOpacity(a, 1)
    setOpacity(b, 0)
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
        setOpacity(active, 1 - progress)
        setOpacity(inactive, progress)
      }
    }

    const onEnded = (e: Event) => {
      const v = e.currentTarget as HTMLVideoElement
      if (v !== active) return
      setOpacity(active, 0)
      setOpacity(inactive, 1)
      active.currentTime = 0
      active.pause()
      swapRoles()
    }

    // Cross-fade away the poster image once the video has its first frame.
    const onFirstPaint = () => setVideoVisible(true)

    a.addEventListener('timeupdate', onTimeUpdate)
    b.addEventListener('timeupdate', onTimeUpdate)
    a.addEventListener('ended', onEnded)
    b.addEventListener('ended', onEnded)
    a.addEventListener('playing', onFirstPaint, { once: true })

    // Manual load + play. We left preload="none" on the elements so nothing
    // was fetched at mount; this is the actual fetch trigger.
    a.load()
    const playPromise = a.play()
    if (playPromise) {
      playPromise.catch(() => {
        // If autoplay is blocked, stay on poster image quietly.
      })
    }

    return () => {
      a.removeEventListener('timeupdate', onTimeUpdate)
      b.removeEventListener('timeupdate', onTimeUpdate)
      a.removeEventListener('ended', onEnded)
      b.removeEventListener('ended', onEnded)
      a.removeEventListener('playing', onFirstPaint)
    }
  }, [videoEnabled, backgroundVideo])

  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-brand-navy"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      {/* ── Background stack ─────────────────────────────────────────
          Layer 1: poster image — LCP element, present on every viewport.
          Layer 2: dual videos for seamless cross-fade looping (optional).
          Layer 3: gradient overlays for legibility (mobile vs desktop). */}
      <div className="absolute inset-0 z-0">
        {backgroundImage && (
          <Image
            src={backgroundImage}
            alt=""
            fill
            priority
            fetchPriority="high"
            sizes="100vw"
            quality={60}
            className="object-cover transition-opacity duration-700 ease-out"
            style={{
              objectPosition: 'center 30%',
              opacity: videoVisible ? 0 : 1,
            }}
          />
        )}

        {backgroundVideo && (
          <>
            <video
              ref={videoARef}
              src={videoEnabled ? backgroundVideo : undefined}
              muted
              loop={false}
              playsInline
              preload="none"
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                objectPosition: 'center 30%',
                opacity: videoVisible ? 1 : 0,
                transition: 'opacity 700ms cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            />
            <video
              ref={videoBRef}
              src={videoEnabled ? backgroundVideo : undefined}
              muted
              playsInline
              preload="none"
              aria-hidden="true"
              className="absolute inset-0 w-full h-full object-cover"
              style={{
                objectPosition: 'center 30%',
                opacity: 0,
                transition: 'opacity 60ms linear',
              }}
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
        {/* Giant headline — rendered statically, this is the LCP element */}
        <h1
          className="font-display font-semibold leading-[0.95] md:leading-none text-white"
          style={{
            fontSize: 'var(--text-hero)',
            letterSpacing: '-0.044em',
          }}
        >
          {h1.split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h1>

        {/* Subtitle — static render, no hydration-delayed transform */}
        <p
          className="mt-6 leading-relaxed max-w-[640px] text-left text-[16px] md:text-[18px] text-white/90"
          style={{ fontFamily: "var(--font-inter), system-ui, sans-serif", fontWeight: 400 }}
        >
          {subtitle}
        </p>

        {/* CTAs — static render */}
        <div className="flex flex-row flex-nowrap items-center gap-2 sm:gap-4 w-full lg:w-auto mt-6">
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
        </div>
      </div>

      {/* ── Scroll down indicator — decorative, below the fold ──── */}
      <div
        className="absolute bottom-8 md:bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 hero-scroll-hint"
      >
        <span className="font-body text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
          Scroll
        </span>
        <ChevronDown className="w-5 h-5 text-white/45 hero-scroll-bounce" strokeWidth={1.5} />
      </div>
    </section>
  )
}
