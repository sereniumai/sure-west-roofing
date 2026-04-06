interface SectionWrapperProps {
  background?: 'white' | 'off-white' | 'navy'
  children: React.ReactNode
  className?: string
}

const bgStyles = {
  white: 'bg-site-white',
  'off-white': 'bg-off-white',
  navy: 'bg-navy text-white',
}

export function SectionWrapper({
  background = 'white',
  children,
  className = '',
}: SectionWrapperProps) {
  return (
    <section className={`py-16 md:py-24 ${bgStyles[background]} ${className}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">{children}</div>
    </section>
  )
}
