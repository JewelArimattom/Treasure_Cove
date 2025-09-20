// data/products.js
export const categories = [
  { name: "Smartphones", icon: "📱", count: 124 },
  { name: "Laptops", icon: "💻", count: 87 },
  { name: "Headphones", icon: "🎧", count: 64 },
  { name: "Smart Watches", icon: "⌚", count: 52 },
  { name: "Cameras", icon: "📷", count: 43 },
  { name: "Gaming", icon: "🎮", count: 76 },
];

export const products = [
  {
    id: 1,
    name: "UltraVision 4K Smart TV",
    price: 899.99,
    rating: 4.8,
    reviews: 142,
    images: [
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600",
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&angle=30",
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&angle=60",
      "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600&angle=90"
    ],
    category: "TV & Home Theater",
    description: "Experience breathtaking 4K resolution with our UltraVision Smart TV. Featuring HDR10+ and Dolby Vision for stunning contrast and colors, this TV transforms your living room into a home theater.",
    features: [
      "65-inch 4K Ultra HD Display",
      "Quantum Dot Technology for vibrant colors",
      "Smart TV with built-in streaming apps",
      "Voice control compatible",
      "Dolby Atmos sound technology"
    ],
    specifications: {
      "Screen Size": "65 inches",
      "Resolution": "3840 x 2160 pixels",
      "Refresh Rate": "120Hz",
      "Connectivity": "Wi-Fi, Bluetooth, HDMI 2.1, USB",
      "Smart Platform": "WebOS",
      "HDR": "HDR10, HLG, Dolby Vision"
    },
    inStock: true,
    warranty: "2 years manufacturer warranty"
  },
  {
    id: 2,
    name: "ProGamer Wireless Headset",
    price: 129.99,
    rating: 4.5,
    reviews: 89,
    images: [
      "https://images.unsplash.com/photo-1585294873684-0e6a17cfc7b5?w=600",
      "https://images.unsplash.com/photo-1585294873684-0e6a17cfc7b5?w=600&angle=30",
      "https://images.unsplash.com/photo-1585294873684-0e6a17cfc7b5?w=600&angle=60",
      "https://images.unsplash.com/photo-1585294873684-0e6a17cfc7b5?w=600&angle=90"
    ],
    category: "Audio",
    description: "Immerse yourself in crystal-clear audio with our ProGamer Wireless Headset. Perfect for gaming, music, and calls with advanced noise cancellation.",
    features: [
      "Active noise cancellation",
      "50mm dynamic drivers",
      "25-hour battery life",
      "Wireless and wired connectivity",
      "Built-in microphone with noise reduction"
    ],
    specifications: {
      "Driver Size": "50mm",
      "Frequency Response": "20Hz - 20kHz",
      "Battery Life": "25 hours",
      "Connectivity": "Bluetooth 5.0, 3.5mm jack",
      "Weight": "280g",
      "Charging": "USB-C fast charging"
    },
    inStock: true,
    warranty: "1 year manufacturer warranty"
  },
  {
    id: 3,
    name: "SpeedRacer Gaming Laptop",
    price: 1499.99,
    rating: 4.7,
    reviews: 156,
    images: [
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&angle=30",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&angle=60",
      "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=600&angle=90"
    ],
    category: "Computers",
    description: "Unleash your gaming potential with the SpeedRacer Gaming Laptop. Featuring powerful graphics and lightning-fast performance.",
    features: [
      "Intel Core i7 processor",
      "NVIDIA RTX 4060 graphics",
      "16GB DDR4 RAM",
      "1TB NVMe SSD",
      "144Hz refresh rate display"
    ],
    specifications: {
      "Processor": "Intel Core i7-12700H",
      "Graphics": "NVIDIA GeForce RTX 4060",
      "RAM": "16GB DDR4",
      "Storage": "1TB NVMe SSD",
      "Display": "15.6-inch 144Hz FHD",
      "Battery": "4-cell 53.5Wh"
    },
    inStock: true,
    warranty: "2 years manufacturer warranty"
  },
  {
    id: 4,
    name: "SmartWatch Series 7",
    price: 349.99,
    rating: 4.9,
    reviews: 203,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&angle=30",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&angle=60",
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=600&angle=90"
    ],
    category: "Wearables",
    description: "Stay connected and track your fitness with the advanced SmartWatch Series 7. Features health monitoring and smart notifications.",
    features: [
      "Advanced health monitoring",
      "GPS and cellular connectivity",
      "Water resistant to 50 meters",
      "Always-on Retina display",
      "Fast charging technology"
    ],
    specifications: {
      "Display": "45mm Always-On Retina",
      "Connectivity": "GPS + Cellular",
      "Water Resistance": "WR50",
      "Battery Life": "18 hours",
      "Health Features": "ECG, Blood Oxygen, Heart Rate",
      "Storage": "32GB"
    },
    inStock: true,
    warranty: "1 year manufacturer warranty"
  },
  {
    id: 5,
    name: "Wireless Earbuds",
    price: 89.99,
    rating: 4.3,
    reviews: 67,
    images: [
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&angle=30",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&angle=60",
      "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=600&angle=90"
    ],
    category: "Audio",
    description: "True wireless freedom with premium sound quality and all-day comfort.",
    features: [
      "True wireless design",
      "Active noise cancellation",
      "6-hour battery per charge",
      "Wireless charging case",
      "Touch controls"
    ],
    specifications: {
      "Driver Size": "11mm",
      "Battery Life": "6+18 hours with case",
      "Connectivity": "Bluetooth 5.2",
      "Water Resistance": "IPX4",
      "Charging": "Wireless + USB-C",
      "Weight": "5.4g per earbud"
    },
    inStock: true,
    warranty: "1 year manufacturer warranty"
  },
  {
    id: 6,
    name: "Tablet Pro",
    price: 499.99,
    rating: 4.6,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&angle=30",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&angle=60",
      "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=600&angle=90"
    ],
    category: "Tablets",
    description: "Professional-grade tablet perfect for creative work and productivity.",
    features: [
      "12.9-inch Liquid Retina display",
      "Apple M2 chip",
      "All-day battery life",
      "Apple Pencil compatible",
      "5G connectivity"
    ],
    specifications: {
      "Display": "12.9-inch Liquid Retina",
      "Processor": "Apple M2 chip",
      "Storage": "128GB - 2TB options",
      "Connectivity": "Wi-Fi 6E + 5G",
      "Camera": "12MP Wide + 10MP Ultra Wide",
      "Battery": "10 hours"
    },
    inStock: true,
    warranty: "1 year manufacturer warranty"
  },
  {
    id: 7,
    name: "Gaming Console",
    price: 399.99,
    rating: 4.8,
    reviews: 287,
    images: [
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600",
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&angle=30",
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&angle=60",
      "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=600&angle=90"
    ],
    category: "Gaming",
    description: "Next-generation gaming console with cutting-edge performance and exclusive games.",
    features: [
      "4K gaming at 120fps",
      "Ray tracing technology",
      "Ultra-fast SSD",
      "Backward compatibility",
      "Immersive 3D audio"
    ],
    specifications: {
      "CPU": "Custom 8-core AMD Zen 2",
      "GPU": "Custom RDNA 2",
      "Memory": "16GB GDDR6",
      "Storage": "825GB SSD",
      "Output": "4K at 120Hz",
      "Audio": "Tempest 3D AudioTech"
    },
    inStock: true,
    warranty: "1 year manufacturer warranty"
  },
  {
    id: 8,
    name: "Bluetooth Speaker",
    price: 79.99,
    rating: 4.4,
    reviews: 95,
    images: [
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&angle=30",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&angle=60",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=600&angle=90"
    ],
    category: "Audio",
    description: "Portable Bluetooth speaker with powerful sound and waterproof design.",
    features: [
      "360-degree sound",
      "Waterproof design (IP67)",
      "12-hour battery life",
      "Voice assistant integration",
      "Party mode for multiple speakers"
    ],
    specifications: {
      "Drivers": "Dual 45mm drivers",
      "Battery Life": "12 hours",
      "Connectivity": "Bluetooth 5.0",
      "Water Resistance": "IP67",
      "Dimensions": "210 x 75 x 75mm",
      "Weight": "650g"
    },
    inStock: true,
    warranty: "1 year manufacturer warranty"
  }
];

export const relatedProducts = [
  {
    id: 5,
    name: "SoundBar Pro",
    price: 249.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300",
    category: "Audio"
  },
  {
    id: 6,
    name: "Streaming Device 4K",
    price: 79.99,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1593118247619-e2d6f056869e?w=300",
    category: "Accessories"
  },
  {
    id: 7,
    name: "TV Wall Mount",
    price: 89.99,
    rating: 4.7,
    image: "https://images.unsplash.com/photo-1592921870789-04563d55041c?w=300",
    category: "Accessories"
  },
  {
    id: 8,
    name: "HDMI Cable 4K",
    price: 29.99,
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300",
    category: "Accessories"
  }
];

// Helper functions
export const getProductById = (id) => {
  return products.find(product => product.id === parseInt(id));
};

export const getProductsByCategory = (category) => {
  return products.filter(product => product.category === category);
};

export const getFeaturedProducts = (count = 4) => {
  return products.slice(0, count);
};

export const getRelatedProducts = (productId, count = 3) => {
  const currentProduct = getProductById(productId);
  if (!currentProduct) return relatedProducts.slice(0, count);
  
  // Get products from the same category first, then fill with others
  const sameCategory = products.filter(p => 
    p.category === currentProduct.category && p.id !== currentProduct.id
  );
  const otherProducts = products.filter(p => 
    p.category !== currentProduct.category && p.id !== currentProduct.id
  );
  
  return [...sameCategory, ...otherProducts].slice(0, count);
};