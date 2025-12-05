// components/Navbar.tsx
"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
  };

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black/80 dark:bg-black/80 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg group-hover:scale-110 transition" />
            <span className="text-2xl font-black hero-gradient">Predixio</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-gray-300 hover:text-white transition">Markets</Link>
            <Link href="/about" className="text-gray-300 hover:text-white transition">About</Link>
            <a href="https://twitter.com/predixio" target="_blank" rel="noopener" className="text-gray-300 hover:text-white transition">
              Twitter
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              <Sun className="w-5 h-5 block dark:hidden" />
              <Moon className="w-5 h-5 hidden dark:block" />
            </button>

            {/* Mobile Menu */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-3 rounded-full hover:bg-gray-800 transition"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/" className="text-lg hover:text-primary transition">Markets</Link>
              <Link href="/about" className="text-lg hover:text-primary transition">About</Link>
              <a href="https://twitter.com/predixio" target="_blank" rel="noopener" className="text-lg hover:text-primary transition">
                Twitter
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}