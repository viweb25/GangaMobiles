import React  from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Services from './pages/Services';
import Quote from './pages/Quote';
import Products from './pages/Products';
import About from './pages/About';
import Locations from './pages/Locations';
import Login from './pages/Login';
import Contact from './components/Contact';
import ScrollTop from './utils/scrollTop';



function App() {

  
  return (
    <BrowserRouter>
    <ScrollTop/>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/products" element={<Products />} />
          <Route path="/quote" element={<Quote />} />
          <Route path="/about" element={<About />} />
          <Route path="/locations" element={<Locations />} />
          // Example Route Setup (Conceptual)
      <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<h1 className="p-20 text-center text-4xl text-gray-800">404 - Page Not Found</h1>} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;