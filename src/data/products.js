// src/data/products.js (SUPER-DETAILED INVENTORY FOR GANGA MOBILES - FINAL VERSION)

// --- 1. Product Categories/Types ---
const CATEGORY_TYPES = {
    MOBILES: 'Mobiles for Sale',
    IPHONE_13_SPECIFIC: 'iPhone 13 Spares & Accessories',
    APPLE_GENERAL: 'General Apple Ecosystem',
    ACCESSORIES_UNIVERSAL: 'Universal Accessories',
    REPAIR_PARTS_GENERAL: 'General Repair Parts',
    TOOLS_EQUIPMENT: 'Tools & Equipment',
};

// --- 2. Available Brands (Expanded) ---
const availableBrands = [
    'Apple',
    'Samsung',
    'Xiaomi',
    'OnePlus',
    'Google',    
    'Vivo',      
    'Universal', 
];

// --- 3. Product Data Array (The Shop Inventory - Prices are strings with currency) ---
const productData = [
    // =========================================================
    // CATEGORY 1: MOBILES FOR SALE
    // =========================================================
    {
        id: 'M001', name: 'iPhone 13 (New, Starlight)', brand: 'Apple', categoryType: CATEGORY_TYPES.MOBILES,
        price: '₹62,999', tagline: 'A-Grade refurbished with 1-year warranty.', imagePlaceholder: '📱',
    },
    {
        id: 'M002', name: 'Samsung Galaxy S23 (Used, Green)', brand: 'Samsung', categoryType: CATEGORY_TYPES.MOBILES,
        price: '₹55,000', tagline: 'Certified excellent condition.', imagePlaceholder: '📱',
    },
    {
        id: 'M003', name: 'iPhone 14 Pro (Refurbished, Deep Purple)', brand: 'Apple', categoryType: CATEGORY_TYPES.MOBILES,
        price: '₹78,999', tagline: 'Dynamic Island, 48MP camera, full warranty.', imagePlaceholder: '📱',
    },
    {
        id: 'M004', name: 'Samsung Galaxy A54 (New, Awesome Graphite)', brand: 'Samsung', categoryType: CATEGORY_TYPES.MOBILES,
        price: '₹32,999', tagline: 'IP67 water resistance, 50MP triple camera.', imagePlaceholder: '📱',
    },
    {
        id: 'M005', name: 'Xiaomi Redmi Note 13 Pro (New, Midnight Black)', brand: 'Xiaomi', categoryType: CATEGORY_TYPES.MOBILES,
        price: '₹24,999', tagline: '200MP camera, 120Hz AMOLED display.', imagePlaceholder: '📱',
    },
    {
        id: 'M006', name: 'OnePlus Nord 3 (Used, Tempest Gray)', brand: 'OnePlus', categoryType: CATEGORY_TYPES.MOBILES,
        price: '₹27,999', tagline: 'Snapdragon 7 Gen 2, 80W fast charging.', imagePlaceholder: '📱',
    },
    {
        id: 'M007', name: 'iPhone 12 Mini (Refurbished, Blue)', brand: 'Apple', categoryType: CATEGORY_TYPES.MOBILES,
        price: '₹39,999', tagline: 'Compact powerhouse with 5G support.', imagePlaceholder: '📱',
    },
    {
        id: 'M008', name: 'Samsung Galaxy Z Fold5 (New, Icy Blue)', brand: 'Samsung', categoryType: CATEGORY_TYPES.MOBILES,
        price: '₹1,54,999', tagline: 'Foldable innovation, S Pen compatible.', imagePlaceholder: '📱',
    },

    // =========================================================
    // CATEGORY 2: IPHONE 13 SPARES & ACCESSORIES
    // =========================================================
    // --- DISPLAY & GLASS ---
    {
        id: '13P001', name: 'iPhone 13 Pro Max Original OLED', brand: 'Apple', categoryType: CATEGORY_TYPES.IPHONE_13_SPECIFIC,
        price: '₹18,000', tagline: 'OEM quality, True Tone transfer capable.', imagePlaceholder: '🖥️',
    },
    {
        id: '13P002', name: 'iPhone 13 Back Glass (Laser Cut)', brand: 'Apple', categoryType: CATEGORY_TYPES.IPHONE_13_SPECIFIC,
        price: '₹3,500', tagline: 'Replacement housing glass, all colors.', imagePlaceholder: '🔨',
    },
    {
        id: '13P003', name: 'iPhone 13 Premium 9H Tempered Glass', brand: 'Apple', categoryType: CATEGORY_TYPES.IPHONE_13_SPECIFIC,
        price: '₹699', tagline: 'Edge-to-edge protection.', imagePlaceholder: '🛡️',
    },
    {
        id: '13P009', name: 'iPhone 13 LCD Screen Assembly (Aftermarket)', brand: 'Apple', categoryType: CATEGORY_TYPES.IPHONE_13_SPECIFIC,
        price: '₹8,500', tagline: 'High-quality replacement with touch digitizer.', imagePlaceholder: '🖥️',
    },
    {
        id: '13P010', name: 'iPhone 13 Front Glass Only', brand: 'Apple', categoryType: CATEGORY_TYPES.IPHONE_13_SPECIFIC,
        price: '₹1,200', tagline: 'OEM glass for screen repair without full assembly.', imagePlaceholder: '🔨',
    },
    
    // --- BATTERY & POWER ---
    {
        id: '13P004', name: 'iPhone 13 Replacement Battery (OEM)', brand: 'Apple', categoryType: CATEGORY_TYPES.IPHONE_13_SPECIFIC,
        price: '₹4,200', tagline: 'Certified 3240 mAh capacity.', imagePlaceholder: '🔋',
    },
    {
        id: '13P005', name: 'iPhone 13 Charging Port Flex', brand: 'Apple', categoryType: CATEGORY_TYPES.IPHONE_13_SPECIFIC,
        price: '₹1,500', tagline: 'Lightning connector replacement.', imagePlaceholder: '⚡',
    },
    {
        id: '13P011', name: 'iPhone 13 Battery Connector Flex', brand: 'Apple', categoryType: CATEGORY_TYPES.IPHONE_13_SPECIFIC,
        price: '₹800', tagline: 'Fixes loose battery connections.', imagePlaceholder: '🔋',
    },
    
    // --- CAMERA & AUDIO ---
    {
        id: '13P006', name: 'iPhone 13 Rear Camera Module (Wide)', brand: 'Apple', categoryType: CATEGORY_TYPES.IPHONE_13_SPECIFIC,
        price: '₹7,500', tagline: 'Genuine 12MP wide lens unit.', imagePlaceholder: '📸',
    },
    {
        id: '13P007', name: 'iPhone 13 Front Camera/Sensor Flex', brand: 'Apple', categoryType: CATEGORY_TYPES.IPHONE_13_SPECIFIC,
        price: '₹5,000', tagline: 'Includes Face ID components (Requires programming).', imagePlaceholder: '🤳',
    },
    {
        id: '13P008', name: 'iPhone 13 Earpiece Speaker/Sensor', brand: 'Apple', categoryType: CATEGORY_TYPES.IPHONE_13_SPECIFIC,
        price: '₹2,500', tagline: 'Replacement speaker for calls.', imagePlaceholder: '👂',
    },
    {
        id: '13P012', name: 'iPhone 13 Loudspeaker Module', brand: 'Apple', categoryType: CATEGORY_TYPES.IPHONE_13_SPECIFIC,
        price: '₹1,800', tagline: 'Bottom speaker with vibration motor.', imagePlaceholder: '🔊',
    },
    {
        id: '13P013', name: 'iPhone 13 Ultrawide Camera Module', brand: 'Apple', categoryType: CATEGORY_TYPES.IPHONE_13_SPECIFIC,
        price: '₹6,500', tagline: 'Genuine 12MP ultrawide lens.', imagePlaceholder: '📸',
    },

    // --- BUTTONS & SENSORS ---
    {
        id: '13P014', name: 'iPhone 13 Power Button Flex Cable', brand: 'Apple', categoryType: CATEGORY_TYPES.IPHONE_13_SPECIFIC,
        price: '₹900', tagline: 'Side button replacement cable.', imagePlaceholder: '🔘',
    },
    {
        id: '13P015', name: 'iPhone 13 Volume Button Flex', brand: 'Apple', categoryType: CATEGORY_TYPES.IPHONE_13_SPECIFIC,
        price: '₹850', tagline: 'Volume rocker replacement.', imagePlaceholder: '🔘',
    },
    {
        id: '13P016', name: 'iPhone 13 Proximity Sensor Flex', brand: 'Apple', categoryType: CATEGORY_TYPES.IPHONE_13_SPECIFIC,
        price: '₹1,200', tagline: 'Fixes call screen issues.', imagePlaceholder: '👁️',
    },

    // --- ACCESSORIES ---
    {
        id: '13A001', name: 'iPhone 13 Silicone Case (Official)', brand: 'Apple', categoryType: CATEGORY_TYPES.IPHONE_13_SPECIFIC,
        price: '₹2,900', tagline: 'MagSafe compatible, various colors.', imagePlaceholder: '⚫',
    },
    {
        id: '13A002', name: 'iPhone 13 Heavy Duty Rugged Case', brand: 'Apple', categoryType: CATEGORY_TYPES.IPHONE_13_SPECIFIC,
        price: '₹1,400', tagline: 'Military drop protection.', imagePlaceholder: '🛡️',
    },
    {
        id: '13A003', name: 'iPhone 13 MagSafe Wallet', brand: 'Apple', categoryType: CATEGORY_TYPES.IPHONE_13_SPECIFIC,
        price: '₹3,990', tagline: 'Leather card holder with Find My.', imagePlaceholder: '💳',
    },

    // =========================================================
    // CATEGORY 3: GENERAL APPLE ECOSYSTEM
    // =========================================================
    {
        id: 'AE001', name: 'AirPods Pro 2nd Gen', brand: 'Apple', categoryType: CATEGORY_TYPES.APPLE_GENERAL,
        price: '₹24,900', tagline: 'Active Noise Cancellation.', imagePlaceholder: '🎧',
    },
    {
        id: 'AE002', name: 'Apple Watch SE (2nd Gen)', brand: 'Apple', categoryType: CATEGORY_TYPES.APPLE_GENERAL,
        price: '₹29,900', tagline: 'Fitness tracking and safety features.', imagePlaceholder: '⌚',
    },
    {
        id: 'AE003', name: 'MagSafe Duo Charger', brand: 'Apple', categoryType: CATEGORY_TYPES.APPLE_GENERAL,
        price: '₹11,000', tagline: 'Charge iPhone and Apple Watch simultaneously.', imagePlaceholder: '⚡',
    },
    {
        id: 'AE004', name: 'AirPods Max Over-Ear Headphones', brand: 'Apple', categoryType: CATEGORY_TYPES.APPLE_GENERAL,
        price: '₹54,900', tagline: 'Spatial audio with dynamic head tracking.', imagePlaceholder: '🎧',
    },
    {
        id: 'AE005', name: 'Apple Pencil (2nd Gen)', brand: 'Apple', categoryType: CATEGORY_TYPES.APPLE_GENERAL,
        price: '₹10,900', tagline: 'Magnetic charging for iPad.', imagePlaceholder: '✏️',
    },

    // =========================================================
    // CATEGORY 4: UNIVERSAL ACCESSORIES
    // =========================================================
    {
        id: 'AU001', name: '65W GaN PD Charger (Dual Port)', brand: 'Universal', categoryType: CATEGORY_TYPES.ACCESSORIES_UNIVERSAL,
        price: '₹2,500', tagline: 'Compact and powerful for laptops/mobiles.', imagePlaceholder: '🔌',
    },
    {
        id: 'AU002', name: 'Premium Magnetic Car Mount', brand: 'Universal', categoryType: CATEGORY_TYPES.ACCESSORIES_UNIVERSAL,
        price: '₹950', tagline: 'Strong grip, 360-degree rotation.', imagePlaceholder: '🚗',
    },
    {
        id: 'AU003', name: '10,000 mAh Power Bank (PD)', brand: 'Universal', categoryType: CATEGORY_TYPES.ACCESSORIES_UNIVERSAL,
        price: '₹1,999', tagline: 'High-speed power delivery.', imagePlaceholder: '🔋',
    },
    {
        id: 'AU004', name: 'Pop Sockets / Grips (Assorted)', brand: 'Universal', categoryType: CATEGORY_TYPES.ACCESSORIES_UNIVERSAL,
        price: '₹399', tagline: 'Dozens of designs available in store.', imagePlaceholder: '✨',
    },
    {
        id: 'AU005', name: 'OTG Adapter (Type-C to USB)', brand: 'Universal', categoryType: CATEGORY_TYPES.ACCESSORIES_UNIVERSAL,
        price: '₹250', tagline: 'Connect external drives and peripherals.', imagePlaceholder: '🔗',
    },
    {
        id: 'AU006', name: 'Gaming Finger Sleeves (Set of 4)', brand: 'Universal', categoryType: CATEGORY_TYPES.ACCESSORIES_UNIVERSAL,
        price: '₹150', tagline: 'Sweat-proof, high-sensitivity.', imagePlaceholder: '🎮',
    },
    {
        id: 'AU007', name: 'Wireless Earbuds (TWS, ANC)', brand: 'Universal', categoryType: CATEGORY_TYPES.ACCESSORIES_UNIVERSAL,
        price: '₹1,499', tagline: 'Noise-cancelling true wireless buds.', imagePlaceholder: '🎧',
    },
    {
        id: 'AU008', name: 'Screen Protector Kit (Privacy)', brand: 'Universal', categoryType: CATEGORY_TYPES.ACCESSORIES_UNIVERSAL,
        price: '₹599', tagline: 'Anti-spy tempered glass for all sizes.', imagePlaceholder: '🛡️',
    },

    // =========================================================
    // CATEGORY 5: GENERAL REPAIR PARTS (Multi-Brand Inventory)
    // =========================================================
    // --- SAMSUNG PARTS ---
    {
        id: 'RP001', name: 'Samsung S21 AMOLED Replacement', brand: 'Samsung', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: '₹14,000', tagline: 'Certified service pack display.', imagePlaceholder: '🖥️',
    },
    {
        id: 'RP005', name: 'Samsung Galaxy S23 Battery (OEM)', brand: 'Samsung', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: '₹3,200', tagline: '3900mAh high-capacity replacement.', imagePlaceholder: '🔋',
    },
    {
        id: 'RP006', name: 'Samsung A54 Charging Port Flex', brand: 'Samsung', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: '₹1,100', tagline: 'USB-C connector assembly.', imagePlaceholder: '⚡',
    },
    {
        id: 'RP007', name: 'Samsung S23 Rear Camera Module', brand: 'Samsung', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: '₹8,500', tagline: '50MP main sensor unit.', imagePlaceholder: '📸',
    },
    {
        id: 'RP008', name: 'Samsung Z Fold5 Back Glass', brand: 'Samsung', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: '₹4,500', tagline: 'Foldable hinge-compatible housing.', imagePlaceholder: '🔨',
    },
    {
        id: 'RP009', name: 'Samsung S21 Loudspeaker', brand: 'Samsung', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: '₹1,200', tagline: 'Stereo speaker replacement.', imagePlaceholder: '🔊',
    },

    // --- XIAOMI PARTS ---
    {
        id: 'RP002', name: 'Xiaomi Redmi Note 9 Display Assembly', brand: 'Xiaomi', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: '₹4,500', tagline: 'Full frame replacement screen.', imagePlaceholder: '🖥️',
    },
    {
        id: 'RP010', name: 'Xiaomi Redmi Note 13 Pro Battery', brand: 'Xiaomi', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: '₹1,800', tagline: '5000mAh fast-charging compatible.', imagePlaceholder: '🔋',
    },
    {
        id: 'RP011', name: 'Xiaomi 13 Charging Port Flex', brand: 'Xiaomi', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: '₹900', tagline: 'USB-C with power delivery support.', imagePlaceholder: '⚡',
    },
    {
        id: 'RP012', name: 'Xiaomi Redmi Note 12 Front Camera', brand: 'Xiaomi', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: '₹1,500', tagline: '16MP selfie camera module.', imagePlaceholder: '🤳',
    },
    {
        id: 'RP013', name: 'Xiaomi Mi 11 Back Housing', brand: 'Xiaomi', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: '₹2,500', tagline: 'Ceramic rear panel replacement.', imagePlaceholder: '🔨',
    },
    {
        id: 'RP014', name: 'Xiaomi Poco X3 Pro Earpiece Speaker', brand: 'Xiaomi', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: '₹700', tagline: 'Top speaker for calls and media.', imagePlaceholder: '👂',
    },

    // --- ONEPLUS PARTS ---
    {
        id: 'RP003', name: 'Microphone Flex Cable (Universal USB-C)', brand: 'Universal', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: '₹800', tagline: 'Common replacement for faulty mics.', imagePlaceholder: '🎤',
    },
    {
        id: 'RP004', name: 'Power Button & Volume Flex', brand: 'OnePlus', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: '₹1,200', tagline: 'OEM replacement for various models.', imagePlaceholder: '🔘',
    },
    {
        id: 'RP015', name: 'OnePlus Nord 3 AMOLED Screen', brand: 'OnePlus', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: '₹9,500', tagline: '120Hz fluid display assembly.', imagePlaceholder: '🖥️',
    },
    {
        id: 'RP016', name: 'OnePlus 11 Battery Replacement', brand: 'OnePlus', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: '₹2,800', tagline: '5000mAh SUPERVOOC compatible.', imagePlaceholder: '🔋',
    },
    {
        id: 'RP017', name: 'OnePlus 12 Rear Camera (Main)', brand: 'OnePlus', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: '₹7,000', tagline: '50MP Hasselblad-tuned sensor.', imagePlaceholder: '📸',
    },
    {
        id: 'RP018', name: 'OnePlus Nord CE 3 Lite Back Cover', brand: 'OnePlus', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: '₹1,500', tagline: 'Matte finish housing panel.', imagePlaceholder: '🔨',
    },

    // --- UNIVERSAL REPAIR PARTS ---
    {
        id: 'RP019', name: 'USB-C Charging Board (Universal)', brand: 'Universal', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: '₹650', tagline: 'For Android devices with fast charging.', imagePlaceholder: '⚡',
    },
    {
        id: 'RP020', name: 'Vibration Motor (Haptic Feedback)', brand: 'Universal', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: '₹400', tagline: 'Replacement for silent mode vibration.', imagePlaceholder: '📳',
    },

    // =========================================================
    // CATEGORY 6: TOOLS & EQUIPMENT
    // =========================================================
    {
        id: 'T001', name: 'Precision Screwdriver Set (50-in-1)', brand: 'Universal', categoryType: CATEGORY_TYPES.TOOLS_EQUIPMENT,
        price: '₹1,500', tagline: 'Essential repair kit for tiny screws.', imagePlaceholder: '🛠️',
    },
    {
        id: 'T002', name: 'Suction Cup LCD Separator', brand: 'Universal', categoryType: CATEGORY_TYPES.TOOLS_EQUIPMENT,
        price: '₹300', tagline: 'For safe screen removal.', imagePlaceholder: '⚙️',
    },
    {
        id: 'T003', name: 'Anti-Static Wrist Strap', brand: 'Universal', categoryType: CATEGORY_TYPES.TOOLS_EQUIPMENT,
        price: '₹150', tagline: 'Protects components from static discharge.', imagePlaceholder: '⚡',
    },
    {
        id: 'T004', name: 'iOpener Heat Pad Kit', brand: 'Universal', categoryType: CATEGORY_TYPES.TOOLS_EQUIPMENT,
        price: '₹500', tagline: 'Softens adhesive for disassembly.', imagePlaceholder: '🔥',
    },
    {
        id: 'T005', name: 'Tweezers Set (ESD-Safe)', brand: 'Universal', categoryType: CATEGORY_TYPES.TOOLS_EQUIPMENT,
        price: '₹400', tagline: 'Precision gripping for small parts.', imagePlaceholder: '🔧',
    },
    {
        id: 'T006', name: 'Multimeter Digital Tester', brand: 'Universal', categoryType: CATEGORY_TYPES.TOOLS_EQUIPMENT,
        price: '₹1,200', tagline: 'Tests voltage, continuity, and components.', imagePlaceholder: '⚡',
    },
];


export { productData, availableBrands, CATEGORY_TYPES };