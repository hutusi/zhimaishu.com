"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white/95 backdrop-blur-sm border-b border-stone-200/60 sticky top-0 z-50">
      <nav className="max-w-5xl mx-auto px-6 py-5">
        <div className="flex justify-between items-center">
          <Link
            href="/"
            className="group flex items-center gap-3"
          >
            <span className="text-2xl font-semibold text-slate-800 tracking-wide">
              只买书
            </span>
            <span className="hidden sm:inline text-sm text-slate-400 font-normal tracking-wider uppercase">
              Zhimaishu
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            <Link
              href="/"
              className="text-slate-600 hover:text-slate-900 transition-colors text-sm tracking-wide"
            >
              首页
            </Link>
            <Link
              href="/catalog"
              className="text-slate-600 hover:text-slate-900 transition-colors text-sm tracking-wide"
            >
              书目
            </Link>
            <div className="w-px h-5 bg-stone-200" />
            <Link
              href="/about"
              className="text-slate-600 hover:text-slate-900 transition-colors text-sm tracking-wide"
            >
              关于
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 -mr-2 text-slate-600 hover:text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-6 pt-6 border-t border-stone-100 space-y-4">
            <Link
              href="/"
              className="block text-slate-600 hover:text-slate-900 transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              首页 Home
            </Link>
            <Link
              href="/catalog"
              className="block text-slate-600 hover:text-slate-900 transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              书目 Catalog
            </Link>
            <Link
              href="/about"
              className="block text-slate-600 hover:text-slate-900 transition-colors py-1"
              onClick={() => setIsMenuOpen(false)}
            >
              关于 About
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
