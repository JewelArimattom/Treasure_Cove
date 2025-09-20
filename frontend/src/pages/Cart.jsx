import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Plus, Minus, ShoppingBag, ArrowRight, Trash2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "UltraVision 4K Smart TV",
      price: 899.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=400",
      category: "TV & Home Theater",
      inStock: true
    },
    {
      id: 2,
      name: "ProGamer Wireless Headset",
      price: 129.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1585294873684-0e6a17cfc7b5?w=400",
      category: "Audio",
      inStock: true
    },
    {
      id: 4,
      name: "SmartWatch Series 7",
      price: 349.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400",
      category: "Wearables",
      inStock: true
    }
  ]);

  // Calculate cart totals
  const subtotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const shipping = subtotal > 0 ? 15.99 : 0;
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;
    
    setCartItems(prevItems => 
      prevItems.map(item => 
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const removeItem = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-slate-900 text-gray-100">
        <header className="sticky top-0 z-20 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
          <div className="container mx-auto px-6 py-4 flex items-center">
            <button 
              onClick={() => navigate(-1)}
              className="flex items-center text-gray-300 hover:text-white mr-4"
            >
              <ArrowRight className="rotate-180 mr-2" size={20} /> Back
            </button>
            <h1 className="text-xl font-semibold">Shopping Cart</h1>
          </div>
        </header>

        <div className="container mx-auto px-6 py-16 flex flex-col items-center justify-center">
          <div className="bg-slate-800/50 rounded-2xl p-8 max-w-md w-full text-center">
            <div className="bg-slate-700/50 rounded-full p-6 w-24 h-24 mx-auto flex items-center justify-center mb-6">
              <ShoppingBag size={40} className="text-cyan-500" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">Your cart is empty</h2>
            <p className="text-gray-400 mb-8">Looks like you haven't added any items to your cart yet.</p>
            <button
              onClick={() => navigate('/')}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 w-full"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      <header className="sticky top-0 z-20 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-300 hover:text-white"
          >
            <ArrowRight className="rotate-180 mr-2" size={20} /> Back
          </button>
          <h1 className="text-xl font-semibold">Shopping Cart</h1>
          <button 
            onClick={clearCart}
            className="text-gray-400 hover:text-red-500 text-sm flex items-center"
          >
            <Trash2 size={16} className="mr-1" /> Clear cart
          </button>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items */}
          <div className="lg:w-2/3">
            <div className="bg-slate-800/50 rounded-2xl p-6">
              <h2 className="text-xl font-bold text-white mb-6">Cart Items ({cartItems.length})</h2>
              
              <AnimatePresence>
                {cartItems.map((item) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex items-center border-b border-slate-700 py-6 last:border-b-0"
                  >
                    <div className="w-24 h-24 rounded-lg overflow-hidden bg-slate-700 flex-shrink-0">
                      <img 
                        src={item.image} 
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="ml-4 flex-grow">
                      <h3 className="font-semibold text-white">{item.name}</h3>
                      <p className="text-sm text-cyan-400">{item.category}</p>
                      <p className="text-lg font-bold text-white mt-2">${item.price.toFixed(2)}</p>
                      <div className="flex items-center mt-2">
                        <span className={`text-xs px-2 py-1 rounded-full ${item.inStock ? 'bg-green-900/30 text-green-400' : 'bg-amber-900/30 text-amber-400'}`}>
                          {item.inStock ? 'In Stock' : 'Low Stock'}
                        </span>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end">
                      <button 
                        onClick={() => removeItem(item.id)}
                        className="text-gray-400 hover:text-red-500 mb-4"
                      >
                        <X size={18} />
                      </button>
                      
                      <div className="flex items-center border border-slate-700 rounded-lg">
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="px-3 py-1 text-gray-300 hover:text-white"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="px-4 py-1 text-white">{item.quantity}</span>
                        <button 
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="px-3 py-1 text-gray-300 hover:text-white"
                        >
                          <Plus size={16} />
                        </button>
                      </div>
                      
                      <div className="text-lg font-bold text-white mt-2">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
          
          {/* Order Summary */}
          <div className="lg:w-1/3">
            <div className="bg-slate-800/50 rounded-2xl p-6 sticky top-24">
              <h2 className="text-xl font-bold text-white mb-6">Order Summary</h2>
              
              <div className="space-y-4 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-400">Subtotal</span>
                  <span className="text-white">${subtotal.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-400">Shipping</span>
                  <span className="text-white">${shipping.toFixed(2)}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-400">Tax</span>
                  <span className="text-white">${tax.toFixed(2)}</span>
                </div>
                
                <div className="h-px bg-slate-700 my-4"></div>
                
                <div className="flex justify-between text-lg font-bold">
                  <span className="text-white">Total</span>
                  <span className="text-white">${total.toFixed(2)}</span>
                </div>
              </div>
              
              <button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300 mb-4">
                Proceed to Checkout
              </button>
              
              <button 
                onClick={() => navigate('/')}
                className="w-full border border-slate-700 text-gray-300 hover:text-white font-bold py-3 px-8 rounded-lg text-lg transition-all duration-300"
              >
                Continue Shopping
              </button>
              
              <div className="mt-6 text-xs text-gray-500">
                <p>• Free returns within 30 days</p>
                <p>• Secure checkout with encryption</p>
                <p>• Warranty on all electronic items</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Recently Viewed Items */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-white mb-6">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                id: 5,
                name: "Wireless Earbuds",
                price: 89.99,
                image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=300",
                category: "Audio"
              },
              {
                id: 6,
                name: "Tablet Pro",
                price: 499.99,
                image: "https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=300",
                category: "Tablets"
              },
              {
                id: 7,
                name: "Gaming Console",
                price: 399.99,
                image: "https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=300",
                category: "Gaming"
              },
              {
                id: 8,
                name: "Bluetooth Speaker",
                price: 79.99,
                image: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300",
                category: "Audio"
              }
            ].map((product) => (
              <motion.div
                key={product.id}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-colors cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <div className="h-40 bg-slate-800 overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-cyan-400 mb-1">{product.category}</p>
                  <h3 className="font-semibold text-white mb-2 text-sm">{product.name}</h3>
                  <div className="text-lg font-bold text-white">${product.price.toFixed(2)}</div>
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