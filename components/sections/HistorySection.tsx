'use client'

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
          <div>
            <span className="section-label text-[#D4AF60] mb-4 block">
              Our Story
            </span>
            <h2 className="font-display font-semibold text-4xl md:text-5xl lg:text-6xl xl:text-[70px] tracking-[-0.04em] leading-[1.05] text-brand-navy mt-4">
              {heading}
            </h2>
          </div>

          {/* Right, Body text */}
          <div>
            <p className="font-body text-brand-slate text-base lg:text-lg leading-relaxed">
              {body}
            </p>
            <div className="mt-6 pt-6 border-t border-white/10">
              <span className="font-display font-semibold text-[#D4AF60] text-sm uppercase tracking-wider">
                Proudly serving since {since}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
