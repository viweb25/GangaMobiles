import React from 'react';

// Define the primary brand colors
const primaryRed = '#800000'; // Deep Red/Maroon
const linkAccentColor = '#FF4500'; // Orange-Red for bright contrast
const hoverBorderColor = '#B22222'; // Firebrick for hover border

// --- Branch Data (Updated) ---
const branchData = [
    {
        name: "Pallikaranai Branch",
        address: "No. 2/21, Velachery Rd, opposite Balaji Dental College.",
        phone: "+91 91761 00072", // Updated with primary number
        mapLink: "https://maps.app.goo.gl/PzS2S8t2mN4M8tE9A", // Placeholder link
        timing: "Mon - Sat: 10:00 AM – 8:30 PM",
        details: "Our primary service center, known for fast screen and battery replacements.",
    },
    {
        name: "Sithalapakkam Branch",
        address: "No. 182, Mambakkam Main Road.",
        phone: "+91 91761 XXXX1", // Placeholder, suggests specific contact
        mapLink: "https://maps.app.goo.gl/9R6q5rY3XwJ8k7G7H", // Placeholder link
        timing: "Mon - Sat: 10:00 AM – 8:00 PM",
        details: "Conveniently located for Sithalapakkam and Semmancheri residents. Specialized accessory sales.",
    },
    {
        name: "Narayanapuram Branch",
        address: "Near Medavakkam Tank, Narayanapuram, Chennai.",
        phone: "+91 91761 XXXX2", // Placeholder, suggests specific contact
        mapLink: "https://maps.app.goo.gl/K9jA2yZgL1N4G8rC6", // Placeholder link
        timing: "Mon - Sat: 10:30 AM – 7:30 PM",
        details: "Specializing in used phone sales, mobile accessories, and general repairs.",
    },
];

const Locations = () => {
    return (
        <div className="py-12 sm:py-20" style={{ backgroundColor: '#F9F9F9' }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <h1 
                    className="text-3xl sm:text-5xl font-extrabold text-gray-900 text-center"
                    style={{ color: primaryRed }}
                >
                    Our Chennai Locations
                </h1>
                <p className="mt-4 text-base sm:text-lg text-gray-600 text-center max-w-3xl mx-auto">
                    Visit any of our convenient branches across the city for expert repairs, quality accessories, and refurbished mobile sales.
                </p>
                
                {/* Branch Grid */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    
                    {branchData.map((branch, index) => (
                        <div 
                            key={index} 
                            data-aos="fade-up"
                            data-aos-delay={index * 150}
                            className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-gray-100 flex flex-col h-full transform transition duration-300 hover:shadow-2xl"
                            style={{ borderTop: `4px solid ${primaryRed}`, borderColor: primaryRed }}
                            onMouseEnter={(e) => e.currentTarget.style.borderColor = hoverBorderColor}
                            onMouseLeave={(e) => e.currentTarget.style.borderColor = primaryRed}
                        >
                            
                            <h2 
                                className="text-2xl font-bold mb-3 border-b pb-2"
                                style={{ color: linkAccentColor, borderBottomColor: '#fecaca' }}
                            >
                                {branch.name}
                            </h2>
                            
                            <p className="text-gray-700 mb-4 text-sm flex-grow">{branch.details}</p>

                            {/* Address */}
                            <div className="mb-4 pt-4 border-t border-gray-100">
                                <p className="font-semibold text-gray-900 flex items-center mb-1">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke={primaryRed} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>
                                    Address:
                                </p>
                                <address className="text-gray-600 not-italic text-sm ml-7">{branch.address}</address>
                            </div>

                            {/* Contact and Timings */}
                            <div className="space-y-2 mb-6">
                                <p className="text-sm flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke={primaryRed} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.5a1.5 1.5 0 010 3H5.5c-.3 0-.5.2-.5.5v13c0 .3.2.5.5.5h13c.3 0 .5-.2.5-.5v-2c0-.8.7-1.5 1.5-1.5s1.5.7 1.5 1.5v2c0 1.3-1.1 2.5-2.5 2.5H5.5A2.5 2.5 0 013 18.5V5z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.3 15.3l-2.7-2.7m0 0l-2.7-2.7m2.7 2.7l2.7-2.7m-2.7 2.7l-2.7 2.7"></path></svg>
                                    <span className="font-semibold text-gray-900">Call:</span>
                                    <a href={`tel:${branch.phone}`} className={`ml-2 text-gray-700 hover:text-red-600 transition`}>{branch.phone}</a>
                                </p>
                                <p className="text-sm flex items-center">
                                    <svg className="w-5 h-5 mr-2" fill="none" stroke={primaryRed} viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                                    <span className="font-semibold text-gray-900">Hours:</span>
                                    <span className="ml-2 text-gray-700 font-medium">{branch.timing}</span>
                                </p>
                            </div>
                            
                            {/* Action Button (Branded) */}
                            <div className="mt-auto"> {/* Pushes button to the bottom */}
                                <a 
                                    href={branch.mapLink} 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="w-full inline-flex items-center justify-center px-4 py-3 text-sm font-bold rounded-lg text-white transition duration-300 shadow-md transform hover:scale-[1.01]"
                                    style={{ backgroundColor: primaryRed }}
                                >
                                    Get Directions (Google Maps)
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
                
                {/* Call to action for other branches (Branded) */}
                <div className="mt-12 text-center pt-8 border-t border-gray-200">
                    <p className="text-lg text-gray-700">
                        We have other outlets in Vandalur and Villivakkam. Please contact us for their specific details.
                    </p>
                    <a 
                        href="/contact" 
                        className={`mt-4 inline-block text-xl font-bold transition`}
                        style={{ color: linkAccentColor }}
                    >
                        Contact Us for More Branches →
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Locations;