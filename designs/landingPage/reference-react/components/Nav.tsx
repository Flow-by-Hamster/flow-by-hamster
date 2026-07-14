"use client";

const NAV_LINKS = ["Features", "Pricing", "For clients", "Blog"];

export default function Nav() {
  return (
    <nav className="flex items-center justify-between px-10 py-[18px] border-b border-black/10">
      {/* Logo */}
      <div className="flex items-center gap-2 font-serif text-[22px] tracking-tight">
        <span className="w-2.5 h-2.5 rounded-full bg-[#D85A30] inline-block" />
        Hamster
      </div>

      {/* Links */}
      <div className="hidden md:flex gap-7">
        {NAV_LINKS.map((link) => (
          <span
            key={link}
            className="text-sm text-[#888780] hover:text-[#2C2C2A] cursor-pointer transition-colors"
          >
            {link}
          </span>
        ))}
      </div>

      {/* CTAs */}
      <div className="flex gap-2.5">
        <button className="btn-outline px-5 py-2.5">Sign in</button>
        <button className="btn-primary px-5 py-2.5">Get started free</button>
      </div>
    </nav>
  );
}
