export default function PageHeader({ title, description }: { title: string; description: string }) {
  return (
    <header className="space-y-2">
      <h1 className="text-2xl font-semibold text-[#1A1A1A]">{title}</h1>
      <p className="text-sm text-[#1A1A1A]/70">{description}</p>
    </header>
  );
}
