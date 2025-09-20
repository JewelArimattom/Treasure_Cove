import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ShoppingCart, Heart, Star, Truck, Shield, RotateCcw, Plus, Minus } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';
import { getProductById, getRelatedProducts } from '../data/products';

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  // Get product data from static data
  const product = getProductById(id);
  const relatedProducts = getRelatedProducts(id);

  // Handle case where product is not found
  if (!product) {
    return (
      <div className="min-h-screen bg-slate-900 text-gray-100 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Product Not Found</h1>
          <p className="text-gray-400 mb-6">The product you're looking for doesn't exist.</p>
          <button 
            onClick={() => navigate('/')}
            className="bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 px-6 rounded-lg"
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  const addToCart = () => {
    // In a real app, this would dispatch to a cart context or Redux
    console.log(`Added ${quantity} of ${product.name} to cart`);
    // Redirect to the cart page
    navigate('/cart');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      {/* Header */}
      <header className="sticky top-0 z-20 bg-slate-900/80 backdrop-blur-md border-b border-slate-700">
        <div className="container mx-auto px-6 py-4 flex items-center">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-gray-300 hover:text-white mr-4"
          >
            <ArrowLeft size={20} className="mr-2" /> Back
          </button>
          <h1 className="text-xl font-semibold">Product Details</h1>
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
              <span className="text-cyan-400 text-sm font-medium">{product.category}</span>
              <h1 className="text-3xl font-bold text-white mt-2 mb-3">{product.name}</h1>
              
              <div className="flex items-center mb-4">
                <div className="flex items-center mr-4">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={18} 
                      fill={i < Math.floor(product.rating) ? "#ffc107" : "none"} 
                      className="text-yellow-400" 
                    />
                  ))}
                  <span className="text-sm text-gray-400 ml-2">{product.rating} ({product.reviews} reviews)</span>
                </div>
              </div>

              <div className="text-3xl font-bold text-white mb-6">${product.price.toFixed(2)}</div>

              <p className="text-gray-300 mb-8">{product.description}</p>
            </div>

            {/* Key Features */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 mr-3"></div>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quantity and Add to Cart */}
            <div className="mb-8">
              <div className="flex items-center mb-6">
                <span className="text-gray-300 mr-4">Quantity:</span>
                <div className="flex items-center border border-slate-700 rounded-lg">
                  <button 
                    onClick={decrementQuantity}
                    className="px-3 py-2 text-gray-300 hover:text-white"
                  >
                    <Minus size={16} />
                  </button>
                  <span className="px-4 py-2 text-white">{quantity}</span>
                  <button 
                    onClick={incrementQuantity}
                    className="px-3 py-2 text-gray-300 hover:text-white"
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              <div className="flex space-x-4">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={addToCart}
                  className="flex-1 bg-cyan-600 hover:bg-cyan-500 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center"
                >
                  <ShoppingCart size={20} className="mr-2" />
                  Add to Cart
                </motion.button>
                <button className="p-3 border border-slate-700 text-gray-300 hover:text-white rounded-lg">
                  <Heart size={20} />
                </button>
              </div>
            </div>

            {/* Trust Badges */}
            <div className="flex items-center justify-between border-t border-slate-700 pt-6">
              <div className="flex items-center text-sm text-gray-400">
                <Truck size={18} className="mr-2" />
                Free shipping
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <RotateCcw size={18} className="mr-2" />
                30-day returns
              </div>
              <div className="flex items-center text-sm text-gray-400">
                <Shield size={18} className="mr-2" />
                {product.warranty}
              </div>
            </div>
          </div>
        </section>

        {/* Specifications */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">Specifications</h2>
          <div className="bg-slate-800/50 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value], index) => (
                <div key={index} className="flex py-3 border-b border-slate-700 last:border-b-0">
                  <div className="text-gray-400 font-medium w-40">{key}</div>
                  <div className="text-gray-300">{value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Products */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6">You might also like</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <motion.div
                key={relatedProduct.id}
                whileHover={{ y: -5 }}
                className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700 hover:border-cyan-500 transition-colors cursor-pointer"
                onClick={() => navigate(`/product/${relatedProduct.id}`)}
              >
                <div className="h-48 bg-slate-800 overflow-hidden">
                  <img 
                    src={relatedProduct.images[0]} 
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-4">
                  <p className="text-sm text-cyan-400 mb-1">{relatedProduct.category}</p>
                  <h3 className="font-semibold text-white mb-2">{relatedProduct.name}</h3>
                  <div className="flex items-center mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={14} 
                        fill={i < Math.floor(relatedProduct.rating) ? "#ffc107" : "none"} 
                        className="text-yellow-400" 
                      />
                    ))}
                  </div>
                  <div className="text-lg font-bold text-white">${relatedProduct.price.toFixed(2)}</div>
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