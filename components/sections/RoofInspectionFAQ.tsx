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
    question: 'How much does a roof inspection cost in Cochrane?',
    answerText:
      'A standalone Cochrane roof and attic inspection with a written photo-documented report is priced based on roof size, accessibility, and report depth. Contact us for a written quote. Depending on the scope of work that follows, the inspection cost may be credited toward a larger project. The report is yours to keep regardless, with no obligation to book any recommended work.',
    answer: (
      <>
        A standalone Cochrane roof and attic inspection with a written photo-documented report is
        priced based on roof size, accessibility, and report depth. Contact us for a written
        quote. Depending on the scope of work that follows, the inspection cost may be credited
        toward a larger project. The report is yours to keep regardless, with no obligation to
        book any recommended work.
      </>
    ),
  },
  {
    question: 'What is included in a Sure West roof inspection?',
    answerText:
      'A Sure West technician walks every slope of your Cochrane roof in person, under Red Seal Journeyman oversight, checks the attic from inside, and inspects all flashings, penetrations, vents, and skylights. Every checkpoint is photographed with location notes and a severity rating. The full findings are delivered as a photo-documented PDF report after the on-site visit, formatted for buyers, sellers, and insurers.',
    answer: (
      <>
        A Sure West technician walks every slope of your Cochrane roof in person, under Red Seal
        Journeyman oversight, checks the attic from inside, and inspects all flashings,
        penetrations, vents, and skylights. Every checkpoint is photographed with location notes
        and a severity rating. The full findings are delivered as a photo-documented PDF report
        after the on-site visit, formatted for buyers, sellers, and insurers.
      </>
    ),
  },
  {
    question: 'How long does a roof inspection take in Cochrane?',
    answerText:
      'Most Cochrane roof inspections take 60 to 90 minutes on-site, depending on roof size, pitch, and weather conditions. Steeper or more complex roofs can take longer. The written photo-documented report is delivered after the on-site visit. Inspections after a hailstorm or heavy snow event may take longer if every slope and component needs detailed documentation for an insurer.',
    answer: (
      <>
        Most Cochrane roof inspections take 60 to 90 minutes on-site, depending on roof size,
        pitch, and weather conditions. Steeper or more complex roofs can take longer. The written
        photo-documented report is delivered after the on-site visit. Inspections after a
        hailstorm or heavy snow event may take longer if every slope and component needs detailed
        documentation for an insurer.
      </>
    ),
  },
  {
    question: 'When should I get a roof inspection?',
    answerText:
      'Six common triggers: buying or selling a Cochrane home, after a hail or windstorm, when your roof is 10 or more years old, when your insurer requests one, when you spot visible signs of wear from the ground, or as an annual maintenance check. If any of these apply, the inspection earns its cost in negotiating leverage, claim documentation, or early problem detection.',
    answer: (
      <>
        Six common triggers: buying or selling a Cochrane home, after a{' '}
        <Link
          href="/hail-damage-repair"
          className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors"
        >
          hail or windstorm
        </Link>
        , when your roof is 10 or more years old, when your insurer requests one, when you spot
        visible signs of wear from the ground, or as an annual maintenance check. If any of these
        apply, the inspection earns its cost in negotiating leverage, claim documentation, or
        early problem detection.
      </>
    ),
  },
  {
    question: 'Do I get a written report?',
    answerText:
      'Yes. Every Sure West Cochrane roof inspection comes with a written photo-documented PDF report, delivered after the on-site visit. The report includes dated photos of every checkpoint, location notes, severity ratings, repair priorities, and replacement cost ranges where relevant. The format meets Alberta insurer documentation standards and is structured to be useful for real estate transactions.',
    answer: (
      <>
        Yes. Every Sure West Cochrane roof inspection comes with a written photo-documented PDF
        report, delivered after the on-site visit. The report includes dated photos of every
        checkpoint, location notes, severity ratings, repair priorities, and replacement cost
        ranges where relevant. The format meets Alberta insurer documentation standards and is
        structured to be useful for real estate transactions.
      </>
    ),
  },
  {
    question: 'Can you inspect for an insurance claim in Cochrane?',
    answerText:
      'Yes. Sure West provides post-storm inspections specifically formatted to meet Alberta insurer documentation standards. The report includes photo documentation, damage classification (cosmetic, functional, or structural), an itemised scope, and direct adjuster communication on request. We can meet your insurance adjuster on-site if you would like us there. The report is equally useful if you decide to pay out of pocket.',
    answer: (
      <>
        Yes. Sure West provides{' '}
        <Link
          href="/hail-damage-repair"
          className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors"
        >
          post-storm inspections
        </Link>{' '}
        specifically formatted to meet Alberta insurer documentation standards. The report
        includes photo documentation, damage classification (cosmetic, functional, or structural),
        an itemised scope, and direct adjuster communication on request. We can meet your
        insurance adjuster on-site if you would like us there. The report is equally useful if
        you decide to pay out of pocket.
      </>
    ),
  },
  {
    question: 'Should I get an inspection before buying a Cochrane home?',
    answerText:
      'Yes, especially if the roof is 10 or more years old or if the general home inspection report flags any roofing concerns. A Sure West pre-purchase inspection includes remaining lifespan, repair priorities, and replacement cost ranges, all in writing with dated photos. The findings translate directly into negotiating leverage on the offer price and remove a common deal-breaker before it surfaces.',
    answer: (
      <>
        Yes, especially if the roof is 10 or more years old or if the general home inspection
        report flags any roofing concerns. A Sure West pre-purchase inspection includes remaining
        lifespan, repair priorities, and replacement cost ranges, all in writing with dated
        photos. The findings translate directly into negotiating leverage on the offer price and
        remove a common deal-breaker before it surfaces.
      </>
    ),
  },
  {
    question: 'Are roof inspections free?',
    answerText:
      'A truly thorough roof and attic inspection takes 60 to 90 minutes on-site, a written photo-documented report, and a trained technician on the roof under Red Seal Journeyman oversight. Sure West charges for the inspection at the Cochrane market rate. Depending on the scope of work that follows, the inspection cost may be credited back toward a larger project. You receive a written report you own either way, with no obligation to book any recommended work.',
    answer: (
      <>
        A truly thorough roof and attic inspection takes 60 to 90 minutes on-site, a written
        photo-documented report, and a trained technician on the roof under Red Seal Journeyman
        oversight. Sure West charges for the inspection at the Cochrane market rate. Depending on
        the scope of work that follows, the inspection cost may be credited back toward a larger
        project. You receive a written report you own either way, with no obligation to book any
        recommended work.
      </>
    ),
  },
]

export const roofInspectionFaqSchema = {
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

export function RoofInspectionFAQ() {
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
              Cochrane Roof and Attic
              <br /> Inspection Questions, Answered
            </h2>
            <p
              className="mt-6 max-w-[760px] text-brand-slate leading-[1.7]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              Straight answers about roof inspections, written reports, and what to expect from
              your local Red Seal Journeyman roofing contractor.
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
