// SoftwareSystem.jsx

import React from 'react';
import SoftwareImage from '../../assets/software.png'; // replace with actual path

const SoftwareSystem = () => {
    return (
        <section className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Software & System</h1>
            <img 
                src={SoftwareImage} 
                alt="Software & System" 
                className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <p className="text-lg mb-4">
                Our software services ensure your device runs smoothly. We handle:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Operating system updates and installations</li>
                <li>Virus and malware removal</li>
                <li>Data backup and recovery</li>
                <li>Phone unlocking and password recovery</li>
                <li>System optimization for faster performance</li>
                <li>Custom ROM installation and advanced troubleshooting</li>
            </ul>
        </section>
    );
};

export default SoftwareSystem;
