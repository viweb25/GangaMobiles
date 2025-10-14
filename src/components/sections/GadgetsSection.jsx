import React from 'react';
import { Link } from 'react-router-dom';

// Import local images from src/assets
import img1 from '../../assets/download.jpg';
import img2 from '../../assets/download2.jpg';
import img3 from '../../assets/download3.jpg';

// Define images object with local imports
const images = {
  img1,
  img2,
  img3,
};

// Optional: Define a fallback image in case any local image fails (unlikely but good practice)
const fallbackImage = 'https://via.placeholder.com/200x150?text=Image+Not+Found'; // Fallback to a remote placeholder as a last resort

const AboutCultureSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side: Images and Quote Cards */}
          <div className="order-2 lg:order-1 grid grid-cols-2 gap-4 auto-rows-min">
            {/* Image 1 */}
            <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay="100">
              <img
                src={images.img1}
                alt="Repair work close-up"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${images.img1}`);
                  e.target.src = fallbackImage; // Use fallback if local image fails
                }}
              />
            </div>
            {/* Image 2 (spans 2 rows) */}
            <div
              className="col-span-1 row-span-2 bg-gray-100 rounded-lg shadow-md overflow-hidden flex items-center justify-center"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <img
                src={images.img2}
                alt="Technician working"
                className="w-full h-full object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${images.img2}`);
                  e.target.src = fallbackImage;
                }}
              />
            </div>
            {/* Goal/Quote Card (Red/Maroon Gradient) */}
            <div
              className="bg-gradient-to-br from-[#800000] to-[#CD5C5C] text-white p-6 rounded-lg shadow-lg flex flex-col justify-center"
              data-aos="fade-up"
              data-aos-delay="300"
            >
              <p className="text-xs font-semibold uppercase text-gray-200 mb-2">Our goal:</p>
              <p className="text-xl sm:text-2xl font-bold leading-tight">
                "We will fix it, till we make it"
              </p>
            </div>
            {/* Image 3 */}
            <div className="bg-gray-100 rounded-lg shadow-md overflow-hidden" data-aos="fade-up" data-aos-delay="400">
              <img
                src={images.img3}
                alt="Repair tools and equipment"
                className="w-full h-auto object-cover"
                onError={(e) => {
                  console.error(`Failed to load image: ${images.img3}`);
                  e.target.src = fallbackImage;
                }}
              />
            </div>
          </div>

          {/* Right Side: Text Content and Button */}
          <div className="order-1 lg:order-2" data-aos="fade-left">
            <p className="text-sm font-semibold uppercase text-[#800000] tracking-wider mb-2">
              About Our Culture
            </p>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
              Leading the way in <br /> repair solutions
            </h2>
            <p className="text-base text-gray-700 leading-relaxed mb-8">
              At Ganga Mobiles, we believe in **precision, speed, and customer satisfaction**. Our highly skilled technicians use **certified parts** and advanced diagnostic tools to ensure every repair is of the highest standard. We are committed to providing reliable service that extends the life of your devices, making us Chennai's preferred choice for mobile and gadget care.
            </p>
            <Link
              to="/about"
              className="inline-block bg-[#800000] hover:bg-[#A52A2A] text-white font-semibold py-3 px-8 rounded-lg shadow-md transition duration-300 transform hover:scale-105"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCultureSection;