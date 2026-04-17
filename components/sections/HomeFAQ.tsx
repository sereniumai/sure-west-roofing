'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface FAQ {
  question: string
  /** Plain-text answer for JSON-LD. Use for schema only. */
  answerText: string
  /** Rich JSX answer rendered in the UI. */
  answer: React.ReactNode
}

const FAQS: FAQ[] = [
  {
    question: 'Do you serve Calgary and Canmore as well as Cochrane?',
    answerText:
      'Yes. Sure West Roofing is based in Cochrane, Alberta and serves homeowners across the entire Calgary region - including Canmore, Airdrie, and Rocky View County. We are your local Red Seal certified roofing contractor wherever you are in southern Alberta.',
    answer: (
      <>
        Yes. Sure West Roofing is based in Cochrane, Alberta and serves homeowners across the entire Calgary region - including Canmore, Airdrie, and Rocky View County. We are your local Red Seal certified roofing contractor wherever you are in southern Alberta.
      </>
    ),
  },
  {
    question: 'What makes Sure West different from other roofing contractors?',
    answerText:
      'Three things. Red Seal Journeyman certification - the highest professional credential in the Alberta roofing trade. Owner-operated - you deal directly with the owner from estimate to completion. And our fixed-price promise - the quote you receive is the invoice you pay. No exceptions.',
    answer: (
      <>
        Three things. Red Seal Journeyman certification - the highest professional credential in the Alberta roofing trade. Owner-operated - you deal directly with the owner from estimate to completion. And our fixed-price promise - the quote you receive is the invoice you pay. No exceptions.
      </>
    ),
  },
  {
    question: 'How do I get a free roofing estimate in Cochrane or Calgary?',
    answerText:
      'Fill in the contact form on this page or click Get a Free Estimate. We come to your property, carry out a thorough roof assessment, and provide a clear itemised written quote - completely free with no obligation and no sales pressure.',
    answer: (
      <>
        Fill in the contact form on this page or click Get a Free Estimate. We come to your property, carry out a thorough roof assessment, and provide a clear itemised written quote - completely free with no obligation and no sales pressure.
      </>
    ),
  },
  {
    question: 'Does home insurance cover hail damage roof repair in Alberta?',
    answerText:
      'In the majority of cases - yes. Alberta home insurance policies typically cover sudden storm and hail damage to residential roofs. We work directly with your insurance adjuster and handle the documentation. Learn more on our hail damage repair Cochrane page.',
    answer: (
      <>
        In the majority of cases - yes. Alberta home insurance policies typically cover sudden storm and hail damage to residential roofs. We work directly with your insurance adjuster and handle the documentation. Learn more on our{' '}
        <Link href="/hail-damage-repair" className="faq-link">
          hail damage repair Cochrane
        </Link>{' '}
        page.
      </>
    ),
  },
  {
    question: 'How much does a roof replacement cost in Cochrane, AB?',
    answerText:
      'Most residential roof replacements in Cochrane range from $8,000 to $18,000 depending on roof size, pitch, and material choice. We provide a fully itemised written quote after a free inspection with no obligation to proceed. See our roof replacement Cochrane page for details.',
    answer: (
      <>
        Most residential roof replacements in Cochrane range from $8,000 to $18,000 depending on roof size, pitch, and material choice. We provide a fully itemised written quote after a free inspection with no obligation to proceed. See our{' '}
        <Link href="/roof-replacement" className="faq-link">
          roof replacement Cochrane
        </Link>{' '}
        page for details.
      </>
    ),
  },
  {
    question: 'How long does a roof replacement take in Cochrane?',
    answerText:
      'Most standard homes take 1 to 3 days. Larger or more complex roofs may take up to 5 days. We give you a clear timeline before we start and never leave a job unsecured overnight.',
    answer: (
      <>
        Most standard homes take 1 to 3 days. Larger or more complex roofs may take up to 5 days. We give you a clear timeline before we start and never leave a job unsecured overnight.
      </>
    ),
  },
  {
    question: 'Do you carry out roof inspections in Cochrane and Calgary?',
    answerText:
      'Yes. Our Red Seal certified team carries out full roof and attic inspections across Cochrane, Calgary and Canmore. An inspection gives you the full picture before small issues become expensive repairs. Book your roof inspections Cochrane assessment today.',
    answer: (
      <>
        Yes. Our Red Seal certified team carries out full roof and attic inspections across Cochrane, Calgary and Canmore. An inspection gives you the full picture before small issues become expensive repairs. Book your{' '}
        <Link href="/roof-inspection" className="faq-link">
          roof inspections Cochrane
        </Link>{' '}
        assessment today.
      </>
    ),
  },
  {
    question: 'Do you repair roofs as well as replace them in Cochrane?',
    answerText:
      'Absolutely. Not every roof needs a full replacement. Our Red Seal Journeyman team carries out all types of roof repair in Cochrane and Calgary - from minor leaks and missing shingles to full section repairs and flashing work. See our roof repair Cochrane page for more.',
    answer: (
      <>
        Absolutely. Not every roof needs a full replacement. Our Red Seal Journeyman team carries out all types of roof repair in Cochrane and Calgary - from minor leaks and missing shingles to full section repairs and flashing work. See our{' '}
        <Link href="/roof-repair" className="faq-link">
          roof repair Cochrane
        </Link>{' '}
        page for more.
      </>
    ),
  },
]

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: FAQS.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answerText,
    },
  })),
}

export function HomeFAQ() {
  const [open, setOpen] = useState<number | null>(null)

  // Split into two roughly equal columns for desktop layout
  const mid = Math.ceil(FAQS.length / 2)
  const columns = [FAQS.slice(0, mid), FAQS.slice(mid)]

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-20 md:py-24"
      style={{
        background: '#FFFFFF',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      {/* FAQ schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="mx-auto" style={{ maxWidth: '1320px' }}>
        {/* ── Header ─────────────────────────────────────────────── */}
        <div className="relative flex flex-col items-center text-center mb-10 md:mb-14 max-w-[960px] mx-auto">
          <span
            className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: "var(--font-inter), system-ui, sans-serif", fontWeight: 600, lineHeight: 1 }}
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
            Roofing Questions Answered
          </h2>
          <p
            className="mt-6 max-w-[640px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontWeight: 400,
            }}
          >
            Straight answers from your local Red Seal certified roofing contractor.
          </p>

          {/* CTA directly under sub-copy */}
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
              Get a Free Estimate
            </Button>
          </div>
        </div>

        {/* ── Two-column FAQ list (minimal line style) ───────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 mt-4">
          {columns.map((col, colIdx) => (
            <ul key={colIdx} className="flex flex-col">
              {col.map((faq) => {
                const i = FAQS.indexOf(faq)
                const isOpen = open === i
                return (
                  <li
                    key={faq.question}
                    className="border-b border-[--color-near-black]/12"
                  >
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? null : i)}
                      aria-expanded={isOpen}
                      className="group flex items-center justify-between w-full text-left py-5 md:py-6 cursor-pointer gap-4"
                    >
                      <span
                        className={`font-semibold leading-[1.35] transition-colors duration-200 ${
                          isOpen ? 'text-brand-navy' : 'text-brand-navy group-hover:text-brand-gold'
                        }`}
                        style={{
                          fontSize: '18px',
                          fontFamily: "var(--font-inter), system-ui, sans-serif",
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
                            fontFamily: "var(--font-inter), system-ui, sans-serif",
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
            fontFamily: "var(--font-inter), system-ui, sans-serif",
          }}
        >
          Have a question not listed here?{' '}
          <Link
            href="/free-roof-estimate-cochrane"
            className="font-semibold text-[--color-near-black] hover:text-[#B8943F] transition-colors"
            style={{ textDecoration: 'underline', textUnderlineOffset: '3px' }}
          >
            Contact Sure West
          </Link>
        </p>
      </div>

    </section>
  )
}
