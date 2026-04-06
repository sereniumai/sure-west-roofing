import Link from 'next/link'

type ButtonVariant = 'primary' | 'ghost' | 'outline' | 'secondary'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#E1A356] text-white font-body font-semibold rounded-lg hover:bg-[#C49A2C] transition-all duration-200 active:scale-95 shadow-[0_4px_0_rgba(0,0,0,0.15)]',
  secondary:
    'bg-[#1B3558] text-white font-body font-semibold rounded-lg hover:bg-[#243F6B] transition-all duration-200 active:scale-95',
  ghost:
    'border border-white/50 text-white font-body font-semibold rounded-lg hover:bg-white hover:text-[#1B3558] transition-all duration-200 active:scale-95',
  outline:
    'border-2 border-[#1B3558] text-[#1B3558] font-body font-semibold rounded-lg hover:bg-[#1B3558] hover:text-white transition-all duration-200 active:scale-95',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-4 text-base',
  lg: 'px-[30px] py-[26px] text-lg',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const styles = `${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim()

  if (href) {
    return (
      <Link href={href} className={`inline-block text-center ${styles}`}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {children}
    </button>
  )
}
