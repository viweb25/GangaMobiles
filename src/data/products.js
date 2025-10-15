// src/data/products.js

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
// =========================================================
// 3. Image Imports (FIXED - All imports now use the simple '../assets/' path)
// I have assumed paths for the two missing tool images (displaySeparator and screwdriver-kit)
// =========================================================
import iphone13OLEDImg from '../assets/iphone13-display.png'; 
import samsungBatteryImg from '../assets/samsung-battery.png';
import xiaomiChargingPortImg from '../assets/xiaomi-chargeport.png';
import airpodsImg from '../assets/airpods.jpg'

// *** FIX: Added missing imports for tools ***


// Accessories/Gadgets
import twsEarbudsImg from '../assets/tws-earbuds.jpg'; 
import fastChargerImg from '../assets/fast-charger-adapter.jpg';
import lightningCableImg from '../assets/lightning-cable.jpg';
import usbcCableImg from '../assets/usbc.jpg';
import wiredEarphonesImg from '../assets/wired-earphones.jpg';

const defaultImage = 'https://via.placeholder.com/200x150?text=Product+Image'; 

// --- 4. Product Data Array ---
const productData = [
    // =========================================================
    // CATEGORY 1: REPAIR PARTS - DISPLAYS & GLASS
    // =========================================================
    {
        id: 'RP001', name: 'Original Quality iPhone 13 OLED Display', brand: 'Apple', categoryType: CATEGORY_TYPES.IPHONE_13_SPECIFIC,
        price: 'Request via WhatsApp', tagline: 'High-grade replacement OLED, True Tone compatible.', 
        imagePlaceholder: '📱', imageUrl: iphone13OLEDImg || defaultImage,
        whatsappRequest: 'Price for iPhone 13 OLED',
    },
    {
        id: 'RP002', name: 'Samsung Galaxy A52 Glass/Digitizer', brand: 'Samsung', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: 'Request via WhatsApp', tagline: 'Outer glass replacement for A52 series.', 
        imagePlaceholder: '🔨', imageUrl: defaultImage, // No specific image provided
        whatsappRequest: 'Price for A52 Glass',
    },
    
    // =========================================================
    // CATEGORY 2: REPAIR PARTS - BATTERIES & PORTS
    // =========================================================
    {
        id: 'RP003', name: 'High Capacity Samsung S21 Battery', brand: 'Samsung', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: 'Request via WhatsApp', tagline: 'Zero-cycle battery for extended backup.', 
        imagePlaceholder: '🔋', imageUrl: samsungBatteryImg || defaultImage,
        whatsappRequest: 'Price for S21 Battery',
    },
    {
        id: 'RP004', name: 'OnePlus 8T Charging Port Flex Assembly', brand: 'OnePlus', categoryType: CATEGORY_TYPES.REPAIR_PARTS_GENERAL,
        price: 'Request via WhatsApp', tagline: 'Complete assembly for Warp Charge fix.', 
        imagePlaceholder: '🔌', imageUrl: xiaomiChargingPortImg || defaultImage, 
        whatsappRequest: 'Price for OnePlus 8T Port',
    },
    
    // =========================================================
    // CATEGORY 3: TOOLS & EQUIPMENT
    // =========================================================
    // {
    //     id: 'EQ001', name: 'Precision Mobile Repair Tool Kit (38-in-1)', brand: 'Universal', categoryType: CATEGORY_TYPES.TOOLS_EQUIPMENT,
    //     price: 'Request via WhatsApp', tagline: 'Essential kit with Pentalobe and Tri-wing bits.', 
    //     imagePlaceholder: '🔧', imageUrl: precisionScrewdriverImg || defaultImage,
    //     whatsappRequest: 'Price for 38-in-1 Tool Kit',
    // },
    // {
    //     id: 'EQ002', name: 'Digital Display Separator Machine', brand: 'Universal', categoryType: CATEGORY_TYPES.TOOLS_EQUIPMENT,
    //     price: 'Request via WhatsApp', tagline: 'Hot plate for safely removing cracked screens.', 
    //     imagePlaceholder: '⚙️', imageUrl: displaySeparatorImg || defaultImage,
    //     whatsappRequest: 'Price for Display Separator',
    // },

    // =========================================================
    // CATEGORY 4: CORE GADGETS (Earbuds, Chargers, Cables)
    // =========================================================
    
    // --- Earphones & Earbuds ---
    {
        id: 'AC001', name: 'Premium TWS Earbuds Pro', brand: 'Universal', categoryType: CATEGORY_TYPES.ACCESSORIES_UNIVERSAL,
        price: 'Request via WhatsApp', tagline: 'Active Noise Cancellation (ANC), 24hr battery life.', 
        imagePlaceholder: '🎧', imageUrl: twsEarbudsImg || defaultImage,
        whatsappRequest: 'Price for Premium TWS Earbuds',
    },
    {
        id: 'AC002', name: 'Wired Earphones with Mic (Type C)', brand: 'Universal', categoryType: CATEGORY_TYPES.ACCESSORIES_UNIVERSAL,
        price: 'Request via WhatsApp', tagline: 'Durable braided cable, great for gaming and calls.', 
        imagePlaceholder: '🎤', imageUrl: wiredEarphonesImg || defaultImage,
        whatsappRequest: 'Price for Wired Type C Earphones',
    },
    {
        id: 'AC003', name: 'AirPods Pro 2 (Refurbished)', brand: 'Apple', categoryType: CATEGORY_TYPES.APPLE_GENERAL,
        price: 'Request via WhatsApp', tagline: 'Certified refurbished Apple earbuds with warranty.', 
        imagePlaceholder: '🍎🎧', imageUrl: airpodsImg || defaultImage,
        whatsappRequest: 'Price for Refurbished AirPods Pro 2',
    },
    
    // --- Chargers & Cables ---
    {
        id: 'AC004', name: '65W GaN Fast Charger Adapter', brand: 'Universal', categoryType: CATEGORY_TYPES.ACCESSORIES_UNIVERSAL,
        price: 'Request via WhatsApp', tagline: 'Compact size, supports PD and QC for all devices.', 
        imagePlaceholder: '⚡', imageUrl: fastChargerImg || defaultImage,
        whatsappRequest: 'Price for 65W GaN Charger',
    },
    {
        id: 'AC005', name: 'MFi Certified Lightning Cable (2M)', brand: 'Apple', categoryType: CATEGORY_TYPES.APPLE_GENERAL,
        price: 'Request via WhatsApp', tagline: 'Guaranteed compatibility and safe charging for iPhones.', 
        imagePlaceholder: '🔗', imageUrl: lightningCableImg || defaultImage,
        whatsappRequest: 'Price for MFi Lightning Cable',
    },
    {
        id: 'AC006', name: 'Durable USB-C to USB-C Cable (100W)', brand: 'Universal', categoryType: CATEGORY_TYPES.ACCESSORIES_UNIVERSAL,
        price: 'Request via WhatsApp', tagline: 'High-speed data and fast charging for Android/laptops.', 
        imagePlaceholder: '🔗', imageUrl: usbcCableImg || defaultImage,
        whatsappRequest: 'Price for 100W USB-C Cable',
    },
];

export { productData, availableBrands, CATEGORY_TYPES };