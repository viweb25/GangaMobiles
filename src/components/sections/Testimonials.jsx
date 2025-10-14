// src/components/sections/Testimonials.jsx

import React from 'react';

// --- Brand Colors ---
const primaryRed = '#800000'; // Deep Red/Maroon
const lightRedBg = '#FEF2F2'; // Very light red background for cards
const sectionBg = '#FFFFFF';   // Pure white background for the whole section

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
    <section className="py-16 sm:py-24" style={{ backgroundColor: sectionBg }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-16">
          <p className="text-sm font-semibold uppercase tracking-wider" style={{ color: primaryRed }}>
            Trusted by Our Community
          </p>
          <h2 
            className="text-3xl sm:text-4xl font-extrabold mt-2"
            style={{ color: primaryRed }}
          >
            What Our Customers Say
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id} 
              data-aos="fade-up"
              data-aos-delay={index * 150}
              // Card styling: lighter background, subtle shadow, prominent red hover border
              className="p-6 sm:p-8 rounded-2xl shadow-lg flex flex-col justify-between h-full transform transition duration-300 hover:shadow-2xl border-b-4"
              style={{ backgroundColor: lightRedBg, borderColor: 'transparent' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = primaryRed; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'transparent'; }}
            >
              <div>
                {/* Quote Icon - Simple and Clean SVG */}
                <svg className="w-10 h-10 mb-4" viewBox="0 0 24 24" fill="none" stroke={primaryRed} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M10 11H7a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h3c1 0 2-1 2-2V9a2 2 0 0 0-2-2m-8 8V7"/>
                    <path d="M21 11h-3a1 1 0 0 0-1 1v3a2 2 0 0 0 2 2h3c1 0 2-1 2-2V9a2 2 0 0 0-2-2m-8 8V7"/>
                </svg>


                {/* Quote Text */}
                <p className="text-lg text-gray-800 italic mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              {/* Customer Info */}
              <div className="border-t border-gray-300/50 pt-4"> 
                <p className="text-xl font-extrabold text-gray-900">{testimonial.name}</p>
                <p className="text-sm text-gray-600 font-medium mt-0.5">{testimonial.title}</p>
                <p className="text-xs text-gray-500 mt-1 flex items-center">
                    <span style={{ color: primaryRed }} className="mr-1">📍</span> 
                    {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;