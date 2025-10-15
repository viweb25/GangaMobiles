// QuickServicePreview.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { 
    WrenchScrewdriverIcon,  // Hardware Repair
    CpuChipIcon,             // Software & System
    Cog6ToothIcon            // Maintenance & Optimization
} from '@heroicons/react/24/solid';

// New mock service data for the three categories
const serviceCategories = [
    {
        id: 'hardware',
        name: 'Hardware Repair',
        tagline: 'Screen, battery, and hardware component fixes for all phone models.',
        icon: 'WrenchScrewdriverIcon',
    },
    {
        id: 'software',
        name: 'Software & System',
        tagline: 'Fix software bugs, updates, data recovery, and phone unlocking.',
        icon: 'CpuChipIcon',
    },
    {
        id: 'maintenance',
        name: 'Maintenance & Optimization',
        tagline: 'Boost performance with cleaning, diagnostics, and tune-ups.',
        icon: 'Cog6ToothIcon',
    },
];

// Icon mapping
const IconMap = {
    'WrenchScrewdriverIcon': WrenchScrewdriverIcon,
    'CpuChipIcon': CpuChipIcon,
    'Cog6ToothIcon': Cog6ToothIcon,
};

const QuickServicePreview = () => {
    return (
        <section 
            className="w-full bg-gradient-to-r from-[#4B0082] via-[#003087] to-[#4682B4] py-8 -mt-20 relative z-20" 
            aria-label="Quick preview of our main service categories"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
                    {serviceCategories.map((service) => {
                        const ServiceIcon = IconMap[service.icon] || WrenchScrewdriverIcon;
                        
                        return (
                            <Link
                                key={service.id}
                                to={`/services/${service.id}`}
                                className="p-6 transition-all duration-300 transform hover:scale-[1.03] flex flex-col items-center group"
                                aria-label={`View details for ${service.name}`}
                            >
                                <div 
                                    className="w-12 h-12 mb-3 text-white transition-transform duration-300 group-hover:scale-110"
                                    itemProp="image"
                                >
                                    <ServiceIcon className="w-full h-full" />
                                </div>

                                <h3 
                                    className="text-xl font-semibold mb-2 uppercase tracking-wider"
                                    itemProp="name"
                                >
                                    {service.name}
                                </h3>
                                
                                <p 
                                    className="text-sm font-light text-gray-200 line-clamp-2"
                                    itemProp="description"
                                >
                                    {service.tagline}
                                </p>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default QuickServicePreview;
