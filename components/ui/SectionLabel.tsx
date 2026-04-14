interface SectionLabelProps {
  text: string
  className?: string
}

export function SectionLabel({ text, className = '' }: SectionLabelProps) {
  return (
    <span className={`section-label text-[#F97316] ${className}`.trim()}>
      {text}
    </span>
  )
}
