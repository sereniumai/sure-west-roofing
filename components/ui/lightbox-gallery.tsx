'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { X, ChevronLeft, ChevronRight } from 'lucide-react'

export interface LightboxImage {
  src: string
  alt: string
}

interface LightboxGalleryProps {
  images: LightboxImage[]
  openIndex: number | null
  onClose: () => void
}

export function LightboxGallery({ images, openIndex, onClose }: LightboxGalleryProps) {
  const [index, setIndex] = useState(0)
  const [direction, setDirection] = useState<1 | -1>(1)

  useEffect(() => {
    if (openIndex !== null) {
      setIndex(openIndex)
      setDirection(1)
    }
  }, [openIndex])

  const isOpen = openIndex !== null

  const next = useCallback(() => {
    setDirection(1)
    setIndex((i) => (i + 1) % images.length)
  }, [images.length])

  const prev = useCallback(() => {
    setDirection(-1)
    setIndex((i) => (i - 1 + images.length) % images.length)
  }, [images.length])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
      if (e.key === 'ArrowRight') next()
      if (e.key === 'ArrowLeft') prev()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [isOpen, next, prev, onClose])

  useEffect(() => {
    if (isOpen) {
      const previous = document.body.style.overflow
      document.body.style.overflow = 'hidden'
      return () => {
        document.body.style.overflow = previous
      }
    }
  }, [isOpen])

  if (!isOpen) return null

  const current = images[index]
  if (!current) return null

  const imageAnimationClass =
    direction === 1 ? 'lightbox-image-right' : 'lightbox-image-left'

  // Warm the browser cache for nearby images so arrow-key/click navigation
  // feels instant. Rendering native <img> tags off-screen triggers the fetch
  // without putting them in the visible stage. We preload prev 2 + next 2.
  const preloadOffsets = [-2, -1, 1, 2]
  const preloadIndices = preloadOffsets
    .map((delta) => (index + delta + images.length) % images.length)
    .filter((i) => i !== index)

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center"
      role="dialog"
      aria-modal="true"
      aria-label={`Image ${index + 1} of ${images.length}`}
    >
      {/* Backdrop */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute inset-0 bg-black/85 lightbox-backdrop cursor-default"
        style={{ backdropFilter: 'blur(12px)' }}
      />

      {/* Stage */}
      <div className="relative z-10 w-full max-w-[92vw] lightbox-stage pointer-events-none">
        <div className="relative mx-auto" style={{ width: 'min(92vw, 1200px)', height: 'min(82vh, 800px)' }}>
          <div
            key={current.src}
            className={`absolute inset-0 ${imageAnimationClass}`}
          >
            <Image
              src={current.src}
              alt={current.alt}
              fill
              sizes="92vw"
              quality={90}
              priority
              unoptimized
              className="object-contain select-none"
              draggable={false}
            />
          </div>
        </div>
      </div>

      {/* Hidden preloaders. Browser fetches and caches the adjacent images so
          the next arrow press is instant. Native img tag avoids the Next.js
          optimisation roundtrip; ignore the linter rule for this case. */}
      <div aria-hidden="true" className="absolute opacity-0 pointer-events-none w-px h-px overflow-hidden">
        {preloadIndices.map((i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img key={`preload-${images[i].src}`} src={images[i].src} alt="" loading="eager" decoding="async" />
        ))}
      </div>

      {/* Close button */}
      <button
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute top-4 right-4 md:top-6 md:right-6 z-20 w-11 h-11 md:w-12 md:h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 hover:border-white/30"
        style={{ backdropFilter: 'blur(8px)' }}
      >
        <X className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.75} />
      </button>

      {/* Prev */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-3 md:left-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 hover:border-white/30"
          style={{ backdropFilter: 'blur(8px)' }}
        >
          <ChevronLeft className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.75} />
        </button>
      )}

      {/* Next */}
      {images.length > 1 && (
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-3 md:right-8 top-1/2 -translate-y-1/2 z-20 w-12 h-12 md:w-14 md:h-14 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 hover:border-white/30"
          style={{ backdropFilter: 'blur(8px)' }}
        >
          <ChevronRight className="w-6 h-6 md:w-7 md:h-7" strokeWidth={1.75} />
        </button>
      )}

      {/* Counter */}
      <div
        className="absolute bottom-5 md:bottom-7 left-1/2 -translate-x-1/2 z-20 flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-white"
        style={{ backdropFilter: 'blur(8px)' }}
      >
        <span
          className="uppercase tracking-[0.14em]"
          style={{
            fontSize: '11.5px',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontWeight: 600,
          }}
        >
          {String(index + 1).padStart(2, '0')}
        </span>
        <span aria-hidden="true" className="block w-px h-3 bg-white/30" />
        <span
          className="uppercase tracking-[0.14em] text-white/60"
          style={{
            fontSize: '11.5px',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontWeight: 500,
          }}
        >
          {String(images.length).padStart(2, '0')}
        </span>
      </div>
    </div>
  )
}
