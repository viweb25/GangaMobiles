import React from 'react';
import { Link } from 'react-router-dom';

// Import a local fallback image (place this in src/assets)
// import fallbackImage from '../assets/fallback-hero-image.jpg'; // Ensure this image exists in your project

const heroData = {
  caption: 'Trusted Gadget Repair Services in Chennai',
  subCaption:
    'Need **friendly, fast, and reliable** mobile repair? We fix **iPhones, Samsung, and all major gadgets**. Get a quick quote for screen replacement, battery replacement, and complex fixes today.',
  url: 'https://images.unsplash.com/photo-1542385108-963d59663717?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  alt: 'Skilled technician working on a circuit board, specialized phone repair tools nearby',
  buttonPrimaryText: 'Get Started',
  buttonPrimaryLink: '/quote',
  buttonSecondaryText: 'Contact Us',
  buttonSecondaryLink: '/contact',
};

const HeroStaticSection = () => {
  // Use local fallback image instead of via.placeholder.com
  const finalImageUrl = heroData.url;

  return (
    <section
      className="relative w-full h-[600px] overflow-hidden bg-gray-900"
      itemScope
      itemType="https://schema.org/Service"
      aria-label="Trusted, fast, and friendly gadget and mobile phone repair services"
    >
      <div className="absolute inset-0">
        <img
          src={finalImageUrl}
          alt={heroData.alt}
          className="w-full h-full object-cover object-center"
          loading="lazy" // Changed to lazy for better performance
          onError={(e) => {
            console.error(`Image failed to load: ${finalImageUrl}`, e);
            // e.target.src = fallbackImage; // Use local fallback image
          }}
          itemProp="image"
        />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#8B008B]/30 via-transparent to-[#800000]/30"></div>
      </div>

      <div className="relative z-10 flex items-center justify-center h-full p-6 sm:p-10">
        <div className="text-center max-w-4xl text-white">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg"
            itemProp="name"
          >
            {heroData.caption}
          </h1>
          <p
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-gray-300 drop-shadow-md"
            itemProp="description"
          >
            {heroData.subCaption}
          </p>
          <div className="mt-8 flex justify-center space-x-4">
            <Link
              to={heroData.buttonPrimaryLink}
              className="inline-block bg-[#800000] hover:bg-[#A52A2A] text-white font-semibold py-3 px-8 rounded shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#800000]/50 uppercase text-sm tracking-wider"
              aria-label={heroData.buttonPrimaryText}
              itemProp="url"
            >
              {heroData.buttonPrimaryText}
            </Link>
            <Link
              to={heroData.buttonSecondaryLink}
              className="inline-block bg-transparent border-2 border-white text-white hover:bg-white hover:text-gray-900 font-semibold py-3 px-8 rounded shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white/50 uppercase text-sm tracking-wider"
              aria-label={heroData.buttonSecondaryText}
              itemProp="url"
            >
              {heroData.buttonSecondaryText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroStaticSection;