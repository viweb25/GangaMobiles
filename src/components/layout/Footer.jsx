import React from 'react';

// Define the primary brand color
const primaryBlue = '#003087'; // Deep Blue
const hoverAccentColorClass = 'hover:text-[#4682B4]'; // Steel Blue for hover contrast
const linkAccentColorClass = 'text-[#4682B4]';       // Steel Blue for visibility against dark background

// Real Google Maps link for the Pallikaranai Branch
// NOTE: This link should be replaced with the actual, shortened Google Maps URL for your Pallikaranai branch.
const PALLIKARANAI_MAP_LINK = 'https://www.google.com/maps/dir/Adyar+%E0%AE%85%E0%AE%9F%E0%AF%88%E0%AE%AF%E0%AE%BE%E0%AE%B1%E0%AF%81/2%2F21,+Velachery+Rd,+opposite+to+Balaji+Dental+College+and+Hospital,+Narayanapuram,+Pallikaranai,+Chennai,+Tamil+Nadu+600100/@12.9434171,80.1259559,12z/data=!4m13!4m12!1m5!1m1!1s0x3a5267ed15c41681:0x6569ce967a249e83!2m2!1d80.2564957!2d13.0011774!1m5!1m1!1s0x3a525d78fd2f662f:0xdca1aca99bbf2513!2m2!1d80.2083578!2d12.94343?entry=ttu&g_ep=EgoyMDI1MTAwOC4wIKXMDSoASAFQAw%3D%3D'; 
const MAIN_PHONE = '+919176100072';

const Footer = () => {
    return (
        <footer
            className="bg-gray-900 border-t pt-12 pb-8 backdrop-blur-sm"
            style={{ borderTopColor: primaryBlue }}
            itemScope
            itemType="https://schema.org/LocalBusiness"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                
                {/* Main 4-Column Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                    
                    {/* Column 1: Company Info & Contact */}
                    <div>
                        <h3 className="text-xl font-extrabold text-white mb-4" style={{ color: primaryBlue }}>Ganga Mobiles</h3>
                        <p className="text-sm text-gray-400 mb-4" itemProp="description">
                            Chennai's trusted experts for iPhone repair, certified parts, and quality refurbished phones.
                        </p>
                        <div className="space-y-2 text-sm">
                            <p className="text-gray-400">
                                <span className="font-semibold" style={{ color: primaryBlue }}>Call Now:</span> 
                                <a href={`tel:${MAIN_PHONE}`} className={`ml-2 text-white font-bold ${hoverAccentColorClass}`}>
                                    {MAIN_PHONE}
                                </a>
                            </p>
                            <p className="text-gray-400">
                                <span className="font-semibold" style={{ color: primaryBlue }}>Primary Branch:</span> 
                                <span className="ml-2">Pallikaranai, Chennai.</span>
                            </p>
                        </div>

                        {/* Social Icons (Branded Hover) */}
                        <div className="mt-6 flex space-x-5" itemProp="sameAs">
                            <a
                                href="https://facebook.com/gangamobiles"
                                className={`text-gray-500 ${hoverAccentColorClass} transition-colors duration-200 transform hover:scale-110`}
                                aria-label="Follow Ganga Mobiles on Facebook"
                            >
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.14h-3v4h3v12h5v-12h3.85l.42-4z" /></svg>
                            </a>
                            <a
                                href="https://twitter.com/gangamobiles"
                                className={`text-gray-500 ${hoverAccentColorClass} transition-colors duration-200 transform hover:scale-110`}
                                aria-label="Follow Ganga Mobiles on Twitter"
                            >
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" /></svg>
                            </a>
                            <a
                                href="https://instagram.com/gangamobiles"
                                className={`text-gray-500 ${hoverAccentColorClass} transition-colors duration-200 transform hover:scale-110`}
                                aria-label="Follow Ganga Mobiles on Instagram"
                            >
                                <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.2c3.2 0 3.6 0 4.9.1 1.2.1 1.9.3 2.3.5.6.2 1 .5 1.5 1s.7.9.8 1.5c.2.4.4 1.1.5 2.3.1 1.3.1 1.7.1 4.9s0 3.6-.1 4.9c-.1 1.2-.3 1.9-.5 2.3-.2.6-.5 1-.9 1.5s-.9.7-1.5.8c-.4.2-1.1.4-2.3.5-1.3.1-1.7.1-4.9.1s-3.6 0-4.9-.1c-1.2-.1-1.9-.3-2.3-.5-.6-.2-1-.5-1.5-.9s-.7-.9-.8-1.5c-.2-.4-.4-1.1-.5-2.3-.1-1.3-.1-1.7-.1-4.9s0-3.6.1-4.9c.1-1.2.3-1.9.5-2.3.2-.6.5-1 .9-1.5s.9-.7 1.5-.8c.4-.2 1.1-.4 2.3-.5 1.3-.1 1.7-.1 4.9-.1zm0-2.2C8.7 0 8.3 0 7 0c-1.4 0-2.7.1-3.5.3-.9.2-1.7.5-2.4 1.1-.7.6-1.2 1.4-1.4 2.3C0 4.5 0 5.8 0 7.1c0 3.2 0 3.7.1 5s.1 2.6.3 3.5c.2.9.7 1.7 1.4 2.4s1.5 1.2 2.4 1.4c.8.2 2.1.3 3.5.3 3.2 0 3.7 0 5-.1 1.4 0 2.7-.1 3.5-.3.9-.2 1.7-.7 2.4-1.4s1.2-1.5 1.4-2.4c.2-.8.3-2.1.3-3.5 0-3.2 0-3.7-.1-5-.1-1.4-.1-2.7-.3-3.5-.2-.9-.7-1.7-1.4-2.4s-1.5-1.2-2.4-1.4c-.8-.2-2.1-.3-3.5-.3-3.2 0-3.7 0-5 .1zm0 5.8c-3.4 0-6.2 2.8-6.2 6.2s2.8 6.2 6.2 6.2 6.2-2.8 6.2-6.2-2.8-6.2-6.2-6.2zm0 10.2c-2.2 0-4-1.8-4-4s1.8-4 4-4 4 1.8 4 4-1.8 4-4 4zm6.4-10.6c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4z" /></svg>
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4" style={{ color: primaryBlue }}>Quick Links</h3>
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
                        <h3 className="text-lg font-semibold text-white mb-4" style={{ color: primaryBlue }}>Repair Services</h3>
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
                            <li>
                                <a href="/services#water-damage" className={`text-gray-400 ${hoverAccentColorClass} transition-all duration-200 hover:translate-x-1`}>
                                    Water Damage Recovery
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Branch Locations with Functional Link */}
                    <div>
                        <h3 className="text-lg font-semibold text-white mb-4" style={{ color: primaryBlue }}>Our Pallikaranai Branch</h3>
                        <div className="space-y-4">
                            
                            {/* Functional Map Link Box (Replaces broken map image) */}
                            <a
                                href={PALLIKARANAI_MAP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`relative w-full h-48 rounded-lg overflow-hidden shadow-xl border-2 block p-6 text-center group transition duration-300`}
                                style={{ borderColor: primaryBlue, backgroundColor: '#1f2937' }} // Dark background for contrast
                                aria-label="Get directions to the Pallikaranai branch on Google Maps"
                            >
                                <div className="absolute inset-0 bg-gray-800 opacity-70 group-hover:opacity-90 transition duration-300"></div>
                                <div className="relative z-10 flex flex-col items-center justify-center h-full">
                                    <svg className="w-12 h-12 mb-2 text-white group-hover:scale-110 transition duration-300" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                                    </svg>
                                    <p className="text-lg font-bold text-white mt-2">
                                        Tap for Google Maps
                                    </p>
                                    <p className="text-sm text-gray-300">Opens real-time directions</p>
                                </div>
                            </a>
                            
                            <p className="text-gray-400 text-sm">
                                Pallikaranai Branch: No. 2/21, Velachery Rd, opposite Balaji Dental College.
                            </p>
                            <a
                                href={PALLIKARANAI_MAP_LINK}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`${linkAccentColorClass} hover:text-white font-medium transition-all duration-200 hover:translate-x-1`}
                            >
                                Get Directions to Pallikaranai →
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="mt-12 pt-8 border-t border-gray-700 text-center">
                    <p className="text-sm text-gray-500">
                        © {new Date().getFullYear()} Ganga Mobiles. All rights reserved. |{' '}
                        <a href="/privacy" className={`hover:text-[#4682B4] transition-colors duration-200`} itemProp="url">
                            Privacy Policy
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;