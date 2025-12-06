// components/SearchBar.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { Search, X } from "lucide-react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

export default function SearchBar({
  value,
  onChange,
  placeholder = "Search markets...",
}: Props) {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const clearSearch = () => {
    onChange("");
    inputRef.current?.focus();
  };

  return (
    <div className="relative w-full max-w-xl mx-auto">
      <div
        className={`relative flex items-center transition-all duration-300 ${
          isFocused ? "ring-4 ring-primary/30" : ""
        }`}
      >
        <Search className="absolute left-5 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 pointer-events-none" />

        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder={placeholder}
          className="w-full pl-14 pr-12 py-5 bg-gray-900/90 border border-gray-800 rounded-2xl text-lg focus:outline-none focus:border-primary transition-all duration-300 placeholder-gray-500"
        />

        {value && (
          <button
            onClick={clearSearch}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full hover:bg-gray-700 transition"
            aria-label="Clear search"
          >
            <X className="w-5 h-5 text-gray-400" />
          </button>
        )}
      </div>

      {/* Mobile: Show character count */}
      {value && (
        <div className="absolute -bottom-6 left-5 text-xs text-gray-500">
          {value.length} {value.length === 1 ? "character" : "characters"}
        </div>
      )}
    </div>
  );
}
