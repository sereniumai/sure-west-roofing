import { Award, Users, Handshake, ShieldCheck, ListChecks } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

const DIFFERENTIATORS = [
  {
    Icon: Award,
    heading: 'Legacy',
    subtitle: 'Built to Last 20 Years',
    body: "Every roof we install is one we'd be proud of in 20 years. No easy money, no corner cuts, no shingles laid over problems. The roof on your house is the reputation we leave behind.",
  },
  {
    Icon: Users,
    heading: 'Brotherhood',
    subtitle: 'Same Crew, Every Roof',
    body: 'The crew you meet at the quote is the crew on your roof. No subcontractors, no rotating faces. Same in-house Red Seal Journeyman team from tear-off to walkthrough, every time.',
  },
  {
    Icon: Handshake,
    heading: 'Character',
    subtitle: "The Quote That Doesn't Move",
    body: "The price you approve is the price you pay. Commitments kept, mistakes owned and fixed fast. If something unexpected comes up, you decide before another nail goes in.",
  },
  {
    Icon: ShieldCheck,
    heading: 'Competency',
    subtitle: 'Red Seal Journeyman Standard',
    body: "Red Seal Journeyman is the highest trade credential in Canadian roofing. Deck inspected, flashings cut to the wall, manufacturer specs followed. The parts you can't see, done right first time.",
  },
  {
    Icon: ListChecks,
    heading: 'Proven Processes',
    subtitle: 'Same Playbook on Every Roof',
    body: 'Same checklists on day one and day three. Same communication before every site activity. Same magnetic nail sweep, same final walkthrough, same 10-year written warranty before we leave.',
  },
]

export function ServicesHubDifferentiators() {
  return (
    <section
      className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      <div className="max-w-[1320px] mx-auto">
        {/* Header */}
        <Reveal>
        <div className="text-center mb-12 md:mb-16 max-w-[720px] mx-auto">
          <span
            className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
            style={{
              background: '#FFFFFF',
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
            What Sets a Sure West
            <br className="hidden lg:block" /> Roof Apart
          </h2>
          <p
            className="mt-5 max-w-[560px] mx-auto text-brand-slate leading-[1.65]"
            style={{
              fontSize: '16px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 400,
            }}
          >
            Five responsibilities we&apos;ve taken on, five things every Sure West roof gets that the average Cochrane crew can&apos;t match.
          </p>
        </div>
        </Reveal>

        {/* 3 + 2 grid: 6-col on lg, last 2 cards offset to center the bottom row */}
        <Reveal delay={150}>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-5 md:gap-6">
          {DIFFERENTIATORS.map(({ Icon, heading, subtitle, body }, idx) => (
            <article
              key={heading}
              className={`group relative rounded-[16px] bg-white p-6 md:p-7 overflow-hidden cursor-default transition-all duration-500 ease-out hover:-translate-y-1 hover:border-brand-gold/50 hover:shadow-[0_22px_44px_-22px_rgba(212,175,96,0.45),0_10px_22px_-10px_rgba(44,71,102,0.18)] lg:col-span-2 ${
                idx === 3 ? 'lg:col-start-2' : ''
              }`}
              style={{
                border: '1px solid #E5E2D9',
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

              {/* Icon tile */}
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
                className="relative font-display font-semibold text-brand-navy"
                style={{ fontSize: '22px', letterSpacing: '-0.01em', lineHeight: 1.2 }}
              >
                {heading}
              </h3>

              <p
                className="relative mt-1 mb-3 text-brand-gold"
                style={{
                  fontSize: '13px',
                  fontFamily: 'var(--font-inter), system-ui, sans-serif',
                  fontWeight: 600,
                  letterSpacing: '0.02em',
                }}
              >
                {subtitle}
              </p>

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
