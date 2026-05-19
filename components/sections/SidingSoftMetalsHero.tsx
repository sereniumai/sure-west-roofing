import { ServicePageHero } from '@/components/sections/ServicePageHero'

export function SidingSoftMetalsHero() {
  return (
    <ServicePageHero
      breadcrumbLabel="Siding & Soft Metals"
      eyebrow="Cochrane's Siding & Soft Metals Specialists"
      eyebrowMobile="Siding & Soft Metals"
      h1={'Siding & Soft Metals\nin Cochrane, Alberta'}
      body="Siding, eavestroughs, fascia, and soffit work for Cochrane, Calgary, and Canmore. All major materials installed to manufacturer spec, bundled with your roof project or as a standalone job."
      image={{
        src: '/images/Cochrane Roofing Contractor Gallery 7.webp',
        alt: 'Sure West Roofing siding and soft metals project on a Cochrane Alberta home',
      }}
      badge={{
        heading: 'Manufacturer-Spec Install',
        subtext: 'Roof, fascia, and eaves',
      }}
    />
  )
}
