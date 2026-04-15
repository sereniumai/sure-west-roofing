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
    body: 'Owner-operated and personally accountable. Deal directly with the owner from estimate to finish - no salespeople, no middlemen.',
  },
  {
    id: 'competency',
    title: 'Competency',
    body: 'Red Seal Journeyman certified. The highest credential in the Alberta roofing trade - few contractors can say that.',
  },
  {
    id: 'proven-processes',
    title: 'Proven Processes',
    body: 'Written quotes, clear timelines, and a 10-year workmanship guarantee in writing before a nail is driven.',
  },
  {
    id: 'local-roots',
    title: 'Local Roots',
    body: 'Born and based in Cochrane. We live where we work, so every roof we build is personal.',
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
            style={{ background: 'rgba(0,0,0,0.04)', color: 'var(--color-accent, #D4AF60)' }}
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
          {/* LEFT: pillar cards (2 x 2 on md+, stacked on mobile) */}
          <motion.ul
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            {pillars.map((p, i) => (
              <motion.li
                key={p.id}
                className="group relative rounded-[--radius-md] border border-[--color-near-black]/10 bg-white/70 backdrop-blur-[2px] p-5 md:p-6 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_-20px_rgba(26,22,18,0.25)] hover:border-[--color-near-black]/15"
                initial={{ y: 14, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: EASE_OUT }}
              >
                {/* Gold top rule — lights up on hover */}
                <span
                  aria-hidden="true"
                  className="absolute left-5 md:left-6 top-0 h-[2px] w-6 origin-left scale-x-75 transition-transform duration-500 group-hover:scale-x-100"
                  style={{ background: 'var(--color-accent, #D4AF60)' }}
                />
                <div className="flex items-baseline gap-3">
                  <span
                    className="font-display font-semibold leading-none tabular-nums flex-shrink-0"
                    style={{
                      fontSize: '13px',
                      color: 'var(--color-accent, #D4AF60)',
                      letterSpacing: '0.05em',
                    }}
                    aria-hidden="true"
                  >
                    0{i + 1}
                  </span>
                  <h3
                    className="font-display font-semibold leading-[1.1] text-[--color-near-black]"
                    style={{
                      fontSize: '20px',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {p.title}
                  </h3>
                </div>
                <p
                  className="mt-3 text-[--color-near-black]/70 leading-[1.65]"
                  style={{
                    fontSize: '14.5px',
                    fontFamily: "'Inter', system-ui, sans-serif",
                    fontWeight: 400,
                  }}
                >
                  {p.body}
                </p>
              </motion.li>
            ))}
          </motion.ul>

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
