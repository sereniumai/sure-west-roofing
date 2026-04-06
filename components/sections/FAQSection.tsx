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
    <section className="bg-[#F8F8F8] py-20 lg:py-28">
      {/* FAQ Schema */}
      {schemaEnabled && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: generateFAQSchema(faqs) }}
        />
      )}

      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-20">
          {/* LEFT — Header */}
          <motion.div
            className="lg:col-span-2"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-display font-extrabold text-3xl lg:text-[44px] text-dark tracking-tight leading-tight">
              {heading}
            </h2>

            <p className="font-body text-body-text leading-relaxed mt-4">
              {body}
            </p>

            <p className="font-body text-body-text text-sm mt-8">
              Have a question not listed here?{' '}
              <Link
                href="/contact"
                className="text-[#D6AE60] font-semibold hover:text-[#B8943F] transition-colors"
              >
                Contact us
              </Link>
            </p>
          </motion.div>

          {/* RIGHT — FAQ accordion */}
          <motion.div
            className="lg:col-span-3"
            initial={{ y: 30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white border border-[#EBEBEB] rounded-2xl overflow-hidden">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-[#EBEBEB] last:border-0">
                  <button
                    onClick={() => setOpenIndex(index === openIndex ? null : index)}
                    className="flex justify-between items-center py-6 px-7 w-full text-left cursor-pointer group"
                    aria-expanded={index === openIndex}
                  >
                    <span className="font-display font-bold text-base text-dark tracking-tight group-hover:text-[#D6AE60] transition-colors duration-200 pr-6">
                      {faq.question}
                    </span>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      index === openIndex
                        ? 'bg-[#D6AE60] text-white rotate-45'
                        : 'bg-[#F8F8F8] text-dark/40 group-hover:bg-[#D6AE60]/10 group-hover:text-[#D6AE60]'
                    }`}>
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
                        <p className="font-body text-sm text-body-text leading-relaxed px-7 pb-6 pr-16">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
