import { ServicePageHero } from '@/components/sections/ServicePageHero'

export function RoofRepairHero() {
  return (
    <ServicePageHero
      breadcrumbLabel="Roof Repair"
      eyebrow="Cochrane's Trusted Roof Repair Specialists"
      h1={'Roof Repair in\nCochrane, Alberta'}
      body="Red Seal certified roof repair for Cochrane, Calgary, and Canmore. Fast diagnosis, fixed written quotes, and a real warranty on every job. We pride ourselves on getting back to you quickly."
      image={{
        src: '/images/roof-repairs-cochrane.webp',
        alt: 'Sure West Roofing Red Seal Journeyman completing a roof repair in Cochrane Alberta',
      }}
    />
  )
}
