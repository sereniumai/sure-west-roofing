'use client'

import { useRef, useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
  ChevronLeft,
  ChevronRight,
  ArrowRight,
  Hammer,
  Wrench,
  CloudHail,
  ClipboardCheck,
  ScanSearch,
  Sun,
  Layers,
} from 'lucide-react'

const ALL_SERVICES = [
  {
    Icon: Hammer,
    title: 'Roof Replacement',
    href: '/roof-replacement',
    image: '/images/roof-replacement-cochrane.webp',
    imageAlt: 'Roof replacement in Cochrane Alberta by Sure West Roofing',
    description:
      "The biggest job your roof will get, run by the same Red Seal crew from tear-off to walkthrough. Deck inspection, IKO install, magnetic nail sweep, and 10-year warranty in writing.",
  },
  {
    Icon: Wrench,
    title: 'Roof Repair',
    href: '/roof-repair',
    image: '/images/roof-repairs-cochrane.webp',
    imageAlt: 'Roof repair in Cochrane Alberta by Sure West Roofing',
    description:
      "If your roof still has years left in it, we'll tell you so. Cracked shingles, active leaks, failed flashing, or ice dam damage fixed properly, with no upsell to a replacement.",
  },
  {
    Icon: ScanSearch,
    title: 'Roof Inspection',
    href: '/roof-inspection',
    image: '/images/roof-inspection-cochrane.webp',
    imageAlt: 'Roof inspection in Cochrane Alberta by Sure West Roofing',
    description:
      "Buying, selling, or overdue for a check, a real inspection takes time. We're on the roof, in the attic, and around the flashings, with the truth in writing, clear photos, and a plain-language verdict.",
  },
  {
    Icon: ClipboardCheck,
    title: 'Roof Maintenance',
    href: '/roof-maintenance',
    image: '/images/roof-maintenance-cochrane.webp',
    imageAlt: 'Roof maintenance in Cochrane Alberta by Sure West Roofing',
    description:
      "Most roofs don't fail from weather, they fail because no one checks on them. Scheduled visits with flashing top-ups, debris clearing, and small fixes that keep big repairs away.",
  },
  {
    Icon: Layers,
    title: 'Siding & Soft Metals',
    href: '/siding-soft-metals',
    image: '/images/Cochrane Roofing Contractor Gallery 7.webp',
    imageAlt: 'Siding and soft metals project in Cochrane Alberta by Sure West Roofing',
    description:
      "Flashings, fascia, soffit, eavestroughs, and siding are where crews cut corners. Same Red Seal crew as the roofs, Alberta-weather materials, built for chinook and freeze-thaw.",
  },
  {
    Icon: Sun,
    title: 'Skylight Installation',
    href: '/skylight-installation',
    image: '/images/skylight-installation-cochrane.webp',
    imageAlt: 'Skylight installation in Cochrane Alberta by Sure West Roofing',
    description:
      "Natural light without the leaks. Skylights fail when they're rushed, so we seal, flash, and finish them like the rest of the roof depends on it, manufacturer spec on every job.",
  },
  {
    Icon: CloudHail,
    title: 'Hail Damage Repair',
    href: '/hail-damage-repair',
    image: '/images/hail-damage-repair.webp',
    imageAlt: 'Hail damage roof repair in Cochrane Alberta by Sure West Roofing',
    description:
      "After hail, you don't need pressure, you need a clean assessment. We document the damage, support the insurance claim, and rebuild to the standard we'd put on our own homes.",
  },
]

interface Props {
  /** href of the current page's service, excluded from the carousel */
  exclude?: string
}

export function RelatedServicesCarousel({ exclude }: Props) {
  const services = exclude ? ALL_SERVICES.filter((s) => s.href !== exclude) : ALL_SERVICES
  const trackRef = useRef<HTMLDivElement>(null)
  const [canPrev, setCanPrev] = useState(false)
  const [canNext, setCanNext] = useState(false)

  function updateArrows() {
    const t = trackRef.current
    if (!t) return
    setCanPrev(t.scrollLeft > 1)
    setCanNext(t.scrollLeft < t.scrollWidth - t.clientWidth - 1)
  }

  useEffect(() => {
    updateArrows()
    // re-check on resize
    window.addEventListener('resize', updateArrows)
    return () => window.removeEventListener('resize', updateArrows)
  }, [])

  function scrollBy(dir: 1 | -1) {
    const t = trackRef.current
    if (!t) return
    const card = t.children[0] as HTMLElement | null
    const amount = (card?.offsetWidth ?? 300) + 20
    t.scrollBy({ left: dir * amount, behavior: 'smooth' })
    setTimeout(updateArrows, 350)
  }

  return (
    <div>
      {/* Card track */}
      <div
        ref={trackRef}
        onScroll={updateArrows}
        className="flex gap-5 overflow-x-auto scrollbar-hide"
        style={{ scrollSnapType: 'x mandatory' }}
      >
        {services.map(({ Icon, title, href, image, imageAlt, description }) => (
          <div
            key={title}
            className="flex-shrink-0 w-[88%] sm:w-[calc(50%-10px)] lg:w-[calc(33.333%-13.5px)]"
            style={{ scrollSnapAlign: 'start' }}
          >
            <Link
              href={href}
              className="group flex flex-col h-full rounded-[14px] bg-brand-cream border border-[#E5E2D9] overflow-hidden shadow-[0_2px_8px_rgba(44,71,102,0.06)] transition-all duration-500 ease-out hover:-translate-y-[6px] hover:border-brand-gold/60 hover:shadow-[0_22px_44px_-22px_rgba(212,175,96,0.45),0_10px_22px_-10px_rgba(44,71,102,0.18)]"
            >
              {/* Image */}
              <div className="relative aspect-[3/2] overflow-hidden flex-shrink-0">
                <Image
                  src={image}
                  alt={imageAlt}
                  fill
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 50vw, 33vw"
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
                <div className="flex items-center gap-3 mb-3">
                  <Icon
                    className="w-[18px] h-[18px] flex-shrink-0 text-brand-gold transition-transform duration-500 ease-out group-hover:scale-110 group-hover:rotate-[-6deg]"
                    strokeWidth={1.75}
                  />
                  <h3
                    className="font-display font-semibold text-brand-navy leading-[1.25] flex-1 transition-colors duration-300 group-hover:text-brand-gold"
                    style={{ fontSize: '22px', letterSpacing: '-0.02em' }}
                  >
                    {title}
                  </h3>
                </div>

                <p
                  className="text-brand-slate leading-[1.6] flex-1"
                  style={{
                    fontSize: '14px',
                    fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {description}
                </p>

                <div className="mt-3">
                  <span
                    className="inline-flex items-center gap-1.5 font-semibold text-brand-gold transition-colors duration-200 group-hover:text-[#B8943F]"
                    style={{
                      fontSize: '13px',
                      fontFamily: 'var(--font-inter), system-ui, sans-serif',
                    }}
                  >
                    {title}
                    <ArrowRight
                      className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1"
                      strokeWidth={2}
                    />
                  </span>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {/* Arrows */}
      <div className="flex items-center gap-3 mt-8">
        <button
          onClick={() => scrollBy(-1)}
          disabled={!canPrev}
          aria-label="Previous services"
          className={[
            'flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200',
            canPrev
              ? 'bg-brand-gold text-brand-navy hover:bg-[#B8943F] hover:text-white shadow-md hover:shadow-lg'
              : 'bg-brand-border/40 text-brand-border/60 cursor-not-allowed',
          ].join(' ')}
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={2} />
        </button>
        <button
          onClick={() => scrollBy(1)}
          disabled={!canNext}
          aria-label="Next services"
          className={[
            'flex items-center justify-center w-12 h-12 rounded-full transition-all duration-200',
            canNext
              ? 'bg-brand-gold text-brand-navy hover:bg-[#B8943F] hover:text-white shadow-md hover:shadow-lg'
              : 'bg-brand-border/40 text-brand-border/60 cursor-not-allowed',
          ].join(' ')}
        >
          <ChevronRight className="w-5 h-5" strokeWidth={2} />
        </button>
        {canNext && (
          <span
            className="ml-2 text-brand-slate"
            style={{
              fontSize: '13px',
              fontFamily: 'var(--font-inter), system-ui, sans-serif',
              fontWeight: 500,
            }}
          >
            Scroll to see more services
          </span>
        )}
      </div>
    </div>
  )
}
