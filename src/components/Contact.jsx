import React, { useState } from 'react';

// --- Contact and Location Data (UNCHANGED) ---
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

// Define Brand and WhatsApp Details
const primaryRed = '#800000'; // Deep Red/Maroon
const whatsAppGreen = '#4dc247';
const WHATSAPP_NUMBER = '919176100072';
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const Contact = () => {
    // State to capture the user's query for the WhatsApp link
    const [name, setName] = useState('');
    const [query, setQuery] = useState('');

    const generateWhatsAppLink = () => {
        // Construct the personalized message
        const message = encodeURIComponent(
            `*New Website Inquiry*\n\nName: ${name || 'N/A'}\nQuery: ${query || 'Need assistance with a repair or purchase.'}\n\nThank you!`
        );
        return `${WHATSAPP_BASE_URL}?text=${message}`;
    };

    return (
        <div className="bg-gray-50 py-16 sm:py-24">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Header */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900">
                        Connect with Ganga Mobiles
                    </h1>
                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                        Get instant support for repairs, spares, or mobile purchases. **Message us on WhatsApp now!**
                    </p>
                </div>

                {/* Contact Grid: WhatsApp Inquiry & Info */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Column 1 & 2: WhatsApp Inquiry (Takes up 2/3 width on large screens) */}
                    <div className="lg:col-span-2 bg-white p-6 sm:p-12 rounded-3xl shadow-2xl border-t-8" style={{ borderColor: primaryRed }}>
                        <h2 className="text-3xl font-bold text-gray-900 mb-8 border-b pb-4" style={{ color: primaryRed }}>
                            Instant Support via WhatsApp
                        </h2>
                        
                        <div className="space-y-6">
                            {/* Input for Name */}
                            <input 
                                type="text" 
                                placeholder="Your Name (Required for WhatsApp message)" 
                                required 
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 text-gray-800 transition duration-300 focus:outline-none focus:ring-4" 
                                style={{ '--tw-ring-color': primaryRed }}
                            />
                            
                            {/* Textarea for Query */}
                            <textarea 
                                placeholder="Tell us your query (e.g., iPhone 13 screen replacement price, availability of Samsung battery)" 
                                rows="6" 
                                required 
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="w-full px-5 py-4 rounded-xl border-2 border-gray-300 text-gray-800 transition duration-300 focus:outline-none focus:ring-4"
                                style={{ '--tw-ring-color': primaryRed }}
                            ></textarea>
                            
                            {/* WhatsApp Button (Primary CTA) */}
                            <a
                                href={generateWhatsAppLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                disabled={!name} // Disable if name is empty
                                className={`w-full flex items-center justify-center py-4 rounded-xl text-white font-extrabold text-lg transition duration-300 shadow-xl ${
                                    name ? 'hover:scale-[1.01]' : 'opacity-60 cursor-not-allowed'
                                }`}
                                style={{ backgroundColor: whatsAppGreen }}
                            >
                                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 2C6.5 2 2 6.5 2 12c0 2.8 1.1 5.4 2.9 7.3l-1.9 1.9c-.3.3-.2.8.1 1.1.2.2.5.3.7.3h.1l3.5-1.9c1.9.7 3.9 1.1 6.1 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2zm3.3 14.7c-.2.2-.4.3-.7.3s-.5-.1-.7-.3l-2-2.5c-.3-.4-.7-.7-1.2-.7-.5 0-.9.3-1.2.7l-2.4 3c-.3.4-.7.7-1.2.7-.4 0-.8-.2-1.1-.4-.3-.3-.5-.7-.5-1.1v-2.1c0-.4.3-.7.7-.7h1.4c.4 0 .7.3.7.7v1.4c0 .3.1.5.3.6.2.1.4.2.6.2s.4-.1.6-.2l2-2.5c.3-.4.7-.7 1.2-.7s.9.3 1.2.7l2.4 3c.3.4.7.7 1.2.7s.9-.3 1.2-.7c.3-.4.5-.9.5-1.4V8.4c0-.4-.3-.7-.7-.7h-1.4c-.4 0-.7-.3-.7-.7V6.9c0-.4.3-.7.7-.7h2.1c.9 0 1.6.3 2.1.8.5.5.8 1.2.8 2v5.7c0 .5-.2 1-.5 1.4z" fill="#fff"/>
                                </svg>
                                Send Details via WhatsApp
                            </a>
                            <p className="text-center text-sm text-gray-500 mt-3">
                                No email queues! Your message will open directly in the WhatsApp app.
                            </p>
                        </div>
                    </div>

                    {/* Column 3: Contact Details & Hours (Branded Styling) */}
                    <div className="bg-white p-6 sm:p-8 rounded-3xl shadow-xl border-b-8" style={{ borderBottomColor: primaryRed }}>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3" style={{ borderBottomColor: primaryRed }}>
                            Quick Info
                        </h2>
                        
                        {/* Phone */}
                        <div className="mb-6 border-l-4 pl-4" style={{ borderColor: primaryRed }}>
                            <p className="text-lg font-semibold" style={{ color: primaryRed }}>Primary Contact</p>
                            <p className="mt-1 text-2xl font-extrabold text-gray-900">
                                <a href={`tel:${contactInfo.mainPhone}`} className="hover:underline">{contactInfo.mainPhone}</a>
                            </p>
                            <p className="text-sm text-gray-600">Call the Pallikaranai branch directly.</p>
                        </div>

                        {/* Email */}
                        <div className="mb-6 border-l-4 pl-4" style={{ borderColor: primaryRed }}>
                            <p className="text-lg font-semibold" style={{ color: primaryRed }}>Email Support</p>
                            <a href={`mailto:${contactInfo.email}`} className="text-gray-700 hover:text-red-600 transition">
                                {contactInfo.email}
                            </a>
                        </div>

                        {/* Hours */}
                        <div className="mb-6 border-l-4 pl-4" style={{ borderColor: primaryRed }}>
                            <p className="text-lg font-semibold" style={{ color: primaryRed }}>Operating Hours</p>
                            <p className="text-gray-900 font-medium mt-1">{contactInfo.timing}</p>
                            <p className="text-sm text-gray-600">For repair drop-offs & sales.</p>
                        </div>

                        <hr className="my-6 border-gray-200"/>
                        
                        {/* Location Links */}
                        <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ color: primaryRed }}>Our Main Locations</h3>
                            {locations.map((loc, index) => (
                                <div key={index} className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200">
                                    <p className="font-bold text-gray-900">{loc.name}</p>
                                    <p className="text-sm text-gray-700 mt-1">{loc.address}</p>
                                    <a 
                                        href={loc.mapLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="text-sm font-semibold hover:underline mt-2 inline-block"
                                        style={{ color: primaryRed }}
                                    >
                                        Get Directions →
                                    </a>
                                </div>
                            ))}
                            <a href="/locations" className="font-bold transition mt-3 inline-block" style={{ color: primaryRed }}>
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