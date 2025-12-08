export default function RegistrationCard({ id }: { id: string }) {
  return (
    <article className="rounded-[16px] border border-[#E0E5EC] p-4">
      <h3 className="text-lg font-semibold text-[#1A1A1A]">Registration {id}</h3>
      <p className="text-sm text-[#1A1A1A]/70">Status, documents, and assigned officials.</p>
    </article>
  );
}
