// components/ViewToggle.tsx
"use client";

type Props = {
  isGrid: boolean;
  toggle: () => void;
};

export default function ViewToggle({ isGrid, toggle }: Props) {
  return (
    <button
      onClick={toggle}
      className="px-8 py-4 bg-gradient-to-r from-primary to-accent text-black font-bold rounded-2xl hover:scale-105 transition shadow-lg whitespace-nowrap"
    >
      {isGrid ? "List View" : "Grid View"}
    </button>
  );
}