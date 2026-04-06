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
    <section className="bg-[#F8F8F8] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          className="bg-[#1B3558] rounded-3xl px-8 py-14 lg:px-16 lg:py-20 text-center"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#D6AE60] mb-3 block">
            Get Started Today
          </span>
          <h2 className="font-display font-extrabold text-3xl lg:text-[48px] text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Ready to Protect Your{'\n'}Cochrane Home?
          </h2>
          <p className="font-body text-white/70 leading-relaxed mt-4 text-lg max-w-2xl mx-auto">
            Book your free roof inspection today. No pressure, no obligation, just an honest assessment from a certified Cochrane roofing contractor.
          </p>

          {/* Bullets */}
          <div className="flex flex-wrap justify-center gap-6 mt-8">
            {bullets.map((bullet) => (
              <div key={bullet} className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-full bg-[#D6AE60]/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-3 h-3 text-[#D6AE60]" />
                </div>
                <span className="font-body text-sm text-white/80">{bullet}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <Button variant="primary" size="lg" href="/contact">
              Get a Free Estimate
            </Button>
            <Button variant="ghost" size="lg" href="/services">
              Explore Our Services
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
