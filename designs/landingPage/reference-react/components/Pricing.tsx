const PLANS = [
  {
    name: "Starter",
    price: "Free",
    priceNote: "forever",
    desc: "Perfect for solo providers just getting started.",
    features: [
      "Up to 30 bookings/mo",
      "1 service listing",
      "Client profiles",
      "Booking page",
    ],
    featured: false,
    cta: "Get started",
  },
  {
    name: "Growth",
    price: "₦9,900",
    priceNote: "/ month",
    desc: "For growing businesses ready to automate everything.",
    features: [
      "Unlimited bookings",
      "Up to 10 services",
      "SMS/email reminders",
      "Payments & invoicing",
      "Analytics dashboard",
    ],
    featured: true,
    cta: "Start free trial",
  },
  {
    name: "Business",
    price: "₦24,900",
    priceNote: "/ month",
    desc: "Multi-staff, multi-location, and advanced reporting.",
    features: [
      "Everything in Growth",
      "Team management",
      "Multi-location",
      "API & integrations",
      "Priority support",
    ],
    featured: false,
    cta: "Contact sales",
  },
];

export default function Pricing() {
  return (
    <section className="section-container">
      <p className="text-xs font-medium tracking-[0.08em] uppercase text-[#888780] mb-3">
        Pricing
      </p>
      <h2 className="font-serif text-4xl font-normal tracking-tight mb-2">
        Simple, <em className="italic text-[#993C1D]">honest</em> pricing.
      </h2>
      <p className="text-[15px] text-[#888780] font-light mb-0">
        No hidden fees. Cancel any time.
      </p>

      <div
        className="grid gap-4 mt-10"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(190px, 1fr))" }}
      >
        {PLANS.map((plan) => (
          <div
            key={plan.name}
            className="bg-white rounded-2xl p-6"
            style={{
              border: plan.featured
                ? "1.5px solid #D85A30"
                : "0.5px solid rgba(0,0,0,0.1)",
            }}
          >
            {plan.featured && (
              <span className="inline-block text-[11px] font-medium bg-[#FAECE7] text-[#993C1D] rounded-full px-2.5 py-1 mb-3">
                Most popular
              </span>
            )}
            <div className="text-[15px] font-medium mb-1">{plan.name}</div>
            <div className="font-serif text-[32px] tracking-tight my-3">
              {plan.price}{" "}
              <span className="font-sans text-[13px] font-normal text-[#888780]">
                {plan.priceNote}
              </span>
            </div>
            <p className="text-[13px] text-[#888780] leading-[1.5] mb-5">
              {plan.desc}
            </p>

            <ul className="list-none p-0 mb-6 space-y-0">
              {plan.features.map((f) => (
                <li
                  key={f}
                  className="text-[13px] py-1.5 border-b border-black/10 flex items-center gap-2 text-[#888780]"
                >
                  <span className="text-[#1D9E75] font-bold text-xs">✓</span>
                  {f}
                </li>
              ))}
            </ul>

            <button
              className={`w-full py-2.5 rounded-full text-[13px] font-medium cursor-pointer transition-colors ${
                plan.featured
                  ? "bg-[#2C2C2A] text-[#F1EFE8] border-none hover:bg-[#444441]"
                  : "bg-transparent text-[#2C2C2A] border border-black/20 hover:bg-[#F1EFE8]"
              }`}
            >
              {plan.cta}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
