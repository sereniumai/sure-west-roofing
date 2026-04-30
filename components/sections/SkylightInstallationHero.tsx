import { ServicePageHero } from '@/components/sections/ServicePageHero'

export function SkylightInstallationHero() {
  return (
    <ServicePageHero
      breadcrumbLabel="Skylight Installation"
      eyebrow="Cochrane's Skylight Installation Specialists"
      h1={'Skylight Installation\nin Cochrane, Alberta'}
      body="Red Seal certified skylight installation for Cochrane, Calgary, and Canmore. Velux and Fakro brands, leak-free flashing systems, written 5-year leak warranty. Permit handling included."
      trustItems={['Red Seal Certified', '5-Year Leak Warranty', 'Permit Handled']}
      image={{
        src: '/images/Cochrane Roofing Contractor Gallery 13.webp',
        alt: 'Velux skylight installation by Sure West Roofing on a Cochrane Alberta home',
      }}
      review={{
        quote:
          'They came out fast, the quote was clear and included pictures, and they showed up right on time. The work was done well and they even shared photos of the finished job. No surprises with the price either.',
        author: 'Florian',
        location: 'Calgary Region',
      }}
    />
  )
}
