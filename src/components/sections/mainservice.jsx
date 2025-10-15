import React from 'react';

// --- Import Placeholder Images for Services ---
import iCloudUnlockImage from '../../assets/icloud-unlock1.png'; // Replace with actual image
import accountRecoveryImage from '../../assets/account-recovery.png'; // Replace with actual image
import mobileRepairImage from '../../assets/mobile-repair.png'; // Replace with actual image

// --- Brand Colors ---
const primaryBlue = '#003087'; // Deep Blue
const accentBlue = '#4682B4'; // Steel Blue for hover
const lightBlueBg = '#F0F4F8'; // Light Blue for backgrounds

// --- Service Data for iCloud and Mobile Repair ---
const repairServices = [
  {
    title: 'iCloud Unlocking',
    description: 'Expertly bypass iCloud Activation Locks using secure, legal methods to restore full access to your Apple device quickly and safely.',
    image: iCloudUnlockImage,
    alt: 'iCloud Unlocking Service',
    emoji: '🔓',
  },
  {
    title: 'iCloud Account Recovery',
    description: 'Regain access to your iCloud account with our personalized recovery services, ensuring your data is restored securely and efficiently.',
    image: accountRecoveryImage,
    alt: 'iCloud Account Recovery Service',
    emoji: '🔍',
  },
  {
    title: 'Mobile Repair',
    description: 'Comprehensive repair services for screen damage, battery issues, charging ports, and more, using certified parts for all major brands.',
    image: mobileRepairImage,
    alt: 'Mobile Repair Service',
    emoji: '🔧',
  },
];

const MainService = () => {
  return (
    <section className="py-16 sm:py-24" style={{ backgroundColor: lightBlueBg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h2
            className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-2"
            style={{ color: primaryBlue }}
            data-aos="zoom-in"
            data-aos-duration="800"
          >
            Our Core iCloud & Mobile Repair Services
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Discover our specialized services for iCloud solutions and mobile repairs, designed to get your devices back to optimal performance.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {repairServices.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 hover:shadow-xl transition duration-300 flex flex-col"
              data-aos="fade-up"
              data-aos-delay={index * 100}
              data-aos-duration="800"
            >
              {/* Service Image */}
              <div className="w-full h-40 flex items-center justify-center mb-4 overflow-hidden rounded-lg bg-white-50">
                <img
                  src={service.image}
                  alt={service.alt}
                  className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML = `<div className="text-5xl">${service.emoji}</div>`;
                  }}
                />
              </div>
              {/* Service Info */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
              <p className="text-gray-600 flex-grow">{service.description}</p>
              {/* Optional CTA */}
              <a
                href="/quote"
                className="mt-4 inline-flex items-center justify-center px-4 py-2 text-sm font-semibold rounded-lg text-white transition duration-200 hover:scale-[1.01]"
                style={{ backgroundColor: primaryBlue, ':hover': { backgroundColor: accentBlue } }}
              >
                Get a Quote
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MainService;