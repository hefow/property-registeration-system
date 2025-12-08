export default function StatusBadge({ label }: { label: string }) {
  return (
    <span className="rounded-full border border-[#E0E5EC] px-3 py-1 text-xs font-semibold text-[#1A1A1A]">
      {label}
    </span>
  );
}
