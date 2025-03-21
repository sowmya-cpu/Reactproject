"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#why-choose" },
  { name: "About", href: "/#about-us" },
  { name: "Testimonials", href: "/#client-testimonials" },
  { name: "Contact", href: "/#contact-form" },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 z-50 w-full bg-black bg-opacity-90 shadow-lg">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-5 flex items-center justify-between border-b border-yellow-500 lg:border-none">
          {/* Logo Section */}
          <div className="flex items-center">
            <Link href="/" aria-label="Switch Dimension">
              <svg width="50" height="50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12">
                <rect width="200" height="200" fill="#1e1e1e" />
                <circle cx="100" cy="100" r="20" fill="#FACC15" />
                <text x="100" y="111" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontFamily="Arial" fontWeight="bold">
                  AI
                </text>
              </svg>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm font-medium text-white hover:text-yellow-400">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="text-white hover:text-yellow-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
            </button>
          </div>
        </div>
      </nav>
    </header>
  );
}
