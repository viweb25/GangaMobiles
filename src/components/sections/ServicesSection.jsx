import React from 'react';
import { Link } from 'react-router-dom';
import { services } from '../../data/homeData';

const ServicesSection = ({ limit }) => {
  const displayServices = limit ? services.slice(0, limit) : services;
  const isHomePage = limit !== undefined;

  return (
    <section className="py-12 sm:py-16 bg-white text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800 tracking-tight">
          {isHomePage ? 'Our Featured Services' : 'All Repair Services'}
        </h2>
        <p className="mt-3 sm:mt-4 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
          Expert repairs with certified technicians and premium parts for all devices.
        </p>

        <div className={`mt-8 sm:mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-${isHomePage ? '4' : '3'}`}>
          {displayServices.length > 0 ? (
            displayServices.map((service) => (
              <div
                key={service.id}
                className="bg-white p-5 sm:p-6 rounded-lg shadow-sm border border-blue-100 hover:shadow-md transition duration-300 transform hover:scale-[1.02]"
              >
                <div className="text-4xl sm:text-5xl mb-4">{service.icon}</div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-800 mb-2">
                  {service.name}
                </h3>
                <p className="text-sm text-gray-600 line-clamp-2">{service.tagline}</p>
                <Link
                  to={`/quote?service=${service.name.replace(/\s/g, '-')}`}
                  className="mt-4 inline-block text-sm font-semibold text-teal-500 hover:text-teal-600 transition duration-200"
                >
                  Start Quote &rarr;
                </Link>
              </div>
            ))
          ) : (
            <p className="col-span-full text-gray-600">No services available.</p>
          )}
        </div>

        {isHomePage && (
          <Link
            to="/services"
            className="mt-8 sm:mt-10 inline-block bg-teal-500 text-white font-semibold py-2.5 px-6 sm:px-8 rounded-lg hover:bg-teal-600 transition duration-200 shadow-md"
          >
            View All Services
          </Link>
        )}
      </div>
    </section>
  );
};

export default ServicesSection;