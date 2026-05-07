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
    question: 'How much does a roof repair cost in Cochrane?',
    answerText:
      'Roof repair pricing in Cochrane depends on several factors, including the type of repair, the area affected, accessibility, and the shingles or materials needed for the fix. Sure West provides a fixed written quote after the on-site diagnosis, with no padding mid-job. Contact us to book a free diagnosis and you will have your repair quote in writing the same visit.',
    answer: (
      <>
        Roof repair pricing in Cochrane depends on several factors, including the type of repair,
        the area affected, accessibility, and the shingles or materials needed for the fix. Sure
        West provides a fixed written quote after the on-site diagnosis, with no padding mid-job.
        Contact us to book a free diagnosis and you will have your repair quote in writing the
        same visit.
      </>
    ),
  },
  {
    question: 'How quickly can you respond to a roof leak in Cochrane?',
    answerText:
      'For active leaks, contact Sure West right away. We prioritise leak emergencies and will get back to you to schedule an on-site diagnosis as quickly as possible. Many Cochrane roof leaks can be tarped during the initial visit to stop water entry while a permanent repair is scheduled.',
    answer: (
      <>
        For active leaks, contact Sure West right away. We prioritise leak emergencies and will
        get back to you to schedule an on-site diagnosis as quickly as possible. Many Cochrane
        roof leaks can be tarped during the initial visit to stop water entry while a permanent
        repair is scheduled.
      </>
    ),
  },
  {
    question: 'Can you match my existing shingles?',
    answerText:
      'In most cases, yes. We use IKO product across all our work, and matching to existing IKO shingles is straightforward. Matching older or discontinued brands depends on what is still available from Canadian distributors. If a perfect match cannot be found, we will tell you so before we quote and discuss options that still protect the roof.',
    answer: (
      <>
        In most cases, yes. We use IKO product across all our work, and matching to existing IKO
        shingles is straightforward. Matching older or discontinued brands depends on what is
        still available from Canadian distributors. If a perfect match cannot be found, we will
        tell you so before we quote and discuss options that still protect the roof.
      </>
    ),
  },
  {
    question: 'Will my home insurance cover a roof repair?',
    answerText:
      "Often, yes. Most Alberta home insurance policies cover sudden damage from hail, wind, or fallen branches. They do not typically cover gradual wear or maintenance issues. If your roof was damaged in a storm event, we provide photos, a written diagnosis, and documentation that meets your insurer's standard. For hail-specific damage, see our dedicated hail damage repair page for the full claim process.",
    answer: (
      <>
        Often, yes. Most Alberta home insurance policies cover sudden damage from hail, wind, or
        fallen branches. They do not typically cover gradual wear or maintenance issues. If your
        roof was damaged in a storm event, we provide photos, a written diagnosis, and
        documentation that meets your insurer&apos;s standard. For hail-specific damage, see our{' '}
        <Link
          href="/hail-damage-repair"
          className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors"
        >
          dedicated hail damage repair page
        </Link>{' '}
        for the full claim process.
      </>
    ),
  },
  {
    question: 'How long does a typical roof repair take?',
    answerText:
      'Most Cochrane roof repairs are completed in a single on-site visit. Single leak repairs, missing-shingle replacements, and most flashing repairs typically wrap during the scheduled visit. Larger repairs involving multiple leak points or sections of damaged decking can extend to a second visit. You will be told the schedule before we start.',
    answer: (
      <>
        Most Cochrane roof repairs are completed in a single on-site visit. Single leak repairs,
        missing-shingle replacements, and most flashing repairs typically wrap during the
        scheduled visit. Larger repairs involving multiple leak points or sections of damaged
        decking can extend to a second visit. You will be told the schedule before we start.
      </>
    ),
  },
  {
    question: 'When is a roof repair the right call vs a full replacement?',
    answerText:
      'A repair is usually the right call if your roof is under 15 years old, the damage is isolated to one area or slope, and the underlying decking is sound. A replacement makes more sense if your roof is past 18 years, shows widespread damage across multiple slopes, or has been patched in the same area more than once. We will walk it in person and tell you straight.',
    answer: (
      <>
        A repair is usually the right call if your roof is under 15 years old, the damage is
        isolated to one area or slope, and the underlying decking is sound. A{' '}
        <Link
          href="/roof-replacement"
          className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors"
        >
          replacement
        </Link>{' '}
        makes more sense if your roof is past 18 years, shows widespread damage across multiple
        slopes, or has been patched in the same area more than once. We will walk it in person
        and tell you straight.
      </>
    ),
  },
  {
    question: 'Do you offer emergency roof repair in Cochrane?',
    answerText:
      'Yes, for active leaks and storm damage. Call (403) 990-7210 if water is currently entering your home or if a recent storm has caused visible roof damage. We prioritise emergency calls and will tarp active leaks where conditions allow. Standard repair scheduling resumes once the immediate threat is contained.',
    answer: (
      <>
        Yes, for active leaks and storm damage.{' '}
        <Link
          href="tel:+14039907210"
          className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors"
        >
          Call (403) 990-7210
        </Link>{' '}
        if water is currently entering your home or if a recent storm has caused visible roof
        damage. We prioritise emergency calls and will tarp active leaks where conditions allow.
        Standard repair scheduling resumes once the immediate threat is contained.
      </>
    ),
  },
  {
    question: 'What guarantee do I get on a roof repair from Sure West?',
    answerText:
      "Every Sure West repair comes with a written workmanship guarantee, handed to you on completion. If anything in our repair work fails, we come back and fix it. The IKO manufacturer warranty on the shingles themselves carries forward separately, registered with IKO under your existing roof's product line.",
    answer: (
      <>
        Every Sure West repair comes with a written workmanship guarantee, handed to you on
        completion. If anything in our repair work fails, we come back and fix it. The IKO
        manufacturer warranty on the shingles themselves carries forward separately, registered
        with IKO under your existing roof&apos;s product line.
      </>
    ),
  },
]

export const roofRepairFaqSchema = {
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
            Cochrane Roof Repair Questions, Answered
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
        </Reveal>

        {/* Two-column accordion */}
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
