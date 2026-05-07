import { ServicePageHero } from '@/components/sections/ServicePageHero'

export function RoofReplacementHero() {
  return (
    <ServicePageHero
      breadcrumbLabel="Roof Replacement"
      eyebrow="Cochrane's Trusted Roof Replacement Contractor"
      h1={'Roof Replacement in\nCochrane, Alberta'}
      body="Red Seal certified roofers for Cochrane, Calgary, and Canmore. Fixed written quotes, real warranties, no subcontractors. We pride ourselves on getting back to you quickly."
      image={{
        src: '/images/roof-replacement-cochrane.webp',
        alt: 'Completed IKO shingle roof replacement by Sure West Roofing in Cochrane Alberta',
      }}
    />
  )
}
