// components/ViewToggle.tsx — THE FINAL ICON
"use client";

import { Grid3x3, List } from "lucide-react";

type Props = {
  isGrid: boolean;
  toggle: () => void;
};

export default function ViewToggle({ isGrid, toggle }: Props) {
  return (
    <button
      onClick={toggle}
      aria-label={isGrid ? "Switch to list view" : "Switch to grid view"}
      className="group relative px-6 py-4 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-2xl hover:scale-110 active:scale-95 transition-all duration-300 shadow-2xl hover:shadow-primary/50 overflow-hidden"
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 transition-transform duration-700 rounded-full" />

      {/* Icons with smooth morph */}
      <div className="relative flex items-center gap-3">
        <div
          className={`transition-all duration-500 ${
            isGrid ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <Grid3x3 className="w-6 h-6" strokeWidth={3} />
        </div>

        <div
          className={`absolute transition-all duration-500 ${
            !isGrid ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-8"
          }`}
        >
          <List className="w-6 h-6" strokeWidth={3} />
        </div>

        {/* Text */}
        <span className="text-sm font-black tracking-wider">
          {isGrid ? "LIST" : "GRID"}
        </span>
      </div>

      {/* Ripple effect on click */}
      <span className="absolute inset-0 rounded-2xl ring-4 ring-white/0 group-active:ring-white/30 transition-all duration-200" />
    </button>
  );
}
