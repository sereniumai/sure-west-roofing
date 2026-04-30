import { ServicePageHero } from '@/components/sections/ServicePageHero'

export function RoofRepairHero() {
  return (
    <ServicePageHero
      breadcrumbLabel="Roof Repair"
      eyebrow="Cochrane's Trusted Roof Repair Specialists"
      h1={'Roof Repair in\nCochrane, Alberta'}
      body="Red Seal certified roof repair for Cochrane, Calgary, and Canmore. Fast diagnosis, fixed written quotes, and a real warranty on every job. We pride ourselves on getting back to you quickly."
      trustItems={['Red Seal Certified', '2-Year Workmanship Warranty', 'Same-Week Response']}
      image={{
        src: '/images/Roof Repair Cochrane.avif',
        alt: 'Sure West Roofing Red Seal Journeyman completing a roof repair in Cochrane Alberta',
      }}
      review={{
        quote:
          'My roof had a major leak and they repaired the valley that was leaking and informed me the other two would fail soon. They gave me a fair price to repair all three and it has been over a year with no issues.',
        author: 'Norbert Stark',
        location: 'Cochrane, AB',
      }}
    />
  )
}
