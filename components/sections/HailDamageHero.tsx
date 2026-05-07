import { ServicePageHero } from '@/components/sections/ServicePageHero'

export function HailDamageHero() {
  return (
    <ServicePageHero
      breadcrumbLabel="Hail Damage Repair"
      eyebrow="Cochrane's Hail Damage Repair Specialists"
      h1={'Hail Damage Roof\nRepair in Cochrane'}
      body="Red Seal certified hail damage roof repair for Cochrane, Calgary, and Canmore. Free post-storm inspections and full photo documentation, so you have what you need to file with your insurer. We pride ourselves on getting back to you quickly."
      image={{
        src: '/images/hail-damage-repair.webp',
        alt: 'Hail damage roof inspection in Cochrane Alberta by Sure West Roofing',
      }}
    />
  )
}
