import React from 'react';
import { Link } from 'react-router-dom';

// --- Brand Colors ---
const primaryBlue = '#003087'; // Deep Blue
const accentBlue = '#4682B4';  // Steel Blue for hover/accents

// =========================================================
// NOTE: You MUST create an image named 'unlock.jpg' 
//       in your 'src/assets' folder for this to work.
// =========================================================
import unlockImage from '../../assets/unlock.jpg'; 

const unlockSteps = [
    {
        step: 1,
        title: 'Submit Your Device Details',
        description: 'Provide your device model (iPhone/iPad) and the specific lock type (iCloud/Network/Carrier) using our online form or WhatsApp.',
    },
    {
        step: 2,
        title: 'Receive Confirmation & Quote',
        description: 'Our specialists will verify the lock status and provide a clear, non-negotiable quote and expected turnaround time for the unlock service.',
    },
    {
        step: 3,
        title: 'Unlock Completed Remotely',
        description: 'Once payment is confirmed, the unlock is processed remotely. We notify you the moment your device is fully unlocked and ready to use.',
    },
];

const iCloudUnlockSection = () => {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* LEFT: Image and Trust Badge */}
                    <div className="order-2 lg:order-1 relative" data-aos="fade-right">
                        <div className="rounded-xl shadow-2xl overflow-hidden border-4 border-gray-100 transform transition duration-500 hover:scale-[1.01]">
                            <img
                                src={unlockImage}
                                alt="iCloud and Network Unlock Service"
                                className="w-full h-auto object-cover aspect-video"
                                onError={(e) => { e.target.src = 'https://via.placeholder.com/600x400?text=Unlock+Image+Missing'; }}
                            />
                        </div>
                        
                        {/* Trust Badge */}
                        <div 
                            className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 p-4 rounded-full shadow-2xl z-10 hidden sm:block"
                            style={{ backgroundColor: primaryBlue }}
                        >
                            <span className="text-white text-sm font-bold uppercase tracking-wider">
                                100% Success Rate Guaranteed
                            </span>
                        </div>
                    </div>

                    {/* RIGHT: Content and Steps */}
                    <div className="order-1 lg:order-2" data-aos="fade-left">
                        <p className="text-sm font-semibold uppercase tracking-wider mb-2" style={{ color: primaryBlue }}>
                            Unlock Services
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                            iCloud, Carrier & <br /> Network Unlock Service
                        </h2>
                        
                        <p className="text-base text-gray-700 leading-relaxed mb-8">
                            Permanently bypass **iCloud Activation Lock**, remove carrier restrictions, and unlock Blacklisted devices remotely. Our process is secure, efficient, and guaranteed.
                        </p>
                        
                        {/* Unlock Steps - Easy to Understand */}
                        <div className="space-y-6 mb-8">
                            {unlockSteps.map((item) => (
                                <div key={item.step} className="flex items-start">
                                    <div 
                                        className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center font-bold text-white shadow-md"
                                        style={{ backgroundColor: primaryBlue }}
                                    >
                                        {item.step}
                                    </div>
                                    <div className="ml-4">
                                        <h3 className="text-lg font-bold text-gray-900">{item.title}</h3>
                                        <p className="text-sm text-gray-600">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        {/* Call to Action Button */}
                        <Link
                            to="/unlock-service" // Link to a detailed unlock page or contact form
                            style={{ backgroundColor: primaryBlue }}
                            className={`inline-block text-white font-semibold py-3 px-8 rounded-lg shadow-xl transition duration-300 transform hover:scale-105`}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = accentBlue}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = primaryBlue}
                        >
                            Get Your Device Unlocked Now →
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default iCloudUnlockSection;