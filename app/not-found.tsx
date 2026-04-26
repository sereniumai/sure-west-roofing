import type { Metadata } from 'next'
import Link from 'next/link'
import {
  Home,
  Hammer,
  Wrench,
  CloudLightning,
  Image as ImageIcon,
  Phone,
  ArrowRight,
} from 'lucide-react'
import { Button } from '@/components/ui/Button'

const HERO_COLLAGE = [
  {
    src: '/images/Cochrane Roofing Contractor Gallery 3.webp',
    alt: 'IKO Nordic roof replacement in Calgary by Sure West Roofing',
    outerClassName: 'absolute top-[38%] left-0 -translate-y-1/2 w-[48%] aspect-square -rotate-[6deg] z-0',
  },
  {
    src: '/images/Cochrane Roofing Contractor Gallery 7.webp',
    alt: 'Architectural shingle roof in Cochrane by Sure West',
    outerClassName: 'absolute top-[38%] right-0 -translate-y-1/2 w-[48%] aspect-square rotate-[6deg] z-0',
  },
  {
    src: '/images/Cochrane Roofing Contractor Gallery 10.webp',
    alt: 'Completed Sure West Roofing project in Cochrane, Alberta',
    outerClassName:
      'absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[54%] aspect-square z-10',
  },
]

export const metadata: Metadata = {
  title: 'Page Not Found',
  description:
    "The page you're looking for doesn't exist. Head back to the home page or book a free roof estimate in Cochrane, Calgary, or Canmore.",
  openGraph: {
    title: 'Page Not Found | Sure West Roofing',
    description:
      "The page you're looking for doesn't exist. Head back to the home page or book a free roof estimate in Cochrane, Calgary, or Canmore.",
    type: 'website',
    locale: 'en_CA',
  },
  robots: {
    index: false,
    follow: true,
  },
}

function NotFoundHero() {
  return (
    <section
      className="bg-brand-cream pt-28 md:pt-36 pb-20 md:pb-28"
      style={{ paddingLeft: 'var(--section-pad-x)', paddingRight: 'var(--section-pad-x)' }}
    >
      <div className="max-w-[1320px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: content */}
          <div className="order-2 lg:order-1">
            <span
              aria-hidden="true"
              className="font-display font-bold text-brand-navy leading-none block"
              style={{
                fontSize: 'clamp(72px, 10vw, 128px)',
                letterSpacing: '-0.04em',
              }}
            >
              404
            </span>

            <h1
              className="font-display font-semibold text-brand-navy mt-8"
              style={{
                fontSize: 'clamp(32px, 4vw, 48px)',
                lineHeight: 1.1,
                letterSpacing: '-0.02em',
              }}
            >
              Looks Like This Page
              <br />
              Has a Hole in It
            </h1>

            <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-3">
              <Button variant="primary" size="lg" href="/">
                Back to Home
              </Button>
              <Button variant="outline" size="lg" href="/free-roof-estimate-cochrane">
                Get a Free Estimate
              </Button>
            </div>
          </div>

          {/* Right: image */}
          <div className="order-1 lg:order-2 relative mt-8 lg:mt-20">
            <div className="relative w-full aspect-[5/4] max-w-[640px] mx-auto">
              {HERO_COLLAGE.map((img) => (
                <div key={img.src} className={img.outerClassName}>
                  <div
                    className="group relative w-full h-full overflow-hidden rounded-2xl bg-white border-[6px] border-white transition-all duration-500 ease-out hover:scale-[1.03]"
                    style={{
                      boxShadow:
                        '0 6px 16px rgba(27,53,88,0.10), 0 30px 60px -20px rgba(27,53,88,0.32)',
                    }}
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                      loading="eager"
                      draggable={false}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

interface LinkCard {
  Icon: typeof Home
  title: string
  description: string
  href: string
}

const HELPFUL_LINKS: LinkCard[] = [
  {
    Icon: Home,
    title: 'Home',
    description: 'Red Seal roofing in Cochrane, Calgary, and Canmore.',
    href: '/',
  },
  {
    Icon: Hammer,
    title: 'Roof Replacement',
    description: 'Full roof replacement by our Red Seal certified crew.',
    href: '/roof-replacement',
  },
  {
    Icon: Wrench,
    title: 'Roof Repair',
    description: 'Leak fixes, shingle repair, and storm damage in Cochrane.',
    href: '/roof-repair',
  },
  {
    Icon: CloudLightning,
    title: 'Hail Damage Repair',
    description: 'Insurance claim support and hail roof restoration.',
    href: '/hail-damage-repair',
  },
  {
    Icon: ImageIcon,
    title: 'Project Gallery',
    description: 'Completed roofing projects across Cochrane and beyond.',
    href: '/gallery',
  },
  {
    Icon: Phone,
    title: 'Get a Free Estimate',
    description: 'Free inspection, written quote within 24 hours.',
    href: '/free-roof-estimate-cochrane',
  },
]

function HelpfulLinks() {
  return (
    <section className="bg-[#EFEBE0]">
      <div className="max-w-6xl mx-auto px-6 py-16 lg:py-20">
        <div className="text-center mb-12">
          <span
            className="inline-flex items-center text-xs uppercase tracking-widest font-semibold text-[#C49A2C]"
            style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
          >
            Where to Next
          </span>
          <h2
            className="font-display font-bold text-[#1B3558] mt-4"
            style={{ fontSize: 'clamp(24px, 3vw, 36px)', letterSpacing: '-0.02em', lineHeight: 1.15 }}
          >
            Popular Pages on Sure West Roofing
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {HELPFUL_LINKS.map(({ Icon, title, description, href }) => (
            <Link
              key={href}
              href={href}
              className="group flex flex-col bg-white rounded-2xl border border-[#E5E2D9] p-6 hover:border-[#C49A2C] hover:shadow-md focus:ring-2 focus:ring-[#C49A2C] focus:outline-none transition-all duration-300"
            >
              <Icon className="w-7 h-7 text-[#C49A2C]" strokeWidth={1.75} />
              <h3
                className="font-display font-semibold text-lg text-[#1B3558] mt-4"
                style={{ letterSpacing: '-0.01em' }}
              >
                {title}
              </h3>
              <p
                className="text-sm text-[#4A5568] leading-relaxed mt-2"
                style={{ fontFamily: 'var(--font-inter), system-ui, sans-serif' }}
              >
                {description}
              </p>
              <ArrowRight
                className="w-4 h-4 text-[#C49A2C] mt-auto self-end group-hover:translate-x-1 transition-transform duration-200"
                strokeWidth={2}
              />
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function NotFound() {
  return (
    <>
      <NotFoundHero />
      <HelpfulLinks />
    </>
  )
}
