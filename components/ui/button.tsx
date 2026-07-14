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
      "bg-[#d94f24] text-white shadow-[0_12px_30px_rgba(217,79,36,0.18)] hover:bg-[#c5441f]",
    secondary:
      "border border-[#1f1f1f]/15 bg-white text-[#1f1f1f] hover:bg-[#f5efe7]",
  };

  return (
    <Link href={href} className={`${baseClasses} ${variants[variant]} ${className}`}>
      {children}
    </Link>
  );
}
