'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

interface ParallaxImageStripProps {
  src: string
  alt: string
}

export function ParallaxImageStrip({ src, alt }: ParallaxImageStripProps) {
  const ref = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-20%', '20%'])

  return (
    <section ref={ref} className="relative w-full h-[40vh] lg:h-[50vh] overflow-hidden">
      <motion.img
        src={src}
        alt={alt}
        className="absolute inset-0 w-full h-[140%] object-cover grayscale contrast-[1.05]"
        style={{ y }}
        draggable={false}
      />
      <div className="absolute inset-0 bg-black/30" />
    </section>
  )
}
