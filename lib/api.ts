export interface Product {
  id: number
  title: string
  description: string
  price: number
  discountPercentage: number
  rating: number
  stock: number
  brand: string
  category: string
  thumbnail: string
  images: string[]
}

export interface ProductsResponse {
  products: Product[]
  total: number
  skip: number
  limit: number
}

export interface CartItem extends Product {
  quantity: number
}

// Import our custom product data
import { fetchProducts as fetchProductsData, fetchProduct as fetchProductData, fetchCategories as fetchCategoriesData } from './products-data'

// Re-export the functions with the same interface
export { fetchProductsData as fetchProducts, fetchProductData as fetchProduct, fetchCategoriesData as fetchCategories }
