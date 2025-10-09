// src/components/sections/CtaBanner.jsx (This replaces your old CallToAction.jsx content)

import React from 'react';

const CtaBanner = () => {
  return (
    <section className="py-16 sm:py-24 bg-blue-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Heading */}
        <h2 
          className="text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight"
          data-aos="fade-down" 
          data-aos-duration="600"
        >
          Mobile Broken? Found Your Next Phone?
        </h2>
        
        {/* Subtitle - Localized for Chennai */}
        <p 
          className="text-lg text-blue-200 mb-10 max-w-3xl mx-auto"
          data-aos="fade-down" 
          data-aos-delay="200" 
          data-aos-duration="600"
        >
          Stop scrolling and get instant help from **Chennai's** most trusted mobile experts.
        </p>

        {/* Action Buttons */}
        <div 
          className="flex flex-col sm:flex-row justify-center gap-4"
          data-aos="fade-up" 
          data-aos-delay="400" 
          data-aos-duration="600"
        >
          
          {/* CTA 1: Repair Lead (Primary Action) */}
          <a 
            href="/repair-quote" // Ensure this link leads to your quote form
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-lg shadow-xl text-blue-800 bg-teal-400 hover:bg-teal-300 transform hover:scale-105 transition duration-300 uppercase tracking-wider"
          >
            Get a Repair Quote Now
          </a>
          
          {/* CTA 2: Sales/Inventory (Secondary Action) */}
          <a 
            href="/products?category=Mobiles%20for%20Sale" // Ensure this link leads to your Mobile Sales inventory
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3 border-2 border-white text-base font-bold rounded-lg shadow-md text-white hover:bg-white hover:text-blue-800 transform hover:scale-105 transition duration-300 uppercase tracking-wider"
          >
            Browse Refurbished Phones
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;