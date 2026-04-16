'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Award,
  Users,
  ShieldCheck,
  FileCheck,
  Play,
  type LucideIcon,
} from 'lucide-react'

interface Pillar {
  id: string
  title: string
  body: string
  Icon: LucideIcon
}

const pillars: Pillar[] = [
  {
    id: 'red-seal',
    title: 'Red Seal Certified',
    body: "Alberta's highest roofing credential. Earned through years of trade-tested work on every project.",
    Icon: Award,
  },
  {
    id: 'owner-operated',
    title: 'Owner On Every Job',
    body: "No salespeople. No middlemen. Deal with the owner from the first estimate to the final walkthrough.",
    Icon: Users,
  },
  {
    id: 'guarantee',
    title: '10-Year Guarantee',
    body: "Workmanship in writing before a nail is driven. If something's off, we come back to make it right.",
    Icon: ShieldCheck,
  },
  {
    id: 'insurance',
    title: 'Insurance Claim Experts',
    body: "We deal with your adjuster directly so you don't have to. No paperwork headaches, no guesswork.",
    Icon: FileCheck,
  },
]

const EASE_OUT = [0.16, 1, 0.3, 1] as const
const VIMEO_ID = '917317949'
const THUMBNAIL = '/images/Sure West Roofing - Founders Video.png'

export function WhySureWest() {
  const [playing, setPlaying] = useState(false)

  return (
    <section
      id="why-sure-west"
      className="relative bg-white overflow-hidden"
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
        {/* ── Header: eyebrow + h2 + sub (full width, centred) ──── */}
        <motion.div
          className="flex flex-col items-center text-center max-w-[920px] mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: EASE_OUT }}
        >
          <span
            className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] text-brand-gold"
            style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 600, lineHeight: 1 }}
          >
            Why Sure West
          </span>

          <h2
            id="why-sure-west-heading"
            className="font-display font-medium text-brand-navy mt-6 md:mt-7"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              lineHeight: 1.15,
              letterSpacing: '-0.005em',
            }}
          >
            Cochrane&apos;s Red Seal Certified<br />Roofing Contractor
          </h2>

          <p
            className="mt-6 md:mt-7 max-w-[460px] text-brand-slate leading-[1.7]"
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

        {/* ── Two-column split: cards left, video right ─────────── */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* LEFT: 2 x 2 cards, height matches the video */}
          <motion.ul
            className="grid h-full grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: EASE_OUT }}
          >
            {pillars.map((p, i) => {
              const { Icon } = p
              return (
                <motion.li
                  key={p.id}
                  className="group relative flex flex-col h-full rounded-[12px] border border-brand-border bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(44,71,102,0.12)] hover:border-brand-gold/40"
                  initial={{ y: 14, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.5, delay: 0.1 + i * 0.07, ease: EASE_OUT }}
                >
                  {/* Icon + title inline */}
                  <div className="flex items-center gap-2.5">
                    <span
                      aria-hidden="true"
                      className="flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-[6px] transition-colors duration-300 group-hover:bg-[rgba(212,175,96,0.22)]"
                      style={{ background: 'rgba(212,175,96,0.12)' }}
                    >
                      <Icon
                        className="w-5 h-5"
                        style={{ color: 'var(--color-accent, #D4AF60)' }}
                        strokeWidth={1.5}
                      />
                    </span>
                    <h3
                      className="font-display font-semibold leading-[1.15] text-[--color-near-black]"
                      style={{
                        fontSize: '18px',
                        letterSpacing: '-0.015em',
                      }}
                    >
                      {p.title}
                    </h3>
                  </div>

                  <p
                    className="mt-2.5 text-brand-slate leading-[1.55]"
                    style={{
                      fontSize: '13px',
                      fontFamily: "'Inter', system-ui, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {p.body}
                  </p>
                </motion.li>
              )
            })}
          </motion.ul>

          {/* RIGHT: video */}
          <motion.div
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
                    aria-label="Play Sure West Roofing founders video"
                    className="group absolute inset-0 w-full h-full cursor-pointer"
                  >
                    <img
                      src={THUMBNAIL}
                      alt="Sure West Roofing founders, Cochrane Alberta"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      draggable={false}
                    />

                    {/* Cinematic darken + warm vignette */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 transition-colors duration-500 group-hover:bg-black/10"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.05) 45%, rgba(0,0,0,0.35) 100%)',
                      }}
                    />

                    {/* Gold play button */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 flex items-center justify-center"
                    >
                      {/* Soft halo ring that pulses slightly on hover */}
                      <span
                        className="absolute w-[108px] h-[108px] rounded-full transition-all duration-500 group-hover:w-[128px] group-hover:h-[128px]"
                        style={{
                          background:
                            'radial-gradient(closest-side, rgba(212,175,96,0.45), rgba(212,175,96,0.12) 60%, transparent 75%)',
                        }}
                      />
                      {/* Button */}
                      <span
                        className="relative flex items-center justify-center rounded-full transition-all duration-300 group-hover:scale-110 shadow-[0_18px_40px_-12px_rgba(212,175,96,0.75),0_8px_20px_-8px_rgba(0,0,0,0.3)]"
                        style={{
                          width: '80px',
                          height: '80px',
                          background: 'var(--color-accent, #D4AF60)',
                        }}
                      >
                        <Play
                          className="w-7 h-7 text-white fill-white ml-1"
                          strokeWidth={1.5}
                        />
                      </span>
                    </span>
                  </button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
