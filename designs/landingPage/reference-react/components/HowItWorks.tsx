const STEPS = [
  {
    num: "01",
    title: "Create your profile",
    desc: "Add your business name, services, pricing, and availability.",
  },
  {
    num: "02",
    title: "Share your link",
    desc: "Get a unique booking page to share via WhatsApp, Instagram, or anywhere.",
  },
  {
    num: "03",
    title: "Accept bookings",
    desc: "Clients book, pay, and get reminders — automatically.",
  },
  {
    num: "04",
    title: "Grow with data",
    desc: "Use your dashboard to spot trends, reward loyal clients, and scale.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-[#F8F7F4] px-10 py-[60px]">
      <div className="max-w-[1200px] mx-auto">
        <p className="text-xs font-medium tracking-[0.08em] uppercase text-[#888780] mb-3">
          How it works
        </p>
        <h2 className="font-serif text-4xl font-normal tracking-tight mb-10">
          Up and running in{" "}
          <em className="italic text-[#993C1D]">under 10 minutes.</em>
        </h2>

        <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))" }}>
          {STEPS.map((step, i) => (
            <div
              key={step.num}
              className="px-6 py-6"
              style={{
                borderRight:
                  i < STEPS.length - 1 ? "0.5px solid rgba(0,0,0,0.1)" : "none",
              }}
            >
              <div className="font-serif text-[40px] text-black/20 leading-none mb-3">
                {step.num}
              </div>
              <h4 className="text-sm font-medium mb-1.5">{step.title}</h4>
              <p className="text-[13px] text-[#888780] leading-[1.5] m-0">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
