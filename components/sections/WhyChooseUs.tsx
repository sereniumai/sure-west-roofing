'use client'

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

function FeatureCard({ feature }: { feature: Feature }) {
  const Icon = iconMap[feature.icon]

  return (
    <div className="group cursor-default">
      <div className="bg-[#F7F5F0] p-8 hover:bg-brand-navy transition-colors duration-500 h-full rounded-[--radius-md]">
        <div className="w-12 h-12 bg-brand-navy group-hover:bg-[#D4AF60] flex items-center justify-center mb-5 transition-colors duration-500 rounded-[--radius-sm]">
          {Icon && <Icon className="w-5 h-5 text-white" />}
        </div>
        <h3 className="font-display font-semibold text-brand-navy group-hover:text-white text-xl tracking-tight mb-3 transition-colors duration-500">
          {feature.title}
        </h3>
        <p className="font-body text-[#5A7A9A] group-hover:text-white/60 text-sm font-normal leading-relaxed transition-colors duration-500">
          {feature.description}
        </p>
      </div>
    </div>
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
        <div className="text-center mb-12 lg:mb-16">
          <span className="section-label text-[#D4AF60] mb-4 inline-flex justify-center">
            Why Choose Us
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-[70px] tracking-[-0.04em] leading-[1.05] text-brand-navy mt-4 max-w-3xl mx-auto">
            {heading}
          </h2>
        </div>

        {/* Feature grid, 2x3 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <FeatureCard key={feature.title} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
