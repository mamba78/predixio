'use client';

import { useState } from "react";

const categories = ["All", "Politics", "Crypto", "Sports", "Entertainment", "Economics", "Climate"];

export default function HeaderControls({ onCategory }: { onCategory: (cat: string) => void }) {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  return (
    <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
      <div className="flex flex-wrap gap-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => onCategory(cat)}
            className="px-4 py-2 rounded-full text-sm font-medium bg-gray-800 hover:bg-cyan-500/20 transition"
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="flex gap-4">
        <button onClick={() => setView(view === "grid" ? "list" : "grid")} className="text-gray-400 hover:text-white">
          {view === "grid" ? "List" : "Grid"} View
        </button>
        <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")} className="text-gray-400 hover:text-white">
          {theme === "dark" ? "Light" : "Dark"} Mode
        </button>
      </div>
    </div>
  );
}
