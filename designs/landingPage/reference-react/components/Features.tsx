const FEATURES = [
  {
    icon: "✓",
    bg: "#E1F5EE",
    color: "#0F6E56",
    title: "Smart scheduling",
    desc: "Availability management, auto conflict prevention, and calendar sync.",
  },
  {
    icon: "💳",
    bg: "#FAECE7",
    color: "#993C1D",
    title: "Payments & invoicing",
    desc: "Accept deposits or full payments via Paystack, Flutterwave, and more.",
  },
  {
    icon: "🔔",
    bg: "#FAEEDA",
    color: "#854F0B",
    title: "Auto reminders",
    desc: "SMS and email reminders that cut no-shows by up to 60%.",
  },
  {
    icon: "👥",
    bg: "#EEEDFE",
    color: "#534AB7",
    title: "Client CRM",
    desc: "Full booking history, notes, and contact details for every client.",
  },
  {
    icon: "📈",
    bg: "#E1F5EE",
    color: "#0F6E56",
    title: "Business analytics",
    desc: "Revenue trends, top services, busiest periods at a glance.",
  },
  {
    icon: "🏢",
    bg: "#F1EFE8",
    color: "#5F5E5A",
    title: "Team management",
    desc: "Add staff, assign services, and set individual schedules and permissions.",
  },
];

export default function Features() {
  return (
    <section className="section-container">
      <p className="text-xs font-medium tracking-[0.08em] uppercase text-[#888780] mb-3">
        Everything you need
      </p>
      <h2 className="font-serif text-4xl font-normal tracking-tight leading-[1.15] mb-4">
        Your whole business,{" "}
        <em className="italic text-[#993C1D]">in one tab.</em>
      </h2>
      <p className="text-[15px] text-[#888780] font-light leading-[1.7] max-w-[420px] mb-10">
        No more juggling WhatsApp, spreadsheets, and cash. Hamster brings
        structure without the corporate complexity.
      </p>

      <div className="grid gap-4" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))" }}>
        {FEATURES.map((f) => (
          <div
            key={f.title}
            className="bg-white border border-black/10 rounded-2xl p-5"
          >
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center mb-3.5 text-lg"
              style={{ background: f.bg, color: f.color }}
            >
              {f.icon}
            </div>
            <h4 className="text-sm font-medium mb-1.5">{f.title}</h4>
            <p className="text-[13px] text-[#888780] leading-[1.5] m-0">{f.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
