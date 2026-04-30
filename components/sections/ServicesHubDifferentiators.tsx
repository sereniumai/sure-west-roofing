import { Award, CloudLightning, FileText, ShieldCheck } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

const DIFFERENTIATORS = [
  {
    Icon: Award,
    heading: 'Red Seal Certified Trades',
    body: 'Sure West is owned and operated by Red Seal Journeyman roofers, the highest trade credential in Canada. A credentialed tradesperson is on every roof, never a subcontractor.',
  },
  {
    Icon: CloudLightning,
    heading: 'Built for Alberta Weather',
    body: 'Cochrane winters, chinook swings, hailstorms, and high wind uplift require specific materials and methods. Built for local freeze-thaw cycles.',
  },
  {
    Icon: FileText,
    heading: 'Honest Quotes, No Pressure',
    body: 'Every estimate is free, on-site, and provided in writing with itemised costs. No high-pressure tactics. If your roof does not need replacing, we will tell you that.',
  },
  {
    Icon: ShieldCheck,
    heading: '10-Year Workmanship Warranty',
    body: 'Every roof replacement comes with a 10-year workmanship warranty in writing before we leave the job site, on top of the IKO material warranty. Two layers of documented protection.',
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
        <Reveal>
        <div className="text-center mb-12 md:mb-16 max-w-[680px] mx-auto">
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
            className="font-display font-medium text-brand-navy"
            style={{
              fontSize: 'clamp(32px, 4.5vw, 48px)',
              lineHeight: 1.15,
              letterSpacing: '-0.005em',
            }}
          >
            Why Cochrane Homeowners Trust Sure West
          </h2>
          <p
            className="mt-5 max-w-[480px] mx-auto text-brand-slate leading-[1.65]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Four things every Sure West roof gets that the average Cochrane crew can't match.
          </p>
        </div>
        </Reveal>

        {/* 4-column grid */}
        <Reveal delay={150}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {DIFFERENTIATORS.map(({ Icon, heading, body }) => (
            <article
              key={heading}
              className="group relative rounded-[16px] p-6 md:p-7 overflow-hidden cursor-default transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_22px_44px_-22px_rgba(212,175,96,0.45),0_10px_22px_-10px_rgba(44,71,102,0.18)]"
              style={{
                background: 'linear-gradient(155deg, #FAF8F2 0%, #F4F1E8 100%)',
                border: '1px solid #E8E4D8',
                boxShadow:
                  '0 1px 2px rgba(44,71,102,0.04), 0 8px 22px -10px rgba(44,71,102,0.10)',
              }}
            >
              {/* Top gold ribbon */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute top-0 left-0 right-0 h-[2px]"
                style={{
                  background:
                    'linear-gradient(90deg, transparent 0%, rgba(212,175,96,0.85) 50%, transparent 100%)',
                  opacity: 0.55,
                }}
              />

              {/* Soft gold halo behind icon on hover */}
              <span
                aria-hidden="true"
                className="pointer-events-none absolute left-6 md:left-7 top-5 md:top-6 w-24 h-24 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background:
                    'radial-gradient(closest-side, rgba(212,175,96,0.32), transparent 70%)',
                  filter: 'blur(8px)',
                }}
              />

              {/* Icon tile, refined to match Four Things pattern */}
              <div
                className="relative inline-flex items-center justify-center w-12 h-12 rounded-[10px] bg-white mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-[-3deg]"
                style={{
                  boxShadow:
                    '0 1px 3px rgba(44,71,102,0.08), 0 10px 22px -10px rgba(212,175,96,0.45), 0 4px 10px -4px rgba(44,71,102,0.10)',
                  border: '1px solid rgba(212,175,96,0.20)',
                }}
              >
                <Icon className="w-5 h-5 text-brand-gold" strokeWidth={1.75} />
              </div>

              <h3
                className="relative font-display font-semibold text-brand-navy mb-3"
                style={{ fontSize: '20px', letterSpacing: '-0.01em', lineHeight: 1.25 }}
              >
                {heading}
              </h3>

              <p
                className="relative text-brand-slate leading-[1.65]"
                style={{
                  fontSize: '14px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 400,
                }}
              >
                {body}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 md:mt-14 flex justify-center">
          <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
            Get a Free Estimate
          </Button>
        </div>
        </Reveal>
      </div>
    </section>
  )
}
