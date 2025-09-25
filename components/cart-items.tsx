"use client"

import Image from "next/image"
import Link from "next/link"
import { Minus, Plus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useCart } from "@/lib/cart-context"

export function CartItems() {
  const { state, dispatch } = useCart()

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", payload: { id, quantity } })
  }

  const removeItem = (id: number) => {
    dispatch({ type: "REMOVE_ITEM", payload: id })
  }

  return (
    <Card>
      <CardContent className="p-6">
        <h2 className="text-xl font-semibold mb-6">Cart Items</h2>

        <div className="space-y-6">
          {state.items.map((item, index) => {
            const discountedPrice = item.price * (1 - item.discountPercentage / 100)
            const itemTotal = discountedPrice * item.quantity

            return (
              <div key={item.id}>
                <div className="flex flex-col sm:flex-row gap-4">
                  {/* Product Image */}
                  <Link href={`/product/${item.id}`} className="flex-shrink-0">
                    <div className="w-24 h-24 relative rounded-lg overflow-hidden bg-muted">
                      <Image
                        src={item.thumbnail || "/placeholder.svg"}
                        alt={item.title}
                        fill
                        className="object-cover"
                        sizes="96px"
                      />
                    </div>
                  </Link>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                      <div className="flex-1">
                        <Link
                          href={`/product/${item.id}`}
                          className="font-medium hover:text-primary transition-colors line-clamp-2"
                        >
                          {item.title}
                        </Link>
                        <p className="text-sm text-muted-foreground mt-1 capitalize">
                          {item.brand} • {item.category.replace("-", " ")}
                        </p>

                        <div className="flex items-center space-x-2 mt-2">
                          <span className="font-semibold">₱{discountedPrice.toFixed(2)}</span>
                          {item.discountPercentage > 0 && (
                            <span className="text-sm text-muted-foreground line-through">₱{item.price.toFixed(2)}</span>
                          )}
                        </div>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between sm:justify-end gap-4">
                        <div className="flex items-center space-x-2">
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            disabled={item.quantity <= 1}
                          >
                            <Minus className="h-3 w-3" />
                          </Button>
                          <span className="w-12 text-center font-medium">{item.quantity}</span>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            disabled={item.quantity >= item.stock}
                          >
                            <Plus className="h-3 w-3" />
                          </Button>
                        </div>

                        <div className="flex items-center space-x-4">
                          <span className="font-semibold min-w-0">₱{itemTotal.toFixed(2)}</span>
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:text-destructive hover:bg-destructive/10"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {index < state.items.length - 1 && <Separator className="mt-6" />}
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
