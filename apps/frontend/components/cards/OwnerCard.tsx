export default function OwnerCard({ owner }: { owner: string }) {
  return (
    <article className="rounded-[16px] border border-[#E0E5EC] p-4">
      <h3 className="text-lg font-semibold text-[#1A1A1A]">{owner}</h3>
      <p className="text-sm text-[#1A1A1A]/70">Owner profile and verification status.</p>
    </article>
  );
}
