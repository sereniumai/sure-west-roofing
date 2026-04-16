'use client'

import { useRef, useCallback } from 'react'
import { motion, useMotionValue, useSpring } from 'framer-motion'
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

function TiltCard({ feature, index }: { feature: Feature; index: number }) {
  const ref = useRef<HTMLDivElement>(null)
  const Icon = iconMap[feature.icon]

  const rotateX = useMotionValue(0)
  const rotateY = useMotionValue(0)
  const springX = useSpring(rotateX, { stiffness: 150, damping: 20 })
  const springY = useSpring(rotateY, { stiffness: 150, damping: 20 })

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width - 0.5
      const y = (e.clientY - rect.top) / rect.height - 0.5
      rotateY.set(x * 12)
      rotateX.set(y * -12)
    },
    [rotateX, rotateY]
  )

  const handleMouseLeave = useCallback(() => {
    rotateX.set(0)
    rotateY.set(0)
  }, [rotateX, rotateY])

  return (
    <motion.div
      ref={ref}
      className="group cursor-default"
      style={{ perspective: '800px' }}
      initial={{ y: 40, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-30px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <motion.div
        className="bg-[#F7F5F0] p-8 hover:bg-brand-navy transition-colors duration-500 h-full rounded-[--radius-md]"
        style={{
          rotateX: springX,
          rotateY: springY,
          transformStyle: 'preserve-3d',
        }}
      >
        <div className="w-12 h-12 bg-brand-navy group-hover:bg-[#D4AF60] flex items-center justify-center mb-5 transition-colors duration-500 rounded-[--radius-sm]">
          {Icon && <Icon className="w-5 h-5 text-white" />}
        </div>
        <h3 className="font-display font-semibold text-brand-navy group-hover:text-white text-xl tracking-tight mb-3 transition-colors duration-500">
          {feature.title}
        </h3>
        <p className="font-body text-[#5A7A9A] group-hover:text-white/60 text-sm font-normal leading-relaxed transition-colors duration-500">
          {feature.description}
        </p>
      </motion.div>
    </motion.div>
  )
}

export function WhyChooseUs({ heading, features }: WhyChooseUsProps) {
  return (
    <section
      className="bg-white"
      style={{ padding: 'var(--section-pad-top) var(--section-pad-x) var(--section-pad-bot)' }}
    >
      <div className="max-w-[1320px] mx-auto">
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
          <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-[70px] tracking-[-0.04em] leading-[1.05] text-brand-navy mt-4 max-w-3xl mx-auto">
            {heading}
          </h2>
        </motion.div>

        {/* Feature grid, 2x3 layout with 3D tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <TiltCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
