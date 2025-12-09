"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";

const benefits = [
  "Securely submit owner credentials",
  "Track every registration in one place",
  "Align property records with SDG transparency",
];

const initialState = {
  email: "",
  password: "",
};

const validate = (values: typeof initialState) => {
  const errors: Partial<typeof initialState> = {};
  if (!values.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(values.email)) {
    errors.email = "Enter a valid email address.";
  }

  if (!values.password.trim()) {
    errors.password = "Password is required.";
  } else if (values.password.length < 8) {
    errors.password = "Password must be 8 characters or more.";
  }

  return errors;
};

export default function LoginPage() {
  const [credentials, setCredentials] = useState(initialState);
  const [errors, setErrors] = useState<Partial<typeof initialState>>({});
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCredentials((prev) => ({ ...prev, [event.target.id]: event.target.value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const validation = validate(credentials);

    if (Object.keys(validation).length) {
      setErrors(validation);
      setStatus("");
      return;
    }

    setErrors({});
    setIsSubmitting(true);
    setStatus("Signing you in...");

    setTimeout(() => {
      setIsSubmitting(false);
      setStatus("Welcome back! Redirecting to dashboard...");
    }, 1100);
  };

  return (
    <main className="min-h-screen bg-[#F7F9FC]">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-8 px-6 py-16 lg:flex-row lg:items-center">
        <div className="flex flex-1 flex-col gap-6 rounded-3xl bg-gradient-to-br from-[#001F54] to-[#0E4AA3] p-8 text-white shadow-2xl lg:p-12">
          <p className="text-sm uppercase tracking-[0.3em] text-[#8AE4D7]">SDG-aligned flow</p>
          <h1 className="text-3xl font-semibold leading-tight lg:text-4xl">
            Civic property records,{' '}
            <span className="text-[#8AE4D7]">available to every steward</span>
          </h1>
          <p className="text-base text-[#E8F3FE]">
            Sign in to continue safeguarding ownership, match registrations with policy data, and keep communities aligned with global goals.
          </p>
          <div className="grid gap-6 sm:grid-cols-3">
            <div>
              <p className="text-3xl font-semibold">128</p>
              <p className="text-sm text-[#D8E7FF]">Verified owners</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">44</p>
              <p className="text-sm text-[#D8E7FF]">Policy partners</p>
            </div>
            <div>
              <p className="text-3xl font-semibold">205K</p>
              <p className="text-sm text-[#D8E7FF]">Document reviews</p>
            </div>
          </div>
          <div className="rounded-2xl border border-white/20 bg-white/5 p-4 text-sm text-[#C6DEFF]">
            <p>
              The registry keeps sensitive records encrypted, logged, and ready for inspection by authorized officials. Every sign-in strengthens civic trust.
            </p>
          </div>
        </div>

        <div className="flex-1 rounded-3xl bg-white p-10 shadow-[0_25px_60px_rgba(15,23,42,0.12)]">
          <div className="mb-6">
            <p className="text-sm uppercase tracking-[0.3em] text-[#00A86B]">SafeRecord login</p>
            <h2 className="text-2xl font-semibold text-[#111827]">Access your registry workspace</h2>
            <p className="text-sm text-[#6B7280]">
              Use your institutional email. Need an account?{' '}
              <Link href="/auth/register" className="font-semibold text-[#0066CC] underline-offset-2 hover:underline">
                Register here
              </Link>
              .
            </p>
          </div>
          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-[#111827]">
                Email address
              </label>
              <input
                id="email"
                type="email"
                value={credentials.email}
                onChange={handleChange}
                className={`w-full rounded-2xl border px-4 py-3 text-sm focus:border-[#1DA2A7] focus:outline-none focus:ring-2 focus:ring-[#1DA2A7]/50 ${errors.email ? "border-[#F87171]" : "border-[#E5E7EB]"}`}
                placeholder="you@agency.org"
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
                value={credentials.password}
                onChange={handleChange}
                className={`w-full rounded-2xl border px-4 py-3 text-sm focus:border-[#0000] focus:outline-none focus:ring-2 focus:ring-[#1DA2A7]/50 ${errors.password ? "border-[#F87171]" : "border-[#E5E7EB]"}`}
                placeholder="••••••••"
              />
              {errors.password && <p className="mt-1 text-xs text-[#F87171]">{errors.password}</p>}
            </div>

            <button
              type="submit"
              className={`w-full rounded-2xl bg-gradient-to-r from-[#0066CC] to-[#00A86B] px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 ${isSubmitting ? "opacity-70" : ""}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Signing in..." : "Sign in"}
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
  );
}
