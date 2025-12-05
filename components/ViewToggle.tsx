'use client';

import { useState } from "react";

export default function ViewToggle() {
  const [isGrid, setIsGrid] = useState(true);

  const toggle = () => {
    setIsGrid(!isGrid);
    document.documentElement.dataset.view = isGrid ? "list" : "grid";
  };

  return (
    <button
      onClick={toggle}
      className="px-6 py-3 bg-gradient-to-r from-cyan-500 to-purple-600 text-black font-bold rounded-full hover:scale-105 transition shadow-lg"
    >
      {isGrid ? "List View" : "Grid View"}
    </button>
  );
}