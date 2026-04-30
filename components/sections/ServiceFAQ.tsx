'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'
import type { FaqItem } from '@/lib/faqs/types'

interface ServiceFAQProps {
  faqs: FaqItem[]
  heading: string
  subhead: string
  ctaHref?: string
  sectionBg?: string
}

export function ServiceFAQ({
  faqs,
  heading,
  subhead,
  ctaHref = '/free-roof-estimate-cochrane',
  sectionBg = '#F7F5F0',
}: ServiceFAQProps) {
  const [open, setOpen] = useState<number | null>(null)

  const mid = Math.ceil(faqs.length / 2)
  const columns = [faqs.slice(0, mid), faqs.slice(mid)]

  return (
    <section
      id="faq"
      className="relative overflow-hidden py-20 md:py-24"
      style={{
        background: sectionBg,
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
              background: '#F0EEE8',
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
            {heading}
          </h2>
          <p
            className="mt-6 max-w-[440px] text-brand-slate leading-[1.7]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            {subhead}
          </p>
          <div className="mt-8">
            <Button variant="primary" size="lg" href={ctaHref}>
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
                const i = faqs.indexOf(faq)
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
                          className="pt-4 pb-5 md:pb-7 pr-6 md:pr-14 text-brand-navy leading-[1.6] space-y-4"
                          style={{
                            fontSize: '15px',
                            fontFamily: 'var(--font-inter), system-ui, sans-serif',
                            fontWeight: 400,
                          }}
                        >
                          {faq.answer.split(/\n\n+/).map((para, pi) => (
                            <p key={pi}>{para.trim()}</p>
                          ))}
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
            href={ctaHref}
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
