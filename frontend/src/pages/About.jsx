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
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">ElectroHub
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
                About ElectroHub: Powering Your World
Welcome to ElectroHub, your ultimate destination for the latest and greatest in electronics. We're more than just a store; we're a community of tech enthusiasts, innovators, and early adopters dedicated to bringing you the future, today.

Our Mission
Our mission is simple: to connect you with high-quality, cutting-edge electronics that enhance and simplify your life. In a world that's constantly evolving, we believe that everyone deserves access to technology that is not only powerful and innovative but also reliable and intuitive. From the everyday essentials to the extraordinary gadgets you've only dreamed of, ElectroHub is here to power your world.

The ElectroHub Story
ElectroHub was born from a passion for technology and a desire to create a better electronics shopping experience. Tired of navigating cluttered websites and biased reviews, our founders set out to build a hub—a central place where customers could find expertly curated products, honest advice, and a seamless shopping journey. We started small, with a handful of products and a big vision. Today, we've grown into a trusted source for tech lovers across the country, but our core values remain the same.
              </p>
              
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;

