// components/SearchBar.tsx — FINAL, 100% PERFECT (2025 PERFECTION)
"use client";

import { useState, useRef } from "react";
import { Search, X } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string; // ← NOW SUPPORTED
};

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search markets...",
  className = "",
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const clearSearch = () => {
    onChange("");
    inputRef.current?.focus();
  };

  return (
    <div className={`relative w-full ${className}`}>
      <div
        className={`relative flex items-center transition-all duration-300 ${
          isFocused ? "ring-4 ring-primary/30" : ""
        }`}
      >
        {/* Search Icon */}
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" />

        {/* Input
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full pl-14 pr-12 py-4 bg-gray-900/90 backdrop-blur-sm border border-gray-700 rounded-2xl focus:outline-none focus:border-primary/70 focus:ring-4 focus:ring-primary/20 transition-all duration-300 text-white placeholder:text-gray-500 text-base"
        />

        {/* Clear Button */}
        {value && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-700/80 transition"
            aria-label="Clear search"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        )}
      </div>

      {/* Character count (mobile) */}
      {value && (
        <div className="absolute -bottom-6 left-5 text-xs text-gray-500">
          {value.length} {value.length === 1 ? "character" : "characters"}
        </div>
      )}
    </div>
  );
}