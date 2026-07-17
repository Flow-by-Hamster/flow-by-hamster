"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const STEPS = [
  {
    number: "01",
    title: "Create your profile",
    description: "Set up your business name, services, rates, and hours in under two minutes. Flow builds a clean, fast web portal tailored entirely to your brand.",
  },
  {
    number: "02",
    title: "Share your booking link",
    description: "Drop your custom link into your WhatsApp bio, Instagram profile, or send it directly to clients in chat threads. No more back-and-forth calendar coordination.",
  },
  {
    number: "03",
    title: "Automate background operations",
    description: "Flow acts as your digital reception desk. When clients book, it auto-schedules appointments, handles incoming confirmations, and sends timely reminders right through WhatsApp.",
  },
  {
    number: "04",
    title: "Retain clients with smart data",
    description: "Track repeat histories, check daily schedule snapshots, and instantly identify loyal customers from a zero-bloat operational dashboard built for scaling owners.",
  },
];

export function HowItWorksFeatures() {
  return (
    <section className="px-4 py-20 sm:px-6 lg:px-10 lg:py-32">
      <div className="mx-auto max-w-4xl">
        
        {/* Editorial Top Intro */}
        <div className="text-center max-w-2xl mx-auto mb-24">
          <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#d24e2b] mb-4">
            The Flow Workflow
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#171717] mb-6 leading-[1.15]">
            Up and running in <span className="text-[#d24e2b] italic font-normal">under 10 minutes.</span>
          </h1>
          <p className="text-sm text-[#6f6b63] leading-relaxed max-w-lg mx-auto">
            Stop relying on manual memory workflows. Flow integrates seamlessly alongside the messaging tools you already master every single day.
          </p>
        </div>

        {/* Clean Alternating Narrative List Layout */}
        <div className="space-y-12">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="grid gap-6 p-8 rounded-2xl border border-[#e7e2d8] bg-[#fcfaf7] hover:bg-[#faf7f2]/40 transition-colors sm:grid-cols-[100px_1fr]"
            >
              {/* Premium Floating Step Indicator */}
              <div className="flex items-start">
                <span className="font-serif text-4xl font-light text-[#d24e2b]/30 tracking-tight">
                  {step.number}
                </span>
              </div>
              
              {/* Feature Content */}
              <div className="space-y-2">
                <h3 className="text-lg font-bold text-[#171717] tracking-tight">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-[#6f6b63] max-w-2xl">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Intentional Call-to-Action Link */}
        <div className="mt-24 text-center">
          <Link 
            href="/waitlist" 
            className="inline-flex items-center justify-center bg-[#171717] text-[#fcfaf7] text-sm font-medium px-8 py-3.5 rounded-full hover:bg-[#2d2d2d] transition-all shadow-sm gap-2"
          >
            {/* Wavy Flow Orb Icon with Smooth Continuous Rotation */}
            <motion.img 
                src="/logos/flow_icon_logo_nobg.png" 
                alt="Flow" 
                className="h-5 w-5 object-contain" 
                animate={{ 
                rotate: 360 
                }}
                transition={{ 
                duration: 8,         
                ease: "linear",      
                repeat: Infinity 
                }}
            />
            Ready to build your Flow?
          </Link>
        </div>

      </div>
    </section>
  );
}