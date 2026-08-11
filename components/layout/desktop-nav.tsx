"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const baseNavLinks = [
  { label: "Features", href: "/features" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

export function DesktopNav() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  // Dynamic links: Conditionally add Home to the start if we aren't on the root path
  const navLinks = isHome 
    ? baseNavLinks 
    : [{ label: "Home", href: "/" }, ...baseNavLinks];

  return (
    <div className="hidden items-center gap-7 lg:flex">
      {navLinks.map((link) => {
        // Matches exact root path OR sub-routes (e.g. /blog/some-article handles /blog cleanly)
        const isActive = 
          pathname === link.href || 
          (link.href !== "/" && pathname.startsWith(`${link.href}/`));

        return (
          <Link 
            key={link.label} 
            href={link.href} 
            className={`relative text-sm font-medium py-1 transition-colors duration-200 block group ${
              isActive 
                ? "text-[#171717]" 
                : "text-[#6f6b63] hover:text-[#171717]"
            }`}
          >
            {link.label}
            
            {/* Minimal Underline Accent Layer */}
            <span 
              className={`absolute bottom-0 left-0 h-[1.5px] bg-[#943333] transition-all duration-300 ease-out ${
                isActive 
                  ? "w-full opacity-100" 
                  : "w-0 opacity-0 group-hover:w-1/2 group-hover:opacity-50"
              }`} 
            />
          </Link>
        );
      })}
    </div>
  );
}