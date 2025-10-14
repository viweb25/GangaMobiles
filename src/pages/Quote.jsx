import React, { useState } from 'react';

// Define Brand and WhatsApp Details
const primaryRed = '#800000'; // Deep Red/Maroon
const lightRed = '#FCE7E7'; // Light Red for backgrounds
const whatsAppGreen = '#4dc247';
const WHATSAPP_NUMBER = '919176100072';
const WHATSAPP_BASE_URL = `https://wa.me/${WHATSAPP_NUMBER}`;

const Quote = () => {
    // State to manage form input
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        brand: '',
        model: '',
        service: '',
        issue: '',
    });

    // State to manage the success message display (after redirecting to WhatsApp)
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Function to generate the WhatsApp link with pre-filled message
    const generateWhatsAppLink = () => {
        const { name, phone, email, brand, model, service, issue } = formData;
        
        // Detailed, organized message for the technician
        const message = encodeURIComponent(
            `*Repair Quote Request - Website*\n` +
            `-----------------------------------\n\n` +
            `*Customer:* ${name || 'N/A'}\n` +
            `*Phone:* ${phone || 'N/A'}\n` +
            `*Email:* ${email || 'N/A'}\n\n` +
            `*Device:* ${brand || 'N/A'} ${model || 'N/A'}\n` +
            `*Service:* ${service || 'Not Selected'}\n` +
            `*Issue Details:*\n${issue || 'No detailed description provided.'}\n\n` +
            `_Please send the preliminary quote via email as requested._`
        );
        return `${WHATSAPP_BASE_URL}?text=${message}`;
    };

    // Determine if the WhatsApp button should be enabled
    const isFormValid = formData.name && formData.phone && formData.brand && formData.model && formData.issue;
    
    // Handle the button click (triggers WhatsApp redirect)
    const handleWhatsAppSubmit = (e) => {
        if (!isFormValid) {
            e.preventDefault();
            alert("Please fill in all required fields (Name, Phone, Brand, Model, and Issue Details) before proceeding to WhatsApp.");
            return;
        }

        // Redirect to WhatsApp
        const link = generateWhatsAppLink();
        window.open(link, '_blank');
        
        // Show success/instruction message on the page
        setIsSubmitted(true);
        window.scrollTo(0, 0); 
    };

    // --- Final Success Message Component ---
    if (isSubmitted) {
        return (
            <div className="bg-white py-20 sm:py-32" style={{ backgroundColor: lightRed }}>
                <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <svg className="mx-auto h-16 w-16" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" style={{ color: primaryRed }}>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mt-4" style={{ color: primaryRed }}>
                        One Step Closer to Your Quote!
                    </h1>
                    <p className="mt-4 text-lg text-gray-700">
                        We are waiting for you on **WhatsApp**. Please hit 'Send' in the app to immediately transmit your detailed request to our technician.
                    </p>
                    
                    <div className="mt-8 pt-6 border-t border-red-200">
                        <h2 className="text-xl font-bold text-gray-800">Need immediate confirmation?</h2>
                        <p className="mt-2 text-gray-600">
                            Call us right away to confirm receipt and accelerate your quote process.
                        </p>
                        
                        {/* Button for Booking a Call (Branded Red) */}
                        <a
                            href={`tel:+919176100072`} 
                            className="mt-4 w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 border-2 border-transparent text-base font-bold rounded-full shadow-lg text-white transform hover:scale-105 transition duration-300 uppercase"
                            style={{ backgroundColor: primaryRed, borderColor: primaryRed }}
                        >
                            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M14.417 10.583a.833.833 0 011.666 0v2.5a4.167 4.167 0 01-4.166 4.167h-3.334a4.167 4.167 0 01-4.167-4.167v-3.334a4.167 4.167 0 014.167-4.166h2.5a.833.833 0 010 1.666h-2.5a2.5 2.5 0 00-2.5 2.5v3.334a2.5 2.5 0 002.5 2.5h3.334a2.5 2.5 0 002.5-2.5v-2.5z"></path></svg>
                            Call Now (+91 91761 00072)
                        </a>
                    </div>
                </div>
            </div>
        );
    }

    // --- Initial Quote Form (Uses WhatsApp CTA) ---
    return (
        <div className="bg-gray-50 py-16 sm:py-24">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 text-center" style={{ color: primaryRed }}>
                    Instant Repair Quote via WhatsApp
                </h1>
                <p className="mt-4 text-base sm:text-lg text-gray-600 text-center max-w-2xl mx-auto">
                    Fill out the details below and get an **instant quote sent directly to our technicians** via WhatsApp for the fastest service.
                </p>
                <div className="mt-12 max-w-3xl mx-auto bg-white p-6 sm:p-12 rounded-2xl shadow-2xl border-t-4" style={{ borderColor: primaryRed }}>
                    
                    <form className="space-y-8">
                        
                        <h3 className="text-xl font-bold text-gray-800 border-b pb-3" style={{ color: primaryRed }}>1. Your Contact Details</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Your Full Name *"
                                required
                                className="col-span-1 w-full px-5 py-3 rounded-lg border-2 border-gray-300 text-gray-700 focus:outline-none focus:ring-4"
                                style={{ '--tw-ring-color': primaryRed }}
                            />
                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Phone Number *"
                                required
                                className="col-span-1 w-full px-5 py-3 rounded-lg border-2 border-gray-300 text-gray-700 focus:outline-none focus:ring-4"
                                style={{ '--tw-ring-color': primaryRed }}
                            />
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Email Address (For Quote Copy)"
                                className="col-span-1 w-full px-5 py-3 rounded-lg border-2 border-gray-300 text-gray-700 focus:outline-none focus:ring-4"
                                style={{ '--tw-ring-color': primaryRed }}
                            />
                        </div>

                        <h3 className="text-xl font-bold text-gray-800 border-b pb-3 pt-4" style={{ color: primaryRed }}>2. Device & Service Information</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <input
                                type="text"
                                name="brand"
                                value={formData.brand}
                                onChange={handleChange}
                                placeholder="Brand (e.g., Apple) *"
                                required
                                className="w-full px-5 py-3 rounded-lg border-2 border-gray-300 text-gray-700 focus:outline-none focus:ring-4"
                                style={{ '--tw-ring-color': primaryRed }}
                            />
                            <input
                                type="text"
                                name="model"
                                value={formData.model}
                                onChange={handleChange}
                                placeholder="Model (e.g., iPhone 13) *"
                                required
                                className="w-full px-5 py-3 rounded-lg border-2 border-gray-300 text-gray-700 focus:outline-none focus:ring-4"
                                style={{ '--tw-ring-color': primaryRed }}
                            />
                            <select
                                name="service"
                                value={formData.service}
                                onChange={handleChange}
                                required
                                className="w-full px-5 py-3 rounded-lg border-2 border-gray-300 text-gray-700 focus:outline-none focus:ring-4"
                                style={{ '--tw-ring-color': primaryRed }}
                            >
                                <option value="" disabled>Select Primary Service *</option>
                                <option value="Screen Repair">Screen Repair / Display Change</option>
                                <option value="Battery">Battery Replacement</option>
                                <option value="Charging Port">Charging Port Fix</option>
                                <option value="Camera">Camera / Speaker Issues</option>
                                <option value="Water Damage">Water Damage / Liquid Exposure</option>
                                <option value="Other">Other / Unknown Issue</option>
                            </select>
                        </div>
                        
                        <textarea
                            name="issue"
                            value={formData.issue}
                            onChange={handleChange}
                            placeholder="Describe the issue in detail (e.g., 'Screen is black but vibrates', 'Phone drains battery fast') *"
                            rows="4"
                            required
                            className="w-full px-5 py-3 rounded-lg border-2 border-gray-300 text-gray-700 focus:outline-none focus:ring-4"
                            style={{ '--tw-ring-color': primaryRed }}
                        ></textarea>
                        
                        {/* WhatsApp Submit Button */}
                        <a
                            href={isFormValid ? generateWhatsAppLink() : '#'}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleWhatsAppSubmit}
                            className={`w-full flex items-center justify-center py-4 rounded-xl text-white font-extrabold text-lg transition duration-200 shadow-xl uppercase tracking-wider ${
                                isFormValid
                                    ? 'hover:scale-[1.01]'
                                    : 'opacity-60 cursor-not-allowed'
                            }`}
                            style={{ backgroundColor: whatsAppGreen }}
                        >
                            <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C6.5 2 2 6.5 2 12c0 2.8 1.1 5.4 2.9 7.3l-1.9 1.9c-.3.3-.2.8.1 1.1.2.2.5.3.7.3h.1l3.5-1.9c1.9.7 3.9 1.1 6.1 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2zm3.3 14.7c-.2.2-.4.3-.7.3s-.5-.1-.7-.3l-2-2.5c-.3-.4-.7-.7-1.2-.7-.5 0-.9.3-1.2.7l-2.4 3c-.3.4-.7.7-1.2.7-.4 0-.8-.2-1.1-.4-.3-.3-.5-.7-.5-1.1v-2.1c0-.4.3-.7.7-.7h1.4c.4 0 .7.3.7.7v1.4c0 .3.1.5.3.6.2.1.4.2.6.2s.4-.1.6-.2l2-2.5c.3-.4.7-.7 1.2-.7s.9.3 1.2.7l2.4 3c.3.4.7.7 1.2.7s.9-.3 1.2-.7c.3-.4.5-.9.5-1.4V8.4c0-.4-.3-.7-.7-.7h-1.4c-.4 0-.7-.3-.7-.7V6.9c0-.4.3-.7.7-.7h2.1c.9 0 1.6.3 2.1.8.5.5.8 1.2.8 2v5.7c0 .5-.2 1-.5 1.4z" fill="#fff"/>
                            </svg>
                            {isFormValid ? 'Send Request & Get Quote via WhatsApp' : 'Fill All Required Fields'}
                        </a>
                        
                        <p className="text-sm text-gray-500 text-center pt-2">
                            * Required fields. Your quote will be sent back via email/WhatsApp message.
                        </p>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default Quote;