'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

const ITEMS = [
  {
    heading: 'Full tear-off and decking inspection',
    body:
      'We strip the roof down to the deck and inspect every square foot for soft spots, rot, or water damage. Any compromised sheathing is replaced before new materials go on.',
  },
  {
    heading: 'New underlayment, ice-and-water shield, and IKO shingles',
    body:
      'Synthetic underlayment and ice-and-water shield protect the deck at all critical points. IKO shingles then go on in your chosen tier (Cambridge, Dynasty, or Class 4 Nordic), backed by IKO\u2019s manufacturer warranty.',
  },
  {
    heading: 'Full site cleanup, walkthrough, and written warranty',
    body:
      'We tarp gardens, walkways, and landscaping before tear-off, then run a magnetic nail sweep daily and at completion. The job closes with a walkthrough and your written 10-year workmanship warranty.',
  },
]

export function WhatIncludedAccordion() {
  const [open, setOpen] = useState<number | null>(0)

  return (
    <ul className="mt-8 flex flex-col max-w-[520px] border-t border-[--color-near-black]/12">
      {ITEMS.map((item, i) => {
        const isOpen = open === i
        return (
          <li key={item.heading} className="border-b border-[--color-near-black]/12">
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="group flex items-start justify-between w-full text-left py-4 md:py-5 cursor-pointer gap-4"
            >
              <span
                className={`font-semibold leading-[1.4] transition-colors duration-200 ${
                  isOpen
                    ? 'text-brand-navy'
                    : 'text-brand-navy group-hover:text-brand-gold'
                }`}
                style={{
                  fontSize: '15px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                }}
              >
                {item.heading}
              </span>
              <span
                aria-hidden="true"
                className={`flex-shrink-0 inline-flex items-center justify-center w-7 h-7 rounded-full border transition-all duration-200 ${
                  isOpen
                    ? 'bg-brand-gold border-brand-gold text-brand-navy rotate-45'
                    : 'bg-transparent border-brand-border text-brand-navy group-hover:border-brand-gold'
                }`}
              >
                <Plus className="w-4 h-4" strokeWidth={1.5} />
              </span>
            </button>

            {isOpen && (
              <div className="overflow-hidden">
                <div
                  className="pb-5 pr-2 text-brand-slate leading-[1.65]"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {item.body}
                </div>
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
