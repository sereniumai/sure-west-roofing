'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

interface Pillar {
  id: string
  title: string
  body: string
}

const pillars: Pillar[] = [
  {
    id: 'character',
    title: 'Character',
    body: 'Owner-operated and built on personal accountability. When you hire Sure West Roofing in Cochrane you deal directly with the owner from estimate to completion - not a salesperson, not a middleman.',
  },
  {
    id: 'competency',
    title: 'Competency',
    body: 'Red Seal Journeyman certified - the highest professional credential in the Alberta roofing trade. Not every licensed roofing contractor in Cochrane or Calgary can say that.',
  },
  {
    id: 'proven-processes',
    title: 'Proven Processes',
    body: 'From free estimate to finished roof - written quotes, clear timelines, and a 10-year workmanship guarantee before we start. Cochrane homeowners know exactly what they are getting from their local roofing company.',
  },
]

const EASE_OUT = [0.16, 1, 0.3, 1] as const
const VIMEO_ID = '917317949'

export function WhySureWest() {
  const [active, setActive] = useState(0)

  return (
    <section
      id="why-sure-west"
      className="relative bg-[#F8F8F8] overflow-hidden"
      style={{
        paddingTop: 'var(--section-pad-top)',
        paddingBottom: 'var(--section-pad-bot)',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
      aria-labelledby="why-sure-west-heading"
    >
      {/* Paper-grain warm wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          background:
            'radial-gradient(1200px 600px at 15% 20%, rgba(212,175,96,0.09), transparent 60%), radial-gradient(900px 500px at 85% 80%, rgba(26,22,18,0.04), transparent 60%)',
        }}
      />

      <div className="relative max-w-[1320px] mx-auto">
        {/* ── Centred header (eyebrow + h2 + sub) ─────────────────── */}
        <motion.div
          className="flex flex-col items-center text-center max-w-[920px] mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <span
            className="inline-flex items-center h-8 md:h-9 px-3 md:px-4 text-[13px] md:text-[14px] font-body font-bold uppercase tracking-[0.12em] rounded-[--radius-sm]"
            style={{ background: 'rgba(0,0,0,0.04)', color: 'var(--color-near-black)' }}
          >
            Why Sure West
          </span>

          <h2
            id="why-sure-west-heading"
            className="font-display font-semibold leading-[1.05] text-[--color-near-black] mt-6 md:mt-7"
            style={{
              fontSize: 'clamp(32px, 4.2vw, 58px)',
              letterSpacing: '-0.04em',
            }}
          >
            Cochrane&apos;s Red Seal Certified<br />Roofing Contractor
          </h2>

          <p
            className="mt-6 md:mt-7 max-w-[520px] text-[--color-near-black]/70 leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 400,
            }}
          >
            Every roofing contractor in Cochrane says they are the best.
            Here is what actually sets Sure West apart.
          </p>
        </motion.div>

        {/* ── Two-column: pillars left | video right ──────────────── */}
        <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,600px)] gap-12 lg:gap-20 items-start">
          {/* LEFT: editorial pillars accordion (Services-style) */}
          <div className="flex flex-col">
            {pillars.map((p, i) => {
              const isActive = active === i
              return (
                <div
                  key={p.id}
                  className="relative border-t border-[--color-near-black]/10 first:border-t-0 group/row"
                >
                  {/* Soft gold wash on active */}
                  <motion.span
                    aria-hidden="true"
                    className="absolute inset-0 pointer-events-none"
                    initial={false}
                    animate={{
                      backgroundColor: isActive
                        ? 'rgba(212,175,96,0.035)'
                        : 'rgba(212,175,96,0)',
                    }}
                    transition={{ duration: 0.4, ease: EASE_OUT }}
                  />

                  {/* Gold left rail */}
                  <motion.span
                    aria-hidden="true"
                    className="absolute left-0 top-0 bottom-0 w-[2px] bg-[#D4AF60] origin-top"
                    initial={false}
                    animate={{ scaleY: isActive ? 1 : 0, opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.45, ease: EASE_OUT }}
                  />

                  <button
                    type="button"
                    onClick={() => setActive(isActive ? -1 : i)}
                    onMouseEnter={() => setActive(i)}
                    aria-expanded={isActive}
                    className="relative w-full flex items-center gap-5 md:gap-7 py-[22px] md:py-[26px] text-left pl-4 md:pl-6 pr-2"
                  >
                    <motion.h3
                      className={`flex-1 font-display font-semibold leading-[0.95] transition-colors duration-300 ${
                        isActive
                          ? 'text-[--color-near-black]'
                          : 'text-[--color-near-black]/45 group-hover/row:text-[--color-near-black]/85'
                      }`}
                      style={{
                        fontSize: 'clamp(24px, 2.6vw, 36px)',
                        letterSpacing: '-0.028em',
                      }}
                      initial={false}
                      animate={{ x: isActive ? 4 : 0 }}
                      transition={{ duration: 0.45, ease: EASE_OUT }}
                    >
                      {p.title}
                    </motion.h3>

                    {/* Gold bar indicator (active) */}
                    <motion.span
                      aria-hidden="true"
                      className="flex-shrink-0 block h-[2px]"
                      style={{ background: 'var(--color-accent, #D4AF60)' }}
                      initial={false}
                      animate={{ width: isActive ? 28 : 0, opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.4, ease: EASE_OUT }}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE_OUT }}
                        className="overflow-hidden relative"
                      >
                        <p
                          className="pl-4 md:pl-6 pr-4 pb-7 max-w-[540px] text-[--color-near-black]/70 leading-[1.7]"
                          style={{
                            fontSize: '15.5px',
                            fontFamily: "'Inter', system-ui, sans-serif",
                            fontWeight: 400,
                          }}
                        >
                          {p.body}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </div>

          {/* RIGHT: video (sticky) */}
          <motion.div
            className="lg:sticky lg:top-[calc(var(--nav-height)+40px)]"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
          >
            <div className="relative">
              {/* Warm gold halo behind video for anchor */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-x-6 -inset-y-4 -z-10"
                style={{
                  background:
                    'radial-gradient(500px 220px at 50% 50%, rgba(212,175,96,0.14), transparent 70%)',
                  filter: 'blur(4px)',
                }}
              />

              <div className="relative aspect-video w-full overflow-hidden rounded-[--radius-lg] bg-black shadow-[0_40px_90px_-30px_rgba(26,22,18,0.55),0_18px_40px_-18px_rgba(26,22,18,0.3)] ring-1 ring-black/5">
                <iframe
                  src={`https://player.vimeo.com/video/${VIMEO_ID}?title=0&byline=0&portrait=0`}
                  className="absolute inset-0 w-full h-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title="Sure West Roofing - Cochrane, Alberta"
                />
              </div>

              <p
                className="mt-5 text-center text-[12px] uppercase tracking-[0.22em] text-[--color-near-black]/55"
                style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 500 }}
              >
                Sure West Roofing - Cochrane, Alberta
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
