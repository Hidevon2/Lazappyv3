"use client"

import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { CartItems } from "@/components/cart-items"
import { CartSummary } from "@/components/cart-summary"
import { useCart } from "@/lib/cart-context"

export default function CartPage() {
  const { state } = useCart()

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Continue Shopping
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Shopping Cart</h1>
          <p className="text-muted-foreground">
            {state.itemCount === 0
              ? "Your cart is empty"
              : `${state.itemCount} item${state.itemCount !== 1 ? "s" : ""} in your cart`}
          </p>
        </div>

        {state.items.length === 0 ? (
          <div className="text-center py-16">
            <div className="max-w-md mx-auto">
              <div className="mb-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
                  <svg
                    className="w-12 h-12 text-muted-foreground"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 11-4 0v-6m4 0V9a2 2 0 10-4 0v4.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground mb-6">Looks like you haven't added any items to your cart yet.</p>
                <Link href="/">
                  <button className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors">
                    Start Shopping
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2">
              <CartItems />
            </div>

            {/* Cart Summary */}
            <div className="lg:col-span-1">
              <CartSummary />
            </div>
          </div>
        )}
      </main>
    </div>
  )
}
