import type { Metadata } from 'next'

const SITE_URL = 'https://cochraneroofingpro.ca'
const SITE_NAME = 'Cochrane Roofing Pro'

export function generateMetadata({
  title,
  description,
  slug,
}: {
  title: string
  description: string
  slug: string
}): Metadata {
  const url = slug ? `${SITE_URL}/${slug}` : SITE_URL

  return {
    title: `${title} | ${SITE_NAME}`,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: `${title} | ${SITE_NAME}`,
      description,
      url,
      siteName: SITE_NAME,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | ${SITE_NAME}`,
      description,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}
