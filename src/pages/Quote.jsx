import React, { useState } from 'react';

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

  // State to manage the success message display
  const [isSubmitted, setIsSubmitted] = useState(false);

  // State to manage form submission loading (UX touch)
  const [isLoading, setIsLoading] = useState(false);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 1. Placeholder for the backend submission (Email trigger)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    // --- REAL-WORLD IMPLEMENTATION: ---
    // Here, you would send formData to your backend API endpoint (e.g., using Axios or Fetch)
    // The backend would handle validation, saving the quote, and triggering an email notification (e.g., SendGrid/Nodemailer).

    console.log('Quote Request Submitted:', formData);

    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500)); 

    setIsLoading(false);
    setIsSubmitted(true); // Show success message
    window.scrollTo(0, 0); // Scroll to top on success
  };

  // --- Final Success Message Component ---
  if (isSubmitted) {
    return (
      <div className="bg-green-50 py-20 sm:py-32">
        <div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <svg className="mx-auto h-16 w-16 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-green-700 mt-4">
            Quote Received Successfully!
          </h1>
          <p className="mt-4 text-lg text-gray-700">
            Thank you, **{formData.name}**! We have received your request and our technician will review it. You should receive your preliminary quote via email within 1 hour.
          </p>
          
          <div className="mt-8 pt-6 border-t border-gray-200">
             <h2 className="text-xl font-bold text-blue-800">Need a faster resolution?</h2>
             <p className="mt-2 text-gray-600">
               Book a quick, zero-obligation consultation call with us now!
             </p>
             
             {/* 2. Button for Booking a Call */}
             <a
               href={`tel:+919176100072`} // Use the primary branch phone number
               className="mt-4 w-full sm:w-auto inline-flex justify-center items-center px-8 py-3 border-2 border-transparent text-base font-bold rounded-full shadow-lg text-white bg-blue-600 hover:bg-blue-700 transform hover:scale-105 transition duration-300 uppercase"
             >
               <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path d="M14.417 10.583a.833.833 0 011.666 0v2.5a4.167 4.167 0 01-4.166 4.167h-3.334a4.167 4.167 0 01-4.167-4.167v-3.334a4.167 4.167 0 014.167-4.166h2.5a.833.833 0 010 1.666h-2.5a2.5 2.5 0 00-2.5 2.5v3.334a2.5 2.5 0 002.5 2.5h3.334a2.5 2.5 0 002.5-2.5v-2.5z"></path></svg>
               Call Us Right Away (+91 91761 00072)
             </a>
          </div>
        </div>
      </div>
    );
  }

  // --- Initial Quote Form ---
  return (
    <div className="bg-white py-12 sm:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-800 text-center">
          Get Your Free Repair Quote
        </h1>
        <p className="mt-4 text-base sm:text-lg text-gray-600 text-center max-w-2xl mx-auto">
          Tell us about your device and the issue. Our Chennai expert will analyze your request and send a preliminary quote straight to your inbox.
        </p>
        <div className="mt-10 max-w-3xl mx-auto bg-gray-50 p-6 sm:p-10 rounded-xl shadow-2xl border border-gray-100">
          <form className="space-y-6" onSubmit={handleSubmit}>
            
            <h3 className="text-xl font-bold text-teal-600 border-b pb-2 mb-4">1. Your Contact Details</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Full Name"
                required
                className="col-span-1 w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone Number (e.g., 9176100072)"
                required
                className="col-span-1 w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                required
                className="col-span-1 w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
            </div>

            <h3 className="text-xl font-bold text-teal-600 border-b pb-2 pt-4 mb-4">2. Device Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="brand"
                value={formData.brand}
                onChange={handleChange}
                placeholder="Brand (e.g., Apple, Samsung)"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <input
                type="text"
                name="model"
                value={formData.model}
                onChange={handleChange}
                placeholder="Model (e.g., iPhone 12, Galaxy S21)"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
              >
                <option value="" disabled>Select Primary Service</option>
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
              placeholder="Please describe the issue in detail (e.g., 'Screen is black but vibrates', 'Phone drains battery fast')"
              rows="4"
              required
              className="w-full px-4 py-3 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400"
            ></textarea>
            
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full font-bold py-3 rounded-lg shadow-lg transition duration-200 uppercase tracking-wider ${
                isLoading
                  ? 'bg-gray-400 text-gray-700 cursor-not-allowed'
                  : 'bg-teal-500 text-white hover:bg-teal-600'
              }`}
            >
              {isLoading ? (
                <svg className="animate-spin h-5 w-5 mr-3 inline-block" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" className="opacity-25"></circle><path fill="currentColor" className="opacity-75" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
              ) : (
                'Submit Request & Get Quote'
              )}
            </button>
            
            <p className="text-sm text-gray-500 text-center pt-2">
              All quotes are free and non-binding. We respect your privacy.
            </p>

          </form>
        </div>
      </div>
    </div>
  );
};

export default Quote;