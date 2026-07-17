"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MobileDrawer } from "@/components/ui/mobile-drawer";

const links = [
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

  const isWaitlistPage = pathname === "/waitlist";
  const isFeaturesPage = pathname === "/features";
  const isHowItWorksPage = pathname === "/how-it-works";

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
        {/* 
          Using h-[calc(100dvh-120px)] to fit perfectly without overflow.
          flex-col + flex-1 lets the bottom buttons sit firmly at the base.
        */}
        <div className="flex flex-col h-[calc(100dvh-120px)] justify-between overflow-hidden">
          
          {/* Top Links Section */}
          <nav className="flex flex-col gap-2 flex-1 overflow-y-auto">
            {links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={onClose}
                className="rounded-xl px-3 py-3 text-sm font-medium text-[#171717] transition-colors duration-300 ease-in-out hover:bg-[#f7f5f0]"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Bottom Call-to-Actions (Controlled dynamically per page view context) */}
          <div className="mt-auto border-t border-[#e7e2d8] pt-4 bg-white">
            
            {/* Waitlist View Context */}
            {isWaitlistPage && (
              <Link
                href="/features"
                onClick={onClose}
                className="flex items-center justify-center rounded-full border border-[#e7e2d8] px-4 py-3 text-sm font-semibold text-[#171717] transition-colors hover:bg-[#f7f5f0]"
              >
                Explore Features
              </Link>
            )}

            {/* Features View Context */}
            {isFeaturesPage && (
              <>
                <Link
                  href="/waitlist"
                  onClick={onClose}
                  className="mb-3 flex items-center justify-center rounded-full bg-[#d94f24] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(217,79,36,0.12)] transition-transform active:scale-95"
                >
                  Join Waitlist
                </Link>
                <Link
                  href="/how-it-works"
                  onClick={onClose}
                  className="flex items-center justify-center rounded-full border border-[#e7e2d8] px-4 py-3 text-sm font-semibold text-[#171717] transition-colors hover:bg-[#f7f5f0]"
                >
                  The Blueprint
                </Link>
              </>
            )}

            {/* How It Works View Context — Closes the loop cleanly */}
            {isHowItWorksPage && (
              <Link
                href="/waitlist"
                onClick={onClose}
                className="flex items-center justify-center rounded-full bg-[#d94f24] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(217,79,36,0.12)]"
              >
                Join Waitlist
              </Link>
            )}

            {/* Core Default Global View State */}
            {!isWaitlistPage && !isFeaturesPage && !isHowItWorksPage && (
              <>
                <Link
                  href="/waitlist"
                  onClick={onClose}
                  className="mb-3 flex items-center justify-center rounded-full bg-[#d94f24] px-4 py-3 text-sm font-semibold text-white shadow-[0_10px_26px_rgba(217,79,36,0.12)] transition-transform active:scale-95"
                >
                  Join Waitlist
                </Link>
                <Link
                  href="/how-it-works"
                  onClick={onClose}
                  className="flex items-center justify-center rounded-full border border-[#e7e2d8] px-4 py-3 text-sm font-semibold text-[#171717] transition-colors hover:bg-[#f7f5f0]"
                >
                  The Blueprint
                </Link>
              </>
            )}
          </div>

        </div>
      </MobileDrawer>
    </>
  );
}