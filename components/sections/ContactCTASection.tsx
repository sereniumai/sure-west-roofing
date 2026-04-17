'use client'

import { m } from 'framer-motion'
import { Phone, Mail, MapPin } from 'lucide-react'

export function ContactCTASection() {
  return (
    <section className="bg-[--color-accent] py-6">
      <div
        className="max-w-[1320px] mx-auto"
        style={{ padding: '0 var(--section-pad-x)' }}
      >
        <m.div
          className="flex flex-col md:flex-row items-center justify-between gap-4"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-6 flex-wrap justify-center">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-white" />
              <span className="font-body text-white text-sm font-semibold">
                Call us anytime
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-white" />
              <span className="font-body text-white text-sm">
                info@surewestroofing.ca
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-white" />
              <span className="font-body text-white text-sm">
                Cochrane, AB
              </span>
            </div>
          </div>
          <span className="font-display font-bold text-white text-sm uppercase tracking-wider">
            Mon - Sat: 8:00am - 6:00pm
          </span>
        </m.div>
      </div>
    </section>
  )
}
