// components/ViewToggle.tsx
"use client";

import { Grid3X3, List } from "lucide-react";

type Props = {
  isGrid: boolean;
  toggle: () => void;
};

export default function ViewToggle({ isGrid, toggle }: Props) {
  return (
    <button
      onClick={toggle}
      className="flex items-center gap-3 px-6 py-4 bg-gray-900/90 border border-gray-800 rounded-2xl hover:border-primary transition-all hover:shadow-lg hover:shadow-primary/20"
      aria-label={isGrid ? "Switch to list view" : "Switch to grid view"}
    >
      {isGrid ? (
        <>
          <List className="w-5 h-5" />
          <span className="font-medium hidden sm:inline">List</span>
        </>
      ) : (
        <>
          <Grid3X3 className="w-5 h-5" />
          <span className="font-medium hidden sm:inline">Grid</span>
        </>
      )}
    </button>
  );
}