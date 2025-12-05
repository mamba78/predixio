'use client';

import { create } from "zustand";

type ModalType = "terms" | "privacy" | "cookies" | "disclaimer" | null;

interface ModalStore {
  open: ModalType;
  setOpen: (type: ModalType) => void;
}

const useModal = create<ModalStore>((set) => ({
  open: null,
  setOpen: (type) => set({ open: type }),
}));

export default function LegalModal() {
  const { open, setOpen } = useModal();

  const content = {
    terms: { title: "Terms of Service", body: "By using Predixio you agree to our terms. We are an independent aggregator, not a betting platform. 18+ only." },
    privacy: { title: "Privacy Policy", body: "We collect zero personal data. Only anonymous analytics are used." },
    cookies: { title: "Cookie Policy", body: "We use only essential and anonymous analytics cookies." },
    disclaimer: { title: "Disclaimer", body: "Predixio is not affiliated with any listed platform. All data is provided as-is." },
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setOpen(null)}>
      <div className="max-w-2xl w-full max-h-[85vh] overflow-y-auto bg-gray-950 border border-cyan-500/50 rounded-2xl p-8" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-6">
          {content[open].title}
        </h2>
        <p className="text-gray-300 leading-relaxed">{content[open].body}</p>
        <button onClick={() => setOpen(null)} className="mt-8 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold rounded-full hover:scale-105 transition">
          Close
        </button>
      </div>
    </div>
  );
}

// This is the line that was missing — fixes the import error
export { useModal };
