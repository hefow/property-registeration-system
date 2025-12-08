import { ReactNode } from "react";

export default function Button({ children }: { children: ReactNode }) {
  return (
    <button className="rounded-[14px] bg-[#0066CC] px-4 py-2 text-sm font-semibold text-white">
      {children}
    </button>
  );
}
