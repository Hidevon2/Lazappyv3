"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/lib/cart-context"

export function CheckoutSummary() {
  const { state } = useCart()

  const subtotal = state.total
  const shipping = subtotal > 100 ? 0 : 9.99
  const tax = subtotal * 0.08
  const total = subtotal + shipping + tax

  return (
    <div className="space-y-6">
      {/* Order Items */}
      <Card>
        <CardHeader>
          <CardTitle>Order Summary</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {state.items.map((item) => {
            const discountedPrice = item.price * (1 - item.discountPercentage / 100)
            const itemTotal = discountedPrice * item.quantity

            return (
              <div key={item.id} className="flex items-center space-x-3">
                <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                  <Image
                    src={item.thumbnail || "/placeholder.svg"}
                    alt={item.title}
                    fill
                    className="object-cover"
                    sizes="64px"
                  />
                  <Badge className="absolute -top-2 -right-2 h-6 w-6 rounded-full p-0 flex items-center justify-center text-xs">
                    {item.quantity}
                  </Badge>
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-medium text-sm line-clamp-2">{item.title}</p>
                  <p className="text-xs text-muted-foreground">{item.brand}</p>
                </div>

                <div className="text-right">
                  <p className="font-medium">₱{itemTotal.toFixed(2)}</p>
                  {item.discountPercentage > 0 && (
                    <p className="text-xs text-muted-foreground line-through">
                      ₱{(item.price * item.quantity).toFixed(2)}
                    </p>
                  )}
                </div>
              </div>
            )
          })}
        </CardContent>
      </Card>

      {/* Price Breakdown */}
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="flex justify-between">
            <span>Subtotal ({state.itemCount} items)</span>
            <span>₱{subtotal.toFixed(2)}</span>
          </div>

          <div className="flex justify-between">
            <span>Shipping</span>
            <span>{shipping === 0 ? <span className="text-green-600">FREE</span> : `₱${shipping.toFixed(2)}`}</span>
          </div>

          <div className="flex justify-between">
            <span>Tax</span>
            <span>₱{tax.toFixed(2)}</span>
          </div>

          <Separator />

          <div className="flex justify-between text-lg font-semibold">
            <span>Total</span>
            <span>₱{total.toFixed(2)}</span>
          </div>
        </CardContent>
      </Card>

      {/* Security Notice */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
              />
            </svg>
            <span>Your payment information is secure and encrypted</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
