'use client'

import { motion } from 'framer-motion'
import { SectionLabel } from '@/components/ui/SectionLabel'
import { TestimonialCard } from '@/components/ui/TestimonialCard'
import type { Testimonial } from '@/lib/types'

interface TestimonialsSectionProps {
  label: string
  heading: string
  body: string
  reviewCount: string
  rating: number
  testimonials: Testimonial[]
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
}

const cardVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, ease: [0, 0, 0.2, 1] as const },
  },
}

export function TestimonialsSection({
  label,
  heading,
  body,
  reviewCount,
  rating,
  testimonials,
}: TestimonialsSectionProps) {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 items-start">
          {/* LEFT — intro */}
          <div className="lg:col-span-2">
            <SectionLabel text={label} />

            <h2 className="font-display font-bold text-3xl lg:text-4xl text-dark tracking-wide leading-tight mt-3">
              {heading}
            </h2>

            <p className="font-body text-body-text leading-relaxed mt-4">
              {body}
            </p>

            {/* Stars */}
            <div className="mt-8 flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className={`text-xl ${i < rating ? 'text-[#C49A2C]' : 'text-[#E5E2D9]'}`}
                  aria-hidden="true"
                >
                  ★
                </span>
              ))}
            </div>

            {/* Review count */}
            <div className="mt-4">
              <div className="font-display font-bold text-5xl text-[#1B3558] tracking-wide">
                {reviewCount}
              </div>
              <p className="font-body text-sm text-body-text mt-1">
                5-star Google reviews from Cochrane homeowners
              </p>
            </div>

            {/* Google badge */}
            <div className="mt-6">
              <div className="inline-flex items-center gap-2 bg-[#F9F8F5] border border-[#E5E2D9] rounded-full px-4 py-2">
                {/* Google G icon */}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                >
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A11.96 11.96 0 001 12c0 1.94.46 3.77 1.18 5.07l3.66-2.98z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                <span className="font-body text-xs font-semibold text-dark">
                  Verified Google Reviews
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT — testimonial cards */}
          <motion.div
            className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
          >
            {testimonials.map((testimonial) => (
              <motion.div key={testimonial.name} variants={cardVariants}>
                <TestimonialCard
                  name={testimonial.name}
                  location={testimonial.location}
                  text={testimonial.text}
                  initials={testimonial.initials}
                  rating={testimonial.rating}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
