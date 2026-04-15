'use client'

import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Play } from 'lucide-react'

interface Pillar {
  title: string
  body: string
}

const pillars: Pillar[] = [
  {
    title: 'Character',
    body: 'Owner-operated and built on personal accountability. When you hire Sure West Roofing in Cochrane you deal directly with the owner from estimate to completion - not a salesperson, not a middleman.',
  },
  {
    title: 'Competency',
    body: 'Red Seal Journeyman certified - the highest professional credential in the Alberta roofing trade. Not every licensed roofing contractor in Cochrane or Calgary can say that.',
  },
  {
    title: 'Proven Processes',
    body: 'From free estimate to finished roof - written quotes, clear timelines, and a 10-year workmanship guarantee before we start. Cochrane homeowners know exactly what they are getting from their local roofing company.',
  },
]

const EASE_OUT = [0.16, 1, 0.3, 1] as const
const VIMEO_ID = '917317949'
const THUMBNAIL = '/images/Sure West Roofing - Cochrane Roofing Contractor.webp'

export function WhySureWest() {
  const [playing, setPlaying] = useState(false)
  const [open, setOpen] = useState(0)

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
      {/* Paper-grain warm wash — consistent with Hero / Trust / Portfolio */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.55]"
        style={{
          background:
            'radial-gradient(1200px 600px at 15% 20%, rgba(212,175,96,0.09), transparent 60%), radial-gradient(900px 500px at 85% 80%, rgba(26,22,18,0.04), transparent 60%)',
        }}
      />

      <div className="relative max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[1fr_minmax(0,600px)] gap-12 lg:gap-20 items-start">
        {/* ── LEFT: copy + pillars ─────────────────────────────────── */}
        <motion.div
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
            className="font-display font-semibold leading-[1.05] text-[--color-near-black] mt-6 md:mt-7 max-w-[620px]"
            style={{
              fontSize: 'clamp(30px, 3.6vw, 52px)',
              letterSpacing: '-0.035em',
            }}
          >
            Cochrane&apos;s Red Seal Certified<br />Roofing Contractor
          </h2>

          <p
            className="mt-6 md:mt-7 max-w-[560px] text-[--color-near-black]/70 leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 400,
            }}
          >
            Every roofing contractor in Cochrane says they are the best.
            Here is what actually sets Sure West apart.
          </p>

          {/* ── Pillars accordion ───────────────────────────────────── */}
          <ul className="mt-10 md:mt-12 border-b border-[--color-near-black]/10">
            {pillars.map((p, i) => {
              const isOpen = open === i
              return (
                <motion.li
                  key={p.title}
                  className="relative border-t border-[--color-near-black]/10"
                  initial={{ y: 16, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: 0.15 + i * 0.07, ease: EASE_OUT }}
                >
                  {/* Gold rail slides in when open */}
                  <motion.span
                    aria-hidden="true"
                    className="absolute left-0 top-0 bottom-0 w-[2px] origin-top"
                    style={{ background: 'var(--color-accent, #D4AF60)' }}
                    initial={false}
                    animate={{ scaleY: isOpen ? 1 : 0, opacity: isOpen ? 1 : 0 }}
                    transition={{ duration: 0.45, ease: EASE_OUT }}
                  />

                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    aria-controls={`pillar-panel-${i}`}
                    className="group w-full text-left flex items-baseline gap-5 py-6 md:py-7 pl-4 md:pl-5 pr-2"
                  >
                    <span
                      className="font-display font-semibold leading-none tabular-nums flex-shrink-0"
                      style={{
                        fontSize: '22px',
                        color: 'var(--color-accent, #D4AF60)',
                        letterSpacing: '-0.02em',
                      }}
                      aria-hidden="true"
                    >
                      0{i + 1}
                    </span>
                    <motion.h3
                      className="flex-1 font-display font-semibold leading-[1.1] transition-colors duration-300"
                      style={{
                        fontSize: 'clamp(22px, 2.1vw, 30px)',
                        letterSpacing: '-0.028em',
                        color: isOpen
                          ? 'var(--color-near-black)'
                          : 'rgba(26,22,18,0.55)',
                      }}
                      initial={false}
                      animate={{ x: isOpen ? 4 : 0 }}
                      transition={{ duration: 0.45, ease: EASE_OUT }}
                    >
                      {p.title}
                    </motion.h3>

                    {/* Caret */}
                    <motion.span
                      aria-hidden="true"
                      className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center"
                      style={{
                        background: isOpen
                          ? 'var(--color-accent, #D4AF60)'
                          : 'rgba(26,22,18,0.06)',
                      }}
                      initial={false}
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.35, ease: EASE_OUT }}
                    >
                      <span
                        className="block w-[11px] h-[1.5px]"
                        style={{
                          background: isOpen ? '#fff' : 'var(--color-near-black)',
                        }}
                      />
                      <span
                        className="absolute block w-[1.5px] h-[11px]"
                        style={{
                          background: isOpen ? '#fff' : 'var(--color-near-black)',
                        }}
                      />
                    </motion.span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`pillar-panel-${i}`}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: EASE_OUT }}
                        className="overflow-hidden"
                      >
                        <p
                          className="pl-12 md:pl-[52px] pr-2 pb-7 max-w-[580px] text-[--color-near-black]/70 leading-[1.7]"
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
                </motion.li>
              )
            })}
          </ul>
        </motion.div>

        {/* ── RIGHT: video ─────────────────────────────────────────── */}
        <motion.div
          className="lg:sticky lg:top-[calc(var(--nav-height)+32px)]"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
        >
          <div className="relative aspect-video w-full overflow-hidden rounded-[--radius-lg] shadow-[0_30px_70px_-25px_rgba(26,22,18,0.45)] bg-black">
            {playing ? (
              <iframe
                src={`https://player.vimeo.com/video/${VIMEO_ID}?autoplay=1&title=0&byline=0&portrait=0`}
                className="absolute inset-0 w-full h-full border-0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowFullScreen
                title="Sure West Roofing - Cochrane, Alberta"
              />
            ) : (
              <button
                type="button"
                onClick={() => setPlaying(true)}
                aria-label="Play Sure West Roofing video"
                className="group absolute inset-0 w-full h-full"
              >
                <img
                  src={THUMBNAIL}
                  alt="Sure West Roofing team on a Cochrane project"
                  className="w-full h-full object-cover"
                  draggable={false}
                />
                {/* Warm darken + vignette */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 transition-colors duration-500 group-hover:bg-black/30"
                  style={{
                    background:
                      'linear-gradient(180deg, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.25) 60%, rgba(0,0,0,0.4) 100%)',
                  }}
                />
                {/* Gold play button */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <span
                    className="flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 shadow-[0_15px_40px_-10px_rgba(212,175,96,0.7)]"
                    style={{
                      width: '84px',
                      height: '84px',
                      background: 'var(--color-accent, #D4AF60)',
                    }}
                  >
                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                  </span>
                </span>
              </button>
            )}
          </div>

          <p
            className="mt-4 text-center text-[12px] uppercase tracking-[0.18em] text-[--color-near-black]/55"
            style={{ fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 500 }}
          >
            Sure West Roofing - Cochrane, Alberta
          </p>
        </motion.div>
      </div>
    </section>
  )
}
