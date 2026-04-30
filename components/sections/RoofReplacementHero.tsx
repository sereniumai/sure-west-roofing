import { ServicePageHero } from '@/components/sections/ServicePageHero'

export function RoofReplacementHero() {
  return (
    <ServicePageHero
      breadcrumbLabel="Roof Replacement"
      eyebrow="Cochrane's Trusted Roof Replacement Contractor"
      h1={'Roof Replacement in\nCochrane, Alberta'}
      body="Red Seal certified roofers for Cochrane, Calgary, and Canmore. Fixed written quotes, real warranties, no subcontractors. We pride ourselves on getting back to you quickly."
      trustItems={['Red Seal Certified', '10-Year Workmanship Warranty', 'IKO Certified']}
      image={{
        src: '/images/Cochrane Roofing Contractor Gallery 3.webp',
        alt: 'Completed IKO shingle roof replacement by Sure West Roofing in Cochrane Alberta',
      }}
      review={{
        quote:
          'Sure West did an outstanding job replacing my roof from start to finish. Professional, punctual, and incredibly thorough. They left my property spotless after the job was done.',
        author: 'Steve LeNeveu',
        location: 'Cochrane, AB',
      }}
    />
  )
}
