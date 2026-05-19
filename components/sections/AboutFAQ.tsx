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
        Honestly, no. Red Seal is a multi-year credential, and our apprentice and early-career installers are still working toward it. What matters is the standard: our processes are built off Red Seal Journeyman certification, and Mike will earn his Red Seal in the coming years. Apprentices are paired with senior crew members and taught to that same standard. The certification governs how we do the work, not whose name is on every roof.
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
    question: 'Which shingle manufacturers do you work with?',
    answer: (
      <>
        We are a Malarkey Certified Contractor and lean heavily on the Malarkey line for Alberta roofs. For wind performance we use Malarkey Vista and Owens Corning Duration. For hail-prone neighbourhoods we install polymer-modified options like Malarkey Legacy and Euroshield Rubber. We walk you through the tiers in person during your{' '}
        <Link href="/free-roof-estimate-cochrane" className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors">
          free estimate
        </Link>
        , matching the product to your roof and exposure.
      </>
    ),
  },
  {
    question: 'Are you insured and licensed?',
    answer: (
      <>
        Yes. $5 million liability insurance, well above the standard minimum, plus WCB Alberta coverage on every crew member. Proof of both is provided before any work begins. Ask for the certificates during your{' '}
        <Link href="/free-roof-estimate-cochrane" className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors">
          free estimate
        </Link>
        .
      </>
    ),
  },
  {
    question: 'What happens if something unexpected comes up mid-project?',
    answer: (
      <>
        Roofing rarely gives up every detail before the work starts. We are as diligent as possible during the on-site assessment, but things can surface once the old roof comes off. When that happens, we promise to communicate early and with clarity. You hear about it before any extra work happens, never after, and you decide how to proceed. Our{' '}
        <Link href="/free-roof-estimate-cochrane" className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors">
          written quote
        </Link>{' '}
        sets the baseline, and any change is approved by you in writing before we touch it.
      </>
    ),
  },
  {
    question: 'What workmanship guarantee comes with a Sure West roof?',
    answer: (
      <>
        A 10-year workmanship guarantee in writing on every{' '}
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
        background: '#F7F5F0',
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
                background: '#FFFFFF',
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
