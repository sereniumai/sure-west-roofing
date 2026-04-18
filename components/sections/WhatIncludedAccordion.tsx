'use client'

import { useState } from 'react'
import { Plus } from 'lucide-react'

const ITEMS = [
  {
    heading: 'Full tear-off of old shingles, underlayment, and damaged decking',
    body:
      'We strip the entire roof down to the deck — old shingles, fasteners, and existing underlayment. Every square foot of decking gets inspected for soft spots, water damage, or rot, and any compromised sheathing is replaced before new materials go on. Installing over old shingles voids most manufacturer warranties and traps moisture against the deck, which is why Sure West never offers it as an option on a Cochrane roof replacement.',
  },
  {
    heading: 'Synthetic underlayment with ice-and-water shield',
    body:
      'A synthetic underlayment goes down across the full roof for a tear-resistant, breathable secondary water barrier. Self-adhered ice-and-water shield is applied at all eaves, valleys, and around penetrations — the spots most likely to fail under Cochrane freeze-thaw cycles and ice damming. The double-layer system protects your decking even if a shingle is lifted during a Chinook windstorm or hail event.',
  },
  {
    heading: 'New IKO architectural or impact-resistant shingles',
    body:
      'Sure West installs IKO shingles exclusively: Cambridge architectural for value, Dynasty for upgraded curb appeal, and Nordic for Class 4 impact-rated hail protection. All three carry IKO\u2019s manufacturer warranty (lifetime limited on most tiers) and qualify for the top-tier coverage available only to Red Seal certified installers like Sure West. We help you pick the right tier based on your budget, neighbourhood, and exposure to Alberta hail.',
  },
  {
    heading: 'Full site cleanup with magnetic nail sweep',
    body:
      'Tear-off creates a lot of debris and stray nails. We tarp gardens, walkways, AC units, and landscaping before work begins, and run a magnetic nail sweep across the entire property perimeter at the end of every day and again at job completion. A final walk-through with the homeowner closes out the job — your driveway and lawn should look exactly as we found them, just under a brand new roof.',
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
