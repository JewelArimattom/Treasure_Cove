import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingCart } from 'lucide-react';
import { useCart } from '../context/CartContext';

const NavBar = () => {
  const navigate = useNavigate();
  const { totalItems } = useCart();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 left-0 right-0 z-50 transition-colors duration-300 bg-black backdrop-blur-md"
    >
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavLink to="/" className="text-2xl font-bold tracking-wider text-white">
          ElectroHub
        </NavLink>

        {/* Desktop Navigation Links */}
        <nav className='hidden sm:flex gap-8 text-gray-300 text-sm'>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}`
            }
          >
            HOME
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}`
            }
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `transition-colors duration-300 ${isActive ? 'text-cyan-400' : 'hover:text-cyan-400'}`
            }
          >
            CONTACT
          </NavLink>
        </nav>

        {/* Cart Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/cart')}
          className="relative p-2 text-gray-300 hover:text-white transition-colors duration-300"
        >
          <ShoppingCart size={24} />
          {totalItems > 0 && (
            <motion.span
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center"
            >
              {totalItems}
            </motion.span>
          )}
        </motion.button>
      </div>
    </motion.header>
  );
}

export default NavBar;

