export default function RegistryDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="space-y-3">
      <h1 className="text-2xl font-semibold text-[#1A1A1A]">Property {id}</h1>
      <p className="text-sm text-[#1A1A1A]/70">Owner, history, and public notes.</p>
    </div>
  );
}
