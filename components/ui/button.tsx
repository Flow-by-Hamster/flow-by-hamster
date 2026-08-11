import Link from "next/link";
import type { ReactNode } from "react";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
};

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: ButtonLinkProps) {
  const baseClasses =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-200";
  const variants = {
    primary:
      "bg-[#943333] text-white shadow-[0_12px_30px_rgba(217,79,36,0.18)] hover:bg-[#b83f3f]",
    secondary:
      "border border-[#1f1f1f]/15 bg-white text-[#1f1f1f] hover:bg-[#fffff]",
  };

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
