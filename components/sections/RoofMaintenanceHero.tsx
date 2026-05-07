import { ServicePageHero } from '@/components/sections/ServicePageHero'

export function RoofMaintenanceHero() {
  return (
    <ServicePageHero
      breadcrumbLabel="Roof Maintenance"
      eyebrow="Cochrane's Trusted Roof Maintenance Specialists"
      h1={'Roof Maintenance in\nCochrane, Alberta'}
      body="Red Seal Journeyman roof maintenance for Cochrane, Calgary, and Canmore. Annual visits, debris clearing, flashing top-ups, and minor repairs caught before they leak."
      image={{
        src: '/images/roof-maintenance-cochrane.webp',
        alt: 'Sure West Roofing crew performing annual roof maintenance in Cochrane Alberta',
      }}
      badge={{
        heading: 'Annual Tune-Ups',
        subtext: 'Catch issues before they leak',
      }}
    />
  )
}
