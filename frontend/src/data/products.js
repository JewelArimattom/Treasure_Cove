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
      "data:image/jpeg;base64,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",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJ5Nt4uffycIE-LcQCivWs7Q3C5V4ATl3BYK1oNe0SmKOZSZq68d0UreBfjbaQwFPoZ5c&usqp=CAU",
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
      "data:image/jpeg;base64,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",
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
      "https://png.pngtree.com/png-clipart/20250124/original/pngtree-classic-wooden-ship-wheel-png-image_19567401.png",
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
      "data:image/jpeg;base64,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",
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