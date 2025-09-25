"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Check, CreditCard, MapPin, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Separator } from "@/components/ui/separator"
import { Checkbox } from "@/components/ui/checkbox"
import { useCart } from "@/lib/cart-context"

interface FormData {
  // Personal Info
  firstName: string
  lastName: string
  email: string
  phone: string

  // Shipping Address
  address: string
  city: string
  state: string
  zipCode: string
  country: string

  // Payment Info
  cardNumber: string
  expiryDate: string
  cvv: string
  cardName: string

  // Options
  sameAsBilling: boolean
  saveInfo: boolean
}

export function CheckoutForm() {
  const router = useRouter()
  const { dispatch } = useCart()
  const [currentStep, setCurrentStep] = useState(1)
  const [isProcessing, setIsProcessing] = useState(false)
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zipCode: "",
    country: "US",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardName: "",
    sameAsBilling: true,
    saveInfo: false,
  })

  const updateFormData = (field: keyof FormData, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Clear cart and redirect to success page
    dispatch({ type: "CLEAR_CART" })
    router.push("/checkout/success")
  }

  const steps = [
    { number: 1, title: "Personal Info", icon: User },
    { number: 2, title: "Shipping", icon: MapPin },
    { number: 3, title: "Payment", icon: CreditCard },
  ]

  return (
    <div className="space-y-6">
      {/* Progress Steps */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className="flex items-center">
                  <div
                    className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                      currentStep >= step.number
                        ? "bg-primary border-primary text-primary-foreground"
                        : "border-muted-foreground text-muted-foreground"
                    }`}
                  >
                    {currentStep > step.number ? <Check className="h-5 w-5" /> : <step.icon className="h-5 w-5" />}
                  </div>
                  <div className="ml-3 hidden sm:block">
                    <p
                      className={`text-sm font-medium ${
                        currentStep >= step.number ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      Step {step.number}
                    </p>
                    <p
                      className={`text-xs ${currentStep >= step.number ? "text-foreground" : "text-muted-foreground"}`}
                    >
                      {step.title}
                    </p>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`w-12 sm:w-24 h-0.5 mx-4 ${currentStep > step.number ? "bg-primary" : "bg-muted"}`} />
                )}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Step 1: Personal Information */}
        {currentStep === 1 && (
          <Card>
            <CardHeader>
              <CardTitle>Personal Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="firstName">First Name</Label>
                  <Input
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) => updateFormData("firstName", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) => updateFormData("lastName", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData("email", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => updateFormData("phone", e.target.value)}
                  required
                />
              </div>

              <div className="flex justify-end">
                <Button type="button" onClick={() => setCurrentStep(2)}>
                  Continue to Shipping
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 2: Shipping Address */}
        {currentStep === 2 && (
          <Card>
            <CardHeader>
              <CardTitle>Shipping Address</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="address">Street Address</Label>
                <Input
                  id="address"
                  value={formData.address}
                  onChange={(e) => updateFormData("address", e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="city">City</Label>
                  <Input
                    id="city"
                    value={formData.city}
                    onChange={(e) => updateFormData("city", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="state">State</Label>
                  <Input
                    id="state"
                    value={formData.state}
                    onChange={(e) => updateFormData("state", e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="zipCode">ZIP Code</Label>
                  <Input
                    id="zipCode"
                    value={formData.zipCode}
                    onChange={(e) => updateFormData("zipCode", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="country">Country</Label>
                  <Select value={formData.country} onValueChange={(value) => updateFormData("country", value)}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="US">United States</SelectItem>
                      <SelectItem value="CA">Canada</SelectItem>
                      <SelectItem value="UK">United Kingdom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => setCurrentStep(1)}>
                  Back
                </Button>
                <Button type="button" onClick={() => setCurrentStep(3)}>
                  Continue to Payment
                </Button>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Step 3: Payment Information */}
        {currentStep === 3 && (
          <Card>
            <CardHeader>
              <CardTitle>Payment Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="cardName">Name on Card</Label>
                <Input
                  id="cardName"
                  value={formData.cardName}
                  onChange={(e) => updateFormData("cardName", e.target.value)}
                  required
                />
              </div>

              <div>
                <Label htmlFor="cardNumber">Card Number</Label>
                <Input
                  id="cardNumber"
                  placeholder="1234 5678 9012 3456"
                  value={formData.cardNumber}
                  onChange={(e) => updateFormData("cardNumber", e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="expiryDate">Expiry Date</Label>
                  <Input
                    id="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={(e) => updateFormData("expiryDate", e.target.value)}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="cvv">CVV</Label>
                  <Input
                    id="cvv"
                    placeholder="123"
                    value={formData.cvv}
                    onChange={(e) => updateFormData("cvv", e.target.value)}
                    required
                  />
                </div>
              </div>

              <Separator />

              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="sameAsBilling"
                    checked={formData.sameAsBilling}
                    onCheckedChange={(checked) => updateFormData("sameAsBilling", checked as boolean)}
                  />
                  <Label htmlFor="sameAsBilling" className="text-sm">
                    Billing address same as shipping
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="saveInfo"
                    checked={formData.saveInfo}
                    onCheckedChange={(checked) => updateFormData("saveInfo", checked as boolean)}
                  />
                  <Label htmlFor="saveInfo" className="text-sm">
                    Save information for next time
                  </Label>
                </div>
              </div>

              <div className="flex justify-between">
                <Button type="button" variant="outline" onClick={() => setCurrentStep(2)}>
                  Back
                </Button>
                <Button type="submit" disabled={isProcessing}>
                  {isProcessing ? "Processing..." : "Complete Order"}
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </form>
    </div>
  )
}
