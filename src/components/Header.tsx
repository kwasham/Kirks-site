"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "./ui/button"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo-gpt-webflow-ecommerce-template.png"
                alt="GPT X Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/pricing" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Pricing
              </Link>
              <Link href="/features" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Features
              </Link>
            </nav>
          </div>

          {/* Right side actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium hover:text-blue-600 transition-colors">
              Login
            </Link>
            <Button asChild size="sm">
              <Link href="/signup">Get started</Link>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col gap-4">
              <Link href="/" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-sm font-medium hover:text-blue-600 transition-colors">
                About
              </Link>
              <Link href="/pricing" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Pricing
              </Link>
              <Link href="/features" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Features
              </Link>
              <Link href="/login" className="text-sm font-medium hover:text-blue-600 transition-colors">
                Login
              </Link>
              <Button asChild size="sm" className="w-full">
                <Link href="/signup">Get started</Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
