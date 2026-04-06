import Link from 'next/link'

type ButtonVariant = 'primary' | 'secondary' | 'ghost'

interface ButtonProps {
  variant?: ButtonVariant
  href?: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
  type?: 'button' | 'submit'
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-gold text-navy font-medium px-8 py-4 text-sm tracking-wide hover:brightness-90 transition-all rounded-none active:scale-95',
  secondary:
    'bg-transparent text-white font-medium px-8 py-4 text-sm tracking-wide border border-white/35 hover:bg-white/10 transition-all rounded-none active:scale-95',
  ghost:
    'bg-transparent text-navy font-medium px-8 py-4 text-sm tracking-wide border border-navy hover:bg-navy hover:text-white transition-all rounded-none active:scale-95',
}

export function Button({
  variant = 'primary',
  href,
  children,
  className = '',
  onClick,
  type = 'button',
}: ButtonProps) {
  const styles = `${variantStyles[variant]} ${className}`

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
