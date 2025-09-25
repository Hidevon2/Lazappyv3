"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Star, ShoppingCart, Heart, Share2, Minus, Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import type { Product } from "@/lib/api"
import { useCart } from "@/lib/cart-context"

interface ProductDetailProps {
  product: Product
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { dispatch } = useCart()

  const discountedPrice = product.price * (1 - product.discountPercentage / 100)
  const savings = product.price - discountedPrice

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      dispatch({ type: "ADD_ITEM", payload: product })
    }
  }

  const handleQuantityChange = (change: number) => {
    setQuantity(Math.max(1, Math.min(product.stock, quantity + change)))
  }

  return (
    <div className="max-w-7xl mx-auto">
      {/* Breadcrumb */}
      <div className="mb-6">
        <Link
          href="/"
          className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Products
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main Image */}
          <div className="aspect-square relative overflow-hidden rounded-lg bg-muted">
            <Image
              src={product.images[selectedImage] || product.thumbnail || "/placeholder.svg"}
              alt={product.title}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            {product.discountPercentage > 0 && (
              <Badge className="absolute top-4 left-4 bg-destructive text-destructive-foreground">
                -{Math.round(product.discountPercentage)}% OFF
              </Badge>
            )}
          </div>

          {/* Thumbnail Images */}
          {product.images.length > 1 && (
            <div className="grid grid-cols-4 gap-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`aspect-square relative overflow-hidden rounded-md border-2 transition-colors ${
                    selectedImage === index ? "border-primary" : "border-transparent hover:border-muted-foreground"
                  }`}
                >
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${product.title} ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 25vw, 12.5vw"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          {/* Header */}
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Badge variant="secondary" className="capitalize">
                {product.category.replace("-", " ")}
              </Badge>
              <Badge variant="outline">{product.brand}</Badge>
            </div>

            <h1 className="text-3xl font-bold text-balance mb-4">{product.title}</h1>

            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < Math.floor(product.rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"
                      }`}
                    />
                  ))}
                </div>
                <span className="text-sm font-medium">{product.rating}</span>
              </div>

              <Separator orientation="vertical" className="h-4" />

              <span className="text-sm text-muted-foreground">
                {product.stock > 0 ? `${product.stock} in stock` : "Out of stock"}
              </span>
            </div>
          </div>

          {/* Pricing */}
          <Card>
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="flex items-baseline space-x-3">
                  <span className="text-3xl font-bold">₱{discountedPrice.toFixed(2)}</span>
                  {product.discountPercentage > 0 && (
                    <>
                      <span className="text-lg text-muted-foreground line-through">₱{product.price.toFixed(2)}</span>
                      <Badge variant="destructive">Save ₱{savings.toFixed(2)}</Badge>
                    </>
                  )}
                </div>

                {/* Quantity Selector */}
                <div className="flex items-center space-x-4">
                  <span className="text-sm font-medium">Quantity:</span>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuantityChange(-1)}
                      disabled={quantity <= 1}
                    >
                      <Minus className="h-3 w-3" />
                    </Button>
                    <span className="w-12 text-center font-medium">{quantity}</span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleQuantityChange(1)}
                      disabled={quantity >= product.stock}
                    >
                      <Plus className="h-3 w-3" />
                    </Button>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button onClick={handleAddToCart} disabled={product.stock === 0} className="flex-1" size="lg">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>

                  <div className="flex gap-2">
                    <Button variant="outline" size="lg">
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button variant="outline" size="lg">
                      <Share2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Product Description */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-3">Product Description</h3>
              <p className="text-muted-foreground leading-relaxed">{product.description}</p>
            </CardContent>
          </Card>

          {/* Product Details */}
          <Card>
            <CardContent className="p-6">
              <h3 className="font-semibold text-lg mb-4">Product Details</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <span className="text-sm text-muted-foreground">Brand</span>
                  <p className="font-medium">{product.brand}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Category</span>
                  <p className="font-medium capitalize">{product.category.replace("-", " ")}</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Stock</span>
                  <p className="font-medium">{product.stock} units</p>
                </div>
                <div>
                  <span className="text-sm text-muted-foreground">Rating</span>
                  <p className="font-medium">{product.rating}/5.0</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
