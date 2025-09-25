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

// Realistic Philippine market prices for computer parts, tools, and monitors
const PRODUCTS_DATA: Product[] = [
  // Computer Parts
  {
    id: 1,
    title: "Intel Core i5-12400F Processor",
    description: "6-core 12-thread CPU with excellent gaming and productivity performance",
    price: 8999,
    discountPercentage: 10,
    rating: 4.7,
    stock: 15,
    brand: "Intel",
    category: "computerparts",
    thumbnail: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518717758536-85e29025b6d3?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 2,
    title: "NVIDIA RTX 4060 Graphics Card",
    description: "8GB GDDR6 graphics card for smooth gaming and content creation",
    price: 18999,
    discountPercentage: 5,
    rating: 4.5,
    stock: 8,
    brand: "NVIDIA",
    category: "computerparts",
    thumbnail: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518717758536-85e29025b6d3?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 3,
    title: "Corsair Vengeance 16GB DDR4 RAM",
    description: "3200MHz DDR4 memory kit for improved system performance",
    price: 3499,
    discountPercentage: 15,
    rating: 4.6,
    stock: 25,
    brand: "Corsair",
    category: "computerparts",
    thumbnail: "https://images.unsplash.com/photo-1518717758536-85e29025b6d3?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518717758536-85e29025b6d3?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 4,
    title: "Samsung 980 PRO 1TB SSD",
    description: "NVMe PCIe 4.0 SSD with lightning-fast read/write speeds",
    price: 6999,
    discountPercentage: 12,
    rating: 4.8,
    stock: 20,
    brand: "Samsung",
    category: "computerparts",
    thumbnail: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518717758536-85e29025b6d3?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 5,
    title: "ASUS ROG Strix B550-F Motherboard",
    description: "AMD AM4 socket motherboard with RGB lighting and premium features",
    price: 8999,
    discountPercentage: 8,
    rating: 4.4,
    stock: 12,
    brand: "ASUS",
    category: "computerparts",
    thumbnail: "https://images.unsplash.com/photo-1518717758536-85e29025b6d3?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518717758536-85e29025b6d3?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 6,
    title: "Cooler Master 750W PSU",
    description: "80+ Gold certified power supply with modular cables",
    price: 5499,
    discountPercentage: 18,
    rating: 4.3,
    stock: 18,
    brand: "Cooler Master",
    category: "computerparts",
    thumbnail: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518717758536-85e29025b6d3?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 7,
    title: "Noctua NH-D15 CPU Cooler",
    description: "Premium air cooler with dual fans for excellent cooling performance",
    price: 3999,
    discountPercentage: 10,
    rating: 4.7,
    stock: 10,
    brand: "Noctua",
    category: "computerparts",
    thumbnail: "https://images.unsplash.com/photo-1518717758536-85e29025b6d3?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518717758536-85e29025b6d3?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 8,
    title: "Fractal Design Meshify C Case",
    description: "Mid-tower case with excellent airflow and cable management",
    price: 4999,
    discountPercentage: 15,
    rating: 4.5,
    stock: 15,
    brand: "Fractal Design",
    category: "computerparts",
    thumbnail: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518717758536-85e29025b6d3?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 9,
    title: "Logitech G Pro X Mechanical Keyboard",
    description: "Tenkeyless mechanical keyboard with customizable switches",
    price: 6999,
    discountPercentage: 20,
    rating: 4.6,
    stock: 22,
    brand: "Logitech",
    category: "computerparts",
    thumbnail: "https://images.unsplash.com/photo-1518717758536-85e29025b6d3?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1518717758536-85e29025b6d3?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 10,
    title: "Razer DeathAdder V3 Gaming Mouse",
    description: "Ergonomic gaming mouse with 30,000 DPI sensor",
    price: 3999,
    discountPercentage: 12,
    rating: 4.4,
    stock: 30,
    brand: "Razer",
    category: "computerparts",
    thumbnail: "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1518717758536-85e29025b6d3?w=400&h=400&fit=crop"
    ]
  },

  // Tools
  {
    id: 11,
    title: "DeWalt 20V Cordless Drill",
    description: "Heavy-duty cordless drill with lithium-ion battery and LED light",
    price: 8999,
    discountPercentage: 15,
    rating: 4.7,
    stock: 12,
    brand: "DeWalt",
    category: "tools",
    thumbnail: "https://images.unsplash.com/photo-1504148455328-c3762d086edd?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504148455328-c3762d086edd?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 12,
    title: "Makita Circular Saw 7-1/4 inch",
    description: "Professional circular saw with magnesium shoe and electric brake",
    price: 12999,
    discountPercentage: 10,
    rating: 4.6,
    stock: 8,
    brand: "Makita",
    category: "tools",
    thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504148455328-c3762d086edd?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 13,
    title: "Bosch Professional Impact Driver",
    description: "Compact impact driver with 4-speed settings and LED worklight",
    price: 6999,
    discountPercentage: 18,
    rating: 4.5,
    stock: 15,
    brand: "Bosch",
    category: "tools",
    thumbnail: "https://images.unsplash.com/photo-1504148455328-c3762d086edd?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504148455328-c3762d086edd?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 14,
    title: "Stanley FatMax Tool Set (65 pieces)",
    description: "Complete tool set with socket wrenches, screwdrivers, and pliers",
    price: 3999,
    discountPercentage: 20,
    rating: 4.4,
    stock: 25,
    brand: "Stanley",
    category: "tools",
    thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504148455328-c3762d086edd?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 15,
    title: "Milwaukee M18 Cordless Angle Grinder",
    description: "4-1/2 inch angle grinder with brushless motor and overload protection",
    price: 10999,
    discountPercentage: 12,
    rating: 4.6,
    stock: 10,
    brand: "Milwaukee",
    category: "tools",
    thumbnail: "https://images.unsplash.com/photo-1504148455328-c3762d086edd?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504148455328-c3762d086edd?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 16,
    title: "Craftsman Digital Multimeter",
    description: "Professional digital multimeter with auto-ranging and backlit display",
    price: 2499,
    discountPercentage: 25,
    rating: 4.3,
    stock: 20,
    brand: "Craftsman",
    category: "tools",
    thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504148455328-c3762d086edd?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 17,
    title: "Ryobi 18V Cordless Reciprocating Saw",
    description: "Variable speed reciprocating saw with tool-free blade change",
    price: 5999,
    discountPercentage: 15,
    rating: 4.2,
    stock: 18,
    brand: "Ryobi",
    category: "tools",
    thumbnail: "https://images.unsplash.com/photo-1504148455328-c3762d086edd?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504148455328-c3762d086edd?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 18,
    title: "Klein Tools Wire Stripper Set",
    description: "Professional wire stripper set with crimping and cutting capabilities",
    price: 1899,
    discountPercentage: 8,
    rating: 4.5,
    stock: 30,
    brand: "Klein Tools",
    category: "tools",
    thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504148455328-c3762d086edd?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 19,
    title: "Hilti TE 3000-AVR Demolition Hammer",
    description: "Heavy-duty demolition hammer with active vibration reduction",
    price: 45999,
    discountPercentage: 5,
    rating: 4.8,
    stock: 5,
    brand: "Hilti",
    category: "tools",
    thumbnail: "https://images.unsplash.com/photo-1504148455328-c3762d086edd?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1504148455328-c3762d086edd?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 20,
    title: "Festool Track Saw System",
    description: "Precision track saw with dust extraction and splinter guard",
    price: 32999,
    discountPercentage: 10,
    rating: 4.7,
    stock: 6,
    brand: "Festool",
    category: "tools",
    thumbnail: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1504148455328-c3762d086edd?w=400&h=400&fit=crop"
    ]
  },

  // Monitors
  {
    id: 21,
    title: "ASUS ROG Swift 27-inch 4K Monitor",
    description: "27-inch 4K gaming monitor with 144Hz refresh rate and G-Sync",
    price: 29999,
    discountPercentage: 12,
    rating: 4.8,
    stock: 8,
    brand: "ASUS",
    category: "monitor",
    thumbnail: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 22,
    title: "Dell UltraSharp 24-inch Monitor",
    description: "Professional 24-inch monitor with 99% sRGB color accuracy",
    price: 15999,
    discountPercentage: 15,
    rating: 4.6,
    stock: 15,
    brand: "Dell",
    category: "monitor",
    thumbnail: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 23,
    title: "LG 32-inch UltraWide Monitor",
    description: "32-inch curved ultrawide monitor with 21:9 aspect ratio",
    price: 22999,
    discountPercentage: 18,
    rating: 4.5,
    stock: 10,
    brand: "LG",
    category: "monitor",
    thumbnail: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 24,
    title: "Samsung Odyssey G7 27-inch Monitor",
    description: "27-inch curved gaming monitor with 240Hz refresh rate",
    price: 24999,
    discountPercentage: 10,
    rating: 4.7,
    stock: 12,
    brand: "Samsung",
    category: "monitor",
    thumbnail: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 25,
    title: "BenQ PD2700U 27-inch 4K Monitor",
    description: "Professional 4K monitor with HDR10 and 99% Rec.709 color space",
    price: 18999,
    discountPercentage: 20,
    rating: 4.4,
    stock: 18,
    brand: "BenQ",
    category: "monitor",
    thumbnail: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 26,
    title: "AOC 24G2 24-inch Gaming Monitor",
    description: "24-inch gaming monitor with 144Hz refresh rate and FreeSync",
    price: 8999,
    discountPercentage: 25,
    rating: 4.3,
    stock: 25,
    brand: "AOC",
    category: "monitor",
    thumbnail: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 27,
    title: "ViewSonic VP2768 27-inch Monitor",
    description: "Professional 27-inch monitor with USB-C connectivity",
    price: 12999,
    discountPercentage: 15,
    rating: 4.5,
    stock: 20,
    brand: "ViewSonic",
    category: "monitor",
    thumbnail: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 28,
    title: "MSI Optix MAG274QRF 27-inch Monitor",
    description: "27-inch QHD gaming monitor with 165Hz refresh rate",
    price: 17999,
    discountPercentage: 12,
    rating: 4.6,
    stock: 14,
    brand: "MSI",
    category: "monitor",
    thumbnail: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 29,
    title: "HP EliteDisplay E243 24-inch Monitor",
    description: "Business monitor with ergonomic stand and energy efficiency",
    price: 11999,
    discountPercentage: 8,
    rating: 4.2,
    stock: 22,
    brand: "HP",
    category: "monitor",
    thumbnail: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop"
    ]
  },
  {
    id: 30,
    title: "Alienware AW3423DW 34-inch Monitor",
    description: "34-inch curved OLED gaming monitor with 175Hz refresh rate",
    price: 59999,
    discountPercentage: 5,
    rating: 4.9,
    stock: 4,
    brand: "Alienware",
    category: "monitor",
    thumbnail: "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=300&h=300&fit=crop",
    images: [
      "https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400&h=400&fit=crop",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&h=400&fit=crop"
    ]
  }
]

export async function fetchProducts(
  limit = 30,
  skip = 0,
  search?: string,
  category?: string,
): Promise<ProductsResponse> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100))

  let filteredProducts = [...PRODUCTS_DATA]

  // Apply category filter
  if (category && category !== "all") {
    filteredProducts = filteredProducts.filter(product => product.category === category)
  }

  // Apply search filter
  if (search) {
    const searchLower = search.toLowerCase()
    filteredProducts = filteredProducts.filter(product =>
      product.title.toLowerCase().includes(searchLower) ||
      product.description.toLowerCase().includes(searchLower) ||
      product.brand.toLowerCase().includes(searchLower)
    )
  }

  // Apply pagination
  const total = filteredProducts.length
  const paginatedProducts = filteredProducts.slice(skip, skip + limit)

  return {
    products: paginatedProducts,
    total,
    skip,
    limit
  }
}

export async function fetchProduct(id: number): Promise<Product> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100))

  const product = PRODUCTS_DATA.find(p => p.id === id)
  if (!product) {
    throw new Error("Product not found")
  }

  return product
}

export async function fetchCategories(): Promise<string[]> {
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 100))

  return ["all", "computerparts", "tools", "monitor"]
}