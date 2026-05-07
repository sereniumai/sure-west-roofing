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
    question: 'How do I know if my roof has hail damage in Cochrane?',
    answerText:
      'Hail damage is not always obvious from the ground. Look for dents on metal flashing or vents, bruised or pitted shingles, heavy granule loss in your gutters, cracked skylights or pipe boots, new leaks weeks or months after a storm, and circular spatter marks on AC units, decks, or fences. If you spot any of these after a Cochrane hailstorm, book a free inspection.',
    answer: (
      <>
        Hail damage is not always obvious from the ground. Look for dents on metal flashing or
        vents, bruised or pitted shingles, heavy granule loss in your gutters, cracked skylights
        or pipe boots, new leaks weeks or months after a storm, and circular spatter marks on AC
        units, decks, or fences. If you spot any of these after a Cochrane hailstorm, book a free
        inspection.
      </>
    ),
  },
  {
    question: 'Will my Alberta home insurance cover hail damage roof repair?',
    answerText:
      'Standard Alberta home insurance policies cover hail damage to your roof as part of weather-related coverage. Pre-existing damage is not covered. Coverage depends on your specific policy, your deductible, and the severity of the damage. Sure West provides photos, a written diagnosis, and damage classification that meet Alberta insurer documentation standards. Your insurer makes the final coverage decision.',
    answer: (
      <>
        Standard Alberta home insurance policies cover hail damage to your roof as part of
        weather-related coverage. Pre-existing damage is not covered. Coverage depends on your
        specific policy, your deductible, and the severity of the damage. Sure West provides
        photos, a written diagnosis, and damage classification that meet Alberta insurer
        documentation standards. Your insurer makes the final coverage decision.
      </>
    ),
  },
  {
    question: 'How soon after a hailstorm should I get my roof inspected?',
    answerText:
      'As soon as it is safe and conditions allow. Most Alberta insurers will ask for an inspection report dated reasonably close to the storm. Hail damage can also worsen quickly under UV exposure once the asphalt mat is exposed, so an early inspection protects both the claim and the roof. Sure West offers free post-storm inspections across Cochrane, Calgary, and Canmore.',
    answer: (
      <>
        As soon as it is safe and conditions allow. Most Alberta insurers will ask for an
        inspection report dated reasonably close to the storm. Hail damage can also worsen
        quickly under UV exposure once the asphalt mat is exposed, so an early inspection
        protects both the claim and the roof. Sure West offers free post-storm inspections across
        Cochrane, Calgary, and Canmore.
      </>
    ),
  },
  {
    question: 'Can hail damage cause leaks even if the roof looks fine?',
    answerText:
      'Yes. Hail can fracture shingles and underlayment without leaking immediately. The damage is structural at the asphalt mat level, often invisible from the ground or even from the roof surface. Water finds the fracture weeks or months later, sometimes after seasonal freeze-thaw cycles widen the crack. A new leak appearing in the months after a storm is one of the strongest indicators of unaddressed hail damage.',
    answer: (
      <>
        Yes. Hail can fracture shingles and underlayment without leaking immediately. The damage
        is structural at the asphalt mat level, often invisible from the ground or even from the
        roof surface. Water finds the fracture weeks or months later, sometimes after seasonal
        freeze-thaw cycles widen the crack. A new leak appearing in the months after a storm is
        one of the strongest indicators of unaddressed hail damage.
      </>
    ),
  },
  {
    question: 'Do I always need a full roof replacement after hail damage?',
    answerText:
      "No. Hail damage is classified as cosmetic, functional, or structural. Cosmetic damage usually does not affect the roof's lifespan and may not require any repair. Functional damage typically calls for a targeted repair using matched IKO product. Only structural damage, usually from golf-ball or larger hail, requires a full replacement. We will tell you honestly which category applies to your roof.",
    answer: (
      <>
        No. Hail damage is classified as cosmetic, functional, or structural. Cosmetic damage
        usually does not affect the roof&rsquo;s lifespan and may not require any repair.
        Functional damage typically calls for a{' '}
        <Link
          href="/roof-repair"
          className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors"
        >
          targeted repair
        </Link>{' '}
        using matched IKO product. Only structural damage, usually from golf-ball or larger hail,
        requires a{' '}
        <Link
          href="/roof-replacement"
          className="font-semibold text-brand-gold hover:text-[#B8943F] transition-colors"
        >
          full replacement
        </Link>
        . We will tell you honestly which category applies to your roof.
      </>
    ),
  },
  {
    question: 'How long do I have to file a hail damage claim in Alberta?',
    answerText:
      'Most Alberta home insurance policies allow one to two years from the date of the storm to file a claim, though the Insurance Bureau of Canada notes the legal maximum is two years. Some policies have shorter windows. Check your specific policy. Either way, filing as soon as possible is best, since delayed claims often need extra documentation and damage worsens with each season.',
    answer: (
      <>
        Most Alberta home insurance policies allow one to two years from the date of the storm to
        file a claim, though the Insurance Bureau of Canada notes the legal maximum is two years.
        Some policies have shorter windows. Check your specific policy. Either way, filing as
        soon as possible is best, since delayed claims often need extra documentation and damage
        worsens with each season.
      </>
    ),
  },
  {
    question: 'What if I do not want to file an insurance claim?',
    answerText:
      'That is your choice, and Sure West treats the job the same regardless. The post-storm inspection is still free, the written diagnosis is still detailed, and the repair work uses the same IKO impact-rated materials by the same in-house crew. Some homeowners pay direct to avoid premium impact or to skip the claim process. Either path, the standard does not change.',
    answer: (
      <>
        That is your choice, and Sure West treats the job the same regardless. The post-storm
        inspection is still free, the written diagnosis is still detailed, and the repair work
        uses the same IKO impact-rated materials by the same in-house crew. Some homeowners pay
        direct to avoid premium impact or to skip the claim process. Either path, the standard
        does not change.
      </>
    ),
  },
  {
    question: 'How much does hail damage roof repair cost in Cochrane?',
    answerText:
      'Hail damage repair pricing depends on several factors, including the severity of damage (cosmetic, functional, or structural), the affected area, the shingle tier needed, and whether a repair or full replacement is required. Sure West provides a fixed written quote after the post-storm inspection, with the photo documentation and damage classification included. If you are filing a claim, your deductible is what you actually pay out of pocket.',
    answer: (
      <>
        Hail damage repair pricing depends on several factors, including the severity of damage
        (cosmetic, functional, or structural), the affected area, the shingle tier needed, and
        whether a repair or full replacement is required. Sure West provides a fixed written quote
        after the post-storm inspection, with the photo documentation and damage classification
        included. If you are filing a claim, your deductible is what you actually pay out of
        pocket.
      </>
    ),
  },
]

export const hailDamageFaqSchema = {
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

export function HailDamageFAQ() {
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
              Cochrane Hail Damage Repair
              <br className="hidden md:block" /> Questions, Answered
            </h2>
            <p
              className="mt-6 max-w-[760px] text-brand-slate leading-[1.7]"
              style={{
                fontSize: '16px',
                fontFamily: 'var(--font-inter), system-ui, sans-serif',
                fontWeight: 400,
              }}
            >
              Straight answers about hail damage roof repair and Alberta insurance claims.
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
