import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  CreditCard, 
  Truck, 
  Shield, 
  Map, 
  Anchor, 
  Compass, 
  Ship,
  ArrowLeft,
  ShoppingBag,
  Coins 
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const CheckOut = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  // Mock cart items (replace with actual cart context)
  const cartItems = [
    {
      id: 1,
      name: "UltraVision 4K Smart TV",
      price: 899.99,
      quantity: 1,
      image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=600"
    },
    {
      id: 2,
      name: "ProGamer Wireless Headset",
      price: 129.99,
      quantity: 2,
      image: "https://images.unsplash.com/photo-1585294873684-0e6a17cfc7b5?w=600"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  // Calculate totals
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const shipping = 9.99;
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  return (
    <div className="min-h-screen bg-[#0a192f] text-amber-100 py-12">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center text-amber-400 hover:text-amber-300 transition-colors font-pirate"
          >
            <ArrowLeft className="mr-2" size={20} />
            Back to Ship
          </button>
          <h1 className="text-3xl font-bold text-amber-400 font-pirate flex items-center">
            <Anchor className="mr-2" />
            Secure Your Treasure
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-amber-900/20 p-6 rounded-xl border-2 border-amber-700/50"
            >
              <h2 className="text-xl font-bold text-amber-400 mb-4 font-pirate flex items-center">
                <ShoppingBag className="mr-2" size={20} />
                Treasure Summary
              </h2>
              
              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex items-center space-x-4">
                    <img 
                      src={item.image} 
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover border border-amber-700/50"
                    />
                    <div className="flex-1">
                      <h3 className="text-amber-200 font-pirate">{item.name}</h3>
                      <p className="text-amber-400/70 text-sm">Quantity: {item.quantity}</p>
                    </div>
                    <p className="text-amber-300 font-bold font-pirate">
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-2 border-t border-amber-700/50 pt-4">
                <div className="flex justify-between text-amber-300">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-amber-300">
                  <span>Shipping</span>
                  <span>${shipping.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-amber-300">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-lg font-bold text-amber-400 pt-2 border-t border-amber-700/50">
                  <span className="font-pirate">Total Bounty</span>
                  <span className="font-pirate flex items-center">
                    <Coins className="mr-1" size={20} />
                    ${total.toFixed(2)}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Shipping Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-amber-900/20 p-6 rounded-xl border-2 border-amber-700/50 mt-6"
            >
              <h2 className="text-xl font-bold text-amber-400 mb-4 font-pirate">
                Shipping Information
              </h2>
              <div className="space-y-4">
                <div className="flex items-center text-amber-300">
                  <Truck className="mr-2" size={20} />
                  <span>Free shipping on orders over $50</span>
                </div>
                <div className="flex items-center text-amber-300">
                  <Shield className="mr-2" size={20} />
                  <span>Secure checkout & Buyer Protection</span>
                </div>
                <div className="flex items-center text-amber-300">
                  <Ship className="mr-2" size={20} />
                  <span>Express delivery available</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Checkout Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Contact Information */}
              <div className="bg-amber-900/20 p-6 rounded-xl border-2 border-amber-700/50">
                <h2 className="text-xl font-bold text-amber-400 mb-4 font-pirate flex items-center">
                  <Map className="mr-2" />
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full bg-amber-900/30 border-2 border-amber-700/50 rounded-lg p-3 text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-amber-900/20 p-6 rounded-xl border-2 border-amber-700/50">
                <h2 className="text-xl font-bold text-amber-400 mb-4 font-pirate flex items-center">
                  <Compass className="mr-2" />
                  Shipping Address
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="w-full bg-amber-900/30 border-2 border-amber-700/50 rounded-lg p-3 text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500"
                  />
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="w-full bg-amber-900/30 border-2 border-amber-700/50 rounded-lg p-3 text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500"
                  />
                  <input
                    type="text"
                    name="address"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleInputChange}
                    className="w-full md:col-span-2 bg-amber-900/30 border-2 border-amber-700/50 rounded-lg p-3 text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500"
                  />
                  <input
                    type="text"
                    name="city"
                    placeholder="City"
                    value={formData.city}
                    onChange={handleInputChange}
                    className="w-full bg-amber-900/30 border-2 border-amber-700/50 rounded-lg p-3 text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500"
                  />
                  <input
                    type="text"
                    name="state"
                    placeholder="State"
                    value={formData.state}
                    onChange={handleInputChange}
                    className="w-full bg-amber-900/30 border-2 border-amber-700/50 rounded-lg p-3 text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500"
                  />
                  <input
                    type="text"
                    name="zipCode"
                    placeholder="ZIP Code"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                    className="w-full bg-amber-900/30 border-2 border-amber-700/50 rounded-lg p-3 text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-amber-900/20 p-6 rounded-xl border-2 border-amber-700/50">
                <h2 className="text-xl font-bold text-amber-400 mb-4 font-pirate flex items-center">
                  <CreditCard className="mr-2" />
                  Payment Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="cardNumber"
                    placeholder="Card Number"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    className="w-full md:col-span-2 bg-amber-900/30 border-2 border-amber-700/50 rounded-lg p-3 text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500"
                  />
                  <input
                    type="text"
                    name="expiryDate"
                    placeholder="MM/YY"
                    value={formData.expiryDate}
                    onChange={handleInputChange}
                    className="w-full bg-amber-900/30 border-2 border-amber-700/50 rounded-lg p-3 text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500"
                  />
                  <input
                    type="text"
                    name="cvv"
                    placeholder="CVV"
                    value={formData.cvv}
                    onChange={handleInputChange}
                    className="w-full bg-amber-900/30 border-2 border-amber-700/50 rounded-lg p-3 text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-amber-100 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 hover:from-amber-500 hover:to-amber-600 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 font-pirate flex items-center justify-center"
              >
                <Anchor className="mr-2" size={20} />
                Claim Your Treasure - ${total.toFixed(2)}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
