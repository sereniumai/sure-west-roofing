'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

interface FAQ {
  question: string
  answerText: string
  answer: React.ReactNode
}

const FAQS: FAQ[] = [
  {
    question: 'What kind of skylight projects does Sure West handle?',
    answerText:
      'Sure West replaces existing skylights of any type very often, fixed, vented, and tubular. We also install new tubular skylights, ideal for closets, hallways, ensuites, and other small or windowless spaces where natural light would transform the room. Whether you are bundling a replacement with a roof project or booking a standalone install, we will walk you through what fits your home at the on-site visit.',
    answer: (
      <>
        Sure West replaces existing skylights of any type very often, fixed, vented, and tubular.
        We also install new tubular skylights, ideal for closets, hallways, ensuites, and other
        small or windowless spaces where natural light would transform the room. Whether you are
        bundling a replacement with a roof project or booking a standalone install, we will walk
        you through what fits your home at the on-site visit.
      </>
    ),
  },
  {
    question: 'How much does skylight replacement cost in Cochrane?',
    answerText:
      'Skylight replacement pricing in Cochrane depends on several factors: the size and type of the unit (fixed, vented, or tubular), the brand and model chosen, the condition of the existing opening and deck, and any permits required. Tubular installs typically run lowest, fixed replacements sit in the middle, and vented or motorized units are higher. Sure West provides a written itemised quote after the on-site walkthrough.',
    answer: (
      <>
        Skylight replacement pricing in Cochrane depends on several factors: the size and type of
        the unit (fixed, vented, or tubular), the brand and model chosen, the condition of the
        existing opening and deck, and any permits required. Tubular installs typically run lowest,
        fixed replacements sit in the middle, and vented or motorized units are higher. Sure West
        provides a written itemised quote after the on-site walkthrough.
      </>
    ),
  },
  {
    question: 'What brands of skylight do you install?',
    answerText:
      'Sure West installs and replaces the major skylight brands available to Alberta installers. Brand availability and recommendation depends on the type of skylight you need, the size of the opening, the energy efficiency rating required, and your budget. We will walk you through the options at the on-site visit and only quote brands and models we would put on our own homes.',
    answer: (
      <>
        Sure West installs and replaces the major skylight brands available to Alberta installers.
        Brand availability and recommendation depends on the type of skylight you need, the size of
        the opening, the energy efficiency rating required, and your budget. We will walk you
        through the options at the on-site visit and only quote brands and models we would put on
        our own homes.
      </>
    ),
  },
  {
    question: 'Will my new skylight leak?',
    answerText:
      'A properly installed skylight should not leak. Leaks happen when the wrong size unit is forced into the opening, the manufacturer flashing kit is skipped or substituted, or the ice-and-water shield is not wrapped around the entire perimeter. Sure West follows manufacturer install spec on every replacement, weaves the surrounding shingles back into the flashing system, and tests for water-tightness before handover.',
    answer: (
      <>
        A properly installed skylight should not leak. Leaks happen when the wrong size unit is
        forced into the opening, the manufacturer flashing kit is skipped or substituted, or the
        ice-and-water shield is not wrapped around the entire perimeter. Sure West follows
        manufacturer install spec on every replacement, weaves the surrounding shingles back into
        the flashing system, and tests for water-tightness before handover.
      </>
    ),
  },
  {
    question: 'How long does a skylight project take in Cochrane?',
    answerText:
      'Most single-skylight replacements in Cochrane are completed in one day, weather permitting. New tubular installs also typically wrap in a day. Multi-skylight projects may take two to three days. Most of the project lead time is in scheduling and ordering the unit from the manufacturer, not the work on your roof. We confirm the install timeline in writing in your quote.',
    answer: (
      <>
        Most single-skylight replacements in Cochrane are completed in one day, weather permitting.
        New tubular installs also typically wrap in a day. Multi-skylight projects may take two to
        three days. Most of the project lead time is in scheduling and ordering the unit from the
        manufacturer, not the work on your roof. We confirm the install timeline in writing in your
        quote.
      </>
    ),
  },
  {
    question: 'Is my roof a candidate for a skylight project?',
    answerText:
      'Most pitched residential roofs in Cochrane are good candidates for replacement or a tubular install. The new unit drops into the existing opening with the manufacturer flashing kit, or for tubular installs, the rooftop dome sits between standard trusses. Flat roofs, low-slope roofs, and homes with cathedral or vaulted ceilings need specific assessment. We will tell you honestly at the on-site walkthrough whether your roof is a candidate.',
    answer: (
      <>
        Most pitched residential roofs in Cochrane are good candidates for replacement or a tubular
        install. The new unit drops into the existing opening with the manufacturer flashing kit,
        or for tubular installs, the rooftop dome sits between standard trusses. Flat roofs,
        low-slope roofs, and homes with cathedral or vaulted ceilings need specific assessment. We
        will tell you honestly at the on-site walkthrough whether your roof is a candidate.
      </>
    ),
  },
  {
    question: 'Do I need a permit for a skylight in Cochrane?',
    answerText:
      'Like-for-like skylight replacements often do not require a building permit. A new tubular install or a replacement that substantially changes the opening or unit type may trigger a permit under the Alberta Building Code. Sure West will tell you exactly what permits are required for your project at the walkthrough, what the costs are, and what the process involves. Permit responsibility is confirmed in writing in your quote.',
    answer: (
      <>
        Like-for-like skylight replacements often do not require a building permit. A new tubular
        install or a replacement that substantially changes the opening or unit type may trigger a
        permit under the Alberta Building Code. Sure West will tell you exactly what permits are
        required for your project at the walkthrough, what the costs are, and what the process
        involves. Permit responsibility is confirmed in writing in your quote.
      </>
    ),
  },
  {
    question: 'What guarantee comes with your install?',
    answerText:
      'Every Sure West skylight project comes with a written workmanship guarantee, layered on top of the manufacturer warranty for the skylight unit itself. The workmanship guarantee covers the install, the flashing, and the seal. The manufacturer warranty covers the skylight as a product. Both are spelled out in your written quote before any work begins.',
    answer: (
      <>
        Every Sure West skylight project comes with a written workmanship guarantee, layered on top
        of the manufacturer warranty for the skylight unit itself. The workmanship guarantee covers
        the install, the flashing, and the seal. The manufacturer warranty covers the skylight as a
        product. Both are spelled out in your written quote before any work begins.
      </>
    ),
  },
]

export const skylightInstallationFaqSchema = {
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

export function SkylightInstallationFAQ() {
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
        <Reveal>
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
              Cochrane Skylight Replacement
              <br /> Questions, Answered
            </h2>
            <p
              className="mt-6 max-w-[760px] text-brand-slate leading-[1.7]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              Straight answers about skylight replacement, leak prevention, permits, and what to
              expect from your local Sure West crew.
            </p>
            <div className="mt-8">
              <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
                Get a Free Estimate
              </Button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
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
        </Reveal>

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
