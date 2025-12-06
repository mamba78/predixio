// components/CategoryTabs.tsx — THE FINAL COMMAND CENTER
"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";

type Props = {
  active: string;
  onChange: (cat: string) => void;
  markets: any[];
};

export default function CategoryTabs({ active, onChange, markets }: Props) {
  const [hovered, setHovered] = useState<string | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(markets.map((m: any) => m.category).filter(Boolean));
    return ["All", ...Array.from(cats).sort()];
  }, [markets]);

  const getLabel = (cat: string) => {
    if (cat === "All") return "ALL MARKETS";
    return cat.toUpperCase();
  };

  return (
    <div className="relative flex flex-wrap justify-center gap-4 mb-12 px-4">
      {/* Animated background glow */}
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10 blur-3xl" />
      </div>

      {categories.map((cat) => {
        const isActive = active === cat;
        const isHovered = hovered === cat;

        return (
          <motion.button
            key={cat}
            onClick={() => onChange(cat)}
            onMouseEnter={() => setHovered(cat)}
            onMouseLeave={() => setHovered(null)}
            className="relative px-8 py-4 rounded-full font-black text-sm tracking-wider overflow-hidden transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            animate={{
              boxShadow: isActive
                ? "0 0 40px rgba(0, 245, 255, 0.6), 0 0 80px rgba(215, 0, 255, 0.4)"
                : "0 8px 32px rgba(0, 0, 0, 0.4)",
            }}
          >
            {/* Background */}
            <div
              className={`absolute inset-0 transition-all duration-500 ${
                isActive
                  ? "bg-gradient-to-r from-primary to-accent"
                  : isHovered
                    ? "bg-gradient-to-r from-gray-700 to-gray-600"
                    : "bg-gray-800/90"
              }`}
            />

            {/* Animated border glow */}
            {isActive && (
              <motion.div
                layoutId="activeCategoryGlow"
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow:
                    "0 0 60px rgba(0, 245, 255, 0.8), inset 0 0 60px rgba(215, 0, 255, 0.4)",
                }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              />
            )}

            {/* Text */}
            <span
              className={`relative z-10 transition-all duration-300 ${
                isActive ? "text-black drop-shadow-2xl" : "text-gray-400"
              }`}
            >
              {getLabel(cat)}
            </span>

            {/* Pulse ring on active */}
            {isActive && (
              <motion.div
                className="absolute inset-0 rounded-full border-4 border-white/30"
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.6, 0, 0.6],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeOut",
                }}
              />
            )}
          </motion.button>
        );
      })}
    </div>
  );
}
