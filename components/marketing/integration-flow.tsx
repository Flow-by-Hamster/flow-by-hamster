"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ICONS = {
  whatsapp: (
    <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24">
      <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397 0 11.948 0c3.179.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.597-5.339 11.946-11.89 11.946-2.005-.001-3.973-.504-5.714-1.463L0 24zm6.566-3.53c1.652.981 3.271 1.497 4.931 1.498 5.432 0 9.854-4.38 9.856-9.762.001-2.607-1.013-5.059-2.856-6.904C16.67 3.457 14.223 2.44 11.62 2.44c-5.438 0-9.863 4.382-9.866 9.763-.001 1.77.464 3.497 1.347 5.025l-.995 3.636 3.737-.974zm11.107-4.473c-.305-.153-1.805-.89-2.083-.991-.279-.101-.482-.153-.684.153-.203.306-.785.991-.962 1.194-.177.203-.355.229-.66.076-1.85-.932-3.226-1.638-4.524-3.868-.344-.59.344-.548.986-1.822.102-.204.051-.383-.025-.536-.076-.153-.684-1.651-.938-2.261-.247-.595-.499-.514-.684-.524-.177-.01-.38-.01-.583-.01-.203 0-.533.076-.812.383-.279.306-1.065 1.042-1.065 2.542 0 1.5 1.09 2.95 1.242 3.153.152.204 2.146 3.277 5.198 4.593.726.313 1.292.5 1.734.64.729.232 1.393.199 1.917.12.584-.087 1.805-.737 2.058-1.452.253-.715.253-1.327.177-1.452-.076-.127-.279-.203-.584-.356z" />
    </svg>
  ),
  sms: (
    <svg className="w-5 h-5 text-[#4285F4]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  ),
  email: (
    <svg className="w-5 h-5 text-[#943333]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  payments: (
    <svg className="w-5 h-5 text-[#6f6b63]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <rect width="22" height="16" x="1" y="4" rx="2" />
      <line x1="1" x2="23" y1="10" y2="10" />
    </svg>
  ),
  website: (
    <svg className="w-5 h-5 text-[#6f6b63]" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <circle cx="12" cy="12" r="10" />
      <line x1="2" x2="22" y1="12" y2="12" />
      <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
  )
};

const STEP_EASE = [0.16, 1, 0.3, 1] as const;

export function IntegrationFlow() {
  return (
    <section className="relative overflow-hidden bg-[#fcfaf7] px-4 pt-32 pb-20 sm:px-6 lg:px-10 max-w-6xl mx-auto border-t border-[#e7e2d8]">
      
      <div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 space-y-4">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold tracking-tight text-[#171717]">
          Automating your customer interactions.
        </h2>
        <p className="text-sm sm:text-base leading-relaxed text-[#6f6b63] max-w-xl mx-auto">
          Flow sits behind your daily communications, automatically scheduling bookings, tracking records, and firing background notifications.
        </p>
      </div>

      <div className="relative w-full max-w-xl mx-auto flex flex-col items-center">
        
        {/* SVG Canvas Behind Text Layers */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none hidden md:block z-0" style={{ minHeight: "520px" }}>
          {/* Top Spoke Line */}
          <motion.path 
            d="M 288, 50 L 288, 170" 
            stroke="#e7e2d8" strokeWidth="2" strokeDasharray="4 4" fill="none"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          />
          {/* Bottom Triple Fork Spoke Lines */}
          <motion.path 
            d="M 288, 210 L 148, 345" 
            stroke="#e7e2d8" strokeWidth="2" strokeDasharray="4 4" fill="none"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.path 
            d="M 288, 210 L 288, 345" 
            stroke="#e7e2d8" strokeWidth="2" strokeDasharray="4 4" fill="none"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
          />
          <motion.path 
            d="M 288, 210 L 428, 345" 
            stroke="#e7e2d8" strokeWidth="2" strokeDasharray="4 4" fill="none"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}
          />
          {/* Final Base Ledger Spoke Line */}
          <motion.path 
            d="M 288, 390 L 288, 480" 
            stroke="#e7e2d8" strokeWidth="2" strokeDasharray="4 4" fill="none"
            initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.6 }}
          />
        </svg>

        {/* WhatsApp Entry Node */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, ease: STEP_EASE }}
          className="z-10 flex flex-col items-center gap-2 group text-center mb-12 md:mb-20"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#e7e2d8] bg-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#943333]">
            {ICONS.whatsapp}
          </div>
          <div className="bg-[#fcfaf7] px-2 py-0.5 rounded-md">
            <span className="text-xs font-bold text-[#171717] block">WhatsApp Hub</span>
            <span className="text-[10px] text-[#6f6b63] hidden md:block">Customer initialization & chat intent</span>
          </div>
        </motion.div>

        {/* Mobile Connector */}
        <div className="md:hidden text-[#943333] text-xl mb-6 z-10">↓</div>

        {/* Core Hub Component */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }}
          className="z-10 flex flex-col items-center gap-2 text-center mb-16 md:mb-24"
        >
          <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl border border-[#e7e2d8] bg-white shadow-[0_8px_30px_rgba(23,23,23,0.04)]">
            <motion.div 
              animate={{ scale: [1, 1.06, 1], opacity: [0.5, 0.8, 0.5] }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute inset-0 rounded-3xl bg-[#943333]/5 pointer-events-none"
            />
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              className="relative z-10 flex items-center justify-center h-11 w-11"
            >
              <Image 
                src="/logos/flow_icon_logo_nobg.png" 
                alt="Flow icon" 
                width={44} 
                height={44} 
                className="object-contain"
                priority 
              />
            </motion.div>
          </div>
          <div className="bg-[#fcfaf7] px-2 py-0.5 rounded-md">
            <span className="text-xs font-bold tracking-wide text-[#943333] uppercase block">Flow Engine</span>
            <span className="text-[10px] font-medium text-[#6f6b63]">Automated CRM & operational ledger</span>
          </div>
        </motion.div>

        {/* Mobile Connector */}
        <div className="md:hidden text-[#943333] text-xl mb-6 z-10">↓</div>

        {/* Output Node Matrix - Mapped directly to System Architecture communications */}
        <div className="z-10 w-full flex flex-col md:flex-row gap-8 md:gap-0 justify-between items-center max-w-md mb-16 md:mb-24">
          
          {/* WhatsApp Automation Node */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.3 }}
            className="flex items-center md:flex-col gap-3 md:gap-2 group text-left md:text-center w-40 justify-start md:justify-center"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e7e2d8] bg-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#943333] shrink-0">
              {ICONS.whatsapp}
            </div>
            <span className="text-xs font-bold text-[#171717] bg-[#fcfaf7] px-1.5 py-0.5 rounded">WhatsApp Alerts</span>
          </motion.div>

          {/* SMS Automation Node */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.4 }}
            className="flex items-center md:flex-col gap-3 md:gap-2 group text-left md:text-center w-40 justify-start md:justify-center"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e7e2d8] bg-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#943333] shrink-0">
              {ICONS.sms}
            </div>
            <span className="text-xs font-bold text-[#171717] bg-[#fcfaf7] px-1.5 py-0.5 rounded">Instant SMS Reminders</span>
          </motion.div>

          {/* Email Automation Node */}
          <motion.div 
            initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.5 }}
            className="flex items-center md:flex-col gap-3 md:gap-2 group text-left md:text-center w-40 justify-start md:justify-center"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#e7e2d8] bg-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#943333] shrink-0">
              {ICONS.email}
            </div>
            <span className="text-xs font-bold text-[#171717] bg-[#fcfaf7] px-1.5 py-0.5 rounded">Email Receipts</span>
          </motion.div>

        </div>

        {/* Mobile Connector */}
        <div className="md:hidden text-[#943333] text-xl mb-6 z-10">↓</div>

        {/* Base Terminal Component */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.6 }}
          className="z-10 flex flex-col items-center gap-2 group text-center"
        >
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-[#e7e2d8] bg-white shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:border-[#943333]">
            {ICONS.website}
          </div>
          <div className="bg-[#fcfaf7] px-2 py-0.5 rounded-md">
            <span className="text-xs font-bold text-[#171717] block">Storefront Hub</span>
            <span className="text-[10px] text-[#6f6b63] hidden md:block">Fluid Client Booking Interface</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}