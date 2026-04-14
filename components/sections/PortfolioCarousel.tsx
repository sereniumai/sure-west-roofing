'use client'

import { useRef, useEffect, useCallback } from 'react'
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

// Arc shape tuning — applied per-card based on its distance from the
// viewport center. Pure 2D transforms, no CSS 3D. Cards lean INWARD
// toward the focal center (rotation sign is negated against t).
const ARC_ROTATE_DEG = 14        // max tilt at the extremes, inward
const ARC_TRANSLATE_Y = 28       // subtle quadratic drop at the edges
const ARC_SCALE_MIN = 0.88       // gentle foreshortening at the edges
const DRAG_MULTIPLIER = 1.5
const MOMENTUM_MIN = 4
const MOMENTUM_SCALE = 16

export function PortfolioCarousel({ heading, images }: PortfolioCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const isDragging = useRef(false)
  const startX = useRef(0)
  const startScrollLeft = useRef(0)
  const lastX = useRef(0)
  const velocity = useRef(0)
  const rafId = useRef<number | null>(null)

  // Pad out short image pools so the track is dense
  const cards = images.length >= 10 ? images : Array.from({ length: 12 }, (_, i) => images[i % images.length])

  const updateArcTransforms = useCallback(() => {
    const track = trackRef.current
    const wrapper = wrapperRef.current
    if (!track || !wrapper) return

    const wrapperRect = wrapper.getBoundingClientRect()
    const viewportCenter = wrapperRect.left + wrapperRect.width / 2
    const halfWidth = wrapperRect.width / 2

    const items = track.children
    for (let i = 0; i < items.length; i++) {
      const el = items[i] as HTMLElement
      const rect = el.getBoundingClientRect()
      const cardCenter = rect.left + rect.width / 2
      // Normalize: -1 at left edge, 0 at center, 1 at right edge
      const t = Math.max(-1.2, Math.min(1.2, (cardCenter - viewportCenter) / halfWidth))

      // Negative sign so cards LEAN INWARD toward the focal center.
      // A card at t = -0.8 (left of center) rotates +11.2deg → its top
      // tilts rightward, toward the middle of the arc. Books on a shelf.
      const rot = -t * ARC_ROTATE_DEG
      const dy = (t * t) * ARC_TRANSLATE_Y
      const scale = 1 - Math.abs(t) * (1 - ARC_SCALE_MIN)

      el.style.transform = `translateY(${dy.toFixed(2)}px) rotate(${rot.toFixed(2)}deg) scale(${scale.toFixed(3)})`
      // Center cards paint on top so edge cards tuck behind cleanly
      el.style.zIndex = String(Math.round(100 - Math.abs(t) * 50))
    }
  }, [])

  const scheduleUpdate = useCallback(() => {
    if (rafId.current) return
    rafId.current = requestAnimationFrame(() => {
      rafId.current = null
      updateArcTransforms()
    })
  }, [updateArcTransforms])

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Initial centering: scroll to middle of the track so users can drag either way
    const centerScroll = () => {
      const mid = (track.scrollWidth - track.clientWidth) / 2
      track.scrollLeft = mid
      updateArcTransforms()
    }

    centerScroll()

    const onScroll = () => scheduleUpdate()
    const onResize = () => {
      centerScroll()
      scheduleUpdate()
    }

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

    const onPointerUp = (e: PointerEvent) => {
      if (!isDragging.current) return
      isDragging.current = false
      track.style.cursor = 'grab'
      track.style.scrollBehavior = 'smooth'
      try {
        track.releasePointerCapture?.(e.pointerId)
      } catch {}
      if (Math.abs(velocity.current) > MOMENTUM_MIN) {
        track.scrollLeft -= velocity.current * MOMENTUM_SCALE
      }
    }

    track.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)
    track.addEventListener('pointerdown', onPointerDown)
    track.addEventListener('pointermove', onPointerMove)
    track.addEventListener('pointerup', onPointerUp)
    track.addEventListener('pointercancel', onPointerUp)
    track.addEventListener('pointerleave', onPointerUp)

    return () => {
      track.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      track.removeEventListener('pointerdown', onPointerDown)
      track.removeEventListener('pointermove', onPointerMove)
      track.removeEventListener('pointerup', onPointerUp)
      track.removeEventListener('pointercancel', onPointerUp)
      track.removeEventListener('pointerleave', onPointerUp)
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [scheduleUpdate, updateArcTransforms])

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
          <Button
            variant="primary"
            size="md"
            href="/services"
            className="!bg-[--color-near-black] !text-white hover:!bg-black hover:!shadow-[0_10px_30px_-10px_rgba(0,0,0,0.55)]"
          >
            View Projects
          </Button>
          <Button
            variant="primary"
            size="md"
            href="/gallery"
            className="!bg-[--color-near-black] !text-white hover:!bg-black hover:!shadow-[0_10px_30px_-10px_rgba(0,0,0,0.55)]"
          >
            View Gallery
          </Button>
        </div>
      </motion.div>

      {/* Full-width 2D arc carousel */}
      <div
        ref={wrapperRef}
        className="relative w-full mt-14 md:mt-24 overflow-hidden"
      >
        <div
          ref={trackRef}
          className="relative flex items-end gap-5 md:gap-6 overflow-x-auto scrollbar-hide cursor-grab select-none touch-pan-y"
          style={{
            scrollBehavior: 'smooth',
            paddingTop: '40px',
            paddingBottom: '90px',
            paddingLeft: '42vw',
            paddingRight: '42vw',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {cards.map((image, index) => (
            <div
              key={`${image.src}-${index}`}
              className="relative flex-shrink-0 overflow-hidden rounded-[--radius-md]"
              style={{
                width: 'clamp(240px, 24vw, 320px)',
                height: 'clamp(340px, 36vw, 460px)',
                transformOrigin: '50% 95%',
                willChange: 'transform',
                boxShadow:
                  '0 34px 48px -30px rgba(20,20,20,0.35), 0 12px 22px -14px rgba(20,20,20,0.18)',
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

        {/* DRAG pill indicator, bottom-center */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <div className="bg-[--color-near-black] text-white px-4 h-[36px] flex items-center gap-2 text-[11px] font-body font-bold uppercase tracking-[0.2em] rounded-[--radius-sm]">
            <span aria-hidden="true" className="opacity-80 leading-none text-[13px]">&laquo;</span>
            <span>Drag</span>
            <span aria-hidden="true" className="opacity-80 leading-none text-[13px]">&raquo;</span>
          </div>
        </div>
      </div>
    </section>
  )
}
