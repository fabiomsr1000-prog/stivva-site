import type { ReactNode } from "react";

export function Badge({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-2.5 text-sm text-white/75 transition-colors hover:border-accent/40 hover:text-white ${className}`}
    >
      {children}
    </span>
  );
}
