// components/CategoryTabs.tsx
"use client";

import { useMemo } from "react";

type Props = {
  active: string;
  onChange: (cat: string) => void;
  markets: any[];
};

export default function CategoryTabs({ active, onChange, markets }: Props) {
  const availableCategories = useMemo(() => {
    const cats = ["All", ...new Set(markets.map(m => m.category).filter(Boolean))];
    return cats;
  }, [markets]);

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-12">
      {availableCategories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`px-6 py-3 rounded-full font-medium transition-all ${
            active === cat
              ? "bg-gradient-to-r from-primary to-accent text-black shadow-lg"
              : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}