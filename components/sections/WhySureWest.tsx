'use client'

import {
  Award,
  Users,
  ShieldCheck,
  FileCheck,
  type LucideIcon,
} from 'lucide-react'
import { FoundersVideo } from '@/components/ui/FoundersVideo'

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

interface WhySureWestProps {
  eyebrow?: string
  heading?: React.ReactNode
  body?: string
}

export function WhySureWest({
  eyebrow = 'Why Sure West',
  heading = (
    <>
      Cochrane&apos;s Red Seal Certified
      <br />
      Roofing Contractor
    </>
  ),
  body = 'Every roofing contractor in Cochrane says they are the best. Here is what actually sets Sure West apart.',
}: WhySureWestProps = {}) {
  return (
    <section
      id="why-sure-west"
      className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{
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
        <div className="flex flex-col items-center text-center max-w-[920px] mx-auto">
          <span
            className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] text-brand-gold"
            style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: "var(--font-inter), system-ui, sans-serif", fontWeight: 600, lineHeight: 1 }}
          >
            {eyebrow}
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
            {heading}
          </h2>

          <p
            className="mt-6 md:mt-7 max-w-[460px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontWeight: 400,
            }}
          >
            {body}
          </p>
        </div>

        {/* ── Two-column split: cards left, video right ─────────── */}
        <div className="mt-12 md:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* LEFT: 2 x 2 cards, height matches the video */}
          <ul className="grid h-full grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-fr">
            {pillars.map((p) => {
              const { Icon } = p
              return (
                <li
                  key={p.id}
                  className="group relative flex flex-col h-full rounded-[12px] border border-brand-border bg-white p-6 shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_8px_24px_-12px_rgba(44,71,102,0.12)] hover:border-brand-gold/40"
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
                      fontFamily: "var(--font-inter), system-ui, sans-serif",
                      fontWeight: 400,
                    }}
                  >
                    {p.body}
                  </p>
                </li>
              )
            })}
          </ul>

          {/* RIGHT: video */}
          <div>
            <div className="relative">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-x-6 -inset-y-4 -z-10"
                style={{
                  background:
                    'radial-gradient(500px 220px at 50% 50%, rgba(212,175,96,0.14), transparent 70%)',
                  filter: 'blur(4px)',
                }}
              />
              <FoundersVideo />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
