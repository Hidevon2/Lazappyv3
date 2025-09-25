"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { Star, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import type { Product } from "@/lib/api"
import { useCart } from "@/lib/cart-context"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  const { dispatch } = useCart()

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault()
    dispatch({ type: "ADD_ITEM", payload: product })
  }

  const discountedPrice = product.price * (1 - product.discountPercentage / 100)

  return (
    <Link href={`/product/${product.id}`}>
      <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={product.thumbnail || "/placeholder.svg"}
            alt={product.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          {product.discountPercentage > 0 && (
            <Badge className="absolute top-2 left-2 bg-destructive text-destructive-foreground">
              -{Math.round(product.discountPercentage)}%
            </Badge>
          )}
          <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              size="sm"
              onClick={handleAddToCart}
              className="h-8 w-8 p-0 rounded-full bg-background/80 hover:bg-background text-foreground hover:text-foreground"
            >
              <ShoppingCart className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <CardContent className="p-4">
          <div className="space-y-2">
            <h3 className="font-semibold text-sm line-clamp-2 text-balance">{product.title}</h3>

            <div className="flex items-center space-x-1">
              <div className="flex items-center">
                <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                <span className="text-xs text-muted-foreground ml-1">{product.rating.toFixed(1)}</span>
              </div>
              <span className="text-xs text-muted-foreground">•</span>
              <span className="text-xs text-muted-foreground">{product.stock} in stock</span>
            </div>

            <div className="flex items-center space-x-2">
              <span className="font-bold text-lg">₱{discountedPrice.toFixed(2)}</span>
              {product.discountPercentage > 0 && (
                <span className="text-sm text-muted-foreground line-through">₱{product.price.toFixed(2)}</span>
              )}
            </div>
          </div>
        </CardContent>

        <CardFooter className="p-4 pt-0">
          <Button onClick={handleAddToCart} className="w-full" size="sm">
            Add to Cart
          </Button>
        </CardFooter>
      </Card>
    </Link>
  )
}
