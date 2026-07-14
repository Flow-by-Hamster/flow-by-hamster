const TESTIMONIALS = [
  {
    quote:
      "Before Hamster, I was managing bookings in a WhatsApp group. Now everything is automatic and my no-shows dropped by half.",
    name: "Tola M.",
    biz: "Glow Studio, Lagos",
    initials: "TM",
    bg: "#9FE1CB",
    color: "#085041",
  },
  {
    quote:
      "The payment integration with Paystack was seamless. I now collect deposits before every appointment. Game changer.",
    name: "Adeola K.",
    biz: "AK Consulting, Abuja",
    initials: "AK",
    bg: "#FAC775",
    color: "#633806",
  },
  {
    quote:
      "We manage 6 staff and 3 locations. Hamster makes it feel simple. The dashboard shows me everything I need every morning.",
    name: "Obinna B.",
    biz: "FitLife Gym, Port Harcourt",
    initials: "OB",
    bg: "#CECBF6",
    color: "#3C3489",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#F8F7F4] px-10 py-[60px]">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-xs font-medium tracking-[0.08em] uppercase text-[#888780] mb-3">
          From real businesses
        </p>
        <h2 className="font-serif text-4xl font-normal tracking-tight leading-[1.15] mb-10">
          They switched to Hamster.{" "}
          <em className="italic text-[#993C1D]">Here&apos;s what happened.</em>
        </h2>

        <div
          className="grid gap-4"
          style={{ gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))" }}
        >
          {TESTIMONIALS.map((t) => (
            <div
              key={t.name}
              className="bg-white border border-black/10 rounded-2xl p-5"
            >
              <div className="text-[#BA7517] text-sm mb-2.5">★★★★★</div>
              <p className="text-[13px] leading-[1.6] text-[#888780] mb-3.5">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-[11px] font-medium"
                  style={{ background: t.bg, color: t.color }}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="text-xs font-medium">{t.name}</div>
                  <div className="text-[11px] text-[#888780]">{t.biz}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
