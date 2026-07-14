"use client";

const AVATARS = [
  { initials: "AK", bg: "#9FE1CB", color: "#085041" },
  { initials: "TF", bg: "#FAC775", color: "#633806" },
  { initials: "OB", bg: "#CECBF6", color: "#3C3489" },
  { initials: "NJ", bg: "#F4C0D1", color: "#72243E" },
];

export default function Hero() {
  return (
    <section className="flex flex-col items-center text-center pt-[72px] pb-14 px-10 max-w-[640px] mx-auto">
      {/* Eyebrow */}
      <div className="badge-coral mb-7">
        <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
          <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
        </svg>
        Built for African service businesses
      </div>

      {/* Headline */}
      <h1 className="font-serif text-[52px] leading-[1.1] tracking-[-1.5px] mb-5 font-normal">
        Run your services,{" "}
        <em className="italic text-[#993C1D]">beautifully.</em>
      </h1>

      {/* Subheading */}
      <p className="text-base leading-[1.7] text-[#888780] mb-9 font-light">
        Bookings, payments, clients, and your team — all in one place. From
        salons to law firms, Hamster gives every service business a professional
        home online.
      </p>

      {/* CTAs */}
      <div className="flex gap-3 flex-wrap justify-center">
        <button className="btn-primary px-7 py-3 text-sm">
          Start for free →
        </button>
        <button className="btn-outline px-7 py-3 text-sm">
          See how it works
        </button>
      </div>

      {/* Social proof */}
      <div className="flex items-center gap-2 mt-8">
        <div className="flex">
          {AVATARS.map((a, i) => (
            <div
              key={a.initials}
              className="w-7 h-7 rounded-full border-2 border-white flex items-center justify-center text-[10px] font-medium"
              style={{
                background: a.bg,
                color: a.color,
                marginLeft: i === 0 ? 0 : -8,
              }}
            >
              {a.initials}
            </div>
          ))}
        </div>
        <p className="text-sm text-[#888780]">
          Trusted by <strong className="text-[#2C2C2A]">2,400+</strong>{" "}
          businesses across Nigeria &amp; Ghana
        </p>
      </div>
    </section>
  );
}
