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
    <header className="fixed top-0 right-0 z-50 w-full bg-black bg-opacity-90">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="w-full py-5 flex items-center justify-between border-b border-yellow-500">
          {/* Logo */}
          <Link href="/" aria-label="Switch Dimension">
            <span className="text-xl font-bold text-white">Switch Dimension</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="text-sm font-medium text-white hover:text-yellow-400">
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu */}
          <button type="button" className="text-white lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="py-4 lg:hidden">
            {navItems.map((item) => (
              <Link key={item.name} href={item.href} className="block px-3 py-2 text-sm font-medium text-white">
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
}
