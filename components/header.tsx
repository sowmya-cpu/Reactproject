"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Features", href: "/#why-choose" },
  { name: "About", href: "/#about-us" },
  { name: "Testimonials", href: "/#client-testimonials" },
  { name: "Contact", href: "/#contact-form" },
]

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 right-0 z-50 w-full bg-black bg-opacity-90">
      <nav className="max-w-7xl mx-auto px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-6 flex items-center justify-between border-b border-yellow-500 lg:border-none">
          <div className="flex items-center">
            <Link href="/">
              <span className="sr-only">Switch Dimension</span>
              <svg width="50" height="50" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="h-12 w-12">
                <rect width="200" height="200" fill="#1e1e1e" />
                <circle cx="100" cy="100" r="20" fill="#FACC15" />
                <circle cx="50" cy="50" r="6" fill="#EAB308" />
                <circle cx="150" cy="50" r="6" fill="#EAB308" />
                <circle cx="50" cy="150" r="6" fill="#EAB308" />
                <circle cx="150" cy="150" r="6" fill="#EAB308" />
                <circle cx="100" cy="20" r="6" fill="#EAB308" />
                <circle cx="100" cy="180" r="6" fill="#EAB308" />
                <circle cx="20" cy="100" r="6" fill="#EAB308" />
                <circle cx="180" cy="100" r="6" fill="#EAB308" />
                <line x1="100" y1="100" x2="50" y2="50" stroke="#FACC15" strokeWidth="2" />
                <line x1="100" y1="100" x2="150" y2="50" stroke="#FACC15" strokeWidth="2" />
                <line x1="100" y1="100" x2="50" y2="150" stroke="#FACC15" strokeWidth="2" />
                <line x1="100" y1="100" x2="150" y2="150" stroke="#FACC15" strokeWidth="2" />
                <line x1="100" y1="100" x2="100" y2="20" stroke="#FACC15" strokeWidth="2" />
                <line x1="100" y1="100" x2="100" y2="180" stroke="#FACC15" strokeWidth="2" />
                <text x="100" y="111" textAnchor="middle" fill="#FFFFFF" fontSize="20" fontFamily="Arial" fontWeight="bold">AI</text>
              </svg>
            </Link>
          </div>
          <div className="hidden lg:flex lg:items-center lg:space-x-6">
            {navItems.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className="text-sm font-medium text-white hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="lg:hidden">
            <button
              type="button"
              className="text-white hover:text-yellow-400"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="py-4 lg:hidden">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-sm font-medium text-white hover:text-yellow-400"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

