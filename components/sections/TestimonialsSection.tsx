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
}

export function TestimonialsSection({
  label,
  heading,
  body,
  testimonials,
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

              {/* Divider + Author */}
              <div className="border-t border-[#EBEBEB] pt-5">
                <p className="font-display font-bold text-dark text-base tracking-tight">
                  {testimonial.name}
                </p>
                <p className="font-body text-[#D6AE60] text-sm mt-0.5">
                  {testimonial.location}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
