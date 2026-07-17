import { RefObject } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Option {
  emoji: string;
  label: string;
}

interface StepDiscoveryProps {
  referralSource: string;
  customReferralSource: string;
  options: Option[];
  customRef: RefObject<HTMLInputElement | null>;
  onSelect: (val: string) => void;
  onCustomChange: (val: string) => void;
  onAdvance: () => void;
  onGoBack: () => void;
  isValid: boolean;
}

export function StepDiscovery({
  referralSource,
  customReferralSource,
  options,
  customRef,
  onSelect,
  onCustomChange,
  onAdvance,
  onGoBack,
  isValid
}: StepDiscoveryProps) {
  return (
    <div>
      <button onClick={onGoBack} className="text-xs text-[#6f6b63] mb-3 hover:text-[#171717] transition flex items-center gap-1">← Back</button>
      <h3 className="font-serif text-lg font-bold text-[#171717] mb-3">How did you find us?</h3>
      
      <div className="grid grid-cols-2 gap-2 max-h-[160px] overflow-y-auto mb-4 pr-1 custom-scrollbar">
        {options.map((opt) => (
          <button
            key={opt.label}
            onClick={() => onSelect(opt.label)}
            className={`p-3 rounded-xl text-left text-xs font-medium border flex items-center gap-2 transition ${referralSource === opt.label ? "border-[#d24e2b] bg-[#d24e2b]/5 text-[#d24e2b]" : "border-[#e7e2d8] text-[#171717] hover:bg-[#fcfaf7]"}`}
          >
            <span>{opt.emoji}</span>
            <span className="truncate">{opt.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {referralSource === "Other" && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="overflow-hidden mb-4"
          >
            <input
              ref={customRef}
              type="text"
              value={customReferralSource}
              onChange={(e) => onCustomChange(e.target.value)}
              placeholder="Please specify how you heard of us..."
              className="w-full px-4 py-2.5 rounded-xl border border-[#e7e2d8] bg-[#fcfaf7] focus:border-[#d24e2b] focus:ring-1 focus:ring-[#d24e2b] outline-none transition text-xs text-[#171717]"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <button 
        disabled={!isValid} 
        onClick={onAdvance} 
        className="w-full bg-[#d24e2b] text-white font-medium py-3 rounded-full hover:bg-[#b83f20] disabled:bg-[#e7e2d8] disabled:text-[#9c968e] transition text-sm shadow-sm"
      >
        Continue
      </button>
    </div>
  );
}