'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Send, CheckCircle2, AlertCircle, ChevronDown } from 'lucide-react'

const services = [
  'Roof Replacement',
  'Roof Repair',
  'Hail Damage Repair',
  'Roof Maintenance',
  'Roof Inspection',
  'Skylight Installation',
  'Emergency Roof Repair',
  'Other',
]

interface FormData {
  name: string
  email: string
  phone: string
  address: string
  service: string
}

interface FormErrors {
  name?: string
  email?: string
  phone?: string
  address?: string
  service?: string
}

function validateForm(data: FormData): FormErrors {
  const errors: FormErrors = {}

  if (!data.name.trim() || data.name.trim().length < 2) {
    errors.name = 'Please enter your full name'
  }

  if (!data.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = 'Please enter a valid email address'
  }

  const digits = data.phone.replace(/\D/g, '')
  if (digits.length < 10) {
    errors.phone = 'Please enter a valid phone number'
  }

  if (!data.address.trim() || data.address.trim().length < 5) {
    errors.address = 'Please enter your property address'
  }

  if (!data.service) {
    errors.service = 'Please select a service'
  }

  return errors
}

const inputBase =
  'w-full px-4 py-3.5 rounded-lg border bg-white font-body text-sm text-dark placeholder:text-muted focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-200'
const inputNormal = `${inputBase} border-[#E5E2D9] focus:ring-[#D6AE60]/50 focus:border-[#D6AE60]`
const inputError = `${inputBase} border-red-400 focus:ring-red-400/50 focus:border-red-400`

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: '',
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')
  const [serverError, setServerError] = useState('')
  const [smsDelivered, setSmsDelivered] = useState(false)

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const validationErrors = validateForm(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      return
    }

    setStatus('submitting')
    setServerError('')

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.error || 'Something went wrong. Please try again.')
      }

      setSmsDelivered(data.smsDelivered ?? false)
      setStatus('success')
    } catch (err) {
      setStatus('error')
      setServerError(
        err instanceof Error ? err.message : 'Something went wrong. Please try again.'
      )
    }
  }

  if (status === 'success') {
    return (
      <motion.div
        className="bg-white rounded-2xl border border-[#E5E2D9] p-8 lg:p-12 text-center shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="w-16 h-16 rounded-full bg-green-50 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-8 h-8 text-green-500" />
        </div>
        <h3 className="font-display font-bold text-2xl text-dark tracking-tight mb-2">
          Thank You!
        </h3>
        <p className="font-body text-body-text leading-relaxed max-w-md mx-auto">
          We&apos;ve received your request
          {smsDelivered ? ' and sent a confirmation to your phone' : ''}. One of
          our certified roofers will be in touch within 24 hours to schedule your
          free consultation.
        </p>
      </motion.div>
    )
  }

  return (
    <motion.div
      className="bg-white rounded-2xl border border-[#E5E2D9] p-6 lg:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.06)]"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
    >
      <h2 className="font-display font-bold text-xl lg:text-2xl text-dark tracking-tight mb-6">
        Request Your Free Estimate
      </h2>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block font-body text-sm font-medium text-dark mb-1.5">
            Full Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Smith"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? inputError : inputNormal}
          />
          {errors.name && (
            <p className="font-body text-xs text-red-500 mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block font-body text-sm font-medium text-dark mb-1.5">
            Email Address
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john@example.com"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? inputError : inputNormal}
          />
          {errors.email && (
            <p className="font-body text-xs text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block font-body text-sm font-medium text-dark mb-1.5">
            Phone Number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            placeholder="(403) 555-1234"
            value={formData.phone}
            onChange={handleChange}
            className={errors.phone ? inputError : inputNormal}
          />
          {errors.phone && (
            <p className="font-body text-xs text-red-500 mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block font-body text-sm font-medium text-dark mb-1.5">
            Property Address
          </label>
          <input
            id="address"
            name="address"
            type="text"
            placeholder="123 Main Street, Cochrane, AB"
            value={formData.address}
            onChange={handleChange}
            className={errors.address ? inputError : inputNormal}
          />
          {errors.address && (
            <p className="font-body text-xs text-red-500 mt-1">{errors.address}</p>
          )}
        </div>

        {/* Service Interest */}
        <div>
          <label htmlFor="service" className="block font-body text-sm font-medium text-dark mb-1.5">
            Service Interest
          </label>
          <div className="relative">
            <select
              id="service"
              name="service"
              value={formData.service}
              onChange={handleChange}
              className={`${errors.service ? inputError : inputNormal} appearance-none pr-10 ${
                !formData.service ? 'text-muted' : ''
              }`}
            >
              <option value="" disabled>
                Select a service
              </option>
              {services.map((s) => (
                <option key={s} value={s}>
                  {s}
                </option>
              ))}
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted pointer-events-none" />
          </div>
          {errors.service && (
            <p className="font-body text-xs text-red-500 mt-1">{errors.service}</p>
          )}
        </div>

        {/* Server error */}
        {status === 'error' && serverError && (
          <motion.div
            className="flex items-start gap-2.5 bg-red-50 text-red-700 rounded-lg px-4 py-3"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
            <p className="font-body text-sm">{serverError}</p>
          </motion.div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={status === 'submitting'}
          className={`group w-full px-7 py-4 rounded-lg font-body font-semibold text-base text-white bg-[#D6AE60] shadow-[0_4px_0_rgba(0,0,0,0.15)] overflow-hidden relative flex items-center justify-center gap-2 mt-1 transition-all duration-200 ${
            status === 'submitting'
              ? 'opacity-70 cursor-not-allowed'
              : 'hover:bg-[#B8943F] hover:shadow-[0_6px_20px_rgba(214,174,96,0.4)] active:scale-[0.98]'
          }`}
        >
          <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out group-hover:translate-x-full pointer-events-none" />
          <span className="relative z-10 flex items-center gap-2">
            {status === 'submitting' ? (
              <>
                <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Sending...
              </>
            ) : (
              <>
                Get My Free Estimate
                <Send className="w-4 h-4" />
              </>
            )}
          </span>
        </button>

        <p className="font-body text-xs text-muted text-center">
          We&apos;ll send a confirmation to your phone. No spam, ever.
        </p>
      </form>
    </motion.div>
  )
}
