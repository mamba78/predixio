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
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={() => setOpen(null)}>
      <div className="max-w-3xl w-full max-h-[85vh] overflow-y-auto bg-gray-950 border border-cyan-500/50 rounded-2xl p-8" onClick={(e) => e.stopPropagation()}>
        <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-600 bg-clip-text text-transparent mb-6">
          {content[open].title}
        </h2>
        <div className="prose prose-invert max-w-none text-gray-300 leading-relaxed prose-p:mb-4 prose-h2:text-xl prose-h2:font-bold prose-h2:mb-3 prose-h2:text-cyan-400">
          <p className="whitespace-pre-wrap">{content[open].body}</p>
        </div>
        <button
          onClick={() => setOpen(null)}
          className="mt-8 px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold rounded-full hover:scale-105 transition"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export { useModal };