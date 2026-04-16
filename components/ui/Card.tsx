interface CardProps {
  children: React.ReactNode
  parentBg?: 'white' | 'cream'
  className?: string
}

export function Card({ children, parentBg = 'cream', className = '' }: CardProps) {
  const styles =
    parentBg === 'cream'
      ? 'bg-white rounded-[12px] shadow-[0_2px_8px_rgba(44,71,102,0.06)]'
      : 'bg-white rounded-[12px] border border-[#E8E8E8] shadow-[0_1px_3px_rgba(0,0,0,0.06)]'

  return (
    <div className={`${styles} ${className}`.trim()}>
      {children}
    </div>
  )
}
