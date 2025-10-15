// HardwareRepair.jsx

import React from 'react';
import HardwareImage from '../../assets/hardware.png'; // replace with actual path

const HardwareRepair = () => {
    return (
        <section className="max-w-4xl mx-auto p-6">
            <h1 className="text-3xl font-bold mb-4">Hardware Repair</h1>
            <img 
                src={HardwareImage} 
                alt="Hardware Repair" 
                className="w-full h-64 object-cover rounded-lg mb-6"
            />
            <p className="text-lg mb-4">
                We provide expert hardware repair services for smartphones and tablets. Our services include:
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Screen replacement and touch issues</li>
                <li>Battery replacement for all models</li>
                <li>Camera and speaker repairs</li>
                <li>Charging port fixes</li>
                <li>Water damage restoration</li>
                <li>Button and vibration motor repairs</li>
            </ul>
        </section>
    );
};

export default HardwareRepair;
