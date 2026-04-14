'use client'

import { motion } from 'framer-motion'
import { MapPin } from 'lucide-react'
import { Button } from '@/components/ui/Button'

const areas = [
  {
    name: 'Roofing Contractor Calgary',
    description:
      'Serving homeowners across Calgary and the surrounding communities. The same certified standard we deliver in Cochrane, brought to your Calgary home.',
    href: '/roofing-contractor-calgary',
    linkText: 'Calgary Roofing Services',
  },
  {
    name: 'Roofing Contractor Canmore',
    description:
      "Canmore's mountain climate demands expert roofing knowledge. Steep pitches, heavy snow loads, and Chinook winds. We know how to build roofs that last here.",
    href: '/roofing-contractor-canmore',
    linkText: 'Canmore Roofing Services',
  },
]

export function ServiceAreasSection() {
  return (
    <section className="bg-[#FFFCFC] py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="section-label text-[#D4AF60] mb-4 inline-flex justify-center">
            Service Areas
          </span>
          <h2 className="font-display font-semibold uppercase text-3xl md:text-4xl lg:text-5xl xl:text-[70px] tracking-[-0.04em] leading-[0.95] text-black mt-4">
            Roofing Contractor Serving Cochrane,
            <br className="hidden lg:block" /> Calgary and Canmore
          </h2>
          <p className="font-body text-[#666] leading-relaxed mt-4 text-lg max-w-2xl mx-auto">
            Based in Cochrane, Alberta. We serve homeowners across the Bow Valley
            corridor and the Calgary region.
          </p>
        </motion.div>

        {/* Location cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {areas.map((area, i) => (
            <motion.div
              key={area.name}
              className="group bg-[#F5F5F5] p-8 border border-[#E5E5E5] text-center hover:-translate-y-2 hover:border-[#D4AF60]/20 transition-all duration-500"
              initial={{ y: 40, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{
                duration: 0.6,
                delay: i * 0.15,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <div className="w-12 h-12 bg-black group-hover:bg-[#D4AF60] flex items-center justify-center mx-auto mb-5 transition-colors duration-500">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-display font-semibold text-black uppercase text-base tracking-wider mb-3">
                {area.name}
              </h3>
              <p className="font-body text-sm text-[#666] leading-relaxed mb-6 max-w-xs mx-auto">
                {area.description}
              </p>
              <Button variant="primary" size="sm" href={area.href}>
                {area.linkText}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
