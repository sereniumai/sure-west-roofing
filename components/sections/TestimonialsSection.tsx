'use client'

import { motion } from 'framer-motion'
import type { Testimonial } from '@/lib/types'

interface TestimonialsSectionProps {
  label: string
  heading: string
  body: string
  reviewCount: string
  rating: number
  testimonials: Testimonial[]
  googleReviewsUrl?: string
}

export function TestimonialsSection({
  label,
  heading,
  body,
  testimonials,
  googleReviewsUrl,
}: TestimonialsSectionProps) {
  const cards = testimonials.slice(0, 3)

  return (
    <section className="bg-[#F8F8F8] py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header — centered */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-14"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#D6AE60] mb-3 block">
            {label}
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-[48px] text-dark tracking-tight leading-tight">
            {heading}
          </h2>
          <p className="font-body text-body-text leading-relaxed mt-4">
            {body}
          </p>
        </motion.div>

        {/* 3 cards in a row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cards.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              className="bg-white rounded-2xl p-8 border border-[#EBEBEB] flex flex-col"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span
                    key={j}
                    className={`text-lg ${j < testimonial.rating ? 'text-[#D6AE60]' : 'text-[#E5E2D9]'}`}
                    aria-hidden="true"
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-body-text leading-relaxed flex-1 mb-8">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Divider + Location */}
              <div className="border-t border-[#EBEBEB] pt-5">
                <p className="font-body text-[#D6AE60] text-sm">
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Google Reviews link */}
        {googleReviewsUrl && (
          <motion.div
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-display font-semibold text-[#D6AE60] hover:text-[#B8943F] transition-colors text-sm"
            >
              See All Google Reviews
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" /></svg>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  )
}
