import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800">
            About Ganga Mobiles
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Chennai's trusted chain for expert mobile repair, quality accessories, and reliable phone sales.
          </p>
        </div>

        {/* 1. Core Mission & Local Focus */}
        <div className="bg-white p-8 sm:p-12 rounded-xl shadow-2xl mb-16" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-teal-600 mb-4">
            A Chain Built on Trust in Chennai 
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Ganga Mobiles has grown to become a leading name for mobile services across **Chennai**. We are not just a single store; we are a dedicated chain of mobile service centers offering a comprehensive solution for all your gadget needs—from the latest **new and used mobile sales** to complex **mobile repair services** and a wide array of **mobile accessories**. Our commitment is to provide quick, reliable, and expert service right in your neighborhood.
          </p>
        </div>

        {/* 2. Services Offered - Detailed Breakdown */}
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-10">
          Our Core Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Service 1: Mobile Repairs */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100" data-aos="fade-up" data-aos-delay="100">
            <div className="text-teal-500 mb-3"><span className="text-3xl">🛠️</span></div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">Comprehensive Mobile Repairs</h3>
            <p className="text-gray-600">
              We handle all major brands and mobile issues, from shattered screens and faulty batteries to complex water damage restoration. Our dedicated team provides **quick and reliable service** you can count on.
            </p>
          </div>
          
          {/* Service 2: Mobile Sales */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100" data-aos="fade-up" data-aos-delay="200">
            <div className="text-teal-500 mb-3"><span className="text-3xl">📱</span></div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">New & Used Phone Sales</h3>
            <p className="text-gray-600">
              Looking for an upgrade or a reliable budget device? We offer a curated selection of **new mobile phones** and quality **second-hand mobile phones**, all inspected and certified by our in-house experts.
            </p>
          </div>

          {/* Service 3: Accessories */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100" data-aos="fade-up" data-aos-delay="300">
            <div className="text-teal-500 mb-3"><span className="text-3xl">🔌</span></div>
            <h3 className="text-xl font-bold text-blue-800 mb-2">Premium Mobile Accessories</h3>
            <p className="text-gray-600">
              Protect and enhance your device with our wide range of **mobile accessories**, including cases, screen protectors, chargers, and headphones, available at all our branches.
            </p>
          </div>
        </div>
        
        {/* 3. Location Spotlight (Directly linking to your Locations page) */}
        <div className="bg-blue-800 p-8 sm:p-10 rounded-xl shadow-2xl text-white" data-aos="fade-up">
            <h2 className="text-3xl font-bold mb-4">
                Find Your Nearest Ganga Mobiles Branch
            </h2>
            <p className="text-lg text-blue-200 mb-6">
                With **multiple branches across Chennai**, including Pallikaranai and Sithalapakkam, expert help is always close by.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <p className="font-semibold text-teal-400">Pallikaranai Location:</p>
                    <p className="text-white text-sm">No. 2/21, Velachery Rd, opposite Balaji Dental College.</p>
                    <a href="tel:+919176100072" className="text-blue-200 hover:text-white transition text-sm">
                        Call: +91 91761 00072
                    </a>
                </div>
                <div>
                    <p className="font-semibold text-teal-400">Sithalapakkam Location:</p>
                    <p className="text-white text-sm">No. 182, Mambakkam Main Road.</p>
                    <p className="text-blue-200 text-sm">Also serving Narayanapuram, Vandalur, and Villivakkam areas.</p>
                </div>
            </div>
            
            <a 
                href="/locations" 
                className="mt-6 inline-flex items-center px-6 py-3 border-2 border-teal-400 text-teal-400 font-bold rounded-lg hover:bg-teal-400 hover:text-blue-800 transition duration-300 shadow-lg uppercase"
            >
                See All Branch Addresses & Hours →
            </a>
        </div>

      </div>
    </div>
  );
};

export default About;