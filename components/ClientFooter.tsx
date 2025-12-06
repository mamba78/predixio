// components/ClientFooter.tsx — FINAL, CLEAN, ELEGANT (2025 PERFECTION)
"use client";

import Link from "next/link";
import { useModal } from "@/components/LegalModal";

export default function ClientFooter() {
  const { setOpen } = useModal();

  return (
    <footer className="border-t border-gray-800 py-6 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop */}
        <div className="hidden md:flex flex-wrap justify-center items-center gap-x-10 gap-y-4 mb-5 font-medium text-sm">
          <Link href="/projects" className="hover:text-primary transition font-bold tracking-wider">
            Platforms
          </Link>

          <button onClick={() => setOpen("about")} className="hover:text-primary transition">
            About
          </button>

          <a
            href={process.env.NEXT_PUBLIC_X_ACCOUNT || "https://twitter.com/predixio"}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-primary transition"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            Twitter
          </a>

          <button onClick={() => setOpen("terms")} className="hover:text-primary transition">
            Terms
          </button>
          <button onClick={() => setOpen("privacy")} className="hover:text-primary transition">
            Privacy
          </button>
          <button onClick={() => setOpen("disclaimer")} className="hover:text-primary transition">
            Disclaimer
          </button>
        </div>

        {/* Mobile */}
        <div className="md:hidden space-y-5 text-xs">
          <div className="flex items-center justify-center gap-6 text-sm font-medium">
            <Link href="/projects" className="hover:text-primary transition font-bold">
              Platforms
            </Link>
            <button onClick={() => setOpen("about")} className="hover:text-primary transition">
              About
            </button>
            <a
              href={process.env.NEXT_PUBLIC_X_ACCOUNT || "https://twitter.com/predixio"}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-primary transition"
            >
              <svg className="w-4.5 h-4.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>

          <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
            <button onClick={() => setOpen("terms")} className="hover:text-primary transition">
              Terms
            </button>
            <span className="opacity-50">•</span>
            <button onClick={() => setOpen("privacy")} className="hover:text-primary transition">
              Privacy
            </button>
            <span className="opacity-50">•</span>
            <button onClick={() => setOpen("disclaimer")} className="hover:text-primary transition">
              Disclaimer
            </button>
          </div>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-500 opacity-70 tracking-widest mt-6">
          © 2025 Predixio • Not financial advice • 18+
        </p>
      </div>
    </footer>
  );
}