import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Search, ShoppingCart, Heart, Star } from 'lucide-react';
import PixelBlast from './PixelBlast';
import { useNavigate } from 'react-router-dom';
import { categories, getFeaturedProducts } from '../data/products';

// Main Home Component
export default function Home() {
  const featuredProductsRef = useRef(null);

  const scrollToFeaturedProducts = () => {
    featuredProductsRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-900 text-gray-100 font-sans antialiased">
      <div className="relative min-h-screen overflow-hidden">
        {/* Lightning Background */}
        <div className="absolute inset-0 z-0">
          <PixelBlast />
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
    <header className="sticky top-0 z-20 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500 cursor-pointer"
          onClick={() => navigate('/')}
        >
          ElectroHub
        </motion.div>
        
        <div className="flex-1 max-w-2xl mx-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
            <input
              type="text"
              placeholder="Search products, brands, and categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-full py-3 pl-10 pr-4 text-gray-100 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </div>
        </div>
        
        <div className="flex items-center space-x-6">
          <button className="relative text-gray-300 hover:text-white">
            <Heart size={24} />
          </button>
          <button 
            className="relative text-gray-300 hover:text-white"
            onClick={() => navigate('/cart')}
          >
            <ShoppingCart size={24} />
            <span className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
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
    <section className="h-[70vh] flex items-center justify-center text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
            Tech Revolution
          </span>
          <br />
          Starts Here
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Discover the latest gadgets and electronics with cutting-edge technology and unbeatable prices.
        </motion.p>
        <motion.div variants={itemVariants}>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgb(45 212 191)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300"
            onClick={onShopNow}
          >
            Shop Now <ArrowRight className="inline-block ml-2 -mr-1" size={20} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

// Categories Section Component
const CategoriesSection = () => {
  return (
    <section className="py-16 px-6">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Shop by Category</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5, scale: 1.02 }}
              className="bg-slate-800/70 backdrop-blur-sm rounded-xl p-4 text-center cursor-pointer border border-slate-700 hover:border-cyan-500 transition-colors"
            >
              <div className="text-3xl mb-2">{category.icon}</div>
              <h3 className="font-semibold text-white">{category.name}</h3>
              <p className="text-sm text-gray-400">{category.count} products</p>
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
  const featuredProducts = getFeaturedProducts();

  return (
    <section ref={ref} className="py-16 px-6 bg-slate-900/50">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-4">Featured Products</h2>
        <p className="text-gray-400 text-center mb-12">Discover our most popular items</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-slate-800/70 backdrop-blur-sm rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-colors cursor-pointer"
              onClick={() => navigate(`/product/${product.id}`)}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={product.images[0]} 
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <button className="absolute top-3 right-3 bg-slate-900/70 rounded-full p-2 hover:bg-cyan-500 transition-colors">
                  <Heart size={18} />
                </button>
              </div>
              
              <div className="p-4">
                <p className="text-sm text-cyan-400 mb-1">{product.category}</p>
                <h3 className="font-semibold text-white mb-2">{product.name}</h3>
                
                <div className="flex items-center mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      fill={i < Math.floor(product.rating) ? "#ffc107" : "none"} 
                      className="text-yellow-400" 
                    />
                  ))}
                  <span className="text-sm text-gray-400 ml-2">({product.rating})</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-white">${product.price.toFixed(2)}</span>
                  <button className="bg-cyan-600 hover:bg-cyan-500 text-white rounded-full p-2 transition-colors">
                    <ShoppingCart size={18} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgb(45 212 191)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300"
          >
            View All Products <ArrowRight className="inline-block ml-2 -mr-1" size={20} />
          </motion.button>
        </div>
      </div>
    </section>
  );
});