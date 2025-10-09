// src/components/GadgetsSection.jsx
import React from 'react';

const GadgetsSection = () => {
    // Note: You will map over product data here later.
    const productInfo = {
        title: "Premium Gadgets & Parts from Thailand and Hong Kong",
        subtitle: "Directly imported high-quality displays, batteries, and unique accessories."
    };

    return (
        <section className="py-16 bg-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-gray-900 p-10 rounded-xl shadow-2xl border-l-8 border-indigo-600">
                    <h3 className="text-4xl font-extrabold text-teal-400">
                        {productInfo.title}
                    </h3>
                    <p className="mt-3 text-xl text-gray-400">
                        {productInfo.subtitle}
                    </p>
                    
                    {/* Placeholder Grid for future Product Cards */}
                    <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="h-32 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">Product Card 1</div>
                        <div className="h-32 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">Product Card 2</div>
                        <div className="h-32 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">Product Card 3</div>
                        <div className="h-32 bg-gray-700 rounded-lg flex items-center justify-center text-gray-400">Product Card 4</div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GadgetsSection;