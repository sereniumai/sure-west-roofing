'use client'

import { useRef } from 'react'
import { Star } from 'lucide-react'
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
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-label text-[#D4AF60] mb-4 inline-flex justify-center">
            Client Reviews
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-[70px] tracking-[-0.04em] leading-[1.05] text-white mt-4">
            {heading}
          </h2>
          <p className="font-body text-white/50 font-normal leading-relaxed mt-4">
            {body}
          </p>
        </div>
      </div>

      {/* Horizontal scrollable carousel */}
      <div ref={constraintRef} className="w-full overflow-x-auto" style={{ padding: '0 var(--section-pad-x)' }}>
        <div className="flex gap-6">
          {testimonials.map((testimonial, i) => (
            <div
              key={testimonial.name}
              className="bg-[#111111] p-8 border border-white/5 flex flex-col min-w-[320px] md:min-w-[380px] lg:min-w-[420px] flex-shrink-0 select-none rounded-[--radius-md]"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4"
                    style={{
                      color: j < testimonial.rating ? '#D4AF60' : 'rgba(255,255,255,0.1)',
                      fill: j < testimonial.rating ? '#D4AF60' : 'transparent',
                    }}
                    strokeWidth={1.5}
                    aria-hidden="true"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="font-body text-white/70 font-normal leading-relaxed flex-1 mb-8">
                &ldquo;{testimonial.text}&rdquo;
              </p>

              {/* Author */}
              <div className="border-t border-white/10 pt-5 flex items-center gap-3">
                <div className="w-10 h-10 bg-[#D4AF60] flex items-center justify-center flex-shrink-0 rounded-full">
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
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint + Google Reviews link */}
      <div className="w-full mt-8 flex flex-col sm:flex-row items-center justify-between gap-4" style={{ padding: '0 var(--section-pad-x)' }}>
        <div className="bg-white/5 px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white/40 flex items-center gap-2">
          <span>&lsaquo;</span>
          <span>Scroll to see more</span>
          <span>&rsaquo;</span>
        </div>

        {googleReviewsUrl && (
          <div>
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
          </div>
        )}
      </div>
    </section>
  )
}
