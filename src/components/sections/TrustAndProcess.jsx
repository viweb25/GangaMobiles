import React from 'react';
import { Link } from 'react-router-dom';

// --- Brand Colors ---
const primaryBlue = '#003087'; // Deep Blue
const accentBlue = '#4682B4';  // Steel Blue for hover/accents
const lightGrayBg = '#F9FAFB'; // A very light background

const repairProcessData = [
  { step: 1, title: 'Book Your Service', description: 'Easily schedule your repair appointment online or by visiting our Chennai service center. Choose a time that suits you best.' },
  { step: 2, title: 'Expert Diagnosis & Quote', description: 'Our certified technicians perform a thorough, free assessment using advanced diagnostic tools to identify issues and provide a detailed report.' },
  { step: 3, title: 'Fast, Quality Repair', description: 'We complete repairs swiftly with high-quality, certified parts, followed by rigorous testing to ensure your device works perfectly.' },
  { step: 4, title: 'Collect & Warranty', description: 'Pick up your device and receive our comprehensive service warranty, ensuring complete peace of mind.' },
];

const trustFeaturesData = [
  { 
    title: 'Best Price Guaranteed', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-2.163 0-3.6 2.003-3.6 4s1.437 4 3.6 4 3.6-2.003 3.6-4-1.437-4-3.6-4zM21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>, 
    description: 'We match or beat any legitimate quote, ensuring you get the most competitive pricing without sacrificing quality.' 
  },
  { 
    title: 'Certified Parts Only', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-9.618 3.04A2.003 2.003 0 003 7v5c0 4.04 2.868 7.828 7.429 8.928a3 3 0 002.572 0C18.132 19.828 21 16.04 21 12V7a2.003 2.003 0 00-1.382-.976z" /></svg>, 
    description: 'Every replacement uses high-quality, OEM-certified components, guaranteeing the longevity and reliability of your repaired device.' 
  },
  { 
    title: 'Rapid Same-Day Fixes', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>, 
    description: 'Minimize downtime. We offer same-day repair for most common screen, battery, and minor component issues.' 
  },
  { 
    title: '24/7 Support', 
    icon: <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M9 16h6a2 2 0 002-2V6a2 2 0 00-2-2H9a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>, 
    description: 'Our dedicated team is ready 24 hours a day to assist you with queries, updates, and post-repair support.' 
  },
];

const TrustAndProcess = () => {
  // Removed activeStep state as we are using a static vertical timeline now

  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: lightGrayBg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid: Process (Left) and Trust Features (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          
          {/* LEFT: Repair Process - Vertical Timeline Style */}
          <div data-aos="fade-right">
            <p className="text-lg font-semibold uppercase tracking-wider mb-2" style={{ color: primaryBlue }}>
              Our Simple Process
            </p>
            <h2 
              className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10"
              style={{ color: primaryBlue }}
            >
              Get Your Device Fixed in 4 Steps
            </h2>
            
            <ol className="relative border-l border-gray-300 ml-4">                  
              {repairProcessData.map((item) => (
                <li key={item.step} className="mb-10 ml-6">
                  <span className="absolute flex items-center justify-center w-8 h-8 rounded-full -left-4 ring-8 ring-gray-50/0" style={{ backgroundColor: primaryBlue }}>
                    <span className="text-white font-bold text-sm">{item.step}</span>
                  </span>
                  <div className="p-4 bg-white rounded-lg shadow-md transition duration-300 transform hover:shadow-xl hover:scale-[1.01]">
                    <h3 className="flex items-center mb-1 text-xl font-semibold text-gray-900">
                      {item.title}
                    </h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </li>
              ))}
            </ol>
            
            <div className="mt-10 text-center lg:text-left">
              <Link
                to="/quote"
                style={{ backgroundColor: primaryBlue }}
                className={`inline-block text-white font-semibold py-3 px-8 rounded-lg shadow-xl transform transition duration-300 hover:scale-[1.02] hover:bg-blue-700`}
              >
                Start Your Repair Now →
              </Link>
            </div>
          </div>

          {/* RIGHT: Trust Features - Inverted Color Cards */}
          <div data-aos="fade-left">
            <p className="text-lg font-semibold uppercase tracking-wider mb-2" style={{ color: primaryBlue }}>
              Why We're Chennai's Choice
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-10">
              Reliability You Can Trust
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {trustFeaturesData.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 rounded-xl shadow-xl border-4 transform transition duration-300 hover:shadow-2xl hover:scale-[1.03] text-white"
                  style={{ 
                      backgroundColor: primaryBlue,
                      borderColor: accentBlue,
                  }}
                  data-aos="zoom-in"
                  data-aos-delay={index * 150}
                >
                  <div className="flex items-center mb-3">
                    <span className="mr-3 text-white">{feature.icon}</span>
                    <h3 className="text-xl font-bold">{feature.title}</h3>
                  </div>
                  <p className="text-sm text-gray-200">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 text-center sm:text-right">
              <Link
                to="/about"
                className={`inline-block font-semibold py-3 px-8 rounded-lg shadow-xl border-2 border-transparent transition duration-300 transform hover:scale-[1.02]`}
                style={{ 
                    backgroundColor: 'transparent',
                    color: primaryBlue,
                    borderColor: primaryBlue
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = primaryBlue;
                    e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.color = primaryBlue;
                }}
              >
                View Our Warranty Details →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAndProcess;