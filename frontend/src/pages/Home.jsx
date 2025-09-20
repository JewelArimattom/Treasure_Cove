import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Search, Star, Anchor, Ship, Coins, Telescope } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getFeaturedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

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
      <div className="flex flex-col items-center justify-center min-h-screen bg-[#0a192f] text-amber-300" style={{cursor: 'url(""), pointer'}}>
        <div className="animate-bounce mb-6">
          <img src="" alt="Loading..." className="w-20 h-20" />
        </div>
        <h2 className="text-3xl font-bold tracking-wide font-pirate">Unlocking Treasure...</h2>
        <p className="text-amber-400 mt-2">Preparing your map!</p>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-b from-[#0a192f] via-[#112240] to-[#0a192f] text-amber-100 min-h-screen" style={{cursor: 'url(""), pointer'}}>
      <div className="relative min-h-screen overflow-hidden">
        {/* Pirate Background with effects */}
        <div className="absolute inset-0 z-0">
          {/* Base gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#0a192f]/90 via-[#112240]/80 to-[#0a192f]/90"></div>
          
          {/* Animated stars/fireflies effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-amber-300/50 rounded-full animate-firefly"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${4 + Math.random() * 6}s`
                }}
              />
            ))}
          </div>
          
          {/* Textured overlay */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
          
          {/* Ocean background with parallax */}
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1564845654222-d437f029c5c4?q=80&w=1171&auto=format&fit=crop')] 
            bg-cover bg-center mix-blend-overlay opacity-30 animate-parallax"
          ></div>
          
          {/* Enhanced ocean waves animation */}
          <div className="absolute bottom-0 left-0 right-0">
          </div>
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
        <div className="flex-1 max-w-2xl">
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
  const { addToCart } = useCart();
  const featuredProducts = getFeaturedProducts(4);

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
              <div className="relative h-48 overflow-hidden group">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-amber-900/70 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-amber-900 to-transparent">
                  <p className="text-sm text-amber-400/90 font-pirate">{product.category}</p>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-amber-200 text-lg mb-2 line-clamp-1 hover:text-amber-300 transition-colors font-pirate">
                  {product.name}
                </h3>
                
                <p className="text-sm text-amber-400/70 mb-3 line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-center mb-3">
                  <div className="flex mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        fill={i < Math.floor(product.rating) ? "#f59e0b" : "none"} 
                        className="text-amber-400" 
                      />
                    ))}
                  </div>
                  <span className="text-sm text-amber-500">({product.reviews} reviews)</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex flex-col">
                    <span className="text-xl font-bold text-amber-300 font-pirate">
                      <Coins className="inline-block w-5 h-5 mr-1" />
                      {product.price.toFixed(2)}
                    </span>
                    <span className="text-xs text-amber-500">{product.inStock ? 'In Stock' : 'Out of Stock'}</span>
                  </div>
                  
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
            onClick={() => navigate('/list-products')}
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
  @keyframes wave-reverse {
    0% { background-position: 1000px 0; }
    100% { background-position: 0 0; }
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
  @keyframes firefly {
    0% {
      transform: translate(0, 0);
      opacity: 0;
    }
    25% {
      opacity: 1;
    }
    75% {
      opacity: 1;
    }
    100% {
      transform: translate(100px, -100px);
      opacity: 0;
    }
  }
  @keyframes parallax {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
  .animate-wave {
    animation: wave 20s linear infinite;
  }
  .animate-wave-reverse {
    animation: wave-reverse 15s linear infinite;
  }
  .animate-float {
    animation: float 4s ease-in-out infinite;
  }
  .animate-float-slow {
    animation: float-slow 6s ease-in-out infinite;
  }
  .animate-firefly {
    animation: firefly var(--duration, 5s) ease-in-out infinite;
    opacity: 0;
  }
  .animate-parallax {
    animation: parallax 15s ease-in-out infinite;
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