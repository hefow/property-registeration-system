import { ReactNode } from "react";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[#F7F9FC]">
      <div className="mx-auto flex min-h-screen max-w-6xl gap-6 px-6 py-8">
        <aside className="w-60 rounded-[18px] border border-[#E0E5EC] bg-white p-4 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.4em] text-[#0066CC]">Dashboard</p>
          <p className="mt-3 text-sm text-[#1A1A1A]/70">Quick links, filters, and status.</p>
        </aside>
        <section className="flex-1 rounded-[18px] border border-[#E0E5EC] bg-white p-6 shadow-sm">{children}</section>
      </div>
    </div>
  );
}
