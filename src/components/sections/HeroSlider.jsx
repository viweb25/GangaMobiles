import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { slides } from '../../data/slides';

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (!slides || slides.length === 0) return;

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToSlide = (index) => setCurrentIndex(index);

  return (
    <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] overflow-hidden bg-white">
      {slides?.length > 0 ? (
        slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.url || 'https://via.placeholder.com/1200x600'}
              alt={slide.alt || 'Slide'}
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gray-800 bg-opacity-40 flex items-center justify-center p-4 sm:p-6 md:p-10">
              <div className="text-center max-w-4xl">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight drop-shadow-md">
                  {slide.caption || 'Welcome to Ganga Mobiles'}
                </h1>
                <p className="mt-2 sm:mt-3 md:mt-4 text-base sm:text-lg md:text-xl text-teal-300 drop-shadow">
                  {slide.subCaption || 'Your trusted mobile repair shop'}
                </p>
                <Link
                  to={slide.buttonLink || '/quote'}
                  className="mt-4 sm:mt-6 md:mt-8 inline-block bg-teal-500 hover:bg-teal-600 text-white font-semibold py-2.5 px-6 sm:py-3 sm:px-8 md:py-3.5 md:px-10 rounded-lg shadow-md transition duration-200 text-sm sm:text-base md:text-lg uppercase tracking-wide transform hover:scale-105"
                >
                  {slide.buttonText || 'Get a Quote'}
                </Link>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center h-full text-gray-600">
          No slides available.
        </div>
      )}

      {slides?.length > 1 && (
        <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? 'bg-teal-400 w-5 sm:w-6' : 'bg-gray-200 bg-opacity-70'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default HeroSlider;