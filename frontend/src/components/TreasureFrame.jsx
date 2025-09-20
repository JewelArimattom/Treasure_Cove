import React from 'react';
import { motion } from 'framer-motion';

const TreasureFrame = ({ children, className = '' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`relative p-8 rounded-lg ${className}`}
    >
      {/* Treasure chest decorative frame */}
      <div className="absolute inset-0 bg-[#0a192f]/80 rounded-lg backdrop-blur-sm border-2 border-[#234876] shadow-[0_0_15px_rgba(56,128,255,0.3)]"></div>
      
      {/* Coral decorations */}
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
        <div className="w-20 h-12 bg-[url('/images/coral-decoration.svg')] bg-contain bg-no-repeat bg-center"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>

      {/* Glowing edges */}
      <div className="absolute inset-0 rounded-lg bg-gradient-to-b from-[#234876]/20 to-transparent pointer-events-none"></div>
    </motion.div>
  );
};

export default TreasureFrame;