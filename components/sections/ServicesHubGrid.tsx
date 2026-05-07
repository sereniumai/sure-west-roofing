import Link from 'next/link'
import Image from 'next/image'
import {
  Hammer,
  Wrench,
  CloudHail,
  ClipboardCheck,
  ScanSearch,
  Sun,
  Layers,
  ArrowRight,
  type LucideIcon,
} from 'lucide-react'
import { Reveal } from '@/components/ui/Reveal'

interface ServiceCard {
  title: string
  href: string
  description: string
  learnMoreText: string
  image: string
  imageAlt: string
}

const SERVICES: ServiceCard[] = [
  {
    title: 'Roof Replacement',
    href: '/roof-replacement',
    description:
      "The biggest job your roof will get, run by the same Red Seal crew from tear-off to walkthrough. Deck inspection, IKO install, magnetic nail sweep, and 10-year warranty in writing.",
    learnMoreText: 'Roof Replacement',
    image: '/images/roof-replacement-cochrane.webp',
    imageAlt: 'Roof replacement in Cochrane Alberta by Sure West Roofing',
  },
  {
    title: 'Roof Repair',
    href: '/roof-repair',
    description:
      "If your roof still has years left in it, we'll tell you so. Cracked shingles, active leaks, failed flashing, or ice dam damage fixed properly, with no upsell to a replacement.",
    learnMoreText: 'Roof Repair',
    image: '/images/roof-repairs-cochrane.webp',
    imageAlt: 'Roof repair in Cochrane Alberta by Sure West Roofing',
  },
  {
    title: 'Roof Inspection',
    href: '/roof-inspection',
    description:
      "Buying, selling, or overdue for a check, a real inspection takes time. We're on the roof, in the attic, and around the flashings, with the truth in writing, clear photos, and a plain-language verdict.",
    learnMoreText: 'Roof Inspection',
    image: '/images/roof-inspection-cochrane.webp',
    imageAlt: 'Roof inspection in Cochrane Alberta by Sure West Roofing',
  },
  {
    title: 'Roof Maintenance',
    href: '/roof-maintenance',
    description:
      "Most roofs don't fail from weather, they fail because no one checks on them. Scheduled visits with flashing top-ups, debris clearing, and small fixes that keep big repairs away.",
    learnMoreText: 'Roof Maintenance',
    image: '/images/roof-maintenance-cochrane.webp',
    imageAlt: 'Roof maintenance in Cochrane Alberta by Sure West Roofing',
  },
  {
    title: 'Siding & Soft Metals',
    href: '/siding-soft-metals',
    description:
      "Flashings, fascia, soffit, eavestroughs, and siding are where crews cut corners. Same Red Seal crew as the roofs, Alberta-weather materials, built for chinook and freeze-thaw.",
    learnMoreText: 'Siding & Soft Metals',
    image: '/images/Cochrane Roofing Contractor Gallery 7.webp',
    imageAlt: 'Siding and soft metals project in Cochrane Alberta by Sure West Roofing',
  },
  {
    title: 'Skylight Installation',
    href: '/skylight-installation',
    description:
      "Natural light without the leaks. Skylights fail when they're rushed, so we seal, flash, and finish them like the rest of the roof depends on it, manufacturer spec on every job.",
    learnMoreText: 'Skylight Installation',
    image: '/images/skylight-installation-cochrane.webp',
    imageAlt: 'Skylight installation in Cochrane Alberta by Sure West Roofing',
  },
  {
    title: 'Hail Damage Repair',
    href: '/hail-damage-repair',
    description:
      "After hail, you don't need pressure, you need a clean assessment. We document the damage, support the insurance claim, and rebuild to the standard we'd put on our own homes.",
    learnMoreText: 'Hail Damage Repair',
    image: '/images/hail-damage-repair.webp',
    imageAlt: 'Hail damage roof repair in Cochrane Alberta by Sure West Roofing',
  },
]

function iconFor(title: string): LucideIcon {
  const key = title.toLowerCase()
  if (key.includes('replacement')) return Hammer
  if (key.includes('hail')) return CloudHail
  if (key.includes('repair')) return Wrench
  if (key.includes('maintenance')) return ClipboardCheck
  if (key.includes('inspection')) return ScanSearch
  if (key.includes('siding')) return Layers
  if (key.includes('skylight')) return Sun
  return Hammer
}

function Card({ service }: { service: ServiceCard }) {
  const Icon = iconFor(service.title)

  return (
    <Link
      href={service.href}
      className="group flex flex-col h-full rounded-[14px] bg-brand-cream border border-[#E5E2D9] overflow-hidden shadow-[0_2px_8px_rgba(44,71,102,0.06)] transition-all duration-500 ease-out hover:-translate-y-[6px] hover:border-brand-gold/60 hover:shadow-[0_22px_44px_-22px_rgba(212,175,96,0.45),0_10px_22px_-10px_rgba(44,71,102,0.18)]"
    >
      {/* Image */}
      <div className="relative aspect-[3/2] overflow-hidden flex-shrink-0">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
          loading="lazy"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6 md:p-7">
        {/* Heading row */}
        <div className="flex items-center gap-3 mb-3">
          <Icon
            className="w-[18px] h-[18px] flex-shrink-0 text-brand-gold transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-[-6deg]"
            strokeWidth={1.75}
          />
          <h3
            className="font-display font-semibold text-brand-navy leading-[1.25] flex-1 transition-colors duration-300 group-hover:text-brand-gold"
            style={{ fontSize: '22px', letterSpacing: '-0.02em' }}
          >
            {service.title}
          </h3>
        </div>

        {/* Description */}
        <p
          className="text-brand-slate leading-[1.6] flex-1"
          style={{
            fontSize: '14px',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontWeight: 400,
          }}
        >
          {service.description}
        </p>

        {/* Learn more link, no separator line */}
        <div className="mt-5">
          <span
            className="inline-flex items-center gap-1.5 font-semibold text-brand-gold transition-colors duration-200 group-hover:text-[#B8943F]"
            style={{
              fontSize: '13px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
            }}
          >
            {service.learnMoreText}
            <ArrowRight
              className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
              strokeWidth={2}
            />
          </span>
        </div>
      </div>
    </Link>
  )
}

export function ServicesHubGrid() {
  return (
    <section
      className="relative bg-white overflow-hidden py-20 md:py-24"
      style={{
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      {/* Header */}
      <Reveal>
      <div className="relative flex flex-col items-center text-center mb-12 md:mb-16 max-w-[920px] mx-auto">
        <span
          className="inline-flex items-center px-4 py-2 uppercase tracking-[0.1em] rounded-[6px] mb-6 text-brand-gold"
          style={{
            background: '#F7F5F0',
            fontSize: '12px',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontWeight: 600,
            lineHeight: 1,
          }}
        >
          Our Services
        </span>
        <h2
          className="font-display font-medium text-brand-navy"
          style={{
            fontSize: 'clamp(32px, 4.5vw, 48px)',
            lineHeight: 1.15,
            letterSpacing: '-0.005em',
          }}
        >
          Every Cochrane Roofing Service
          <br className="hidden lg:block" /> Run by the Same Red Seal Crew
        </h2>
        <p
          className="mt-4 max-w-[460px] text-brand-slate leading-[1.65]"
          style={{
            fontSize: '15px',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontWeight: 400,
          }}
        >
          Seven services, one in-house Red Seal Journeyman crew, the same proven process from the free estimate to the final cleanup.
        </p>
      </div>
      </Reveal>

      {/* Featured spotlight + 6-card grid, balanced for 7 services */}
      <Reveal delay={150}>
      <div className="max-w-[1320px] mx-auto">
        <FeaturedCard service={SERVICES[0]} />

        <ul className="mt-4 md:mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {SERVICES.slice(1).map((service) => (
            <li key={service.title} className="h-full">
              <Card service={service} />
            </li>
          ))}
        </ul>
      </div>
      </Reveal>
    </section>
  )
}

function FeaturedCard({ service }: { service: ServiceCard }) {
  const Icon = iconFor(service.title)

  return (
    <Link
      href={service.href}
      className="group relative flex flex-col lg:flex-row rounded-[14px] bg-brand-cream border border-[#E5E2D9] overflow-hidden shadow-[0_2px_8px_rgba(44,71,102,0.06)] transition-all duration-500 ease-out hover:-translate-y-[6px] hover:border-brand-gold/60 hover:shadow-[0_22px_44px_-22px_rgba(212,175,96,0.45),0_10px_22px_-10px_rgba(44,71,102,0.18)]"
    >
      {/* Top gold ribbon */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute top-0 left-0 right-0 h-[2px] z-10"
        style={{
          background:
            'linear-gradient(90deg, transparent 0%, rgba(212,175,96,0.85) 50%, transparent 100%)',
          opacity: 0.55,
        }}
      />

      {/* Image, left half on lg, full-width on mobile, 3:2 ratio kept */}
      <div className="relative aspect-[3/2] lg:w-1/2 lg:flex-shrink-0 overflow-hidden">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
          priority
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"
        />
        {/* Featured pill, sits on top of image */}
        <span
          className="absolute top-5 left-5 inline-flex items-center px-3 py-1.5 uppercase tracking-[0.1em] rounded-[6px] text-brand-gold backdrop-blur-sm"
          style={{
            background: 'rgba(255,255,255,0.92)',
            border: '1px solid rgba(212,175,96,0.30)',
            fontSize: '11px',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontWeight: 600,
            lineHeight: 1,
          }}
        >
          Featured Service
        </span>
      </div>

      {/* Content, right half on lg, below image on mobile */}
      <div className="flex flex-col flex-1 p-6 md:p-8 lg:p-10 justify-center">
        <div className="flex items-center gap-3 mb-4">
          <Icon
            className="w-6 h-6 flex-shrink-0 text-brand-gold transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-[-6deg]"
            strokeWidth={1.75}
          />
          <h3
            className="font-display font-semibold text-brand-navy leading-[1.15] flex-1 transition-colors duration-300 group-hover:text-brand-gold"
            style={{ fontSize: 'clamp(26px, 3vw, 34px)', letterSpacing: '-0.02em' }}
          >
            {service.title}
          </h3>
        </div>

        <p
          className="text-brand-slate leading-[1.65] mb-6 max-w-[540px]"
          style={{
            fontSize: '15.5px',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontWeight: 400,
          }}
        >
          {service.description}
        </p>

        <span
          className="inline-flex items-center gap-1.5 font-semibold text-brand-gold transition-colors duration-200 group-hover:text-[#B8943F]"
          style={{
            fontSize: '14px',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
          }}
        >
          {service.learnMoreText}
          <ArrowRight
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
            strokeWidth={2}
          />
        </span>
      </div>
    </Link>
  )
}
