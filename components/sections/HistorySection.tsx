'use client'

import { motion } from 'framer-motion'

interface HistorySectionProps {
  heading: string
  body: string
  since: string
}

export function HistorySection({ heading, body, since }: HistorySectionProps) {
  return (
    <section className="bg-brand-cream py-16 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left, Large heading */}
          <motion.div
            initial={{ x: -40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="section-label text-[#D4AF60] mb-4 block">
              Our Story
            </span>
            <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-[70px] tracking-[-0.04em] leading-[1.05] text-brand-navy mt-4">
              {heading}
            </h2>
          </motion.div>

          {/* Right, Body text */}
          <motion.div
            initial={{ x: 40, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-body text-brand-slate text-base lg:text-lg leading-relaxed">
              {body}
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <span className="font-display font-semibold text-[#D4AF60] text-sm uppercase tracking-wider">
                Proudly serving since {since}
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
