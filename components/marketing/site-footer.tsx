import Image from "next/image";
import Link from "next/link";

const footerLinks = [
  { label: "Features", href: "#features" },
  { label: "Founder", href: "#founder" },
  { label: "Blog", href: "#blog" },
  { label: "Join Waitlist", href: "/waitlist" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-[#e7e2d8] bg-[#fcfaf7] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logos/flow_by_ham_nobg.png"
              alt="Flow logo"
              width={132}
              height={40}
              priority
            />
          </div>
          <p className="max-w-md text-base leading-7 text-[#6f6b63]">
            Run your services beautifully.
          </p>
          <p className="max-w-md text-base leading-7 text-[#6f6b63]">
            Professional booking and business operations for African service businesses.
          </p>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#171717]">
            Product
          </h3>
          <ul className="space-y-3 text-sm text-[#6f6b63]">
            {footerLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="transition-colors hover:text-[#171717]">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-[0.24em] text-[#171717]">
            Company
          </h3>
          <div className="flex items-center gap-3">
            <Image
              src="/logos/hamster_icon-nobg.png"
              alt="Hamster logo"
              width={40}
              height={40}
              className="shrink-0"
            />
            <p className="text-sm leading-7 text-[#6f6b63]">
              Designed and built by Hamster Technologies.
            </p>
          </div>
          <p className="mt-3 text-sm leading-7 text-[#6f6b63]">
            Creating software that helps African businesses operate beautifully.
          </p>
        </div>
      </div>

      <div className="mx-auto mt-12 flex max-w-6xl flex-col gap-2 border-t border-[#e7e2d8] pt-6 text-sm text-[#8c877d] sm:flex-row sm:items-center sm:justify-between">
        <p>© 2026 Hamster Technologies Ltd.</p>
      </div>
    </footer>
  );
}
