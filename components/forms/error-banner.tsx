"use client";

import { motion } from "framer-motion";

interface ErrorBannerProps {
  message: string;
}

export function ErrorBanner({ message }: ErrorBannerProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      className="w-full rounded-xl border border-red-200 bg-red-50/60 p-3.5 text-center text-xs font-medium text-[#943333] tracking-wide"
    >
      {message}
    </motion.div>
  );
}