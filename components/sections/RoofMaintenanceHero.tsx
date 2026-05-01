import { ServicePageHero } from '@/components/sections/ServicePageHero'

export function RoofMaintenanceHero() {
  return (
    <ServicePageHero
      breadcrumbLabel="Roof Maintenance"
      eyebrow="Cochrane's Trusted Roof Maintenance Specialists"
      h1={'Roof Maintenance in\nCochrane, Alberta'}
      body="Red Seal certified roof maintenance for Cochrane, Calgary, and Canmore. Annual inspections, debris clearing, flashing top-ups, and minor repairs caught before they escalate. The smartest way to extend your roof's lifespan."
      trustItems={['Red Seal Certified', '10-Year Workmanship Warranty', 'IKO Certified']}
      image={{
        src: '/images/roof-maintenance-cochrane.webp',
        alt: 'Sure West Roofing Red Seal crew performing annual roof maintenance in Cochrane Alberta',
      }}
    />
  )
}
