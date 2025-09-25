import Link from "next/link"
import { CheckCircle, Package, Truck } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function CheckoutSuccessPage() {
  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase()

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="max-w-md w-full space-y-6">
        {/* Success Icon */}
        <div className="text-center">
          <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-green-100 flex items-center justify-center">
            <CheckCircle className="w-12 h-12 text-green-600" />
          </div>
          <h1 className="text-2xl font-bold mb-2">Order Confirmed!</h1>
          <p className="text-muted-foreground">Thank you for your purchase. Your order has been successfully placed.</p>
        </div>

        {/* Order Details */}
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">Order Number</p>
              <p className="font-mono font-semibold text-lg">#{orderNumber}</p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Package className="h-4 w-4 text-muted-foreground" />
                <span>Order confirmation sent to your email</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Truck className="h-4 w-4 text-muted-foreground" />
                <span>Estimated delivery: 3-5 business days</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Actions */}
        <div className="space-y-3">
          <Link href="/" className="block">
            <Button className="w-full">Continue Shopping</Button>
          </Link>
          <Button variant="outline" className="w-full bg-transparent">
            Track Your Order
          </Button>
        </div>
      </div>
    </div>
  )
}
