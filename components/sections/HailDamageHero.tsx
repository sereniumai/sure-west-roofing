import { ServicePageHero } from '@/components/sections/ServicePageHero'

export function HailDamageHero() {
  return (
    <ServicePageHero
      breadcrumbLabel="Hail Damage Repair"
      eyebrow="Cochrane's Hail Damage Repair Specialists"
      h1={'Hail Damage Roof\nRepair in Cochrane'}
      body="Red Seal certified hail damage roof repair for Cochrane, Calgary, and Canmore. Free post-storm inspections and full photo documentation, so you have what you need to file with your insurer. We pride ourselves on getting back to you quickly."
      trustItems={['Fully Documented', 'Red Seal Certified', 'Fast Storm Response']}
      image={{
        src: '/images/Cochrane Roofing Contractor Gallery 8.webp',
        alt: 'Hail damage roof inspection in Cochrane Alberta by Sure West Roofing',
      }}
      review={{
        quote:
          'Found a serious roof leak a few days before heading on vacation. Sure West returned my call within an hour and came out almost immediately when 5 other companies declined or did not respond. Done right, done fast.',
        author: 'Kelsey Davis',
        location: 'Cochrane, AB',
      }}
    />
  )
}
