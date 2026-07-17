"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function FeaturesHero() {
  return (
    <section className="px-4 pt-20 pb-12 sm:px-6 lg:px-10 text-center">
      <div className="mx-auto max-w-3xl">
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#d94f24] mb-4"
        >
          The Foundation Platform (v1.0)
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-serif text-4xl sm:text-5xl font-bold tracking-tight text-[#171717] leading-[1.15] mb-6"
        >
          Run your services beautifully, <br />
          <span className="text-[#d94f24] italic font-normal">systemize your growth.</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base text-[#6f6b63] leading-relaxed max-w-xl mx-auto mb-8"
        >
          Stop running your entire schedule out of memory or buried chat histories. Flow builds structured operations right alongside the tools you already use daily.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.3 }}
        >
         <Link 
            href="/waitlist" 
            className="inline-flex items-center gap-3 bg-[#171717] text-[#fcfaf7] text-xs font-semibold uppercase tracking-wider pl-5 pr-8 py-3.5 rounded-full hover:bg-[#2d2d2d] transition-all shadow-sm group"
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
            
            <span>Secure Your Priority Placement</span>
            </Link>
        </motion.div>
      </div>
    </section>
  );
}