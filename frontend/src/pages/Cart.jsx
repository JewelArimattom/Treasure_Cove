import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, ArrowRight, Trash2, Coins } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { getFeaturedProducts } from '../data/products';
import { useCart } from '../context/CartContext';

const Cart = () => {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeItem, clearCart, subtotal } = useCart();
  
  // Calculate additional costs
  const shipping = subtotal > 0 ? 15.99 : 0;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  // Get suggested products for empty cart and recommendations
  const suggestedProducts = getFeaturedProducts(4);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-[#0a192f] text-amber-100">
        <header className="sticky top-0 z-20 bg-[#0a192f]/80 backdrop-blur-md border-b border-amber-900/50">
          <div className="container mx-auto px-6 py-4 flex items-center">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-amber-400 hover:text-amber-300 mr-4 font-pirate"
            >
              <ArrowRight className="rotate-180 mr-2" size={20} /> Back to Ship
            </button>
            <h1 className="text-xl font-bold text-amber-400 font-pirate flex items-center">
              <ShoppingBag className="mr-2" /> Your Treasure Chest
            </h1>
          </div>
        </header>

        <div className="container mx-auto px-6 py-16 flex flex-col items-center justify-center">
          <div className="bg-amber-900/20 rounded-xl p-8 max-w-md w-full text-center border-2 border-amber-700/50">
            <div className="bg-amber-900/30 rounded-full p-6 w-24 h-24 mx-auto flex items-center justify-center mb-6 border-2 border-amber-700/50">
              <ShoppingBag size={40} className="text-amber-400" />
            </div>
            <h2 className="text-2xl font-bold text-amber-400 mb-4 font-pirate">Your Treasure Chest is Empty</h2>
            <p className="text-amber-300/70 mb-8 font-pirate-script text-lg">Time to set sail and discover some legendary treasures!</p>
            <motion.button
              onClick={() => navigate('/')}
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 20px rgba(245, 158, 11, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
              className="bg-gradient-to-r from-amber-600 to-amber-700 text-amber-100 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 w-full hover:from-amber-500 hover:to-amber-600 font-pirate border-2 border-amber-500/50"
            >
              Set Sail for Treasures
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a192f] text-amber-100">
      <header className="sticky top-0 z-20 bg-[#0a192f]/80 backdrop-blur-md border-b border-amber-900/50">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-amber-400 hover:text-amber-300 font-pirate"
          >
            <ArrowRight className="rotate-180 mr-2" size={20} /> Back to Ship
          </button>
          <h1 className="text-xl font-bold text-amber-400 font-pirate flex items-center">
            <ShoppingBag className="mr-2" /> Your Treasure Chest
          </h1>
          <motion.button 
            onClick={clearCart}
            whileHover={{ scale: 1.05, color: '#ef4444' }}
            whileTap={{ scale: 0.95 }}
            className="text-amber-400 hover:text-red-500 text-sm flex items-center font-pirate"
          >
            <Trash2 size={16} className="mr-1" /> Empty Chest
          </motion.button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-amber-900/20 rounded-xl p-6 border-2 border-amber-700/50">
              <h2 className="text-xl font-bold text-amber-400 mb-6 font-pirate flex items-center">
                <ShoppingBag className="mr-2" /> 
                Treasures in Your Chest ({cartItems.length})
              </h2>
              
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center border-b border-amber-700/50 py-6 last:border-b-0"
                  >
                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-amber-900/30 flex-shrink-0 border-2 border-amber-700/50">
                      <img 
                        src={item.images[0]} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="ml-4 flex-grow">
                      <h3 className="font-semibold text-amber-400 font-pirate">{item.name}</h3>
                      <p className="text-lg text-amber-300/70 font-pirate-script">{item.category}</p>
                      <p className="text-xl font-bold text-amber-400 mt-2 font-pirate">${item.price.toFixed(2)} gold coins</p>
                      <div className="flex items-center mt-2">
                        <span className={`text-sm px-3 py-1 rounded-full font-pirate ${
                          item.inStock 
                            ? 'bg-emerald-900/30 text-emerald-400 border border-emerald-700/50' 
                            : 'bg-amber-900/30 text-amber-400 border border-amber-700/50'
                        }`}>
                          {item.inStock ? 'Ready to Plunder' : 'Last Few Remaining'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <motion.button 
                        onClick={() => removeItem(item.id)}
                        whileHover={{ scale: 1.1, color: '#ef4444' }}
                        whileTap={{ scale: 0.9 }}
                        className="text-amber-400 hover:text-red-500 mb-4"
                      >
                        <X size={18} />
                      </motion.button>
                      
                      <div className="flex items-center border-2 border-amber-700/50 rounded-lg bg-amber-900/30">
                        <motion.button 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-amber-400 hover:text-amber-300"
                        >
                          <Minus size={16} />
                        </motion.button>
                        <span className="px-4 py-1 text-amber-400 font-pirate">{item.quantity}</span>
                        <motion.button 
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-amber-400 hover:text-amber-300"
                        >
                          <Plus size={16} />
                        </motion.button>
                      </div>
                      
                      <div className="text-xl font-bold text-amber-400 mt-2 font-pirate">
                        ${(item.price * item.quantity).toFixed(2)} gold coins
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-amber-900/20 p-6 rounded-xl border-2 border-amber-700/50 sticky top-24">
              <h2 className="text-xl font-bold text-amber-400 mb-6 font-pirate flex items-center">
                <Coins className="mr-2" />
                Treasure Summary
              </h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-amber-300">Subtotal</span>
                  <span className="text-amber-300">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-amber-300">Shipping</span>
                  <span className="text-amber-300">${shipping.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-amber-300">Tax</span>
                  <span className="text-amber-300">${tax.toFixed(2)}</span>
                </div>
                
                <div className="border-t border-amber-700/50 pt-4">
                  <div className="flex justify-between text-lg font-bold">
                    <span className="text-amber-400 font-pirate">Total Bounty</span>
                    <span className="text-amber-400 font-pirate flex items-center">
                      <Coins className="mr-1" size={16} />
                      ${total.toFixed(2)}
                    </span>
                  </div>
                </div>
              </div>
              
              <button 
                onClick={() => navigate('/checkout')}
                className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 mb-4 hover:from-cyan-400 hover:to-blue-400"
              >
                Proceed to Checkout
              </button>
              
              <button
                onClick={() => navigate('/')}
                className="w-full border-2 border-amber-700/50 text-amber-400 hover:text-amber-300 font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 font-pirate"
              >
                Set Sail for More Treasures
              </button>              <div className="mt-6 text-xs text-gray-500">
                <p>• Free returns within 30 days</p>
                <p>• Secure checkout with encryption</p>
                <p>• Warranty on all electronic items</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* More Treasures */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-amber-400 mb-6 font-pirate">More Treasures to Discover</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {suggestedProducts.map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(245, 158, 11, 0.2)"
                }}
                className="bg-amber-900/20 rounded-xl overflow-hidden border-2 border-amber-700/50 hover:border-amber-500/70 transition-all duration-300 cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="h-40 bg-amber-900/30 overflow-hidden border-b-2 border-amber-700/50">
                  <img 
                    src={product.images[0]} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-lg text-amber-300/70 mb-1 font-pirate-script">{product.category}</p>
                  <h3 className="font-semibold text-amber-400 mb-2 font-pirate">{product.name}</h3>
                  <div className="text-lg font-bold text-amber-400 font-pirate">${product.price.toFixed(2)} gold coins</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Cart;