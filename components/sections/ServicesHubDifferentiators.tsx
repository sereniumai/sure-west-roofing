import { Award, CloudLightning, FileText, ShieldCheck } from 'lucide-react'

const DIFFERENTIATORS = [
  {
    Icon: Award,
    heading: 'Red Seal Certified Trades',
    body: 'Sure West is owned and operated by Red Seal Journeyman roofers, the highest trade credential in Canada. A credentialed tradesperson is on every roof, never a subcontractor.',
  },
  {
    Icon: CloudLightning,
    heading: 'Built for Alberta Weather',
    body: 'Cochrane winters, chinook swings, hailstorms, and high wind uplift require specific materials and methods. We select installation approaches suited to local freeze-thaw cycles and climate conditions.',
  },
  {
    Icon: FileText,
    heading: 'Honest Quotes, No Pressure',
    body: 'Every estimate is free, on-site, and provided in writing with itemised costs. No high-pressure tactics. If your roof does not need replacing, we will tell you that.',
  },
  {
    Icon: ShieldCheck,
    heading: '10-Year Workmanship Warranty',
    body: 'Every roof replacement comes with a 10-year workmanship warranty in writing before we leave the job site — on top of the IKO material warranty. Two layers of documented protection.',
  },
]

export function ServicesHubDifferentiators() {
  return (
    <section
      className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span
            className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{
              background: '#F0EEE8',
              fontSize: '12px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 600,
              lineHeight: 1,
            }}
          >
            Why Sure West
          </span>
          <h2
            className="font-display font-semibold text-brand-navy"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              lineHeight: 1.15,
              letterSpacing: '-0.005em',
            }}
          >
            Why Cochrane Homeowners Trust Sure West
          </h2>
        </div>

        {/* 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {DIFFERENTIATORS.map(({ Icon, heading, body }) => (
            <div
              key={heading}
              className="bg-brand-cream rounded-[12px] border border-brand-border p-6 hover:-translate-y-[4px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.10)] transition-all duration-300 ease-out"
            >
              <div
                className="inline-flex items-center justify-center w-11 h-11 rounded-[8px] mb-5"
                style={{ background: 'rgba(212,175,96,0.12)' }}
              >
                <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.5} />
              </div>

              <h3
                className="font-display font-semibold text-brand-navy mb-3"
                style={{ fontSize: '20px', letterSpacing: '-0.01em', lineHeight: 1.25 }}
              >
                {heading}
              </h3>

              <p
                className="text-brand-slate leading-[1.65]"
                style={{
                  fontSize: '14px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
