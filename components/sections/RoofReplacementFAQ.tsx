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
    question: 'How much does a roof replacement cost in Cochrane, Alberta?',
    answerText:
      'Most Cochrane roof replacements range from $8,000 to $18,000 for a standard architectural-shingle job on a single-family home. Larger square footage, complex pitches, impact-rated Class 4 shingles, or extensive deck repairs push the upper end. Sure West provides itemised written quotes after an in-person assessment, with no padding mid-project.',
    answer: (
      <>
        Most Cochrane roof replacements range from $8,000 to $18,000 for a standard
        architectural-shingle job on a single-family home. Larger square footage, complex pitches,
        impact-rated Class 4 shingles, or extensive deck repairs push the upper end. Sure West
        provides itemised written quotes after an in-person assessment, with no padding
        mid-project.
      </>
    ),
  },
  {
    question: 'How long does a roof replacement take in Cochrane?',
    answerText:
      'Most Cochrane roof replacements take 2 to 3 days on site. Larger or more complex roofs can extend longer. We focus on doing the work right rather than rushing through, panel by panel, plugged into the forecast and only opening what we know we can finish in a given window. You will be told the schedule before we start and notified before every site activity.',
    answer: (
      <>
        Most Cochrane roof replacements take 2 to 3 days on site. Larger or more complex roofs can extend longer. We focus on doing the work right rather than rushing through, panel by panel, plugged into the forecast and only opening what we know we can finish in a given window. You will be told the schedule before we start and notified before every site activity.
      </>
    ),
  },
  {
    question: 'What are the signs my roof needs replacing, not just repairing?',
    answerText:
      'A roof typically needs replacing if it is past 18 years old, shows widespread shingle damage across multiple slopes, has heavy granule loss in the gutters, shows daylight or water stains in the attic, has visible sagging, or has been patched in the same area more than once. If your Cochrane roof is under 15 years old with a single localised issue, a repair is almost always smarter.',
    answer: (
      <>
        A roof typically needs replacing if it is past 18 years old, shows widespread shingle
        damage across multiple slopes, has heavy granule loss in the gutters, shows daylight or
        water stains in the attic, has visible sagging, or has been patched in the same area more
        than once. If your Cochrane roof is under 15 years old with a single localised issue, a{' '}
        <Link href="/roof-repair" className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors">
          repair
        </Link>{' '}
        is almost always smarter.
      </>
    ),
  },
  {
    question: 'What warranty do I get on a roof replacement from Sure West?',
    answerText:
      'Every Sure West roof replacement comes with a 10-year written workmanship guarantee handed to you before we leave the job site. This sits on top of the manufacturer warranty on the shingles themselves. Most installation defects show up within the first 12 months. A 10-year guarantee means you are covered for ten times the danger window. If anything in our installation fails, we come back and fix it.',
    answer: (
      <>
        Every Sure West roof replacement comes with a 10-year written workmanship guarantee handed
        to you before we leave the job site. This sits on top of the manufacturer warranty on
        the shingles themselves. Most installation defects show up within the first 12 months. A
        10-year guarantee means you are covered for ten times the danger window. If anything in
        our installation fails, we come back and fix it.
      </>
    ),
  },
  {
    question: 'Do I need to replace my roof after hail damage in Cochrane?',
    answerText:
      'Not always. Hail damage ranges from cosmetic granule loss to full shingle fracture. A Red Seal Journeyman walking the roof in person can tell the difference, document the damage with photos, and tell you whether a repair, a partial replacement, or a full replacement is the honest call. We support the insurance claim either way and rebuild to the standard we would put on our own homes.',
    answer: (
      <>
        Not always.{' '}
        <Link href="/hail-damage-repair" className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors">
          Hail damage
        </Link>{' '}
        ranges from cosmetic granule loss to full shingle fracture. A Red Seal Journeyman walking
        the roof in person can tell the difference, document the damage with photos, and tell you
        whether a repair, a partial replacement, or a full replacement is the honest call. We
        support the insurance claim either way and rebuild to the standard we would put on our own
        homes.
      </>
    ),
  },
  {
    question: 'When is the best time of year to replace a roof in Cochrane?',
    answerText:
      'We replace roofs year-round in Cochrane. Calgary is the sunniest city in Canada and chinooks open winter windows you would not get in most provinces. The weather challenges us in every season: if it is not snow, it is thunderstorms, heavy winds, or blistering heat. The right time is decided by our process, not the calendar. We work panel by panel, always plugged in to the forecast, only opening what we know we can finish in a given window. That is how your roof stays protected from start to finish, whatever month you book.',
    answer: (
      <>
        We replace roofs year-round in Cochrane. Calgary is the sunniest city in Canada and chinooks open winter windows you would not get in most provinces. The weather challenges us in every season: if it is not snow, it is thunderstorms, heavy winds, or blistering heat. The right time is decided by our process, not the calendar. We work panel by panel, always plugged in to the forecast, only opening what we know we can finish in a given window. That is how your roof stays protected from start to finish, whatever month you book.
      </>
    ),
  },
  {
    question: 'Can I finance a roof replacement in Alberta?',
    answerText:
      'Yes. Sure West offers financing options for Cochrane, Calgary, and Canmore roof replacements. We walk through the available options with you in person when we visit your property, alongside your written quote. The price you approve does not change whether you pay up front or finance over time.',
    answer: (
      <>
        Yes. Sure West offers financing options for Cochrane, Calgary, and Canmore roof
        replacements. We walk through the available options with you in person when we visit your
        property, alongside your written quote. The price you approve does not change whether you
        pay up front or finance over time.
      </>
    ),
  },
  {
    question: 'Do I need to be home during my roof replacement?',
    answerText:
      'You do not need to be home, though many homeowners are during the project. We knock on your door before we start. Every time. We notify you before every site activity, from material delivery to bin drop to roof labour. Your immediate neighbours also receive our contact information so they can reach us directly with any questions, keeping your relationships intact.',
    answer: (
      <>
        You do not need to be home, though many homeowners are during the project. We knock on
        your door before we start. Every time. We notify you before every site activity, from
        material delivery to bin drop to roof labour. Your immediate neighbours also receive our
        contact information so they can reach us directly with any questions, keeping your
        relationships intact.
      </>
    ),
  },
]

export const roofReplacementFaqSchema = {
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

export function RoofReplacementFAQ() {
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
              background: '#F7F5F0',
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
            Cochrane Roof Replacement Questions, Answered
          </h2>
          <p
            className="mt-6 max-w-[760px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Straight answers from your local Red Seal Journeyman roofing contractor.
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
            className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors"
          >
            Contact Sure West
          </Link>
        </p>
      </div>
    </section>
  )
}
