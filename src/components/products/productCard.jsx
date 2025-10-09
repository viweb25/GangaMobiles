import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden transition-all duration-300 hover:shadow-md border border-blue-100">
      {/* Image Placeholder */}
      <div className="h-40 sm:h-44 bg-gray-100 flex items-center justify-center relative">
        <span className="text-4xl sm:text-5xl">{product.imagePlaceholder}</span>
        {/* Badge */}
        <span className="absolute top-2 left-2 bg-teal-100 text-teal-700 text-xs sm:text-sm font-medium px-2.5 py-1 rounded-full shadow-sm">
          {product.brand}
        </span>
      </div>

      <div className="p-4 sm:p-5">
        {/* Product Name */}
        <h3 className="text-base sm:text-lg font-bold text-gray-800 truncate">{product.name}</h3>
        {/* Tagline */}
        <p className="text-sm text-gray-600 mt-1 line-clamp-2">{product.tagline}</p>

        {/* Category */}
        <p className="text-xs text-blue-800 uppercase mt-2 tracking-wide">{product.categoryType}</p>

        {/* Price and Rating */}
        <div className="flex justify-between items-center mt-3">
          <span className="text-lg sm:text-xl font-semibold text-teal-500">
            ₹{product.price.toLocaleString('en-IN')}
          </span>
          <div className="text-sm text-yellow-500 flex items-center">
            ⭐ {product.rating || 'N/A'}
          </div>
        </div>

        {/* Button */}
        <button
          className="mt-4 w-full bg-teal-500 text-white font-semibold py-2 rounded-lg hover:bg-teal-600 transition duration-200 shadow-sm"
        >
          View Details
        </button>
      </div>
    </div>
  );
};

export default ProductCard;