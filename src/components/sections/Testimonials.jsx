// src/components/sections/Testimonials.jsx

import React from 'react';

// --- Sample Testimonial Data (UPDATED for Chennai) ---
const testimonials = [
  {
    id: 1,
    quote: "The team fixed my iPhone 13 screen perfectly in under 45 minutes! The price was fair, and the quality is excellent. They even gave me a free screen protector. Highly recommend Ganga Mobiles for quick, reliable repair.",
    name: "Aarav Sharma",
    title: "iPhone 13 Screen Repair",
    location: "Anna Nagar, Chennai",
  },
  {
    id: 2,
    quote: "I bought a refurbished Samsung Galaxy S23 from them, and it was virtually new. Battery health is 98%, and the 6-month warranty gave me great peace of mind. Excellent sales service—much better than the online marketplaces.",
    name: "Priya Varma",
    title: "Refurbished Mobile Purchase",
    location: "Tambaram, Chennai",
  },
  {
    id: 3,
    quote: "My OnePlus charging port was dead. Ganga Mobiles replaced the entire flex assembly quickly. Their technician was very professional and explained the cost upfront. I'm back to warp charging! Thank you!",
    name: "Vikas Reddy",
    title: "OnePlus Charging Port Fix",
    location: "Velachery, Chennai",
  },
];

const Testimonials = () => {
  return ( 
    <section className="py-12 sm:py-16 bg-gray-50"> {/* Subtle gray background for contrast */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-sm font-semibold uppercase text-[#800000] tracking-wider">
            {/* Accent color changed to Deep Red/Maroon */}
            Trusted by Our Community
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-blue-800 mt-2">
            {/* Header color changed to Deep Blue */}
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid (Centered) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              data-aos="fade-up"
              data-aos-delay={index * 150}
              // Card styling refined: white background, softer shadow, prominent hover
              className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl border border-gray-100 flex flex-col justify-between h-full transform hover:scale-[1.02] hover:shadow-2xl transition duration-300"
            >
              <div>
                {/* Quote Icon - Color changed to Deep Red/Maroon */}
                <svg className="w-8 h-8 text-[#800000] mb-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M13.25 18H10V10H6.75C6.34 10 6 9.66 6 9.25V5.75C6 5.34 6.34 5 6.75 5H10.5V8.5H13.25C13.66 8.5 14 8.84 14 9.25V17.25C14 17.66 13.66 18 13.25 18ZM20.25 18H17V10H13.75C13.34 10 13 9.66 13 9.25V5.75C13 5.34 13.34 5 13.75 5H17.5V8.5H20.25C20.66 8.5 21 8.84 21 9.25V17.25C21 17.66 20.66 18 20.25 18Z" />
                </svg>

                {/* Quote Text */}
                <p className="text-lg text-gray-700 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Customer Info */}
              <div className="border-t border-gray-100 pt-4"> {/* Lighter divider line */}
                <p className="text-lg font-bold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-blue-800 font-medium mt-0.5">{testimonial.title}</p>
                <p className="text-xs text-gray-500 mt-1">📍 {testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;