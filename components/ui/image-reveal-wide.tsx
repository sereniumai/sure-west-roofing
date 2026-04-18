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
        const z = 100 - Math.abs(offset)
        // Outer: holds the static fan position + rotation.
        const outerTransform = `translateX(${x}px) translateY(${y}px) rotate(${rot}deg)`

        return (
          <div
            key={i}
            className="absolute w-56 h-56 md:w-64 md:h-64"
            style={{ zIndex: z, transform: outerTransform }}
          >
            {/* Inner: polaroid-style white-bordered card. Same frame treatment
                as the gallery hero collage. Outer/inner split keeps hover
                transforms from fighting the fan rotation. */}
            <div
              className="group relative w-full h-full overflow-hidden rounded-2xl bg-white border-[6px] border-white transition-all duration-500 ease-out hover:-translate-y-1.5 hover:scale-[1.03]"
              style={{
                boxShadow:
                  '0 6px 16px rgba(27,53,88,0.10), 0 30px 60px -20px rgba(27,53,88,0.32)',
              }}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="(max-width: 768px) 224px, (max-width: 1024px) 256px, 300px"
                quality={85}
                loading="lazy"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
