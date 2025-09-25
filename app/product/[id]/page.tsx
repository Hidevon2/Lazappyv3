import { notFound } from "next/navigation"
import { fetchProduct } from "@/lib/api"
import { ProductDetail } from "@/components/product-detail"
import { Header } from "@/components/header"

interface ProductPageProps {
  params: {
    id: string
  }
}

export default async function ProductPage({ params }: ProductPageProps) {
  try {
    const product = await fetchProduct(Number.parseInt(params.id))

    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 py-8">
          <ProductDetail product={product} />
        </main>
      </div>
    )
  } catch (error) {
    notFound()
  }
}
