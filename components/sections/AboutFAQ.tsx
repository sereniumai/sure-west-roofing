'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

interface AboutFaqRich {
  question: string
  answer: React.ReactNode
}

const ABOUT_FAQS_RICH: AboutFaqRich[] = [
  {
    question: 'What does Red Seal Journeyman certification actually mean?',
    answer: (
      <>
        The Red Seal is the highest trade credential in Canadian roofing. It requires thousands of hours of supervised work and a national exam administered across every province. Sure West is Red Seal Journeyman certified, which means the standard governing how we install your roof is the same one enforced nationally for journeyman roofers.
      </>
    ),
  },
  {
    question: 'Are all your installers Red Seal certified?',
    answer: (
      <>
        We&apos;re honest about this: no. Red Seal is a multi-year credential, and apprentice and early-career installers haven&apos;t reached it yet. What matters is that Craig (Red Seal certified since 2018) trains the entire crew to that standard, supervises every project, and signs off on the workmanship. The designation governs the company&apos;s standard, not every name on the crew.
      </>
    ),
  },
  {
    question: 'Who founded Sure West Roofing?',
    answer: (
      <>
        Craig Nelson and Mike Boonstoppel founded Sure West in 2020 after working together as subcontractors on roofing crews around Cochrane. Craig runs sales, estimates, and admin. Mike runs operations, crew development, and culture. Both still work on roofs.
      </>
    ),
  },
  {
    question: 'Do you use subcontractors, or is the crew in-house?',
    answer: (
      <>
        Every Sure West roof is installed by our in-house crew. Same faces, same standards, same accountability. We&apos;ve turned down work to keep it that way.
      </>
    ),
  },
  {
    question: 'What is IKO ShieldPRO and why does it matter?',
    answer: (
      <>
        ShieldPRO is IKO&apos;s top-tier installer designation. Sure West installs to IKO&apos;s highest specifications, which qualifies{' '}
        <Link href="/roof-replacement" className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors">
          your roof
        </Link>{' '}
        for top-tier manufacturer warranty coverage on both materials and workmanship.
      </>
    ),
  },
  {
    question: 'Are you insured and licensed?',
    answer: (
      <>
        Yes. $2 million liability insurance, WCB Alberta coverage on every crew member, and proof of both provided before any work begins. Ask for the certificates during your{' '}
        <Link href="/free-roof-estimate-cochrane" className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors">
          free estimate
        </Link>
        .
      </>
    ),
  },
  {
    question: "How can I be sure my quote won't change mid-project?",
    answer: (
      <>
        Because{' '}
        <Link href="/free-roof-estimate-cochrane" className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors">
          every Sure West quote
        </Link>{' '}
        is fixed and written before work begins. We inspect the deck, count the materials, and price the job on what&apos;s actually there, not on best-case assumptions. If something genuinely unforeseen comes up (rare on a thorough inspection), you hear about it before any extra work happens, never after. No padding mid-project, no surprises in the bill.
      </>
    ),
  },
  {
    question: 'What workmanship warranty comes with a Sure West roof?',
    answer: (
      <>
        A 10-year workmanship warranty in writing on every{' '}
        <Link href="/roof-replacement" className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors">
          Sure West roof
        </Link>{' '}
        we install, separate from the manufacturer&apos;s materials warranty. We explain what&apos;s covered and what isn&apos;t in plain language before you sign.
      </>
    ),
  },
]

export function AboutFAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const mid = Math.ceil(ABOUT_FAQS_RICH.length / 2)
  const columns = [ABOUT_FAQS_RICH.slice(0, mid), ABOUT_FAQS_RICH.slice(mid)]

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
              Frequently Asked Questions
            </span>
            <h2
              className="font-display font-medium max-w-[960px] text-brand-navy"
              style={{
                fontSize: 'clamp(32px, 4.5vw, 48px)',
                lineHeight: 1.15,
                letterSpacing: '-0.005em',
              }}
            >
              Questions Cochrane Homeowners Ask Us
            </h2>
            <p
              className="mt-6 max-w-[640px] text-brand-slate leading-[1.7]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              Straight answers about our credentials, our crew, and how we handle your project from quote to final walkthrough.
            </p>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 mt-4">
            {columns.map((col, colIdx) => (
              <ul key={colIdx} className="flex flex-col">
                {col.map((faq) => {
                  const i = ABOUT_FAQS_RICH.indexOf(faq)
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
                            className="pt-1 pb-5 md:pb-7 pr-6 md:pr-14 text-brand-navy leading-[1.6]"
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
        </Reveal>
      </div>
    </section>
  )
}
