import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/lib/cart-context"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: "ShopHub - Modern E-Commerce",
  description: "Discover amazing products at great prices",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="font-sans">
        <CartProvider>{children}</CartProvider>
      </body>
    </html>
  )
}
