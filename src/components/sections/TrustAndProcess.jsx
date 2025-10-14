import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const repairProcessData = [
  { step: 1, title: 'Book Your Service', description: 'Easily schedule your repair appointment online or by visiting our Chennai service center. Choose a time that suits you best with our 24/7 booking system.' },
  { step: 2, title: 'Expert Diagnosis', description: 'Our certified technicians perform a thorough, free assessment using advanced diagnostic tools to identify issues accurately and provide a detailed report.' },
  { step: 3, title: 'Fast, Quality Repair', description: 'We complete repairs swiftly with high-quality parts, followed by rigorous testing to ensure your device works perfectly before returning it to you.' },
];

const trustFeaturesData = [
  { 
    title: 'Best Price Guaranteed', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-2.163 0-3.6 2.003-3.6 4s1.437 4 3.6 4 3.6-2.003 3.6-4-1.437-4-3.6-4zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, 
    description: 'Enjoy the most competitive pricing in the market with our Best Price Guaranteed policy. We match or beat any legitimate quote from competitors.' 
  },
  { 
    title: 'Certified Parts Only', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-9.618 3.04A2.003 2.003 0 003 7v5c0 4.04 2.868 7.828 7.429 8.928a3 3 0 002.572 0C18.132 19.828 21 16.04 21 12V7a2.003 2.003 0 00-1.382-.976z" /></svg>, 
    description: 'We use only OEM-certified parts to ensure the longevity and performance of your device, backed by a warranty on all replacements.' 
  },
  { 
    title: 'Same-Day Fixes', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, 
    description: 'Experience rapid service with our same-day repair option for most common issues, minimizing downtime and getting you back on track quickly.' 
  },
  { 
    title: 'Customer Support Excellence', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M9 16h6a2 2 0 002-2V6a2 2 0 00-2-2H9a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>, 
    description: 'Our dedicated support team is available 24/7 to assist you with queries, updates, and post-repair assistance for complete peace of mind.' 
  },
];

const TrustAndProcess = () => {
  const [activeStep, setActiveStep] = useState(0);
  const primaryRed = '#800000';
  // const hoverRed = '#A52A2A';

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Repair Process - Horizontal Stepper with Line at Back */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg mb-12 sm:mb-20">
          <h2
            className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-6 sm:mb-8 text-center tracking-wide"
            data-aos="fade-down"
          >
            Your Repair Journey
          </h2>
          <div className="relative">
            <div className="flex justify-between items-center mb-6 relative z-0">
              {repairProcessData.map((item, index) => (
                <div
                  key={item.step}
                  className={`flex-1 text-center cursor-pointer ${activeStep === index ? 'text-red-700' : 'text-gray-500'} transition-colors duration-300`}
                  onClick={() => setActiveStep(index)}
                >
                  <div
                    className={`w-10 h-10 rounded-full mx-auto flex items-center justify-center ${activeStep === index ? 'bg-red-700 text-white' : 'bg-gray-200'} shadow-md transition-all duration-300 relative z-10`}
                    style={{ backgroundColor: activeStep === index ? primaryRed : '' }}
                  >
                    {item.step}
                  </div>
                  <p className="mt-2 text-sm font-medium">{item.title}</p>
                </div>
              ))}
              <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 transform -translate-y-1/2 z-0">
                <div
                  className="h-1 bg-red-700 transition-all duration-300 z-0"
                  style={{ width: `${((activeStep + 1) / repairProcessData.length) * 100}%`, backgroundColor: primaryRed }}
                ></div>
              </div>
            </div>
            <div className="p-4 sm:p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-2">{repairProcessData[activeStep].title}</h3>
              <p className="text-sm text-gray-600">{repairProcessData[activeStep].description}</p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/quote"
              style={{ backgroundColor: primaryRed }}
              className="inline-block text-white font-semibold py-3 px-8 rounded-lg shadow-md transform hover:scale-105 hover:bg-orange-700 transition duration-300"
            >
              Start Your Repair Now →
            </Link>
          </div>
        </div>

        {/* Why Choose Ganga Mobiles - Mosaic Grid with Details */}
        <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
          <h2
            className="text-2xl sm:text-3xl font-extrabold text-gray-900 mb-6 sm:mb-8 text-center tracking-wide"
            data-aos="fade-up"
          >
            Why Choose Ganga Mobiles?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {trustFeaturesData.map((feature, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 bg-gray-50 rounded-lg border border-gray-200 hover:bg-red-50 hover:shadow-md transition-all duration-300"
                data-aos="zoom-in"
                data-aos-delay={index * 150}
              >
                <div className="flex items-center mb-2">
                  <span className="text-xl sm:text-2xl mr-3 text-red-500">{feature.icon}</span>
                  <h3 className="text-lg font-semibold text-gray-800">{feature.title}</h3>
                </div>
                <p className="text-sm text-gray-600 line-clamp-4">{feature.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/about"
              style={{ backgroundColor: primaryRed }}
              className="inline-block text-white font-semibold py-3 px-8 rounded-lg shadow-md transform hover:scale-105 hover:bg-orange-700 transition duration-300"
            >
              Learn More About Us →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAndProcess;