interface SectionLabelProps {
  text: string
  className?: string
}

export function SectionLabel({ text, className = '' }: SectionLabelProps) {
  return (
    <span className={`section-label text-[#D4AF60] ${className}`.trim()}>
      {text}
    </span>
  )
}
