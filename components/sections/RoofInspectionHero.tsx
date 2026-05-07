import { ServicePageHero } from '@/components/sections/ServicePageHero'

export function RoofInspectionHero() {
  return (
    <ServicePageHero
      breadcrumbLabel="Roof Inspection"
      eyebrow="Cochrane's Trusted Roof Inspection Specialists"
      h1={'Roof Inspection in\nCochrane, Alberta'}
      body="Red Seal certified roof inspection for Cochrane, Calgary, and Canmore. Pre-purchase, post-storm, and annual inspections with a written photo report. Book online or call for fastest response."
      image={{
        src: '/images/roof-inspection-cochrane.webp',
        alt: 'Sure West Roofing Red Seal Journeyman performing a roof inspection in Cochrane Alberta',
      }}
    />
  )
}
