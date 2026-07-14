const STATS = [
  { label: "Revenue today", value: "₦84,500", delta: "↑ 12% vs yesterday" },
  { label: "Bookings today", value: "11", delta: "3 upcoming" },
  { label: "No-show rate", value: "4%", delta: "↓ 2% this week" },
];

const BOOKINGS = [
  {
    initials: "AF",
    bg: "#E1F5EE",
    color: "#0F6E56",
    name: "Amaka F.",
    service: "Hair braiding · 2:00 PM",
    badge: "badge-confirmed",
    status: "Confirmed",
  },
  {
    initials: "KC",
    bg: "#FAEEDA",
    color: "#854F0B",
    name: "Kemi C.",
    service: "Facial · 3:30 PM",
    badge: "badge-pending",
    status: "Pending",
  },
  {
    initials: "JO",
    bg: "#F1EFE8",
    color: "#5F5E5A",
    name: "Jide O.",
    service: "Locs maintenance · 10:00 AM",
    badge: "badge-done",
    status: "Done",
  },
];

const NAV_ITEMS = [
  { icon: "⊞", label: "Dashboard", active: true },
  { icon: "📅", label: "Bookings" },
  { icon: "👥", label: "Clients" },
  { icon: "🔧", label: "Services" },
  { icon: "🧾", label: "Payments" },
  { icon: "📊", label: "Analytics" },
];

export default function DashboardPreview() {
  return (
    <div className="mx-10 mb-[60px] rounded-2xl border border-black/10 overflow-hidden bg-[#F8F7F4]">
      {/* Browser bar */}
      <div className="flex items-center gap-2 px-4 py-3 bg-white border-b border-black/10">
        <div className="w-2.5 h-2.5 rounded-full bg-[#E24B4A]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#EF9F27]" />
        <div className="w-2.5 h-2.5 rounded-full bg-[#639922]" />
        <div className="flex-1 bg-[#F1EFE8] rounded-md px-3 py-1 text-xs text-[#888780]">
          app.hamster.co/dashboard
        </div>
      </div>

      {/* Dashboard layout */}
      <div className="grid" style={{ gridTemplateColumns: "200px 1fr" }}>
        {/* Sidebar */}
        <div className="border-r border-black/10 p-5 bg-white">
          {/* Business header */}
          <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-black/10">
            <div className="w-9 h-9 rounded-lg bg-[#FAECE7] flex items-center justify-center text-[#D85A30] text-base">
              ✂
            </div>
            <div>
              <div className="text-[13px] font-medium">Glow Studio</div>
              <div className="text-[11px] text-[#888780]">Beauty &amp; Wellness</div>
            </div>
          </div>

          {/* Nav items */}
          {NAV_ITEMS.map((item) => (
            <div
              key={item.label}
              className={`flex items-center gap-2 px-2.5 py-2 rounded-lg text-[13px] mb-0.5 cursor-pointer ${
                item.active
                  ? "bg-[#F1EFE8] text-[#2C2C2A]"
                  : "text-[#888780] hover:bg-[#F8F7F4] hover:text-[#2C2C2A]"
              }`}
            >
              <span className="text-sm">{item.icon}</span>
              {item.label}
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="p-5">
          {/* Header */}
          <div className="flex justify-between items-center mb-5">
            <div className="text-[15px] font-medium">Good morning, Tola ☀️</div>
            <button className="btn-primary text-xs px-3.5 py-1.5">
              + New booking
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-3 mb-5">
            {STATS.map((s) => (
              <div
                key={s.label}
                className="bg-white border border-black/10 rounded-xl p-3"
              >
                <div className="text-[11px] text-[#888780] mb-1">{s.label}</div>
                <div className="text-xl font-medium">{s.value}</div>
                <div className="text-[11px] text-[#0F6E56] mt-0.5">{s.delta}</div>
              </div>
            ))}
          </div>

          {/* Bookings table */}
          <div className="bg-white border border-black/10 rounded-xl overflow-hidden">
            <div className="flex justify-between items-center px-3.5 py-2.5 border-b border-black/10 text-xs font-medium">
              <span>Today&apos;s bookings</span>
              <span className="text-[#888780] font-normal">View all →</span>
            </div>
            {BOOKINGS.map((b, i) => (
              <div
                key={b.name}
                className={`flex items-center gap-2.5 px-3.5 py-2.5 text-xs ${
                  i < BOOKINGS.length - 1 ? "border-b border-black/10" : ""
                }`}
              >
                <div
                  className="w-[26px] h-[26px] rounded-full flex items-center justify-center text-[10px] font-medium flex-shrink-0"
                  style={{ background: b.bg, color: b.color }}
                >
                  {b.initials}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{b.name}</div>
                  <div className="text-[11px] text-[#888780]">{b.service}</div>
                </div>
                <span className={b.badge}>{b.status}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
