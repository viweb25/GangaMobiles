import React from 'react';
import { Link } from 'react-router-dom';
import repairImg from '../../assets/repair.jpg'; // ✅ adjust path

// --- Brand Colors ---
const primaryBlue = '#003087';
const accentBlue = '#4682B4';

const heroData = {
  caption: 'Best iPhone & Mobile Repair Shop in Chennai',
  subCaption:
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
      className="w-full relative min-h-[600px] py-20 sm:py-24 overflow-hidden -mt-20 z-20"
      style={{
        background: 'linear-gradient(to right, #4B0082, #003087, #4682B4)',
      }}
      itemScope
      itemType="https://schema.org/Service"
      aria-label="Best iPhone and Mobile Phone Repair and iCloud Unlock Service in Chennai"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
        
        {/* --- LEFT: TEXT CONTENT --- */}
        <div className="flex-1 text-center lg:text-left text-white z-10">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold leading-tight drop-shadow-lg"
            itemProp="name"
          >
            {heroData.caption}
          </h1>
          <p
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-2xl mx-auto lg:mx-0 text-gray-200 drop-shadow-md"
            itemProp="description"
            dangerouslySetInnerHTML={{
              __html: heroData.subCaption.replace(
                /\*\*(.*?)\*\*/g,
                '<strong>$1</strong>'
              ),
            }}
          />

          {/* --- CTA Buttons --- */}
          <div className="mt-10 flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            <Link
              to={heroData.buttonPrimaryLink}
              className="inline-block bg-white hover:bg-gray-100 text-gray-900 font-bold py-3 px-8 rounded-lg shadow-2xl transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/50 uppercase text-sm tracking-wider"
              aria-label={heroData.buttonPrimaryText}
              itemProp="url"
            >
              {heroData.buttonPrimaryText}
            </Link>

            <Link
              to={heroData.buttonSecondaryLink}
              className="inline-block border-0 text-white font-bold py-3 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-white/40 uppercase text-sm tracking-wider"
              aria-label={heroData.buttonSecondaryText}
              itemProp="url"
              style={{
                backgroundColor: 'transparent',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = primaryBlue;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = 'white';
              }}
            >
              {heroData.buttonSecondaryText}
            </Link>
          </div>
        </div>

        {/* --- RIGHT: IMAGE --- */}
        <div className="flex-1 relative flex justify-center lg:justify-end w-full">
          <div className="relative group">
            <img
              src={repairImg}
              alt={heroData.alt}
              className="w-full max-w-[460px] rounded-3xl shadow-2xl transform transition-transform duration-700 group-hover:scale-[1.03]"
              style={{
                border: 'none', // ✅ no border at all
                outline: 'none',
                boxShadow: '0 20px 60px rgba(0,0,0,0.45)',
              }}
              loading="lazy"
            />

            {/* Reflection / Shine Overlay */}
            <div
              className="absolute inset-0 rounded-3xl pointer-events-none"
              style={{
                background:
                  'linear-gradient(145deg, rgba(255,255,255,0.25) 0%, rgba(255,255,255,0.05) 70%)',
                mixBlendMode: 'overlay',
              }}
            ></div>

            {/* Floating Glow Effect */}
            <div
              className="absolute -bottom-8 -right-8 w-56 h-56 rounded-full blur-3xl opacity-40 group-hover:opacity-70 transition-all duration-700"
              style={{ backgroundColor: accentBlue }}
            ></div>
          </div>
        </div>
      </div>

      {/* --- Decorative Dots BG --- */}
      <div
        className="hidden md:block absolute bottom-0 left-0 w-64 h-64 opacity-10"
        style={{
          backgroundImage: 'radial-gradient(white 2px, transparent 0)',
          backgroundSize: '22px 22px',
        }}
      ></div>
    </section>
  );
};

export default HeroStaticSection;
