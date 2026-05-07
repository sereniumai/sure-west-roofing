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
    question: 'How much does siding installation cost in Cochrane?',
    answerText:
      'Siding installation pricing in Cochrane depends on several factors, including the size of the home, the material chosen, the condition of the existing exterior, and whether eavestroughs and soft metals are included. Vinyl is the most affordable, fibre cement and engineered wood sit in the middle, and metal varies by gauge and finish. Sure West provides a fixed written quote after the on-site assessment, with no surprise charges added later.',
    answer: (
      <>
        Siding installation pricing in Cochrane depends on several factors, including the size of
        the home, the material chosen, the condition of the existing exterior, and whether
        eavestroughs and soft metals are included. Vinyl is the most affordable, fibre cement and
        engineered wood sit in the middle, and metal varies by gauge and finish. Sure West provides
        a fixed written quote after the on-site assessment, with no surprise charges added later.
      </>
    ),
  },
  {
    question: 'What is the difference between siding and soft metals?',
    answerText:
      'Siding is the main exterior cladding of your home, vinyl, fibre cement, metal, or engineered wood, that protects the structure and defines the look. Soft metals are the aluminum trim and accessory work that ties the siding into the rest of the home, eavestroughs, downspouts, fascia, soffit, and flashing around windows, doors, and roof-to-wall transitions. Sure West installs both as one connected system.',
    answer: (
      <>
        Siding is the main exterior cladding of your home, vinyl, fibre cement, metal, or
        engineered wood, that protects the structure and defines the look. Soft metals are the
        aluminum trim and accessory work that ties the siding into the rest of the home,
        eavestroughs, downspouts, fascia, soffit, and flashing around windows, doors, and
        roof-to-wall transitions. Sure West installs both as one connected system.
      </>
    ),
  },
  {
    question: 'Do you replace eavestroughs and downspouts?',
    answerText:
      'Yes. Sure West installs seamless 5-inch and 6-inch K-style aluminum eavestrough systems with matched downspouts and proper grade for water flow. We replace full systems, repair damaged sections, and add downspout extensions where the existing setup is dumping water against your foundation. We can do this as a standalone job or as part of a larger siding or roofing project.',
    answer: (
      <>
        Yes. Sure West installs seamless 5-inch and 6-inch K-style aluminum eavestrough systems
        with matched downspouts and proper grade for water flow. We replace full systems, repair
        damaged sections, and add downspout extensions where the existing setup is dumping water
        against your foundation. We can do this as a standalone job or as part of a{' '}
        <Link
          href="/roof-replacement"
          className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors"
        >
          larger siding or roofing project
        </Link>
        .
      </>
    ),
  },
  {
    question: 'Which siding materials work best for Alberta weather?',
    answerText:
      "For Alberta's freeze-thaw cycles, hail, and Chinook winds, fibre cement (James Hardie) and metal siding generally perform best. Both stand up to hail without denting easily, handle temperature swings without warping, and resist fire. Engineered wood offers good weather resistance with a natural look. Vinyl is the most affordable but can become brittle in extreme cold and dent under hail. We will walk you through the trade-offs in person.",
    answer: (
      <>
        For Alberta&rsquo;s freeze-thaw cycles, hail, and Chinook winds, fibre cement (James
        Hardie) and metal siding generally perform best. Both stand up to hail without denting
        easily, handle temperature swings without warping, and resist fire. Engineered wood offers
        good weather resistance with a natural look. Vinyl is the most affordable but can become
        brittle in extreme cold and dent under hail. We will walk you through the trade-offs in
        person.
      </>
    ),
  },
  {
    question: 'Can you repair just a damaged section of siding?',
    answerText:
      'Yes, in most cases. If the damaged section is a recent install or an accessible material that we can match, we repair the affected panels rather than replace the whole elevation. If the existing siding is older or the colour has faded significantly, a perfect match may not be possible. We will tell you honestly before we quote and discuss options that still protect the home.',
    answer: (
      <>
        Yes, in most cases. If the damaged section is a recent install or an accessible material
        that we can match, we repair the affected panels rather than replace the whole elevation.
        If the existing siding is older or the colour has faded significantly, a perfect match may
        not be possible. We will tell you honestly before we quote and discuss options that still
        protect the home.
      </>
    ),
  },
  {
    question: 'How long does siding installation take?',
    answerText:
      'Most Cochrane siding installations take several days to two weeks, depending on home size, material chosen, and weather. Vinyl installs typically run faster than fibre cement, which requires more careful handling and cutting. Eavestrough replacements alone are usually completed within a day or two. We confirm timeline in writing in your quote and schedule the install around your calendar and the Cochrane forecast.',
    answer: (
      <>
        Most Cochrane siding installations take several days to two weeks, depending on home size,
        material chosen, and weather. Vinyl installs typically run faster than fibre cement, which
        requires more careful handling and cutting. Eavestrough replacements alone are usually
        completed within a day or two. We confirm timeline in writing in your quote and schedule
        the install around your calendar and the Cochrane forecast.
      </>
    ),
  },
  {
    question: 'Will my home insurance cover siding damage?',
    answerText:
      'Often, yes, if the damage is from a sudden event like hail, wind, or a fallen tree. Standard Alberta home insurance policies typically cover storm damage to siding as part of weather-related coverage. Pre-existing damage and gradual wear are not covered. Sure West provides photos and a written diagnosis suitable for an insurance claim, or for paying out of pocket if you choose not to file.',
    answer: (
      <>
        Often, yes, if the damage is from a sudden event like hail, wind, or a fallen tree.
        Standard Alberta home insurance policies typically cover storm damage to siding as part of
        weather-related coverage. Pre-existing damage and gradual wear are not covered. Sure West
        provides photos and a written diagnosis suitable for an{' '}
        <Link
          href="/hail-damage-repair"
          className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors"
        >
          insurance claim
        </Link>
        , or for paying out of pocket if you choose not to file.
      </>
    ),
  },
  {
    question: 'Do you offer a guarantee on siding and soft metals?',
    answerText:
      'Yes. Every Sure West siding and soft metals project comes with a written workmanship guarantee, layered on top of the manufacturer warranty that protects the materials themselves. Both are spelled out in your written quote before any work begins. Two layers of accountability, neither hidden in fine print.',
    answer: (
      <>
        Yes. Every Sure West siding and soft metals project comes with a written workmanship
        guarantee, layered on top of the manufacturer warranty that protects the materials
        themselves. Both are spelled out in your written quote before any work begins. Two layers
        of accountability, neither hidden in fine print.
      </>
    ),
  },
]

export const sidingSoftMetalsFaqSchema = {
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

export function SidingSoftMetalsFAQ() {
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
              Cochrane Siding &amp; Soft Metals
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
              Straight answers about siding, eavestroughs, soft metals, and what to expect from
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
