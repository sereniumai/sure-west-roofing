'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface Pillar {
  id: string
  title: string
  body: string
}

const pillars: Pillar[] = [
  {
    id: 'character',
    title: 'Character',
    body: 'Owner-operated and personally accountable. Deal directly with the owner from estimate to finish.',
  },
  {
    id: 'competency',
    title: 'Competency',
    body: 'Red Seal Journeyman certified - the highest credential in the Alberta roofing trade.',
  },
  {
    id: 'proven-processes',
    title: 'Proven Processes',
    body: 'Written quotes, clear timelines, and a 10-year workmanship guarantee in writing before a nail is driven.',
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

      <div className="relative max-w-[1320px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,480px)_1fr] gap-10 lg:gap-20 items-center">
        {/* ── Copy column (right on desktop) ────────────────────── */}
        <motion.div
          className="lg:order-2"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <span
            className="inline-flex items-center h-8 md:h-9 px-3 md:px-4 text-[13px] md:text-[14px] font-body font-bold uppercase tracking-[0.12em] rounded-[--radius-sm]"
            style={{ background: 'rgba(0,0,0,0.04)', color: 'var(--color-accent, #D4AF60)' }}
          >
            Why Sure West
          </span>

          <h2
            id="why-sure-west-heading"
            className="font-display font-semibold leading-[1.05] text-[--color-near-black] mt-6 md:mt-7 max-w-[640px]"
            style={{
              fontSize: 'clamp(30px, 3.8vw, 52px)',
              letterSpacing: '-0.035em',
            }}
          >
            Cochrane&apos;s Red Seal Certified<br />Roofing Contractor
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

          {/* ── Bullet list ───────────────────────────────────────── */}
          <ul className="mt-4 md:mt-5 space-y-4 md:space-y-5 max-w-[620px]">
            {pillars.map((p, i) => (
              <motion.li
                key={p.id}
                className="flex items-start gap-3"
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.45, delay: 0.12 + i * 0.07, ease: EASE_OUT }}
              >
                <span
                  aria-hidden="true"
                  className="flex-shrink-0 inline-flex items-center justify-center w-6 h-6 rounded-full mt-0.5"
                  style={{ background: 'rgba(212,175,96,0.15)' }}
                >
                  <Check
                    className="w-3.5 h-3.5"
                    style={{ color: 'var(--color-accent, #D4AF60)' }}
                    strokeWidth={2.5}
                  />
                </span>
                <p
                  className="text-[--color-near-black]/80 leading-[1.6]"
                  style={{
                    fontSize: '15px',
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  <span className="font-semibold text-[--color-near-black]">
                    {p.title}.
                  </span>{' '}
                  {p.body}
                </p>
              </motion.li>
            ))}
          </ul>
        </motion.div>

        {/* ── Video column (left on desktop) ─────────────────────── */}
        <motion.div
          className="lg:order-1 lg:self-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: 0.1, ease: EASE_OUT }}
        >
          <div className="relative">
            {/* Warm gold halo */}
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
          </div>
        </motion.div>
      </div>
    </section>
  )
}
