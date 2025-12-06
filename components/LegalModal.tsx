// components/LegalModal.tsx — FINAL, FLAWLESS, TYPE-SAFE (2025 EDITION)
"use client";

import { create } from "zustand";
import { X } from "lucide-react";

type ModalType = "terms" | "privacy" | "cookies" | "disclaimer" | "about" | null;

interface ModalStore {
  open: ModalType;
  setOpen: (type: ModalType) => void;
}

const useModal = create<ModalStore>((set) => ({
  open: null,
  setOpen: (type) => set({ open: type }),
}));

const content = {
  terms: {
    title: "Terms of Service",
    body: `By accessing Predixio ("Service"), you agree to be bound by these Terms. If you disagree, do not use the Service.

1. Nature of Service  
Predixio is a non-custodial data aggregator that displays publicly available prediction market information. We do not facilitate bets, hold funds, or operate as a prediction market.

2. No Financial Advice  
All data is for informational purposes only. Nothing constitutes investment, legal, or betting advice.

3. Affiliate Disclosure  
We may receive compensation when you click certain affiliate links or sign up on third-party platforms.

4. Age Restriction  
You must be 18+ (or the legal age in your jurisdiction) to use this Service.

5. Prohibited Jurisdictions  
Users from restricted countries where prediction markets are illegal are prohibited.

6. Limitation of Liability  
To the fullest extent permitted by law, Predixio and its operators shall not be liable for any indirect, incidental, or consequential damages.

Last updated: December 5, 2025`,
  },
  privacy: {
    title: "Privacy Policy",
    body: `Predixio collects zero personal data by default.

1. No Accounts  
No user accounts, emails, or KYC required.

2. Analytics  
We use Vercel Web Analytics (EU-hosted, privacy-first) — anonymous, no cookies, no cross-site tracking.

3. IP Addresses  
Anonymized within 24 hours.

4. Third-Party Links  
When you click affiliate links, those platforms set their own cookies (we have no control).

5. No Data Sales  
We never sell data. Period.

Last updated: December 5, 2025`,
  },
  cookies: {
    title: "Cookie Policy",
    body: `Predixio uses zero first-party cookies.

1. Essential  
Local storage for theme preference (dark/light mode only).

2. Analytics  
Vercel Web Analytics — cookie-less, anonymous, EU-hosted.

3. Third-Party  
Affiliate links may set cookies when clicked (controlled by partners like Polymarket).

4. Opt-Out  
Clear browser cookies or use ad blockers anytime.

Last updated: December 5, 2025`,
  },
  disclaimer: {
    title: "Disclaimer",
    body: `Predixio is not a gambling or prediction-market platform.

1. Independent Aggregator  
We only display publicly available market data. You are solely responsible for activity on third-party platforms.

2. No Warranties  
Data is provided "as is" without guarantee of accuracy or completeness.

3. Risk Warning  
Prediction markets involve substantial risk. Consult a financial advisor before trading.

Last updated: December 5, 2025`,
  },
  about: {
    title: "About Predixio",
    body: `Predixio is the fastest, most beautiful, and most powerful real-time prediction market dashboard ever built.

No accounts. No tracking. No bullshit.

We aggregate live data from Polymarket (and soon Kalshi, Manifold, Drift, Azuro) into one blazing-fast, installable, offline-first PWA.

Built with love by @mamba78 — for degens, by a degen.

Not affiliated with any platform. Not financial advice. 18+ only.

Last updated: December 2025`,
  },
} as const;

export default function LegalModal() {
  const { open, setOpen } = useModal();

  if (!open) return null;

  const { title, body } = content[open];

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-6 bg-black/90 backdrop-blur-2xl"
      onClick={() => setOpen(null)}
    >
      <div
        className="relative max-w-3xl w-full max-h-[90vh] overflow-y-auto bg-gradient-to-br from-gray-950 via-black to-gray-950 border border-primary/40 rounded-3xl p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Subtle glow background */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 blur-3xl" />
        </div>

        {/* Close Button */}
        <button
          onClick={() => setOpen(null)}
          className="absolute top-6 right-6 z-10 p-3 rounded-full bg-gray-800/80 hover:bg-gray-700 transition backdrop-blur-sm"
          aria-label="Close modal"
        >
          <X className="w-6 h-6 text-gray-300" />
        </button>

        {/* Title */}
        <h2 className="relative z-10 text-5xl md:text-6xl font-black bg-gradient-to-r from-primary via-cyan-400 to-accent bg-clip-text text-transparent mb-10 pr-12 leading-tight">
          {title}
        </h2>

        {/* Content */}
        <div className="relative z-10 prose prose-invert max-w-none text-gray-300 text-base md:text-lg leading-relaxed space-y-6 font-light">
          <pre className="whitespace-pre-wrap font-sans break-words">
            {body}
          </pre>
        </div>

        {/* Close Button */}
        <div className="relative z-10 mt-12 text-center">
          <button
            onClick={() => setOpen(null)}
            className="px-12 py-5 bg-gradient-to-r from-primary to-accent text-black font-bold text-xl rounded-full hover:scale-105 active:scale-95 transition-all duration-300 shadow-2xl hover:shadow-primary/50"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

export { useModal };