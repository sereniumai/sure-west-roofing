interface SectionLabelProps {
  text: string
  className?: string
}

export function SectionLabel({ text, className = '' }: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`.trim()}>
      <span className="w-8 h-0.5 bg-[#C49A2C]" />
      <span className="font-body text-xs font-semibold tracking-widest uppercase text-[#C49A2C]">
        {text}
      </span>
    </div>
  )
}
