import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-16 sm:mb-20" data-aos="zoom-in" data-aos-duration="800">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 tracking-wide">
            About Ganga Mobiles
          </h1>
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Chennai's premier specialists in iCloud solutions, offering secure unlocking, account recovery, and expert mobile support.
          </p>
        </div>

        {/* 1. Core Mission & iCloud Focus */}
        <div className="bg-white p-8 sm:p-12 rounded-xl shadow-2xl mb-16" data-aos="fade-right" data-aos-duration="800">
          <h2 className="text-3xl font-bold text-[#800000] mb-4">
            Pioneering iCloud Solutions in Chennai
          </h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Ganga Mobiles is a trusted chain across Chennai, dedicated to solving iCloud-related challenges. From unlocking locked devices to recovering lost accounts, we provide a comprehensive suite of services tailored to Apple users. With multiple branches, our expert team ensures fast, secure, and reliable support for all your iCloud needs.
          </p>
        </div>

        {/* 2. Services Offered - Detailed iCloud Breakdown */}
        <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-12" data-aos="fade-up" data-aos-duration="800">
          Our iCloud Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          
          {/* Service 1: iCloud Unlocking */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300" data-aos="fade-up" data-aos-delay="100" data-aos-duration="800">
            <div className="text-[#800000] mb-3"><span className="text-3xl">🔓</span></div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">iCloud Unlocking Services</h3>
            <p className="text-gray-600">
              Expert solutions to unlock iCloud-locked devices, offering fast and legal methods to regain access to your Apple device.
            </p>
          </div>
          
          {/* Service 2: Account Recovery */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300" data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            <div className="text-[#800000] mb-3"><span className="text-3xl">🔍</span></div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">iCloud Account Recovery</h3>
            <p className="text-gray-600">
              Secure recovery services for lost or inaccessible iCloud accounts, with personalized support to restore your data.
            </p>
          </div>

          {/* Service 3: 24/7 Support */}
          <div className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300" data-aos="fade-up" data-aos-delay="300" data-aos-duration="800">
            <div className="text-[#800000] mb-3"><span className="text-3xl">⏰</span></div>
            <h3 className="text-xl font-bold text-gray-900 mb-2">24/7 Customer Support</h3>
            <p className="text-gray-600">
              Round-the-clock assistance for iCloud issues, ensuring you’re never left without help when you need it most.
            </p>
          </div>
        </div>
        
        {/* 3. Location Spotlight */}
        <div className="bg-[#800000] p-8 sm:p-12 rounded-xl shadow-2xl text-white" data-aos="fade-left" data-aos-duration="800">
          <h2 className="text-3xl font-bold mb-4">
            Visit Your Nearest Ganga Mobiles Branch
          </h2>
          <p className="text-lg text-gray-200 mb-6">
            With multiple branches across Chennai, including Pallikaranai and Sithalapakkam, our experts are always within reach for iCloud solutions.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="font-semibold text-[#A52A2A]">Pallikaranai Location:</p>
              <p className="text-gray-300 text-sm">No. 2/21, Velachery Rd, opposite Balaji Dental College.</p>
              <a href="tel:+919176100072" className="text-gray-200 hover:text-white transition text-sm">
                Call: +91 91761 00072
              </a>
            </div>
            <div>
              <p className="font-semibold text-[#A52A2A]">Sithalapakkam Location:</p>
              <p className="text-gray-300 text-sm">No. 182, Mambakkam Main Road.</p>
              <p className="text-gray-200 text-sm">Serving Narayanapuram, Vandalur, and Villivakkam areas.</p>
            </div>
          </div>
          
          <a 
            href="/locations" 
            className="mt-6 inline-flex items-center px-6 py-3 border-2 border-[#A52A2A] text-[#A52A2A] font-bold rounded-lg hover:bg-[#A52A2A] hover:text-white transition duration-300 shadow-lg uppercase"
          >
            See All Branch Addresses & Hours →
          </a>
        </div>

      </div>
    </div>
  );
};

export default About;