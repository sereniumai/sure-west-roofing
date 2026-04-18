'use client'

import { useEffect, useRef, useState } from 'react'
import { LightboxGallery, type LightboxImage } from '@/components/ui/lightbox-gallery'

interface GalleryGridProps {
  images: LightboxImage[]
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6">
          {images.map((image, index) => (
            <GalleryTile
              key={image.src}
              image={image}
              index={index}
              eager={index < 6}
              onOpen={() => setOpenIndex(index)}
            />
          ))}
        </div>
      </div>

      <LightboxGallery
        images={images}
        openIndex={openIndex}
        onClose={() => setOpenIndex(null)}
      />
    </section>
  )
}

interface GalleryTileProps {
  image: LightboxImage
  index: number
  eager: boolean
  onOpen: () => void
}

function GalleryTile({ image, index, eager, onOpen }: GalleryTileProps) {
  const ref = useRef<HTMLButtonElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    if (typeof window !== 'undefined' && !('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { rootMargin: '-40px 0px -40px 0px', threshold: 0.08 },
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  // Stagger each row by ~80ms. Three-per-row desktop grid.
  const delay = (index % 3) * 80

  return (
    <button
      ref={ref}
      type="button"
      onClick={onOpen}
      aria-label={`Open image ${index + 1}: ${image.alt}`}
      className="group relative aspect-[4/3] overflow-hidden rounded-3xl cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-gold focus-visible:ring-offset-2 focus-visible:ring-offset-white"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(28px) scale(0.98)',
        transition: `opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform 0.9s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
        willChange: 'opacity, transform',
      }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={image.src}
        alt={image.alt}
        loading={eager ? 'eager' : 'lazy'}
        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
        draggable={false}
      />

      {/* Subtle darken on hover to lift the zoom-hint icon */}
      <span
        aria-hidden="true"
        className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500"
      />

      {/* Expand hint: circular gold button bottom-right that fades in on hover */}
      <span
        aria-hidden="true"
        className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-white/95 text-brand-navy flex items-center justify-center opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-[0_10px_24px_-8px_rgba(0,0,0,0.35)]"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          strokeWidth={1.75}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
          />
        </svg>
      </span>
    </button>
  )
}
