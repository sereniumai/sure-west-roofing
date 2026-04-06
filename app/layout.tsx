import type { Metadata } from 'next'
import { Nav } from '@/components/layout/Nav'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

export const metadata: Metadata = {
  title: 'Roofing Contractor Cochrane AB | Cochrane Roofing Pro',
  description:
    'Cochrane Roofing Pro — certified roofing contractor in Cochrane, AB. Roof replacement, repair, hail damage and inspections serving Calgary and Canmore. Free estimates.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
