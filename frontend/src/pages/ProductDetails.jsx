import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Heart, Star, Truck, Shield, RotateCcw, Plus, Minus } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById, getRelatedProducts } from '../data/products';
import { useCart } from '../context/CartContext';
import toast from 'react-hot-toast';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart: addItemToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isAddingToCart, setIsAddingToCart] = useState(false);
  
  // Get product data from static data
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id);

  // Handle case where product is not found
  if (!product) {
    return (
      <div className="min-h-screen bg-[#0a192f] text-amber-100 flex items-center justify-center">
        <div className="text-center bg-amber-900/20 rounded-xl p-8 border-2 border-amber-700/50 max-w-md">
          <h1 className="text-2xl font-bold text-amber-400 mb-4 font-pirate">Lost Treasure</h1>
          <p className="text-amber-300/70 mb-6 text-lg font-pirate-script">Arr! This treasure seems to have been lost to the depths of the sea.</p>
          <motion.button 
            onClick={() => navigate('/')}
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 0 20px rgba(245, 158, 11, 0.3)"
            }}
            whileTap={{ scale: 0.98 }}
            className="bg-gradient-to-r from-amber-600 to-amber-700 text-amber-100 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 hover:from-amber-500 hover:to-amber-600 font-pirate border-2 border-amber-500/50"
          >
            Return to Port
          </motion.button>
        </div>
      </div>
    );
  }

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const handleAddToCart = async () => {
    setIsAddingToCart(true);
    try {
      await addItemToCart({
        ...product,
        quantity
      });
      
      toast.success(
        <div className="flex items-center">
          <ShoppingCart className="mr-2" size={18} />
          <span>{quantity} {quantity === 1 ? 'item' : 'items'} added to cart</span>
        </div>,
        {
          duration: 2000,
          icon: '🛒',
        }
      );
    } catch (error) {
      toast.error('Failed to add item to cart');
    } finally {
      setIsAddingToCart(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-amber-100">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-[#0a192f]/80 backdrop-blur-md border-b border-amber-900/50">
        <div className="container mx-auto px-6 py-4 flex items-center">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-amber-400 hover:text-amber-300 mr-4 font-pirate"
          >
            <ArrowLeft size={20} className="mr-2" /> Back to Ship
          </button>
          <h1 className="text-xl font-bold text-amber-400 font-pirate">Treasure Details</h1>
        </div>
      </header>

      <main className="container mx-auto px-6 py-8">
        {/* Product Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Product Images */}
          <div>
            <div className="rounded-xl overflow-hidden mb-4 bg-slate-800">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-96 object-contain"
              />
            </div>
            <div className="flex space-x-4">
              {product.images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`w-24 h-24 rounded-md overflow-hidden border-2 ${selectedImage === index ? 'border-cyan-500' : 'border-slate-700'}`}
                >
                  <img 
                    src={img} 
                    alt={`${product.name} view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-6">
              <span className="text-amber-300/70 text-lg font-pirate-script">{product.category}</span>
              <h1 className="text-3xl font-bold text-amber-400 mt-2 mb-3 font-pirate">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={i < Math.floor(product.rating) ? "#ffd700" : "none"} 
                      className="text-amber-400" 
                    />
                  ))}
                  <span className="text-lg text-amber-300/70 ml-2 font-pirate-script">{product.rating} ({product.reviews} tales from fellow pirates)</span>
                </div>
              </div>

              <div className="text-3xl font-bold text-amber-400 mb-6 font-pirate">${product.price.toFixed(2)} gold coins</div>

              <p className="text-amber-300/70 mb-8 text-lg font-pirate-script">{product.description}</p>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-xl font-bold text-amber-400 mb-4 font-pirate">Legendary Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 rounded-full bg-amber-400 mt-2 mr-3"></div>
                    <span className="text-amber-300/70 text-lg font-pirate-script">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <span className="text-amber-400 mr-4 font-pirate text-lg">Quantity:</span>
                <div className="flex items-center border-2 border-amber-700/50 rounded-lg bg-amber-900/30">
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={decrementQuantity}
                    className="px-3 py-2 text-amber-400 hover:text-amber-300"
                  >
                    <Minus size={16} />
                  </motion.button>
                  <span className="px-4 py-2 text-amber-400 font-pirate">{quantity}</span>
                  <motion.button 
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={incrementQuantity}
                    className="px-3 py-2 text-amber-400 hover:text-amber-300"
                  >
                    <Plus size={16} />
                  </motion.button>
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 20px rgba(245, 158, 11, 0.3)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  onClick={handleAddToCart}
                  disabled={isAddingToCart}
                  className={`flex-1 bg-gradient-to-r ${isAddingToCart ? 'from-amber-700 to-amber-800' : 'from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600'} text-amber-100 font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 font-pirate border-2 border-amber-500/50 flex items-center justify-center`}
                >
                  <ShoppingCart size={20} className={`mr-2 ${isAddingToCart ? 'animate-bounce' : ''}`} />
                  {isAddingToCart ? 'Adding to Chest...' : 'Add to Treasure Chest'}
                </motion.button>
                <motion.button 
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 border-2 border-amber-700/50 text-amber-400 hover:text-amber-300 rounded-lg bg-amber-900/30"
                >
                  <Heart size={20} />
                </motion.button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-between border-t border-amber-700/50 pt-6">
              <div className="flex items-center text-lg text-amber-300/70 font-pirate-script">
                <Truck size={18} className="mr-2 text-amber-400" />
                Free Shipping by Royal Fleet
              </div>
              <div className="flex items-center text-lg text-amber-300/70 font-pirate-script">
                <RotateCcw size={18} className="mr-2 text-amber-400" />
                30-Day Safe Harbor Returns
              </div>
              <div className="flex items-center text-lg text-amber-300/70 font-pirate-script">
                <Shield size={18} className="mr-2 text-amber-400" />
                {product.warranty}
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-amber-400 mb-6 font-pirate">Treasure Specifications</h2>
          <div className="bg-amber-900/20 rounded-xl p-6 border-2 border-amber-700/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value], index) => (
                <div key={index} className="flex py-3 border-b border-amber-700/50 last:border-b-0">
                  <div className="text-amber-400 font-medium w-40 font-pirate">{key}</div>
                  <div className="text-amber-300/70 font-pirate-script text-lg">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-amber-400 mb-6 font-pirate">More Treasures to Discover</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <motion.div
                key={relatedProduct.id}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 0 20px rgba(245, 158, 11, 0.2)"
                }}
                className="bg-amber-900/20 rounded-xl overflow-hidden border-2 border-amber-700/50 hover:border-amber-500/70 transition-all duration-300 cursor-pointer"
                onClick={() => navigate(`/product/${relatedProduct.id}`)}
              >
                <div className="h-48 bg-amber-900/30 overflow-hidden border-b-2 border-amber-700/50">
                  <img 
                    src={relatedProduct.images[0]} 
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-lg text-amber-300/70 mb-1 font-pirate-script">{relatedProduct.category}</p>
                  <h3 className="font-bold text-amber-400 mb-2 font-pirate">{relatedProduct.name}</h3>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        fill={i < Math.floor(relatedProduct.rating) ? "#ffd700" : "none"} 
                        className="text-amber-400" 
                      />
                    ))}
                  </div>
                  <div className="text-lg font-bold text-amber-400 font-pirate">${relatedProduct.price.toFixed(2)} gold coins</div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductDetails;