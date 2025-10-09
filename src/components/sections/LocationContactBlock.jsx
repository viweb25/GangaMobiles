import React from 'react';

const LocationContactBlock = () => {
    // Basic contact details for easy update
    const address = "No. 123, 100 Feet Road, Anna Nagar, Chennai - 600040";
    const phone = "+91 98765 43210";
    const email = "hello@gangamobiles.com";
    
    // Google Maps Embed URL (Replace with your actual map URL/iframe source)
    // You can get this by going to Google Maps, searching your business, clicking 'Share' -> 'Embed a map'.
    const mapEmbedUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15545.97541173678!2d80.20387435!3d13.08051935!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a526689d021c17f%3A0x67876a6b5a1f6424!2sAnna%20Nagar%2C%20Chennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1699000000000!5m2!1sen!2sin";

    return (
        <section className="py-16 sm:py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                <div className="text-center mb-10">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-800">
                        Visit Our Chennai Service Center
                    </h2>
                    <p className="mt-2 text-lg text-gray-600">
                        Quick, professional service is just around the corner.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12">
                    
                    {/* Left Column: Contact Details and Hours */}
                    <div className="bg-white p-6 sm:p-10 rounded-xl shadow-xl border border-gray-200" data-aos="fade-right">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6 border-b pb-3">
                            Contact & Timings
                        </h3>

                        {/* Address */}
                        <div className="mb-8">
                            <p className="text-lg font-semibold text-blue-700">Our Location</p>
                            <address className="text-gray-600 not-italic mt-1">
                                {address}
                            </address>
                            <a 
                                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className="text-teal-600 font-medium hover:text-teal-500 transition mt-2 inline-block"
                            >
                                View on Google Maps →
                            </a>
                        </div>

                        {/* Phone & Email */}
                        <div className="mb-8">
                            <p className="text-lg font-semibold text-blue-700">Get in Touch</p>
                            <p className="mt-1">
                                <span className="font-medium text-gray-800">Phone:</span> 
                                <a href={`tel:${phone}`} className="ml-2 text-gray-600 hover:text-blue-600 transition">{phone}</a>
                            </p>
                            <p className="mt-1">
                                <span className="font-medium text-gray-800">Email:</span> 
                                <a href={`mailto:${email}`} className="ml-2 text-gray-600 hover:text-blue-600 transition">{email}</a>
                            </p>
                        </div>

                        {/* Hours */}
                        <div>
                            <p className="text-lg font-semibold text-blue-700 mb-2">Service Hours</p>
                            <ul className="text-gray-600 space-y-1">
                                <li>
                                    <span className="font-medium w-24 inline-block">Mon - Sat:</span> 
                                    <span className="text-gray-800">9:00 AM – 9:00 PM</span>
                                </li>
                                <li>
                                    <span className="font-medium w-24 inline-block">Sunday:</span> 
                                    <span className="text-red-500 font-medium">Closed</span> (Or specify limited hours)
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Right Column: Embedded Map */}
                    <div className="rounded-xl shadow-xl overflow-hidden border-4 border-white" data-aos="fade-left">
                        <iframe
                            src={mapEmbedUrl}
                            width="100%"
                            height="550" // Increased height for visual prominence
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            title="Ganga Mobiles Chennai Location"
                        ></iframe>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default LocationContactBlock;