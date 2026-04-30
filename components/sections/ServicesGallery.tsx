'use client'

import { useState, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface GalleryImage { src: string; alt: string; caption?: string }

const DEFAULT_IMAGES: GalleryImage[] = [
  { src: '/images/Cochrane Roofing Contractor Gallery 1.webp',  alt: 'Completed roof replacement in Cochrane Alberta' },
  { src: '/images/Cochrane Roofing Contractor Gallery 2.webp',  alt: 'Roofing project Cochrane Alberta' },
  { src: '/images/Cochrane Roofing Contractor Gallery 4.webp',  alt: 'Sure West Roofing completed project Cochrane' },
  { src: '/images/Cochrane Roofing Contractor Gallery 5.webp',  alt: 'Roof replacement project Cochrane AB' },
  { src: '/images/Cochrane Roofing Contractor Gallery 6.webp',  alt: 'Roofing contractor project Calgary' },
  { src: '/images/Cochrane Roofing Contractor Gallery 9.webp',  alt: 'Red Seal roofing crew Cochrane AB' },
]

function pad(n: number) {
  return String(n).padStart(2, '0')
}
interface Props {
  images?: GalleryImage[]
  sectionBg?: string
}

export function ServicesGallery({ images, sectionBg }: Props) {
  const IMAGES = images ?? DEFAULT_IMAGES
  const [current, setCurrent] = useState(0)

  const prev = useCallback(
    () => setCurrent((i) => (i - 1 + IMAGES.length) % IMAGES.length),
    [],
  )
  const next = useCallback(
    () => setCurrent((i) => (i + 1) % IMAGES.length),
    [],
  )

  return (
    <section
      className="relative overflow-hidden py-20 md:py-24"
      style={{
        background: sectionBg ?? '#FFFFFF',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20 items-center">

          {/* ── Left: text + controls ─────────────────────────────────── */}
          <div className="flex flex-col">
            <span
              className="inline-flex self-start items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
              style={{
                background: '#F0EEE8',
                fontSize: '12px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 600,
                lineHeight: 1,
              }}
            >
              Our Work
            </span>

            <h2
              className="font-display font-medium text-brand-navy"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                lineHeight: 1.15,
                letterSpacing: '-0.005em',
              }}
            >
              Roofing Projects Completed Across Cochrane, Calgary &amp; Canmore
            </h2>

            <p
              className="mt-5 text-brand-slate leading-[1.65] max-w-[440px]"
              style={{
                fontSize: '15px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              Every roof in our gallery was completed by our in-house Red Seal Journeyman crew. No subcontractors, no compromises.
            </p>

            {/* Counter + arrows */}
            <div className="mt-8 flex items-center gap-5">
              <button
                onClick={prev}
                aria-label="Previous photo"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-brand-border text-brand-navy hover:border-brand-gold hover:text-brand-gold transition-colors duration-200"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
              </button>

              <span
                className="font-display tracking-[0.06em] text-brand-navy select-none"
                style={{ fontSize: '20px' }}
              >
                <span className="text-brand-gold font-semibold">{pad(current + 1)}</span>
                <span className="mx-2 opacity-30">/</span>
                <span>{pad(IMAGES.length)}</span>
              </span>

              <button
                onClick={next}
                aria-label="Next photo"
                className="flex items-center justify-center w-11 h-11 rounded-full border border-brand-border text-brand-navy hover:border-brand-gold hover:text-brand-gold transition-colors duration-200"
              >
                <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>

            {/* Thumbnail strip, 5 per row */}
            <div className="mt-4 flex gap-2 flex-wrap max-w-[386px]">
              {IMAGES.map((img, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`View photo ${i + 1}`}
                  className={[
                    'relative w-[70px] h-[48px] rounded-[6px] overflow-hidden flex-shrink-0 transition-all duration-200',
                    i === current
                      ? 'ring-2 ring-offset-2 ring-offset-white ring-[#D4AF60] opacity-100'
                      : 'opacity-40 hover:opacity-70',
                  ].join(' ')}
                >
                  <Image src={img.src} alt="" fill className="object-cover" sizes="70px" />
                </button>
              ))}
            </div>

            <div className="mt-8">
              <Button variant="primary" size="lg" href="/gallery">
                View Full Gallery
              </Button>
            </div>
          </div>

          {/* ── Right: image stack ────────────────────────────────────── */}
          <div className="relative">
            {/* Ambient gold glow behind image */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -inset-6 rounded-[32px]"
              style={{
                background:
                  'radial-gradient(ellipse 80% 80% at 55% 50%, rgba(212,175,96,0.14) 0%, transparent 70%)',
                filter: 'blur(16px)',
              }}
            />

            {/* Main image frame */}
            <div
              className="relative overflow-hidden rounded-[20px]"
              style={{
                aspectRatio: '4 / 3',
                boxShadow:
                  '0 0 0 1px rgba(212,175,96,0.14), 0 28px 64px -12px rgba(44,71,102,0.22)',
              }}
            >
              {IMAGES.map((img, i) => (
                <div
                  key={i}
                  aria-hidden={i !== current}
                  className={[
                    'absolute inset-0 transition-opacity duration-700 ease-in-out',
                    i === current ? 'opacity-100 z-[1]' : 'opacity-0 z-0',
                  ].join(' ')}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover"
                    priority={i === 0}
                    sizes="(max-width: 1024px) 100vw, 55vw"
                  />
                </div>
              ))}

              {/* Counter pill on image */}
              <div
                className="absolute bottom-4 right-4 z-10 px-3 py-1.5 rounded-full flex items-center gap-2"
                style={{
                  background: 'rgba(0,0,0,0.45)',
                  backdropFilter: 'blur(8px)',
                  WebkitBackdropFilter: 'blur(8px)',
                }}
              >
                <span
                  className="text-white font-semibold tabular-nums"
                  style={{
                    fontSize: '12px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  }}
                >
                  {pad(current + 1)} / {pad(IMAGES.length)}
                </span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
