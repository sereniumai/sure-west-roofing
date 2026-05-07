'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

interface IncludedItem {
  heading: string
  body: string
}

const ITEMS: IncludedItem[] = [
  {
    heading: 'Cut and frame to manufacturer spec',
    body: 'A Red Seal Journeyman cuts the rough opening in your Cochrane roof deck and frames it to the skylight manufacturer’s spec. Rafter cuts are reinforced before any weather-side work begins. The opening is the foundation of every skylight install. Get this wrong and no flashing system will save the install.',
  },
  {
    heading: 'Install with manufacturer step flashing',
    body: 'The skylight is set into the opening using the manufacturer’s step flashing kit, with ice-and-water shield wrapping the perimeter. Most failed installs skip this layer. The shingles are then woven back into the flashing system, finished to manufacturer spec, and tested for water-tightness.',
  },
  {
    heading: 'Interior trim and workmanship guarantee',
    body: 'Interior trim and drywall return are finished paint-ready, ready for your decorator or our recommended finisher. At handover, you receive your written workmanship guarantee from Sure West, layered on top of the manufacturer warranty on the unit. Both in your written quote.',
  },
]

const SERIF = "Georgia, 'Times New Roman', serif"

export function SkylightWhatIncluded() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <section
      className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-10 lg:gap-16 items-center">
          {/* LEFT: heading + accordion + CTA */}
          <Reveal>
            <div className="flex flex-col lg:order-1">
              <span
                className="inline-flex self-start items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
                style={{
                  background: '#FFFFFF',
                  fontSize: '12px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 600,
                  lineHeight: 1,
                }}
              >
                What&apos;s Included
              </span>
              <h2
                className="font-display font-medium text-brand-navy"
                style={{
                  fontSize: 'clamp(32px, 4.5vw, 48px)',
                  lineHeight: 1.15,
                  letterSpacing: '-0.005em',
                }}
              >
                What&apos;s Included in a Sure
                <br />
                West Skylight Install
              </h2>
              <p
                className="mt-5 max-w-[520px] text-brand-slate leading-[1.7]"
                style={{
                  fontSize: '16px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                A skylight is only as reliable as the cut, the frame, and the flashing that surround
                it. Three things make a Cochrane skylight install last, and all three are in every
                Sure West project.
              </p>

              {/* Accordion */}
              <ul className="mt-8 flex flex-col">
                {ITEMS.map((item, i) => {
                  const isOpen = open === i
                  const num = String(i + 1).padStart(2, '0')
                  return (
                    <li
                      key={item.heading}
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
                          <span
                            className={`shrink-0 transition-colors duration-300 ${
                              isOpen
                                ? 'text-brand-gold'
                                : 'text-brand-slate/55 group-hover/row:text-brand-gold/85'
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
                          <span
                            className={`font-display font-semibold transition-colors duration-300 ${
                              isOpen
                                ? 'text-brand-gold'
                                : 'text-brand-navy group-hover/row:text-brand-gold'
                            }`}
                            style={{
                              fontSize: 'clamp(18px, 1.5vw, 21px)',
                              lineHeight: 1.2,
                              letterSpacing: '-0.012em',
                            }}
                          >
                            {item.heading}
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

                      {/* Body */}
                      <div
                        className="relative grid transition-[grid-template-rows,opacity] duration-500 ease-out"
                        style={{
                          gridTemplateRows: isOpen ? '1fr' : '0fr',
                          opacity: isOpen ? 1 : 0,
                        }}
                      >
                        <div className="overflow-hidden">
                          <div
                            className="pl-4 md:pl-5 pr-12 pb-4 md:pb-5"
                            style={{ marginLeft: 'calc(14px + 1rem)' }}
                          >
                            <p
                              className="text-brand-slate leading-[1.6]"
                              style={{
                                fontSize: '14.5px',
                                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                                fontWeight: 400,
                              }}
                            >
                              {item.body}
                            </p>
                          </div>
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>

              <div className="mt-10">
                <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
                  Get a Free Estimate
                </Button>
              </div>
            </div>
          </Reveal>

          {/* RIGHT: image */}
          <Reveal delay={150}>
            <div className="relative lg:order-2">
              <div
                className="relative overflow-hidden rounded-[18px] aspect-[4/5] lg:aspect-auto lg:h-[600px]"
                style={{
                  boxShadow:
                    '0 2px 4px rgba(44,71,102,0.06), 0 12px 40px -8px rgba(44,71,102,0.18), 0 40px 100px -20px rgba(44,71,102,0.22)',
                }}
              >
                <Image
                  src="/images/Cochrane Roofing Contractor Gallery 5.webp"
                  alt="Sure West Roofing crew completing skylight flashing on a Cochrane Alberta home"
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-cover"
                  loading="lazy"
                />
                <div
                  aria-hidden="true"
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    background:
                      'linear-gradient(to top, rgba(44,71,102,0.18) 0%, transparent 40%)',
                  }}
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
