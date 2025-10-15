import React from 'react';

const LocationContactBlock = () => {
    // Define the primary brand color
    const primaryRed = '#800000'; // Deep Red/Maroon
    const linkAccentColorClass = 'text-[#800000]'; // Accent color for links (matches primaryRed)
    const hoverAccentColorClass = 'hover:text-[#FF4500]'; // Orange-Red for bright hover contrast
    const lightRedBackground = '#fef2f2'; // Very light red for section background
    
    // Actual contact details for Pallikaranai Branch
    const address = "No. 2/21, Velachery Road, Opposite Balaji Dental College, Pallikaranai, Chennai - 600100";
    const phone = "+91 91761 00072";
    const email = "sales@gangamobiles.com";
    
    // Google Maps Embed URL for Pallikaranai (Use your actual iframe source from Google Maps)
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.97541173678!2d80.20387435!3d13.08051935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526689d021c17f%3A0x67876a6b5a1f6424!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin";

    return (
        <section className="py-16 sm:py-20" style={{ backgroundColor: lightRedBackground }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-10">
                    <h2 
                        className="text-3xl sm:text-4xl font-extrabold text-gray-900" 
                        style={{ color: primaryRed }}
                    >
                        Visit Our Pallikaranai Service Center
                    </h2>
                    <p className="mt-2 text-lg text-gray-600">
                        Quick, professional service is just around the corner. We look forward to seeing you!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
                    
                    {/* Left Column: Contact Details and Hours */}
                    <div className="bg-white p-6 sm:p-10 rounded-xl shadow-2xl border border-gray-100" data-aos="fade-right">
                        <h3 
                            className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3"
                            style={{ borderBottomColor: primaryRed, color: primaryRed }}
                        >
                            Contact & Timings
                        </h3>

                        {/* Address */}
                        <div className="mb-8">
                            <p className="text-lg font-semibold" style={{ color: primaryRed }}>Our Location</p>
                            <address className="text-gray-700 not-italic mt-1 text-base">
                                {address}
                            </address>
                            <a 
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`font-medium transition mt-2 inline-block ${linkAccentColorClass} ${hoverAccentColorClass}`}
                            >
                                Get Directions on Google Maps →
                            </a>
                        </div>

                        {/* Phone & Email */}
                        <div className="mb-8">
                            <p className="text-lg font-semibold" style={{ color: primaryRed }}>Get in Touch</p>
                            <p className="mt-1">
                                <span className="font-medium text-gray-800">Phone:</span> 
                                <a href={`tel:${phone}`} className={`ml-2 text-gray-700 ${hoverAccentColorClass} transition`}>{phone}</a>
                            </p>
                            <p className="mt-1">
                                <span className="font-medium text-gray-800">Email:</span> 
                                <a href={`mailto:${email}`} className={`ml-2 text-gray-700 ${hoverAccentColorClass} transition`}>{email}</a>
                            </p>
                        </div>

                        {/* Hours */}
                        <div>
                            <p className="text-lg font-semibold" style={{ color: primaryRed }}>Service Hours</p>
                            <ul className="text-gray-700 space-y-1 mt-2">
                                <li>
                                    <span className="font-medium w-24 inline-block">Mon - Sat:</span> 
                                    <span className="text-gray-900 font-semibold">9:00 AM – 9:00 PM</span>
                                </li>
                                <li>
                                    <span className="font-medium w-24 inline-block">Sunday:</span> 
                                    <span className="text-red-600 font-bold">Closed</span>
                                </li>
                            </ul>
                            <div className="mt-4 p-3 rounded-lg text-sm" style={{ backgroundColor: lightRedBackground, border: `1px solid ${primaryRed}` }}>
                                <p className="text-gray-700 font-medium">For urgent inquiries, please call or use our WhatsApp quote system.</p>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Embedded Map */}
                    <div className="rounded-xl shadow-2xl overflow-hidden border-4 border-white" data-aos="fade-left">
                        <iframe
                            src={mapEmbedUrl}
                            width="100%"
                            height="550" 
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Ganga Mobiles Pallikaranai Location"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LocationContactBlock;