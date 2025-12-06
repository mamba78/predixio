// components/Navbar.tsx — FINAL CLEAN PERFECTION (2025 EDITION)
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle"; // ← NEW: External toggle

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Close mobile menu on navigation
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
          <Link
            href="/"
            className="flex items-center gap-3 group"
            onClick={() => setMobileOpen(false)}
          >
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-accent rounded-lg group-hover:scale-110 transition duration-300" />
            <span className="text-2xl font-black hero-gradient tracking-tight">Predixio</span>
          </Link>

          {/* Right Side */}
          <div className="flex items-center gap-4">
            {/* Theme Toggle — Now using external component */}
            <ThemeToggle />

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-3 rounded-full hover:bg-gray-800/80 transition"
              aria-label="Toggle menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6 text-gray-300" />
              ) : (
                <Menu className="w-6 h-6 text-gray-300" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu — Clean & minimal */}
        {mobileOpen && (
          <div className="md:hidden mt-6 pb-6 border-t border-gray-800 pt-6">
            <div className="h-12 flex items-center justify-center">
              <p className="text-gray-500 text-sm">All markets are on the homepage</p>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}