import React, { useState, useMemo } from 'react';
import ProductCard from '../components/products/productCard';
import { productData, availableBrands } from '../data/products';

const Products = () => {
  const [selectedBrand, setSelectedBrand] = useState('All');
  const [selectedType, setSelectedType] = useState('All');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const productTypes = [
    'All',
    'Mobiles for Sale',
    'iPhone 13 Spares & Accessories',
    'General Apple Ecosystem',
    'Universal Accessories',
    'Repair Parts',
    'Tools & Equipment',
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
    <div className="py-10 sm:py-12 md:py-16 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-8 sm:mb-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-blue-800">
            Premium Gadgets & Imported Parts Store
          </h1>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
            Explore genuine parts, high-quality accessories, and unique gadgets at Ganga Mobiles.
          </p>
        </header>

        <div className="mb-6 sm:mb-8">
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border border-gray-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-teal-400 sm:text-base"
          />
        </div>

        <div className="md:hidden mb-6">
          <button
            onClick={() => setIsFilterOpen(!isFilterOpen)}
            className="w-full bg-teal-500 text-white font-semibold py-2.5 rounded-lg flex justify-center items-center hover:bg-teal-600 transition duration-200 shadow-md"
          >
            {isFilterOpen ? 'Hide Filters' : 'Show Filters'}
            <svg
              className={`w-5 h-5 ml-2 transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8">
          <aside
            className={`md:col-span-1 bg-gray-100 p-4 sm:p-6 rounded-xl text-gray-800 md:h-fit md:sticky md:top-6 transition-all duration-300 ${
              isFilterOpen ? 'block' : 'hidden md:block'
            }`}
          >
            <h2 className="text-xl sm:text-2xl font-bold mb-5 text-blue-800">Filters</h2>

            <div className="mb-6 p-4 bg-white rounded-lg shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold mb-3 pb-2 border-b border-blue-200 text-teal-500">
                Shop By Brand
              </h3>
              <div className="space-y-2 max-h-60 overflow-y-auto pr-2">
                {(availableBrands?.length ? ['All', ...availableBrands] : ['All']).map((brand) => (
                  <button
                    key={brand}
                    onClick={() => setSelectedBrand(brand)}
                    className={`w-full text-left py-2 px-3 rounded-lg transition duration-200 text-sm sm:text-base font-medium
                      ${selectedBrand === brand ? 'bg-teal-100 text-teal-700 font-semibold shadow-sm' : 'text-gray-700 hover:bg-teal-50 hover:text-teal-600'}`}
                  >
                    {brand} <span className="text-xs ml-2 text-gray-500">({productData?.filter((p) => brand === 'All' || p.brand === brand).length || 0})</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="p-4 bg-white rounded-lg shadow-sm">
              <h3 className="text-base sm:text-lg font-semibold mb-3 pb-2 border-b border-blue-200 text-teal-500">
                Product Type
              </h3>
              <div className="space-y-2">
                {productTypes.map((type) => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`w-full text-left py-2 px-3 rounded-lg transition duration-200 text-sm sm:text-base font-medium
                      ${selectedType === type ? 'bg-teal-100 text-teal-700 font-semibold shadow-sm' : 'text-gray-700 hover:bg-teal-50 hover:text-teal-600'}`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          <div className="md:col-span-3">
            <h2 className="text-lg sm:text-xl font-semibold text-gray-700 mb-5">
              Showing {filteredProducts.length} Results:
              <span className="text-teal-500 ml-2">{selectedBrand}</span>
              <span className="text-gray-400 mx-2">/</span>
              <span className="text-teal-500">{selectedType}</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="col-span-full text-center py-12 bg-gray-100 rounded-xl shadow-sm">
                  <p className="text-lg text-gray-600">No products match your current selection.</p>
                  <p className="text-sm text-gray-500 mt-2">Try adjusting the Brand, Product Type, or Search filters.</p>
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