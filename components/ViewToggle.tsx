'use client';

import { useState } from "react";

export default function ViewToggle() {
  const [view, setView] = useState<"grid" | "list">("grid");

  const toggle = () => {
    const newView = view === "grid" ? "list" : "grid";
    setView(newView);
    document.documentElement.setAttribute("data-view", newView);
  };

  return (
    <button
      onClick={toggle}
      className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-cyan-500/20 to-purple-600/20 backdrop-blur border border-cyan-500/30 rounded-full text-cyan-400 font-medium hover:from-cyan-500/40 hover:to-purple-600/40 transition-all"
    >
      {view === "grid" ? (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
          </svg>
          Grid View
        </>
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          List View
        </>
      )}
    </button>
  );
}
