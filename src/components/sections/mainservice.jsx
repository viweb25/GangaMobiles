// AllServices.jsx

import React from 'react';

// --- Images ---
import iCloudUnlockImage from '../../assets/icloud-unlock1.png';
import accountRecoveryImage from '../../assets/account-recovery.png';
import mobileRepairImage from '../../assets/mobile-repair.png';
import MaintenanceImage from '../../assets/maintainence.png';
import SoftwareImage from '../../assets/software.png';
import HardwareImage from '../../assets/hardware.png';

// --- Brand Colors ---
const primaryBlue = '#003087';
// const accentBlue = '#4682B4';
const lightBlueBg = '#F0F4F8';

// --- Core Repair Services ---
const coreRepairServices = [
  {
    title: 'iCloud Unlocking',
    description: 'Bypass iCloud Activation Locks securely to restore full access to your Apple device quickly.',
    image: iCloudUnlockImage,
    alt: 'iCloud Unlocking Service',
    emoji: '🔓',
  },
  {
    title: 'iCloud Account Recovery',
    description: 'Regain access to your iCloud account with personalized, secure recovery solutions.',
    image: accountRecoveryImage,
    alt: 'iCloud Account Recovery Service',
    emoji: '🔍',
  },
  {
    title: 'Mobile Repair',
    description: 'Comprehensive repairs for screen, battery, charging ports, and more using certified parts.',
    image: mobileRepairImage,
    alt: 'Mobile Repair Service',
    emoji: '🔧',
  },
];

// --- Core Services Grid ---
const CoreServicesGrid = () => (
  <section className="py-16 sm:py-24" style={{ backgroundColor: lightBlueBg }}>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-extrabold mb-4" style={{ color: primaryBlue }}>
          Core iCloud & Mobile Repair Services
        </h2>
        <p className="text-lg text-gray-700 max-w-3xl mx-auto">
          Specialized services to get your devices back to optimal performance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {coreRepairServices.map((service, idx) => (
          <div
            key={idx}
            className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
          >
            <div className="w-32 h-32 flex items-center justify-center mb-5 bg-gray-50 rounded-full overflow-hidden">
              <img
                src={service.image}
                alt={service.alt}
                className="max-w-full max-h-full object-contain transition-transform duration-300 hover:scale-110"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML = `<div class="text-5xl">${service.emoji}</div>`;
                }}
              />
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
            <a
              href="/quote"
              className="mt-4 inline-block px-5 py-2 text-sm font-semibold rounded-full text-white transition duration-200 hover:opacity-90"
              style={{ backgroundColor: primaryBlue }}
            >
              Learn More
            </a>
          </div>
        ))}
      </div>
    </div>
  </section>
);

// --- Generic Service Section ---
const GenericServiceSection = ({ title, content, imageSrc, reverse }) => (
  <div className={`flex flex-col lg:flex-row items-center ${reverse ? 'lg:flex-row-reverse' : ''} gap-8 py-12`}>
    <div className="w-full lg:w-1/2">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-80 object-cover rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
      />
    </div>
    <div className="w-full lg:w-1/2">
      <h2 className="text-3xl font-bold mb-4" style={{ color: primaryBlue }}>
        {title}
      </h2>
      {content}
    </div>
  </div>
);

// --- Service Contents ---
const maintenanceContent = (
  <>
    <p className="text-lg mb-4 text-gray-700">
      Keep your device in top condition and ensure long-term reliability with proactive maintenance and optimization services.
    </p>
    <ul className="list-disc list-inside text-gray-700 space-y-2 pl-5">
      <li><strong>Phone Cleaning & Servicing:</strong> Internal and external cleaning to remove dust and improve cooling/performance.</li>
      <li><strong>Performance Optimization:</strong> Removing junk files, managing startup apps, and optimizing system settings.</li>
      <li><strong>Diagnostics & Troubleshooting:</strong> Identifying hidden hardware or software issues before they become critical.</li>
      <li>Battery health monitoring and calibration.</li>
    </ul>
  </>
);

const softwareContent = (
  <>
    <p className="text-lg mb-4 text-gray-700">
      Ensure your device runs smoothly, securely, and efficiently with our comprehensive software and system support.
    </p>
    <ul className="list-disc list-inside text-gray-700 space-y-2 pl-5">
      <li><strong>Operating System Management:</strong> Secure updates, installations, and full system re-flashing.</li>
      <li><strong>Virus and Malware Removal:</strong> Complete device sanitation and preventive security measures.</li>
      <li>Data backup, migration, and specialized recovery services.</li>
      <li>Phone unlocking and password/PIN recovery assistance.</li>
      <li>Custom ROM installation and advanced performance tuning.</li>
    </ul>
  </>
);

const hardwareContent = (
  <>
    <p className="text-lg mb-4 text-gray-700">
      From cracked screens to water damage, our expert technicians provide fast and reliable hardware repairs using quality, certified components.
    </p>
    <ul className="list-disc list-inside text-gray-700 space-y-2 pl-5">
      <li><strong>Screen Replacement:</strong> Fixes for display, touch, and glass issues for all major brands.</li>
      <li>Battery replacement and power management fixes.</li>
      <li>Camera, speaker, and microphone repairs.</li>
      <li>Charging port and headphone jack fixes.</li>
      <li>Water damage restoration (component-level cleaning and repair).</li>
      <li>Housing/casing replacement and button repairs.</li>
    </ul>
  </>
);

// --- Main Component ---
const AllServices = () => (
  <div className="bg-white">
    <CoreServicesGrid />

    <section className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold" style={{ color: primaryBlue }}>
          Extended Device Care & Technical Support
        </h2>
        <p className="text-xl text-gray-600 mt-2">
          Beyond physical repair, we offer comprehensive services for all your device's internal needs.
        </p>
      </div>

      <GenericServiceSection title="Hardware Repair" content={hardwareContent} imageSrc={HardwareImage} />
      <GenericServiceSection title="Software & System" content={softwareContent} imageSrc={SoftwareImage} reverse />
      <GenericServiceSection title="Maintenance & Optimization" content={maintenanceContent} imageSrc={MaintenanceImage} />
    </section>
  </div>
);

export default AllServices;
