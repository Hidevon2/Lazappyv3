"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Search, ShoppingCart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useCart } from "@/lib/cart-context"

interface HeaderProps {
  onSearch?: (query: string) => void
}

export function Header({ onSearch }: HeaderProps) {
  const [searchQuery, setSearchQuery] = useState("")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { state } = useCart()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch?.(searchQuery)
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">S</span>
            </div>
            <span className="font-bold text-xl">ShopHub</span>
          </Link>

          {/* Desktop Search */}
          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4"
              />
            </div>
          </form>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="/" className="text-sm font-medium hover:text-primary transition-colors">
              Products
            </Link>
            <Link href="/cart" className="relative">
              <Button variant="ghost" size="sm" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {state.itemCount > 0 && (
                  <span className="absolute -top-2 -right-2 h-5 w-5 rounded-full bg-primary text-primary-foreground text-xs flex items-center justify-center">
                    {state.itemCount}
                  </span>
                )}
              </Button>
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <form onSubmit={handleSearch} className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input
                  type="search"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4"
                />
              </div>
            </form>
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/cart"
                className="flex items-center space-x-2 text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <ShoppingCart className="h-4 w-4" />
                <span>Cart ({state.itemCount})</span>
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
