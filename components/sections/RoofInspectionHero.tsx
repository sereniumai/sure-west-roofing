import { ServicePageHero } from '@/components/sections/ServicePageHero'

export function RoofInspectionHero() {
  return (
    <ServicePageHero
      breadcrumbLabel="Roof Inspection"
      eyebrow="Cochrane's Trusted Roof Inspection Specialists"
      eyebrowMobile="Roof Inspection Specialists"
      h1={'Roof Inspection in\nCochrane, Alberta'}
      body="Red Seal Journeyman roof inspections in Cochrane, Calgary, and Canmore. Photo-documented written report for buyers, sellers, and insurers. Free with quoted work."
      image={{
        src: '/images/roof-inspection-cochrane.webp',
        alt: 'Sure West Roofing Red Seal Journeyman performing a roof inspection in Cochrane Alberta',
      }}
      badge={{
        heading: 'Written Photo Report',
        subtext: 'For buyers, sellers and insurers',
      }}
    />
  )
}
