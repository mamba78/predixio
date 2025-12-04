"use client";

import { useState } from "react";

const categories = ["All", "Politics", "Crypto", "Sports", "Entertainment", "Climate", "Economics"];

export default function CategoryTabs() {
  const [active, setActive] = useState("All");

  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setActive(cat)}
          className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 ${
            active === cat
              ? "bg-gradient-to-r from-primary to-accent text-black shadow-lg shadow-primary/50"
              : "bg-card border border-border text-gray-400 hover:border-primary/50 hover:text-primary"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
