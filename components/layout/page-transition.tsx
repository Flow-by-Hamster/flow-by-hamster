"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ReactNode, useEffect, useState } from "react";

export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);

  // Trigger a brief micro-loading flash whenever the pathname changes
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 400); // Perfect duration for a quick network-like response flash

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="w-full flex-1 flex flex-col relative bg-[#fcfaf7]">
      {/* Top Border Loading Bar Widget */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ width: "0%", opacity: 1 }}
            animate={{ width: "70%" }}
            exit={{ width: "100%", opacity: 0 }}
            transition={{
              width: { duration: 0.35, ease: "easeOut" },
              opacity: { delay: 0.3, duration: 0.1 }
            }}
            className="absolute top-0 left-0 h-[3px] bg-[#943333] z-50 pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Main Page Canvas remains completely static to avoid flashing */}
      {children}
    </div>
  );
}