// src/components/layout/Footer.jsx

import React from 'react';

const Footer = () => {
  return (
    // Changed bg-gray-900 to bg-gray-800 for a slightly softer dark mode look
    <footer className="bg-gray-800 border-t border-gray-700 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Column 1: Company Info & Social */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Ganga Mobiles</h3>
            <p className="text-sm text-gray-400">
              Chennai's trusted expert for mobile repair, certified parts, and quality refurbished phone sales.
            </p>
            <div className="mt-4 text-gray-500 space-x-3">
              {/* Placeholder Social Icons - Use actual SVG icons here */}
              <a href="#" className="hover:text-white transition">[F]</a>
              <a href="#" className="hover:text-white transition">[T]</a>
              <a href="#" className="hover:text-white transition">[I]</a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="text-gray-400 hover:text-teal-400 transition">Home</a></li>
              <li><a href="/about" className="text-gray-400 hover:text-teal-400 transition">About Us</a></li>
              <li><a href="/products" className="text-gray-400 hover:text-teal-400 transition">Shop Phones & Parts</a></li>
              <li><a href="/contact" className="text-gray-400 hover:text-teal-400 transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 3: Services & Repair */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Repair Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/quote" className="text-gray-400 hover:text-teal-400 transition">Start A Repair Quote</a></li>
              <li><a href="/services#screen" className="text-gray-400 hover:text-teal-400 transition">Screen & Display Fix</a></li>
              <li><a href="/services#battery" className="text-gray-400 hover:text-teal-400 transition">Battery Replacement</a></li>
              <li><a href="/services#chip-level" className="text-gray-400 hover:text-teal-400 transition">Chip-Level Repair</a></li>
            </ul>
          </div>

          {/* 🌟 Column 4: BRANCH LOCATIONS (NEW CONTENT) 🌟 */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Chennai Branches</h3>
            <ul className="space-y-4 text-sm">
              
              {/* Location 1: Pallikaranai */}
              <li>
                <p className="text-teal-400 font-medium mb-1">Pallikaranai</p>
                <p className="text-gray-400">
                  No. 2/21, Velachery Rd, <br/>
                  Opposite Balaji Dental College.
                </p>
                <a href="tel:+919176100072" className="text-gray-500 hover:text-white transition mt-1 inline-block">
                  Call: +91 91761 00072
                </a>
              </li>

              {/* Location 2: Sithalapakkam */}
              <li>
                <p className="text-teal-400 font-medium mb-1">Sithalapakkam</p>
                <p className="text-gray-400">
                  No. 182, Mambakkam Main Road.
                </p>
                {/* Note: Added a placeholder for the contact number since it was not specified */}
                <span className="text-gray-500 mt-1 inline-block">Call: Ask on Contact Page</span>
              </li>
              
              {/* Other Locations Link */}
              <li className="pt-2">
                 <a href="/locations" className="text-blue-400 hover:text-teal-400 font-medium transition">
                    View All 5+ Branch Locations →
                </a>
              </li>
              
            </ul>
          </div>
        </div>
        
        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Ganga Mobiles. All rights reserved. | <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;