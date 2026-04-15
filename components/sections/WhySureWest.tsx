'use client'

import { motion } from 'framer-motion'

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
        {/* ── Header: eyebrow + h2 + sub ──────────────────────────── */}
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
            className="font-display font-semibold leading-[1.05] text-[--color-near-black] mt-6 md:mt-7 whitespace-normal lg:whitespace-nowrap"
            style={{
              fontSize: 'clamp(30px, 4.2vw, 60px)',
              letterSpacing: '-0.04em',
            }}
          >
            Cochrane&apos;s Red Seal Certified Roofing Contractor
          </h2>

          <p
            className="mt-6 md:mt-7 max-w-[620px] text-[--color-near-black]/70 leading-[1.7]"
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

        {/* ── Cinematic video ──────────────────────────────────────── */}
        <motion.div
          className="relative mt-12 md:mt-16 max-w-[1100px] mx-auto"
          initial={{ y: 40, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.15, ease: EASE_OUT }}
        >
          {/* Warm gold glow behind video for anchor */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -inset-x-10 -inset-y-8 -z-10"
            style={{
              background:
                'radial-gradient(600px 220px at 50% 50%, rgba(212,175,96,0.15), transparent 70%)',
              filter: 'blur(4px)',
            }}
          />

          <div className="relative aspect-video w-full overflow-hidden rounded-[--radius-lg] bg-black shadow-[0_40px_100px_-30px_rgba(26,22,18,0.55),0_20px_50px_-20px_rgba(26,22,18,0.35)] ring-1 ring-black/5">
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
        </motion.div>

        {/* ── Pillars as a 3-column editorial row ──────────────────── */}
        <div className="mt-16 md:mt-24 max-w-[1100px] mx-auto">
          {/* Hairline bracket to visually tie the row */}
          <div className="h-px w-full bg-[--color-near-black]/10 mb-12 md:mb-14" />

          <ul className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-12 lg:gap-16">
            {pillars.map((p, i) => (
              <motion.li
                key={p.id}
                className="relative md:pl-8 md:border-l md:border-[--color-near-black]/10 md:first:border-l-0 md:first:pl-0"
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease: EASE_OUT }}
              >
                <div className="flex items-baseline gap-3">
                  <span
                    className="font-display font-semibold leading-none tabular-nums"
                    style={{
                      fontSize: '13px',
                      color: 'var(--color-accent, #D4AF60)',
                      letterSpacing: '0.04em',
                    }}
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                  <h3
                    className="text-[17px] md:text-[18px] font-semibold tracking-[-0.01em] text-[--color-near-black]"
                    style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                  >
                    {p.title}
                  </h3>
                </div>
                <p
                  className="mt-3 text-[14.5px] leading-[1.75] text-[--color-near-black]/70"
                  style={{ fontFamily: "'Inter', system-ui, sans-serif" }}
                >
                  {p.body}
                </p>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
