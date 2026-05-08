import { ServicePageHero } from '@/components/sections/ServicePageHero'

export function SidingSoftMetalsHero() {
  return (
    <ServicePageHero
      breadcrumbLabel="Siding & Soft Metals"
      eyebrow="Cochrane's Siding & Soft Metals Specialists"
      eyebrowMobile="Siding & Soft Metals"
      h1={'Siding & Soft Metals\nin Cochrane, Alberta'}
      body="Red Seal Journeyman siding, eavestroughs, fascia, and soffit work for Cochrane, Calgary, and Canmore. All major materials installed by the same in-house crew that does our roofs."
      image={{
        src: '/images/Cochrane Roofing Contractor Gallery 7.webp',
        alt: 'Sure West Roofing siding and soft metals project on a Cochrane Alberta home',
      }}
      badge={{
        heading: 'Same In-House Crew',
        subtext: 'Roof, fascia, and eaves',
      }}
    />
  )
}
