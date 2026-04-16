import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Roofing Services Cochrane | Sure West Roofing',
  description:
    'Roofing services in Cochrane, Calgary and Canmore. Red Seal Journeyman certified roof replacement, repair, hail damage repair, maintenance, inspections and skylight installation.',
  alternates: {
    canonical: 'https://surewestroofing.ca/services',
  },
}

export default function ServicesIndexPage() {
  return (
    <main
      className="bg-white"
      style={{
        paddingTop: 'var(--section-pad-top)',
        paddingBottom: 'var(--section-pad-bot)',
        paddingLeft: 'var(--section-pad-x)',
        paddingRight: 'var(--section-pad-x)',
      }}
    >
      <div className="mx-auto" style={{ maxWidth: '1320px' }}>
        <h1
          className="font-display font-semibold text-[--color-near-black]"
          style={{
            fontSize: 'clamp(32px, 4vw, 56px)',
            letterSpacing: '-0.04em',
            lineHeight: 1.05,
          }}
        >
          Roofing Services Cochrane
        </h1>
      </div>
    </main>
  )
}
