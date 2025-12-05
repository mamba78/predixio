'use client';

import { useModal } from "@/components/LegalModal";

export default function Footer() {
  const { setOpen } = useModal();

  return (
    <footer className="border-t border-gray-800 py-8 mt-20 text-center text-sm text-gray-500">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-wrap justify-center gap-6">
          <button onClick={() => setOpen("terms")} className="hover:text-cyan-400 transition">Terms</button>
          <button onClick={() => setOpen("privacy")} className="hover:text-cyan-400 transition">Privacy</button>
          <button onClick={() => setOpen("cookies")} className="hover:text-cyan-400 transition">Cookies</button>
          <button onClick={() => setOpen("disclaimer")} className="hover:text-cyan-400 transition">Disclaimer</button>
        </div>
        <p className="mt-4 text-xs">© 2025 Predixio • Not financial advice • 18+</p>
      </div>
    </footer>
  );
}
