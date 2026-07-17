import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";

// Configured as objects to support distinct paths for each navigation target
const navLinks = [
  { label: "Features", href: "/features" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

export function DesktopNav() {
  return (
    <div className="hidden items-center gap-7 lg:flex">
      {navLinks.map((link) => (
        <Link 
          key={link.label} 
          href={link.href} 
          className="text-sm text-[#6f6b63] transition-colors hover:text-[#171717]"
        >
          {link.label}
        </Link>
      ))}
    </div>
  );
}