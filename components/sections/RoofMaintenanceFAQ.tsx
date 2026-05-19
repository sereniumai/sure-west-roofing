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
    question: 'Why should I get my Cochrane roof maintained?',
    answerText:
      "Roof maintenance is the cheapest insurance your Cochrane roof carries. Annual visits catch small issues, lifted shingle tabs, cracked sealant, debris in valleys, before they escalate into leaks or claims. Professional maintenance also produces a written log that supports your manufacturer warranty if a future claim is questioned, protects resale value, and keeps your insurer informed of the roof's condition over time.",
    answer: (
      <>
        Roof maintenance is the cheapest insurance your Cochrane roof carries. Annual visits catch
        small issues, lifted shingle tabs, cracked sealant, debris in valleys, before they escalate
        into leaks or{' '}
        <Link
          href="/hail-damage-repair"
          className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors"
        >
          claims
        </Link>
        . Professional maintenance also produces a written log that supports your manufacturer
        warranty if a future claim is questioned, protects resale value, and keeps your insurer
        informed of the roof&rsquo;s condition over time.
      </>
    ),
  },
  {
    question: 'How much does roof maintenance cost in Cochrane?',
    answerText:
      'Roof maintenance pricing in Cochrane scales with roof size, accessibility, the cadence of visits, and the scope of any minor repairs included. Annual single-visit plans cost less per year than bi-annual plans. Sure West provides a written itemised quote during the initial visit. If anything unexpected comes up later, you hear about it before any extra work happens.',
    answer: (
      <>
        Roof maintenance pricing in Cochrane scales with roof size, accessibility, the cadence of
        visits, and the scope of any minor repairs included. Annual single-visit plans cost less
        per year than bi-annual plans. Sure West provides a written itemised quote during the
        initial visit. If anything unexpected comes up later, you hear about it before any extra
        work happens.
      </>
    ),
  },
  {
    question: 'How often should I have my roof inspected and maintained?',
    answerText:
      'Most Cochrane roofs benefit from one professional maintenance visit per year. Roofs over 15 years old, properties in hail-prone neighbourhoods, and homes with mature trees overhanging the roofline benefit from two visits per year, spring and fall. New roofs under five years old can often go to bi-annual once the roof passes the five-year mark.',
    answer: (
      <>
        Most Cochrane roofs benefit from one professional maintenance visit per year. Roofs over 15
        years old, properties in hail-prone neighbourhoods, and homes with mature trees overhanging
        the roofline benefit from two visits per year, spring and fall. New roofs under five years
        old can often go to bi-annual once the roof passes the five-year mark.
      </>
    ),
  },
  {
    question: 'Can roof maintenance extend my manufacturer warranty?',
    answerText:
      'Roof maintenance does not extend the term of your manufacturer warranty itself, but it does protect the validity of your existing warranty. Most asphalt shingle warranties include a maintenance clause requiring evidence of reasonable upkeep. A documented Sure West maintenance log gives you the evidence your manufacturer may request if a future claim is questioned, helping you preserve coverage rather than have a claim denied due to neglect.',
    answer: (
      <>
        Roof maintenance does not extend the term of your manufacturer warranty itself, but it
        does protect the validity of your existing warranty. Most asphalt shingle warranties
        typically include a maintenance clause requiring evidence of reasonable upkeep. A
        documented Sure West maintenance log gives you the evidence your manufacturer may request
        if a future claim is questioned, helping you preserve coverage rather than have a claim
        denied due to neglect.
      </>
    ),
  },
  {
    question: 'What is included in a Sure West maintenance visit?',
    answerText:
      'A Sure West maintenance visit includes a full slope walk, an attic check from inside, valley clearing, shingle tab reseating, minor flashing reseals, and a photo-documented written maintenance log delivered after the visit. Most visits take approximately two hours on-site. Major repairs, replacements, or hail damage work are quoted separately and never included silently in the visit cost.',
    answer: (
      <>
        A Sure West maintenance visit includes a full slope walk, an attic check from inside,
        valley clearing, shingle tab reseating, minor flashing reseals, and a photo-documented
        written maintenance log delivered after the visit. Most visits take approximately two
        hours on-site. Major repairs, replacements, or hail damage work are quoted separately and
        never included silently in the visit cost.
      </>
    ),
  },
  {
    question: "Do you maintain roofs that you didn't install?",
    answerText:
      "Yes. Sure West maintains asphalt shingle roofs from any of the major manufacturers in Cochrane, Calgary, and Canmore regardless of which contractor installed them. If your roof has a specific manufacturer warranty, we work within those terms and document the visit accordingly. We will tell you honestly if the roof is in a condition where maintenance won't help and a repair or replacement is the better call.",
    answer: (
      <>
        Yes. Sure West maintains asphalt shingle roofs from any of the major manufacturers in
        Cochrane, Calgary, and Canmore regardless of which contractor installed them. If your
        roof has a specific manufacturer warranty, we work within those terms and document the
        visit accordingly. We will tell you honestly if the roof is in a condition where
        maintenance won&rsquo;t help and a{' '}
        <Link
          href="/roof-repair"
          className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors"
        >
          repair or replacement
        </Link>{' '}
        is the better call.
      </>
    ),
  },
  {
    question: 'Should I get maintenance after a Chinook windstorm?',
    answerText:
      'Yes. Chinook winds regularly lift shingle tabs in Cochrane without leaving obvious damage from the ground. A post-Chinook maintenance visit reseats lifted tabs, tops up flashing seals, and clears any debris before the next weather event finds the gap. If significant damage is found, we provide a photo-documented diagnosis you can use for an insurance claim or to plan a targeted repair.',
    answer: (
      <>
        Yes. Chinook winds regularly lift shingle tabs in Cochrane without leaving obvious damage
        from the ground. A post-Chinook maintenance visit reseats lifted tabs, tops up flashing
        seals, and clears any debris before the next weather event finds the gap. If significant
        damage is found, we provide a photo-documented diagnosis you can use for an{' '}
        <Link
          href="/hail-damage-repair"
          className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors"
        >
          insurance claim
        </Link>{' '}
        or to plan a{' '}
        <Link
          href="/roof-repair"
          className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors"
        >
          targeted repair
        </Link>
        .
      </>
    ),
  },
  {
    question: 'Will roof maintenance void my manufacturer warranty?',
    answerText:
      "No. Professional maintenance performed by qualified roofers does not void manufacturer warranties. In fact, most asphalt shingle warranty terms require evidence of reasonable maintenance to remain valid. What can void the warranty is unprofessional work, unapproved materials, or DIY repairs that don't follow the manufacturer's installation specifications. A documented Sure West maintenance log keeps your warranty intact, not at risk.",
    answer: (
      <>
        No. Professional maintenance performed by qualified roofers does not void manufacturer
        warranties. In fact, most asphalt shingle warranty terms require evidence of reasonable
        maintenance to remain valid. What can void the warranty is unprofessional work,
        unapproved materials, or DIY repairs that don&rsquo;t follow the
        manufacturer&rsquo;s installation specifications. A documented Sure West maintenance log
        keeps your warranty intact, not at risk.
      </>
    ),
  },
]

export const roofMaintenanceFaqSchema = {
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

export function RoofMaintenanceFAQ() {
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
              Cochrane Roof Maintenance
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
              Straight answers about annual roof maintenance, manufacturer warranty care, and what to expect
              from your local Red Seal Journeyman roofing contractor.
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
