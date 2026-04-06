type Background = 'white' | 'surface' | 'navy'

interface SectionWrapperProps {
  children: React.ReactNode
  background?: Background
  className?: string
}

const bgStyles: Record<Background, string> = {
  white: 'bg-white',
  surface: 'bg-surface',
  navy: 'bg-navy text-white',
}

export function SectionWrapper({
  children,
  background = 'white',
  className = '',
}: SectionWrapperProps) {
  return (
    <section className={`py-20 lg:py-28 ${bgStyles[background]} ${className}`.trim()}>
      <div className="max-w-6xl mx-auto px-6">
        {children}
      </div>
    </section>
  )
}
