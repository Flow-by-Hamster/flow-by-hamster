"use client";

import { ReactNode, useEffect, useState } from "react";
import { createPortal } from "react-dom";

type MobileDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  children: ReactNode;
};

export function MobileDrawer({
  isOpen,
  onClose,
  title = "Menu",
  children,
}: MobileDrawerProps) {
  // 1. Track if the component has mounted on the client side
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  // 2. Return null on the server side to protect createPortal
  if (!mounted) return null;

  // 3. Safe to render portal on the client side now—CSS animations remain untouched!
  return createPortal(
    <div className={`fixed inset-0 z-[60] ${isOpen ? "visible" : "pointer-events-none invisible"}`}>
      {/* Backdrop with smooth opacity fade */}
      <div
        className={`fixed inset-0 bg-black/30 transition-opacity duration-300 ease-in-out ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={onClose}
      />

      {/* Drawer with smooth sliding ease-in-out motion */}
      <aside
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className={`fixed inset-y-0 right-0 z-[70] flex w-[84vw] max-w-[320px] flex-col bg-white p-5 shadow-2xl transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="mb-6 flex items-center justify-between">
          <p className="text-sm font-semibold text-[#171717]">
            {title}
          </p>

          <button
            type="button"
            onClick={onClose}
            className="rounded-full border border-[#e7e2d8] px-3 py-1.5 text-sm text-[#6f6b63]"
          >
            Close
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {children}
        </div>
      </aside>
    </div>,
    document.body
  );
}