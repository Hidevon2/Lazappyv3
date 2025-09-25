"use client"

import { useState } from "react"
import { Filter, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Badge } from "@/components/ui/badge"

interface FiltersProps {
  selectedCategory: string
  onCategoryChange: (category: string) => void
  priceRange: [number, number]
  onPriceRangeChange: (range: [number, number]) => void
  minRating: number
  onMinRatingChange: (rating: number) => void
  onClearFilters: () => void
}

export function Filters({
  selectedCategory,
  onCategoryChange,
  priceRange,
  onPriceRangeChange,
  minRating,
  onMinRatingChange,
  onClearFilters,
}: FiltersProps) {
  const [isOpen, setIsOpen] = useState(false)

  const hasActiveFilters = selectedCategory !== "all" || priceRange[0] > 0 || priceRange[1] < 60000 || minRating > 0

  return (
    <>
      {/* Mobile Filter Button */}
      <div className="lg:hidden mb-6">
        <Button variant="outline" onClick={() => setIsOpen(!isOpen)} className="w-full justify-between">
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4" />
            <span>Filters</span>
            {hasActiveFilters && (
              <Badge variant="secondary" className="ml-2">
                Active
              </Badge>
            )}
          </div>
          {isOpen ? <X className="h-4 w-4" /> : <Filter className="h-4 w-4" />}
        </Button>
      </div>

      {/* Filter Panel */}
      <div className={`lg:block ${isOpen ? "block" : "hidden"}`}>
        <Card className="sticky top-24">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-between">
              <CardTitle className="text-lg">Filters</CardTitle>
              {hasActiveFilters && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={onClearFilters}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Clear all
                </Button>
              )}
            </div>
          </CardHeader>

          <CardContent className="space-y-6">
            {/* Categories */}
            <div>
              <h3 className="font-semibold mb-3">Categories</h3>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="all"
                    checked={selectedCategory === "all"}
                    onCheckedChange={() => onCategoryChange("all")}
                  />
                  <Label htmlFor="all" className="text-sm font-medium">
                    All Categories
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="computerparts"
                    checked={selectedCategory === "computerparts"}
                    onCheckedChange={() => onCategoryChange("computerparts")}
                  />
                  <Label htmlFor="computerparts" className="text-sm capitalize">
                    Computer Parts
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="tools"
                    checked={selectedCategory === "tools"}
                    onCheckedChange={() => onCategoryChange("tools")}
                  />
                  <Label htmlFor="tools" className="text-sm capitalize">
                    Tools
                  </Label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="monitor"
                    checked={selectedCategory === "monitor"}
                    onCheckedChange={() => onCategoryChange("monitor")}
                  />
                  <Label htmlFor="monitor" className="text-sm capitalize">
                    Monitor
                  </Label>
                </div>
              </div>
            </div>

            {/* Price Range */}
            <div>
              <h3 className="font-semibold mb-3">Price Range</h3>
              <div className="space-y-4">
                <Slider
                  value={priceRange}
                  onValueChange={(value) => onPriceRangeChange(value as [number, number])}
                  max={60000}
                  min={0}
                  step={100}
                  className="w-full"
                />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>₱{priceRange[0]}</span>
                  <span>₱{priceRange[1]}</span>
                </div>
              </div>
            </div>

            {/* Rating */}
            <div>
              <h3 className="font-semibold mb-3">Minimum Rating</h3>
              <div className="space-y-4">
                <Slider
                  value={[minRating]}
                  onValueChange={(value) => onMinRatingChange(value[0])}
                  max={5}
                  min={0}
                  step={0.5}
                  className="w-full"
                />
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span>0 stars</span>
                  <span>{minRating} stars</span>
                  <span>5 stars</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
