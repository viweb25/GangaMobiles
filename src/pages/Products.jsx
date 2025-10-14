// src/components/sections/GadgetsShowcase.jsx

import React from 'react';
import { Link } from 'react-router-dom';
// Ensure this path is correct for your data file
import { productData, CATEGORY_TYPES } from '../data/products'; 

// --- 1. Correctly Import Your Specific Accessory Images for the Footer Visuals ---
// These are the three images you previously uploaded/mentioned:
const EarbudsImage = 'uploaded:WhatsApp Image 2025-10-13 at 10.05.18 PM.jpeg-cd3a26d2-ef11-407f-8236-e01d315569cd';
const ChargerImage = 'uploaded:WhatsApp Image 2025-10-13 at 10.14.25 PM.jpeg-a0a798de-86bb-4e7e-a66e-af728de4db13';
const CaseImage = 'uploaded:WhatsApp Image 2025-10-13 at 10.20.14 PM.jpeg-0b84f312-dab4-46b8-b9b9-2411225a7be0';


// --- Brand Colors ---
const primaryRed = '#800000'; // Deep Red/Maroon
const accentRed = '#A52A2A';  // Bright Maroon for hover
const lightRedBg = '#FEF2F2'; // Very light red background for cards

const GadgetsShowcase = () => {
    
    // Filter the product data to only include the relevant accessories/gadgets
    const accessoriesToDisplay = productData.filter(
        (product) => 
            product.categoryType === CATEGORY_TYPES.ACCESSORIES_UNIVERSAL ||
            product.categoryType === CATEGORY_TYPES.APPLE_GENERAL
    );

    // Function to generate the WhatsApp link
    const generateWhatsAppLink = (requestString) => {
        const match = requestString.match(/Send "(.*?)"/);
        const text = match ? match[1] : `Price for product: ${requestString}`;
        
        const base = 'https://wa.me/919176100072';
        return `${base}?text=${encodeURIComponent(text)}`;
    };

    return (
        <section className="py-16 sm:py-24" style={{ backgroundColor: lightRedBg }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-12 sm:mb-16">
                    <h2 
                        className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-2"
                        style={{ color: primaryRed }}
                    >
                        Essential Mobile Accessories & Gadgets
                    </h2>
                    <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                        High-quality Earbuds, Fast Chargers, and essential cables for all your devices.
                    </p>
                </div>

                {/* Gadgets Grid (Displays AC001, AC002, AC004, etc. from productData) */}
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 sm:gap-8">
                    {accessoriesToDisplay.map((gadget, index) => (
                        <div
                            key={gadget.id}
                            data-aos="zoom-in"
                            data-aos-delay={index * 50}
                            className="bg-white p-4 sm:p-5 rounded-xl shadow-lg border border-gray-100 flex flex-col justify-between transform transition duration-300 hover:shadow-2xl hover:scale-[1.03]"
                        >
                            {/* Product Image - Uses imageUrl which links to your asset files */}
                            <div className="w-full h-28 sm:h-32 flex items-center justify-center mb-3 overflow-hidden rounded-lg bg-white-50">
                                <img
                                    src={gadget.imageUrl || gadget.imagePlaceholder} 
                                    alt={gadget.name}
                                    className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110"
                                    onError={(e) => {
                                        // Display emoji if image fails
                                        e.target.style.display = 'none'; 
                                        const parent = e.target.parentElement;
                                        if (parent && gadget.imagePlaceholder) {
                                            parent.innerHTML = `<div class="text-5xl">${gadget.imagePlaceholder}</div>`;
                                        }
                                    }}
                                />
                            </div>
                            
                            {/* Product Info */}
                            <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-1 leading-tight line-clamp-2">
                                {gadget.name}
                            </h3>
                            <p className="text-xs text-gray-500 mb-4 line-clamp-2">
                                {gadget.tagline}
                            </p>

                            {/* Price and CTA */}
                            <div className="mt-auto">
                                <p className="text-sm font-semibold mb-2" style={{ color: primaryRed }}>
                                    {gadget.price}
                                </p>
                                <a
                                    href={generateWhatsAppLink(gadget.whatsappRequest)}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block text-center text-xs font-semibold py-2 rounded-lg transition duration-200"
                                    style={{ backgroundColor: primaryRed, color: 'white' }}
                                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = accentRed}
                                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = primaryRed}
                                >
                                    💬 Price Check
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Visual Representation of Gadget Types (Using your specific uploaded images) */}
                <div className="mt-16 text-center">
                    <p className="text-xl font-semibold text-gray-700 mb-6">
                        Featured Accessory Categories:
                    </p>
                    <div className="flex justify-center flex-wrap gap-4 sm:gap-6">
                        <span className="text-center">
                            {/* Image 1: Earbuds (using imported variable) */}
                            <img src={EarbudsImage} alt="Wireless Earbuds" className="w-20 h-20 mx-auto rounded-lg object-cover shadow-md transition duration-300 hover:scale-105" />
                            <p className="text-sm font-medium mt-1">Earbuds</p>
                        </span>
                        <span className="text-center">
                            {/* Image 2: Fast Charger Adapter (using imported variable) */}
                            <img src={ChargerImage} alt="Fast Charger Adapter" className="w-20 h-20 mx-auto rounded-lg object-cover shadow-md transition duration-300 hover:scale-105" />
                            <p className="text-sm font-medium mt-1">Fast Chargers</p>
                        </span>
                        <span className="text-center">
                            {/* Image 3: Mobile Phone Case (representing cables/covers) (using imported variable) */}
                            <img src={CaseImage} alt="Mobile Phone Case" className="w-20 h-20 mx-auto rounded-lg object-cover shadow-md transition duration-300 hover:scale-105" />
                            <p className="text-sm font-medium mt-1">Cables & Covers</p>
                        </span>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GadgetsShowcase;