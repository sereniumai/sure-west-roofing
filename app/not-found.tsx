import type { Metadata } from 'next'
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

export default function NotFound() {
  return <NotFoundHero />
}
