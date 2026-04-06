'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

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
    'bg-[#D6AE60] text-white font-body font-semibold rounded-lg shadow-[0_4px_0_rgba(0,0,0,0.15)] overflow-hidden relative',
  secondary:
    'bg-[#1B3558] text-white font-body font-semibold rounded-lg overflow-hidden relative',
  ghost:
    'border border-white/50 text-white font-body font-semibold rounded-lg overflow-hidden relative',
  outline:
    'border-2 border-[#1B3558] text-[#1B3558] font-body font-semibold rounded-lg overflow-hidden relative',
}

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'px-5 py-2.5 text-sm',
  md: 'px-7 py-4 text-base',
  lg: 'px-[30px] py-[26px] text-lg',
}

const hoverBg: Record<ButtonVariant, string> = {
  primary: '#B8943F',
  secondary: '#243F6B',
  ghost: 'rgba(255,255,255,1)',
  outline: '#1B3558',
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
  const baseStyles = `${variantStyles[variant]} ${sizeStyles[size]} ${className}`.trim()

  const inner = (
    <>
      {/* Shine sweep on hover */}
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full pointer-events-none" />
      <span className="relative z-10">{children}</span>
    </>
  )

  if (href) {
    return (
      <motion.div
        className="inline-block"
        whileHover={{
          scale: 1.03,
          y: -2,
        }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      >
        <Link
          href={href}
          className={`group inline-flex items-center justify-center text-center ${baseStyles}`}
          style={{ transition: `background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease` }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = hoverBg[variant]
            if (variant === 'ghost') e.currentTarget.style.color = '#1B3558'
            if (variant === 'outline') e.currentTarget.style.color = '#fff'
            if (variant === 'primary') e.currentTarget.style.boxShadow = '0 6px 20px rgba(214,174,96,0.4)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = ''
            e.currentTarget.style.color = ''
            e.currentTarget.style.boxShadow = ''
          }}
        >
          {inner}
        </Link>
      </motion.div>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`group inline-flex items-center justify-center ${baseStyles}`}
      style={{ transition: `background-color 0.3s ease, color 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease` }}
      whileHover={{
        scale: 1.03,
        y: -2,
      }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
      onMouseEnter={(e) => {
        e.currentTarget.style.backgroundColor = hoverBg[variant]
        if (variant === 'ghost') e.currentTarget.style.color = '#1B3558'
        if (variant === 'outline') e.currentTarget.style.color = '#fff'
        if (variant === 'primary') e.currentTarget.style.boxShadow = '0 6px 20px rgba(214,174,96,0.4)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.backgroundColor = ''
        e.currentTarget.style.color = ''
        e.currentTarget.style.boxShadow = ''
      }}
    >
      {inner}
    </motion.button>
  )
}
