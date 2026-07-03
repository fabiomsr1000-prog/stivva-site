import Image from "next/image";

export function BrandMark({ className = "size-7" }: { className?: string }) {
  return (
    <Image src="/logo.png" alt="" aria-hidden width={56} height={56} className={className} />
  );
}
