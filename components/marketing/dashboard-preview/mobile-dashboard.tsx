"use client";

import { useState } from "react";
import { DashboardDrawer } from "@/components/marketing/dashboard-preview/dashboard-drawer";

const stats = [
  { label: "Revenue", value: "₦84,500", delta: "↑ 12%" },
  { label: "Bookings", value: "11", delta: "3 upcoming" },
  { label: "No-show", value: "4%", delta: "↓ 2%" },
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

export function MobileDashboard() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>


      <div className="relative block overflow-hidden rounded-[28px] border border-[#e7e2d8] bg-[#f7f4ee] shadow-[0_30px_90px_rgba(15,23,42,0.08)] lg:hidden">

  <DashboardDrawer
    isOpen={menuOpen}
    onClose={() => setMenuOpen(false)}
  />

  <div className="flex items-center justify-between border-b border-[#e7e2d8] bg-white px-4 py-3">
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e7e2d8] text-[#171717]"
              aria-label="Open dashboard menu"
            >
              ☰
            </button>

            <p className="text-sm font-semibold text-[#171717]">
              Flow Demo
            </p>
          </div>

          <div className="rounded-full bg-[#f4efe8] px-3 py-1.5 text-[11px] font-medium text-[#8c877d]">
            Mobile view
          </div>
        </div>

        <div className="max-h-[520px] overflow-y-auto p-4">
          <div className="mb-3 flex items-center justify-between rounded-[20px] border border-[#e7e2d8] bg-white px-4 py-3">
            <div>
              <p className="text-sm font-semibold text-[#171717]">
                Good morning, Tola ☀️
              </p>
              <p className="text-xs text-[#6f6b63]">
                Your workspace is ready
              </p>
            </div>

            <button className="rounded-full bg-[#d94f24] px-3 py-2 text-xs font-semibold text-white">
              + New
            </button>
          </div>

          <div className="mb-3 grid gap-2 sm:grid-cols-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-[18px] border border-[#e7e2d8] bg-white p-3"
              >
                <p className="text-[10px] uppercase tracking-[0.2em] text-[#8c877d]">
                  {stat.label}
                </p>

                <p className="mt-1 text-lg font-semibold text-[#171717]">
                  {stat.value}
                </p>

                <p className="mt-1 text-xs text-[#0f6e56]">
                  {stat.delta}
                </p>
              </div>
            ))}
          </div>

          <div className="overflow-hidden rounded-[20px] border border-[#e7e2d8] bg-white">
            <div className="border-b border-[#e7e2d8] px-4 py-3 text-sm font-semibold text-[#171717]">
              Today&apos;s bookings
            </div>

            <div className="divide-y divide-[#f0ece3]">
              {bookings.map((booking) => (
                <div key={booking.name} className="px-4 py-3">
                  <div className="flex items-center gap-3">
                    <div
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-[10px] font-semibold"
                      style={{
                        backgroundColor: booking.bg,
                        color: booking.color,
                      }}
                    >
                      {booking.initials}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-[#171717]">
                        {booking.name}
                      </p>

                      <p className="text-xs text-[#6f6b63]">
                        {booking.service}
                      </p>
                    </div>

                    <span
                      className={`rounded-full px-2.5 py-1 text-[10px] font-medium ${booking.statusClass}`}
                    >
                      {booking.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}