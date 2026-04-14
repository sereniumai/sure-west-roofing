'use client'

import { useRef } from 'react'
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

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  // ~2× parallax velocity — media moves at 1.5× rate relative to container
  const y = useTransform(scrollYProgress, [0, 1], ['100px', '-200px'])

  return (
    <section
      ref={ref}
      className="relative bg-black overflow-visible"
      style={{ height: '306px' }}
    >
      {/* Overflow container — crops top/bottom, inset from edges */}
      <div
        className="absolute overflow-hidden"
        style={{
          top: '-100px',
          left: 'var(--section-pad-x)',
          width: 'calc(100% - 100px)',
          height: '565px',
        }}
      >
        <motion.div
          className="w-full"
          style={{
            height: '848px',
            y,
            scale: 1.3,
            filter: 'contrast(1.05) grayscale(1)',
          }}
        >
          {video ? (
            <video
              src={video}
              poster={poster ?? src}
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              aria-label={alt}
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center 30%' }}
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
