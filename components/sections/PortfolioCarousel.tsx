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

const DRAG_FACTOR = 0.15
const FRICTION = 0.92
const MIN_ROTATION = -180
const MAX_ROTATION = 0
const INITIAL_ROTATION = -54

export function PortfolioCarousel({ heading, images }: PortfolioCarouselProps) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const lastX = useRef(0)
  const velocity = useRef(0)
  const rotation = useRef(INITIAL_ROTATION)
  const rafId = useRef<number | null>(null)
  const sceneRef = useRef<HTMLDivElement>(null)
  const [, forceUpdate] = useState(0)

  // Build 7 panels, each with 2 images (14 total images needed, repeat if fewer)
  const panels = Array.from({ length: 7 }, (_, i) => ({
    angle: i * 30,
    rightImage: images[(i * 2) % images.length],
    leftImage: images[(i * 2 + 1) % images.length],
  }))

  const setRotation = useCallback((deg: number) => {
    rotation.current = Math.max(MIN_ROTATION, Math.min(MAX_ROTATION, deg))
    if (sceneRef.current) {
      sceneRef.current.style.transform = `perspective(600px) rotateY(${rotation.current}deg)`
    }
  }, [])

  const inertiaLoop = useCallback(() => {
    if (Math.abs(velocity.current) < 0.01) {
      velocity.current = 0
      return
    }
    velocity.current *= FRICTION
    setRotation(rotation.current + velocity.current)
    rafId.current = requestAnimationFrame(inertiaLoop)
  }, [setRotation])

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true
    lastX.current = e.clientX
    velocity.current = 0
    if (rafId.current) cancelAnimationFrame(rafId.current)
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
  }, [])

  const handlePointerMove = useCallback((e: React.PointerEvent) => {
    if (!isDragging.current) return
    const dx = e.clientX - lastX.current
    velocity.current = dx * DRAG_FACTOR
    setRotation(rotation.current + velocity.current)
    lastX.current = e.clientX
  }, [setRotation])

  const handlePointerUp = useCallback(() => {
    if (!isDragging.current) return
    isDragging.current = false
    rafId.current = requestAnimationFrame(inertiaLoop)
  }, [inertiaLoop])

  // Set initial rotation on mount
  useEffect(() => {
    setRotation(INITIAL_ROTATION)
  }, [setRotation])

  return (
    <section
      className="bg-[#F8F8F8] overflow-hidden"
      style={{
        padding: 'var(--section-pad-top) 0 var(--section-pad-bot)',
      }}
    >
      <div style={{ padding: '0 var(--section-pad-x)' }}>
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          {/* Left column: label + heading */}
          <motion.div
            className="lg:w-[400px] flex-shrink-0"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
          >
            <span className="section-label text-[#D4AF60] mb-4 block">
              Our Portfolio
            </span>
            <h2
              className="font-display font-semibold leading-none mt-1"
              style={{
                fontSize: 'var(--text-section)',
                letterSpacing: '-0.04em',
              }}
            >
              {heading}
            </h2>
            <div className="flex items-center gap-4 mt-8">
              <Button variant="primary" size="sm" href="/services">
                View Projects
              </Button>
              <Button variant="secondary" size="sm" href="/contact">
                View Gallery
              </Button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Drag Arc */}
      <div
        ref={wrapperRef}
        className="relative w-full cursor-grab active:cursor-grabbing select-none touch-none mt-16"
        style={{ height: '350px', overflow: 'hidden' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        <div
          ref={sceneRef}
          className="w-full h-full"
          style={{
            transformStyle: 'preserve-3d',
            userSelect: 'none',
            touchAction: 'none',
            transform: `perspective(600px) rotateY(${INITIAL_ROTATION}deg)`,
            willChange: 'transform',
          }}
        >
          {panels.map((panel) => (
            <div
              key={panel.angle}
              className="absolute top-0 left-0"
              style={{
                width: '1400px',
                height: '240px',
                transformStyle: 'preserve-3d',
                transform: `rotateY(${panel.angle}deg)`,
              }}
            >
              {/* Right face */}
              <div
                className="absolute overflow-hidden rounded-[--radius-md]"
                style={{
                  width: '280px',
                  height: '330px',
                  top: '-45px',
                  right: 0,
                  transform: 'rotateY(90deg)',
                }}
              >
                <img
                  src={panel.rightImage.src}
                  alt={panel.rightImage.alt}
                  className="w-full h-full object-cover pointer-events-none"
                  draggable={false}
                />
              </div>
              {/* Left face */}
              <div
                className="absolute overflow-hidden rounded-[--radius-md]"
                style={{
                  width: '280px',
                  height: '330px',
                  top: '-45px',
                  left: 0,
                  transform: 'rotateY(-90deg)',
                }}
              >
                <img
                  src={panel.leftImage.src}
                  alt={panel.leftImage.alt}
                  className="w-full h-full object-cover pointer-events-none"
                  draggable={false}
                />
              </div>
            </div>
          ))}
        </div>

        {/* Drag indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-black text-white px-5 py-2 text-xs font-bold uppercase tracking-wider flex items-center gap-2">
            <span>&lsaquo;</span>
            <span>Drag</span>
            <span>&rsaquo;</span>
          </div>
        </div>
      </div>
    </section>
  )
}
