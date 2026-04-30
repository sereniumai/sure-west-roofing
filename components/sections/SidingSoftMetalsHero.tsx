import { ServicePageHero } from '@/components/sections/ServicePageHero'

export function SidingSoftMetalsHero() {
  return (
    <ServicePageHero
      breadcrumbLabel="Siding & Soft Metals"
      eyebrow="Cochrane's Siding & Soft Metals Specialists"
      h1={'Siding & Soft Metals\nin Cochrane, Alberta'}
      body="Red Seal certified siding installation, eavestroughs, fascia, and soffit work for Cochrane, Calgary, and Canmore. Built for Alberta weather, finished by the same crew that does our roofs. Free written quotes and a real workmanship warranty."
      trustItems={['Red Seal Certified', '5-Year Workmanship Warranty', 'Free Written Quote']}
      image={{
        src: '/images/Cochrane Roofing Contractor Gallery 7.webp',
        alt: 'Sure West Roofing siding and soft metals project on a Cochrane Alberta home',
      }}
      review={{
        quote:
          'I sincerely recommend Sure West Roofing. The team were very professional and approachable. I was impressed by how well they worked together and how carefully they treated my property. The cleanup was thorough and meticulous.',
        author: 'Virginia Campana',
        location: 'Cochrane, AB',
      }}
    />
  )
}
