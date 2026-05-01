'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Reveal } from '@/components/ui/Reveal'

interface CarouselImage {
  src: string
  alt: string
}

interface ServiceOverviewProps {
  /** Eyebrow chip above the heading. */
  eyebrow?: string
  /** Heading. Use \n for an explicit line break (desktop only). */
  heading: string
  /** Body paragraph (one or two sentences). */
  body: string
  /** Images for the cross-fade carousel on the right. */
  images: CarouselImage[]
  /** Section background. Defaults to white. */
  sectionBg?: string
}

/**
 * High-level orientation section. Sits after TrustLogos so a visitor who lands
 * cold on this service page gets a one-paragraph "what this is" before the
 * deeper proof and scope blocks. Image carousel on the right cross-fades on
 * a 5s timer.
 */
export function ServiceOverview({
  eyebrow = 'What It Is',
  heading,
  body,
  images,
  sectionBg = '#FFFFFF',
}: ServiceOverviewProps) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    if (images.length <= 1) return
    const id = setInterval(() => {
      setActive((i) => (i + 1) % images.length)
    }, 5000)
    return () => clearInterval(id)
  }, [images.length])

  return (
    <section
      className="relative overflow-hidden py-20 md:py-24"
      style={{
        background: sectionBg,
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* Text LEFT on desktop */}
          <Reveal>
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
              {eyebrow}
            </span>
            <h2
              className="font-display font-medium text-brand-navy"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                lineHeight: 1.15,
                letterSpacing: '-0.005em',
              }}
            >
              {heading.split('\n').map((line, i) => (
                <span key={i}>
                  {i > 0 && <br className="hidden lg:block" />}
                  {line}
                </span>
              ))}
            </h2>
            <p
              className="mt-6 max-w-[540px] text-brand-slate leading-[1.7]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              {body}
            </p>
          </Reveal>

          {/* Carousel RIGHT on desktop */}
          <Reveal noBlur delay={150}>
            <div
              className="relative overflow-hidden rounded-[18px] aspect-[4/5] lg:aspect-auto lg:h-[540px]"
              style={{
                boxShadow:
                  '0 0 0 1px rgba(212,175,96,0.14), 0 20px 48px -12px rgba(44,71,102,0.20)',
              }}
            >
              {images.map((img, i) => (
                <Image
                  key={img.src}
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className={`object-cover transition-opacity duration-700 ease-out ${
                    i === active ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="lazy"
                />
              ))}

              <div
                aria-hidden="true"
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    'linear-gradient(to top, rgba(44,71,102,0.34) 0%, transparent 38%)',
                }}
              />

              {images.length > 1 && (
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActive(i)}
                      aria-label={`Show image ${i + 1}`}
                      className="rounded-full transition-all duration-300"
                      style={{
                        width: i === active ? '22px' : '8px',
                        height: '8px',
                        background:
                          i === active ? 'rgba(255,255,255,0.96)' : 'rgba(255,255,255,0.50)',
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
