'use client'

import { motion, Variants } from 'framer-motion'
import Image from 'next/image'
import React from 'react'

/**
 * Wide fan-out image reveal — extended variant of the 21st.dev
 * tonyzebastian/image-tiles component. Takes an odd-numbered array
 * of images (recommended 5, 7, or 9) and fans them out symmetrically
 * from the centre with growing rotation/offset. Allowed to overflow
 * the viewport horizontally for an editorial, full-bleed feel.
 */
interface ImageRevealWideProps {
  images: string[]
  /** Horizontal step between cards (px). Default 180. */
  stepX?: number
  /** Extra vertical drift per step (px). Default 12. */
  stepY?: number
  /** Extra rotation per step (deg). Default 5. */
  stepRot?: number
}

const spring = { type: 'spring' as const, stiffness: 120, damping: 12 }
const hoverSpring = { type: 'spring' as const, stiffness: 200, damping: 15 }

const CARD =
  'absolute w-56 h-56 md:w-64 md:h-64 overflow-hidden rounded-xl shadow-[0_20px_50px_-20px_rgba(26,22,18,0.45)] bg-white'

const IMG_WRAP = 'relative w-full h-full p-2'
const IMG = 'object-cover rounded-xl'

export default function ImageRevealWide({
  images,
  stepX = 180,
  stepY = 12,
  stepRot = 5,
}: ImageRevealWideProps) {
  if (images.length === 0) return null

  const mid = (images.length - 1) / 2

  const containerVariants: Variants = {
    initial: { opacity: 0 },
    animate: {
      opacity: 1,
      transition: { delay: 0.15, staggerChildren: 0.08 },
    },
  }

  return (
    <motion.div
      className="relative flex items-center justify-center w-full h-80 md:h-96"
      variants={containerVariants}
      initial="initial"
      animate="animate"
    >
      {images.map((src, i) => {
        const offset = i - mid
        const x = offset * stepX
        const y = Math.abs(offset) * stepY
        const rot = offset * stepRot
        // Centre card sits on top; cards further out recede.
        const z = 100 - Math.abs(offset)

        const cardVariants: Variants = {
          initial: { rotate: 0, x: 0, y: 0 },
          animate: { rotate: rot, x, y, transition: spring },
          hover: {
            rotate: rot * 0.4,
            x,
            y: y - 14,
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
            <div className={IMG_WRAP}>
              <Image
                src={src}
                alt=""
                fill
                sizes="256px"
                quality={70}
                loading="lazy"
                className={IMG}
              />
            </div>
          </motion.div>
        )
      })}
    </motion.div>
  )
}
