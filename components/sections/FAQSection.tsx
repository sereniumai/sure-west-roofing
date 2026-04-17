'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Plus } from 'lucide-react'
import { generateFAQSchema } from '@/lib/faq-schema'
import type { FAQItem as FAQItemType } from '@/lib/types'

interface FAQSectionProps {
  label: string
  heading: string
  body: string
  faqs: FAQItemType[]
  schemaEnabled?: boolean
}

export function FAQSection({
  heading,
  body,
  faqs,
  schemaEnabled = true,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section
      className="bg-white"
      style={{ padding: 'var(--section-pad-top) 0 var(--section-pad-bot)' }}
    >
      {/* FAQ Schema */}
      {schemaEnabled && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateFAQSchema(faqs) }}
        />
      )}

      <div className="max-w-6xl mx-auto" style={{ padding: '0 var(--section-pad-x)' }}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-label text-[#D4AF60] mb-4 inline-flex justify-center">
            FAQs
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-[70px] tracking-[-0.04em] leading-[1.05] text-brand-navy mt-4">
            {heading}
          </h2>
          <p className="font-body text-[#5A7A9A] leading-relaxed mt-4">
            {body}
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="max-w-3xl mx-auto">
          <div className="bg-white border border-[#E8E8E8] overflow-hidden rounded-[--radius-md]">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#E8E8E8] last:border-0"
              >
                <button
                  onClick={() =>
                    setOpenIndex(index === openIndex ? null : index)
                  }
                  className="flex justify-between items-center py-5 px-6 w-full text-left cursor-pointer group"
                  aria-expanded={index === openIndex}
                >
                  <span className="font-display font-semibold text-[17px] text-[#2C4766] tracking-tight group-hover:text-[#D4AF60] transition-colors duration-200 pr-6">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 flex items-center justify-center flex-shrink-0 transition-all duration-300 rounded-full ${
                      index === openIndex
                        ? 'bg-[#D4AF60] text-white rotate-45'
                        : 'bg-[#F7F5F0] text-[#2C4766]/40 group-hover:bg-[#D4AF60]/10 group-hover:text-[#D4AF60]'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                {index === openIndex && (
                  <div className="overflow-hidden">
                    <p
                      className="font-body text-sm text-[#5A7A9A] leading-relaxed px-6 pb-6 pr-16 [&_a]:text-[#D4AF60] [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-[#B8943F] [&_a]:transition-colors"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>

          <p className="font-body text-[#5A7A9A] text-sm mt-6 text-center">
            Have a question not listed here?{' '}
            <Link
              href="/free-roof-estimate-cochrane"
              className="text-[#D4AF60] font-semibold hover:text-[#B8943F] transition-colors"
            >
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
