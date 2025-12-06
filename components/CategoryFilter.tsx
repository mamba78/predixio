// components/CategoryFilter.tsx — FINAL, FLAWLESS, REAL CATEGORIES (2025 PERFECTION)
"use client";

import { useMemo } from "react";

type Props = {
  markets: any[];
  active: string;
  onChange: (category: string) => void;
};

export default function CategoryFilter({ markets, active, onChange }: Props) {
  const categories = useMemo(() => {
    const cats = new Set<string>();

    markets.forEach((m) => {
      // Polymarket uses tags[0]
      if (m.platform === "Polymarket" && m.tags?.[0]) {
        cats.add(m.tags[0]);
      }
      // Manifold uses group.name or tags
      else if (m.platform === "Manifold") {
        if (m.group?.name) cats.add(m.group.name);
        else if (m.tags?.[0]) cats.add(m.tags[0]);
      }
      // Fallback: use category field if exists and only if it's not "Other"
      else if (m.category && m.category !== "Other" && m.category !== "Uncategorized") {
        cats.add(m.category);
      }
    });

    // Always include "All" at the top
    const sorted = Array.from(cats).sort((a, b) => a.localeCompare(b));
    return ["All", ...sorted];
  }, [markets]);

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-7 py-3.5 rounded-full font-bold text-sm tracking-wider transition-all duration-300 transform hover:scale-105 shadow-lg ${
            active === cat
              ? "bg-gradient-to-r from-primary to-accent text-black ring-4 ring-primary/40 shadow-2xl"
              : "bg-gray-800/90 text-gray-300 hover:text-white hover:bg-gray-700/90 backdrop-blur-sm"
          }`}
        >
          {cat === "All" ? "All Markets" : cat}
        </button>
      ))}
    </div>
  );
}