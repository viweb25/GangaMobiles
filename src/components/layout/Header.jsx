import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
// 1. IMPORT THE LOGO IMAGE
import GMLogo from '../../assets/gmlogo2.png'; 

const Header = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Service', path: '/Services' },
    { name: 'Gadgets', path: '/products' },
    { name: 'About Us', path: '/about' },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header
      className="sticky top-0 z-50 shadow-md bg-white" 
      itemScope
      itemType="https://schema.org/SiteNavigationElement"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        
        {/* Logo/Site Title - NOW INCLUDES THE IMAGE */}
        <div className="flex-shrink-0 flex items-center space-x-2">
          <NavLink
            to="/"
            className="flex items-center space-x-2" // Adjust spacing here if needed
            itemProp="url"
          >
            {/* 2. LOGO IMAGE PLACEMENT */}
            <img 
                src={GMLogo} 
                alt="Ganga Mobiles Logo" 
                className="h-8 sm:h-9 w-auto" // Adjust size as needed
            />
            {/* Text Title for Accessibility/SEO (Optional, but good practice) */}
            <span className="text-2xl font-extrabold text-[#003087] tracking-tight hidden sm:block">
              Ganga Mobiles
            </span>
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-2 items-center font-inter text-sm h-full">
          {/* Regular Navigation Links */}
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `h-full flex items-center px-4 font-medium transition-all duration-300 ${
                  isActive
                    ? 'text-[#003087] border-b-2 border-[#003087]'
                    : 'text-gray-700 hover:text-gray-900'
                }`
              }
              itemProp="url"
            >
              {item.name}
            </NavLink>
          ))}
          
          {/* Featured Contact Us Button (Blue) */}
          <NavLink
            to="/contact"
            className="inline-block bg-[#003087] hover:bg-[#4682B4] text-white font-semibold py-2.5 px-6 rounded text-sm shadow-lg transition-all duration-300 transform hover:scale-105 ml-6" 
            aria-label="Contact Us for repair services"
            itemProp="url"
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-900 hover:text-[#003087] focus:outline-none focus:ring-2 focus:ring-[#003087] rounded-md p-2 transition-colors duration-200"
            aria-label={isMobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMobileMenuOpen}
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-lg border-t border-gray-200">
          <div className="px-4 py-4 flex flex-col space-y-1">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `block px-4 py-2 text-base font-medium transition-all duration-300 rounded-md ${
                    isActive
                      ? 'bg-gray-100 text-[#003087]'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
                itemProp="url"
              >
                {item.name}
              </NavLink>
            ))}
            
            {/* Contact Us Button in Mobile Menu */}
            <NavLink
              to="/contact"
              className="mt-3 block text-center bg-[#003087] hover:bg-[#4682B4] text-white font-semibold py-2.5 px-6 rounded text-base shadow-md transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
              itemProp="url"
            >
              Contact Us
            </NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;