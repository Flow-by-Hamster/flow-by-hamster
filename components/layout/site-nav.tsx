import Image from "next/image";
import Link from "next/link";
import { ButtonLink } from "@/components/ui/button";

const navLinks = ["Features", "Founder", "Blog"];

export function SiteNav() {
  return (
    <header className="sticky top-0 z-20 border-b border-black/10 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Link href="/" className="flex items-center gap-3 text-lg font-semibold tracking-tight text-[#171717]">
          <Image src="/logos/flow_by_ham_nobg.png" alt="Flow logo" width={116} height={34} priority />
        </Link>

        <div className="hidden items-center gap-7 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link}
              href="/"
              className="text-sm text-[#6f6b63] transition-colors hover:text-[#171717]"
            >
              {link}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ButtonLink href="/waitlist" variant="primary">
            Join Waitlist
          </ButtonLink>
          <ButtonLink href="#how-it-works" variant="secondary" className="hidden sm:inline-flex">
            See how it works
          </ButtonLink>
        </div>
      </nav>
    </header>
  );
}
