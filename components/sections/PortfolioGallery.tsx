'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

interface PortfolioImage {
  src: string
  alt: string
  objectPosition?: string
}

interface PortfolioGalleryProps {
  heading?: React.ReactNode
  images: PortfolioImage[]
  /** Legacy prop, no longer used. */
  fanCount?: number
  sectionBg?: string
}

export function PortfolioGallery({
  images,
  sectionBg = '#FFFFFF',
  heading = (
    <>
      Roofing Projects Completed Across<br className="hidden md:block" /> Cochrane, Calgary &amp; Canmore
    </>
  ),
}: PortfolioGalleryProps) {
  const [index, setIndex] = useState(0)
  const total = images.length
  const touchStartX = useRef<number | null>(null)
  const thumbStripRef = useRef<HTMLDivElement>(null)

  const goPrev = () => setIndex((i) => (i - 1 + total) % total)
  const goNext = () => setIndex((i) => (i + 1) % total)

  // Keyboard arrows site-wide. Cheap and works.
  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft') goPrev()
      else if (e.key === 'ArrowRight') goNext()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [total])

  // Auto-scroll thumbnail strip so current thumb stays in view
  useEffect(() => {
    const strip = thumbStripRef.current
    if (!strip) return
    const thumb = strip.children[index] as HTMLElement | undefined
    if (!thumb) return
    const stripRect = strip.getBoundingClientRect()
    const thumbRect = thumb.getBoundingClientRect()
    const thumbCenter = thumbRect.left + thumbRect.width / 2 - stripRect.left
    const target = thumbCenter - stripRect.width / 2
    strip.scrollTo({ left: strip.scrollLeft + target, behavior: 'smooth' })
  }, [index])

  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return
    const diff = touchStartX.current - e.changedTouches[0].clientX
    if (Math.abs(diff) > 40) {
      if (diff > 0) goNext()
      else goPrev()
    }
    touchStartX.current = null
  }

  const padIndex = (n: number) => String(n + 1).padStart(2, '0')
  const padTotal = String(total).padStart(2, '0')

  return (
    <section
      className="relative overflow-x-clip py-20 md:py-24"
      style={{ background: sectionBg }}
      aria-label="Portfolio gallery"
    >
      {/* Paper-grain background, same recipe as sibling sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          background:
            'radial-gradient(1200px 600px at 20% 10%, rgba(212,175,96,0.08), transparent 60%), radial-gradient(900px 500px at 85% 85%, rgba(26,22,18,0.05), transparent 60%)',
        }}
      />

      <div className="relative">
        {/* Header */}
        <Reveal>
          <div
            className="flex flex-col items-center text-center max-w-[1320px] mx-auto"
            style={{
              paddingLeft: 'var(--section-pad-x)',
              paddingRight: 'var(--section-pad-x)',
            }}
          >
            <span
              className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
              style={{
                background: '#F7F5F0',
                fontSize: '12px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              Our Work
            </span>

            <h2
              className="font-display font-medium text-brand-navy max-w-[980px]"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                lineHeight: 1.15,
                letterSpacing: '-0.005em',
              }}
            >
              {heading}
            </h2>

            <p
              className="mt-6 md:mt-7 max-w-[620px] text-brand-slate leading-[1.7]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              Every roof in our gallery was completed by our in-house Red Seal Journeyman team.
              No subcontractors. No compromises.
            </p>

            <div className="mt-7 md:mt-9">
              <Button variant="primary" size="md" href="/gallery">
                View Full Gallery
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Big-image carousel */}
        <Reveal delay={150} noBlur>
          <div
            className="relative mt-12 md:mt-16 mx-auto"
            style={{
              maxWidth: '960px',
              paddingLeft: 'var(--section-pad-x)',
              paddingRight: 'var(--section-pad-x)',
            }}
          >
            {/* Soft gold radial behind frame */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-x-6 -inset-y-8 -z-10"
              style={{
                background:
                  'radial-gradient(900px 320px at 50% 60%, rgba(212,175,96,0.20), transparent 70%)',
                filter: 'blur(10px)',
              }}
            />

            <div
              className="group relative aspect-[16/10] sm:aspect-[16/9] rounded-[18px] overflow-hidden"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
              style={{
                backgroundColor: '#0F1A28',
                boxShadow:
                  '0 2px 4px rgba(44,71,102,0.06), 0 12px 40px -8px rgba(44,71,102,0.18), 0 40px 100px -20px rgba(44,71,102,0.22)',
              }}
            >
              {/* Sliding track */}
              <div
                className="absolute inset-0 flex"
                style={{
                  transform: `translateX(-${index * 100}%)`,
                  transition: 'transform 750ms cubic-bezier(0.32, 0.72, 0, 1)',
                }}
              >
                {images.map((img, i) => (
                  <div key={img.src + i} className="relative w-full h-full flex-shrink-0">
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 1240px) 100vw, 1200px"
                      className="object-cover"
                      style={{ objectPosition: img.objectPosition ?? 'center' }}
                      priority={i === 0}
                      loading={i === 0 ? 'eager' : 'lazy'}
                      quality={85}
                    />
                  </div>
                ))}
              </div>

              {/* Counter, top-left */}
              <div
                aria-hidden="true"
                className="absolute top-4 left-4 sm:top-5 sm:left-5 flex items-baseline gap-1.5 select-none"
                style={{
                  fontFamily: 'var(--font-oswald), system-ui, sans-serif',
                  letterSpacing: '0.04em',
                  textShadow: '0 1px 12px rgba(0,0,0,0.45)',
                }}
              >
                <span
                  className="text-white font-semibold leading-none"
                  style={{ fontSize: '22px' }}
                >
                  {padIndex(index)}
                </span>
                <span className="text-white/55 leading-none" style={{ fontSize: '14px' }}>
                  /
                </span>
                <span className="text-white/75 leading-none" style={{ fontSize: '14px' }}>
                  {padTotal}
                </span>
              </div>

              {/* Prev arrow, prominent gold */}
              <button
                type="button"
                onClick={goPrev}
                aria-label="Previous photo"
                className="group/arrow absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-brand-gold transition-all duration-300 hover:scale-110"
                style={{
                  background: 'rgba(247,245,240,0.78)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow:
                    '0 0 0 1px rgba(212,175,96,0.30), 0 12px 26px -10px rgba(0,0,0,0.30), 0 6px 12px -6px rgba(0,0,0,0.18)',
                }}
              >
                <ChevronLeft
                  className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover/arrow:-translate-x-0.5"
                  strokeWidth={2}
                />
              </button>

              {/* Next arrow, prominent gold */}
              <button
                type="button"
                onClick={goNext}
                aria-label="Next photo"
                className="group/arrow absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center text-brand-gold transition-all duration-300 hover:scale-110"
                style={{
                  background: 'rgba(247,245,240,0.78)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  boxShadow:
                    '0 0 0 1px rgba(212,175,96,0.30), 0 12px 26px -10px rgba(0,0,0,0.30), 0 6px 12px -6px rgba(0,0,0,0.18)',
                }}
              >
                <ChevronRight
                  className="w-6 h-6 sm:w-7 sm:h-7 transition-transform duration-300 group-hover/arrow:translate-x-0.5"
                  strokeWidth={2}
                />
              </button>
            </div>

            {/* Thumbnail strip */}
            <div
              ref={thumbStripRef}
              className="mt-5 md:mt-6 flex gap-2 sm:gap-2.5 overflow-x-auto scrollbar-hide pb-1"
              style={{ scrollSnapType: 'x mandatory' }}
              role="tablist"
              aria-label="Gallery thumbnails"
            >
              {images.map((img, i) => {
                const active = i === index
                return (
                  <button
                    key={img.src + 'thumb' + i}
                    type="button"
                    onClick={() => setIndex(i)}
                    aria-label={`View photo ${i + 1}`}
                    aria-selected={active}
                    role="tab"
                    className="relative flex-shrink-0 overflow-hidden rounded-[8px] transition-all duration-300 ease-out"
                    style={{
                      width: '92px',
                      height: '60px',
                      scrollSnapAlign: 'center',
                      transform: active ? 'scale(1.04)' : 'scale(1)',
                      boxShadow: active
                        ? '0 0 0 2px var(--color-accent, #D4AF60), 0 6px 14px -6px rgba(212,175,96,0.55)'
                        : '0 1px 3px rgba(0,0,0,0.08)',
                      opacity: active ? 1 : 0.7,
                    }}
                  >
                    <Image
                      src={img.src}
                      alt=""
                      fill
                      sizes="92px"
                      className="object-cover"
                      style={{ objectPosition: img.objectPosition ?? 'center' }}
                      loading="lazy"
                      quality={60}
                    />
                  </button>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
