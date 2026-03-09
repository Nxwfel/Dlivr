import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Partners from './components/Partners';
import WhyChooseUs from './components/WhyChooseUs';

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Partners />
      <WhyChooseUs />
    </div>
  );
}

export default App;
