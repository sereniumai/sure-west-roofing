import Link from 'next/link'

type ButtonVariant = 'primary' | 'ghost'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#C49A2C] text-white rounded-full px-7 py-3.5 font-medium hover:bg-[#A6821E] transition-all active:scale-95',
  ghost:
    'border-2 border-white text-white rounded-full px-7 py-3.5 font-medium hover:bg-white hover:text-[#1B3558] transition-all active:scale-95',
}

export function Button({
  children,
  variant = 'primary',
  href,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const styles = `${variantStyles[variant]} ${className}`.trim()

  if (href) {
    return (
      <Link href={href} className={`inline-block ${styles}`}>
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
