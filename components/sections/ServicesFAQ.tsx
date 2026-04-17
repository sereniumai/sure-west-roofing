'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/Button'

interface FAQ {
  question: string
  answerText: string
  answer: React.ReactNode
}

const FAQS: FAQ[] = [
  {
    question: 'What roofing services do you offer in Cochrane?',
    answerText:
      'Sure West Roofing offers six residential roofing services in Cochrane: roof replacement, roof repair, hail damage repair, roof maintenance, roof inspections, and skylight installation. All work is carried out by Red Seal certified trades. We serve Cochrane as our primary market, with crews also covering Calgary and Canmore.',
    answer: (
      <>
        Sure West Roofing offers six residential roofing services in Cochrane: roof replacement,
        roof repair, hail damage repair, roof maintenance, roof inspections, and skylight
        installation. All work is carried out by Red Seal certified trades. We serve Cochrane as
        our primary market, with crews also covering Calgary and Canmore.
      </>
    ),
  },
  {
    question: 'How much does a roof replacement cost in Cochrane?',
    answerText:
      'Most residential roof replacements in Cochrane range from $8,000 to $18,000, depending on roof size, pitch, material grade, and any structural issues found during tear-off. We provide a free, fully itemised written quote after an on-site inspection. The price you approve is the price you pay.',
    answer: (
      <>
        Most residential roof replacements in Cochrane range from $8,000 to $18,000, depending on
        roof size, pitch, material grade, and any structural issues found during tear-off. We
        provide a free, fully itemised written quote after an on-site inspection. The price you
        approve is the price you pay.
      </>
    ),
  },
  {
    question: 'Do you handle hail damage insurance claims in Alberta?',
    answerText:
      'Yes. We work directly with your insurance adjuster and handle the full documentation process. Alberta home insurance policies typically cover sudden hail damage to residential roofs under the peril of windstorm or hail. We provide a detailed damage assessment report your insurer will accept.',
    answer: (
      <>
        Yes. We work directly with your insurance adjuster and handle the full documentation
        process. Alberta home insurance policies typically cover sudden hail damage to residential
        roofs under the peril of windstorm or hail. We provide a detailed damage assessment report
        your insurer will accept.
      </>
    ),
  },
  {
    question: 'How often should I have my roof inspected?',
    answerText:
      'For most Cochrane homes, once a year is the right frequency, typically in spring after the winter freeze-thaw cycle. You should also book a roof inspection after a significant hailstorm or if you notice any interior water staining. Catching small issues early avoids larger, more costly repairs later.',
    answer: (
      <>
        For most Cochrane homes, once a year is the right frequency, typically in spring after the
        winter freeze-thaw cycle. You should also book a{' '}
        <Link href="/roof-inspection" className="faq-link">
          roof inspection
        </Link>{' '}
        after a significant hailstorm or if you notice any interior water staining. Catching small
        issues early avoids larger, more costly repairs later.
      </>
    ),
  },
  {
    question: 'Do you repair roofs year-round in Cochrane winters?',
    answerText:
      'Yes, we carry out roof repairs throughout the year in Cochrane. Some materials have installation temperature requirements, but active leaks and storm damage cannot wait for spring. We will assess your situation honestly and tell you what can be safely completed now versus what should wait.',
    answer: (
      <>
        Yes, we carry out roof repairs throughout the year in Cochrane. Some materials have
        installation temperature requirements, but active leaks and storm damage cannot wait for
        spring. We will assess your situation honestly and tell you what can be safely completed
        now versus what should wait.
      </>
    ),
  },
  {
    question: 'Are you licensed and insured?',
    answerText:
      'Yes. Sure West Roofing is a licensed roofing contractor in Alberta, fully covered by WCB and general liability insurance. Craig and Mike, the owners, hold Red Seal Journeyman certification, the highest professional trade credential in Canada. Proof of coverage is available on request before any work begins.',
    answer: (
      <>
        Yes. Sure West Roofing is a licensed roofing contractor in Alberta, fully covered by WCB
        and general liability insurance. Craig and Mike, the owners, hold Red Seal Journeyman
        certification, the highest professional trade credential in Canada. Proof of coverage is
        available on request before any work begins.
      </>
    ),
  },
  {
    question: 'How long does a roof replacement take?',
    answerText:
      'Most standard single-family homes in Cochrane take one to three days. Larger homes, steeper pitches, or roofs with multiple penetrations can take up to five days. We give you a clear timeline in writing before the job starts and do not leave your roof unsecured overnight.',
    answer: (
      <>
        Most standard single-family homes in Cochrane take one to three days. Larger homes, steeper
        pitches, or roofs with multiple penetrations can take up to five days. We give you a clear
        timeline in writing before the job starts and do not leave your roof unsecured overnight.
      </>
    ),
  },
  {
    question: 'Do you install skylights on existing roofs?',
    answerText:
      'Yes. We install skylights on existing roofs across Cochrane, Calgary, and Canmore. The process involves cutting the deck opening, installing a properly flashed curb or deck-mount unit, and integrating the waterproofing with your existing shingles. Most skylight installation jobs are completed in one day.',
    answer: (
      <>
        Yes. We install skylights on existing roofs across Cochrane, Calgary, and Canmore. The
        process involves cutting the deck opening, installing a properly flashed curb or deck-mount
        unit, and integrating the waterproofing with your existing shingles. Most{' '}
        <Link href="/skylight-installation" className="faq-link">
          skylight installation
        </Link>{' '}
        jobs are completed in one day.
      </>
    ),
  },
]

export const servicesFaqSchema = {
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

export function ServicesFAQ() {
  const [open, setOpen] = useState<number | null>(null)

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
            Roofing Services Questions, Answered
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

      <style jsx>{`
        :global(.faq-link) {
          color: #b8943f;
          font-weight: 600;
          text-decoration: underline;
          text-underline-offset: 3px;
          transition: color 0.2s ease;
        }
        :global(.faq-link:hover) {
          color: var(--color-accent, #d4af60);
        }
      `}</style>
    </section>
  )
}
