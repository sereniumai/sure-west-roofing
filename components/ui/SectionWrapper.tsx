type Background = 'white' | 'off-white' | 'navy'

interface SectionWrapperProps {
  children: React.ReactNode
  background?: Background
  className?: string
}

const bgStyles: Record<Background, string> = {
  white: 'bg-site-white',
  'off-white': 'bg-off-white',
  navy: 'bg-navy text-white',
}

export function SectionWrapper({
  children,
  background = 'white',
  className = '',
}: SectionWrapperProps) {
  return (
    <section className={`py-16 md:py-24 ${bgStyles[background]} ${className}`.trim()}>
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {children}
      </div>
    </section>
  )
}
