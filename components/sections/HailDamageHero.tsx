import { ServicePageHero } from '@/components/sections/ServicePageHero'

export function HailDamageHero() {
  return (
    <ServicePageHero
      breadcrumbLabel="Hail Damage Repair"
      eyebrow="Cochrane's Hail Damage Repair Specialists"
      eyebrowMobile="Hail Damage Specialists"
      h1={'Hail Damage Roof\nRepair in Cochrane'}
      body="Red Seal Journeyman hail damage roof repair in Cochrane, Calgary, and Canmore. Free post-storm inspection, photo documentation, and a written diagnosis. Same standard, claim or out of pocket."
      image={{
        src: '/images/hail-damage-repair.webp',
        alt: 'Hail damage roof inspection in Cochrane Alberta by Sure West Roofing',
      }}
      badge={{
        heading: 'Insurance Ready',
        subtext: 'Full photo report on every inspection',
      }}
    />
  )
}
