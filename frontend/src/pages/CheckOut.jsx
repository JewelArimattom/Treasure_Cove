import React, { useState, useEffect } from 'react';
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
  Coins,
  Scroll,
  Skull
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { toast } from 'react-hot-toast';

const CheckOut = () => {
  const navigate = useNavigate();
  const { cartItems, clearCart, subtotal } = useCart();
  const [orderComplete, setOrderComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Calculate additional costs
  const shipping = subtotal > 50 ? 0 : 9.99; // Free shipping over $50
  const tax = subtotal * 0.08;
  const total = subtotal + shipping + tax;

  useEffect(() => {
    if (cartItems.length === 0 && !orderComplete) {
      toast.error("Yer treasure chest be empty!", {
        duration: 3000,
        icon: '🏴‍☠️',
        style: {
          background: '#1e293b',
          color: '#fbbf24',
          fontFamily: '"Pirata One", cursive'
        }
      });
      navigate('/');
    }
  }, [cartItems, navigate, orderComplete]);

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

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    
    // Email validation
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "A valid email be required";
    }
    
    // Required fields validation
    ['firstName', 'lastName', 'address', 'city', 'state', 'zipCode'].forEach(field => {
      if (!formData[field]?.trim()) {
        newErrors[field] = "This field be required";
      }
    });
    
    // Card number validation (16 digits)
    if (!formData.cardNumber || !/^\d{16}$/.test(formData.cardNumber.replace(/\s/g, ''))) {
      newErrors.cardNumber = "A valid 16-digit card number be required";
    }
    
    // Expiry date validation (MM/YY format)
    if (!formData.expiryDate || !/^(0[1-9]|1[0-2])\/([0-9]{2})$/.test(formData.expiryDate)) {
      newErrors.expiryDate = "Valid expiry date (MM/YY) be required";
    }
    
    // CVV validation (3 or 4 digits)
    if (!formData.cvv || !/^\d{3,4}$/.test(formData.cvv)) {
      newErrors.cvv = "A valid CVV be required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    let formattedValue = value;

    // Format card number with spaces every 4 digits
    if (name === 'cardNumber') {
      formattedValue = value.replace(/\s/g, '')
                           .replace(/(\d{4})/g, '$1 ')
                           .trim();
    }
    // Format expiry date with slash
    else if (name === 'expiryDate') {
      formattedValue = value.replace(/\D/g, '')
                           .replace(/(\d{2})(\d)/, '$1/$2')
                           .slice(0, 5);
    }
    // Format CVV to only allow numbers
    else if (name === 'cvv') {
      formattedValue = value.replace(/\D/g, '').slice(0, 4);
    }

    setFormData(prev => ({
      ...prev,
      [name]: formattedValue
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: undefined
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error("Arr! Check yer form for errors, matey!", {
        style: {
          background: '#1e293b',
          color: '#fbbf24',
          fontFamily: '"Pirata One", cursive'
        }
      });
      return;
    }

    if (cartItems.length === 0) {
      toast.error("Yer treasure chest be empty!", {
        style: {
          background: '#1e293b',
          color: '#fbbf24',
          fontFamily: '"Pirata One", cursive'
        }
      });
      return;
    }

    setIsSubmitting(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Create order object
      const order = {
        items: cartItems,
        shippingDetails: {
          firstName: formData.firstName,
          lastName: formData.lastName,
          email: formData.email,
          address: formData.address,
          city: formData.city,
          state: formData.state,
          zipCode: formData.zipCode
        },
        paymentDetails: {
          cardNumber: formData.cardNumber.slice(-4), // Only store last 4 digits
          expiryDate: formData.expiryDate
        },
        orderTotal: total,
        orderDate: new Date().toISOString(),
        orderNumber: Math.floor(100000 + Math.random() * 900000) // Random 6-digit number
      };

      // Store order in localStorage for history
      const orders = JSON.parse(localStorage.getItem('orders') || '[]');
      orders.push(order);
      localStorage.setItem('orders', JSON.stringify(orders));

      // Clear the cart
      clearCart();
      setOrderComplete(true);
      
      // Show success message
      toast.success(
        <div className="font-pirate text-amber-200">
          <p className="text-lg">Ahoy! Yer treasure has been secured!</p>
          <p className="text-sm">Order confirmation sent to {formData.email}</p>
        </div>,
        { 
          duration: 5000,
          style: {
            background: '#1e293b',
            border: '2px solid #f59e0b',
            fontFamily: '"Pirata One", cursive'
          }
        }
      );

      // Redirect to success page after a short delay
      setTimeout(() => {
        navigate('/order-success', { state: { order } });
      }, 2000);

    } catch (error) {
      console.error('Error placing order:', error);
      toast.error("Arr! There be an error placin' yer order. Try again!", {
        style: {
          background: '#1e293b',
          color: '#fbbf24',
          fontFamily: '"Pirata One", cursive'
        }
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#0a192f] text-amber-100 py-12" style={{cursor: 'url("/images/ship-wheel-cursor.svg"), pointer'}}>
      {/* Background Elements */}
      <div className="fixed inset-0 z-0 opacity-10">
        <img 
          src="https://images.unsplash.com/photo-1564845654222-d437f029c5c4?q=80&w=1171&auto=format&fit=crop" 
          alt="Pirate background" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
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
            <ShoppingBag className="mr-2" />
            Secure Yer Treasure
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-amber-900/20 p-6 rounded-xl border-2 border-amber-700/50 backdrop-blur-sm"
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
                      src={item.images[0]} 
                      alt={item.name}
                      className="w-16 h-16 rounded-lg object-cover border border-amber-700/50"
                    />
                    <div className="flex-1">
                      <h3 className="text-amber-200 font-pirate">{item.name}</h3>
                      <p className="text-amber-400/70 text-sm">Quantity: {item.quantity}</p>
                    </div>
                    <p className="text-amber-300 font-bold font-pirate">
                      <Coins className="inline-block w-4 h-4 mr-1" />
                      {(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="space-y-2 border-t border-amber-700/50 pt-4">
                <div className="flex justify-between text-amber-300">
                  <span>Subtotal</span>
                  <span className="font-pirate">
                    <Coins className="inline-block w-4 h-4 mr-1" />
                    {subtotal.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-amber-300">
                  <span>Shipping</span>
                  <span className="font-pirate">
                    {shipping === 0 ? 'FREE' : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                <div className="flex justify-between text-amber-300">
                  <span>Tax</span>
                  <span className="font-pirate">
                    <Coins className="inline-block w-4 h-4 mr-1" />
                    {tax.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-lg font-bold text-amber-400 pt-2 border-t border-amber-700/50">
                  <span className="font-pirate">Total Bounty</span>
                  <span className="font-pirate flex items-center">
                    <Coins className="mr-1" size={20} />
                    {total.toFixed(2)}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Shipping Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-amber-900/20 p-6 rounded-xl border-2 border-amber-700/50 mt-6 backdrop-blur-sm"
            >
              <h2 className="text-xl font-bold text-amber-400 mb-4 font-pirate flex items-center">
                <Scroll className="mr-2" size={20} />
                Shipping Scroll
              </h2>
              <div className="space-y-4">
                <div className="flex items-center text-amber-300">
                  <Truck className="mr-2" size={20} />
                  <span>Free shipping on orders over 50 gold coins</span>
                </div>
                <div className="flex items-center text-amber-300">
                  <Shield className="mr-2" size={20} />
                  <span>Secure checkout & Buyer Protection</span>
                </div>
                <div className="flex items-center text-amber-300">
                  <Ship className="mr-2" size={20} />
                  <span>Express delivery available</span>
                </div>
                <div className="flex items-center text-amber-300">
                  <Skull className="mr-2" size={20} />
                  <span>No returns on opened rum bottles</span>
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
              <div className="bg-amber-900/20 p-6 rounded-xl border-2 border-amber-700/50 backdrop-blur-sm">
                <h2 className="text-xl font-bold text-amber-400 mb-4 font-pirate flex items-center">
                  <Map className="mr-2" />
                  Contact Information
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="w-full">
                    <input
                      type="email"
                      name="email"
                      placeholder="Message in a Bottle (Email)"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={`w-full bg-amber-900/30 border-2 ${
                        errors.email 
                          ? 'border-red-500 focus:border-red-400' 
                          : 'border-amber-700/50 focus:border-amber-500'
                      } rounded-lg p-3 text-amber-100 placeholder-amber-400/50 focus:outline-none font-pirate-script`}
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-400 text-sm font-pirate-script">{errors.email}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-amber-900/20 p-6 rounded-xl border-2 border-amber-700/50 backdrop-blur-sm">
                <h2 className="text-xl font-bold text-amber-400 mb-4 font-pirate flex items-center">
                  <Compass className="mr-2" />
                  Shipping Coordinates
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Mate's Name"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="w-full bg-amber-900/30 border-2 border-amber-700/50 rounded-lg p-3 text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500 font-pirate-script"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-red-400 text-sm font-pirate-script">{errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Captain's Name"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="w-full bg-amber-900/30 border-2 border-amber-700/50 rounded-lg p-3 text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500 font-pirate-script"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-red-400 text-sm font-pirate-script">{errors.lastName}</p>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <input
                      type="text"
                      name="address"
                      placeholder="Port of Call (Address)"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full bg-amber-900/30 border-2 border-amber-700/50 rounded-lg p-3 text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500 font-pirate-script"
                    />
                    {errors.address && (
                      <p className="mt-1 text-red-400 text-sm font-pirate-script">{errors.address}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="city"
                      placeholder="Island (City)"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full bg-amber-900/30 border-2 border-amber-700/50 rounded-lg p-3 text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500 font-pirate-script"
                    />
                    {errors.city && (
                      <p className="mt-1 text-red-400 text-sm font-pirate-script">{errors.city}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="state"
                      placeholder="Sea (State)"
                      value={formData.state}
                      onChange={handleInputChange}
                      className="w-full bg-amber-900/30 border-2 border-amber-700/50 rounded-lg p-3 text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500 font-pirate-script"
                    />
                    {errors.state && (
                      <p className="mt-1 text-red-400 text-sm font-pirate-script">{errors.state}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="zipCode"
                      placeholder="Treasure Map Grid (ZIP)"
                      value={formData.zipCode}
                      onChange={handleInputChange}
                      className="w-full bg-amber-900/30 border-2 border-amber-700/50 rounded-lg p-3 text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500 font-pirate-script"
                    />
                    {errors.zipCode && (
                      <p className="mt-1 text-red-400 text-sm font-pirate-script">{errors.zipCode}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Payment Information */}
              <div className="bg-amber-900/20 p-6 rounded-xl border-2 border-amber-700/50 backdrop-blur-sm">
                <h2 className="text-xl font-bold text-amber-400 mb-4 font-pirate flex items-center">
                  <CreditCard className="mr-2" />
                  Payment Details
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="md:col-span-2">
                    <input
                      type="text"
                      name="cardNumber"
                      placeholder="Treasure Map Code (Card Number)"
                      value={formData.cardNumber}
                      onChange={handleInputChange}
                      className="w-full bg-amber-900/30 border-2 border-amber-700/50 rounded-lg p-3 text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500 font-pirate-script"
                    />
                    {errors.cardNumber && (
                      <p className="mt-1 text-red-400 text-sm font-pirate-script">{errors.cardNumber}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="expiryDate"
                      placeholder="Voyage Expiry (MM/YY)"
                      value={formData.expiryDate}
                      onChange={handleInputChange}
                      className="w-full bg-amber-900/30 border-2 border-amber-700/50 rounded-lg p-3 text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500 font-pirate-script"
                    />
                    {errors.expiryDate && (
                      <p className="mt-1 text-red-400 text-sm font-pirate-script">{errors.expiryDate}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="text"
                      name="cvv"
                      placeholder="Secret Code (CVV)"
                      value={formData.cvv}
                      onChange={handleInputChange}
                      className="w-full bg-amber-900/30 border-2 border-amber-700/50 rounded-lg p-3 text-amber-100 placeholder-amber-400/50 focus:outline-none focus:border-amber-500 font-pirate-script"
                    />
                    {errors.cvv && (
                      <p className="mt-1 text-red-400 text-sm font-pirate-script">{errors.cvv}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting || cartItems.length === 0}
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                className={`w-full bg-gradient-to-r ${
                  isSubmitting 
                    ? 'from-amber-700 to-amber-800 cursor-not-allowed'
                    : 'from-amber-600 to-amber-700 hover:from-amber-500 hover:to-amber-600'
                } text-amber-100 py-4 px-6 rounded-xl font-bold text-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-50 font-pirate flex items-center justify-center`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-6 h-6 border-t-2 border-r-2 border-amber-300 rounded-full animate-spin mr-2" />
                    Securing Yer Treasure...
                  </>
                ) : (
                  <>
                    <Anchor className="mr-2" size={20} />
                    Claim Yer Treasure - <Coins className="mx-1" size={20} />{total.toFixed(2)}
                  </>
                )}
              </motion.button>
              
              {/* Error Summary */}
              {Object.keys(errors).length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-900/30 border-2 border-red-700/50 rounded-lg backdrop-blur-sm"
                >
                  <p className="text-red-400 font-pirate mb-2">Arr! Fix these issues, matey:</p>
                  <ul className="list-disc list-inside text-red-300 font-pirate-script">
                    {Object.entries(errors).map(([field, error]) => (
                      <li key={field}>{error}</li>
                    ))}
                  </ul>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;