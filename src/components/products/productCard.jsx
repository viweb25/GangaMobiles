import React from 'react';

// ProductCard now correctly accepts the new props: whatsAppLink and brandColor
const ProductCard = ({ product, whatsAppLink, brandColor = '#800000' }) => {
    // Define standard WhatsApp green color
    const whatsAppGreen = '#4dc247'; 

    return (
        <div className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-gray-100 flex flex-col h-full">
            
            {/* Image Placeholder */}
            <div className="h-48 w-full bg-gray-50 flex items-center justify-center relative p-4">
                {/* Placeholder Icon */}
                <span className="text-5xl sm:text-6xl text-gray-400">{product.imagePlaceholder || '📱'}</span>
                
                {/* Brand Badge (Now uses the branded red color) */}
                <span 
                    className="absolute top-3 left-3 text-white text-xs sm:text-sm font-medium px-3 py-1 rounded-full shadow-md"
                    style={{ backgroundColor: brandColor }}
                >
                    {product.brand}
                </span>
            </div>

            <div className="p-4 sm:p-6 flex flex-col flex-grow">
                
                {/* Product Name & Tagline */}
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 truncate" title={product.name}>{product.name}</h3>
                <p className="text-sm text-gray-600 mt-1 line-clamp-2 flex-grow">{product.tagline}</p>

                {/* Category & Price */}
                <div className="mt-3">
                    {/* Category Type (Now uses the branded red color) */}
                    <p className="text-xs uppercase tracking-wider font-semibold" style={{ color: brandColor }}>
                        {product.categoryType}
                    </p>
                    
                    <div className="flex justify-between items-end mt-2">
                        <span className="text-xl sm:text-2xl font-extrabold text-gray-900">
                            {/* Assuming ₹ is the currency based on your initial code, 
                                and displaying "Enquire" if price is not available. */}
                            {product.price ? `₹${product.price.toLocaleString('en-IN')}` : 'Enquire'}
                        </span>
                        <div className="text-sm text-yellow-500 flex items-center">
                            ⭐ {product.rating || 'N/A'}
                        </div>
                    </div>
                </div>

                {/* ---------------------------------------------------- */}
                {/* WhatsApp Button (Primary CTA) & View Details (Secondary CTA) */}
                {/* ---------------------------------------------------- */}
                <div className="mt-5 space-y-2">
                    {/* 1. WhatsApp Inquiry Button (Primary CTA) */}
                    <a
                        href={whatsAppLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        // Key for making it clickable and opening WhatsApp
                        className={`w-full flex items-center justify-center py-2.5 rounded-lg text-white font-bold transition duration-200 shadow-lg transform hover:scale-[1.01]`}
                        style={{ backgroundColor: whatsAppGreen }}
                    >
                        {/* WhatsApp Icon SVG */}
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.5 2 2 6.5 2 12c0 2.8 1.1 5.4 2.9 7.3l-1.9 1.9c-.3.3-.2.8.1 1.1.2.2.5.3.7.3h.1l3.5-1.9c1.9.7 3.9 1.1 6.1 1.1 5.5 0 10-4.5 10-10S17.5 2 12 2zm3.3 14.7c-.2.2-.4.3-.7.3s-.5-.1-.7-.3l-2-2.5c-.3-.4-.7-.7-1.2-.7-.5 0-.9.3-1.2.7l-2.4 3c-.3.4-.7.7-1.2.7-.4 0-.8-.2-1.1-.4-.3-.3-.5-.7-.5-1.1v-2.1c0-.4.3-.7.7-.7h1.4c.4 0 .7.3.7.7v1.4c0 .3.1.5.3.6.2.1.4.2.6.2s.4-.1.6-.2l2-2.5c.3-.4.7-.7 1.2-.7s.9.3 1.2.7l2.4 3c.3.4.7.7 1.2.7s.9-.3 1.2-.7c.3-.4.5-.9.5-1.4V8.4c0-.4-.3-.7-.7-.7h-1.4c-.4 0-.7-.3-.7-.7V6.9c0-.4.3-.7.7-.7h2.1c.9 0 1.6.3 2.1.8.5.5.8 1.2.8 2v5.7c0 .5-.2 1-.5 1.4z" fill="#fff"/>
                        </svg>
                        Inquire Now (Live Price)
                    </a>
                    
                    {/* 2. View Details Link (Secondary CTA) */}
                    <a
                        href={`/products/${product.id}`} // Placeholder path, replace if needed
                        className={`block text-center text-sm font-semibold py-1 rounded-lg transition duration-200 hover:opacity-80`}
                        style={{ color: brandColor }} // **Uses the primaryRed color as requested**
                    >
                        View Full Specifications →
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;