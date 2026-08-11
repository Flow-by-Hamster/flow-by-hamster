"use client";

import { useState, useEffect, useCallback, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Sub-component step components
import { StepEmail } from "./waitlist/step-email";
import { StepBusiness } from "./waitlist/step-business";
import { StepDiscovery } from "./waitlist/step-discovery";
import { StepReview } from "./waitlist/step-review";
import { ErrorBanner } from "../forms/error-banner";

type WizardStep = 1 | 2 | 3 | 4;
type SubmitState = "idle" | "loading" | "success";

interface WaitlistData {
  email: string;
  businessType: string;
  customBusinessType: string;
  referralSource: string;
  customReferralSource: string;
}

const TOTAL_STEPS = 4;
const STEP_EASE = [0.16, 1, 0.3, 1] as const;

const BUSINESS_TYPES = [
  { emoji: "💇", label: "Salon & Spa" },
  { emoji: "🏥", label: "Clinic" },
  { emoji: "⚖️", label: "Law Firm" },
  { emoji: "🏋️", label: "Gym" },
  { emoji: "🐶", label: "Pet Services" },
  { emoji: "🍽️", label: "Restaurant" },
  { emoji: "📸", label: "Creative Agency" },
  { emoji: "💼", label: "Consulting" },
  { emoji: "🏠", label: "Home Services" },
  { emoji: "✨", label: "Other" },
];

const REFERRAL_SOURCES = [
  { emoji: "𝕏", label: "Twitter / X" },
  { emoji: "💼", label: "LinkedIn" },
  { emoji: "📸", label: "Instagram" },
  { emoji: "🎵", label: "TikTok" },
  { emoji: "🤝", label: "Friend" },
  { emoji: "💬", label: "WhatsApp" },
  { emoji: "🔍", label: "Google" },
  { emoji: "📧", label: "Newsletter" },
  { emoji: "▶️", label: "YouTube" },
  { emoji: "✨", label: "Other" },
];

export function WaitlistWizard() {
  const [step, setStep] = useState<WizardStep>(1);
  const [direction, setDirection] = useState<1 | -1>(1);
  const [submitState, setSubmitState] = useState<SubmitState>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [data, setData] = useState<WaitlistData>({
    email: "",
    businessType: "",
    customBusinessType: "",
    referralSource: "",
    customReferralSource: "",
  });
  
  const emailRef = useRef<HTMLInputElement>(null);
  const customBusinessRef = useRef<HTMLInputElement>(null);
  const customSourceRef = useRef<HTMLInputElement>(null);

  const isEmailValid = useMemo(() => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email);
  }, [data.email]);

  const isStep2Valid = useMemo(() => {
    return !!(data.businessType && (data.businessType !== "Other" || data.customBusinessType.trim() !== ""));
  }, [data.businessType, data.customBusinessType]);

  const isStep3Valid = useMemo(() => {
    return !!(data.referralSource && (data.referralSource !== "Other" || data.customReferralSource.trim() !== ""));
  }, [data.referralSource, data.customReferralSource]);

  const advance = useCallback(() => { 
    setErrorMessage(null);
    setDirection(1); 
    setStep((s) => Math.min(s + 1, TOTAL_STEPS) as WizardStep); 
  }, []);
  
  const goBack = useCallback(() => { 
    setErrorMessage(null);
    setDirection(-1); 
    setStep((s) => Math.max(s - 1, 1) as WizardStep); 
  }, []);

  useEffect(() => { 
    if (step === 1 && typeof window !== "undefined" && window.innerWidth > 768) {
      const timer = setTimeout(() => emailRef.current?.focus(), 380); 
      return () => clearTimeout(timer);
    }
  }, [step]);

  useEffect(() => { 
    if (data.businessType === "Other" && typeof window !== "undefined" && window.innerWidth > 768) {
      customBusinessRef.current?.focus(); 
    }
  }, [data.businessType]);

  useEffect(() => { 
    if (data.referralSource === "Other" && typeof window !== "undefined" && window.innerWidth > 768) {
      customSourceRef.current?.focus(); 
    }
  }, [data.referralSource]);

  const handleWaitlistSubmit = async () => {
    if (submitState === "loading") return;
    
    setSubmitState("loading");
    setErrorMessage(null);

    const businessCategory = data.businessType === "Other" ? data.customBusinessType : data.businessType;
    const referralSource = data.referralSource === "Other" ? data.customReferralSource : data.referralSource;
    
    // Fallback extraction for name field (e.g., "tea" from "tea@example.com")
    const extractedName = data.email.split("@")[0].replace(/[._-]/g, " ");
    const formattedName = extractedName.charAt(0).toUpperCase() + extractedName.slice(1);

    try {
      const response = await fetch("http://localhost:3000/api/public/waitlist", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formattedName,
          email: data.email,
          businessCategory,
          referralSource,
        }),
      });

      const result = await response.json();

      if (!response.ok || result.success === false) {
        if (result.status === "validation_error" && result.details) {
          // Display explicit validation error breakdown
          const errors = result.details.map((d: { field: string; message: string }) => d.message).join(" ");
          setErrorMessage(errors || "Validation failed. Please verify your details.");
        } else {
          // Display fallback for conflicts or general server exceptions
          setErrorMessage(result.message || "An error occurred. Please try again.");
        }
        setSubmitState("idle");
        return;
      }

      setSubmitState("success");
    } catch (err) {
      setErrorMessage("Network error. Please check your connection and try again.");
      setSubmitState("idle");
    }
  };

  if (submitState === "success") {
    return (
      <div className="text-center py-6">
        <div className="text-4xl mb-4">🎉</div>
        <h3 className="font-serif text-2xl font-bold text-[#171717] mb-2">You're on the list!</h3>
        <p className="text-sm text-[#6f6b63] leading-relaxed">
          Thank you for joining. We've reserved your priority spot. We'll reach out to <strong className="text-[#171717]">{data.email}</strong> as slots open up.
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full justify-between min-h-[340px]">
      {/* Progress Indicators */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2.5 text-[11px] font-bold uppercase tracking-wider text-[#9c968e]">
          <span>Step {step} of {TOTAL_STEPS}</span>
          <span>{step === 1 ? "Your Email" : step === 2 ? "Your Business" : step === 3 ? "Discovery" : "Review"}</span>
        </div>
        <div className="h-1 bg-[#e7e2d8] rounded-full overflow-hidden">
          <motion.div animate={{ width: `${((step - 1) / (TOTAL_STEPS - 1)) * 100}%` }} className="h-full bg-[#943333]" />
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={step}
            initial={{ opacity: 0, x: direction * 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -16 }}
            transition={{ duration: 0.28, ease: STEP_EASE }}
          >
            {step === 1 && (
              <StepEmail 
                email={data.email}
                emailRef={emailRef}
                onChange={(val) => setData(d => ({ ...d, email: val }))}
                onAdvance={advance}
                isValid={isEmailValid}
              />
            )}

            {step === 2 && (
              <StepBusiness 
                businessType={data.businessType}
                customBusinessType={data.customBusinessType}
                options={BUSINESS_TYPES}
                customRef={customBusinessRef}
                onSelect={(val) => setData(d => ({ ...d, businessType: val }))}
                onCustomChange={(val) => setData(d => ({ ...d, customBusinessType: val }))}
                onAdvance={advance}
                onGoBack={goBack}
                isValid={isStep2Valid}
              />
            )}

            {step === 3 && (
              <StepDiscovery 
                referralSource={data.referralSource}
                customReferralSource={data.customReferralSource}
                options={REFERRAL_SOURCES}
                customRef={customSourceRef}
                onSelect={(val) => setData(d => ({ ...d, referralSource: val }))}
                onCustomChange={(val) => setData(d => ({ ...d, customReferralSource: val }))}
                onAdvance={advance}
                onGoBack={goBack}
                isValid={isStep3Valid}
              />
            )}

            {step === 4 && (
          <div className="space-y-4">
            <AnimatePresence mode="wait">
              {errorMessage && <ErrorBanner message={errorMessage} />}
            </AnimatePresence>
            
            <StepReview 
              businessDisplay={data.businessType === "Other" ? data.customBusinessType : data.businessType}
              referralDisplay={data.referralSource === "Other" ? data.customReferralSource : data.referralSource}
              submitState={submitState}
              onSubmit={handleWaitlistSubmit}
              onGoBack={goBack}
            />
          </div>
        )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}