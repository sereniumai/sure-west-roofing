import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roofing Cost Calculator Cochrane',
  description:
    'Estimate the cost of a new roof in Cochrane, Calgary, or Canmore. Free, instant roofing cost calculator from Sure West Roofing.',
  alternates: {
    canonical: 'https://surewestroofing.ca/roofing-cost-calculator',
  },
  openGraph: {
    title: 'Roofing Cost Calculator Cochrane | Sure West Roofing',
    description:
      'Estimate the cost of a new roof in Cochrane, Calgary, or Canmore. Free, instant roofing cost calculator.',
    url: 'https://surewestroofing.ca/roofing-cost-calculator',
    type: 'website',
    locale: 'en_CA',
  },
}

export default function RoofingCostCalculatorPage() {
  return (
    <div className="flex min-h-screen items-center justify-center pt-20">
      <h1 style={{ fontSize: 'clamp(48px, 6vw, 80px)' }}>Roofing Cost Calculator Cochrane</h1>
    </div>
  )
}
