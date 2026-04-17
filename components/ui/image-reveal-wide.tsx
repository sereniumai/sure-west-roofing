'use client'

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

  return (
    <div className="relative flex items-center justify-center w-full h-80 md:h-96">
      {images.map((src, i) => {
        const offset = i - mid
        const x = offset * stepX
        const y = Math.abs(offset) * stepY
        const rot = offset * stepRot
        // Centre card sits on top; cards further out recede.
        const z = 100 - Math.abs(offset)

        return (
          <div
            key={i}
            className={`${CARD} ${offset <= 0 ? 'origin-bottom-right' : 'origin-bottom-left'}`}
            style={{
              zIndex: z,
              transform: `translateX(${x}px) translateY(${y}px) rotate(${rot}deg)`,
            }}
          >
            <div className={IMG_WRAP}>
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 300px"
                quality={85}
                loading="lazy"
                className={IMG}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
