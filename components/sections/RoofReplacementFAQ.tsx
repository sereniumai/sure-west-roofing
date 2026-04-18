'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const FAQS = [
  {
    question: 'How much does a new roof cost in Cochrane, Alberta?',
    answer:
      'A typical asphalt shingle roof replacement in Cochrane costs between $8,000 and $18,000, with most 2,000 sq ft homes landing between $11,000 and $14,000. The final price depends on roof size, pitch, shingle tier (IKO Cambridge, Dynasty, or Nordic), whether decking needs replacement, and the complexity of flashing and valleys. Sure West gives every Cochrane homeowner a fixed written quote after an in-home inspection, so the number you see is the number you pay.',
  },
  {
    question: 'How long does a roof replacement take in Cochrane?',
    answer:
      'Most Cochrane single-family roof replacements are completed in 1 to 2 days once our crew is on site. Steep pitches, multi-layer tear-offs, and weather delays can extend the job to 3 days. We give you a firm start date and completion timeline in writing before work begins, and our Cochrane install crews are in-house, not subcontracted, so scheduling stays predictable.',
  },
  {
    question: 'What are the signs my roof needs replacing, not just repairing?',
    answer:
      "Clear signs you need a full roof replacement in Cochrane include shingles older than 20 years, curling or buckling across large sections, widespread granule loss, sagging decking, repeated leaks in multiple spots, and significant hail damage confirmed by an adjuster. If damage is localized and your roof is under 15 years old, roof repair is usually the smarter call. We will tell you honestly which one you need, including when you don't need us at all.",
  },
  {
    question: 'What warranty do I get on a roof replacement from Sure West?',
    answer:
      "Every Sure West roof replacement in Cochrane comes with two warranties: a manufacturer warranty from IKO covering the shingles themselves (up to lifetime limited, depending on tier), and a workmanship warranty from Sure West covering the installation. Because Sure West is a Red Seal certified contractor installing IKO products to spec, your shingles qualify for the top-tier manufacturer coverage that many non-certified installers can't offer.",
  },
  {
    question: 'Do I need to replace my roof after hail damage in Cochrane?',
    answer:
      "Not always. Light hail can cause cosmetic damage that doesn't affect the roof's life, while severe hail can compromise the entire roof system and require a full replacement. The right first step is a professional hail damage inspection, which also documents the damage for your insurance claim. Most Cochrane hail claims in the May to August season result in insurer-approved replacements.",
  },
  {
    question: 'When is the best time of year to replace a roof in Cochrane?',
    answer:
      'The best time to replace a roof in Cochrane is late April through October, when temperatures stay consistently above 5°C and shingles seal properly. Spring and early summer are peak booking season, with slots often filling 4 to 6 weeks out, especially after hail events. September and October are ideal for pre-winter installs before snow arrives. We do not install in deep cold because asphalt shingles will not seal correctly below 5°C.',
  },
  {
    question: 'Can I finance a roof replacement in Alberta?',
    answer:
      'Yes, Sure West offers financing options for Cochrane roof replacements, including payment plans that spread the cost over 12 to 60 months. Financing is a common path for insurance-deductible coverage and for homeowners who want to upgrade to a premium shingle tier without paying upfront. We will walk you through the options during your free in-home estimate.',
  },
  {
    question: 'Do I need to be home during my roof replacement?',
    answer:
      'No, you do not need to be home during your Cochrane roof replacement. Our crews work from the exterior only and do not need access to your home. We recommend moving vehicles out of the driveway, removing fragile items from walls (vibration can shake them loose), and keeping pets indoors. We send daily progress updates by text so you always know where the job stands.',
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
