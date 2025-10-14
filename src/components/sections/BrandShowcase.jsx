// src/components/sections/BrandShowcase.jsx

import React from 'react';
import { availableBrands } from "../../data/products"; 

// --- Brand Colors ---
const primaryRed = '#800000'; // Deep Red/Maroon
const hoverAccentRed = '#A52A2A'; // Brighter Maroon for hover effects

// =========================================================
// 1. Import Local Images from src/assets
// NOTE: Ensure your file names (hero1.jpg, hero2.jpg, etc.) match the number of brands.
// I will map the first 6 brands in the data to the 6 imported images.
// =========================================================
import logo1 from '../../assets/hero6.jpg'; // Assuming these files exist
import logo2 from '../../assets/hero5.jpg';
import logo3 from '../../assets/hero4.jpg';
import logo4 from '../../assets/hero3.jpg';
import logo5 from '../../assets/hero2.jpg';
import logo6 from '../../assets/hero1.jpg';

const BrandShowcase = () => {
  // Use the brands listed in the data file for mapping
  const brandsFromData = availableBrands || []; 

  // Mapping the first 6 imported logos to the first 6 major brands in the data
  // NOTE: This requires the order of availableBrands to be consistent (e.g., Apple is first)
  const logoMap = {};
  const importedLogos = [logo1, logo2, logo3, logo4, logo5, logo6];

  // Map the imported image variables to the brand names
  brandsFromData.slice(0, 6).forEach((brand, index) => {
    if (brand && brand !== 'Universal') {
      logoMap[brand] = importedLogos[index];
    }
  });

  // Filter to only display brands that have a logo mapped and are not 'Universal'
  const brandsToDisplay = brandsFromData.filter(brand => brand && brand !== 'Universal' && logoMap[brand]);

  return (
    <section className="py-16 sm:py-20 bg-gray-50"> 
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Title Updated to Deep Red */}
        <h2 
          className="text-3xl sm:text-4xl font-extrabold mb-3"
          style={{ color: primaryRed }}
        > 
          Service By Brand 🛠️
        </h2>
        <p className="text-base text-gray-600 mb-12 max-w-2xl mx-auto"> 
          Get genuine **parts**, accessories, and expert repair for devices from all major global manufacturers. Click to find your model.
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
                  // Hover Effect: Use Deep Red/Maroon for border and text
                  className="block bg-white rounded-xl shadow-lg hover:shadow-2xl transition duration-500 ease-in-out group border-2 border-transparent transform hover:scale-105 overflow-hidden cursor-pointer"
                  style={{ '--hover-color': hoverAccentRed }} // Define custom CSS variable for hover
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = hoverAccentRed; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; }}
                >
                  <div className="flex flex-col items-center justify-start h-full w-full">
                    
                    {/* Image Container */}
                    <div className="w-full h-24 sm:h-28 flex items-center justify-center p-4 bg-gray-50/50 group-hover:bg-gray-100 transition duration-300">
                        <img 
                            // Use the imported image variable from the logoMap
                            src={logoMap[brand]} 
                            alt={`${brand} Logo`} 
                            className="max-w-[70%] max-h-full object-contain transition duration-500 opacity-80 group-hover:opacity-100 group-hover:scale-105" 
                        />
                    </div>
                    
                    {/* Brand Name Text - Hover text color changed to Deep Red */}
                    <h3 
                      className="text-sm sm:text-base font-bold text-gray-700 transition tracking-wide text-center py-3 px-2 w-full border-t border-gray-100"
                      style={{ transition: 'color 300ms' }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = primaryRed; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = '#4B5563'; }} // Default gray
                    >
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