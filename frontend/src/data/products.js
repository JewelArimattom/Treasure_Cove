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
    name: "Ancient Gold Doubloons",
    price: 299.99,
    rating: 4.9,
    reviews: 142,
    images: [
      "https://images.unsplash.com/photo-1579541704386-2d5c6f695e9d?w=600",
      "https://images.unsplash.com/photo-1579541704386-2d5c6f695e9d?w=600&angle=30",
      "https://images.unsplash.com/photo-1579541704386-2d5c6f695e9d?w=600&angle=60",
      "https://images.unsplash.com/photo-1579541704386-2d5c6f695e9d?w=600&angle=90"
    ],
    category: "Jewelry & Gold",
    description: "Authentic Spanish gold doubloons recovered from shipwrecks in the Caribbean Sea. Each coin has a unique history and comes with a certificate of authenticity.",
    features: [
      "24-karat gold purity",
      "Dated between 1650-1750",
      "Recovered from verified shipwrecks",
      "Certificate of authenticity included",
      "Individually numbered"
    ],
    specifications: {
      "Material": "24K Gold",
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
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600",
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&angle=30",
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&angle=60",
      "https://images.unsplash.com/photo-1532012197267-da84d127e765?w=600&angle=90"
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
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&angle=30",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&angle=60",
      "https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=600&angle=90"
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
      "https://images.unsplash.com/photo-1470338745628-171cf53ade41?w=600",
      "https://images.unsplash.com/photo-1470338745628-171cf53ade41?w=600&angle=30",
      "https://images.unsplash.com/photo-1470338745628-171cf53ade41?w=600&angle=60",
      "https://images.unsplash.com/photo-1470338745628-171cf53ade41?w=600&angle=90"
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
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=600",
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=600&angle=30",
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=600&angle=60",
      "https://images.unsplash.com/photo-1534030347209-467a5b0ad3e6?w=600&angle=90"
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