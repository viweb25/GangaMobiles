import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const navItems = [
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'Locations', path: '/locations' },
    { name: 'Get Quote', path: '/quote', style: 'text-teal-400 font-bold' },
    { name: 'About Us', path: '/about' },
  ];

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-gray-800 shadow-lg sticky top-0 z-50 border-b border-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex justify-between items-center">
        {/* Logo/Site Title */}
        <div className="flex-shrink-0">
          <NavLink to="/" className="text-2xl font-extrabold text-teal-400 tracking-wide sm:text-3xl">
            GANGA MOBILES
          </NavLink>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 items-center">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                  item.style || ''
                } ${
                  isActive
                    ? 'bg-gray-700 text-teal-400 border-b-2 border-teal-400'
                    : 'text-gray-200 hover:bg-gray-700 hover:text-teal-400'
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            className="bg-teal-500 text-white hover:bg-teal-600 px-4 py-2 rounded-full text-sm font-semibold shadow-md transition duration-200 transform hover:scale-105"
          >
            Contact Us
          </NavLink>
        </nav>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-gray-200 hover:text-teal-400 focus:outline-none"
          >
            <svg
              className="w-6 h-6"
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
        <div className="md:hidden bg-gray-800 border-t border-gray-600">
          <div className="px-4 py-3 flex flex-col space-y-3">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `px-3 py-2 rounded-md text-sm font-medium transition duration-200 ${
                    item.style || ''
                  } ${
                    isActive
                      ? 'bg-gray-700 text-teal-400'
                      : 'text-gray-200 hover:bg-gray-700 hover:text-teal-400'
                  }`
                }
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className="bg-teal-500 text-white hover:bg-teal-600 px-4 py-2 rounded-full text-sm font-semibold text-center transition duration-200"
              onClick={() => setIsMobileMenuOpen(false)}
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