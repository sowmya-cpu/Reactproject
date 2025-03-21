import { Instagram, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="py-12 px-6 lg:px-8 bg-neutral-900">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400 text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Switch Dimension. All rights reserved.
        </p>
        <div className="flex space-x-6">
          <Link href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <Instagram className="h-6 w-6 text-gray-400 hover:text-white" />
          </Link>
          <Link href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <Twitter className="h-6 w-6 text-gray-400 hover:text-white" />
          </Link>
          <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className="h-6 w-6 text-gray-400 hover:text-white" />
          </Link>
        </div>
      </div>
    </footer>
  )
}

