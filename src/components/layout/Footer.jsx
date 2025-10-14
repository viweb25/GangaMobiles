import React from 'react';

const Footer = () => {
  const hoverAccentColorClass = 'hover:text-[#A52A2A]'; // Bright Maroon for hovers
  const linkAccentColorClass = 'text-[#A52A2A]';        // Bright Maroon for static text

  return (
    <footer
      className="bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 border-t border-[#800000]/30 pt-12 pb-8 backdrop-blur-sm"
      itemScope
      itemType="https://schema.org/LocalBusiness"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          
          {/* Column 1: Company Info & Social */}
          <div>
            <h3 className="text-xl font-extrabold text-white mb-4">Ganga Mobiles</h3>
            <p className="text-sm text-gray-400" itemProp="description">
              Chennai's trusted experts for iPhone repair, certified parts, and quality refurbished phones.
            </p>
            <div className="mt-6 flex space-x-5" itemProp="sameAs">
              <a
                href="https://facebook.com/gangamobiles"
                className={`text-gray-500 ${hoverAccentColorClass} transition-colors duration-200 transform hover:scale-110`}
                aria-label="Follow Ganga Mobiles on Facebook"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.14h-3v4h3v12h5v-12h3.85l.42-4z" />
                </svg>
              </a>
              <a
                href="https://twitter.com/gangamobiles"
                className={`text-gray-500 ${hoverAccentColorClass} transition-colors duration-200 transform hover:scale-110`}
                aria-label="Follow Ganga Mobiles on Twitter"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/gangamobiles"
                className={`text-gray-500 ${hoverAccentColorClass} transition-colors duration-200 transform hover:scale-110`}
                aria-label="Follow Ganga Mobiles on Instagram"
              >
                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.2 1 .5 1.5 1s.7.9.8 1.5c.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.6-.5 1-.9 1.5s-.9.7-1.5.8c-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.2-1-.5-1.5-.9s-.7-.9-.8-1.5c-.2-.4-.4-1.1-.5-2.3-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.6.5-1 .9-1.5s.9-.7 1.5-.8c.4-.2 1.1-.4 2.3-.5 1.3-.1 1.7-.1 4.9-.1zm0-2.2C8.7 0 8.3 0 7 0c-1.4 0-2.7.1-3.5.3-.9.2-1.7.5-2.4 1.1-.7.6-1.2 1.4-1.4 2.3C0 4.5 0 5.8 0 7.1c0 3.2 0 3.7.1 5s.1 2.6.3 3.5c.2.9.7 1.7 1.4 2.4s1.5 1.2 2.4 1.4c.8.2 2.1.3 3.5.3 3.2 0 3.7 0 5-.1 1.4 0 2.7-.1 3.5-.3.9-.2 1.7-.7 2.4-1.4s1.2-1.5 1.4-2.4c.2-.8.3-2.1.3-3.5 0-3.2 0-3.7-.1-5-.1-1.4-.1-2.7-.3-3.5-.2-.9-.7-1.7-1.4-2.4s-1.5-1.2-2.4-1.4c-.8-.2-2.1-.3-3.5-.3-3.2 0-3.7 0-5 .1zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-10.6c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/" className={`text-gray-400 ${hoverAccentColorClass} transition-all duration-200 hover:translate-x-1`}>
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className={`text-gray-400 ${hoverAccentColorClass} transition-all duration-200 hover:translate-x-1`}>
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className={`text-gray-400 ${hoverAccentColorClass} transition-all duration-200 hover:translate-x-1`}>
                  Shop Phones & Parts
                </a>
              </li>
              <li>
                <a href="/contact" className={`text-gray-400 ${hoverAccentColorClass} transition-all duration-200 hover:translate-x-1`}>
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Services & Repair */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Repair Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/quote" className={`text-gray-400 ${hoverAccentColorClass} transition-all duration-200 hover:translate-x-1`}>
                  Start A Repair Quote
                </a>
              </li>
              <li>
                <a href="/services#screen" className={`text-gray-400 ${hoverAccentColorClass} transition-all duration-200 hover:translate-x-1`}>
                  Screen & Display Fix
                </a>
              </li>
              <li>
                <a href="/services#battery" className={`text-gray-400 ${hoverAccentColorClass} transition-all duration-200 hover:translate-x-1`}>
                  Battery Replacement
                </a>
              </li>
              <li>
                <a href="/services#chip-level" className={`text-gray-400 ${hoverAccentColorClass} transition-all duration-200 hover:translate-x-1`}>
                  Chip-Level Repair
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Branch Locations with Map */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Chennai Branches</h3>
            <div className="space-y-4">
              {/* Map Embed - Static Image with Link to Google Maps */}
              <div className="relative w-full h-48 rounded-lg overflow-hidden shadow-md">
                <a
                  href="https://maps.google.com/maps?q=ganga+mobiles+chennai&hl=en&z=13"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`block w-full h-full ${hoverAccentColorClass} transition-colors duration-200`}
                  aria-label="View Ganga Mobiles locations on Google Maps"
                >
                  <img
                    src="https://maps.googleapis.com/maps/api/staticmap?center=12.9882,80.2570&zoom=12&size=300x200&markers=color:red%7C12.9882,80.2570&key=YOUR_API_KEY"
                    alt="Map of Ganga Mobiles branches in Chennai"
                    className="w-full h-full object-cover"
                  />
                </a>
              </div>
              <p className="text-gray-400 text-sm">
                Explore our 5+ branches across Chennai. Click the map for directions!
              </p>
              <a
                href="/locations"
                className={`${linkAccentColorClass} hover:text-white font-medium transition-all duration-200 hover:translate-x-1`}
              >
                View All Branch Locations →
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-12 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Ganga Mobiles. All rights reserved. |{' '}
            <a href="/privacy" className={`hover:text-[#A52A2A] transition-colors duration-200`} itemProp="url">
              Privacy Policy
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;