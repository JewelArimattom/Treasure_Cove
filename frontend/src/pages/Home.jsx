import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import PixelBlast from './PixelBlast';

// Main Home Component
export default function Home() {
  return (
    <div className="bg-slate-900 text-gray-100 font-sans antialiased">
      <div className="relative h-screen overflow-hidden">
        {/* Lightning Background */}
        <div className="absolute inset-0 z-0">
          <PixelBlast />
        </div>

        <main className="relative z-10 h-full">
          <HeroSection />
        </main>
      </div>
    </div>
  );
};

// Hero Section Component
const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.4 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="h-full flex items-center justify-center text-center">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-tight mb-4"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
            Next Generation
          </span>
          <br />
          Digital Experience
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
        >
          Elevate your brand with stunning visuals, seamless animations, and an intuitive user interface that captivates and engages.
        </motion.p>
        <motion.div variants={itemVariants}>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgb(45 212 191)" }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300"
          >
            Explore Now <ArrowRight className="inline-block ml-2 -mr-1" size={20} />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

