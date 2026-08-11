"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Slide {
  lines: string[];
  accent: number; // Index of the line that should be colored and italicized
}

const SLIDES: Slide[] = [
  { lines: ["Run your services,", "beautifully."], accent: 1 },
  { lines: ["Your WhatsApp", "operating system."], accent: 1 },
  { lines: ["Automate bookings", "and follow-ups."], accent: 0 },
  { lines: ["Built for African", "service businesses."], accent: 1 },
  { lines: ["We're building", "something special."], accent: 1 },
];

export function WaitlistHeadline() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % SLIDES.length);
    }, 5000); 
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="h-[100px] md:h-[120px] flex flex-col justify-center overflow-hidden mb-2">
      <AnimatePresence mode="wait">
        <motion.h1
          key={current}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-4xl md:text-5xl font-bold tracking-tight text-[#171717] leading-[1.15]"
        >
          {SLIDES[current].lines.map((line, idx) => {
            const isAccent = SLIDES[current].accent === idx;
            return (
              <span key={idx} className="block">
                {isAccent ? (
                  <span className="text-[#943333] italic font-serif font-normal block sm:inline">
                    {line}
                  </span>
                ) : (
                  line
                )}
              </span>
            );
          })}
        </motion.h1>
      </AnimatePresence>
    </div>
  );
}