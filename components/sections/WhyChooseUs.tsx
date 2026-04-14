'use client'

import { motion } from 'framer-motion'
import {
  ShieldCheck,
  MapPin,
  ClipboardCheck,
  Award,
  Clock,
  FileText,
} from 'lucide-react'

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  ShieldCheck,
  MapPin,
  ClipboardCheck,
  Award,
  Clock,
  FileText,
}

interface Feature {
  icon: string
  title: string
  description: string
}

interface WhyChooseUsProps {
  heading: string
  features: Feature[]
}

export function WhyChooseUs({ heading, features }: WhyChooseUsProps) {
  return (
    <section className="bg-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <motion.div
          className="text-center mb-12 lg:mb-16"
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }}
        >
          <span className="section-label text-[#D4AF60] mb-4 inline-flex justify-center">
            Why Choose Us
          </span>
          <h2 className="font-display font-semibold uppercase text-3xl md:text-4xl lg:text-5xl tracking-tight leading-[0.95] text-[#1A1A1A] mt-4 max-w-3xl mx-auto">
            {heading}
          </h2>
        </motion.div>

        {/* Feature grid — 2x3 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => {
            const Icon = iconMap[feature.icon]
            return (
              <motion.div
                key={feature.title}
                className="group bg-[#F5F5F5] p-8 hover:bg-[#1A1A1A] transition-colors duration-500 cursor-default"
                initial={{ y: 40, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true, margin: '-30px' }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="w-12 h-12 bg-[#1A1A1A] group-hover:bg-[#D4AF60] flex items-center justify-center mb-5 transition-colors duration-500">
                  {Icon && <Icon className="w-5 h-5 text-white" />}
                </div>
                <h3 className="font-display font-bold text-[#1A1A1A] group-hover:text-white uppercase text-sm tracking-wider mb-3 transition-colors duration-500">
                  {feature.title}
                </h3>
                <p className="font-body text-[#666] group-hover:text-white/60 text-sm leading-relaxed transition-colors duration-500">
                  {feature.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
