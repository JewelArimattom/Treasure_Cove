import React from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

const NavBar = () => {
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

        {/* Call to Action Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="hidden md:inline-block px-5 py-2 bg-slate-800 border border-slate-700 rounded-full text-white hover:bg-slate-700 transition-colors duration-300"
        >
          Get Started
        </motion.button>
      </div>
    </motion.header>
  );
}

export default NavBar;

