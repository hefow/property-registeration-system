export default function RegistrationDetailsPage({ params }: { params: { id: string } }) {
  const { id } = params;

  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-[#1A1A1A]">Registration {id}</h1>
      <p className="text-sm text-[#1A1A1A]/70">Detailed status, documents, and assigned officials.</p>
    </div>
  );
}
