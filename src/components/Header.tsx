"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-amber-800 text-white shadow-lg">
      <nav className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold hover:text-amber-200 transition-colors">
            知买书
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link href="/" className="hover:text-amber-200 transition-colors">
              首页 Home
            </Link>
            <Link href="/catalog" className="hover:text-amber-200 transition-colors">
              书目 Catalog
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-4 pb-4">
            <Link
              href="/"
              className="block hover:text-amber-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              首页 Home
            </Link>
            <Link
              href="/catalog"
              className="block hover:text-amber-200 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              书目 Catalog
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
