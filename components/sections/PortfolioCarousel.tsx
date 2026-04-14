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

const DRAG_FACTOR = 0.24
const FRICTION = 0.94
const ANGLE_STEP = 22 // degrees between adjacent panels on the cylinder

export function PortfolioCarousel({ heading, images }: PortfolioCarouselProps) {
  const sceneRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const lastX = useRef(0)
  const velocity = useRef(0)
  const rotation = useRef(0)
  const rafId = useRef<number | null>(null)

  // Viewport-adaptive cylinder geometry
  const [geometry, setGeometry] = useState({
    radius: 760,
    panelW: 260,
    panelH: 360,
  })

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth
      if (w < 640) {
        setGeometry({ radius: 460, panelW: 170, panelH: 230 })
      } else if (w < 1024) {
        setGeometry({ radius: 620, panelW: 220, panelH: 300 })
      } else {
        setGeometry({ radius: 780, panelW: 270, panelH: 370 })
      }
    }
    compute()
    window.addEventListener('resize', compute)
    return () => window.removeEventListener('resize', compute)
  }, [])

  // Full cylinder, continuous drag, no bounds
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

  const inertiaLoop = useCallback(() => {
    if (Math.abs(velocity.current) < 0.01) {
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

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return
    const dx = e.clientX - lastX.current
    const delta = dx * DRAG_FACTOR
    velocity.current = delta
    applyRotation(rotation.current + delta)
    lastX.current = e.clientX
  }, [applyRotation])

  const handlePointerUp = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return
    isDragging.current = false
    try {
      ;(e.currentTarget as HTMLElement).releasePointerCapture?.(e.pointerId)
    } catch {}
    if (!rafId.current) rafId.current = requestAnimationFrame(inertiaLoop)
  }, [inertiaLoop])

  useEffect(() => {
    applyRotation(rotation.current)
    return () => {
      if (rafId.current) cancelAnimationFrame(rafId.current)
    }
  }, [applyRotation])

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

      {/* Full-width cylindrical carousel */}
      <div
        ref={wrapperRef}
        className="relative w-full cursor-grab active:cursor-grabbing select-none touch-none mt-12 md:mt-20"
        style={{
          height: `${geometry.panelH + 60}px`,
          perspective: '1600px',
          perspectiveOrigin: '50% 50%',
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
                  '0 30px 50px -24px rgba(0,0,0,0.35), 0 0 0 1px rgba(0,0,0,0.04)',
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

        {/* Drag indicator pill, bottom-right */}
        <div className="absolute bottom-4 right-6 md:right-10 z-20 pointer-events-none">
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
