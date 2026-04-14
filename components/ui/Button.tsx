'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  children: React.ReactNode
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  showArrow?: boolean
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-[#1A1A1A] text-white hover:bg-[#333333] active:bg-[#111]',
  secondary:
    'bg-[#F97316] text-white hover:bg-[#EA580C] active:bg-[#C2410C]',
  ghost:
    'bg-transparent text-white border border-white/40 hover:bg-white hover:text-[#1A1A1A]',
  outline:
    'bg-transparent text-[#1A1A1A] border-2 border-[#1A1A1A] hover:bg-[#1A1A1A] hover:text-white',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-xs',
  md: 'px-7 py-3.5 text-sm',
  lg: 'px-8 py-4 text-base',
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  showArrow = true,
}: ButtonProps) {
  const styles = `inline-flex items-center justify-center gap-2 font-body font-semibold uppercase tracking-wider transition-all duration-300 ${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim()

  const content = (
    <>
      <span>{children}</span>
      {showArrow && <ArrowRight className="w-4 h-4" />}
    </>
  )

  if (href) {
    return (
      <Link href={href} className={styles}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} className={styles}>
      {content}
    </button>
  )
}
