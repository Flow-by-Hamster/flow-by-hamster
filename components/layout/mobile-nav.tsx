"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileDrawer } from "@/components/ui/mobile-drawer";

const links = [
  { label: "Join Waitlist", href: "/waitlist" },
  { label: "Features", href: "/features" },
  { label: "Careers", href: "/careers" },
  { label: "Blog", href: "/blog" },
];

export function MobileNav({
  isOpen,
  onOpen,
  onClose,
}: {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}) {
  const pathname = usePathname();

  return (
    <>
      <button
        type="button"
        onClick={onOpen}
        className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e7e2d8] text-lg text-[#171717] lg:hidden"
        aria-label="Open navigation menu"
      >
        ☰
      </button>

      <MobileDrawer
        isOpen={isOpen}
        onClose={onClose}
        title="Menu"
      >
        <div className="flex flex-col h-[calc(100dvh-120px)] justify-between overflow-hidden">
          
          {/* Top Links Section */}
          <nav className="flex flex-col gap-2 flex-1 overflow-y-auto">
            {links.map((link) => {
              const isActive = 
                pathname === link.href || 
                (link.href !== "/" && pathname.startsWith(`${link.href}/`));

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={onClose}
                  className={`flex items-center justify-between rounded-xl px-3 py-3 text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-[#f7f5f0] text-[#943333]"
                      : "text-[#171717] hover:bg-[#f7f5f0]"
                  }`}
                >
                  <span>{link.label}</span>
                  
                  {isActive && (
                    <span className="h-1.5 w-1.5 rounded-full bg-[#943333]" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Footer Placement for The Blueprint */}
          <div className="mt-auto border-t border-[#f4efe8] pt-4 bg-white">
            <Link
              href="/how-it-works"
              onClick={onClose}
              className="flex items-center justify-center rounded-full border border-[#e7e2d8] px-4 py-3 text-sm font-semibold text-[#171717] transition-colors hover:bg-[#f7f5f0]"
            >
              The Blueprint
            </Link>
          </div>

        </div>
      </MobileDrawer>
    </>
  );
}