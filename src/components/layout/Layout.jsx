import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; // Assuming Footer is in the same directory as Header

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow">{children}</main>
      
      {/* The separate Footer component is now included here */}
      <Footer />
    </div>
  );
};

export default Layout;