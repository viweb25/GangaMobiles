// --- 1. Product Categories/Types ---
const CATEGORY_TYPES = {
    MOBILES: 'Mobiles for Sale',
    IPHONE_13_SPECIFIC: 'iPhone 13 Spares & Accessories',
    APPLE_GENERAL: 'General Apple Ecosystem',
    ACCESSORIES_UNIVERSAL: 'Universal Accessories',
    REPAIR_PARTS_GENERAL: 'General Repair Parts',
    TOOLS_EQUIPMENT: 'Tools & Equipment',
    MOBILE_GADGETS: 'Mobile Gadgets', // Retained for new style
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

// --- 3. Product Data Array (The Shop Inventory - Prices on WhatsApp Request) ---
const productData = [
    // ... (Previous product data remains unchanged)

    // =========================================================
    // CATEGORY 7: MOBILE GADGETS (Premium Accessories - Price on WhatsApp)
    // =========================================================
    {
        id: 'MG001', name: 'Smart Wireless Charging Hub', brand: 'Universal', categoryType: CATEGORY_TYPES.MOBILE_GADGETS,
        price: 'Request via WhatsApp', tagline: 'Sleek 3-device charging with ambient LED, fits all mobiles.', imagePlaceholder: '⚡',
        whatsappRequest: 'Send "Price for Charging Hub" to +919176100072',
    },
    {
        id: 'MG002', name: 'Compact 4K Action Cam Pro', brand: 'Universal', categoryType: CATEGORY_TYPES.MOBILE_GADGETS,
        price: 'Request via WhatsApp', tagline: 'Water-resistant, 4K UHD, pairs with any smartphone.', imagePlaceholder: '📹',
        whatsappRequest: 'Send "Price for 4K Action Cam" to +919176100072',
    },
    {
        id: 'MG003', name: 'Adjustable LED Ring Light Stand', brand: 'Universal', categoryType: CATEGORY_TYPES.MOBILE_GADGETS,
        price: 'Request via WhatsApp', tagline: 'Three brightness levels, perfect for content creation.', imagePlaceholder: '💡',
        whatsappRequest: 'Send "Price for LED Ring Light" to +919176100072',
    },
    {
        id: 'MG004', name: 'Bluetooth Selfie Stick & Tripod', brand: 'Universal', categoryType: CATEGORY_TYPES.MOBILE_GADGETS,
        price: 'Request via WhatsApp', tagline: 'Extendable, wireless shutter, universal mobile compatibility.', imagePlaceholder: '📸',
        whatsappRequest: 'Send "Price for Selfie Stick" to +919176100072',
    },
    {
        id: 'MG005', name: 'Smart Key & Wallet Finder', brand: 'Universal', categoryType: CATEGORY_TYPES.MOBILE_GADGETS,
        price: 'Request via WhatsApp', tagline: 'Bluetooth tracking, syncs with mobile for easy location.', imagePlaceholder: '🔍',
        whatsappRequest: 'Send "Price for Key Finder" to +919176100072',
    },
    {
        id: 'MG006', name: 'Pro Mobile Gaming Pad', brand: 'Universal', categoryType: CATEGORY_TYPES.MOBILE_GADGETS,
        price: 'Request via WhatsApp', tagline: 'Ergonomic grip, low-latency, works with all gaming apps.', imagePlaceholder: '🎮',
        whatsappRequest: 'Send "Price for Gaming Pad" to +919176100072',
    },
    {
        id: 'MG007', name: 'Portable HD Projector', brand: 'Universal', categoryType: CATEGORY_TYPES.MOBILE_GADGETS,
        price: 'Request via WhatsApp', tagline: 'Crisp 1080p projection from mobile, ideal for outdoor use.', imagePlaceholder: '🎥',
        whatsappRequest: 'Send "Price for HD Projector" to +919176100072',
    },
    {
        id: 'MG008', name: 'Fitness Sleep Monitor Band', brand: 'Universal', categoryType: CATEGORY_TYPES.MOBILE_GADGETS,
        price: 'Request via WhatsApp', tagline: 'Tracks sleep and activity, syncs with health apps.', imagePlaceholder: '⌚',
        whatsappRequest: 'Send "Price for Sleep Monitor" to +919176100072',
    },
    {
        id: 'MG009', name: 'Magnetic Dashboard Car Holder', brand: 'Universal', categoryType: CATEGORY_TYPES.MOBILE_GADGETS,
        price: 'Request via WhatsApp', tagline: 'Strong magnet, 360° adjustable, fits all mobile sizes.', imagePlaceholder: '🚗',
        whatsappRequest: 'Send "Price for Car Holder" to +919176100072',
    },
    {
        id: 'MG010', name: 'Smart LED Task Lamp', brand: 'Universal', categoryType: CATEGORY_TYPES.MOBILE_GADGETS,
        price: 'Request via WhatsApp', tagline: 'Dimmable light with integrated mobile holder.', imagePlaceholder: '💡',
        whatsappRequest: 'Send "Price for Task Lamp" to +919176100072',
    },
];

// ... (Previous export remains unchanged)

export { productData, availableBrands, CATEGORY_TYPES };