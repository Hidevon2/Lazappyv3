"use client"

import { useState, useEffect } from "react"
import { ProductCard } from "./product-card"
import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { type Product, fetchProducts } from "@/lib/api"

interface ProductGridProps {
  searchQuery?: string
  selectedCategory?: string
  priceRange?: [number, number]
  minRating?: number
}

export function ProductGrid({ searchQuery, selectedCategory, priceRange, minRating }: ProductGridProps) {
  const [allProducts, setAllProducts] = useState<Product[]>([])
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [sortBy, setSortBy] = useState<string>("default")
  
  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [productsPerPage] = useState(12)
  const [totalPages, setTotalPages] = useState(1)

  const loadAllProducts = async () => {
    try {
      setLoading(true)
      // Load all products at once since we have a manageable number (30 products)
      const response = await fetchProducts(100, 0, searchQuery, selectedCategory)
      setAllProducts(response.products)
      setError(null)
    } catch (err) {
      setError("Failed to load products. Please try again.")
      console.error("Error loading products:", err)
    } finally {
      setLoading(false)
    }
  }

  // Filter and sort products
  useEffect(() => {
    let filtered = [...allProducts]

    // Apply price filter
    if (priceRange) {
      filtered = filtered.filter((product) => {
        const discountedPrice = product.price * (1 - product.discountPercentage / 100)
        return discountedPrice >= priceRange[0] && discountedPrice <= priceRange[1]
      })
    }

    // Apply rating filter
    if (minRating && minRating > 0) {
      filtered = filtered.filter((product) => product.rating >= minRating)
    }

    // Apply sorting
    switch (sortBy) {
      case "price-low":
        filtered.sort((a, b) => {
          const priceA = a.price * (1 - a.discountPercentage / 100)
          const priceB = b.price * (1 - b.discountPercentage / 100)
          return priceA - priceB
        })
        break
      case "price-high":
        filtered.sort((a, b) => {
          const priceA = a.price * (1 - a.discountPercentage / 100)
          const priceB = b.price * (1 - b.discountPercentage / 100)
          return priceB - priceA
        })
        break
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating)
        break
      case "discount":
        filtered.sort((a, b) => b.discountPercentage - a.discountPercentage)
        break
      default:
        // Keep original order
        break
    }

    setFilteredProducts(filtered)
    setCurrentPage(1) // Reset to first page when filters change
  }, [allProducts, priceRange, minRating, sortBy])

  // Calculate pagination
  useEffect(() => {
    const total = Math.ceil(filteredProducts.length / productsPerPage)
    setTotalPages(total)
  }, [filteredProducts.length, productsPerPage])

  useEffect(() => {
    loadAllProducts()
  }, [searchQuery, selectedCategory])

  // Get current page products
  const startIndex = (currentPage - 1) * productsPerPage
  const endIndex = startIndex + productsPerPage
  const currentProducts = filteredProducts.slice(startIndex, endIndex)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const renderPaginationButtons = () => {
    const buttons = []
    const maxVisiblePages = 5

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total pages is small
      for (let i = 1; i <= totalPages; i++) {
        buttons.push(
          <Button
            key={i}
            variant={currentPage === i ? "default" : "outline"}
            size="sm"
            onClick={() => handlePageChange(i)}
            className="w-10 h-10"
          >
            {i}
          </Button>
        )
      }
    } else {
      // Show first page
      buttons.push(
        <Button
          key={1}
          variant={currentPage === 1 ? "default" : "outline"}
          size="sm"
          onClick={() => handlePageChange(1)}
          className="w-10 h-10"
        >
          1
        </Button>
      )

      // Show ellipsis if current page is far from start
      if (currentPage > 3) {
        buttons.push(
          <span key="ellipsis1" className="px-2 text-muted-foreground">
            ...
          </span>
        )
      }

      // Show pages around current page
      const start = Math.max(2, currentPage - 1)
      const end = Math.min(totalPages - 1, currentPage + 1)

      for (let i = start; i <= end; i++) {
        if (i !== 1 && i !== totalPages) {
          buttons.push(
            <Button
              key={i}
              variant={currentPage === i ? "default" : "outline"}
              size="sm"
              onClick={() => handlePageChange(i)}
              className="w-10 h-10"
            >
              {i}
            </Button>
          )
        }
      }

      // Show ellipsis if current page is far from end
      if (currentPage < totalPages - 2) {
        buttons.push(
          <span key="ellipsis2" className="px-2 text-muted-foreground">
            ...
          </span>
        )
      }

      // Show last page
      if (totalPages > 1) {
        buttons.push(
          <Button
            key={totalPages}
            variant={currentPage === totalPages ? "default" : "outline"}
            size="sm"
            onClick={() => handlePageChange(totalPages)}
            className="w-10 h-10"
          >
            {totalPages}
          </Button>
        )
      }
    }

    return buttons
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <Skeleton className="h-6 w-32" />
          <Skeleton className="h-10 w-48" />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="space-y-4">
              <Skeleton className="aspect-square w-full" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-6 w-1/3" />
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="text-center py-12">
        <p className="text-muted-foreground mb-4">{error}</p>
        <Button onClick={loadAllProducts}>Try Again</Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Results Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="text-muted-foreground">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredProducts.length)} of {filteredProducts.length} products
        </p>

        <Select value={sortBy} onValueChange={setSortBy}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Sort by" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="default">Default</SelectItem>
            <SelectItem value="price-low">Price: Low to High</SelectItem>
            <SelectItem value="price-high">Price: High to Low</SelectItem>
            <SelectItem value="rating">Highest Rated</SelectItem>
            <SelectItem value="discount">Best Deals</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No products match your filters.</p>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center space-x-2 mt-8">
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="w-10 h-10"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              {renderPaginationButtons()}
              
              <Button
                variant="outline"
                size="sm"
                onClick={() => handlePageChange(currentPage + 1)}
                disabled={currentPage === totalPages}
                className="w-10 h-10"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </>
      )}
    </div>
  )
}
