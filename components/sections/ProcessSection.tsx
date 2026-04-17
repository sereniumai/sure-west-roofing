'use client'

interface Step {
  number: number
  title: string
  description: string
}

interface ProcessSectionProps {
  heading: string
  body?: string
  steps: Step[]
}

export function ProcessSection({ heading, body, steps }: ProcessSectionProps) {
  return (
    <section
      className="bg-white overflow-hidden"
      style={{ padding: 'var(--section-pad-top) var(--section-pad-x) var(--section-pad-bot)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="section-label text-[#D4AF60] mb-4 inline-flex justify-center">
            Our Process
          </span>
          <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl xl:text-[70px] tracking-[-0.04em] leading-[1.05] text-brand-navy mt-4">
            {heading}
          </h2>
          {body && (
            <p className="font-body text-[#5A7A9A] leading-relaxed mt-4 text-lg">
              {body}
            </p>
          )}
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Connecting line, desktop */}
          <div className="hidden lg:block absolute top-20 left-[16%] right-[16%] h-px bg-[#E8E8E8]">
            <div className="h-full bg-[#D4AF60] w-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-8">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative text-center"
              >
                {/* Step number circle */}
                <div className="w-16 h-16 bg-brand-navy flex items-center justify-center mx-auto mb-6 relative z-10 rounded-full">
                  <span className="font-display font-semibold text-2xl text-[#D4AF60]">
                    {step.number}
                  </span>
                </div>

                <h3 className="font-display font-semibold text-brand-navy text-xl tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="font-body text-sm text-[#5A7A9A] leading-relaxed max-w-xs mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
