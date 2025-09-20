import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';

// Decrypted Text Component (Included directly in this file to fix the import error)
import DecryptedText from './DecryptedText';



// Main Contact Page Component
const Contact = () => {
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

  const contactInfo = [
    {
      icon: <Phone size={24} className="text-cyan-400" />,
      title: 'Phone',
      detail: '+1 (123) 456-7890',
      href: 'tel:+11234567890',
    },
    {
      icon: <Mail size={24} className="text-fuchsia-500" />,
      title: 'Email',
      detail: 'hello@ElectroHub.com',
      href: 'mailto:hello@.ElectroHubcom',
    },
    {
      icon: <MapPin size={24} className="text-purple-500" />,
      title: 'Location',
      detail: 'Kerala, India',
    },
  ];

  return (
    <div className="bg-slate-900 text-gray-100 min-h-screen">
      <div className="container mx-auto px-6 py-20">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Page Title with Decrypted Text Effect */}
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold text-center text-white leading-tight mb-4"
          >
            <DecryptedText text="Get In" />{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-fuchsia-500">
              <DecryptedText text="Touch" />
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-400 text-center max-w-2xl mx-auto mb-16"
          >
           <DecryptedText text="Contact us for any inquiries or to learn more about our services." />
          </motion.p>

          {/* Contact Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 text-center flex flex-col items-center shadow-lg hover:shadow-cyan-500/10 transition-shadow duration-300"
              >
                <div className="p-4 bg-slate-900 rounded-full mb-6 inline-block">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                {item.href ? (
                   <a href={item.href} className="text-gray-300 hover:text-cyan-400 transition-colors">
                     {item.detail}
                   </a>
                ) : (
                  <p className="text-gray-300">{item.detail}</p>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;

