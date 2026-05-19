'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus, ShieldCheck } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

interface Pillar {
  title: string
  subtitle: string
  body: string
}

const PILLARS: Pillar[] = [
  {
    title: 'Legacy',
    subtitle: 'The Reputation We Leave',
    body: "Legacy is bigger than the roof. It's the reputation we leave in Cochrane, as roofers and as community builders. A company the community knows by name and is proud to call its own.",
  },
  {
    title: 'Brotherhood',
    subtitle: 'On the Roof and Off',
    body: 'A team that shows up for each other on the job and off. We challenge each other to be better, because the work is too hard to do alongside people you cannot respect.',
  },
  {
    title: 'Character',
    subtitle: 'Hired for Character',
    body: 'We hire for character first. Skills and knowledge can be taught, alignment of values cannot. The team you trust on your roof is built on who they are, not just what they know.',
  },
  {
    title: 'Competency',
    subtitle: 'Education Shared, Not Gatekept',
    body: 'Education shared, not gatekept. We teach as quickly as the team can absorb. Red Seal Journeyman is our standard, Canada’s highest trade credential in roofing.',
  },
  {
    title: 'Proven Processes',
    subtitle: 'Predictability in Roofing',
    body: 'Same checklists, same standard, same experience time after time. Predictability in roofing is rare. Our processes are how we deliver it on every roof.',
  },
]

const SERIF = "Georgia, 'Times New Roman', serif"

interface WhySureWestProps {
  eyebrow?: string
  heading?: React.ReactNode
  body?: string
  cityName?: string
  subheadMaxWidth?: string
}

export function WhySureWest({
  eyebrow = 'Why Sure West',
  heading = 'What Actually Sets Sure West Apart',
  body,
  cityName = 'Cochrane',
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
        <div className="mt-10 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center lg:items-stretch">
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

          {/* RIGHT: image — squarer on mobile, fills accordion column height on desktop */}
          <Reveal delay={300}>
            <div className="relative h-full">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -inset-x-6 -inset-y-4 -z-10"
                style={{
                  background:
                    'radial-gradient(500px 220px at 50% 50%, rgba(212,175,96,0.14), transparent 70%)',
                  filter: 'blur(4px)',
                }}
              />
              <div
                className="relative w-full aspect-square lg:aspect-auto lg:h-full overflow-hidden rounded-[18px]"
                style={{
                  boxShadow:
                    '0 2px 4px rgba(44,71,102,0.06), 0 12px 40px -8px rgba(44,71,102,0.18), 0 40px 100px -20px rgba(44,71,102,0.22)',
                  minHeight: '420px',
                }}
              >
                <Image
                  src="/Sure West Roofing in Cochrane.webp"
                  alt="Sure West Roofing, Red Seal Journeyman roofing contractor in Cochrane Alberta"
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 90vw, 580px"
                  quality={100}
                  className="object-cover"
                />
              </div>

              {/* Floating trust badge, overhangs the image bottom-right */}
              <div
                className="absolute -bottom-5 -right-3 sm:-bottom-6 sm:-right-5 lg:-bottom-7 lg:-right-7 bg-white rounded-[14px] flex items-center gap-3.5 px-4 py-3 sm:px-5 sm:py-3.5 max-w-[260px]"
                style={{
                  boxShadow:
                    '0 2px 4px rgba(44,71,102,0.08), 0 14px 32px -10px rgba(44,71,102,0.22), 0 28px 60px -18px rgba(44,71,102,0.18)',
                  zIndex: 2,
                }}
              >
                <span
                  className="flex-shrink-0 inline-flex items-center justify-center w-10 h-10 rounded-full"
                  style={{
                    background: 'rgba(212,175,96,0.14)',
                    border: '1px solid rgba(212,175,96,0.35)',
                  }}
                >
                  <ShieldCheck className="w-5 h-5 text-brand-gold" strokeWidth={1.75} />
                </span>
                <div>
                  <div
                    className="font-display text-brand-navy leading-none"
                    style={{ fontSize: '18px', fontWeight: 700, letterSpacing: '-0.01em' }}
                  >
                    Hired for Character
                  </div>
                  <div
                    className="text-brand-slate mt-1.5"
                    style={{
                      fontSize: '12px',
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontWeight: 500,
                      letterSpacing: '0.01em',
                      lineHeight: 1.3,
                    }}
                  >
                    Trained for the craft
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
