'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const areas = [
  {
    name: 'Calgary',
    description:
      'Serving Calgary homeowners with the same certified quality and honest pricing we are known for in Cochrane.',
    href: '/roofing-contractor-calgary',
  },
  {
    name: 'Canmore',
    description:
      'From the Bow Valley to the Rockies. Premium roofing services for Canmore homeowners who demand the best.',
    href: '/roofing-contractor-canmore',
  },
]

export function ServiceAreasSection() {
  return (
    <section className="bg-[#F8F8F8] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2 className="font-display font-extrabold text-3xl lg:text-[48px] text-dark tracking-tight leading-tight">
            Roofing Services Across the Bow Valley
          </h2>
          <p className="font-body text-body-text leading-relaxed mt-4 text-lg max-w-xl mx-auto">
            Based in Cochrane and proudly serving homeowners across Calgary and
            Canmore. Wherever you are in the Bow Valley, we bring the same
            certified quality to your doorstep.
          </p>
        </motion.div>

        {/* Location cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {areas.map((area, i) => (
            <motion.div
              key={area.name}
              className="bg-white rounded-2xl p-8 border border-[#EBEBEB] text-center"
              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
            >
              <div className="w-12 h-12 rounded-2xl bg-[#D6AE60]/10 flex items-center justify-center mx-auto mb-5">
                <MapPin className="w-5 h-5 text-[#D6AE60]" />
              </div>
              <h3 className="font-display font-bold text-dark text-xl tracking-tight mb-3">
                {area.name}
              </h3>
              <p className="font-body text-sm text-body-text leading-relaxed mb-6 max-w-xs mx-auto">
                {area.description}
              </p>
              <Button variant="outline" size="sm" href={area.href}>
                View Services
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
