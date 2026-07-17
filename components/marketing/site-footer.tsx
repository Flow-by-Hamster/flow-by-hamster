import Image from "next/image";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e7e2d8] bg-[#fcfaf7] px-4 py-12 sm:px-6 lg:px-10">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        
        {/* Company Credit */}
        <div className="flex items-center gap-3 max-w-md">
        <Image
          src="/logos/hamster_icon-nobg.png"
          alt="Hamster logo"
          width={40}
          height={40}
          className="shrink-0 opacity-70"
        />
        <div className="space-y-0.5 text-left">
          <p className="text-xs text-[#6f6b63] leading-relaxed">
            Designed and built by <span className="font-medium text-[#171717]">Hamster Technologies</span>.
          </p>
          <p className="text-[11px] text-[#9c968e] leading-relaxed">
            Engineered to scale operational structure across African service markets.
          </p>
        </div>
      </div>

        {/* Right Side: Legal & Copyright Links */}
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#9c968e]">
          <Link href="/terms" className="hover:text-[#171717] transition-colors">
            Terms & Conditions
          </Link>
          <Link href="/privacy" className="hover:text-[#171717] transition-colors">
            Privacy Policy
          </Link>
          <span className="text-[#e7e2d8] hidden sm:inline">|</span>
          <p>© 2026 Hamster Technologies Ltd.</p>
        </div>

      </div>
    </footer>
  );
}