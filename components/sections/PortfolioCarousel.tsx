'use client'

import { useRef, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'

interface PortfolioImage {
  src: string
  alt: string
}

interface PortfolioCarouselProps {
  heading: string
  images: PortfolioImage[]
}

const DRAG_MULTIPLIER = 1.6
const MOMENTUM_THRESHOLD = 5
const MOMENTUM_SCALE = 14

export function PortfolioCarousel({ heading, images }: PortfolioCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const startX = useRef(0)
  const startScrollLeft = useRef(0)
  const lastX = useRef(0)
  const velocity = useRef(0)

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    const onPointerDown = (e: PointerEvent) => {
      isDragging.current = true
      startX.current = e.pageX - track.offsetLeft
      startScrollLeft.current = track.scrollLeft
      lastX.current = e.pageX
      velocity.current = 0
      track.style.cursor = 'grabbing'
      track.style.scrollBehavior = 'auto'
      track.setPointerCapture?.(e.pointerId)
    }

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging.current) return
      e.preventDefault()

      const x = e.pageX - track.offsetLeft
      const walk = (x - startX.current) * DRAG_MULTIPLIER
      velocity.current = e.pageX - lastX.current
      lastX.current = e.pageX

      track.scrollLeft = startScrollLeft.current - walk
    }

    const endDrag = (e: PointerEvent) => {
      if (!isDragging.current) return
      isDragging.current = false
      track.style.cursor = 'grab'
      track.style.scrollBehavior = 'smooth'
      try {
        track.releasePointerCapture?.(e.pointerId)
      } catch {}

      // Momentum: one-shot scroll nudge in drag direction, CSS smooth-scroll
      // interpolates to the target.
      if (Math.abs(velocity.current) > MOMENTUM_THRESHOLD) {
        track.scrollLeft -= velocity.current * MOMENTUM_SCALE
      }
    }

    track.addEventListener('pointerdown', onPointerDown)
    track.addEventListener('pointermove', onPointerMove)
    track.addEventListener('pointerup', endDrag)
    track.addEventListener('pointercancel', endDrag)
    track.addEventListener('pointerleave', endDrag)

    return () => {
      track.removeEventListener('pointerdown', onPointerDown)
      track.removeEventListener('pointermove', onPointerMove)
      track.removeEventListener('pointerup', endDrag)
      track.removeEventListener('pointercancel', endDrag)
      track.removeEventListener('pointerleave', endDrag)
    }
  }, [])

  // Duplicate images for a denser strip so short image sets still feel full
  const cards = images.length >= 8 ? images : [...images, ...images, ...images].slice(0, 12)

  return (
    <section
      className="bg-[#F8F8F8] overflow-hidden relative"
      style={{ padding: 'var(--section-pad-top) 0 var(--section-pad-bot)' }}
    >
      {/* Centered header */}
      <motion.div
        className="relative flex flex-col items-center text-center"
        style={{
          paddingLeft: 'var(--section-pad-x)',
          paddingRight: 'var(--section-pad-x)',
        }}
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
      >
        <span className="inline-flex items-center gap-3 text-[11px] font-body font-bold uppercase tracking-[0.22em] text-[#B8943F] mb-6">
          <span className="inline-block w-8 h-px bg-[#D4AF60]/70" />
          Our Portfolio
          <span className="inline-block w-8 h-px bg-[#D4AF60]/70" />
        </span>

        <h2
          className="font-display font-semibold leading-[1.02] text-[--color-near-black] max-w-[1000px]"
          style={{
            fontSize: 'clamp(34px, 5vw, 72px)',
            letterSpacing: '-0.04em',
          }}
        >
          {heading.split('\n').map((line, i) => (
            <span key={i}>
              {i > 0 && <br />}
              {line}
            </span>
          ))}
        </h2>

        <div className="flex items-center gap-3 md:gap-4 mt-8 md:mt-10">
          <Button variant="primary" size="md" href="/services">
            View Projects
          </Button>
          <Button variant="outline" size="md" href="/gallery">
            View Gallery
          </Button>
        </div>
      </motion.div>

      {/* Full-width drag carousel */}
      <div className="relative w-full mt-12 md:mt-20">
        <div
          ref={trackRef}
          className="carousel-track flex gap-4 md:gap-5 overflow-x-auto scrollbar-hide cursor-grab select-none touch-pan-y pb-2"
          style={{
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
            paddingLeft: 'var(--section-pad-x)',
            paddingRight: 'var(--section-pad-x)',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {cards.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative flex-shrink-0 overflow-hidden rounded-[--radius-md] shadow-[0_30px_50px_-28px_rgba(0,0,0,0.35)] ring-1 ring-black/5"
              style={{
                scrollSnapAlign: 'center',
                width: 'clamp(240px, 26vw, 320px)',
                height: 'clamp(340px, 42vw, 460px)',
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* Drag indicator pill */}
        <div className="absolute bottom-6 right-6 md:right-10 z-20 pointer-events-none">
          <div className="bg-[--color-near-black] text-white px-4 h-[34px] flex items-center gap-2 text-[11px] font-body font-bold uppercase tracking-[0.18em] rounded-[--radius-sm]">
            <span aria-hidden="true" className="opacity-80">&laquo;</span>
            <span>Drag</span>
            <span aria-hidden="true" className="opacity-80">&raquo;</span>
          </div>
        </div>
      </div>
    </section>
  )
}
