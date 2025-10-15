import React from 'react';
import ServicesSection from '../components/sections/ServicesSection';
import TrustAndProcess from '../components/sections/TrustAndProcess';
import Mainservice from '../components/sections/mainservice'

const Services = () => {
  return (
    <div className="bg-white py-12 sm:py-16">
      <ServicesSection />
      <Mainservice/>
 <TrustAndProcess/>
    </div>
  );
};

export default Services;