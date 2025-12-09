export default function PropertyCard({ title }: { title: string }) {
  return (
    <article className="rounded-[16px] border border-[#E0E5EC] p-4">
      <h3 className="text-lg font-semibold text-[#1A1A1A]">{title}</h3>
      <p className="text-sm text-[#1A1A1A]/70">Property details and owner information.</p>
    </article>
  );
}
