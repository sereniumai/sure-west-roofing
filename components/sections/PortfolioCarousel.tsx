'use client'

import { useRef, useCallback, useEffect, useState } from 'react'
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

// Drag tuning
const FRICTION = 0.94           // inertia decay per frame
const MIN_VELOCITY = 0.01       // degrees/frame floor before stop
const ANGLE_STEP = 18           // degrees between adjacent panels

// Viewport-adaptive cylinder geometry
type Geo = { radius: number; panelW: number; panelH: number }

function computeGeo(w: number): Geo {
  if (w < 640) return { radius: 560, panelW: 170, panelH: 240 }
  if (w < 1024) return { radius: 820, panelW: 220, panelH: 310 }
  if (w < 1440) return { radius: 1040, panelW: 260, panelH: 370 }
  return { radius: 1180, panelW: 290, panelH: 410 }
}

export function PortfolioCarousel({ heading, images }: PortfolioCarouselProps) {
  const sceneRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const isDragging = useRef(false)
  const lastX = useRef(0)
  const velocity = useRef(0)
  const rotation = useRef(0)
  const rafId = useRef<number | null>(null)
  const radiusRef = useRef(1040)

  const [geometry, setGeometry] = useState<Geo>(() => ({
    radius: 1040,
    panelW: 260,
    panelH: 370,
  }))

  useEffect(() => {
    const compute = () => {
      const g = computeGeo(window.innerWidth)
      radiusRef.current = g.radius
      setGeometry(g)
    }
    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

  // Enough panels to fill a full circle. Images cycle through slots.
  const PANEL_COUNT = Math.round(360 / ANGLE_STEP)
  const panels = Array.from({ length: PANEL_COUNT }, (_, i) => ({
    angle: i * ANGLE_STEP,
    image: images[i % images.length],
  }))

  const applyRotation = useCallback((deg: number) => {
    rotation.current = deg
    if (sceneRef.current) {
      sceneRef.current.style.transform = `rotateY(${deg}deg)`
    }
  }, [])

  // Convert horizontal pixel movement to rotation so the panel under
  // the pointer tracks your finger along the surface of the cylinder.
  // arc length = radius × angle_rad  →  angle_deg = dx × 180 / (π × radius)
  const pxToDeg = useCallback((dx: number) => {
    return (dx * 180) / (Math.PI * radiusRef.current)
  }, [])

  const inertiaLoop = useCallback(() => {
    if (Math.abs(velocity.current) < MIN_VELOCITY) {
      velocity.current = 0
      rafId.current = null
      return
    }
    velocity.current *= FRICTION
    applyRotation(rotation.current + velocity.current)
    rafId.current = requestAnimationFrame(inertiaLoop)
  }, [applyRotation])

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true
    lastX.current = e.clientX
    velocity.current = 0
    if (rafId.current) {
      cancelAnimationFrame(rafId.current)
      rafId.current = null
    }
    ;(e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId)
  }, [])

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return
      const dx = e.clientX - lastX.current
      // Drag right rotates cylinder so panels on the right come toward you
      // (negative rotateY on a right-handed Y axis). This matches the
      // "scroll right → content moves right" mental model from the Rooferio
      // reference, where dragging the DRAG pill right slides the arc right.
      const delta = pxToDeg(dx)
      velocity.current = delta
      applyRotation(rotation.current + delta)
      lastX.current = e.clientX
    },
    [applyRotation, pxToDeg]
  )

  const handlePointerUp = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return
      isDragging.current = false
      try {
        ;(e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId)
      } catch {}
      if (!rafId.current) rafId.current = requestAnimationFrame(inertiaLoop)
    },
    [inertiaLoop]
  )

  useEffect(() => {
    applyRotation(rotation.current)
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [applyRotation])

  return (
    <section
      className="bg-[#0E0E0E] text-white overflow-hidden relative"
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
        <span className="inline-flex items-center gap-3 text-[11px] font-body font-bold uppercase tracking-[0.22em] text-[#D4AF60] mb-6">
          <span className="inline-block w-8 h-px bg-[#D4AF60]/60" />
          Our Portfolio
          <span className="inline-block w-8 h-px bg-[#D4AF60]/60" />
        </span>

        <h2
          className="font-display font-semibold leading-[1.02] text-white max-w-[1000px]"
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

        <div className="flex items-center mt-8 md:mt-10">
          <Button variant="primary" size="md" href="/services">
            View Projects
          </Button>
        </div>
      </motion.div>

      {/* Full-width cylindrical drag carousel */}
      <div
        ref={wrapperRef}
        className="relative w-full cursor-grab active:cursor-grabbing select-none touch-none mt-12 md:mt-20"
        style={{
          height: `${geometry.panelH + 60}px`,
          perspective: '1800px',
          perspectiveOrigin: '50% 45%',
        }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div
          ref={sceneRef}
          className="absolute inset-0"
          style={{
            transformStyle: 'preserve-3d',
            transform: `rotateY(0deg)`,
            willChange: 'transform',
          }}
        >
          {panels.map((panel, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 overflow-hidden rounded-[--radius-md]"
              style={{
                width: `${geometry.panelW}px`,
                height: `${geometry.panelH}px`,
                marginLeft: `-${geometry.panelW / 2}px`,
                marginTop: `-${geometry.panelH / 2}px`,
                transform: `rotateY(${panel.angle}deg) translateZ(${geometry.radius}px)`,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                boxShadow:
                  '0 30px 50px -24px rgba(0,0,0,0.38), 0 0 0 1px rgba(0,0,0,0.04)',
              }}
            >
              <img
                src={panel.image.src}
                alt={panel.image.alt}
                className="w-full h-full object-cover pointer-events-none"
                draggable={false}
              />
            </div>
          ))}
        </div>

        {/* DRAG pill indicator, bottom-center over the carousel */}
        <div className="absolute bottom-5 md:bottom-8 left-1/2 -translate-x-1/2 z-20 pointer-events-none">
          <div className="bg-white text-[--color-near-black] px-4 h-[36px] flex items-center gap-2 text-[11px] font-body font-bold uppercase tracking-[0.2em] rounded-[--radius-sm] shadow-[0_10px_30px_-10px_rgba(0,0,0,0.6)]">
            <span aria-hidden="true" className="opacity-70 leading-none text-[13px]">&laquo;</span>
            <span>Drag</span>
            <span aria-hidden="true" className="opacity-70 leading-none text-[13px]">&raquo;</span>
          </div>
        </div>
      </div>
    </section>
  )
}
