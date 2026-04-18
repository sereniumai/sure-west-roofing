'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowRight, Plus } from 'lucide-react'

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
      'We tarp landscaping before tear-off, then run a magnetic nail sweep daily and at completion. Job closes with a walkthrough and your written 10-year workmanship warranty.',
  },
]

interface WhatIncludedAccordionProps {
  items?: AccordionItem[]
  ctaHref?: string
  ctaLabel?: string
}

export function WhatIncludedAccordion({
  items = DEFAULT_ITEMS,
  ctaHref = '/free-roof-estimate-cochrane',
  ctaLabel = 'Get Free Estimate',
}: WhatIncludedAccordionProps = {}) {
  // One item is always open — clicking the open item is a no-op.
  const [open, setOpen] = useState<number>(0)

  return (
    <ul
      className="mt-8 flex flex-col max-w-[480px] bg-brand-cream rounded-[16px] p-3 md:p-4"
      style={{
        boxShadow: '0 2px 8px rgba(44,71,102,0.06), 0 12px 28px -16px rgba(44,71,102,0.10)',
      }}
    >
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <li key={item.heading}>
            <button
              type="button"
              onClick={() => setOpen(i)}
              aria-expanded={isOpen}
              className="group flex items-start justify-between w-full text-left py-3 px-3 md:px-4 rounded-[10px] cursor-pointer gap-4 hover:bg-white/50 transition-colors duration-200"
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
                <div className="pt-1 pb-4 px-3 md:px-4">
                  <p
                    className="text-brand-slate leading-[1.65]"
                    style={{
                      fontSize: '14px',
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      fontWeight: 400,
                    }}
                  >
                    {item.body}
                  </p>
                  <Link
                    href={ctaHref}
                    className="mt-4 inline-flex w-fit items-center gap-1.5 text-brand-gold font-semibold hover:text-[#B8943F] transition-colors duration-200"
                    style={{
                      fontSize: '13px',
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                      textDecoration: 'underline',
                      textUnderlineOffset: '3px',
                    }}
                  >
                    {ctaLabel}
                    <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
                  </Link>
                </div>
              </div>
            )}
          </li>
        )
      })}
    </ul>
  )
}
