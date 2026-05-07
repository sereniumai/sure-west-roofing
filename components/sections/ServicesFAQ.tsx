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
      'Seven services, all run by the same in-house Red Seal Journeyman crew: roof replacement, roof repair, hail damage repair, roof maintenance, roof inspections, siding and soft metals (flashings, fascia, soffit, eavestroughs), and skylight installation.',
    answer: (
      <>
        Seven services, all run by the same in-house Red Seal Journeyman crew:{' '}
        <Link href="/roof-replacement" className="faq-link">roof replacement</Link>,{' '}
        <Link href="/roof-repair" className="faq-link">roof repair</Link>,{' '}
        <Link href="/hail-damage-repair" className="faq-link">hail damage repair</Link>,{' '}
        <Link href="/roof-maintenance" className="faq-link">roof maintenance</Link>,{' '}
        <Link href="/roof-inspection" className="faq-link">roof inspections</Link>,{' '}
        <Link href="/siding-soft-metals" className="faq-link">siding and soft metals</Link>{' '}
        (flashings, fascia, soffit, eavestroughs), and{' '}
        <Link href="/skylight-installation" className="faq-link">skylight installation</Link>.
      </>
    ),
  },
  {
    question: 'How is a Sure West quote different from other quotes?',
    answerText:
      "Every Sure West free estimate is fixed and written before work begins. We inspect the deck, count the materials, and price the job on what's actually there, not on best-case assumptions. If something genuinely unforeseen comes up, you hear about it before any extra work happens, never after. The price you approve is the price you pay.",
    answer: (
      <>
        Every Sure West{' '}
        <Link href="/free-roof-estimate-cochrane" className="faq-link">free estimate</Link>{' '}
        is fixed and written before work begins. We inspect the deck, count the materials, and
        price the job on what&apos;s actually there, not on best-case assumptions. If something
        genuinely unforeseen comes up, you hear about it before any extra work happens, never
        after. The price you approve is the price you pay.
      </>
    ),
  },
  {
    question: 'Are all your installers Red Seal Journeyman certified?',
    answerText:
      "We're honest about this: no. Red Seal Journeyman is a multi-year credential, and apprentice and early-career installers haven't reached it yet. What matters is that Craig (Red Seal certified since 2018) trains the entire crew to that standard, supervises every project, and signs off on the workmanship. The designation governs the company's standard, not every name on the crew.",
    answer: (
      <>
        We&apos;re honest about this: no.{' '}
        <Link href="/about" className="faq-link">Red Seal Journeyman</Link>{' '}
        is a multi-year credential, and apprentice and early-career installers haven&apos;t
        reached it yet. What matters is that Craig (Red Seal certified since 2018) trains the
        entire crew to that standard, supervises every project, and signs off on the workmanship.
        The designation governs the company&apos;s standard, not every name on the crew.
      </>
    ),
  },
  {
    question: 'Do you use subcontractors?',
    answerText:
      "No. Every Sure West roof is installed by our in-house crew. Same faces, same standards, same accountability. We've turned down work to keep it that way.",
    answer: (
      <>
        No. Every Sure West roof is installed by our in-house crew. Same faces, same standards,
        same accountability. We&apos;ve turned down work to keep it that way.
      </>
    ),
  },
  {
    question: 'Do you handle hail damage insurance claims in Alberta?',
    answerText:
      'Coverage depends on your individual policy, but Alberta home insurance typically covers sudden hail damage to residential roofs. We are not insurance specialists, but we document the damage with photos and provide a detailed written assessment so you have what you need to file with your insurer. Once the claim is approved, we coordinate the work directly with you.',
    answer: (
      <>
        Coverage depends on your individual policy, but Alberta home insurance typically covers
        sudden{' '}
        <Link href="/hail-damage-repair" className="faq-link">hail damage</Link>{' '}
        to residential roofs. We are not insurance specialists, but we document the damage with
        photos and provide a detailed written assessment so you have what you need to file with
        your insurer. Once the claim is approved, we coordinate the work directly with you.
      </>
    ),
  },
  {
    question: 'How long does a roof replacement take in Cochrane?',
    answerText:
      'Most standard single-family roof replacement jobs in Cochrane take one to three days. Larger homes, steeper pitches, or roofs with multiple penetrations can take up to five days. We give you a clear timeline in writing before the job starts and do not leave your roof unsecured overnight.',
    answer: (
      <>
        Most standard single-family{' '}
        <Link href="/roof-replacement" className="faq-link">roof replacement</Link>{' '}
        jobs in Cochrane take one to three days. Larger homes, steeper pitches, or roofs with
        multiple penetrations can take up to five days. We give you a clear timeline in writing
        before the job starts and do not leave your roof unsecured overnight.
      </>
    ),
  },
  {
    question: 'Are you licensed, bonded, and insured?',
    answerText:
      'Yes. Sure West Roofing is a licensed Alberta roofing contractor with $2 million general liability insurance and WCB Alberta coverage on every crew member. Proof of both is provided before any work begins, available on request during your free estimate.',
    answer: (
      <>
        Yes. Sure West Roofing is a licensed Alberta roofing contractor with $2 million general
        liability insurance and WCB Alberta coverage on every crew member. Proof of both is
        provided before any work begins, available on request during your free estimate.
      </>
    ),
  },
  {
    question: 'What happens at the end of the job?',
    answerText:
      'Every Sure West job ends the same way: a magnetic nail sweep across your driveway, lawn, and walkways, a full final walkthrough with you, and your 10-year written workmanship warranty handed to you in person. Nothing gets skipped because the playbook does not allow it.',
    answer: (
      <>
        Every Sure West job ends the same way: a magnetic nail sweep across your driveway, lawn,
        and walkways, a full final walkthrough with you, and your 10-year written workmanship
        warranty handed to you in person. Nothing gets skipped because the playbook does not
        allow it.
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
            Roofing Services Questions, Answered
          </h2>
          <p
            className="mt-6 max-w-[760px] text-brand-slate leading-[1.7]"
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
            className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors"
          >
            Contact Sure West
          </Link>
        </p>
      </div>

    </section>
  )
}
