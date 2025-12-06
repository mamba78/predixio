// components/Navbar.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X, Sun, Moon } from "lucide-react";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(resolvedTheme === "dark" ? "light" : "dark");
  };

  // Close mobile menu on route change (optional but smooth UX)
  useEffect(() => {
    const close = () => setMobileOpen(false);
    window.addEventListener("popstate", close);
    return () => window.removeEventListener("popstate", close);
  }, []);

  return (
    <nav className="fixed top-0 inset-x-0 z-50 bg-black/80 backdrop-blur-xl border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg group-hover:scale-110 transition" />
            <span className="text-2xl font-black hero-gradient">Predixio</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-300 hover:text-white transition"
            >
              Markets
            </Link>
            <Link
              href="/about"
              className="text-gray-300 hover:text-white transition"
            >
              About
            </Link>
            <a
              href="https://twitter.com/predixio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition"
            >
              Twitter
            </a>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle – now 100% safe */}
            <button
              onClick={toggleTheme}
              aria-label="Toggle dark mode"
              className="p-3 rounded-full bg-gray-800 hover:bg-gray-700 transition"
            >
              {mounted && resolvedTheme === "dark" ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-3 rounded-full hover:bg-gray-800 transition"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className="text-lg hover:text-primary transition"
                onClick={() => setMobileOpen(false)}
              >
                Markets
              </Link>
              <Link
                href="/about"
                className="text-lg hover:text-primary transition"
                onClick={() => setMobileOpen(false)}
              >
                About
              </Link>
              <a
                href="https://twitter.com/predixio"
                target="_blank"
                rel="noopener noreferrer"
                className="text-lg hover:text-primary transition"
              >
                Twitter
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
