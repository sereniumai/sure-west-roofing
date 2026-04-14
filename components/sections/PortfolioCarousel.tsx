'use client'

import { useRef, useState, useCallback, useEffect } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
import { Button } from '@/components/ui/Button'

interface PortfolioImage {
  src: string
  alt: string
}

interface PortfolioCarouselProps {
  heading: string
  images: PortfolioImage[]
}

export function PortfolioCarousel({ heading, images }: PortfolioCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)
  const lastX = useRef(0)

  // Rotation angle driven by drag
  const rawAngle = useMotionValue(0)
  const angle = useSpring(rawAngle, { stiffness: 120, damping: 25 })

  const totalItems = images.length
  const angleStep = 360 / totalItems
  const radius = 500 // translateZ radius in px

  const handlePointerDown = useCallback((e: React.PointerEvent) => {
    isDragging.current = true
    lastX.current = e.clientX
    ;(e.target as HTMLElement).setPointerCapture?.(e.pointerId)
  }, [])

  const handlePointerMove = useCallback(
    (e: React.PointerEvent) => {
      if (!isDragging.current) return
      const dx = e.clientX - lastX.current
      lastX.current = e.clientX
      rawAngle.set(rawAngle.get() + dx * 0.3)
    },
    [rawAngle]
  )

  const handlePointerUp = useCallback(() => {
    isDragging.current = false
  }, [])

  return (
    <section className="bg-[#F5F5F5] py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-6"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="section-label text-[#D4AF60] mb-4 inline-flex justify-center">
            Our Portfolio
          </span>
          <h2 className="font-display font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight leading-[0.95] text-[#1A1A1A] mt-4">
            {heading}
          </h2>
        </motion.div>

        {/* Buttons */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-10"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          <Button variant="primary" size="sm" href="/services">
            View Projects
          </Button>
          <Button variant="primary" size="sm" href="/contact">
            View Gallery
          </Button>
        </motion.div>
      </div>

      {/* 3D Carousel */}
      <div
        ref={containerRef}
        className="relative w-full h-[420px] md:h-[480px] lg:h-[520px] cursor-grab active:cursor-grabbing select-none touch-none"
        style={{ perspective: '1000px' }}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {/* 3D stage */}
        <motion.div
          className="absolute left-1/2 top-1/2 w-0 h-0"
          style={{
            transformStyle: 'preserve-3d',
            rotateY: angle,
            translateX: '-50%',
            translateY: '-50%',
          }}
        >
          {images.map((image, i) => {
            const itemAngle = i * angleStep
            return (
              <div
                key={`${image.alt}-${i}`}
                className="absolute"
                style={{
                  width: '240px',
                  height: '340px',
                  left: '-120px',
                  top: '-170px',
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: 'hidden',
                }}
              >
                <div className="w-full h-full bg-white shadow-2xl overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover pointer-events-none"
                    draggable={false}
                  />
                </div>
              </div>
            )
          })}
        </motion.div>

        {/* Drag indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
          <div className="bg-[#1A1A1A] text-white px-5 py-2 text-xs font-semibold uppercase tracking-wider flex items-center gap-2">
            <span>&lsaquo;</span>
            <span>Drag</span>
            <span>&rsaquo;</span>
          </div>
        </div>
      </div>

      {/* Curved bottom edge */}
      <div className="relative -mt-20 pointer-events-none">
        <svg
          viewBox="0 0 1440 100"
          fill="none"
          preserveAspectRatio="none"
          className="w-full h-20"
        >
          <path d="M0 100V40C360 0 720 0 720 0C720 0 1080 0 1440 40V100H0Z" fill="#F5F5F5" />
        </svg>
      </div>
    </section>
  )
}
