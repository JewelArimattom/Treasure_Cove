import React from 'react';
import { NavLink } from 'react-router-dom';
import { Ship, Anchor, Skull } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#0a192f]/90 backdrop-blur-md text-amber-400 border-t border-amber-700/30">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright Info with Pirate Theme */}
          <div className="flex items-center text-sm text-center md:text-left mb-4 md:mb-0 font-pirate">
            <Skull className="mr-2" size={16} />
            <span>&copy; {new Date().getFullYear()} Treasure Cove. All booty reserved.</span>
          </div>

          {/* Footer Links */}
          <div className="flex space-x-6 font-pirate">
            <NavLink 
              to="/privacy-policy" 
              className="text-sm hover:text-amber-200 transition-colors duration-300 flex items-center"
            >
              <Anchor className="mr-1" size={14} />
              Pirate's Code
            </NavLink>
            <NavLink 
              to="/terms-of-service" 
              className="text-sm hover:text-amber-200 transition-colors duration-300 flex items-center"
            >
              <Ship className="mr-1" size={14} />
              Ship's Articles
            </NavLink>
          </div>
        </div>
        
        {/* Decorative Element */}
        <div className="text-center mt-4">
          <div className="inline-flex items-center text-amber-500/60 text-xs font-pirate-script">
            <span className="mr-2">⚓</span>
            Where X marks the spot for quality treasures
            <span className="ml-2">⚓</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;