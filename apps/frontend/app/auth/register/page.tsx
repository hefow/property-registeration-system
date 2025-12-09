"use client"

import Link from "next/link"
import { FormEvent, useState } from "react"
import { register } from "../../../services/auth.service"
import type { AuthRole } from "../../../services/auth.service"

const benefits = [
  "Automated validation keeps submissions audit-ready",
  "Secure storage + multi-party acknowledgments",
  "Clear status updates for officials and owners",
]

type RegisterFormState = {
  fullName: string
  email: string
  password: string
  phone: string
  role: AuthRole | ""
}

const initialState: RegisterFormState = {
  fullName: "",
  email: "",
  password: "",
  phone: "",
  role: "",
}

const validate = (values: RegisterFormState) => {
  const errors: Partial<Record<keyof RegisterFormState, string>> = {}

  if (!values.fullName.trim()) {
    errors.fullName = "Full name is required."
  }

  if (!values.email.trim()) {
    errors.email = "Official email is required."
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) {
    errors.email = "Enter a valid email address."
  }

  if (!values.password.trim()) {
    errors.password = "Password is required."
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 characters or more."
  }

  if (!values.role.trim()) {
    errors.role = "Role is required."
  }

  return errors
}

export default function RegisterPage() {
  const [formState, setFormState] = useState(initialState)
  const [errors, setErrors] = useState<Partial<Record<keyof RegisterFormState, string>>>({})
  const [status, setStatus] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { id, value } = event.target
    setFormState((prev) => ({ ...prev, [id]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const validation = validate(formState)
    if (Object.keys(validation).length) {
      setErrors(validation)
      setStatus("")
      return
    }

    setIsSubmitting(true)
    setErrors({})
    setStatus("Registering your workspace...")

    try {
      const response = await register({
        fullName: formState.fullName,
        email: formState.email,
        password: formState.password,
        phoneNumber: formState.phone || undefined,
        role: formState.role as AuthRole,
      })

      setStatus(response.message)
      setFormState(initialState)
    } catch (error) {
      const message = error instanceof Error ? error.message : "Registration failed."
      setStatus(message)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#F7F9FC]">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col gap-6 rounded-3xl bg-gradient-to-br from-[#001F54] to-[#0E4AA3] p-8 text-white shadow-2xl lg:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8AE4D7]">SDG-aligned flow</p>
          <h1 className="text-3xl font-semibold leading-tight lg:text-4xl">
            Register stakeholders, <span className="text-[#8AE4D7]">secure every deed</span>
          </h1>
          <p className="text-base text-[#E8F3FE]">
            Create an account for owners and officials so every filing stays auditable and aligned with civic goals.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-semibold">18k+</p>
              <p className="text-sm text-[#D8E7FF]">Active submissions</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">320</p>
              <p className="text-sm text-[#D8E7FF]">Municipal partners</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">98%</p>
              <p className="text-sm text-[#D8E7FF]">Audit accuracy</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/5 p-4 text-sm text-[#C6DEFF]">
            <p>
              Invitations are encrypted, time-stamped, and routed through compliance-approved channels so every party can onboard confidently.
            </p>
          </div>
        </div>

        <div className="flex-1 rounded-3xl bg-white p-10 shadow-[0_25px_60px_rgba(15,23,42,0.12)]">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#00A86B]">Request access</p>
            <h2 className="text-2xl font-semibold text-[#111827]">Create your SafeRecord hub</h2>
            <p className="text-sm text-[#6B7280]">
              Use your institutional email. Already part of the registry?{' '}
              <Link href="/auth/login" className="font-semibold text-[#0066CC] underline-offset-2 hover:underline">
                Sign in here
              </Link>
              .
            </p>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="fullName" className="mb-2 block text-sm font-medium text-[#111827]">
                Full name
              </label>
              <input
                id="fullName"
                type="text"
                value={formState.fullName}
                onChange={handleChange}
                className={`w-full rounded-2xl border px-4 py-3 text-sm focus:border-[#1DA2A7] focus:outline-none focus:ring-2 focus:ring-[#1DA2A7]/50 ${
                  errors.fullName ? "border-[#F87171]" : "border-[#E5E7EB]"
                }`}
                placeholder="Jordan Blake"
              />
              {errors.fullName && <p className="mt-1 text-xs text-[#F87171]">{errors.fullName}</p>}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#111827]">
                Institutional email
              </label>
              <input
                id="email"
                type="email"
                value={formState.email}
                onChange={handleChange}
                className={`w-full rounded-2xl border px-4 py-3 text-sm focus:border-[#1DA2A7] focus:outline-none focus:ring-2 focus:ring-[#1DA2A7]/50 ${
                  errors.email ? "border-[#F87171]" : "border-[#E5E7EB]"
                }`}
                placeholder="you@municipality.gov"
              />
              {errors.email && <p className="mt-1 text-xs text-[#F87171]">{errors.email}</p>}
            </div>

            <div>
              <label htmlFor="password" className="mb-2 block text-sm font-medium text-[#000000]">
                Password
              </label>
              <input
                id="password"
                type="password"
                value={formState.password}
                onChange={handleChange}
                className={`w-full rounded-2xl border px-4 py-3 text-sm focus:border-[#1DA2A7] focus:outline-none focus:ring-2 focus:ring-[#1DA2A7]/50 ${
                  errors.password ? "border-[#F87171]" : "border-[#E5E7EB]"
                }`}
                placeholder="Create a strong password"
              />
              {errors.password && <p className="mt-1 text-xs text-[#F87171]">{errors.password}</p>}
            </div>

            <div>
              <label htmlFor="role" className="mb-2 block text-sm font-medium text-[#111827]">
                Role
              </label>
              <select
                id="role"
                value={formState.role}
                onChange={handleChange}
                className={`w-full rounded-2xl border px-4 py-3 text-sm focus:border-[#1DA2A7] focus:outline-none focus:ring-2 focus:ring-[#1DA2A7]/50 ${
                  errors.role ? "border-[#F87171]" : "border-[#E5E7EB]"
                }`}
              >
                <option value="">Select a role</option>
                <option value="property_owner">Property Owner</option>
                <option value="government_official">Government Official</option>
                <option value="admin">Admin</option>
              </select>
              {errors.role && <p className="mt-1 text-xs text-[#F87171]">{errors.role}</p>}
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-[#111827]">
                Phone (optional)
              </label>
              <input
                id="phone"
                type="tel"
                value={formState.phone}
                onChange={handleChange}
                className="w-full rounded-2xl border border-[#E5E7EB] px-4 py-3 text-sm focus:border-[#1DA2A7] focus:outline-none focus:ring-2 focus:ring-[#1DA2A7]/50"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            <button
              type="submit"
              className={`w-full rounded-2xl bg-gradient-to-r from-[#0066CC] to-[#00A86B] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 ${
                isSubmitting ? "opacity-70" : ""
              }`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending invite..." : "Request access"}
            </button>
          </form>

          {status && <p className="mt-4 text-sm text-[#0066CC]">{status}</p>}

          <div className="mt-8 rounded-2xl bg-[#F0F9F4] p-5 text-sm text-[#0F766E]">
            <p className="font-semibold">Why partners trust SafeRecord</p>
            <ul className="mt-3 space-y-2 text-[#134E4A]">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#00A86B]" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}
