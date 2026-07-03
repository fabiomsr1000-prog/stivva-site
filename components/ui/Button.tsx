import type { ReactNode } from "react";

type ButtonProps = {
  href: string;
  variant?: "primary" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
  children: ReactNode;
  ariaLabel?: string;
};

const sizes: Record<NonNullable<ButtonProps["size"]>, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
  xl: "px-9 py-4 text-base md:px-10 md:py-5 md:text-lg",
};

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "bg-accent font-semibold text-[#05130a] shadow-[0_8px_30px_-10px_rgba(34,197,94,0.6)] hover:bg-[#33d96e] hover:shadow-[0_10px_40px_-8px_rgba(34,197,94,0.7)] active:scale-[0.98] motion-reduce:active:scale-100",
  ghost:
    "border border-white/15 font-medium text-white/85 hover:border-white/35 hover:bg-white/[0.04] hover:text-white",
};

export function Button({
  href,
  variant = "primary",
  size = "md",
  className = "",
  children,
  ariaLabel,
}: ButtonProps) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`inline-flex items-center justify-center gap-2 rounded-full text-center transition-all duration-200 ${sizes[size]} ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}
