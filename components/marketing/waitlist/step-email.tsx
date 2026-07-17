import { RefObject } from "react";

interface StepEmailProps {
  email: string;
  emailRef: RefObject<HTMLInputElement | null>;
  onChange: (val: string) => void;
  onAdvance: () => void;
  isValid: boolean;
}

export function StepEmail({ email, emailRef, onChange, onAdvance, isValid }: StepEmailProps) {
  return (
    <div>
      <h3 className="font-serif text-lg font-bold text-[#171717] mb-1">What's your email address?</h3>
      <p className="text-xs text-[#6f6b63] mb-4">We will notify you immediately once your entry is approved.</p>
      <input
        ref={emailRef}
        type="email"
        value={email}
        onChange={(e) => onChange(e.target.value)}
        placeholder="name@company.com"
        className="w-full px-4 py-3 rounded-full border border-[#e7e2d8] bg-[#fcfaf7] focus:border-[#d24e2b] focus:ring-1 focus:ring-[#d24e2b] outline-none transition mb-4 text-sm text-[#171717]"
      />
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