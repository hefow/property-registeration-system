export default function EmptyState({ message }: { message: string }) {
  return (
    <div className="rounded-[16px] border border-dashed border-[#E0E5EC] p-6 text-center text-sm text-[#1A1A1A]/70">
      {message}
    </div>
  );
}
