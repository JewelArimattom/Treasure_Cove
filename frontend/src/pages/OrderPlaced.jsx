import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLocation, useNavigate } from 'react-router-dom';
import { Ship, Check, Compass, Map, Package, Home } from 'lucide-react';
import { toast } from 'react-hot-toast';

const OrderPlaced = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const order = location.state?.order;

  useEffect(() => {
    if (!order) {
      toast.error("Arr! No order details found!", {
        style: {
          background: '#1e293b',
          color: '#fbbf24',
          fontFamily: '"Pirata One", cursive'
        }
      });
      navigate('/');
    }

    // Redirect to home after 10 seconds
    const timer = setTimeout(() => {
      navigate('/');
      toast.success("Welcome back to the ship, matey!", {
        icon: '⚓',
        style: {
          background: '#1e293b',
          color: '#fbbf24',
          fontFamily: '"Pirata One", cursive'
        }
      });
    }, 10000);

    return () => clearTimeout(timer);
  }, [order, navigate]);

  if (!order) return null;

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto"
        >
          {/* Success Animation */}
          <div className="text-center mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.2, 1] }}
              transition={{ duration: 0.5 }}
              className="w-24 h-24 bg-green-500/20 rounded-full mx-auto flex items-center justify-center mb-4 border-4 border-green-500"
            >
              <Check className="w-12 h-12 text-green-500" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-bold text-amber-400 mb-2 font-pirate"
            >
              Treasure Secured!
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-amber-300/70 text-lg font-pirate-script"
            >
              Yer booty will be delivered to yer port soon!
            </motion.p>
          </div>

          {/* Order Details */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-amber-900/20 p-6 rounded-xl border-2 border-amber-700/50 backdrop-blur-sm mb-6"
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-amber-400 font-pirate flex items-center">
                <Map className="mr-2" />
                Order Details
              </h2>
              <span className="text-amber-300 font-pirate">#{order.orderNumber}</span>
            </div>
            
            <div className="space-y-4">
              <div className="flex items-center text-amber-300">
                <Compass className="mr-2" />
                <div>
                  <p className="font-pirate">Shipping to:</p>
                  <p className="text-amber-300/70 font-pirate-script">
                    {order.shippingDetails.firstName} {order.shippingDetails.lastName}
                  </p>
                  <p className="text-amber-300/70 font-pirate-script">
                    {order.shippingDetails.address}
                  </p>
                  <p className="text-amber-300/70 font-pirate-script">
                    {order.shippingDetails.city}, {order.shippingDetails.state} {order.shippingDetails.zipCode}
                  </p>
                </div>
              </div>

              <div className="flex items-center text-amber-300">
                <Package className="mr-2" />
                <div>
                  <p className="font-pirate">Total Bounty:</p>
                  <p className="text-xl font-bold text-amber-400 font-pirate">
                    ${order.orderTotal.toFixed(2)} gold coins
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(245, 158, 11, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate('/')}
              className="flex-1 bg-gradient-to-r from-amber-600 to-amber-700 text-amber-100 font-bold py-3 px-8 rounded-xl text-lg transition-all duration-300 hover:from-amber-500 hover:to-amber-600 font-pirate flex items-center justify-center"
            >
              <Home className="mr-2" />
              Back to Ship
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(245, 158, 11, 0.3)" }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                window.location.href = `mailto:${order.shippingDetails.email}?subject=Order%20${order.orderNumber}%20Confirmation`;
              }}
              className="flex-1 border-2 border-amber-700/50 text-amber-400 hover:text-amber-300 font-bold py-3 px-8 rounded-xl text-lg transition-all duration-300 font-pirate flex items-center justify-center"
            >
              <Ship className="mr-2" />
              Contact Support
            </motion.button>
          </motion.div>

          {/* Redirect Notice */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="text-center mt-8 text-amber-300/70 font-pirate-script"
          >
            Ye'll be returned to the ship's deck in 10 seconds...
          </motion.p>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderPlaced;
