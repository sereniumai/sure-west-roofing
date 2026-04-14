'use client'

import { useRef } from 'react'
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
  heading,
  body,
  testimonials,
  googleReviewsUrl,
}: TestimonialsSectionProps) {
  const constraintRef = useRef<HTMLDivElement>(null)

  return (
    <section
      className="bg-[--color-black] overflow-hidden"
      style={{ padding: 'var(--section-pad-top) 0 var(--section-pad-bot)' }}
    >
      <div style={{ padding: '0 var(--section-pad-x)' }}>
        {/* Header */}
        <motion.div
          className="text-center max-w-3xl mx-auto mb-14"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label text-[#D4AF60] mb-4 inline-flex justify-center">
            Client Reviews
          </span>
          <h2 className="font-display font-semibold uppercase text-3xl md:text-4xl lg:text-5xl xl:text-[70px] tracking-[-0.04em] leading-[0.95] text-white mt-4">
            {heading}
          </h2>
          <p className="font-body text-white/50 font-normal leading-relaxed mt-4">
            {body}
          </p>
        </motion.div>
      </div>

      {/* Draggable horizontal carousel */}
      <div ref={constraintRef} className="w-full overflow-hidden" style={{ padding: '0 var(--section-pad-x)' }}>
        <motion.div
          className="flex gap-6 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={constraintRef}
          dragElastic={0.1}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              className="bg-[#111111] p-8 border border-white/5 flex flex-col min-w-[320px] md:min-w-[380px] lg:min-w-[420px] flex-shrink-0 select-none"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <span
                    key={j}
                    className={`text-lg ${
                      j < testimonial.rating
                        ? 'text-[#D4AF60]'
                        : 'text-white/10'
                    }`}
                  >
                    ★
                  </span>
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-white/70 font-normal leading-relaxed flex-1 mb-8">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-white/10 pt-5 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D4AF60] flex items-center justify-center flex-shrink-0">
                  <span className="font-display font-bold text-white text-sm">
                    {testimonial.initials}
                  </span>
                </div>
                <div>
                  <p className="font-body text-white text-sm font-semibold">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-white/40 text-xs font-normal">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Drag hint + Google Reviews link */}
      <div className="w-full mt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ padding: '0 var(--section-pad-x)' }}>
        <div className="bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white/40 flex items-center gap-2">
          <span>&lsaquo;</span>
          <span>Drag to see more</span>
          <span>&rsaquo;</span>
        </div>

        {googleReviewsUrl && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <a
              href={googleReviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-body font-semibold text-[#D4AF60] hover:text-[#B8943F] transition-colors text-sm uppercase tracking-wider"
            >
              See All Google Reviews
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    </section>
  )
}
