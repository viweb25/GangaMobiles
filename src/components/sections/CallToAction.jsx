import React from 'react';

const CtaBanner = () => {
  return (
    <section className="py-16 sm:py-24 bg-gray-900 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
        {/* Decorative Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#003087]/20 to-transparent opacity-50 -z-10"></div>

        {/* Main Heading - Focused on iCloud Solutions */}
        <h2 
          className="text-3xl sm:text-5xl font-extrabold text-white mb-4 leading-tight tracking-wide"
          data-aos="fade-down" 
          data-aos-duration="600"
        >
          Locked Out of iCloud? We’ve Got You Covered!
        </h2>
        
        {/* Subtitle - Detailed iCloud Recovery Content */}
        <p 
          className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl mx-auto"
          data-aos="fade-down" 
          data-aos-delay="200" 
          data-aos-duration="600"
        >
          Facing iCloud lock issues or need account recovery? Trust **Chennai’s** leading experts for secure, fast iCloud unlocking, data recovery, and personalized support.
        </p>

        {/* Action Buttons */}
        <div 
          className="flex flex-col sm:flex-row justify-center gap-6"
          data-aos="fade-up" 
          data-aos-delay="400" 
          data-aos-duration="600"
        >
          {/* CTA 1: iCloud Unlock (Primary Action) */}
          <a 
            href="/icloud-unlock" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 border border-transparent text-base font-bold rounded-lg shadow-xl text-white bg-[#003087] hover:bg-[#4682B4] transform hover:scale-105 transition duration-300 uppercase tracking-wider"
          >
            Unlock iCloud Now
          </a>
          
          {/* CTA 2: Account Recovery (Secondary Action) */}
          <a 
            href="/icloud-recovery" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 sm:px-8 py-3 border-2 border-white text-base font-bold rounded-lg shadow-md text-white hover:bg-white hover:text-[#003087] transform hover:scale-105 transition duration-300 uppercase tracking-wider"
          >
            Recover Your Account
          </a>
          
        </div>
      </div>
    </section>
  );
};

export default CtaBanner;