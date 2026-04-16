'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { Plus } from 'lucide-react'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}

export function FAQItem({
  question,
  answer,
  isOpen,
  onToggle,
  index,
}: FAQItemProps) {
  return (
    <div className="border-b border-[#E8E8E8] last:border-0">
      <button
        onClick={onToggle}
        className="flex justify-between items-center py-5 w-full text-left cursor-pointer group"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <span className="font-display font-semibold text-base text-dark tracking-tight group-hover:text-[#D4AF60] transition-colors duration-200 pr-4">
          {question}
        </span>
        <Plus
          className={`w-5 h-5 text-[#2C4766] flex-shrink-0 transition-transform duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <p className="font-body text-sm text-body-text leading-relaxed pb-5 pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
