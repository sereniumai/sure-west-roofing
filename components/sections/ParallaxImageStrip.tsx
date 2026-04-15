'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxImageStripProps {
  src: string
  alt: string
  video?: string
}

export function ParallaxImageStrip({
  src,
  alt,
  video,
}: ParallaxImageStripProps) {
  const ref = useRef<HTMLDivElement>(null)
  const videoARef = useRef<HTMLVideoElement>(null)
  const videoBRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // Gentle parallax, motion content is taller than the container, shifts ±120px
  const y = useTransform(scrollYProgress, [0, 1], ['120px', '-120px'])

  // Seamless cinematic loop using a dual-video crossfade.
  // Both videos share the same source. While video A plays, it fades
  // into video B (rewound to 0) during the final OVERLAP seconds,
  // then B becomes the active track and the process reverses. This
  // completely hides the HTMLMediaElement loop seam and gives a
  // premium, uninterrupted motion feel.
  useEffect(() => {
    if (!video) return

    const a = videoARef.current
    const b = videoBRef.current
    if (!a || !b) return

    const OVERLAP = 1.2 // seconds, length of the crossfade window
    let active: HTMLVideoElement = a
    let inactive: HTMLVideoElement = b
    let handoffArmed = true

    // Initial state, A on top and visible, B primed and hidden
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
        // Kick off the inactive track from the start
        inactive.currentTime = 0
        const playPromise = inactive.play()
        if (playPromise) playPromise.catch(() => {})
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
      // Snap the faded-out track back to the start for its next turn
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
  }, [video])

  return (
    <section
      ref={ref}
      className="relative overflow-visible z-[2]"
      style={{ height: '0px' }}
    >
      {/* Outer positioner — full-bleed absolute; inner caps at the Hero's
          1320px container so the strip lines up with the headline above. */}
      <div
        className="absolute left-0 right-0 top-[-80px] md:top-[-200px] h-auto md:h-[650px]"
        style={{
          paddingLeft: 'var(--section-pad-x)',
          paddingRight: 'var(--section-pad-x)',
        }}
      >
        <div className="relative mx-auto w-full max-w-[1320px] h-auto md:h-[650px] aspect-video md:aspect-auto overflow-hidden rounded-[--radius-lg]">
        <motion.div
          className="w-full h-full relative"
          style={{
            height: 'calc(100% + 240px)',
            marginTop: '-120px',
            y,
          }}
        >
          {video ? (
            <>
              <video
                ref={videoARef}
                src={video}
                autoPlay
                muted
                playsInline
                preload="auto"
                aria-label={alt}
                className="absolute inset-0 w-full h-full object-cover bg-black"
                style={{
                  objectPosition: 'center 30%',
                  opacity: 1,
                  transition: 'opacity 60ms linear',
                  willChange: 'opacity',
                }}
              />
              <video
                ref={videoBRef}
                src={video}
                muted
                playsInline
                preload="auto"
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover bg-black"
                style={{
                  objectPosition: 'center 30%',
                  opacity: 0,
                  transition: 'opacity 60ms linear',
                  willChange: 'opacity',
                }}
              />
              {/* Subtle top and bottom vignette for cinematic framing */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0) 18%, rgba(0,0,0,0) 82%, rgba(0,0,0,0.25) 100%)',
                }}
              />
            </>
          ) : (
            <img
              src={src}
              alt={alt}
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 30%' }}
              draggable={false}
            />
          )}
        </motion.div>
        </div>
      </div>
    </section>
  )
}
