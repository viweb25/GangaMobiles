import React, { useState, useMemo } from 'react';
import ProductCard from '../components/products/productCard';
import { productData, availableBrands } from '../data/products';

const Products = () => {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false); // Fixed syntax
  const [searchQuery, setSearchQuery] = useState('');

  // ... rest of the component
   const productTypes = [
    'All',
    'Mobiles for Sale',
    'iPhone 13 Spares & Accessories',
    'General Apple Ecosystem',
    'Universal Accessories',
    'Repair Parts',
    'Tools & Equipment',
    'Mobile Gadgets', // Updated to match new category name
  ];

  const filteredProducts = useMemo(() => {
    if (!productData) return [];
    return productData.filter((product) => {
      const matchesBrand = selectedBrand === 'All' || product.brand === selectedBrand;
      const matchesType = selectedType === 'All' || product.categoryType === selectedType;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.tagline.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesBrand && matchesType && matchesSearch;
    });
  }, [selectedBrand, selectedType, searchQuery]);

  return (
    <div className="py-12 sm:py-16 md:py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <header className="text-center mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#1E3A8A] tracking-wide">
            Ganga Mobiles Store
          </h1>
          <p className="mt-3 sm:mt-4 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover premium gadgets, accessories, and innovative solutions for all mobiles.
          </p>
        </header>

        <div className="mb-8 sm:mb-10">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-5 py-3 rounded-xl border border-gray-200 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] transition-all duration-300 shadow-sm"
          />
        </div>

        <div className="md:hidden mb-8">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full bg-[#1E3A8A] text-white font-medium py-3 rounded-xl flex justify-center items-center hover:bg-[#2A5098] transition-all duration-300 shadow-lg"
          >
            {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
            <svg
              className={`w-5 h-5 ml-2 transform ${isFilterOpen ? 'rotate-180' : ''} transition-transform duration-300`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[250px_1fr] gap-6 sm:gap-8">
          <aside
            className={`md:col-span-1 bg-white p-5 sm:p-6 rounded-2xl text-gray-800 md:h-fit md:sticky md:top-8 transition-all duration-500 ease-in-out ${
              isFilterOpen ? 'block' : 'hidden md:block'
            } shadow-md`}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-6 text-[#1E3A8A] border-b border-gray-100 pb-3">Filters</h2>

            <div className="mb-6 p-4 bg-gray-50 rounded-xl">
              <h3 className="text-base sm:text-lg font-semibold mb-3 pb-2 border-b border-gray-200 text-[#D4AF37]">
                Shop By Brand
              </h3>
              <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
                {(availableBrands?.length ? ['All', ...availableBrands] : ['All']).map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`w-full text-left py-2.5 px-4 rounded-lg transition-all duration-300 text-sm sm:text-base font-medium
                      ${selectedBrand === brand ? 'bg-[#D4AF37]/10 text-[#D4AF37] font-semibold shadow-sm' : 'text-gray-700 hover:bg-[#D4AF37]/5 hover:text-[#D4AF37]'}`}
                  >
                    {brand} <span className="text-xs ml-2 text-gray-500">({productData?.filter((p) => brand === 'All' || p.brand === brand).length || 0})</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-gray-50 rounded-xl">
              <h3 className="text-base sm:text-lg font-semibold mb-3 pb-2 border-b border-gray-200 text-[#D4AF37]">
                Product Type
              </h3>
              <div className="space-y-2">
                {productTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`w-full text-left py-2.5 px-4 rounded-lg transition-all duration-300 text-sm sm:text-base font-medium
                      ${selectedType === type ? 'bg-[#D4AF37]/10 text-[#D4AF37] font-semibold shadow-sm' : 'text-gray-700 hover:bg-[#D4AF37]/5 hover:text-[#D4AF37]'}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="md:col-span-1">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-6 border-b border-gray-100 pb-3">
              Showing {filteredProducts.length} Results:
              <span className="text-[#D4AF37] ml-2">{selectedBrand}</span>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-[#D4AF37]">{selectedType}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-full text-center py-16 bg-white rounded-2xl shadow-md">
                  <p className="text-xl text-gray-600">No products found.</p>
                  <p className="text-sm text-gray-500 mt-2">Please adjust your filters or search term.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


 

export default Products;