'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export interface FAQ {
  question: string
  /** Plain-text answer for JSON-LD. Use for schema only. */
  answerText: string
  /** Rich JSX answer rendered in the UI. */
  answer: React.ReactNode
}

interface HomeFAQProps {
  eyebrow?: string
  heading?: React.ReactNode
  body?: string
  faqs?: FAQ[]
}

const FAQS: FAQ[] = [
  {
    question: 'Do you serve Calgary and Canmore as well as Cochrane?',
    answerText:
      "Yes. We're based in Cochrane and our crews regularly run jobs across Calgary and Canmore. The same Red Seal-led crew, the same proven process, and the same 10-year workmanship guarantee on every roof, regardless of which of the three cities your home is in.",
    answer: (
      <>
        Yes. We&apos;re based in Cochrane and our crews regularly run jobs across{' '}
        <Link href="/roofing-contractor-calgary" className="faq-link">
          Calgary
        </Link>{' '}
        and{' '}
        <Link href="/roofing-contractor-canmore" className="faq-link">
          Canmore
        </Link>
        . The same Red Seal-led crew, the same proven process, and the same 10-year workmanship guarantee on every roof, regardless of which of the three cities your home is in.
      </>
    ),
  },
  {
    question: 'What makes Sure West different from other roofing contractors?',
    answerText:
      "Three things you can verify on every job. Character: in-house crew on every roof, honest quotes from day one, and we'll tell you if you don't need a replacement even if it costs us the work. Competency: Red Seal Journeyman certified, Canada's highest trade credential. Proven Processes: same playbook, same crew, same magnetic nail sweep, same warranty in writing. The rest is talk.",
    answer: (
      <>
        Three things you can verify on every job. Character: in-house crew on every roof, honest quotes from day one, and we&apos;ll tell you if you don&apos;t need a replacement even if it costs us the work.
        <br />
        <br />
        Competency: Red Seal Journeyman certified, Canada&apos;s highest trade credential.
        <br />
        <br />
        Proven Processes: same playbook, same crew, same magnetic nail sweep, same warranty in writing. The rest is talk.
      </>
    ),
  },
  {
    question: 'How do I get a free roofing estimate in Cochrane or Calgary?',
    answerText:
      "Call (403) 990-7210 or request your free roofing estimate online. We'll book an in-person assessment at your property, walk the roof, and send a clear, itemised written quote within two business days. No pressure, no obligation, no surprise fees.",
    answer: (
      <>
        Call{' '}
        <Link href="tel:+14039907210" className="faq-link">
          (403) 990-7210
        </Link>{' '}
        or request your{' '}
        <Link href="/free-roof-estimate-cochrane" className="faq-link">
          free roofing estimate online
        </Link>
        . We&apos;ll book an in-person assessment at your property, walk the roof, and send a clear, itemised written quote within two business days. No pressure, no obligation, no surprise fees.
      </>
    ),
  },
  {
    question: 'How do I tell if my Cochrane roof has hail damage?',
    answerText:
      "Common signs include shingle granules in gutters or downspouts, dented vents or flashing, visible bruising or pock-marks on shingles, and new water stains in the attic. If you suspect hail damage, book a free roof inspection. We'll document everything with photos and a written report. Standard Alberta home insurance typically covers hail damage repair, though deductibles and policy specifics vary. We support your claim with the insurance adjuster and rebuild to the standard we'd put on our own homes.",
    answer: (
      <>
        Common signs include shingle granules in gutters or downspouts, dented vents or flashing, visible bruising or pock-marks on shingles, and new water stains in the attic. If you suspect{' '}
        <Link href="/hail-damage-repair" className="faq-link">
          hail damage
        </Link>
        , book a free{' '}
        <Link href="/roof-inspection" className="faq-link">
          roof inspection
        </Link>
        . We&apos;ll document everything with photos and a written report.
        <br />
        <br />
        Standard Alberta home insurance typically covers hail damage repair, though deductibles and policy specifics vary. We support your claim with the insurance adjuster and rebuild to the standard we&apos;d put on our own homes.
      </>
    ),
  },
  {
    question: 'How much does a roof replacement cost in Cochrane, AB?',
    answerText:
      "Roof replacement cost depends on several factors: roof size, pitch, the materials you choose, the condition of the deck underneath, and any soft-metal work needed at flashings, valleys, and eaves. We don't price by the foot or off a satellite image. We come to you, walk the roof in person, and send a clear, itemised written quote so you know exactly what you're paying for and why.",
    answer: (
      <>
        <Link href="/roof-replacement" className="faq-link">
          Roof replacement
        </Link>{' '}
        cost depends on several factors: roof size, pitch, the materials you choose, the condition of the deck underneath, and any soft-metal work needed at flashings, valleys, and eaves. We don&apos;t price by the foot or off a satellite image. We come to you, walk the roof in person, and send a clear, itemised written quote so you know exactly what you&apos;re paying for and why.
      </>
    ),
  },
  {
    question: 'Do you carry out roof inspections in Cochrane and Calgary?',
    answerText:
      'Yes. Our roof inspections cover every surface, the attic, and every flashing and penetration point, with a written report, clear photos, and a plain-language verdict. Useful before buying, before selling, after a hail or wind storm, or when your roof is simply overdue for an honest second look.',
    answer: (
      <>
        Yes. Our{' '}
        <Link href="/roof-inspection" className="faq-link">
          roof inspections
        </Link>{' '}
        cover every surface, the attic, and every flashing and penetration point, with a written report, clear photos, and a plain-language verdict. Useful before buying, before selling, after a hail or wind storm, or when your roof is simply overdue for an honest second look.
      </>
    ),
  },
  {
    question: 'Do you repair roofs as well as replace them in Cochrane?',
    answerText:
      "Yes. If your roof has years of life left in it, we'll tell you so. We handle roof repair for cracked shingles, active leaks, failed flashing, and ice dam damage, with a workmanship warranty on every repair. No upsell to a full replacement when a repair is the right call.",
    answer: (
      <>
        Yes. If your roof has years of life left in it, we&apos;ll tell you so. We handle{' '}
        <Link href="/roof-repair" className="faq-link">
          roof repair
        </Link>{' '}
        for cracked shingles, active leaks, failed flashing, and ice dam damage, with a workmanship warranty on every repair. No upsell to a full{' '}
        <Link href="/roof-replacement" className="faq-link">
          replacement
        </Link>{' '}
        when a repair is the right call.
      </>
    ),
  },
  {
    question: 'How long does a roof last in Cochrane?',
    answerText:
      "A standard asphalt shingle roof in Cochrane typically lasts 20 to 30 years, depending on the shingle tier (IKO Cambridge, Dynasty, or Nordic), the quality of installation, attic ventilation, and weather exposure. Steeper pitches and chinook-prone sites can shorten that range. The best way to estimate where your specific roof sits is an in-person roof inspection. If you're closer to the upper end of life, plan ahead with a replacement before leaks start.",
    answer: (
      <>
        A standard asphalt shingle roof in Cochrane typically lasts 20 to 30 years, depending on the shingle tier (IKO Cambridge, Dynasty, or Nordic), the quality of installation, attic ventilation, and weather exposure. Steeper pitches and chinook-prone sites can shorten that range. The best way to estimate where your specific roof sits is an in-person{' '}
        <Link href="/roof-inspection" className="faq-link">
          roof inspection
        </Link>
        . If you&apos;re closer to the upper end of life, plan ahead with a{' '}
        <Link href="/roof-replacement" className="faq-link">
          replacement
        </Link>{' '}
        before leaks start.
      </>
    ),
  },
]

function buildFaqSchema(faqs: FAQ[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answerText,
      },
    })),
  }
}

export function HomeFAQ({
  eyebrow = 'FAQs',
  heading = 'Roofing Questions Answered',
  body = 'Straight answers from your local Red Seal certified roofing contractor.',
  faqs,
}: HomeFAQProps = {}) {
  const [open, setOpen] = useState<number | null>(null)
  const faqList = faqs ?? FAQS
  const faqSchema = buildFaqSchema(faqList)

  // Split into two roughly equal columns for desktop layout
  const mid = Math.ceil(faqList.length / 2)
  const columns = [faqList.slice(0, mid), faqList.slice(mid)]

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
        <Reveal>
        <div className="relative flex flex-col items-center text-center mb-10 md:mb-14 max-w-[960px] mx-auto">
          <span
            className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{ background: '#F0EEE8', fontSize: '12px', fontFamily: "var(--font-inter), system-ui, sans-serif", fontWeight: 600, lineHeight: 1 }}
          >
            {eyebrow}
          </span>
          <h2
            className="font-display font-medium max-w-[960px] text-brand-navy"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              lineHeight: 1.15,
              letterSpacing: '-0.005em',
            }}
          >
            {heading}
          </h2>
          <p
            className="mt-6 max-w-[640px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: "var(--font-inter), system-ui, sans-serif",
              fontWeight: 400,
            }}
          >
            {body}
          </p>

          {/* CTA directly under sub-copy */}
          <div className="mt-8">
            <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
              Get a Free Estimate
            </Button>
          </div>
        </div>
        </Reveal>

        {/* ── Two-column FAQ list (minimal line style) ───────────── */}
        <Reveal delay={150}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 lg:gap-x-16 mt-4">
          {columns.map((col, colIdx) => (
            <ul key={colIdx} className="flex flex-col">
              {col.map((faq) => {
                const i = faqList.indexOf(faq)
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
                          className="pt-1 pb-5 md:pb-7 pr-6 md:pr-14 text-brand-navy leading-[1.6]"
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
