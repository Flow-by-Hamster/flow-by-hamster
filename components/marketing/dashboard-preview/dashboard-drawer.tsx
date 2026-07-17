"use client";

const navigationItems = [
  { icon: "📊", label: "Overview", active: true }, 
  { icon: "👥", label: "Customers" },
  { icon: "📅", label: "Bookings" },
  { icon: "🛠️", label: "Services" },             
  { icon: "🤖", label: "Automations" },           
  { icon: "🌐", label: "Website" },
  { icon: "⚙️", label: "Settings" },            
];

export function DashboardDrawer({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  return (
    <>
      {/* Backdrop INSIDE the phone */}
      <div
        onClick={onClose}
        className={`absolute inset-0 z-20 bg-black/20 transition-opacity duration-300 ${
          isOpen
            ? "opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      />

      {/* Drawer INSIDE the phone */}
      <aside
        className={`absolute inset-y-0 right-0 z-30 flex w-[84%] max-w-[280px] flex-col bg-white p-5 shadow-2xl transition-transform duration-300 ${
          isOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* Header Section with your logo and workspace title */}
        <div className="mb-5 flex items-center justify-between border-b border-[#e7e2d8] pb-4">
          <div className="flex items-center gap-3">
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

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[#e7e2d8] px-3 py-1.5 text-sm text-[#6f6b63] shrink-0"
          >
            Close
          </button>
        </div>

        {/* Added flex-1 to push the lower section down */}
        <nav className="flex-1 space-y-1">
          {navigationItems.map((item) => (
            <button
              key={item.label}
              type="button"
              onClick={onClose}
              className={`flex w-full items-center rounded-xl px-3 py-3 text-left text-sm ${
                item.active
                  ? "bg-[#f4efe8] text-[#171717]"
                  : "text-[#6f6b63] hover:bg-[#f7f5f0]"
              }`}
            >
              <span className="mr-3 text-base">{item.icon}</span>
              <span>{item.label}</span>
            </button>
          ))}
        </nav>

        {/* Bottom Section with a thin straight line */}
        <div className="mt-auto pt-4 border-t border-[#f4efe8]">
          <button
            type="button"
            onClick={() => {
              // Handle logout logic here
              onClose();
            }}
            className="flex w-full items-center rounded-xl px-3 py-3 text-left text-sm text-red-600 hover:bg-red-50"
          >
            <span className="mr-3 text-base">🚪</span>
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}