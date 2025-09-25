"use client"

import Link from "next/link"
import { ShoppingBag, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { useCart } from "@/lib/cart-context"

export function CartSummary() {
  const { state } = useCart()

  const subtotal = state.total
  const shipping = subtotal > 100 ? 0 : 9.99
  const tax = subtotal * 0.08 // 8% tax
  const total = subtotal + shipping + tax

  return (
    <div className="space-y-6">
      {/* Promo Code */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center space-x-2 mb-4">
            <Tag className="h-4 w-4" />
            <span className="font-medium">Promo Code</span>
          </div>
          <div className="flex space-x-2">
            <Input placeholder="Enter code" />
            <Button variant="outline">Apply</Button>
          </div>
        </CardContent>
      </Card>

      {/* Order Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <ShoppingBag className="h-5 w-5" />
            <span>Order Summary</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
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

          {shipping > 0 && (
            <p className="text-sm text-muted-foreground">Add ₱{(100 - subtotal).toFixed(2)} more for free shipping</p>
          )}

          <Link href="/checkout" className="block">
            <Button className="w-full" size="lg">
              Proceed to Checkout
            </Button>
          </Link>

          <Link href="/" className="block">
            <Button variant="outline" className="w-full bg-transparent">
              Continue Shopping
            </Button>
          </Link>
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
            <span>Secure checkout with SSL encryption</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
