import { ServicePageHero } from '@/components/sections/ServicePageHero'

export function RoofInspectionHero() {
  return (
    <ServicePageHero
      breadcrumbLabel="Roof and Attic Inspection"
      eyebrow="Cochrane's Trusted Roof and Attic Inspection Specialists"
      eyebrowMobile="Roof & Attic Inspection Specialists"
      h1={'Roof and Attic Inspection\nin Cochrane, Alberta'}
      body="Red Seal Journeyman supervised roof and attic inspections in Cochrane, Calgary, and Canmore. Photo-documented written report for buyers, sellers, and insurers."
      image={{
        src: '/images/roof-inspection-cochrane.webp',
        alt: 'Sure West Roofing technician performing a roof inspection in Cochrane Alberta',
      }}
      badge={{
        heading: 'Written Photo Report',
        subtext: 'For buyers, sellers and insurers',
      }}
    />
  )
}
