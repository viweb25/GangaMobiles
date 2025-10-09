import React from 'react';
import { Link } from 'react-router-dom';
import { repairProcess, trustFeatures } from '../../data/homeData';

const TrustAndProcess = () => {
  return (
    <section className="py-12 sm:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-6 sm:p-8 rounded-lg shadow-sm border border-blue-100">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mb-8 sm:mb-10 text-center">
            Your Repair in 3 Simple Steps
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 text-center">
            {repairProcess.length > 0 ? (
              repairProcess.map((item) => (
                <div key={item.step} className="p-4">
                  <div className="relative inline-block mb-4">
                    <div className="w-12 h-12 flex items-center justify-center rounded-full bg-teal-500 text-white font-extrabold text-xl sm:text-2xl shadow-md">
                      {item.step}
                    </div>
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800 mt-2">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))
            ) : (
              <p className="col-span-full text-gray-600">No repair process steps available.</p>
            )}
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/quote"
              className="inline-block bg-teal-500 text-white font-semibold py-2.5 px-6 sm:px-8 rounded-lg hover:bg-teal-600 transition duration-200 shadow-md"
            >
              Get Started Now
            </Link>
          </div>
        </div>

        <div className="mt-12 sm:mt-16">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-800 tracking-tight text-center mb-8 sm:mb-12">
            Why Choose Ganga Mobiles?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {trustFeatures.length > 0 ? (
              trustFeatures.map((feature, index) => (
                <div
                  key={index}
                  className="bg-white p-5 sm:p-6 rounded-lg shadow-sm border border-blue-100 hover:shadow-md transition duration-300"
                >
                  <div className="flex items-start">
                    <span className="text-2xl sm:text-3xl mr-3 sm:mr-4">{feature.icon}</span>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                        {feature.title}
                      </h3>
                      <p className="mt-1 text-sm text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-gray-600">No trust features available.</p>
            )}
          </div>
          <div className="mt-8 sm:mt-10 text-center">
            <Link
              to="/about"
              className="inline-block bg-teal-500 text-white font-semibold py-2.5 px-6 sm:px-8 rounded-lg hover:bg-teal-600 transition duration-200 shadow-md"
            >
              Learn More About Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustAndProcess;