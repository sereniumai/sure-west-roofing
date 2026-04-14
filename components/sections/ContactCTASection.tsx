'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const bullets = [
  'Free on-site roof inspection',
  'Clear written quote within 24 hours',
  'Certified roofers on every job',
]

export function ContactCTASection() {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="bg-[#F8F8F8] rounded-3xl px-8 py-14 lg:px-16 lg:py-20 text-center border border-[#EBEBEB]"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.span
            className="font-body text-xs font-semibold tracking-widest uppercase text-[#D6AE60] mb-3 block"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            Get Started Today
          </motion.span>
          <motion.h2
            className="font-display font-extrabold text-3xl lg:text-[48px] text-dark tracking-tight leading-tight max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
          >
            Ready to Protect Your{'\n'}Cochrane Home?
          </motion.h2>
          <motion.p
            className="font-body text-body-text leading-relaxed mt-4 text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Book your free roof inspection today. No pressure, no obligation, just an honest assessment from a certified Cochrane roofing contractor.
          </motion.p>

          {/* Bullets — staggered */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {bullets.map((bullet, i) => (
              <motion.div
                key={bullet}
                className="flex items-center gap-2"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
              >
                <motion.div
                  className="w-5 h-5 rounded-full bg-[#D6AE60]/20 flex items-center justify-center flex-shrink-0"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', stiffness: 400, damping: 15, delay: 0.35 + i * 0.1 }}
                >
                  <Check className="w-3 h-3 text-[#D6AE60]" />
                </motion.div>
                <span className="font-body text-sm text-body-text">{bullet}</span>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button variant="primary" size="lg" href="/contact">
              Get a Free Estimate
            </Button>
            <Button variant="outline" size="lg" href="/services">
              Explore Our Services
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
