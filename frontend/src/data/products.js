// data/products.js
export const categories = [
  { name: "Pirate Weapons", icon: "⚔️", count: 24 },
  { name: "Treasure Maps", icon: "🗺️", count: 18 },
  { name: "Ship Equipment", icon: "⚓", count: 27 },
  { name: "Pirate Attire", icon: "👒", count: 35 },
  { name: "Rum & Provisions", icon: "🍷", count: 23 },
  { name: "Jewelry & Gold", icon: "💎", count: 31 },
];

export const products = [
  {
    id: 1,
    name: "Ancient Sword of the Pirate King",
    price: 299.99,
    rating: 4.9,
    reviews: 142,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5Nt4uffycIE-LcQCivWs7Q3C5V4ATl3BYK1oNe0SmKOZSZq68d0UreBfjbaQwFPoZ5c&usqp=CAU",
      "data:image/png;base64,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",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6ZkQ3LEok-fYIvZ2A07BvOwNEzYyApeM706MGRHn2h8KdywrXq281dxYQYjbbP3qqRiY&usqp=CAU",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5Nt4uffycIE-LcQCivWs7Q3C5V4ATl3BYK1oNe0SmKOZSZq68d0UreBfjbaQwFPoZ5c&usqp=CAU",
      
    ],
    category: "Weapons",
    description: "Authentic Spanish sword doubloons recovered from shipwrecks in the Caribbean Sea. Each coin has a unique history and comes with a certificate of authenticity.",
    features: [
      "Silver purity",
      "Dated between 1650-1750",
      "Recovered from verified shipwrecks",
      "Certificate of authenticity included",
      "Individually numbered"
    ],
    specifications: {
      "Material": "silver",
      "Diameter": "28mm",
      "Weight": "6.7g each",
      "Origin": "Spanish Colonial",
      "Age": "300+ years",
      "Condition": "Very Fine"
    },
    inStock: true,
    warranty: "Lifetime authenticity guarantee"
  },
  {
    id: 2,
    name: "Captain's Brass Spyglass",
    price: 159.99,
    rating: 4.7,
    reviews: 89,
    images: [
      "https://aladean.com/cdn/shop/products/spyglass.jpg?v=1642325294&width=533",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ULUSm_WpWzYN1aUf8C-IVF10sPWzE7PWiPYh2l67pXZF9LEq78zTmAqMoUMXUHQfl9c&usqp=CAU",
      "https://aladean.com/cdn/shop/products/spyglass.jpg?v=1642325294&width=533",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0ULUSm_WpWzYN1aUf8C-IVF10sPWzE7PWiPYh2l67pXZF9LEq78zTmAqMoUMXUHQfl9c&usqp=CAU",
      
    ],
    category: "Ship Equipment",
    description: "Handcrafted brass telescope used by legendary pirates to spot treasure islands and enemy ships from great distances. Perfect for navigation and exploration.",
    features: [
      "20x magnification power",
      "Solid brass construction",
      "Leather wrapping for grip",
      "Collapsible design",
      "Brass eyepiece with crystal lens"
    ],
    specifications: {
      "Material": "Solid Brass",
      "Magnification": "20x",
      "Length": "35cm (extended)",
      "Weight": "850g",
      "Lens": "Crystal glass",
      "Case": "Included leather pouch"
    },
    inStock: true,
    warranty: "5 years craftsmanship warranty"
  },
  {
    id: 3,
    name: "Treasure Map Collection",
    price: 89.99,
    rating: 4.5,
    reviews: 156,
    images: [
      "https://sfcatholic.org/bishopsbulletin/wp-content/uploads/sites/3/2021/11/page-12-pic.jpg",
      "https://sfcatholic.org/bishopsbulletin/wp-content/uploads/sites/3/2021/11/page-12-pic.jpg",
      "https://sfcatholic.org/bishopsbulletin/wp-content/uploads/sites/3/2021/11/page-12-pic.jpghttps://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&angle=60",
      "https://sfcatholic.org/bishopsbulletin/wp-content/uploads/sites/3/2021/11/page-12-pic.jpg"
    ],
    category: "Treasure Maps",
    description: "Set of mysterious maps leading to hidden treasures across the Caribbean. Each map is aged and detailed with secret markings known only to seasoned pirates.",
    features: [
      "Aged parchment authentic feel",
      "Invisible ink reveals",
      "Coordinates to real locations",
      "Historical accuracy",
      "Waterproof casing"
    ],
    specifications: {
      "Material": "Aged Parchment",
      "Quantity": "5 maps in set",
      "Age": "Replica of 17th century",
      "Water Resistance": "Yes",
      "Authentication": "Historically accurate",
      "Storage": "Leather scroll case"
    },
    inStock: true,
    warranty: "Satisfaction guarantee"
  },
  {
    id: 4,
    name: "Rare Caribbean Rum",
    price: 79.99,
    rating: 4.8,
    reviews: 203,
    images: [
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSZQw_gmkRVCLre9NGQOwZPszQ4jWIij3_w&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSZQw_gmkRVCLre9NGQOwZPszQ4jWIij3_w&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSZQw_gmkRVCLre9NGQOwZPszQ4jWIij3_w&s",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtSZQw_gmkRVCLre9NGQOwZPszQ4jWIij3_w&s"
    ],
    category: "Rum & Provisions",
    description: "Aged rum from hidden Caribbean distilleries following ancient pirate recipes. Smooth with notes of oak, spice, and tropical fruits.",
    features: [
      "Aged 12 years in oak barrels",
      "Traditional pirate recipe",
      "Handcrafted in small batches",
      "Natural ingredients",
      "Distilled using traditional methods"
    ],
    specifications: {
      "Age": "12 years",
      "Volume": "750ml",
      "Alcohol": "40% ABV",
      "Origin": "Caribbean",
      "Aging": "Oak barrels",
      "Serving": "Room temperature or chilled"
    },
    inStock: true,
    warranty: "Quality guarantee"
  },
  {
    id: 5,
    name: "Pirate Cutlass Sword",
    price: 189.99,
    rating: 4.6,
    reviews: 67,
    images: [
      "https://images.unsplash.com/photo-1579972668140-f7da53eee1dc?w=600",
      "https://images.unsplash.com/photo-1579972668140-f7da53eee1dc?w=600&angle=30",
      "https://images.unsplash.com/photo-1579972668140-f7da53eee1dc?w=600&angle=60",
      "https://images.unsplash.com/photo-1579972668140-f7da53eee1dc?w=600&angle=90"
    ],
    category: "Pirate Weapons",
    description: "Authentic replica of a pirate cutlass sword with tempered steel blade and ornate handle. Perfect for display or reenactments.",
    features: [
      "Tempered steel blade",
      "Ornate brass handle",
      "Leather-wrapped grip",
      "Decorative engravings",
      "Wood and leather scabbard"
    ],
    specifications: {
      "Blade Length": "75cm",
      "Total Length": "90cm",
      "Weight": "1.2kg",
      "Material": "Tempered steel",
      "Edge": "Blunt (display only)",
      "Scabbard": "Included"
    },
    inStock: true,
    warranty: "1 year craftsmanship warranty"
  },
  {
    id: 6,
    name: "Captain's Tricorne Hat",
    price: 49.99,
    rating: 4.4,
    reviews: 124,
    images: [
      "https://images.unsplash.com/photo-1600185366326-3f5e8f4b8c3c?w=600",
    ],
    category: "Pirate Attire",
    description: "Authentic replica of a pirate captain's tricorne hat made from genuine leather with decorative feathers and golden trim.",
    features: [
      "Genuine leather construction",
      "Decorative golden trim",
      "Authentic feather accent",
      "Adjustable inner band",
      "Weather resistant"
    ],
    specifications: {
      "Material": "Genuine Leather",
      "Sizes": "S, M, L, XL",
      "Color": "Black with gold trim",
      "Features": "Adjustable band",
      "Accessories": "Feather included",
      "Care": "Wipe clean only"
    },
    inStock: true,
    warranty: "6 months quality guarantee"
  },
  {
    id: 7,
    name: "Ship's Wheel Replica",
    price: 399.99,
    rating: 4.8,
    reviews: 287,
    images: [
      "https://images.unsplash.com/photo-1611251432587-2bf8f0c7ee1a?w=600",
      "https://images.unsplash.com/photo-1611251432587-2bf8f0c7ee1a?w=600&angle=30",
      "https://images.unsplash.com/photo-1611251432587-2bf8f0c7ee1a?w=600&angle=60",
      "https://images.unsplash.com/photo-1611251432587-2bf8f0c7ee1a?w=600&angle=90"
    ],
    category: "Ship Equipment",
    description: "Full-size replica of a classic ship's wheel made from solid oak and brass fittings. Perfect for nautical decor or pirate-themed establishments.",
    features: [
      "Solid oak construction",
      "Brass fittings and accents",
      "Authentic design",
      "Wall mount included",
      "Handcrafted details"
    ],
    specifications: {
      "Diameter": "90cm",
      "Material": "Solid Oak",
      "Weight": "15kg",
      "Finish": "Weathered antique",
      "Mounting": "Wall bracket included",
      "Assembly": "Required"
    },
    inStock: true,
    warranty: "2 years craftsmanship warranty"
  },
  {
    id: 8,
    name: "Pirate Treasure Chest",
    price: 179.99,
    rating: 4.7,
    reviews: 95,
    images: [
      "https://images.unsplash.com/photo-1596524430615-b46475bffa9c?w=600",
      "https://images.unsplash.com/photo-1596524430615-b46475bffa9c?w=600&angle=30",
      "https://images.unsplash.com/photo-1596524430615-b46475bffa9c?w=600&angle=60",
      "https://images.unsplash.com/photo-1596524430615-b46475bffa9c?w=600&angle=90"
    ],
    category: "Jewelry & Gold",
    description: "Authentic replica pirate treasure chest with iron bindings, lock and key. Perfect for storing valuables or as a decorative piece.",
    features: [
      "Solid wood construction",
      "Iron bindings and hardware",
      "Functional lock with key",
      "Felt-lined interior",
      "Authentic distressed finish"
    ],
    specifications: {
      "Dimensions": "40x25x25cm",
      "Material": "Wood with iron",
      "Weight": "4.5kg",
      "Lock": "Functional with key",
      "Interior": "Felt lined",
      "Finish": "Distressed antique"
    },
    inStock: true,
    warranty: "1 year craftsmanship warranty"
  }
];

export const relatedProducts = [
  {
    id: 9,
    name: "Jolly Roger Flag",
    price: 34.99,
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1564982834137-8e29c0c84af9?w=300",
    category: "Ship Equipment"
  },
  {
    id: 10,
    name: "Leather Boots",
    price: 89.99,
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1542280756-74b2f55e73ab?w=300",
    category: "Pirate Attire"
  },
  {
    id: 11,
    name: "Pirate Hook Hand",
    price: 29.99,
    rating: 4.2,
    image: "https://images.unsplash.com/photo-1576086213369-97a306d36557?w=300",
    category: "Pirate Attire"
  },
  {
    id: 12,
    name: "Ancient Silver Coins",
    price: 149.99,
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1581351721010-4d6c969fe5c3?w=300",
    category: "Jewelry & Gold"
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