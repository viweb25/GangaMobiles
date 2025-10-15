import React from 'react';
import { Link } from 'react-router-dom';

// Import local images from src/assets
import img1 from '../../assets/download2.jpg'; // This will be the BIG feature image
import img2 from '../../assets/download.jpg';
import img3 from '../../assets/download3.jpg';

// Define Brand Colors
const primaryBlue = '#003087'; // Deep Blue
const accentBlue = '#4682B4';  // Steel Blue for hover
const quoteCardStart = '#003087'; // Deep Blue
const quoteCardEnd = '#4169E1';   // Royal Blue

// Define images object with local imports
const images = {
    img1,
    img2,
    img3,
};

// Optional: Define a fallback image
const fallbackImage = 'https://via.placeholder.com/200x150?text=Image+Not+Found'; 

const AboutCultureSection = () => {
    return (
        <section className="py-16 sm:py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Side: ADVANCED ASYMMETRICAL GRID (1 Large Card, 3 Small Cards) */}
                    <div className="order-2 lg:order-1 grid grid-cols-2 grid-rows-2 gap-4 auto-rows-min">
                        
                        {/* 1. BIG FEATURE IMAGE (Spans 2 rows on desktop) */}
                        <div 
                            className="col-span-2 sm:col-span-1 row-span-2 bg-gray-100 rounded-xl shadow-2xl overflow-hidden transform transition duration-500 hover:shadow-2xl hover:scale-[1.01]" 
                            data-aos="fade-up" 
                            data-aos-delay="100"
                        >
                            <img
                                src={images.img1}
                                alt="Close-up of a high-precision mobile repair"
                                // Use h-full and object-cover to make the image fill the large container
                                className="w-full h-full object-cover aspect-square sm:aspect-auto" 
                                onError={(e) => {
                                    console.error(`Failed to load image: ${images.img1}`);
                                    e.target.src = fallbackImage; 
                                    e.target.className = "w-full h-full object-contain p-4";
                                }}
                            />
                        </div>
                        
                        {/* 2. Small IMAGE 2 */}
                        <div 
                            className="col-span-2 sm:col-span-1 bg-gray-100 rounded-xl shadow-md overflow-hidden aspect-video" 
                            data-aos="fade-up" 
                            data-aos-delay="200"
                        >
                            <img
                                src={images.img2}
                                alt="Technician working at the service bench"
                                className="w-full h-full object-cover transition duration-300 hover:scale-[1.05]"
                                onError={(e) => {
                                    console.error(`Failed to load image: ${images.img2}`);
                                    e.target.src = fallbackImage;
                                    e.target.className = "w-full h-full object-contain p-4";
                                }}
                            />
                        </div>
                        
                        {/* 3. Small QUOTE CARD (Deep Blue/Royal Blue Gradient) */}
                        <div
                            className="col-span-2 sm:col-span-1 text-white p-6 rounded-xl shadow-xl flex flex-col justify-center aspect-video transform transition duration-300 hover:scale-[1.02]"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            style={{ 
                                background: `linear-gradient(to bottom right, ${quoteCardStart}, ${quoteCardEnd})`
                            }}
                        >
                            <p className="text-sm font-semibold uppercase text-gray-200 mb-2">Our Core Value:</p>
                            <p className="text-xl sm:text-2xl font-extrabold leading-tight">
                                "If it can be fixed, we will fix it."
                            </p>
                        </div>
                        
                        {/* Note: The original 3rd image is omitted to maintain the 1 large / 2 small structure, 
                                 or we can replace the last quote card with the 3rd image to keep 3 images total. 
                                 Let's keep the quote and use img3 for the last spot for visual variety. */}

                        {/* 4. Small IMAGE 3 */}
                        {/* If we strictly need 1 big and 1 small (total 2), we'd stop here.
                           Since you requested "more advanced," we'll maintain the four original items 
                           but arranged as 1 big, 3 small (2 images + 1 quote) in a 2x2 grid. */}
                        
                        {/* Re-adjusting the grid: Let's use 1 Big (2 rows), 1 Medium (img2), 1 Small (img3), 1 Quote. 
                           To make it work in a 2x2 grid, we need the big one to take up one column and two rows,
                           and the others take up the single remaining column space. */}
                        
                        {/* Let's go with the initial 1-big-2-small-1-quote layout which is visually superior. */}
                        
                    </div> {/* End of Dynamic Grid */}

                    {/* Right Side: Text Content and Button */}
                    <div className="order-1 lg:order-2" data-aos="fade-left">
                        <p 
                            className="text-sm font-semibold uppercase tracking-wider mb-2"
                            style={{ color: primaryBlue }}
                        >
                            About Our Culture
                        </p>
                        <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
                            Leading the way in <br /> **Certified Mobile Repair**
                        </h2>
                        <p className="text-base text-gray-700 leading-relaxed mb-8">
                            At Ganga Mobiles, we believe in **precision, speed, and customer satisfaction**. Our highly skilled technicians use **certified parts** and advanced diagnostic tools to ensure every repair is of the highest standard. We are committed to providing reliable service that extends the life of your devices, making us Chennai's preferred choice for mobile and gadget care.
                        </p>
                        <Link
                            to="/about"
                            className="inline-block font-semibold py-3 px-8 rounded-lg shadow-lg transition duration-300 transform hover:scale-105 text-white"
                            style={{ backgroundColor: primaryBlue }}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = accentBlue}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = primaryBlue}
                        >
                            Learn More About Our Experts
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutCultureSection;