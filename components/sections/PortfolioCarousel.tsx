'use client'

import { useRef, useEffect, useCallback, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface PortfolioImage {
  src: string
  alt: string
  /** CSS object-position for the <img> — use to nudge a specific photo's crop (e.g. "70% center"). Defaults to "center". */
  objectPosition?: string
}

interface PortfolioCarouselProps {
  heading?: string
  images: PortfolioImage[]
}

// Cylinder tuning — cards sit on the inside of a gentle cylinder.
// Outer cards rotate around Y (facing back toward the center axis) and
// get pulled slightly up, so the strip reads as a concave curve in 3D.
const CYL_ROTATE_Y_DEG = 34    // max rotateY at the extremes
const CYL_TRANSLATE_Z = 80     // outer cards pushed back this far (px)
const CYL_LIFT_Y = 22          // outer cards pulled up this far (px)
const CYL_SCALE_MIN = 0.94     // mild extra depth dampening
const PERSPECTIVE_PX = 1400
const FOCAL_THRESHOLD = 0.12
const DRAG_MULTIPLIER = 1.4
const MOMENTUM_MIN = 4
const MOMENTUM_SCALE = 18
const LOOP_COPIES = 3 // triple the strip so we can silently reset into the middle copy

interface CardData extends PortfolioImage {
  realIndex: number // 0..realCount-1, stable across loop copies
}

export function PortfolioCarousel({ images }: PortfolioCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const isDragging = useRef(false)
  const startX = useRef(0)
  const startScrollLeft = useRef(0)
  const lastX = useRef(0)
  const velocity = useRef(0)
  const rafId = useRef<number | null>(null)
  const scrollEndTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const [activeRealIndex, setActiveRealIndex] = useState(0)

  // Build the real card list, then clone it LOOP_COPIES times so the
  // strip can loop silently by jumping between equivalent positions.
  const realCount = Math.max(images.length, 7)
  const realCards: CardData[] = Array.from({ length: realCount }, (_, i) => ({
    ...images[i % images.length],
    realIndex: i,
  }))
  const loopedCards: CardData[] = Array.from(
    { length: realCount * LOOP_COPIES },
    (_, i) => realCards[i % realCount]
  )

  const updateArcTransforms = useCallback(() => {
    const track = trackRef.current
    const wrapper = wrapperRef.current
    if (!track || !wrapper) return

    const wrapperRect = wrapper.getBoundingClientRect()
    const viewportCenter = wrapperRect.left + wrapperRect.width / 2
    const halfWidth = wrapperRect.width / 2

    const items = track.children
    let bestT = Infinity
    let bestRealIndex = 0

    for (let i = 0; i < items.length; i++) {
      const el = items[i] as HTMLElement
      const rect = el.getBoundingClientRect()
      const cardCenter = rect.left + rect.width / 2
      const t = Math.max(
        -1.25,
        Math.min(1.25, (cardCenter - viewportCenter) / halfWidth)
      )

      if (Math.abs(t) < bestT) {
        bestT = Math.abs(t)
        bestRealIndex = i % realCount
      }

      // 3D cylinder: outer cards rotate toward center axis, push back in Z,
      // and get pulled up a touch so the strip curves like a concave shell.
      const rotY = -t * CYL_ROTATE_Y_DEG
      const tz = -Math.abs(t) * CYL_TRANSLATE_Z
      const dy = -(t * t) * CYL_LIFT_Y
      const baseScale = 1 - Math.abs(t) * (1 - CYL_SCALE_MIN)

      const focal = Math.max(0, 1 - Math.abs(t) / FOCAL_THRESHOLD)
      const scale = baseScale + focal * 0.04
      const lift = focal * -8

      const saturate = 0.82 + (1 - Math.abs(t)) * 0.18
      const brightness = 0.92 + (1 - Math.abs(t)) * 0.08

      el.style.transform = `translateY(${(dy + lift).toFixed(2)}px) translateZ(${tz.toFixed(2)}px) rotateY(${rotY.toFixed(2)}deg) scale(${scale.toFixed(3)})`
      el.style.filter = `saturate(${saturate.toFixed(3)}) brightness(${brightness.toFixed(3)})`
      el.style.zIndex = String(Math.round(100 - Math.abs(t) * 50))
    }

    setActiveRealIndex(bestRealIndex)
  }, [realCount])

  const scheduleUpdate = useCallback(() => {
    if (rafId.current) return
    rafId.current = requestAnimationFrame(() => {
      rafId.current = null
      updateArcTransforms()
    })
  }, [updateArcTransforms])

  // Silently jump the strip back into the middle copy if we've drifted
  // into the outer copies. Runs on scroll-end (not mid-scroll) so it
  // doesn't interfere with user interaction.
  const checkLoopReset = useCallback(() => {
    const track = trackRef.current
    if (!track) return
    if (isDragging.current) return

    const setWidth = track.scrollWidth / LOOP_COPIES
    const sl = track.scrollLeft

    // Keep the visible range inside the middle copy [setWidth, 2*setWidth]
    if (sl < setWidth * 0.5) {
      track.style.scrollBehavior = 'auto'
      track.scrollLeft = sl + setWidth
      requestAnimationFrame(() => {
        if (trackRef.current) trackRef.current.style.scrollBehavior = 'smooth'
        scheduleUpdate()
      })
    } else if (sl > setWidth * (LOOP_COPIES - 0.5)) {
      track.style.scrollBehavior = 'auto'
      track.scrollLeft = sl - setWidth
      requestAnimationFrame(() => {
        if (trackRef.current) trackRef.current.style.scrollBehavior = 'smooth'
        scheduleUpdate()
      })
    }
  }, [scheduleUpdate])

  // Scroll to a specific real index, choosing the nearest copy so we
  // never have to traverse the whole strip.
  const snapToReal = useCallback(
    (realIdx: number, smooth = true) => {
      const track = trackRef.current
      const wrapper = wrapperRef.current
      if (!track || !wrapper) return

      const wrapperRect = wrapper.getBoundingClientRect()
      const viewportCenter = wrapperRect.left + wrapperRect.width / 2

      // Find the copy of realIdx whose card is closest to the current center
      let bestEl: HTMLElement | null = null
      let bestDist = Infinity
      for (let i = 0; i < track.children.length; i++) {
        if (i % realCount !== realIdx) continue
        const el = track.children[i] as HTMLElement
        const rect = el.getBoundingClientRect()
        const c = rect.left + rect.width / 2
        const d = Math.abs(c - viewportCenter)
        if (d < bestDist) {
          bestDist = d
          bestEl = el
        }
      }
      if (!bestEl) return

      const targetRect = bestEl.getBoundingClientRect()
      const targetCenter = targetRect.left + targetRect.width / 2
      const delta = targetCenter - viewportCenter

      track.style.scrollBehavior = smooth ? 'smooth' : 'auto'
      track.scrollLeft += delta
    },
    [realCount]
  )

  const handleNav = useCallback(
    (dir: 1 | -1) => {
      const next = (activeRealIndex + dir + realCount) % realCount
      snapToReal(next)
    },
    [activeRealIndex, realCount, snapToReal]
  )

  useEffect(() => {
    const track = trackRef.current
    if (!track) return

    // Start in the middle of the looped strip so you can drag either
    // direction without hitting an edge.
    const centerScroll = () => {
      const setWidth = track.scrollWidth / LOOP_COPIES
      track.style.scrollBehavior = 'auto'
      track.scrollLeft = setWidth + (track.clientWidth) * 0 // middle copy start
      // Update to land on the first card of the middle copy
      requestAnimationFrame(() => {
        if (trackRef.current) trackRef.current.style.scrollBehavior = 'smooth'
        updateArcTransforms()
      })
    }

    centerScroll()

    const onScroll = () => {
      scheduleUpdate()
      if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current)
      scrollEndTimer.current = setTimeout(() => {
        checkLoopReset()
      }, 140)
    }

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
      if (scrollEndTimer.current) clearTimeout(scrollEndTimer.current)
    }
  }, [checkLoopReset, scheduleUpdate, updateArcTransforms])

  return (
    <section
      className="relative overflow-hidden bg-[#F8F8F8]"
      style={{ padding: 'var(--section-pad-top) 0 var(--section-pad-bot)' }}
    >
      {/* Subtle paper-grain texture */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          background:
            'radial-gradient(1200px 600px at 20% 10%, rgba(212,175,96,0.08), transparent 60%), radial-gradient(900px 500px at 85% 85%, rgba(26,22,18,0.05), transparent 60%)',
        }}
      />

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
        {/* Chip-style eyebrow, matches the hero credential pills */}
        <span
          className="inline-flex items-center h-8 md:h-9 px-3 md:px-4 text-[13px] md:text-[14px] font-body font-bold uppercase tracking-[0.12em] rounded-[--radius-sm] mb-6"
          style={{
            background: 'rgba(0,0,0,0.04)',
            color: 'var(--color-near-black)',
          }}
        >
          Our Work
        </span>

        <h2
          className="font-display font-semibold leading-[1.05] text-[--color-near-black] max-w-[980px]"
          style={{
            fontSize: 'clamp(30px, 4.2vw, 60px)',
            letterSpacing: '-0.035em',
          }}
        >
          Roofing Projects Completed Across Cochrane, Calgary &amp; Canmore
        </h2>

        <p
          className="mt-6 md:mt-7 max-w-[640px] text-[--color-near-black]/70 leading-[1.7]"
          style={{
            fontSize: '16px',
            fontFamily: "'Inter', system-ui, sans-serif",
            fontWeight: 400,
          }}
        >
          Every roof in our gallery was completed by our in-house Red Seal Journeyman team. No subcontractors. No compromises.
        </p>

        <div className="flex items-center mt-8 md:mt-10">
          <Button variant="primary" size="md" href="/gallery">
            View Gallery
          </Button>
        </div>
      </motion.div>

      {/* Full-width looping arc carousel */}
      <div ref={wrapperRef} className="relative w-full mt-14 md:mt-20 overflow-hidden">
        <div
          ref={trackRef}
          className="relative flex items-end gap-5 md:gap-7 overflow-x-auto scrollbar-hide cursor-grab select-none touch-pan-y"
          style={{
            scrollBehavior: 'smooth',
            paddingTop: '50px',
            paddingBottom: '110px',
            paddingLeft: '42vw',
            paddingRight: '42vw',
            WebkitOverflowScrolling: 'touch',
            perspective: `${PERSPECTIVE_PX}px`,
            perspectiveOrigin: '50% 50%',
          }}
        >
          {loopedCards.map((card, index) => {
            const isActive = index % realCount === activeRealIndex
            return (
              <div
                key={index}
                className="group relative flex-shrink-0 rounded-[--radius-md]"
                style={{
                  width: 'clamp(260px, 25vw, 340px)',
                  height: 'clamp(360px, 38vw, 480px)',
                  transformOrigin: '50% 50%',
                  transformStyle: 'preserve-3d',
                  backfaceVisibility: 'hidden',
                  willChange: 'transform, filter',
                  boxShadow: isActive
                    ? '0 40px 60px -30px rgba(20,20,20,0.45), 0 18px 28px -16px rgba(20,20,20,0.22), 0 0 0 1px rgba(212,175,96,0.6)'
                    : '0 34px 48px -30px rgba(20,20,20,0.32), 0 12px 22px -14px rgba(20,20,20,0.16)',
                  transition: 'box-shadow 0.45s cubic-bezier(0.16, 1, 0.3, 1)',
                }}
              >
                <div className="absolute inset-0 overflow-hidden rounded-[--radius-md]">
                  <img
                    src={card.src}
                    alt={card.alt}
                    className="w-full h-full object-cover pointer-events-none"
                    style={{ objectPosition: card.objectPosition ?? 'center' }}
                    draggable={false}
                  />
                </div>

                {!isActive && (
                  <button
                    type="button"
                    onClick={() => snapToReal(card.realIndex)}
                    aria-label={`View project ${card.realIndex + 1}`}
                    className="absolute inset-0 rounded-[--radius-md] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF60]"
                  />
                )}
              </div>
            )
          })}
        </div>

        {/* Navigation row */}
        <div className="relative flex items-center justify-center gap-5 mt-4 md:mt-6">
          <button
            type="button"
            onClick={() => handleNav(-1)}
            aria-label="Previous project"
            className="group/nav flex items-center justify-center w-11 h-11 rounded-full border border-[--color-near-black]/15 bg-white/60 backdrop-blur-sm transition-all duration-300 hover:bg-[--color-near-black] hover:border-transparent"
          >
            <ChevronLeft
              className="w-5 h-5 text-[--color-near-black] transition-colors duration-300 group-hover/nav:text-white"
              strokeWidth={2.2}
            />
          </button>

          <div className="flex items-center gap-1.5 px-2">
            {realCards.map((_, i) => {
              const isOn = i === activeRealIndex
              return (
                <button
                  key={i}
                  type="button"
                  onClick={() => snapToReal(i)}
                  aria-label={`Jump to project ${i + 1}`}
                  className="relative h-[3px] rounded-full transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                  style={{
                    width: isOn ? 28 : 14,
                    backgroundColor: isOn ? '#1A1612' : 'rgba(26,22,18,0.18)',
                  }}
                />
              )
            })}
          </div>

          <button
            type="button"
            onClick={() => handleNav(1)}
            aria-label="Next project"
            className="group/nav flex items-center justify-center w-11 h-11 rounded-full border border-[--color-near-black]/15 bg-white/60 backdrop-blur-sm transition-all duration-300 hover:bg-[--color-near-black] hover:border-transparent"
          >
            <ChevronRight
              className="w-5 h-5 text-[--color-near-black] transition-colors duration-300 group-hover/nav:text-white"
              strokeWidth={2.2}
            />
          </button>
        </div>

      </div>
    </section>
  )
}
