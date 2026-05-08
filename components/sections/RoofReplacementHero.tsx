import { ServicePageHero } from '@/components/sections/ServicePageHero'

export function RoofReplacementHero() {
  return (
    <ServicePageHero
      breadcrumbLabel="Roof Replacement"
      eyebrow="Cochrane's Trusted Roof Replacement Contractor"
      eyebrowMobile="Roof Replacement Specialists"
      h1={'Roof Replacement in\nCochrane, Alberta'}
      body="Red Seal Journeyman roof replacement in Cochrane, Calgary, and Canmore. The same in-house crew, the same standard, on every roof we touch."
      image={{
        src: '/images/roof-replacement-cochrane.webp',
        alt: 'Completed IKO shingle roof replacement by Sure West Roofing in Cochrane Alberta',
      }}
      badge={{
        heading: '10-Year Warranty',
        subtext: 'Workmanship in writing',
      }}
    />
  )
}
