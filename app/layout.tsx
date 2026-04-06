import type { Metadata, Viewport } from 'next'
import '@/styles/globals.css'

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: {
    default: 'Roofing Contractor Cochrane AB | Sure West Roofing',
    template: '%s | Sure West Roofing',
  },
  description:
    'Red Seal Journeyman certified roofing contractor in Cochrane, AB. Roof replacement, repair, hail damage & inspections serving Calgary & Canmore. Free estimates — call (403) 990-7210.',
  keywords: [
    'roofing contractor Cochrane',
    'roofer Cochrane AB',
    'roof replacement Cochrane',
    'roofing Calgary',
    'hail damage repair Calgary',
    'Red Seal roofer Alberta',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_CA',
    url: 'https://surewestroofing.ca',
    siteName: 'Sure West Roofing',
  },
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en-CA" dir="ltr">
      <body className="antialiased">
        <a href="#main-content" className="skip-to-main">
          Skip to main content
        </a>
        <main id="main-content">{children}</main>
      </body>
    </html>
  )
}
