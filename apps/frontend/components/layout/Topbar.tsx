export default function Topbar() {
  return (
    <div className="flex items-center justify-between">
      <p className="text-sm font-semibold text-[#1A1A1A]">SafeRecord</p>
      <button className="rounded-[14px] border border-[#E0E5EC] px-3 py-1 text-xs font-semibold text-[#0066CC]">Sign out</button>
    </div>
  );
}
