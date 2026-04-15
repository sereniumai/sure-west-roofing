'use client'

import { motion, Variants } from 'framer-motion'
import React from 'react'

/**
 * Wide fan-out image reveal — extended variant of the 21st.dev
 * tonyzebastian/image-tiles component. Takes an array of images
 * (5 is the ideal default) and lays them out as an organically
 * scattered stack rather than a perfectly symmetric arc. Inspired
 * by the original component's non-uniform rotations (e.g. middle
 * tilts +6 while right tilts –6), which reads as more editorial
 * than a mechanical fan.
 */
interface ImageRevealWideProps {
  images: string[]
  /** Horizontal step between cards (px). Default 140 — tight overlap. */
  stepX?: number
  /** Optional hand-tuned rotations per card, overrides the algorithmic default. */
  rotations?: number[]
  /** Optional hand-tuned y offsets per card, overrides the algorithmic default. */
  yOffsets?: number[]
}

const spring = { type: 'spring' as const, stiffness: 120, damping: 12 }
const hoverSpring = { type: 'spring' as const, stiffness: 200, damping: 15 }

const CARD =
  'absolute w-56 h-56 md:w-64 md:h-64 overflow-hidden rounded-xl shadow-[0_28px_60px_-20px_rgba(26,22,18,0.5)] bg-white ring-1 ring-black/5'

const IMG = 'w-full h-full object-cover p-2 rounded-xl'

// Hand-tuned layouts that feel organic rather than mechanical.
// Middle card is lifted and tilted slightly right, echoing the original
// 21st.dev image-tiles rhythm (-8 / +6 / -6).
const LAYOUTS: Record<number, { rots: number[]; ys: number[] }> = {
  3: { rots: [-8, 6, -6], ys: [10, 0, 20] },
  5: { rots: [-14, -6, 4, -5, 11], ys: [30, 12, -6, 10, 28] },
  7: { rots: [-18, -11, -5, 4, -4, 10, 16], ys: [42, 26, 12, -6, 10, 24, 40] },
}

export default function ImageRevealWide({
  images,
  stepX = 140,
  rotations,
  yOffsets,
}: ImageRevealWideProps) {
  if (images.length === 0) return null

  const n = images.length
  const mid = (n - 1) / 2
  const layout = LAYOUTS[n]

  const rots =
    rotations ??
    layout?.rots ??
    images.map((_, i) => (i - mid) * 6)

  const ys =
    yOffsets ??
    layout?.ys ??
    images.map((_, i) => Math.abs(i - mid) * 14 - (i - mid === 0 ? 6 : 0))

  const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delay: 0.15, staggerChildren: 0.08 },
    },
  }

  return (
    <motion.div
      className="relative flex items-center justify-center w-full h-72 md:h-80"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {images.map((src, i) => {
        const offset = i - mid
        const x = offset * stepX
        const y = ys[i]
        const rot = rots[i]
        // Centre card sits on top and is scaled up for emphasis.
        const isCenter = offset === 0
        const z = 100 - Math.abs(offset)
        const scale = isCenter ? 1.08 : 1

        const cardVariants: Variants = {
          initial: { rotate: 0, x: 0, y: 0, scale: 1 },
          animate: { rotate: rot, x, y, scale, transition: spring },
          hover: {
            rotate: rot * 0.4,
            x,
            y: y - 14,
            scale: scale * 1.03,
            transition: hoverSpring,
          },
        }

        return (
          <motion.div
            key={i}
            className={`${CARD} ${offset <= 0 ? 'origin-bottom-right' : 'origin-bottom-left'}`}
            variants={cardVariants}
            whileHover="hover"
            animate="animate"
            style={{ zIndex: z }}
          >
            <img src={src} alt="" className={IMG} />
          </motion.div>
        )
      })}
    </motion.div>
  )
}
