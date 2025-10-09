import React from 'react';

// --- Branch Data ---
const branchData = [
    {
        name: "Pallikaranai Branch",
        address: "No. 2/21, Velachery Rd, opposite Balaji Dental College.",
        phone: "+91 91761 00072",
        mapLink: "https://maps.app.goo.gl/PzS2S8t2mN4M8tE9A", // Placeholder link
        timing: "Mon - Sat: 10:00 AM – 8:30 PM",
        details: "Our primary service center, known for fast screen and battery replacements.",
    },
    {
        name: "Sithalapakkam Branch",
        address: "No. 182, Mambakkam Main Road.",
        phone: "Available on request", // Contact number not specified, using placeholder
        mapLink: "https://maps.app.goo.gl/9R6q5rY3XwJ8k7G7H", // Placeholder link
        timing: "Mon - Sat: 10:00 AM – 8:00 PM",
        details: "Conveniently located for Sithalapakkam and Semmancheri residents.",
    },
    {
        name: "Narayanapuram Branch",
        address: "Near Medavakkam Tank, Narayanapuram, Chennai.",
        phone: "Available on request",
        mapLink: "https://maps.app.goo.gl/K9jA2yZgL1N4G8rC6", // Placeholder link
        timing: "Mon - Sat: 10:30 AM – 7:30 PM",
        details: "Specializing in used phone sales and mobile accessories.",
    },
];

const Locations = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <h1 className="text-3xl sm:text-5xl font-extrabold text-blue-800 text-center">
          Our Chennai Locations
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 text-center max-w-3xl mx-auto">
          Visit any of our convenient branches across the city for expert repairs, quality accessories, and refurbished mobile sales.
        </p>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {branchData.map((branch, index) => (
            <div 
              key={index} 
              data-aos="fade-up"
              data-aos-delay={index * 150}
              className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-gray-100 flex flex-col h-full transform transition duration-300 hover:shadow-2xl hover:border-teal-400"
            >
              
              <h2 className="text-2xl font-bold text-teal-600 mb-3 border-b pb-2">
                {branch.name}
              </h2>
              
              <p className="text-gray-700 mb-4">{branch.details}</p>

              {/* Address */}
              <div className="mb-4">
                <p className="font-semibold text-gray-900">Address:</p>
                <address className="text-gray-600 not-italic text-sm">{branch.address}</address>
              </div>

              {/* Contact and Timings */}
              <div className="space-y-2 mb-6">
                <p className="text-sm">
                  <span className="font-semibold text-gray-900">Call:</span>
                  <a href={`tel:${branch.phone}`} className="ml-2 text-blue-600 hover:underline">{branch.phone}</a>
                </p>
                <p className="text-sm">
                  <span className="font-semibold text-gray-900">Hours:</span>
                  <span className="ml-2 text-gray-700 font-medium">{branch.timing}</span>
                </p>
              </div>
              
              {/* Action Button */}
              <div className="mt-auto"> {/* Pushes button to the bottom */}
                <a 
                  href={branch.mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center px-4 py-2 border-2 border-teal-500 text-sm font-semibold rounded-lg text-teal-500 hover:bg-teal-500 hover:text-white transition duration-200 shadow-md"
                >
                  Get Directions (Google Maps)
                </a>
              </div>
            </div>
          ))}
        </div>
        
        {/* Call to action for other branches */}
        <div className="mt-12 text-center pt-8 border-t border-gray-200">
             <p className="text-lg text-gray-700">
                We have other outlets in Vandalur and Villivakkam. Please contact us for their specific details.
             </p>
             <a 
                href="/contact" 
                className="mt-4 inline-block text-xl font-bold text-blue-700 hover:text-blue-500 transition"
            >
                Contact Us for More Branches →
            </a>
        </div>

      </div>
    </div>
  );
};

export default Locations;