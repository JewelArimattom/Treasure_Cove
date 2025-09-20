import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <div className="bg-slate-900 text-gray-100 min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Page Title */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold text-center text-white leading-tight mb-12"
          >
            About{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
              JEWEL
            </span>
          </motion.h1>

          {/* Content Section */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
            {/* Image */}
            <motion.div variants={itemVariants} className="w-full md:w-1/2">
              <img
                className="w-full h-auto rounded-2xl shadow-lg border border-slate-700 object-cover"
                src="https://i.pinimg.com/736x/eb/5b/e8/eb5be8025b011a8a5b0778ac7def2a5d.jpg"
                alt="Kerala Spices"
              />
            </motion.div>

            {/* Text Content */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col justify-center gap-5 md:w-1/2 text-gray-300"
            >
              <h2 className="text-2xl font-bold text-white">The Essence </h2>
              <p>
                Welcome to JEWEL! We bring you the rich, authentic flavors of Kerala’s finest spices, straight from nature to your kitchen. Nestled in the heart of India's spice capital, we are committed to delivering fresh, pure, and aromatic spices sourced directly from local farmers.
              </p>
              <p>
                With a deep-rooted passion for quality and sustainability, we ensure that every spice we offer is handpicked, sun-dried, and carefully processed to retain its natural essence. From the bold warmth of black pepper to the golden richness of turmeric, our products capture the true spirit of Kerala’s spice heritage.
              </p>
              <p>
                Join us in celebrating the legacy of Kerala’s spices, where tradition meets purity in every pinch.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

