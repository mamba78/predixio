// components/CategoryFilter.tsx
"use client";

import { useMemo } from "react";

type Props = {
  markets: any[];
  active: string;
  onChange: (category: string) => void;
};

export default function CategoryFilter({ markets, active, onChange }: Props) {
  const categories = useMemo(() => {
    const cats = new Set(markets.map((m) => m.category).filter(Boolean));
    return ["All", ...Array.from(cats).sort()];
  }, [markets]);

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-6 py-3 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
            active === cat
              ? "bg-gradient-to-r from-primary to-accent text-black shadow-xl ring-4 ring-primary/30"
              : "bg-gray-800/80 text-gray-300 hover:text-white hover:bg-gray-700/80 backdrop-blur-sm"
          }`}
        >
          {cat === "All" ? "All Markets" : cat}
        </button>
      ))}
    </div>
  );
}
