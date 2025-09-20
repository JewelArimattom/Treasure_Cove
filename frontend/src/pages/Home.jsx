import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, ShoppingCart, Heart, Star, Anchor, MapPin, Ship, Coins, Telescope } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Main Home Component
export default function Home() {
  const featuredProductsRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  const scrollToFeaturedProducts = () => {
    featuredProductsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a192f] text-amber-300" style={{cursor: 'url("/images/ship-wheel-cursor.svg"), pointer'}}>
        <div className="animate-bounce mb-6">
          <img src="/images/treasure-chest.svg" alt="Loading..." className="w-20 h-20" />
        </div>
        <h2 className="text-3xl font-bold tracking-wide font-pirate">Unlocking Treasure...</h2>
        <p className="text-amber-400 mt-2">Preparing your map!</p>
      </div>
    );
  }

  return (
    <div className="bg-[#0a192f] text-amber-100 min-h-screen" style={{cursor: 'url("/images/ship-wheel-cursor.svg"), pointer'}}>
      <div className="relative min-h-screen overflow-hidden">
        {/* Pirate Background */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-[#0a192f] opacity-90"></div>
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564845654222-d437f029c5c4?q=80&w=1171&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-30"></div>
          {/* Ocean waves animation */}
          <div className="absolute bottom-0 left-0 right-0 h-12 bg-[url('/images/waves.png')] bg-repeat-x bg-auto animate-wave"></div>
        </div>

        <main className="relative z-10">
          <Header />
          <HeroSection onShopNow={scrollToFeaturedProducts} />
          <CategoriesSection />
          <FeaturedProducts ref={featuredProductsRef} />
        </main>
      </div>
    </div>
  );
};

// Header with Search Component
const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-20 bg-[#0a192f]/90 backdrop-blur-md border-b border-amber-900">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-3xl font-bold text-amber-400 cursor-pointer font-pirate flex items-center"
          onClick={() => navigate('/')}
        >
          <img src="/images/ship-wheel.svg" alt="ship wheel" className="w-10 h-10 mr-2 animate-spin-slow" />
          Treasure Cove
        </motion.div>
        
        <div className="flex-1 max-w-2xl mx-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-amber-600" size={20} />
            <input
              type="text"
              placeholder="Search for treasures..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-amber-900/30 border-2 border-amber-700/50 rounded-full py-3 pl-10 pr-4 text-amber-200 focus:outline-none focus:ring-2 focus:ring-amber-500/50 placeholder-amber-400/50 font-pirate"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <button className="relative text-amber-500 hover:text-amber-300">
            <MapPin size={24} />
          </button>
          <button className="relative text-amber-500 hover:text-amber-300">
            <Heart size={24} />
          </button>
          <button 
            className="relative text-amber-500 hover:text-amber-300"
            onClick={() => navigate('/cart')}
          >
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-red-600 text-amber-100 text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold">
              3
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

// Hero Section Component
const HeroSection = ({ onShopNow }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.4 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="h-[70vh] flex items-center justify-center text-center relative">
      {/* Floating ships in the background */}
      <img src="/images/pirate-ship.png" alt="Pirate Ship" className="absolute left-10 top-20 w-40 opacity-70 animate-float-slow" />
      <img src="/images/small-boat.png" alt="Small Boat" className="absolute right-20 bottom-20 w-28 opacity-60 animate-float" />
      
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 relative z-10"
      >
        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-amber-400 leading-tight mb-4 font-pirate"
        >
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-red-500 relative">
            X Marks
            <img src="/images/parrot.svg" alt="parrot" className="absolute -right-16 -top-8 w-16 h-16 animate-bounce" />
          </span>
          <br />
          <span className="text-amber-300">The Spot</span>
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-amber-200 max-w-2xl mx-auto mb-8 font-pirate-script"
        >
          Discover treasures beyond your wildest dreams in our pirate's cove of exotic goods and rare finds!
        </motion.p>
        <motion.div variants={itemVariants}>
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0px 0px 20px rgb(245 158 11)" 
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-amber-600 to-red-700 text-amber-100 font-bold py-4 px-10 rounded-full text-xl transition-all duration-300 font-pirate border-2 border-amber-500"
            onClick={onShopNow}
          >
            <Telescope className="inline-block mr-2" size={24} />
            Hunt for Treasure
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Categories Section Component
const CategoriesSection = () => {
  const categories = [
    { name: "Pirate Gear", icon: "🏴‍☠️", count: 42 },
    { name: "Treasure Maps", icon: "🗺️", count: 18 },
    { name: "Ship Supplies", icon: "⚓", count: 27 },
    { name: "Exotic Goods", icon: "📦", count: 35 },
    { name: "Rum & Provisions", icon: "🍷", count: 23 },
    { name: "Jewelry", icon: "💎", count: 31 },
  ];

  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-amber-400 text-center mb-12 flex items-center justify-center font-pirate"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Anchor className="w-8 h-8 mr-3 animate-pulse text-amber-400" />
          Plunder Categories
        </motion.h2>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ 
                y: -5, 
                scale: 1.02,
                boxShadow: '0 0 15px rgba(245, 158, 11, 0.4)'
              }}
              className="bg-amber-900/40 backdrop-blur-sm rounded-xl p-5 text-center cursor-pointer border-2 border-amber-700 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{category.icon}</div>
              <h3 className="font-semibold text-amber-200 font-pirate">{category.name}</h3>
              <p className="text-sm text-amber-500">{category.count} treasures</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Featured Products Component
const FeaturedProducts = React.forwardRef((props, ref) => {
  const navigate = useNavigate();
  
  const featuredProducts = [
    {
      id: 1,
      name: "Ancient Gold Doubloons",
      price: 299.99,
      rating: 4.9,
      images: ["https://images.unsplash.com/photo-1579541704386-2d5c6f695e9d?w=400"],
      category: "Jewelry",
      description: "Authentic Spanish gold doubloons recovered from shipwrecks."
    },
    {
      id: 2,
      name: "Pirate Captain's Spyglass",
      price: 159.99,
      rating: 4.7,
      images: ["https://images.unsplash.com/photo-1532012197267-da84d127e765?w=400"],
      category: "Pirate Gear",
      description: "Brass telescope used by legendary pirates to spot treasure."
    },
    {
      id: 3,
      name: "Treasure Map Collection",
      price: 89.99,
      rating: 4.5,
      images: ["https://images.unsplash.com/photo-1544787219-7f47ccb76574?w=400"],
      category: "Treasure Maps",
      description: "Set of mysterious maps leading to hidden treasures."
    },
    {
      id: 4,
      name: "Rare Caribbean Rum",
      price: 79.99,
      rating: 4.8,
      images: ["https://images.unsplash.com/photo-1470338745628-171cf53ade41?w=400"],
      category: "Rum & Provisions",
      description: "Aged rum from hidden Caribbean distilleries."
    },
  ];

  return (
    <section ref={ref} className="py-16 px-6 bg-amber-900/20">
      <div className="container mx-auto">
        <motion.h2 
          className="text-4xl font-bold text-amber-400 text-center mb-4 font-pirate"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Coins className="inline-block mr-3 w-8 h-8" />
          Captain's Treasure Trove
        </motion.h2>
        <p className="text-amber-500 text-center mb-12 font-pirate-script">Our finest plunder for the discerning pirate</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="bg-amber-900/40 backdrop-blur-sm rounded-xl overflow-hidden border-2 border-amber-700 transition-all duration-300 cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
              whileHover={{ 
                scale: 1.03,
                boxShadow: "0 0 20px rgba(245, 158, 11, 0.3)"
              }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent"></div>
                <button 
                  className="absolute top-3 right-3 bg-amber-900/80 rounded-full p-2 hover:bg-amber-700 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation();
                    // Add to wishlist logic here
                  }}
                >
                  <Heart size={18} className="text-amber-300" />
                </button>
              </div>
              
              <div className="p-4">
                <p className="text-sm text-amber-500 mb-1 font-pirate">{product.category}</p>
                <h3 className="font-semibold text-amber-200 mb-2 font-pirate">{product.name}</h3>
                
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < Math.floor(product.rating) ? "#f59e0b" : "none"} 
                      className="text-amber-400" 
                    />
                  ))}
                  <span className="text-sm text-amber-500 ml-2">({product.rating})</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-amber-300 font-pirate">
                    <Coins className="inline-block w-5 h-5 mr-1" />
                    {product.price.toFixed(2)}
                  </span>
                  <button 
                    className="bg-amber-700 hover:bg-amber-600 text-amber-100 rounded-full p-2 transition-colors"
                    onClick={(e) => {
                      e.stopPropagation();
                      // Add to cart logic here
                    }}
                  >
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ 
              scale: 1.05, 
              boxShadow: "0 0 20px rgba(245, 158, 11, 0.4)"
            }}
            whileTap={{ scale: 0.95 }}
            className="bg-amber-700 hover:bg-amber-600 text-amber-100 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 border-2 border-amber-500 font-pirate"
            onClick={() => navigate('/products')}
          >
            <Ship className="inline-block mr-2" size={20} />
            Explore All Booty
          </motion.button>
        </div>
      </div>
    </section>
  );
});

// Add these styles to your CSS file or use a style tag
const styles = `
  @keyframes wave {
    0% { background-position: 0 0; }
    100% { background-position: 1000px 0; }
  }
  @keyframes float {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0px); }
  }
  @keyframes float-slow {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0px); }
  }
  .animate-wave {
    animation: wave 20s linear infinite;
  }
  .animate-float {
    animation: float 4s ease-in-out infinite;
  }
  .animate-float-slow {
    animation: float-slow 6s ease-in-out infinite;
  }
  .font-pirate {
    font-family: 'Pirata One', cursive, serif;
  }
  .font-pirate-script {
    font-family: 'Pirata One', cursive, serif;
  }
`;

// Add the style tag to the document head
if (typeof document !== 'undefined') {
  const styleTag = document.createElement('style');
  styleTag.innerHTML = styles;
  document.head.appendChild(styleTag);
}