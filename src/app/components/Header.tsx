"use client";

import Link from "next/link";
import { useState, memo, useCallback } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <header className="container mb-8 border-b border-neutral-800 pb-4">
      {/* Mobile: Name + toggle button row */}
      <div className="relative sm:hidden mb-4">
        <Link href="/">
          <div>
            <h1>Bryan King</h1>
            <p>Software Design & Engineering</p>
            <p>Newport, Kentucky, USA</p>
          </div>
        </Link>
        
        <button
          onClick={toggleMenu}
          className="absolute top-0 right-0 p-2 -m-2"
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile expanded nav */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col">
              <Link href="/" onClick={closeMenu}>Work</Link>
              <Link href="/about" onClick={closeMenu}>About</Link>
              <Link href="/influences" onClick={closeMenu}>Influences</Link>
            </div>
            <div className="flex flex-col">
              <Link href="https://twitter.com/bryan_king" target="_blank">Twitter</Link>
              <Link href="https://linkedin.com/in/bpking15" target="_blank">LinkedIn</Link>
              <Link href="https://github.com/boldlybryan" target="_blank">GitHub</Link>
            </div>
          </div>
          <div className="mt-4 -ml-2">
            <ThemeToggle />
          </div>
        </div>
      )}

      {/* Desktop: Original grid layout */}
      <div className="hidden sm:grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        <Link href="/">
          <div>
            <h1>Bryan King</h1>
            <p>Software Design & Engineering</p>
            <p>Newport, Kentucky, USA</p>
          </div>
        </Link>
        <div className="flex flex-col xl:col-start-3">
          <Link href="/">Work</Link>
          <Link href="/about">About</Link>
          <Link href="/influences">Influences</Link>
        </div>
        <div className="flex flex-col">
          <Link href="https://twitter.com/bryan_king" target="_blank">Twitter</Link>
          <Link href="https://linkedin.com/in/bpking15" target="_blank">LinkedIn</Link>
          <Link href="https://github.com/boldlybryan" target="_blank">GitHub</Link>
        </div>
      </div>
    </header>
  );
}

// Memoize to prevent unnecessary re-renders
export default memo(Header);