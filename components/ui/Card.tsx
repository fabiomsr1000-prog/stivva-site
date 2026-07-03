import type { ReactNode } from "react";

type CardProps = {
  className?: string;
  children: ReactNode;
  hover?: boolean;
};

export function Card({ className = "", children, hover = false }: CardProps) {
  return (
    <div
      className={`gborder rounded-2xl ${
        hover
          ? "gborder-hover transition-transform duration-300 hover:-translate-y-1 motion-reduce:hover:translate-y-0"
          : ""
      } ${className}`}
    >
      {children}
    </div>
  );
}
