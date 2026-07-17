"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ButtonLink } from "@/components/ui/button";
import { DesktopNav } from "@/components/layout/desktop-nav";
import { MobileNav } from "@/components/layout/mobile-nav";

export function SiteHeader() {
  const [isSiteMenuOpen, setIsSiteMenuOpen] = useState(false);
  const pathname = usePathname();

  const isWaitlistPage = pathname === "/waitlist";
  const isFeaturesPage = pathname === "/features";
  const isHowItWorksPage = pathname === "/how-it-works";

  useEffect(() => {
    if (!isSiteMenuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSiteMenuOpen(false);
      }
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [isSiteMenuOpen]);

  return (
    <header 
      className={
        isWaitlistPage
          ? "relative z-20 bg-transparent border-b border-[#e7e2d8]/60"
          : "sticky top-0 z-20 border-b border-black/10 bg-white/90 backdrop-blur-xl"
      }
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-10">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-[#171717]">
          <Image src="/logos/flow_by_ham_nobg.png" alt="Flow logo" width={116} height={34} priority />
        </Link>

        <DesktopNav />
        <MobileNav isOpen={isSiteMenuOpen} onOpen={() => setIsSiteMenuOpen(true)} onClose={() => setIsSiteMenuOpen(false)} />

        <div className="hidden items-center gap-2 sm:gap-3 lg:flex min-w-[240px] justify-end">
          {/* Waitlist View: Premium Feature exploration gateway */}
          {isWaitlistPage && (
            <ButtonLink href="/features" variant="secondary">
              Explore Features
            </ButtonLink>
          )}

          {/* Features View: Only route directly to high-intent conversion actions */}
          {isFeaturesPage && (
            <>
              <ButtonLink href="/waitlist" variant="primary">
                Join Waitlist
              </ButtonLink>
              <ButtonLink href="/how-it-works" variant="secondary" className="hidden sm:inline-flex">
                The Blueprint
              </ButtonLink>
            </>
          )}

          {/* How It Works View: Hide secondary action button completely to avoid loops */}
          {isHowItWorksPage && (
            <ButtonLink href="/waitlist" variant="primary">
              Join Waitlist
            </ButtonLink>
          )}

          {/* Core Landing Page / Standard Global State */}
          {!isWaitlistPage && !isFeaturesPage && !isHowItWorksPage && (
            <>
              <ButtonLink href="/waitlist" variant="primary">
                Join Waitlist
              </ButtonLink>
              <ButtonLink href="/how-it-works" variant="secondary" className="hidden sm:inline-flex">
                The Blueprint
              </ButtonLink>
            </>
          )}
        </div>
      </nav>
    </header>
  );
}