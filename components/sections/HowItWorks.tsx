import { Calendar, FileCheck, CheckCircle, type LucideIcon } from 'lucide-react'
import { Button } from '@/components/ui/Button'
import { Reveal } from '@/components/ui/Reveal'

export interface HowItWorksStep {
  number: string
  title: string
  description: string
  Icon: LucideIcon
}
type Step = HowItWorksStep

function getSteps(cityName: string, otherCities: [string, string]): Step[] {
  return [
    {
      number: '01',
      title: 'Book Your Free Estimate',
      description: `We come to your property in ${cityName}, ${otherCities[0]} or ${otherCities[1]}, assess the roof thoroughly, and provide a clear itemised written quote.`,
      Icon: Calendar,
    },
    {
      number: '02',
      title: 'Approve Your Quote',
      description:
        'Your quote is fixed. The price you approve is the price you pay. Our Red Seal certified crew then schedules your job around you.',
      Icon: FileCheck,
    },
    {
      number: '03',
      title: 'Your Roof Done Right',
      description:
        'Work completed to Red Seal standard. Your property left clean. Your 10-year workmanship guarantee in writing before we leave.',
      Icon: CheckCircle,
    },
  ]
}

function StepCard({ step }: { step: Step }) {
  const { Icon } = step

  return (
    <div className="relative flex flex-col items-center text-center bg-brand-cream rounded-[16px] border border-brand-border px-7 pt-10 pb-8 hover:-translate-y-[4px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.10)] transition-all duration-300 ease-out">
      {/* Step number label */}
      <span
        className="uppercase tracking-[0.14em] font-semibold text-brand-gold mb-4"
        style={{
          fontSize: '11px',
          fontFamily: 'var(--font-inter), system-ui, sans-serif',
        }}
      >
        Step {step.number}
      </span>

      {/* Large icon ring */}
      <div
        className="flex items-center justify-center w-[80px] h-[80px] rounded-full mb-6"
        style={{
          background: 'rgba(212,175,96,0.10)',
          border: '2px solid rgba(212,175,96,0.28)',
          boxShadow: '0 0 0 8px rgba(212,175,96,0.06)',
        }}
      >
        <Icon className="w-8 h-8 text-brand-gold" strokeWidth={1.75} />
      </div>

      <h3
        className="font-display font-semibold text-brand-navy mb-2 leading-[1.2]"
        style={{ fontSize: '22px', letterSpacing: '-0.01em' }}
      >
        {step.title}
      </h3>

      <p
        className="text-brand-slate leading-[1.65]"
        style={{
          fontSize: '14px',
          fontFamily: 'var(--font-inter), system-ui, sans-serif',
          fontWeight: 400,
        }}
      >
        {step.description}
      </p>
    </div>
  )
}

interface HowItWorksProps {
  eyebrow?: string
  heading?: React.ReactNode
  body?: string
  cityName?: string
  otherCities?: [string, string]
  /** Optional override for the three step cards. */
  steps?: Step[]
  /** Override the section background. Defaults to white. */
  sectionBg?: string
}

export function HowItWorks({
  eyebrow = 'How It Works',
  heading = (
    <>
      From Free Estimate to Finished
      <br className="hidden md:block" /> Roof in Three Steps
    </>
  ),
  body = 'No surprises. No pressure. Just a clear simple process from your first call to the final inspection.',
  cityName = 'Cochrane',
  otherCities = ['Calgary', 'Canmore'],
  steps,
  sectionBg = '#FFFFFF',
}: HowItWorksProps = {}) {
  const STEPS = steps ?? getSteps(cityName, otherCities)
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden py-20 md:py-24"
      style={{
        background: sectionBg,
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      {/* Header */}
      <Reveal>
      <div className="relative flex flex-col items-center text-center mb-12 md:mb-14 max-w-[920px] mx-auto">
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
          {eyebrow}
        </span>
        <h2
          className="font-display font-medium max-w-[900px] text-brand-navy"
          style={{
            fontSize: 'clamp(32px, 4.5vw, 48px)',
            lineHeight: 1.15,
            letterSpacing: '-0.005em',
          }}
        >
          {heading}
        </h2>
        <p
          className="mt-5 max-w-[480px] text-brand-slate leading-[1.65]"
          style={{
            fontSize: '16px',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontWeight: 400,
          }}
        >
          {body}
        </p>
      </div>
      </Reveal>

      {/* 3-column step cards */}
      <Reveal delay={150}>
      <div className="max-w-[1200px] mx-auto relative">
        {/* Dashed connector, sits at icon centre (~52px from card top: 40px pt-10 + 12px half-icon offset before ring) */}
        <div
          aria-hidden="true"
          className="hidden md:block absolute z-0 border-t-2 border-dashed border-brand-gold/40"
          style={{ top: '116px', left: '16.67%', right: '16.67%' }}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-7 relative z-[1]">
          {STEPS.map((step) => (
            <StepCard key={step.number} step={step} />
          ))}
        </div>

        <div className="mt-12 md:mt-14 flex justify-center">
          <Button variant="primary" size="lg" href="/free-roof-estimate-cochrane">
            Get a Free Estimate
          </Button>
        </div>
      </div>
      </Reveal>
    </section>
  )
}
