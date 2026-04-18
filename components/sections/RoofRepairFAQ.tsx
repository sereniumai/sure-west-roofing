'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const FAQS = [
  {
    question: 'How much does a roof repair cost in Cochrane?',
    answer:
      'Most roof repairs in Cochrane fall between $350 and $1,500, depending on what is wrong. Small fixes like resealing a vent pipe or replacing a few shingles sit at the lower end, while flashing rebuilds, leak chasing, and storm damage repairs land higher. Sure West provides a fixed written quote after an on-site diagnostic, so the price you see is the price you pay.',
  },
  {
    question: 'How quickly can you respond to a roof leak in Cochrane?',
    answer:
      'For active leaks, Sure West aims to be on-site within 1 to 3 business days for Cochrane homeowners. We carry tarp materials in every truck so we can dry the roof in immediately if a permanent fix needs to wait on weather or parts. Most non-emergency repair calls in Cochrane are diagnosed and quoted within a week.',
  },
  {
    question: 'Can you match my existing shingles?',
    answer:
      'In most cases, yes. Sure West installs IKO shingles exclusively (Cambridge, Dynasty, and Nordic), and most Cochrane roofs built in the last 15 years use one of these lines. Even if a perfect colour match is not possible due to weathering, we choose replacement shingles that blend into the slope without standing out.',
  },
  {
    question: 'Will my home insurance cover a roof repair?',
    answer:
      'It depends on the cause. Sudden damage from hail, wind, or a fallen branch is typically covered by Alberta home insurance, while general wear and tear is not. Sure West documents the damage in writing with photos and helps you file the claim. We have handled many insurance-funded roof repairs across Cochrane.',
  },
  {
    question: 'How long does a typical roof repair take?',
    answer:
      'Most Cochrane roof repairs are completed in a single day on-site, often within 2 to 4 hours. Larger jobs involving multiple flashing rebuilds, complex valleys, or extensive shingle damage may take a full day or stretch into a second day. We confirm timing in writing before work begins.',
  },
  {
    question: 'When is a roof repair the right call vs a full replacement?',
    answer:
      'If your roof is under 15 years old, the damage is localized, and the deck is sound, a repair is almost always the smarter and more affordable option. If you are seeing widespread shingle failure, repeat leaks in different spots, or sagging decking, replacement is usually the better long-term call. Sure West will tell you honestly which one fits your situation.',
  },
  {
    question: 'Do you offer emergency roof repair in Cochrane?',
    answer:
      'Sure West provides priority response for active leaks, storm damage, and Chinook wind damage in Cochrane and the surrounding area. We can typically tarp a damaged roof within 24 hours to stop further water entry, then return for the permanent repair once weather and materials allow. Call our line for fastest response.',
  },
  {
    question: 'What warranty do I get on a roof repair from Sure West?',
    answer:
      'Every Sure West roof repair in Cochrane comes with a 2-year workmanship warranty in writing, covering the specific repair we carried out. If a leak returns to the same spot within the warranty term because of our workmanship, we come back and fix it at no charge. Both terms are spelled out in your written quote.',
  },
]

export function RoofRepairFAQ() {
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
            Roof Repair Questions, Answered
          </h2>
          <p
            className="mt-6 max-w-[420px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Straight answers from your local Red Seal certified roof repair contractor in Cochrane.
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

// Exported for the page.tsx FAQPage JSON-LD schema
export const ROOF_REPAIR_FAQS = FAQS
