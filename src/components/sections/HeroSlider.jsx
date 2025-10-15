import React from 'react';
import { Link } from 'react-router-dom';

// --- Brand and SEO Data ---
const primaryBlue = '#003087'; // Deep Blue (Used for consistency in button hover/border)

const heroData = {
  // Primary SEO Keyword Focus
  caption: 'Best iPhone & Mobile Repair Shop in Chennai',
  subCaption:
    // Stronger SEO copy mentioning high-value services
    'Certified experts for **iPhone Motherboard Repair, Battery Replacement,** and **iCloud Activation Lock Unlock** service. Get a free, fast quote from Chennai\'s most trusted mobile service center today.',
  
  alt: 'Specialized technician working on complex iPhone motherboard repair and micro-soldering.',
  
  buttonPrimaryText: 'Free Repair Quote',
  buttonPrimaryLink: '/quote',
  buttonSecondaryText: 'iCloud/Network Unlock', 
  buttonSecondaryLink: '/unlock-service',      
};

const HeroStaticSection = () => {

  return (
    <section
      // --- START OF REQUIRED CHANGES ---
      // Implementing the exact gradient and spacing with updated blue-related colors
      className="w-full relative h-auto min-h-[500px] py-20 sm:py-24 overflow-hidden -mt-20 z-20"
      style={{
        background: 'linear-gradient(to right, #4B0082, #003087, #4682B4)' // Indigo -> Deep Blue -> Steel Blue
      }}
      // --- END OF REQUIRED CHANGES ---
      itemScope
      itemType="https://schema.org/Service"
      aria-label="Best iPhone and Mobile Phone Repair and iCloud Unlock Service in Chennai"
    >
      <div className="relative z-10 flex items-center justify-center h-full p-6 sm:p-10">
        <div className="text-center max-w-4xl text-white">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg"
            itemProp="name"
          >
            {heroData.caption}
          </h1>
          <p
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-200 drop-shadow-md"
            itemProp="description"
            dangerouslySetInnerHTML={{ __html: heroData.subCaption.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }}
          />
          
          {/* Action Buttons */}
          <div className="mt-10 flex justify-center space-x-4">
            {/* Primary Button: Quote - White for high contrast */}
            <Link
              to={heroData.buttonPrimaryLink}
              className={`inline-block bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 uppercase text-sm tracking-wider`}
              aria-label={heroData.buttonPrimaryText}
              itemProp="url"
            >
              {heroData.buttonPrimaryText}
            </Link>
            
            {/* Secondary Button: Unlock Service - Transparent with White border/text */}
            <Link
              to={heroData.buttonSecondaryLink}
              className={`inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 uppercase text-sm tracking-wider`}
              aria-label={heroData.buttonSecondaryText}
              itemProp="url"
              // Adjusting the hover effect to stick to white for cleaner contrast on the dark background
              style={{ borderColor: 'white', color: 'white' }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = primaryBlue; // Text turns blue on hover
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white'; // Text returns to white
              }}
            >
              {heroData.buttonSecondaryText}
            </Link>
          </div>
        </div>
      </div>
      
      {/* Subtle graphic element */}
      <div 
        className="hidden md:block absolute bottom-0 right-0 w-48 h-48 opacity-10"
        style={{ 
          backgroundImage: 'radial-gradient(white 2px, transparent 0)',
          backgroundSize: '20px 20px',
        }}
      ></div>
    </section>
  );
};

export default HeroStaticSection;