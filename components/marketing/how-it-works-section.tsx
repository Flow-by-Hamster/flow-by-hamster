const steps = [
  {
    number: "01",
    title: "Create your profile",
    description: "Add your business name, services, pricing, and availability.",
  },
  {
    number: "02",
    title: "Share your link",
    description: "Get a unique booking page to share via WhatsApp, Instagram, or anywhere.",
  },
  {
    number: "03",
    title: "Accept bookings",
    description: "Clients book, pay, and get reminders automatically.",
  },
  {
    number: "04",
    title: "Grow with data",
    description: "Use your dashboard to spot trends, reward loyal clients, and scale.",
  },
];

export function HowItWorksSection() {
  return (
    <section className="bg-[#f6f3eb] px-4 py-16 sm:px-6 lg:px-10 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-[#8c877d]">
          How it works
        </p>
        <h2 className="max-w-3xl text-3xl font-semibold leading-tight tracking-[-0.02em] text-[#171717] sm:text-4xl lg:text-[42px]">
          Up and running in <span className="italic text-[#943333]">under 10 minutes.</span>
        </h2>

        <div className="mt-10 grid gap-0 rounded-[28px] border border-[#e7e2d8] bg-white/80 md:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className={`px-6 py-8 sm:px-7 ${index < steps.length - 1 ? "border-b border-[#e7e2d8] md:border-b-0 md:border-r" : ""}`}
            >
              <p className="mb-4 text-4xl font-semibold leading-none text-[#d9d2c4]">
                {step.number}
              </p>
              <h3 className="mb-2 text-base font-semibold text-[#171717]">{step.title}</h3>
              <p className="text-sm leading-7 text-[#6f6b63]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
