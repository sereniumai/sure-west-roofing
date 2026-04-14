'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxImageStripProps {
  src: string
  alt: string
  video?: string
  poster?: string
}

export function ParallaxImageStrip({
  src,
  alt,
  video,
  poster,
}: ParallaxImageStripProps) {
  const ref = useRef<HTMLDivElement>(null)
  const videoRef = useRef<HTMLVideoElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // ~2× parallax velocity — media moves at 1.5× rate relative to container
  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-200px'])

  // Smooth crossfade at loop boundary — fade out in the last FADE seconds
  // and fade back in at the start of each loop.
  useEffect(() => {
    const v = videoRef.current
    if (!v) return

    const FADE = 0.7 // seconds

    const handleTimeUpdate = () => {
      const duration = v.duration
      if (!isFinite(duration) || duration <= FADE * 2) return
      const t = v.currentTime
      let opacity = 1
      if (t > duration - FADE) {
        opacity = Math.max(0, (duration - t) / FADE)
      } else if (t < FADE) {
        opacity = Math.min(1, t / FADE)
      }
      v.style.opacity = String(opacity)
    }

    v.addEventListener('timeupdate', handleTimeUpdate)
    return () => v.removeEventListener('timeupdate', handleTimeUpdate)
  }, [video])

  return (
    <section
      ref={ref}
      className="relative bg-black overflow-visible z-[2]"
      style={{ height: '400px', marginTop: '-150px' }}
    >
      {/* Overflow container — matches hero 1280px cap, centered */}
      <div
        className="absolute overflow-hidden left-1/2 -translate-x-1/2"
        style={{
          top: '0px',
          width: 'min(1280px, calc(100% - 100px))',
          height: '400px',
        }}
      >
        <motion.div
          className="w-full"
          style={{
            height: '848px',
            y,
          }}
        >
          {video ? (
            <video
              ref={videoRef}
              src={video}
              poster={poster ?? src}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label={alt}
              className="w-full h-full object-cover"
              style={{
                objectPosition: 'center 30%',
                transition: 'opacity 120ms linear',
              }}
            />
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
    </section>
  )
}
