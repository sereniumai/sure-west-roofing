import { ServicePageHero } from '@/components/sections/ServicePageHero'

export function RoofInspectionHero() {
  return (
    <ServicePageHero
      breadcrumbLabel="Roof Inspection"
      eyebrow="Cochrane's Trusted Roof Inspection Specialists"
      h1={'Roof Inspection in\nCochrane, Alberta'}
      body="Red Seal certified roof inspection for Cochrane, Calgary, and Canmore. Pre-purchase, post-storm, and annual inspections with a written photo report. Book online or call for fastest response."
      trustItems={['Red Seal Certified', 'Written Photo Report', 'Free with Quote']}
      image={{
        src: '/images/Roof Inspection Cochrane.avif',
        alt: 'Sure West Roofing Red Seal Journeyman performing a roof inspection in Cochrane Alberta',
      }}
      review={{
        quote:
          'Sure West Roofing was efficient and professional from start to finish. Thorough, knowledgeable, and provided a transparent quote. I would highly recommend this company to anyone in Cochrane and the surrounding area.',
        author: 'Stacey Barefoot',
        location: 'Cochrane, AB',
      }}
    />
  )
}
