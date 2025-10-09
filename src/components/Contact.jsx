import React from 'react';

// --- Contact and Location Data ---
const contactInfo = {
    mainPhone: '+91 91761 00072', // Pallikaranai branch phone for primary contact
    email: 'support@gangamobiles.com',
    timing: 'Mon - Sat: 10:00 AM – 8:30 PM',
};

const locations = [
    {
        name: "Pallikaranai Branch (Primary)",
        address: "No. 2/21, Velachery Rd, opposite Balaji Dental College.",
        phone: "+91 91761 00072",
        mapLink: "http://googleusercontent.com/maps.google.com/5", // Placeholder
    },
    {
        name: "Sithalapakkam Branch",
        address: "No. 182, Mambakkam Main Road.",
        phone: "Available on request",
        mapLink: "http://googleusercontent.com/maps.google.com/6", // Placeholder
    },
];

const Contact = () => {
  return (
    <div className="bg-gray-50 py-12 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-800">
            Get In Touch with Ganga Mobiles
          </h1>
          <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
            Visit one of our Chennai centers or send us a message. We're here to help!
          </p>
        </div>

        {/* Contact Grid: Form & Info */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">

          {/* Column 1 & 2: Contact Form (Takes up 2/3 width on large screens) */}
          <div className="lg:col-span-2 bg-white p-6 sm:p-10 rounded-xl shadow-2xl border border-gray-100" data-aos="fade-right">
            <h2 className="text-2xl font-bold text-teal-600 mb-6 border-b pb-3">
              Send Us a Message
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400" />
                <input type="email" placeholder="Email Address" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400" />
              </div>
              <input type="tel" placeholder="Phone Number" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400" />
              <textarea placeholder="Tell us about your query (e.g., specific repair issue, used phone inquiry)" rows="5" required className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-teal-400"></textarea>
              <button
                type="submit"
                className="w-full bg-blue-800 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition duration-300 shadow-md uppercase tracking-wider"
              >
                Submit Inquiry
              </button>
            </form>
          </div>

          {/* Column 3: Contact Details & Hours */}
          <div className="bg-white p-6 sm:p-8 rounded-xl shadow-xl border border-gray-200" data-aos="fade-left">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">
              Quick Info
            </h2>
            
            {/* Phone */}
            <div className="mb-6">
                <p className="text-lg font-semibold text-teal-600">Primary Contact</p>
                <p className="mt-1 text-2xl font-extrabold text-blue-800">
                    <a href={`tel:${contactInfo.mainPhone}`} className="hover:underline">{contactInfo.mainPhone}</a>
                </p>
                <p className="text-sm text-gray-500">Call the Pallikaranai branch directly.</p>
            </div>

            {/* Email */}
            <div className="mb-6">
                <p className="text-lg font-semibold text-teal-600">Email Support</p>
                <a href={`mailto:${contactInfo.email}`} className="text-gray-700 hover:text-blue-600 transition">
                    {contactInfo.email}
                </a>
            </div>

            {/* Hours */}
            <div className="mb-6">
                <p className="text-lg font-semibold text-teal-600">Operating Hours</p>
                <p className="text-gray-700 font-medium mt-1">{contactInfo.timing}</p>
                <p className="text-sm text-gray-500">For repair drop-offs & sales.</p>
            </div>

            <hr className="my-4"/>
            
            {/* Location Links */}
            <div>
                 <h3 className="text-lg font-bold text-gray-900 mb-3">Our Main Locations</h3>
                 {locations.map((loc, index) => (
                    <div key={index} className="mb-3">
                        <p className="font-semibold text-gray-800">{loc.name}</p>
                        <p className="text-sm text-gray-600">{loc.address}</p>
                        <a 
                            href={loc.mapLink} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="text-teal-600 text-sm hover:underline mt-1 inline-block"
                        >
                            Get Directions →
                        </a>
                    </div>
                 ))}
                 <a href="/locations" className="text-blue-600 font-bold hover:text-blue-500 transition mt-3 inline-block">
                    View All Branches
                </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;