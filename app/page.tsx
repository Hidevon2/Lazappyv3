"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { ProductGrid } from "@/components/product-grid"
import { Filters } from "@/components/filters"

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 60000])
  const [minRating, setMinRating] = useState(0)

  const handleClearFilters = () => {
    setSelectedCategory("all")
    setPriceRange([0, 60000])
    setMinRating(0)
  }

  return (
    <div className="min-h-screen bg-background">
      <Header onSearch={setSearchQuery} />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-balance mb-4">Discover Amazing Products</h1>
          <p className="text-muted-foreground text-lg">
            Browse our curated collection of high-quality products at unbeatable prices
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <Filters
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
              priceRange={priceRange}
              onPriceRangeChange={setPriceRange}
              minRating={minRating}
              onMinRatingChange={setMinRating}
              onClearFilters={handleClearFilters}
            />
          </aside>

          {/* Products Grid */}
          <div className="flex-1">
            <ProductGrid
              searchQuery={searchQuery}
              selectedCategory={selectedCategory}
              priceRange={priceRange}
              minRating={minRating}
            />
          </div>
        </div>
      </main>
    </div>
  )
}
