'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'
import { FoundersVideo } from '@/components/ui/FoundersVideo'
import { Reveal } from '@/components/ui/Reveal'

interface Pillar {
  title: string
  subtitle: string
  body: string
}

const PILLARS: Pillar[] = [
  {
    title: 'Legacy',
    subtitle: 'Built to Last 20 Years',
    body: "Every roof we install is one we'd be proud of in 20 years. No easy money, no corner cuts, no shingles laid over problems.",
  },
  {
    title: 'Brotherhood',
    subtitle: 'Same Crew, Every Roof',
    body: 'The crew you meet at the quote is on your roof. Same in-house team from tear-off to walkthrough, Red Seal Journeyman supervised.',
  },
  {
    title: 'Character',
    subtitle: "The Quote That Doesn't Move",
    body: "The price you approve is the price you pay. Quotes don't move, commitments kept, no padding mid-project.",
  },
  {
    title: 'Competency',
    subtitle: 'Red Seal Journeyman Standard',
    body: "Red Seal Journeyman is Canada's highest roofing credential. Deck inspected, flashings cut to the wall, manufacturer specs followed.",
  },
  {
    title: 'Proven Processes',
    subtitle: 'Same Playbook on Every Roof',
    body: 'Same checklists day one and three. Same communication before every job. Same magnetic nail sweep, same 10-year warranty.',
  },
]

const SERIF = "Georgia, 'Times New Roman', serif"

interface WhySureWestProps {
  eyebrow?: string
  heading?: React.ReactNode
  body?: string
  cityName?: string
  videoThumbnail?: string
  subheadMaxWidth?: string
}

export function WhySureWest({
  eyebrow = 'Why Sure West',
  heading = 'What Actually Sets Sure West Apart',
  body,
  cityName = 'Cochrane',
  videoThumbnail,
  subheadMaxWidth = '725px',
}: WhySureWestProps = {}) {
  const subhead =
    body ??
    `Every ${cityName} roofing contractor claims to be the best. Here's how we earn that on every roof.`

  // Default the first pillar (Legacy) open so the section reads without interaction
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      id="why-sure-west"
      className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
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

      <div className="relative max-w-[1200px] mx-auto">
        {/* Header */}
        <Reveal>
          <div className="flex flex-col items-center text-center max-w-[920px] mx-auto">
            <span
              className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] text-brand-gold"
              style={{
                background: '#FFFFFF',
                fontSize: '12px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 600,
                lineHeight: 1,
              }}
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
              className="mt-6 md:mt-7 text-brand-slate leading-[1.7]"
              style={{
                maxWidth: subheadMaxWidth,
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              {subhead}
            </p>
          </div>
        </Reveal>

        {/* Two-column split: editorial 5-pillar accordion left, video right */}
        <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* LEFT: editorial accordion */}
          <Reveal delay={150}>
            <ul className="flex flex-col">
              {PILLARS.map((p, i) => {
                const isOpen = open === i
                const num = String(i + 1).padStart(2, '0')
                return (
                  <li
                    key={p.title}
                    className="relative group/row"
                    style={{
                      borderTop: i === 0 ? '1px solid rgba(26,22,18,0.10)' : 'none',
                      borderBottom: '1px solid rgba(26,22,18,0.10)',
                    }}
                  >
                    {/* Active gold left-rail accent */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute left-0 top-0 bottom-0 transition-all duration-500 ease-out"
                      style={{
                        width: isOpen ? '3px' : '0px',
                        background:
                          'linear-gradient(180deg, rgba(212,175,96,0) 0%, rgba(212,175,96,0.95) 30%, rgba(212,175,96,0.95) 70%, rgba(212,175,96,0) 100%)',
                      }}
                    />

                    {/* Soft warm wash on active row */}
                    <span
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 transition-opacity duration-500 ease-out"
                      style={{
                        opacity: isOpen ? 1 : 0,
                        background:
                          'linear-gradient(90deg, rgba(212,175,96,0.06) 0%, rgba(212,175,96,0.00) 70%)',
                      }}
                    />

                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="relative flex items-center justify-between w-full text-left py-3.5 md:py-4 cursor-pointer gap-5 pl-4 md:pl-5 pr-1"
                    >
                      <span className="flex items-baseline gap-4 md:gap-5">
                        {/* Editorial numeral */}
                        <span
                          className={`shrink-0 transition-colors duration-300 ${
                            isOpen ? 'text-brand-gold' : 'text-brand-slate/55 group-hover/row:text-brand-gold/85'
                          }`}
                          style={{
                            fontFamily: SERIF,
                            fontStyle: 'italic',
                            fontSize: '20px',
                            fontWeight: 400,
                            letterSpacing: '0.04em',
                          }}
                        >
                          {num}
                        </span>

                        {/* Title */}
                        <span
                          className={`font-display font-semibold transition-colors duration-300 ${
                            isOpen
                              ? 'text-brand-gold'
                              : 'text-brand-navy group-hover/row:text-brand-gold'
                          }`}
                          style={{
                            fontSize: 'clamp(20px, 1.7vw, 23px)',
                            lineHeight: 1.15,
                            letterSpacing: '-0.012em',
                          }}
                        >
                          {p.title}
                        </span>
                      </span>

                      <span
                        aria-hidden="true"
                        className={`flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-300 ${
                          isOpen
                            ? 'bg-brand-gold border-brand-gold text-brand-navy rotate-45 shadow-[0_8px_18px_-8px_rgba(212,175,96,0.55)]'
                            : 'bg-white/40 border-brand-border text-brand-navy group-hover/row:border-brand-gold group-hover/row:bg-white'
                        }`}
                      >
                        <Plus className="w-5 h-5" strokeWidth={1.5} />
                      </span>
                    </button>

                    {/* Body — animated max-height for smooth reveal */}
                    <div
                      className="relative grid transition-[grid-template-rows,opacity] duration-500 ease-out"
                      style={{
                        gridTemplateRows: isOpen ? '1fr' : '0fr',
                        opacity: isOpen ? 1 : 0,
                      }}
                    >
                      <div className="overflow-hidden">
                        <div className="pl-4 md:pl-5 md:ml-[calc(14px+1rem)] pr-6 md:pr-12 pb-4 md:pb-5">
                          <p
                            className="text-brand-slate leading-[1.6]"
                            style={{
                              fontSize: '14.5px',
                              fontFamily: 'var(--font-inter), system-ui, sans-serif',
                              fontWeight: 400,
                            }}
                          >
                            {p.body}
                          </p>
                        </div>
                      </div>
                    </div>
                  </li>
                )
              })}
            </ul>
          </Reveal>

          {/* RIGHT: video */}
          <Reveal delay={300}>
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
              <FoundersVideo thumbnail={videoThumbnail} />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
