'use client';

import { useState, useEffect } from "react";
import Link from "next/link";

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("predixio-consent")) {
      setShow(true);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("predixio-consent", "true");
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed inset-x-0 bottom-0 z-50 p-4 bg-gray-950/95 backdrop-blur-lg border-t border-cyan-500/30">
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-gray-300 text-center md:text-left">
          We use only essential cookies and anonymous analytics to improve your experience.{" "}
          <Link href="/legal/cookies" className="text-cyan-400 underline">
            Learn more
          </Link>
          .
        </p>
        <button
          onClick={accept}
          className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold rounded-full hover:scale-105 transition whitespace-nowrap"
        >
          Accept & Continue
        </button>
      </div>
    </div>
  );
}
