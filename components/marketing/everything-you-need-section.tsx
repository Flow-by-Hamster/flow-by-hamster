const features = [
  {
    icon: "✓",
    bg: "#e1f5ee",
    color: "#0f6e56",
    title: "Booking Management",
    description: "Schedule, reschedule, and manage appointments from one calendar.",
  },
  {
    icon: "👥",
    bg: "#faece7",
    color: "#993c1d",
    title: "Customer CRM",
    description: "Every booking automatically becomes a customer record.",
  },
  {
    icon: "🛠",
    bg: "#faeeda",
    color: "#854f0b",
    title: "Service Catalog",
    description: "Manage services, pricing, duration, and availability.",
  },
  {
    icon: "🌐",
    bg: "#eeedfe",
    color: "#534ab7",
    title: "Business Website",
    description: "Publish a professional website and booking page in minutes.",
  },
  {
    icon: "⚡",
    bg: "#e1f5ee",
    color: "#0f6e56",
    title: "Automations",
    description: "Welcome messages, reminders, follow-ups, review requests, and win-back campaigns.",
  },
  {
    icon: "📊",
    bg: "#f1efe8",
    color: "#5f5e5a",
    title: "Business Dashboard",
    description: "View today's schedule, revenue snapshot, and recent activity.",
  },
];

function FeatureCard({
  icon,
  bg,
  color,
  title,
  description,
}: {
  icon: string;
  bg: string;
  color: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-[24px] border border-[#e7e2d8] bg-white p-5 shadow-[0_18px_44px_rgba(15,23,42,0.04)]">
      <div
        className="mb-3.5 flex h-10 w-10 items-center justify-center rounded-xl text-lg"
        style={{ backgroundColor: bg, color }}
      >
        {icon}
      </div>
      <h3 className="mb-2 text-sm font-semibold text-[#171717]">{title}</h3>
      <p className="text-sm leading-6 text-[#6f6b63]">{description}</p>
    </div>
  );
}

export function EverythingYouNeedSection() {
  return (
    <section className="mx-4 px-2 pb-20 sm:mx-6 lg:mx-10 lg:pb-24">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#8c877d]">
          Everything you need
        </p>
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#171717] sm:text-4xl lg:text-[42px]">
          Your whole business, <span className="italic text-[#943333]">in one tab.</span>
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-[#6f6b63] sm:text-lg">
          No more juggling WhatsApp, spreadsheets, and cash. Flow brings structure without the friction of a traditional platform.
        </p>

        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
