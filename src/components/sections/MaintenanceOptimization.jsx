// MaintenanceOptimization.jsx

import React from 'react';
import MaintenanceImage from '../../assets/maintainence.png'; // replace with actual path

const MaintenanceOptimization = () => {
    return (
        <section className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Maintenance & Optimization</h1>
            <img 
                src={MaintenanceImage} 
                alt="Maintenance & Optimization" 
                className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <p className="text-lg mb-4">
                Keep your device in top condition with our maintenance and optimization services:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Regular phone cleaning and servicing</li>
                <li>Performance optimization and system tuning</li>
                <li>Diagnostics and troubleshooting for issues</li>
                <li>Junk file removal and storage management</li>
                <li>Battery health monitoring</li>
                <li>Preventive maintenance tips</li>
            </ul>
        </section>
    );
};

export default MaintenanceOptimization;
