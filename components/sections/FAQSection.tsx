'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
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
    <section className="bg-[#F5F5F5] py-20 lg:py-28">
      {/* FAQ Schema */}
      {schemaEnabled && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateFAQSchema(faqs) }}
        />
      )}

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label text-[#F97316] mb-4 inline-flex justify-center">
            FAQs
          </span>
          <h2 className="font-display font-extrabold uppercase text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[0.95] text-[#1A1A1A] mt-4">
            {heading}
          </h2>
          <p className="font-body text-[#666] leading-relaxed mt-4">
            {body}
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <motion.div
          className="max-w-3xl mx-auto"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="bg-white border border-[#E5E5E5] overflow-hidden">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-[#E5E5E5] last:border-0"
              >
                <button
                  onClick={() =>
                    setOpenIndex(index === openIndex ? null : index)
                  }
                  className="flex justify-between items-center py-5 px-6 w-full text-left cursor-pointer group"
                  aria-expanded={index === openIndex}
                >
                  <span className="font-display font-bold text-sm text-[#1A1A1A] uppercase tracking-wider group-hover:text-[#F97316] transition-colors duration-200 pr-6">
                    {faq.question}
                  </span>
                  <div
                    className={`w-8 h-8 flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      index === openIndex
                        ? 'bg-[#F97316] text-white rotate-45'
                        : 'bg-[#F5F5F5] text-[#1A1A1A]/40 group-hover:bg-[#F97316]/10 group-hover:text-[#F97316]'
                    }`}
                  >
                    <Plus className="w-4 h-4" />
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {index === openIndex && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      className="overflow-hidden"
                    >
                      <p
                        className="font-body text-sm text-[#666] leading-relaxed px-6 pb-6 pr-16 [&_a]:text-[#F97316] [&_a]:font-semibold [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-[#EA580C] [&_a]:transition-colors"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <p className="font-body text-[#666] text-sm mt-6 text-center">
            Have a question not listed here?{' '}
            <Link
              href="/contact"
              className="text-[#F97316] font-semibold hover:text-[#EA580C] transition-colors"
            >
              Contact us
            </Link>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
