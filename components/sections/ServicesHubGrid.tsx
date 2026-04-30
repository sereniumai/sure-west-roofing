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
      'Full tear-off and re-roof using IKO shingles and premium underlayment built for Alberta climate. Most jobs finished in one to three days, property left clean.',
    learnMoreText: 'Roof Replacement',
    image: '/images/roof-replacement-cochrane.webp',
    imageAlt: 'Roof replacement in Cochrane Alberta by Sure West Roofing',
  },
  {
    title: 'Roof Repair',
    href: '/roof-repair',
    description:
      'Missing shingles, active leaks, flashing failures, and ice dam damage. All fixed by Red Seal certified trades with a written warranty on every repair.',
    learnMoreText: 'Roof Repair',
    image: '/images/roof-repairs-cochrane.webp',
    imageAlt: 'Roof repair in Cochrane Alberta by Sure West Roofing',
  },
  {
    title: 'Hail Damage Repair',
    href: '/hail-damage-repair',
    description:
      'Free post-storm assessment with full damage documentation, so you have what you need to file with your insurer. No out-of-pocket cost for the assessment.',
    learnMoreText: 'Hail Damage Repair',
    image: '/images/hail-damage-repair.webp',
    imageAlt: 'Hail damage roof repair in Cochrane Alberta by Sure West Roofing',
  },
  {
    title: 'Roof Inspection',
    href: '/roof-inspection',
    description:
      'Full inspection of shingles, flashing, vents, gutters, and attic. You get a written photo report so you know exactly where you stand.',
    learnMoreText: 'Roof Inspection',
    image: '/images/roof-inspection-cochrane.webp',
    imageAlt: 'Roof inspection in Cochrane Alberta by Sure West Roofing',
  },
  {
    title: 'Roof Maintenance',
    href: '/roof-maintenance',
    description:
      'Annual inspections, flashing checks, debris clearing, and minor repairs caught before they escalate. The lowest-cost way to protect your roof long-term.',
    learnMoreText: 'Roof Maintenance',
    image: '/images/roof-maintenance-cochrane.webp',
    imageAlt: 'Roof maintenance in Cochrane Alberta by Sure West Roofing',
  },
  {
    title: 'Siding & Soft Metals',
    href: '/siding-soft-metals',
    description:
      'Siding installation, eavestroughs, fascia, soffit, and metal flashing. Premium materials matched to Alberta weather, finished by the same Red Seal crew that does our roofs.',
    learnMoreText: 'Siding & Soft Metals',
    image: '/images/Cochrane Roofing Contractor Gallery 7.webp',
    imageAlt: 'Siding and soft metals project in Cochrane Alberta by Sure West Roofing',
  },
  {
    title: 'Skylight Installation',
    href: '/skylight-installation',
    description:
      'New installs, replacements, and resealing, all with proper flashing and waterproofing to manufacturer spec. Most jobs finished in a single day.',
    learnMoreText: 'Skylight Installation',
    image: '/images/skylight-installation-cochrane.webp',
    imageAlt: 'Skylight installation in Cochrane Alberta by Sure West Roofing',
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
    <div className="flex flex-col h-full rounded-[12px] bg-white border border-brand-border overflow-hidden shadow-[0_2px_8px_rgba(44,71,102,0.06)] hover:-translate-y-[6px] hover:shadow-[0_12px_28px_rgba(44,71,102,0.12)] transition-all duration-300 ease-out">
      {/* Image */}
      <div className="relative aspect-[3/2] overflow-hidden flex-shrink-0">
        <Image
          src={service.image}
          alt={service.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.06]"
          loading="lazy"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 md:p-6">
        {/* Heading row */}
        <div className="flex items-center gap-3 mb-3">
          <Icon className="w-[18px] h-[18px] flex-shrink-0 text-brand-gold" strokeWidth={1.5} />
          <h3
            className="font-display font-semibold text-brand-navy leading-[1.25] flex-1"
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

        {/* Learn more link */}
        <div className="mt-4 pt-4 border-t border-brand-border">
          <Link
            href={service.href}
            className="inline-flex items-center gap-1.5 font-semibold text-brand-gold hover:text-[#B8943F] transition-colors duration-200"
            style={{
              fontSize: '13px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              textDecoration: 'none',
            }}
          >
            {service.learnMoreText}
            <ArrowRight className="w-3.5 h-3.5" strokeWidth={2} />
          </Link>
        </div>
      </div>
    </div>
  )
}

export function ServicesHubGrid() {
  return (
    <section
      className="relative bg-brand-cream overflow-hidden py-20 md:py-24"
      style={{
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      {/* Header */}
      <div className="relative flex flex-col items-center text-center mb-12 md:mb-16 max-w-[920px] mx-auto">
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
          Complete Roofing Services for
          <br className="hidden lg:block" /> Cochrane Homeowners
        </h2>
        <p
          className="mt-4 max-w-[460px] text-brand-slate leading-[1.65]"
          style={{
            fontSize: '15px',
            fontFamily: 'var(--font-inter), system-ui, sans-serif',
            fontWeight: 400,
          }}
        >
          Seven services, one certified crew. Every job backed by Red Seal workmanship and a written warranty.
        </p>
      </div>

      {/* 3x2 card grid */}
      <div className="max-w-[1320px] mx-auto">
        <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {SERVICES.map((service) => (
            <li key={service.title} className="h-full">
              <Card service={service} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
