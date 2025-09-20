import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart, Ship, Map, Anchor, MessageCircle, Coins } from 'lucide-react';
import { useCart } from '../context/CartContext';

const NavBar = () => {
  const navigate = useNavigate();
  const { totalItems } = useCart();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 left-0 right-0 z-50 transition-colors duration-300 bg-[#0a192f]/90 backdrop-blur-md border-b border-amber-700/30"
      style={{cursor: 'url("/images/ship-wheel-cursor.svg"), pointer'}}
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold tracking-wider text-amber-400 font-pirate flex items-center">
          <Ship className="mr-2" size={28} />
          Treasure Cove
        </NavLink>

        {/* Desktop Navigation Links */}
        <nav className='hidden sm:flex gap-8 text-amber-300 text-sm font-pirate'>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors duration-300 flex items-center ${isActive ? 'text-amber-400' : 'hover:text-amber-200'}`
            }
          >
            <Anchor className="mr-1" size={16} />
            HOME PORT
          </NavLink>
          
          
        </nav>

        {/* Cart Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/cart')}
          className="relative p-2 text-amber-400 hover:text-amber-200 transition-colors duration-300 font-pirate flex items-center"
        >
          <ShoppingCart size={24} />
          {totalItems > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 bg-red-600 text-amber-100 text-xs rounded-full h-5 w-5 flex items-center justify-center border border-amber-400"
            >
              {totalItems}
            </motion.span>
          )}
          <span className="ml-1 hidden sm:inline">BOOTY</span>
        </motion.button>
      </div>
    </motion.header>
  );
}

export default NavBar;