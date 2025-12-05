'use client';

import { useState } from "react";

const categories = ["All", "Politics", "Crypto", "Sports", "Entertainment", "Economics", "Climate"];

export default function HeaderControls({ onSearch, onCategory }: { onSearch: (q: string) => void; onCategory: (cat: string) => void }) {
  const [search, setSearch] = useState("");
  const [activeCat, setActiveCat] = useState("All");

  const handleCategory = (cat: string) => {
    setActiveCat(cat);
    onCategory(cat);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 mb-8">
      {/* Search */}
      <input
        type="text"
        placeholder="Search markets..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          onSearch(e.target.value);
        }}
        className="w-full md:w-96 px-6 py-3 bg-gray-900/80 border border-gray-700 rounded-full text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition"
      />

      {/* Categories */}
      <div className="flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => handleCategory(cat)}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              activeCat === cat
                ? "bg-gradient-to-r from-cyan-500 to-purple-600 text-black shadow-lg"
                : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
    </div>
  );
}