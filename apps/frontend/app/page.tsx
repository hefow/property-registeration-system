"use client";

import { useState } from "react";

const navLinks = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Registry", href: "/registry" },
  { label: "Team", href: "#team" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Get started", href: "#get-started" },
];

const quickActions = [
  { label: "Register property", href: "/auth/register" },
  { label: "Invite officials", href: "/auth/invite" },
  { label: "Review records", href: "/dashboard" },
];

const stats = [
  { label: "Properties tracked", value: "12.4k" },
  { label: "Officials connected", value: "270" },
  { label: "Documents verified", value: "84k" },
];

const highlightCards = [
  {
    title: "Automation coverage",
    value: "18 steps",
    copy: "Each submission travels through a guided workflow that prevents manual mistakes.",
    accent: "from-[#00A86B] to-[#0066CC]",
  },
  {
    title: "Approval velocity",
    value: "2.4 days",
    copy: "Time between submission and official clearance has been cut in half.",
    accent: "from-[#0066CC] to-[#00A86B]",
  },
  {
    title: "Global clarity",
    value: "42 jurisdictions",
    copy: "Monitoring boards stay in sync with live alerts and digestible reports.",
    accent: "from-[#0066CC] to-[#EB5757]",
  },
];

const resourceLinks = [
  {
    label: "Release notes",
    description: "Read what rolled out this month and what’s next for SafeRecord.",
    href: "/docs/releases",
  },
  {
    label: "Policy library",
    description: "Download policy templates that align with your jurisdiction.",
    href: "/docs/policies",
  },
  {
    label: "Support hub",
    description: "Quick answers, live chat, and onboarding guides for teams.",
    href: "/support",
  },
];

const featureCards = [
  {
    title: "Secure ownership",
    body: "Immutable records and multi-party signatures make ownership data transparent and trustworthy.",
  },
  {
    title: "Automated compliance",
    body: "Policy checks and rule gates run in the background for every submitted form.",
  },
  {
    title: "360° visibility",
    body: "Rich dashboards keep owners, officials, and registry teams aligned on progress.",
  },
];

const roadmapSteps = [
  {
    title: "Submit property info",
    copy: "Upload boundary docs, ownership statements, and proofs in one guided form.",
  },
  {
    title: "Collaborate with officials",
    copy: "Invite registrars and municipal staff to review, comment, and certify directly in the platform.",
  },
  {
    title: "Publish and monitor",
    copy: "The registry publishes the approved record and notifies every party. Track edits with full audit history.",
  },
];

const testimonials = [
  {
    quote: "SafeRecord helped our team clear backlogs without losing compliance.",
    author: "Monica Cruz",
    role: "Registry Director, Alto City",
    rating: 5,
  },
  {
    quote: "We stopped relying on paper pipelines and now launch registrations in days.",
    author: "Jamal Reed",
    role: "City Planner, Westvale",
    rating: 4,
  },
  {
    quote: "Owners see every approval and milestone, which keeps them confident.",
    author: "Priya Patel",
    role: "Landowner",
    rating: 5,
  },
];

const teamMembers = [
  {
    name: "Ana Gilbert",
    title: "Product",
    focus: "Designing clear flows for owners, officials, and registry staff.",
    avatarColor: "bg-gradient-to-br from-[#00A86B] to-[#0066CC]",
  },
  {
    name: "Marcus Flynn",
    title: "Engineering",
    focus: "Building secure APIs, encrypted storage, and observability for every request.",
    avatarColor: "bg-gradient-to-br from-[#0066CC] to-[#00A86B]",
  },
  {
    name: "Dara Kline",
    title: "Trust & Ops",
    focus: "Aligning registry policies with engineering and support.",
    avatarColor: "bg-gradient-to-br from-[#1A1A1A] to-[#0066CC]",
  },
];

const statusIndicators = [
  { label: "Policy alignment", value: "Live", color: "#00A86B" },
  { label: "Regulatory review", value: "In progress", color: "#0066CC" },
  { label: "Technical readiness", value: "Stable", color: "#F2C94C" },
  { label: "Incident response", value: "Monitored", color: "#EB5757" },
];

const ArrowSvg = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={2}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M5 10h10" />
    <path d="M12 5l5 5-5 5" />
  </svg>
);

const SparkSvg = ({ className }: { className?: string }) => (
  <svg
    aria-hidden="true"
    className={className}
    viewBox="0 0 20 20"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10 1v18" />
    <path d="M1 10h18" />
    <path d="M4.22 4.22l11.56 11.56" />
    <path d="M4.22 15.78l11.56-11.56" />
  </svg>
);

const Star = ({ className }: { className?: string }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div
      className="min-h-screen bg-[#F7F9FC] text-[#1A1A1A]"
      style={{ fontFamily: "Inter, 'Poppins', system-ui, sans-serif" }}
    >
      <div className="mx-auto max-w-8x1 px-6 pb-20 pt-8 sm:px-8 lg:px-10">
        <nav className="sticky top-4 z-20 mb-6 flex items-center justify-between rounded-[16px] border border-white/60 bg-white/95 px-4 py-3 shadow-[0_20px_45px_rgba(15,23,42,0.08)] backdrop-blur">
          <div className="flex items-center gap-3">
            <div className="rounded-[16px] bg-[#0066CC] p-2 text-white shadow-lg">
              <SparkSvg className="h-5 w-5" />
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#00A86B]">Property Registry</p>
              <p className="text-lg font-semibold text-[#1A1A1A]">SafeRecord</p>
            </div>
          </div>

          <div className="hidden items-center gap-2 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="group rounded-[12px] px-4 py-2 text-sm font-semibold text-[#1A1A1A] transition hover:bg-[#F1F5F9]"
              >
                {link.label}
                <ArrowSvg className="ml-1 inline-block h-3 w-3 text-[#0066CC] opacity-0 transition group-hover:opacity-100" />
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="flex h-10 w-10 flex-col items-center justify-center gap-1 rounded-[14px] border border-white bg-white text-[#1A1A1A] shadow-sm md:hidden"
              aria-label="Toggle navigation"
            >
              <span className="h-0.5 w-5 bg-[#1A1A1A]" />
              <span className="h-0.5 w-5 bg-[#1A1A1A]" />
            </button>
            <a
              href="/auth/login"
              className="inline-flex items-center gap-2 rounded-[14px] bg-[#0066CC] px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-[#0066CC]/30 transition hover:scale-[1.02]"
            >
              Sign in
              <ArrowSvg className="h-3 w-3 text-white" />
            </a>
          </div>
        </nav>

        {mobileMenuOpen && (
          <div className="mb-6 rounded-[16px] border border-white/60 bg-white p-4 shadow-[0_15px_30px_rgba(15,23,42,0.08)] md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="block rounded-[12px] px-4 py-2 text-sm font-semibold text-[#1A1A1A] transition hover:bg-[#F1F5F9]"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}

        <header className="rounded-[16px] border border-white/60 bg-white p-8 shadow-[0_25px_45px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col gap-10 lg:flex-row lg:items-center lg:justify-between">
            <div className="space-y-6 lg:max-w-2xl">
              <div className="flex items-center gap-2">
                <span className="rounded-full bg-[#00A86B]/10 px-4 py-1 text-xs font-semibold text-[#00A86B] tracking-[0.3em]">
                  SDG-ready
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0066CC]">Clear by design</span>
              </div>
              <div className="space-y-4">
                <h1 className="text-4xl font-semibold leading-tight text-[#1A1A1A] sm:text-5xl">
                  Register, verify, and track properties with confidence.
                </h1>
                <p className="text-lg text-[#1A1A1A]/70">
                  A calm, structured registry that blends modern workflows with trusted compliance. Each step is documented, auditable, and visible by all stakeholders.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {quickActions.map((action) => (
                  <a
                    key={action.label}
                    href={action.href}
                    className="inline-flex items-center gap-2 rounded-[14px] border border-[#E0E5EC] bg-white px-5 py-3 text-sm font-semibold text-[#1A1A1A] shadow-sm transition hover:border-[#00A86B] hover:text-[#00A86B]"
                  >
                    {action.label}
                    <ArrowSvg className="h-3 w-3 text-[#00A86B]" />
                  </a>
                ))}
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[16px] border border-[#E0E5EC] bg-[#F7F9FC] px-4 py-4 shadow-sm"
                  >
                    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#0066CC]">{stat.label}</p>
                    <p className="text-2xl font-semibold text-[#1A1A1A]">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="mt-6 grid gap-3 rounded-[18px] border border-[#E0E5EC] bg-white px-4 py-4 shadow-sm sm:grid-cols-2">
                {statusIndicators.map((indicator) => (
                  <div key={indicator.label} className="flex items-center gap-3 rounded-[12px] border border-[#E0E5EC] bg-[#F7F9FC] px-3 py-2">
                    <span
                      className="h-2.5 w-2.5 rounded-full"
                      style={{ backgroundColor: indicator.color }}
                    />
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#1A1A1A]/70">
                        {indicator.label}
                      </p>
                      <p className="text-sm font-semibold text-[#1A1A1A]">{indicator.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full max-w-xl">
              <div className="relative overflow-hidden rounded-[20px] border border-white/80 bg-gradient-to-br from-white via-[#F7FAFD] to-white p-[1px] shadow-[0_25px_45px_rgba(15,23,42,0.08)]">
                <div className="relative rounded-[18px] bg-white px-8 py-9">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[#00A86B]">Live review</p>
                      <h2 className="text-2xl font-semibold text-[#1A1A1A]">Registration snapshot</h2>
                    </div>
                    <span className="rounded-full bg-[#00A86B]/10 px-3 py-1 text-xs font-semibold text-[#00A86B]">
                      Official
                    </span>
                  </div>
                  <div className="mt-8 space-y-4 text-sm text-[#1A1A1A]/80">
                    {[
                      { label: "Owner identity", status: "Verified" },
                      { label: "Property details", status: "Complete" },
                      { label: "Documents", status: "Awaiting" },
                      { label: "Official review", status: "Queued" },
                    ].map((item, index) => (
                      <div key={item.label} className="flex items-center justify-between rounded-[14px] border border-[#E0E5EC] px-4 py-3">
                        <div className="flex items-center gap-3">
                          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#0066CC]/10 text-sm font-semibold text-[#0066CC]">
                            {index + 1}
                          </span>
                          <p className="text-sm font-semibold text-[#1A1A1A]">{item.label}</p>
                        </div>
                        <span className="text-xs font-semibold text-[#00A86B]">{item.status}</span>
                      </div>
                    ))}
                  </div>
                  <p className="mt-6 rounded-[12px] border border-[#E0E5EC] bg-[#F7F9FC] px-4 py-3 text-xs font-semibold text-[#1A1A1A]">
                    Real-time tracking keeps every stakeholder aligned. Upload once, notify instantly, and stay ahead of deadlines.
                  </p>
                </div>
                <div className="pointer-events-none absolute -right-8 -top-8 h-32 w-32 rounded-full bg-[#0066CC]/10 blur-3xl" />
                <div className="pointer-events-none absolute -bottom-10 -left-6 h-36 w-36 rounded-full bg-[#00A86B]/10 blur-3xl" />
              </div>
            </div>
          </div>
        </header>

        <section className="mt-10 rounded-[16px] border border-[#E0E5EC] bg-white p-8 shadow-[0_25px_45px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0066CC]">Momentum highlights</p>
              <h3 className="text-3xl font-semibold text-[#1A1A1A]">Modern controls that keep registration sprints on track.</h3>
            </div>
            <a
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-[14px] border border-[#E0E5EC] px-5 py-3 text-sm font-semibold text-[#0066CC] transition hover:border-[#00A86B] hover:text-[#00A86B]"
            >
              View live operations
              <ArrowSvg className="h-3 w-3" />
            </a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {highlightCards.map((card) => (
              <div
                key={card.title}
                className="group flex flex-col justify-between rounded-[16px] border border-[#E0E5EC] bg-white p-6 shadow-sm transition hover:-translate-y-1"
              >
                <div className={`rounded-[16px] bg-gradient-to-br ${card.accent} p-4 text-white`}>
                  <p className="text-xs font-semibold uppercase tracking-[0.4em]">{card.title}</p>
                  <p className="text-2xl font-semibold">{card.value}</p>
                </div>
                <p className="mt-4 text-sm text-[#1A1A1A]/70">{card.copy}</p>
                <div className="mt-6 flex items-center justify-between text-xs font-semibold text-[#0066CC]">
                  <span>Powered by data</span>
                  <ArrowSvg className="h-3 w-3" />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[16px] border border-[#E0E5EC] bg-white p-8 shadow-[0_25px_45px_rgba(15,23,42,0.08)]" id="how-it-works">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0066CC]">Why choose us</p>
              <h3 className="text-3xl font-semibold text-[#1A1A1A]">
                Built for <span className="text-[#00A86B]">clarity and trust</span>
              </h3>
            </div>
            <a
              href="/dashboard"
              className="inline-flex items-center gap-2 rounded-[14px] border border-[#E0E5EC] px-5 py-3 text-sm font-semibold text-[#0066CC] transition hover:border-[#00A86B] hover:text-[#00A86B]"
            >
              Explore dashboard
              <ArrowSvg className="h-3 w-3" />
            </a>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featureCards.map((card) => (
              <div
                key={card.title}
                className="flex h-full flex-col gap-4 rounded-[16px] border border-[#E0E5EC] bg-[#F7F9FC] p-6 shadow-sm"
              >
                <div className="h-12 w-12 rounded-full bg-[#0066CC]/10 text-center text-lg font-semibold text-[#0066CC]">
                  {card.title.charAt(0)}
                </div>
                <h4 className="text-xl font-semibold text-[#1A1A1A]">{card.title}</h4>
                <p className="text-sm text-[#1A1A1A]/70">{card.body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[16px] border border-[#E0E5EC] bg-white p-8 shadow-[0_25px_45px_rgba(15,23,42,0.08)]">
          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="space-y-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0066CC]">How it works</p>
                <h3 className="text-3xl font-semibold text-[#1A1A1A]">
                  Three simple steps to <span className="text-[#00A86B]">register with confidence</span>
                </h3>
                <p className="mt-2 text-sm text-[#1A1A1A]/70">
                  Each phase is transparent, verified, and tracked so you never lose momentum.
                </p>
              </div>

              <div className="space-y-4">
                {roadmapSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="flex items-start gap-4 rounded-[16px] border border-[#E0E5EC] bg-[#F7F9FC] p-5 shadow-sm"
                  >
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#0066CC]/10 text-lg font-semibold text-[#0066CC]">
                      {index + 1}
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#1A1A1A]">{step.title}</h4>
                      <p className="text-sm text-[#1A1A1A]/70">{step.copy}</p>
                    </div>
                    <span className="ml-auto hidden text-xs font-semibold text-[#00A86B] lg:inline">Step {index + 1}</span>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="relative overflow-hidden rounded-[20px] border border-[#E0E5EC] bg-[#F7F9FC] p-8 shadow-sm">
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#00A86B]/10 blur-3xl" />
                <div className="absolute -bottom-12 -left-8 h-32 w-32 rounded-full bg-[#0066CC]/10 blur-3xl" />
                <div className="relative space-y-6">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-[#1A1A1A]">Official review</span>
                    <span className="rounded-full border border-[#00A86B] px-3 py-1 text-xs font-semibold text-[#00A86B]">
                      Assigned
                    </span>
                  </div>
                  <div className="space-y-4">
                    {testimonials.map((testimonial, index) => (
                      <div
                        key={index}
                        className="rounded-[14px] border border-[#E0E5EC] bg-white/80 p-4 shadow-sm"
                      >
                        <p className="text-sm italic text-[#1A1A1A]/70">&ldquo;{testimonial.quote}&rdquo;</p>
                        <div className="mt-3 flex items-center justify-between">
                          <div>
                            <p className="text-sm font-semibold text-[#1A1A1A]">{testimonial.author}</p>
                            <p className="text-xs text-[#0066CC]">{testimonial.role}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            {[...Array(testimonial.rating)].map((_, starId) => (
                              <Star key={starId} className="h-3 w-3 text-[#F2C94C]" />
                            ))}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-16 rounded-[16px] border border-[#E0E5EC] bg-white p-8 shadow-[0_25px_45px_rgba(15,23,42,0.08)]" id="team">
          <div className="space-y-4">
            <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0066CC]">Team Developers</p>
            <h3 className="text-3xl font-semibold text-[#1A1A1A]">
              Committed to <span className="text-[#00A86B]">trustworthy releases</span>
            </h3>
            <p className="text-sm text-[#1A1A1A]/70">
              Our developers blend policy, engineering, and operations to deliver a public registry that stays reliable and compliant.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="group relative overflow-hidden rounded-[16px] border border-[#E0E5EC] bg-[#F7F9FC] p-6 shadow-sm transition hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div className={`${member.avatarColor} h-12 w-12 rounded-full`} />
                  <div>
                    <p className="text-lg font-semibold text-[#1A1A1A]">{member.name}</p>
                    <p className="text-sm font-semibold text-[#0066CC]">{member.title}</p>
                  </div>
                </div>
                <p className="mt-4 text-sm text-[#1A1A1A]/70">{member.focus}</p>
                <span className="absolute bottom-4 right-4 text-xs font-semibold text-[#00A86B] opacity-0 transition group-hover:opacity-100">
                  Team
                </span>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 rounded-[16px] border border-[#E0E5EC] bg-white p-8 shadow-[0_25px_45px_rgba(15,23,42,0.08)]">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#0066CC]">Resources</p>
              <h3 className="text-3xl font-semibold text-[#1A1A1A]">Add these references to every rollout.</h3>
            </div>
            <a
              href="/support"
              className="text-sm font-semibold text-[#0066CC] underline-offset-4 hover:underline"
            >
              Visit support hub
            </a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {resourceLinks.map((resource) => (
              <a
                key={resource.label}
                href={resource.href}
                className="group flex h-full flex-col justify-between rounded-[16px] border border-[#E0E5EC] p-6 transition hover:shadow-lg"
              >
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-[#00A86B]">{resource.label}</p>
                  <p className="mt-2 text-base font-semibold text-[#1A1A1A]">{resource.description}</p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-[#0066CC]">
                  Explore
                  <ArrowSvg className="h-3 w-3" />
                </div>
              </a>
            ))}
          </div>
        </section>

        <section
          id="get-started"
          className="mt-16 overflow-hidden rounded-[20px] border border-transparent bg-gradient-to-r from-[#0066CC] via-[#00A86B] to-[#00A86B] p-8 shadow-[0_25px_45px_rgba(15,23,42,0.25)]"
        >
          <div className="absolute inset-0 opacity-10" />
          <div className="relative flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/80">Get started</p>
              <h3 className="text-3xl font-semibold text-white">Bring clarity to your next registration.</h3>
              <p className="text-sm text-white/90">
                Create an account, invite officials, and keep every milestone transparent for owners, teams, and authorities.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href="/auth/register"
                className="flex items-center gap-2 rounded-[14px] bg-white px-6 py-3 text-sm font-semibold text-[#0066CC] shadow-lg shadow-[#001F3F]/30"
              >
                Create account
                <ArrowSvg className="h-4 w-4" />
              </a>
              <a
                href="/auth/login"
                className="flex items-center gap-2 rounded-[14px] border border-white/60 px-6 py-3 text-sm font-semibold text-white"
              >
                Sign in
                <ArrowSvg className="h-4 w-4 text-white" />
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
