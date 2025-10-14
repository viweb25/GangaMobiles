// src/data/servicesData.js (UPDATED with new repair specifics)

// Existing categories remain the same, possibly adding a 'Sales' category later.

export const serviceCategories = [
    { name: 'Smartphones (iOS/Android)', key: 'smartphone' },
    { name: 'Tablets & iPads', key: 'tablet' },
    { name: 'Wearables & Other', key: 'other' }, // Renamed from Wearables
    { name: 'Data & Software', key: 'software' }, 
];

// Combine all services, ensuring the new specific services are included
export const allServices = [
    // --- TOP 3 CORE SERVICES (Using custom icon names for mapping) ---
    { 
        id: 'c1', 
        category: 'smartphone', 
        name: 'Screen Replacement', 
        icon: 'WrenchScrewdriverIcon', // Icon for Repair/Fixing
        tagline: 'Broken or cracked screen? We’ll fix it quickly with original parts.', 
        price: '₹4,999+', complexity: 'High', imagePlaceholder: 'Screen_Replacement.jpg' 
    },
    { 
        id: 'c2', 
        category: 'smartphone', 
        name: 'Battery Replacement', 
        icon: 'CubeIcon', // Icon for Parts/Product
        tagline: 'Is your phone\'s battery draining too fast? Get a brand-new battery installed.', 
        price: '₹1,999+', complexity: 'Medium', imagePlaceholder: 'Battery_Replacement.jpg' 
    },
    { 
        id: 'c3', 
        category: 'smartphone', 
        name: 'Water Damage Repair', 
        icon: 'ArchiveBoxIcon', // Icon for Storage/Data Recovery (or just a prominent 3rd icon)
        tagline: 'Salvage your phone from water damage with our advanced repair techniques.', 
        price: 'Quote', complexity: 'Expert', imagePlaceholder: 'Water_Damage.jpg' 
    },
    
    // --- OTHER SERVICES (Use Heroicon names directly if you want to render them later) ---
    { id: 'c8', category: 'smartphone', name: 'Back Glass & Button Repair', icon: 'Cog6ToothIcon', tagline: 'Repair or replacement of damaged back glass, power, and volume buttons.', price: '₹1,500+', complexity: 'Medium', imagePlaceholder: 'BackGlass_Button.jpg' },
    { id: 'c4', category: 'smartphone', name: 'Mic and Camera Repair', icon: 'CameraIcon', tagline: 'Fix issues with audio clarity, connectivity, or faulty cameras for clear pictures.', price: '₹1,499+', complexity: 'Medium', imagePlaceholder: 'Speaker_Mic.jpg' },
    { id: 'c9', category: 'software', name: 'Network & Virus Removal', icon: 'WifiIcon', tagline: 'Diagnose and fix persistent network issues, connectivity problems, and remove malware/viruses.', price: '₹1,200', complexity: 'Low', imagePlaceholder: 'Network_Fix.jpg' },
    { id: 'c5', category: 'software', name: 'Software Updates & Troubleshooting', icon: 'ArrowsRightLeftIcon', tagline: 'Resolve software crashes, glitches, and update errors.', price: '₹999', complexity: 'Low', imagePlaceholder: 'Software_Fix.jpg' },
    { id: 'c7', category: 'software', name: 'Data Recovery', icon: 'ServerStackIcon', tagline: 'Recover important files and data from damaged devices.', price: 'Quote', complexity: 'Expert', imagePlaceholder: 'Data_Recovery.jpg' },
    { id: 's3', category: 'smartphone', name: 'Advanced Logic Board Repair', icon: 'MicrophoneIcon', tagline: 'Component-level motherboard diagnosis and micro-soldering.', price: 'Quote', complexity: 'Expert' },
    { id: 't1', category: 'tablet', name: 'Digitizer & LCD Repair', icon: 'TvIcon', tagline: 'Specialized large-screen display separation and replacement.', price: '₹6,999+', complexity: 'High' },
    { id: 'w1', category: 'other', name: 'Watch Screen & Gasket Sealing', icon: 'ClockIcon', tagline: 'Tiny screen replacement with water-resistance restoration.', price: 'Quote', complexity: 'Expert' },
];