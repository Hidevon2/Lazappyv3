"use client"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { Header } from "@/components/header"
import { CheckoutForm } from "@/components/checkout-form"
import { CheckoutSummary } from "@/components/checkout-summary"
import { useCart } from "@/lib/cart-context"
import { redirect } from "next/navigation"

export default function CheckoutPage() {
  const { state } = useCart()

  // Redirect to cart if empty
  if (state.items.length === 0) {
    redirect("/cart")
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <div className="mb-6">
          <Link
            href="/cart"
            className="inline-flex items-center text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Cart
          </Link>
        </div>

        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Checkout</h1>
          <p className="text-muted-foreground">Complete your order in just a few steps</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <CheckoutForm />
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <CheckoutSummary />
          </div>
        </div>
      </main>
    </div>
  )
}
