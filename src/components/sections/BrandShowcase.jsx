// src/components/sections/BrandShowcase.jsx

import React from 'react';
import { availableBrands } from "../../data/products"; 

// =========================================================
// ❌ REMOVED ALL EXPLICIT IMAGE IMPORTS (e.g., import AppleLogo from '...')
//    Vite's Rollup plugin fails when these imports try to resolve the absolute URL paths.
// =========================================================

// =========================================================
// 1. Map Brand Name (String from data) to IMAGE URL STRING (from /public folder)
// =========================================================
const brandLogos = {
  // NOTE: Assuming your images are now in /public/assets/images
  // Ensure the casing here EXACTLY matches the file name on the disk (e.g., 'Apple.png' vs 'apple.png')
  'Apple': '/assets/images/apple.png', 
  'Samsung': '/assets/images/samsung.png',
  'Xiaomi': '/assets/images/mi.png',
  'OnePlus': '/assets/images/oneplus.png',
  'Google': '/assets/images/google.png',
  'Vivo': '/assets/images/vivo.png',
  // Add paths for any other brands here
};

const BrandShowcase = () => {
  
  const brandsToDisplay = availableBrands 
    ? availableBrands.filter(brand => brand && brand !== 'Universal' && brandLogos[brand])
    : [];

  return (
    <section className="py-12 sm:py-16 bg-gray-50"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-4">
          Shop By Brand
        </h2>
        <p className="text-base text-gray-600 mb-10 max-w-2xl mx-auto">
          Explore mobiles, parts, and accessories from all major global manufacturers.
        </p>

        {brandsToDisplay.length > 0 ? (
          <div className="flex justify-center">
            <div 
              className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4 sm:gap-6"
            >
              {brandsToDisplay.map((brand, index) => (
                <a 
                  key={brand} 
                  href={`/products?brand=${brand}`} 
                  data-aos="fade-up"
                  data-aos-delay={index * 50} 
                  data-aos-duration="600"
                  className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-300 ease-in-out group border border-gray-100 hover:border-blue-300 transform group-hover:scale-[1.05] overflow-hidden"
                >
                  <div className="flex flex-col items-center justify-start h-full w-full">
                      
                      <img 
                          // ✅ CRITICAL FIX: Use the URL string from the brandLogos map
                          src={brandLogos[brand]} 
                          alt={`${brand} Logo`} 
                          className="w-full h-24 sm:h-28 object-fill transition duration-300 mb-3" 
                          style={{borderTopRightRadius:'10px',borderTopLeftRadius:'10px'}} 
                      />
                      
                      <h3 className="text-sm sm:text-base font-bold text-gray-800 group-hover:text-blue-600 transition tracking-wide text-center pb-2 px-2 w-full">
                          {brand}
                      </h3>
                  </div>
                </a>
              ))}
            </div>
          </div>
        ) : (
          <div className="py-10 text-center bg-white rounded-lg shadow-md border border-gray-200">
            <p className="text-xl text-red-500 font-semibold">
              No major brands are currently available to display.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default BrandShowcase;