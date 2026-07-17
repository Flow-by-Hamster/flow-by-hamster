"use client";

import { motion } from "framer-motion";

const JOURNEY_PILLARS = [
  {
    category: "01 / CUSTOMER ENTRY",
    title: "Your Digital Reception Front",
    tagline: "Replace messy link-in-bios with a storefront built for quick client selection.",
    features: [
      { name: "Custom Business Website", desc: "A sleek, zero-bloat web page that frames your brand identity instantly." },
      { name: "Fluid Booking Pages", desc: "Allows clients to view services, choose open gaps, and submit clear intents." },
      { name: "Services Catalog", desc: "Organize menus cleanly by pricing, category clusters, and duration intervals." },
    ]
  },
  {
    category: "02 / BOOKING OPERATIONS",
    title: "Automated Calendar Bookings",
    tagline: "Every finalized appointment updates your database records without double booking blocks.",
    features: [
      { name: "Central Schedule Ledger", desc: "A clear view of today's calendar appointments and revenue parameters." },
      { name: "Dynamic Profiling (CRM)", desc: "Maintains structured histories of individual sessions, custom notes, and unique tags." },
      { name: "Status Progression States", desc: "Track slots smoothly across active, rescheduled, or finalized workflows." },
    ]
  },
  {
    category: "03 / BUSINESS AUTOMATION",
    title: "Lifecycle Customer Retention",
    tagline: "Trigger targeted background operations so returning customers aren't left behind.",
    features: [
      { name: "Immediate Onboarding Triggers", desc: "Auto-send personalized welcome contexts the second a lead initializes contact." },
      { name: "Proactive Reminders", desc: "Drastically reduce missed appointments by deploying timely confirmation prompts." },
      { name: "Re-engagement Workflows", desc: "Auto-trigger review requests and strategic win-back campaigns to old contacts." },
    ]
  }
];

export function FeaturesGrid() {
  return (
    <section className="px-4 py-16 sm:px-6 lg:px-10 max-w-6xl mx-auto pb-28">
      {/* Increased spacing between pillars slightly on mobile to avoid layout crowding */}
      <div className="space-y-16 md:space-y-24">
        {JOURNEY_PILLARS.map((pillar, pillarIdx) => (
          <div key={pillar.category} className="grid gap-6 lg:gap-8 lg:grid-cols-[1fr_2fr] items-start">
            
            {/* 
              FIXED: Removed standard 'sticky' and replaced it with 'lg:sticky'. 
              This leaves the block relative on mobile layout modes so it cleanly 
              scrolls out of the way before the next column arrives.
            */}
            <div className="lg:sticky lg:top-28 space-y-2 md:space-y-3">
              <span className="text-[10px] font-bold tracking-widest text-[#d94f24] uppercase block">
                {pillar.category}
              </span>
              <h2 className="font-serif text-xl sm:text-2xl font-bold tracking-tight text-[#171717]">
                {pillar.title}
              </h2>
              <p className="text-xs leading-relaxed text-[#6f6b63] max-w-md lg:max-w-xs">
                {pillar.tagline}
              </p>
            </div>

            {/* Right Interactive Cards Grid */}
            <div className="grid gap-px bg-[#e7e2d8]/60 border border-[#e7e2d8] rounded-2xl overflow-hidden sm:grid-cols-2 lg:grid-cols-3">
              {pillar.features.map((feature, featureIdx) => (
                <motion.div
                  key={feature.name}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.4, delay: featureIdx * 0.05 }}
                  className="bg-[#fcfaf7] p-6 sm:p-8 flex flex-col justify-between hover:bg-[#faf7f2]/40 transition-colors group"
                >
                  <div>
                    <h4 className="text-sm font-bold text-[#171717] mb-2 tracking-tight group-hover:text-[#d94f24] transition-colors">
                      {feature.name}
                    </h4>
                    <p className="text-xs leading-relaxed text-[#6f6b63]">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}