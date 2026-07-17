import Image from "next/image";
import { motion } from "framer-motion";

interface StepReviewProps {
  businessDisplay: string;
  referralDisplay: string;
  submitState: "idle" | "loading" | "success";
  onSubmit: () => void;
  onGoBack: () => void;
}

export function StepReview({ businessDisplay, referralDisplay, submitState, onSubmit, onGoBack }: StepReviewProps) {
  return (
    <div className="text-center">
      <button onClick={onGoBack} className="text-xs text-[#6f6b63] mb-4 block hover:text-[#171717] transition">
        ← Go back
      </button>
      
      {/* Fluid Floating/Rotating Logo Container */}
      <div className="mb-4 flex justify-center">
        <motion.div
          animate={{
            rotate: 360,
            scale: [1, 1.06, 1], // Subtle breathing swell to mimic liquid movement
          }}
          transition={{
            rotate: {
              repeat: Infinity,
              duration: 20, // Slow, peaceful continuous drift
              ease: "linear",
            },
            scale: {
              repeat: Infinity,
              duration: 4, // Smooth tidal pulsing pace
              ease: "easeInOut",
            },
          }}
          className="relative h-12 w-12 select-none pointer-events-none"
        >
          <Image
            src="/logos/flow_icon_logo_nobg.png"
            alt="Flow Icon"
            fill
            className="object-contain"
            priority
          />
        </motion.div>
      </div>
      
      <h3 className="font-serif text-xl font-bold text-[#171717] mb-2">
        Ready to build your Flow?
      </h3>
      
      <p className="text-xs text-[#6f6b63] mb-5 max-w-[290px] mx-auto leading-relaxed">
        Join founders and service business owners gaining early access to the future of automated operations[cite: 1].
      </p>
      
      {/* Selection Badges */}
      <div className="flex flex-wrap justify-center gap-1.5 mb-6">
        <div className="text-[10px] font-bold tracking-wider text-[#d24e2b] bg-[#d24e2b]/5 border border-[#d24e2b]/10 px-2.5 py-1 rounded-full uppercase">
          {businessDisplay}
        </div>
        <div className="text-[10px] font-bold tracking-wider text-[#6f6b63] bg-[#e7e2d8]/40 px-2.5 py-1 rounded-full uppercase">
          Source: {referralDisplay}
        </div>
      </div>

      <button 
        onClick={onSubmit} 
        disabled={submitState === "loading"} 
        className="w-full bg-[#d24e2b] text-white font-medium py-3 rounded-full hover:bg-[#b83f20] disabled:bg-[#e7e2d8] disabled:text-[#9c968e] disabled:cursor-not-allowed transition text-sm flex items-center justify-center gap-2 shadow-sm"
      >
        {submitState === "loading" ? "Securing position..." : "Join the Waitlist"}
      </button>
    </div>
  );
}