import type { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Roofing Gallery | Sure West Roofing, Cochrane Projects',
  description:
    'Recent roofing projects from Sure West Roofing across Cochrane, Calgary and Canmore, replacements, repairs, and hail damage restoration.',
}

const images = [
  { src: '/images/Cochrane Roof Replacement.jpg', alt: 'Roof replacement project in Cochrane' },
  { src: '/images/Cochrane Roof Repair.jpg', alt: 'Residential roof repair' },
  { src: '/images/Cochrane Roofing Contractors.jpg', alt: 'Aerial view of a Cochrane roofing project' },
  { src: '/images/Cochrane Roof Replacement.jpg', alt: 'Asphalt shingle replacement' },
  { src: '/images/Cochrane Roof Repair.jpg', alt: 'Shingle leak repair in Calgary' },
  { src: '/images/Cochrane Roofing Contractors.jpg', alt: 'Roof installation by Sure West Roofing' },
  { src: '/images/Cochrane Roof Replacement.jpg', alt: 'Full tear-off and replacement' },
  { src: '/images/Cochrane Roof Repair.jpg', alt: 'Hail damage restoration' },
  { src: '/images/Cochrane Roofing Contractors.jpg', alt: 'Completed roofing project in Canmore' },
]

export default function GalleryPage() {
  return (
    <main
      className="bg-[--color-cream]"
      style={{
        paddingTop: 'calc(var(--nav-height) + 60px)',
        paddingBottom: 'var(--section-pad-bot)',
      }}
    >
      <div
        style={{
          paddingLeft: 'var(--section-pad-x)',
          paddingRight: 'var(--section-pad-x)',
        }}
      >
        <div className="flex flex-col items-start mb-12 md:mb-16">
          <span className="inline-flex items-center gap-3 text-[11px] font-body font-bold uppercase tracking-[0.18em] text-[--color-near-black] mb-6">
            <span className="w-[10px] h-[10px] bg-[#D4AF60] inline-block" />
            Our Work
          </span>
          <h1
            className="font-display font-semibold uppercase leading-[0.9] max-w-[900px]"
            style={{
              fontSize: 'var(--text-section)',
              letterSpacing: '-0.04em',
            }}
          >
            Roofing Projects Cochrane, Calgary & Canmore
          </h1>
          <p
            className="mt-6 max-w-[560px] text-[15px] md:text-[17px] leading-relaxed text-[--color-near-black]/70"
            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
          >
            A look at recent replacements, repairs and hail-damage restorations across Cochrane,
            Calgary and Canmore.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {images.map((image, i) => (
            <div
              key={i}
              className="relative aspect-[4/3] overflow-hidden bg-gray-100 group"
            >
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                quality={75}
                loading={i < 3 ? 'eager' : 'lazy'}
                priority={i === 0}
                className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
