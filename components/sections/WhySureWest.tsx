'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
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

          {/* ── Pillars ─────────────────────────────────────────────── */}
          <ul className="mt-10 md:mt-12">
            {pillars.map((p, i) => (
              <motion.li
                key={p.title}
                className="relative border-t border-[--color-near-black]/10 pt-7 pb-7 first:border-t-0 first:pt-0"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.08, ease: EASE_OUT }}
              >
                <div className="flex items-baseline gap-5">
                  <span
                    className="font-display font-semibold leading-none tabular-nums"
                    style={{
                      fontSize: '22px',
                      color: 'var(--color-accent, #D4AF60)',
                      letterSpacing: '-0.02em',
                    }}
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                  <h3
                    className="font-display font-semibold leading-[1.1] text-[--color-near-black]"
                    style={{
                      fontSize: 'clamp(22px, 2.1vw, 30px)',
                      letterSpacing: '-0.028em',
                    }}
                  >
                    {p.title}
                  </h3>
                </div>
                <p
                  className="mt-3 max-w-[560px] text-[--color-near-black]/70 leading-[1.7]"
                  style={{
                    fontSize: '15.5px',
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {p.body}
                </p>
              </motion.li>
            ))}
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
