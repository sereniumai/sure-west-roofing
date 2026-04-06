'use client'

import { useState } from 'react'
import Link from 'next/link'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { FAQItem } from '@/components/ui/FAQItem'
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
  label,
  heading,
  body,
  faqs,
  schemaEnabled = true,
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="bg-white py-20 lg:py-28">
      {/* FAQ Schema */}
      {schemaEnabled && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateFAQSchema(faqs) }}
        />
      )}

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <SectionLabel text={label} className="justify-center" />

          <h2 className="font-display font-bold text-3xl lg:text-4xl text-dark tracking-tight mt-3">
            {heading}
          </h2>

          <p className="font-body text-body-text leading-relaxed mt-4">
            {body}
          </p>
        </div>

        {/* FAQ list */}
        <div className="max-w-3xl mx-auto bg-[#F9F8F5] rounded-2xl border border-[#E5E2D9] overflow-hidden px-6 md:px-10">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={index === openIndex}
              onToggle={() =>
                setOpenIndex(index === openIndex ? null : index)
              }
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center">
          <p className="font-body text-body-text text-sm">
            Have a question not listed here?{' '}
            <Link
              href="/contact"
              className="text-[#C49A2C] font-semibold hover:underline"
            >
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </section>
  )
}
