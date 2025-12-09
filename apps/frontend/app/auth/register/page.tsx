"use client"

import type React from "react"

import { useState } from "react"

interface FormData {
  fullName: string
  email: string
  password: string
  phone: string
  role: string
}

interface FormErrors {
  fullName?: string
  email?: string
  password?: string
  role?: string
}

const fieldBase =
  "w-full rounded-[14px] border-2 px-4 py-3 text-sm placeholder:text-[#9CA3AF] transition focus:outline-none dark:bg-white/90 dark:text-[#111827]"
const fieldError = "border-[#EB5757] bg-[#FDEDEE] focus:border-[#EB5757] dark:border-[#F87171] dark:bg-[#FDEDEE]/90 dark:focus:border-[#F87171]"
const fieldNormal = "border-[#E0E5EC] bg-[#F7F9FC] focus:border-[#00A86B] dark:border-[#334155] dark:bg-white/90 dark:focus:border-[#38BDF8]"
const getFieldClasses = (hasError: boolean) => `${fieldBase} ${hasError ? fieldError : fieldNormal}`

const benefits = [
  "Automated validation keeps submissions audit-ready",
  "Secure storage + multi-party acknowledgments",
  "Clear status updates for officials and owners",
]

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    email: "",
    password: "",
    phone: "",
    role: "",
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [submitted, setSubmitted] = useState(false)

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required"
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required"
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email"
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters"
    }

    if (!formData.role) {
      newErrors.role = "Role is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    if (!validateForm()) return

    setSubmitted(true)
    console.log("Form submitted:", formData)
    setFormData({ fullName: "", email: "", password: "", phone: "", role: "" })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <div className="min-h-screen bg-[#F7F9FC] text-[#1A1A1A] dark:bg-[#020617] dark:text-white">
      <div className="relative mx-auto flex max-w-6xl flex-col gap-10 px-4 py-12 sm:px-6 lg:px-8">
        <div className="pointer-events-none absolute top-8 right-4 h-32 w-32 rounded-full bg-[#00A86B]/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-10 left-10 h-32 w-32 rounded-full bg-[#0066CC]/10 blur-3xl" />

        <div className="space-y-3 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.5em] text-[#00A86B] dark:text-[#8EE3FF]">Property registry</p>
          <h1 className="text-4xl font-semibold leading-tight text-[#1A1A1A] dark:text-white">Join SafeRecord and launch with confidence</h1>
          <p className="mx-auto max-w-2xl text-sm text-[#1A1A1A]/70 dark:text-[#CBD5F5]">
            Create an account to collaborate with registrars, owners, and officials on every property filing. Every step remains transparent and auditable.
          </p>
        </div>

        <div className="rounded-[24px] border border-[#E0E5EC] bg-white/95 p-10 shadow-[0_30px_60px_rgba(15,23,42,0.15)] transition dark:bg-[#0C142B]/80 dark:border-[#1F2933] dark:shadow-[0_30px_60px_rgba(2,6,23,0.85)]">
          <div className="grid gap-10 lg:grid-cols-[1.1fr,0.9fr]">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#0066CC] dark:text-[#3EE8CC]">Account details</p>
                <p className="text-sm text-[#1A1A1A]/70 dark:text-[#CBD5F5]">We only ask for the verified information that lets you access the registry.</p>
              </div>

              {submitted && (
                <div className="rounded-[16px] border border-[#00A86B]/40 bg-[#00A86B]/10 px-4 py-3 text-sm font-semibold text-[#006633] dark:border-[#34D399]/50 dark:bg-[#0F2F1C]/80 dark:text-[#A7F3D0]">
                  ✓ Registration recorded. Check your inbox for onboarding next steps.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <label htmlFor="fullName" className="block text-sm font-semibold text-[#1A1A1A] dark:text-[#E2E8F0]">
                    Full Name <span className="text-[#EB5757]">*</span>
                  </label>
                  <input id="fullName" name="fullName" type="text" value={formData.fullName} placeholder="Jordan Blake" onChange={handleChange} className={getFieldClasses(Boolean(errors.fullName))} />
                  {errors.fullName && <p className="text-[12px] text-[#EB5757] font-medium">{errors.fullName}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-semibold text-[#1A1A1A] dark:text-[#E2E8F0]">
                    Official email <span className="text-[#EB5757]">*</span>
                  </label>
                  <input id="email" name="email" type="email" value={formData.email} placeholder="you@municipality.gov" onChange={handleChange} className={getFieldClasses(Boolean(errors.email))} />
                  {errors.email && <p className="text-[12px] text-[#EB5757] font-medium">{errors.email}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="password" className="block text-sm font-semibold text-[#1A1A1A] dark:text-[#E2E8F0]">
                    Password <span className="text-[#EB5757]">*</span>
                  </label>
                  <input id="password" name="password" type="password" value={formData.password} placeholder="Create a strong password" onChange={handleChange} className={getFieldClasses(Boolean(errors.password))} />
                  <p className="text-[11px] text-[#1A1A1A]/70 dark:text-[#CBD5F5]">Minimum 6 characters</p>
                  {errors.password && <p className="text-[12px] text-[#EB5757] font-medium">{errors.password}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="role" className="block text-sm font-semibold text-[#1A1A1A] dark:text-[#E2E8F0]">
                    Role <span className="text-[#EB5757]">*</span>
                  </label>
                  <select
                    id="role"
                    name="role"
                    value={formData.role}
                    onChange={(event) => {
                      setFormData((prev) => ({ ...prev, role: event.target.value }))
                      if (errors.role) {
                        setErrors((prev) => ({ ...prev, role: undefined }))
                      }
                    }}
                    className={getFieldClasses(Boolean(errors.role))}
                  >
                    <option value="">Select a role</option>
                    <option value="property_owner">Property Owner</option>
                    <option value="government_official">Government Official</option>
                    <option value="admin">Admin</option>
                  </select>
                  {errors.role && <p className="text-[12px] text-[#EB5757] font-medium">{errors.role}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-sm font-semibold text-[#1A1A1A] dark:text-[#E2E8F0]">
                    Phone Number <span className="text-[#1A1A1A]/60 dark:text-[#CBD5F5]">(optional)</span>
                  </label>
                  <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="+1 (555) 000-0000" className={getFieldClasses(false)} />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-[16px] bg-gradient-to-r from-[#0066CC] to-[#00A86B] px-4 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white shadow-lg shadow-[#0066CC]/30 transition hover:shadow-xl"
                >
                  Create account
                </button>
              </form>

              <p className="text-center text-sm text-[#1A1A1A]/70 dark:text-[#CBD5F5]">
                Already have an account? {" "}
                <a href="/auth/login" className="text-[#0066CC] underline-offset-2 hover:underline dark:text-[#7DD3FC]">
                  Sign in
                </a>
              </p>
            </div>

            <div className="space-y-6 rounded-[20px] border border-[#E0E5EC] bg-[#F7F9FC] p-6 shadow-inner dark:bg-[#020617] dark:border-[#0F172A] dark:shadow-[0_15px_40px_rgba(2,6,23,0.7)]">
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00A86B] dark:text-[#8EE3FF]">Why SafeRecord</p>
              <ul className="space-y-4 text-sm text-[#1A1A1A]/70 dark:text-[#E0E7FF]">
                {benefits.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-[#00A86B]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="space-y-2 rounded-[16px] border border-[#E0E5EC] bg-white p-4 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#0066CC] dark:border-[#2E4A6E] dark:bg-[#0B1224]/80 dark:text-[#7DD3FC]">
                <p>SDG-ready verification</p>
                <p>Government-grade encryption</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
