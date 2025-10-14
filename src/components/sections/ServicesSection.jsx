// QuickServicePreview.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import { allServices } from '../../data/servicesData'; 
import { 
    WrenchScrewdriverIcon,  // Icon for Screen Replacement
    CubeIcon,               // Icon for Battery Replacement
    ArchiveBoxIcon,         // Icon for Water Damage Repair
    // Import all other Heroicons you plan to use in other sections
} from '@heroicons/react/24/solid';

// Mapping utility to link string ID from data to the actual React component
const IconMap = {
    'WrenchScrewdriverIcon': WrenchScrewdriverIcon,
    'CubeIcon': CubeIcon,               
    'ArchiveBoxIcon': ArchiveBoxIcon,
};

const QuickServicePreview = () => {
    // Filter and limit the data to the top 3 core services (c1, c2, c3)
    const displayServices = allServices.filter(s => ['c1', 'c2', 'c3'].includes(s.id));
    
    if (displayServices.length === 0) {
        return null; 
    }

    return (
        <section 
            // -mt-20 pulls the section up over the hero image
            className="w-full bg-gradient-to-r from-[#8B008B] via-[#800000] to-[#A52A2A] py-8 -mt-20 relative z-20" 
            aria-label="Quick preview of our top repair services"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Grid Container for the 3 service boxes */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
                    {displayServices.map((service) => {
                        // Get the icon component or use a fallback (e.g., WrenchScrewdriverIcon)
                        const ServiceIcon = IconMap[service.icon] || WrenchScrewdriverIcon; 
                        
                        return (
                            <Link
                                key={service.id}
                                to={`/services/${service.name.toLowerCase().replace(/\s/g, '-')}`}
                                className="p-6 transition-all duration-300 transform hover:scale-[1.03] flex flex-col items-center group"
                                aria-label={`View details for ${service.name}`}
                            >
                                {/* Icon Container - White icons against the dark background */}
                                <div 
                                    className="w-12 h-12 mb-3 text-white transition-transform duration-300 group-hover:scale-110"
                                    itemProp="image"
                                >
                                    <ServiceIcon className="w-full h-full" />
                                </div>
                                
                                {/* Service Name */}
                                <h3 
                                    className="text-xl font-semibold mb-2 uppercase tracking-wider"
                                    itemProp="name"
                                >
                                    {service.name}
                                </h3>
                                
                                {/* Description */}
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