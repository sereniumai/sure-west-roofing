'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

interface AccordionItem {
  heading: string
  body: string
}

const DEFAULT_ITEMS: AccordionItem[] = [
  {
    heading: 'Full tear-off and decking inspection',
    body:
      'We strip the roof down to the deck and inspect every square foot for soft spots, rot, or water damage. Any compromised sheathing is replaced before new materials go on.',
  },
  {
    heading: 'Underlayment, ice-and-water shield, and IKO shingles',
    body:
      'Synthetic underlayment and ice-and-water shield protect the deck at every critical point. IKO shingles go on in your chosen tier (Cambridge, Dynasty, or Class 4 Nordic).',
  },
  {
    heading: 'Full site cleanup, walkthrough, and warranty',
    body:
      'We tarp landscaping before tear-off, then run a magnetic nail sweep daily and at completion. Job closes with a walkthrough and your written 10-year workmanship guarantee.',
  },
]

const SERIF = "Georgia, 'Times New Roman', serif"

interface WhatIncludedAccordionProps {
  items?: AccordionItem[]
}

export function WhatIncludedAccordion({
  items = DEFAULT_ITEMS,
}: WhatIncludedAccordionProps = {}) {
  // Default first item open so the section reads without interaction
  const [open, setOpen] = useState<number | null>(0)

  return (
    <ul className="mt-8 flex flex-col">
      {items.map((item, i) => {
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
                {/* Editorial numeral */}
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

                {/* Title */}
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

            {/* Body — animated max-height for smooth reveal */}
            <div
              className="relative grid transition-[grid-template-rows,opacity] duration-500 ease-out"
              style={{
                gridTemplateRows: isOpen ? '1fr' : '0fr',
                opacity: isOpen ? 1 : 0,
              }}
            >
              <div className="overflow-hidden">
                <div className="pl-4 md:pl-5 pr-12 pb-4 md:pb-5" style={{ marginLeft: 'calc(14px + 1rem)' }}>
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
  )
}
