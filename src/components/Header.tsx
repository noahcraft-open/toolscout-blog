"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-blue-600">ToolScout</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <div className="relative group">
              <button className="text-gray-700 hover:text-blue-600 transition-colors flex items-center">
                Categories
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              <div className="absolute top-full left-0 w-48 bg-white shadow-lg rounded-md py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                <Link
                  href="/category/invoicing"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Invoicing
                </Link>
                <Link
                  href="/category/legal"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Legal
                </Link>
                <Link
                  href="/category/seo"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  SEO
                </Link>
                <Link
                  href="/category/productivity"
                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                >
                  Productivity
                </Link>
              </div>
            </div>
            <Link
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              About
            </Link>
          </div>

          {/* Mobile menu button */}
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
          <div className="md:hidden py-4 border-t border-gray-200">
            <Link
              href="/"
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <div className="py-2">
              <span className="text-gray-500 text-sm">Categories</span>
              <div className="pl-4 mt-1 space-y-1">
                <Link
                  href="/category/invoicing"
                  className="block py-1 text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Invoicing
                </Link>
                <Link
                  href="/category/legal"
                  className="block py-1 text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Legal
                </Link>
                <Link
                  href="/category/seo"
                  className="block py-1 text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  SEO
                </Link>
                <Link
                  href="/category/productivity"
                  className="block py-1 text-gray-700 hover:text-blue-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Productivity
                </Link>
              </div>
            </div>
            <Link
              href="/about"
              className="block py-2 text-gray-700 hover:text-blue-600"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
