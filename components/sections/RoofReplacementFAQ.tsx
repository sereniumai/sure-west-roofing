'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const FAQS = [
  {
    question: 'How much does a roof replacement cost in Cochrane?',
    answer:
      'Most residential roof replacements in Cochrane range from $8,000 to $18,000, depending on roof size in square feet, pitch, shingle tier, and deck condition found during tear-off. We provide a detailed written quote at no charge after an on-site inspection. GST (5%) applies in Alberta, no PST. The price you approve is the price you pay.',
  },
  {
    question: 'How long does a roof replacement take?',
    answer:
      'Most standard single-family homes in Cochrane take one day. Larger homes, steeper pitches, or roofs with multiple dormers and penetrations take two. We confirm your timeline in writing before the job starts and never leave a roof unsecured overnight.',
  },
  {
    question: 'Do you tear off the old roof or install over it?',
    answer:
      'We always do a full tear-off. Installing over old shingles can void the IKO material warranty, trap moisture, and hide deck damage that needs addressing. Every Sure West replacement starts with a complete removal so the deck can be inspected before new materials go on.',
  },
  {
    question: 'What time of year is best for a roof replacement in Alberta?',
    answer:
      'Late spring through early fall provides the most reliable conditions in Alberta. That said, we carry out roof replacements year-round in Cochrane where weather allows. Shingles have minimum temperature requirements for sealing, so we schedule around the forecast and will advise if timing affects your options.',
  },
  {
    question: 'Do you handle the insurance claim if hail caused the damage?',
    answer:
      'Yes. If hail or wind caused the damage, we work directly with your insurance adjuster and prepare the full documentation your insurer requires. Alberta home insurance typically covers sudden storm damage. We have handled many Cochrane hail damage claims and can guide you through the process at no extra charge.',
  },
  {
    question: 'What happens if my roof deck is damaged?',
    answer:
      'If we find deck damage during tear-off, we assess the extent, photograph it, and give you a transparent cost to repair before additional work proceeds. Deck repairs are billed by the square foot at a rate disclosed in your original quote. You approve before we continue.',
  },
  {
    question: 'Will my yard and landscaping be protected during the install?',
    answer:
      'Yes. We lay protective boards over gardens, AC units, and landscaping before tear-off begins. A magnetic nail sweep covers the full property perimeter after the job is complete. We leave the site as clean as we found it, or cleaner.',
  },
  {
    question: 'What warranty comes with a Sure West roof replacement?',
    answer:
      'Every Sure West roof replacement includes a 10-year workmanship warranty covering installation defects. The IKO shingles carry a separate manufacturer material warranty: lifetime limited on most tiers, with wind and algae coverage depending on the product chosen. Both warranties are written into your contract before we start.',
  },
]

export function RoofReplacementFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  const mid = Math.ceil(FAQS.length / 2)
  const columns = [FAQS.slice(0, mid), FAQS.slice(mid)]

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-20 md:py-24"
      style={{
        background: '#F7F5F0',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: '1320px' }}>
        {/* Header */}
        <div className="relative flex flex-col items-center text-center mb-10 md:mb-14 max-w-[960px] mx-auto">
          <span
            className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{
              background: '#F0EEE8',
              fontSize: '12px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            FAQs
          </span>
          <h2
            className="font-display font-medium max-w-[960px] text-brand-navy"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              lineHeight: 1.15,
              letterSpacing: '-0.005em',
            }}
          >
            Roof Replacement Questions, Answered
          </h2>
          <p
            className="mt-6 max-w-[380px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Straight answers from your local Red Seal certified roofing contractor in Cochrane.
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
              Get a Free Estimate
            </Button>
          </div>
        </div>

        {/* Two-column accordion */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 mt-4">
          {columns.map((col, colIdx) => (
            <ul key={colIdx} className="flex flex-col">
              {col.map((faq) => {
                const i = FAQS.indexOf(faq)
                const isOpen = open === i
                return (
                  <li key={faq.question} className="border-b border-[--color-near-black]/12">
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group flex items-center justify-between w-full text-left py-5 md:py-6 cursor-pointer gap-4"
                    >
                      <span
                        className={`font-semibold leading-[1.35] transition-colors duration-200 ${
                          isOpen
                            ? 'text-brand-navy'
                            : 'text-brand-navy group-hover:text-brand-gold'
                        }`}
                        style={{
                          fontSize: '18px',
                          fontFamily: 'var(--font-inter), system-ui, sans-serif',
                        }}
                      >
                        {faq.question}
                      </span>
                      <span
                        aria-hidden="true"
                        className={`flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full border transition-all duration-200 ${
                          isOpen
                            ? 'bg-brand-gold border-brand-gold text-brand-navy rotate-45'
                            : 'bg-transparent border-brand-border text-brand-navy group-hover:border-brand-gold'
                        }`}
                      >
                        <Plus className="w-5 h-5" strokeWidth={1.5} />
                      </span>
                    </button>

                    {isOpen && (
                      <div className="overflow-hidden">
                        <div
                          className="pt-4 pb-5 md:pb-7 pr-6 md:pr-14 text-brand-navy leading-[1.6]"
                          style={{
                            fontSize: '15px',
                            fontFamily: 'var(--font-inter), system-ui, sans-serif',
                            fontWeight: 400,
                          }}
                        >
                          {faq.answer}
                        </div>
                      </div>
                    )}
                  </li>
                )
              })}
            </ul>
          ))}
        </div>

        <p
          className="text-center mt-10 text-brand-slate"
          style={{
            fontSize: '14.5px',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
          }}
        >
          Have a question not listed here?{' '}
          <Link
            href="/free-roof-estimate-cochrane"
            className="font-semibold text-brand-navy hover:text-brand-gold transition-colors"
            style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            Contact Sure West
          </Link>
        </p>
      </div>
    </section>
  )
}
