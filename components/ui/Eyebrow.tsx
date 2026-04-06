interface EyebrowProps {
  children: React.ReactNode
  className?: string
}

export function Eyebrow({ children, className = '' }: EyebrowProps) {
  return (
    <span
      className={`font-medium text-gold text-[11px] tracking-[0.15em] uppercase ${className}`}
    >
      {children}
    </span>
  )
}
