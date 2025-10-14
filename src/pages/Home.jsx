// src/pages/Home.jsx (Updated)

import React from 'react';
import HeroSlider from '../components/sections/HeroSlider';
import ServicesSection from '../components/sections/ServicesSection';
import TrustAndProcess from '../components/sections/TrustAndProcess';
import BrandShowcase from '../components/sections/BrandShowcase';
import Testimonials from '../components/sections/Testimonials'; // <-- NEW IMPORT
import CtaBanner from '../components/sections/CallToAction';
import Gadjets from '../components/sections/GadgetsSection'
// import LocationContactBlock from '../components/sections/LocationContactBlock';
const Home = () => {
    return (
        <div>
            <HeroSlider />
            
            <ServicesSection  />
            <Gadjets/>
             <TrustAndProcess />
            <BrandShowcase/> 
            <Testimonials/> {/* <-- NEW SECTION ADDED */}
            {/* <LocationContactBlock/> */}
           
             <CtaBanner/>
        </div>
    );
};

export default Home;