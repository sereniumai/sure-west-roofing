interface EyebrowProps {
  children: React.ReactNode
  className?: string
}

export function Eyebrow({ children, className = '' }: EyebrowProps) {
  return (
    <span
      className={`font-body font-medium text-primary text-[11px] tracking-[0.15em] uppercase ${className}`.trim()}
    >
      {children}
    </span>
  )
}
