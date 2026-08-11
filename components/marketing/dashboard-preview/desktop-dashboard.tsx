"use client";

const stats = [
  { label: "Revenue today", value: "₦84,500", delta: "↑ 12% vs yesterday" },
  { label: "Bookings today", value: "11", delta: "3 upcoming" },
  { label: "No-show rate", value: "4%", delta: "↓ 2% this week" },
];

const bookings = [
  {
    initials: "AF",
    bg: "#e1f5ee",
    color: "#0f6e56",
    name: "Amaka F.",
    service: "Hair braiding · 2:00 PM",
    status: "Confirmed",
    statusClass: "bg-[#e7f4ee] text-[#0f6e56]",
  },
  {
    initials: "KC",
    bg: "#faeeda",
    color: "#854f0b",
    name: "Kemi C.",
    service: "Facial · 3:30 PM",
    status: "Pending",
    statusClass: "bg-[#fef6e7] text-[#a05f0b]",
  },
  {
    initials: "JO",
    bg: "#f1efe8",
    color: "#5f5e5a",
    name: "Jide O.",
    service: "Locs maintenance · 10:00 AM",
    status: "Done",
    statusClass: "bg-[#f0f3ef] text-[#5f5e5a]",
  },
];

const navigationItems = [
  { icon: "📊", label: "Overview", active: true }, 
  { icon: "👥", label: "Customers" },
  { icon: "📅", label: "Bookings" },
  { icon: "🛠️", label: "Services" },             
  { icon: "🤖", label: "Automations" },           
  { icon: "🌐", label: "Website" },
  { icon: "⚙️", label: "Settings" },            
];

function SidebarPreview() {
  return (
    // Added flex and flex-col to enable sticking elements to the bottom
    <aside className="flex flex-col border-b border-[#e7e2d8] bg-white p-5 lg:border-b-0 lg:border-r lg:p-6 min-h-[500px]">
      <div className="mb-5 flex items-center gap-3 border-b border-[#e7e2d8] pb-4">
        <img 
          src="/logos/flow_icon_logo_nobg.png" 
          alt="Flow Logo" 
          className="h-10 w-10 object-contain rounded-xl"
        />
        <div>
          <p className="text-sm font-semibold text-[#171717]">Flow Demo Workspace</p>
          <p className="text-xs text-[#6f6b63]">Business operations preview</p>
        </div>
      </div>

      {/* Added flex-1 to push everything below it down */}
      <nav className="flex-1 space-y-1">
        {navigationItems.map((item) => (
          <button
            key={item.label}
            className={`flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-colors ${
              item.active
                ? "bg-[#f4efe8] text-[#171717]"
                : "text-[#6f6b63] hover:bg-[#f7f5f0] hover:text-[#171717]"
            }`}
          >
            <span className="text-base">{item.icon}</span>
            <span>{item.label}</span>
          </button>
        ))}
      </nav>

      {/* Bottom Logout Section matching the drawer design */}
      <div className="mt-auto pt-4 border-t border-[#f4efe8]">
        <button
          type="button"
          className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm text-red-600 transition-colors hover:bg-red-50"
        >
          <span className="text-base">🚪</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
}

function RevenueCard({ label, value, delta }: { label: string; value: string; delta: string }) {
  return (
    <div className="rounded-2xl border border-[#e7e2d8] bg-white p-4 shadow-[0_12px_32px_rgba(15,23,42,0.04)]">
      <p className="text-[11px] uppercase tracking-[0.2em] text-[#8c877d]">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-[#171717]">{value}</p>
      <p className="mt-1 text-sm text-[#0f6e56]">{delta}</p>
    </div>
  );
}

function BookingCard({
  initials,
  bg,
  color,
  name,
  service,
  status,
  statusClass,
}: {
  initials: string;
  bg: string;
  color: string;
  name: string;
  service: string;
  status: string;
  statusClass: string;
}) {
  return (
    <div className="flex items-center gap-3 border-b border-[#f0ece3] px-4 py-3 last:border-b-0">
      <div
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold"
        style={{ backgroundColor: bg, color }}
      >
        {initials}
      </div>
      <div className="min-w-0 flex-1">
        <p className="text-sm font-semibold text-[#171717]">{name}</p>
        <p className="text-xs text-[#6f6b63]">{service}</p>
      </div>
      <span className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${statusClass}`}>
        {status}
      </span>
    </div>
  );
}

export function DesktopDashboard() {
  return (
    <div className="hidden overflow-hidden rounded-[28px] border border-[#e7e2d8] bg-[#f7f4ee] shadow-[0_30px_90px_rgba(15,23,42,0.08)] lg:block">
      <div className="flex items-center gap-2 border-b border-[#e7e2d8] bg-white px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#e24b4a]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ef9f27]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#639922]" />
        <div className="ml-2 flex-1 rounded-md bg-[#f4efe8] px-3 py-1.5 text-left text-xs text-[#8c877d]">
          app.hamster.co/dashboard
        </div>
      </div>

      <div className="grid lg:grid-cols-[220px_1fr]">
        <SidebarPreview />

        <div className="p-4 sm:p-5 lg:p-6">
          <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <p className="text-sm font-semibold text-[#171717]">Good morning, Tola ☀️</p>
            <button className="inline-flex items-center justify-center rounded-full bg-[#943333] px-3.5 py-2 text-sm font-medium text-white shadow-[0_10px_26px_rgba(217,79,36,0.16)]">
              + New booking
            </button>
          </div>

          <div className="mb-4 grid gap-3 md:grid-cols-3">
            {stats.map((stat) => (
              <RevenueCard key={stat.label} label={stat.label} value={stat.value} delta={stat.delta} />
            ))}
          </div>

          <div className="overflow-hidden rounded-[22px] border border-[#e7e2d8] bg-white">
            <div className="flex items-center justify-between border-b border-[#e7e2d8] px-4 py-3 text-sm font-semibold text-[#171717]">
              <span>Today&apos;s bookings</span>
              <span className="text-sm font-medium text-[#8c877d]">View all →</span>
            </div>

            <div>
              {bookings.map((booking) => (
                <BookingCard key={booking.name} {...booking} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}