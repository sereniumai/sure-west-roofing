'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import ImageReveal from '@/components/ui/image-reveal'

interface PortfolioImage {
  src: string
  alt: string
  /** Legacy field — unused by ImageReveal but kept for back-compat with page.tsx */
  objectPosition?: string
}

interface PortfolioCarouselProps {
  heading?: string
  images: PortfolioImage[]
}

const EASE_OUT = [0.16, 1, 0.3, 1] as const
const AUTO_ADVANCE_MS = 4200

/** Partition the flat image list into triplets, wrapping the tail so each scene has 3. */
function buildScenes(images: PortfolioImage[]): PortfolioImage[][] {
  if (images.length === 0) return []
  const count = Math.ceil(images.length / 3)
  const scenes: PortfolioImage[][] = []
  for (let i = 0; i < count; i++) {
    scenes.push([
      images[(i * 3) % images.length],
      images[(i * 3 + 1) % images.length],
      images[(i * 3 + 2) % images.length],
    ])
  }
  return scenes
}

export function PortfolioCarousel({ images }: PortfolioCarouselProps) {
  const scenes = useMemo(() => buildScenes(images), [images])
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const sceneCount = scenes.length
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null)

  // Auto-advance
  useEffect(() => {
    if (paused || sceneCount <= 1) return
    timerRef.current = setInterval(() => {
      setIndex((i) => (i + 1) % sceneCount)
    }, AUTO_ADVANCE_MS)
    return () => {
      if (timerRef.current) clearInterval(timerRef.current)
    }
  }, [paused, sceneCount])

  const current = scenes[index]

  return (
    <section
      className="relative bg-[#F8F8F8] overflow-hidden"
      style={{
        paddingTop: 'var(--section-pad-top)',
        paddingBottom: 'var(--section-pad-bot)',
      }}
      aria-label="Portfolio gallery"
    >
      {/* Paper-grain background — same recipe as sibling sections */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          background:
            'radial-gradient(1200px 600px at 20% 10%, rgba(212,175,96,0.08), transparent 60%), radial-gradient(900px 500px at 85% 85%, rgba(26,22,18,0.05), transparent 60%)',
        }}
      />

      <div className="relative">
        {/* ── Header ────────────────────────────────────────────────── */}
        <motion.div
          className="flex flex-col items-center text-center"
          style={{
            paddingLeft: 'var(--section-pad-x)',
            paddingRight: 'var(--section-pad-x)',
          }}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <span
            className="inline-flex items-center h-8 md:h-9 px-3 md:px-4 text-[13px] md:text-[14px] font-body font-bold uppercase tracking-[0.12em] rounded-[--radius-sm] mb-6"
            style={{ background: 'rgba(0,0,0,0.04)', color: 'var(--color-near-black)' }}
          >
            Our Work
          </span>

          <h2
            className="font-display font-semibold leading-[1.05] text-[--color-near-black] max-w-[980px]"
            style={{
              fontSize: 'clamp(30px, 4.2vw, 60px)',
              letterSpacing: '-0.035em',
            }}
          >
            Roofing Projects Completed Across Cochrane, Calgary &amp; Canmore
          </h2>

          <p
            className="mt-6 md:mt-7 max-w-[640px] text-[--color-near-black]/70 leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 400,
            }}
          >
            Every roof in our gallery was completed by our in-house Red Seal
            Journeyman team. No subcontractors. No compromises.
          </p>
        </motion.div>

        {/* ── Image reveal stage ────────────────────────────────────── */}
        <motion.div
          className="relative mt-10 md:mt-14 flex items-center justify-center w-full"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE_OUT }}
        >
          {/* Fan spreads ~±200px horizontally — reserve room so it never clips. */}
          <div
            className="relative"
            style={{ minHeight: 420 }}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={() => setPaused(false)}
          >
            <div className="scale-90 sm:scale-100 md:scale-[1.25] lg:scale-[1.45] transition-transform">
              <AnimatePresence mode="wait">
                {current && (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.35, ease: EASE_OUT }}
                  >
                    <ImageReveal
                      leftImage={current[0].src}
                      middleImage={current[1].src}
                      rightImage={current[2].src}
                    />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* ── Pagination + progress ─────────────────────────────────── */}
        {sceneCount > 1 && (
          <div
            className="relative mt-6 md:mt-10 flex flex-col items-center gap-3"
            style={{
              paddingLeft: 'var(--section-pad-x)',
              paddingRight: 'var(--section-pad-x)',
            }}
          >
            <div className="flex items-center gap-2" role="tablist" aria-label="Portfolio scenes">
              {scenes.map((_, i) => {
                const active = i === index
                return (
                  <button
                    key={i}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-label={`Show project set ${i + 1} of ${sceneCount}`}
                    onClick={() => setIndex(i)}
                    className="group relative h-[6px] rounded-full transition-all duration-500"
                    style={{
                      width: active ? 28 : 10,
                      background: active
                        ? 'var(--color-accent, #D4AF60)'
                        : 'rgba(26,22,18,0.18)',
                    }}
                  />
                )
              })}
            </div>

            <p
              className="text-[12px] uppercase tracking-[0.18em] text-[--color-near-black]/50"
              style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 500 }}
            >
              Set {String(index + 1).padStart(2, '0')}{' '}
              <span className="opacity-50">/ {String(sceneCount).padStart(2, '0')}</span>
              <span className="mx-3 opacity-40">·</span>
              <span className="opacity-70">Hover to hold · tap dots to explore</span>
            </p>
          </div>
        )}

        {/* ── CTA ───────────────────────────────────────────────────── */}
        <motion.div
          className="mt-10 md:mt-14 flex justify-center"
          style={{
            paddingLeft: 'var(--section-pad-x)',
            paddingRight: 'var(--section-pad-x)',
          }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.2, ease: EASE_OUT }}
        >
          <Button variant="primary" size="md" href="/gallery">
            View Full Gallery
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
