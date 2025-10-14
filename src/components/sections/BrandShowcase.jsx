// src/components/sections/BrandShowcase.jsx

import React from 'react';
import { availableBrands } from "../../data/products"; 

// =========================================================
// 1. Map Brand Name (String from data) to IMAGE URL STRING (from /public folder)
// =========================================================
const brandLogos = {
  // NOTE: Assuming your images are in the /public/assets/images directory
  'Apple': '/assets/images/apple.png', 
  'Samsung': '/assets/images/samsung.png',
  'Xiaomi': '/assets/images/mi.png',
  'OnePlus': '/assets/images/oneplus.png',
  'Google': '/assets/images/google.png',
  'Vivo': '/assets/images/vivo.png',
  // Ensure you add paths for all brands listed in availableBrands
};

const BrandShowcase = () => {
  
  const brandsToDisplay = availableBrands 
    ? availableBrands.filter(brand => brand && brand !== 'Universal' && brandLogos[brand])
    : [];

  return (
    <section className="py-16 sm:py-20 bg-gray-50"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title Updated to Deep Blue */}
        <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1f2937] mb-3"> 
          Shop By Brand 🛠️
        </h2>
        <p className="text-base text-gray-600 mb-12 max-w-2xl mx-auto"> 
          Explore devices, genuine **parts**, and accessories from all major global manufacturers, ready for service.
        </p>

        {brandsToDisplay.length > 0 ? (
          <div className="flex justify-center">
            <div 
              className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 sm:gap-8"
            >
              {brandsToDisplay.map((brand, index) => (
                <a 
                  key={brand} 
                  href={`/products?brand=${brand}`} 
                  data-aos="fade-up"
                  data-aos-delay={index * 50} 
                  data-aos-duration="600"
                  // Hover Effect: Increased scale and border color changed to Deep Blue
                  className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-500 ease-in-out group border-2 border-transparent hover:border-blue-800 transform hover:scale-105 overflow-hidden cursor-pointer"
                >
                  <div className="flex flex-col items-center justify-start h-full w-full">
                    
                    {/* Image Container */}
                    <div className="w-full h-24 sm:h-28 flex items-center justify-center p-4 bg-gray-50/50 group-hover:bg-gray-100 transition duration-300">
                        <img 
                            src={brandLogos[brand]} 
                            alt={`${brand} Logo`} 
                            className="max-w-[70%] max-h-full object-contain transition duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-105" 
                        />
                    </div>
                    
                    {/* Brand Name Text - Hover text color changed to Deep Blue */}
                    <h3 className="text-sm sm:text-base font-bold text-gray-700 group-hover:text-blue-800 transition tracking-wide text-center py-3 px-2 w-full border-t border-gray-100">
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