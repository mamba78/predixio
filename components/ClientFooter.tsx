// components/ClientFooter.tsx
"use client";

import { useModal } from "@/components/LegalModal";

export default function ClientFooter() {
  const { setOpen } = useModal();

  return (
    <footer className="border-t border-gray-800 py-8 text-center text-sm text-gray-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6 mb-4">
          <button
            onClick={() => setOpen("terms")}
            className="hover:text-cyan-400 transition-colors duration-200 focus-visible:outline-none focus-visible:text-cyan-400"
            aria-label="View Terms of Service"
          >
            Terms
          </button>
          <button
            onClick={() => setOpen("privacy")}
            className="hover:text-cyan-400 transition-colors duration-200 focus-visible:outline-none focus-visible:text-cyan-400"
            aria-label="View Privacy Policy"
          >
            Privacy
          </button>
          <button
            onClick={() => setOpen("cookies")}
            className="hover:text-cyan-400 transition-colors duration-200 focus-visible:outline-none focus-visible:text-cyan-400"
            aria-label="View Cookie Policy"
          >
            Cookies
          </button>
          <button
            onClick={() => setOpen("disclaimer")}
            className="hover:text-cyan-400 transition-colors duration-200 focus-visible:outline-none focus-visible:text-cyan-400"
            aria-label="View Disclaimer"
          >
            Disclaimer
          </button>
        </div>
        <p className="text-xs opacity-80">
          © 2025 Predixio • Not financial advice • 18+
        </p>
      </div>
    </footer>
  );
}
