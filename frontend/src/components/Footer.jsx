import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-slate-900/80 backdrop-blur-md text-gray-400">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Copyright Info */}
          <p className="text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} ElectroHub Inc. All rights reserved.
          </p>

          {/* Footer Links */}
          <div className="flex space-x-6">
            <NavLink to="/privacy-policy" className="text-sm hover:text-cyan-400 transition-colors duration-300">
              Privacy Policy
            </NavLink>
            <NavLink to="/terms-of-service" className="text-sm hover:text-cyan-400 transition-colors duration-300">
              Terms of Service
            </NavLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

