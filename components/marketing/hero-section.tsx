import Image from "next/image";
import { ButtonLink } from "@/components/ui/button";

const avatars = [
  { initials: "AK", bg: "#9fe1cb", color: "#085041" },
  { initials: "TF", bg: "#fac775", color: "#633806" },
  { initials: "OB", bg: "#cecbf6", color: "#3c3489" },
  { initials: "NJ", bg: "#f4c0d1", color: "#72243e" },
];

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[radial-gradient(circle_at_top,_rgba(217,79,36,0.09),_transparent_55%)]">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-6 pb-24 pt-16 text-center sm:px-8 lg:px-10 lg:pb-28 lg:pt-24">
        <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#e7dfd0] bg-white/80 px-4 py-2 text-sm font-medium text-[#6f6b63] shadow-sm">
          <span className="text-[#d94f24]" aria-hidden="true">
            ⚡
          </span>
          Built for African service businesses
        </div>

        <h1 className="max-w-4xl text-5xl font-semibold leading-[0.95] tracking-[-0.03em] text-[#171717] sm:text-6xl lg:text-7xl">
          Run your services, <span className="italic text-[#b84a22]">beautifully.</span>
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-[#6f6b63] sm:text-xl">
          Bookings, payments, clients, and your team in one calm home online. Hamster gives service businesses a polished way to run their day from WhatsApp and beyond.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3 sm:gap-4">
          <ButtonLink href="/waitlist" variant="primary" className="px-6 py-3">
            Join Waitlist
          </ButtonLink>
          <ButtonLink href="#how-it-works" variant="secondary" className="px-6 py-3">
            See how it works
          </ButtonLink>
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 rounded-full border border-[#e7dfd0] bg-white/90 px-4 py-3 shadow-sm">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#faece7] p-1 text-sm text-[#d94f24]">
            <Image src="/logos/hamster_icon-nobg.png" alt="Hamster icon" width={20} height={20} />
          </div>
          <p className="text-sm text-[#6f6b63]">
            Built by <span className="font-semibold text-[#171717]">Hamster Technologies</span>, creators of software that helps African businesses operate smarter.
          </p>
        </div>
      </div>
    </section>
  );
}
