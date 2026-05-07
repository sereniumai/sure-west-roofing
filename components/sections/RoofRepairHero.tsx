import { ServicePageHero } from '@/components/sections/ServicePageHero'

export function RoofRepairHero() {
  return (
    <ServicePageHero
      breadcrumbLabel="Roof Repair"
      eyebrow="Cochrane's Trusted Roof Repair Specialists"
      h1={'Roof Repair in\nCochrane, Alberta'}
      body="Red Seal Journeyman roof repair for Cochrane, Calgary, and Canmore. Fast diagnosis, fixed written quotes, and no upsell to a replacement when you do not need one."
      image={{
        src: '/images/roof-repairs-cochrane.webp',
        alt: 'Sure West Roofing Red Seal Journeyman completing a roof repair in Cochrane Alberta',
      }}
      badge={{
        heading: 'Fixed Written Quote',
        subtext: 'Most repairs done in a single visit',
      }}
    />
  )
}
